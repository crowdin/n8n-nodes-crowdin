import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import type { ApiConfig, LoadOptionsConfig, LoadOptionsMethods, ApiItem, ApiDataWrapper, ApiError } from './types';
import {
	getProjectId,
	getGlossaryId,
	getScreenshotId,
	getFileId,
	getCommentId,
	getApplicationIdentifier,
} from './helpers';

export * from './types';
export * from './helpers';

const PAGE_SIZE = 500;

/**
 * Extract error message from Crowdin API error response
 */
function extractErrorMessage(error: unknown): string {
	const err = error as ApiError;
	// Try to parse JSON from description (n8n sometimes puts response body here)
	if (err?.description) {
		try {
			const parsed = JSON.parse(err.description);
			if (parsed?.error?.message) {
				return parsed.error.message;
			}
		} catch {
			// Not JSON, use as-is if it's a meaningful string
			if (typeof err.description === 'string' && err.description.length > 0) {
				return err.description;
			}
		}
	}
	// Handle Crowdin API error format: { error: { message: "...", code: 403 } }
	if (err?.cause?.error?.message) {
		return err.cause.error.message;
	}
	// Handle response body error format
	if (typeof err?.response?.body === 'object' && err?.response?.body?.error?.message) {
		return err.response.body.error.message;
	}
	// Handle cause with response body
	if (err?.cause?.response?.body) {
		try {
			const body = typeof err.cause.response.body === 'string' 
				? JSON.parse(err.cause.response.body) 
				: err.cause.response.body;
			if (body?.error?.message) {
				return body.error.message;
			}
		} catch {
			// Ignore parse errors
		}
	}
	// Handle direct error object
	if (err?.error?.message) {
		return err.error.message;
	}
	// Handle standard Error (but not generic n8n messages)
	if (err?.message && typeof err.message === 'string') {
		// Skip generic n8n error messages
		if (!err.message.includes('perhaps check your credentials')) {
			return err.message;
		}
	}
	// Fallback
	return 'Unknown error occurred while loading options';
}

/**
 * Fetch a single resource from the API
 */
async function fetchSingle<T = ApiItem>(
	context: ILoadOptionsFunctions,
	config: ApiConfig,
	endpoint: string,
): Promise<T> {
	const credentialName = config.getCredentialName(context);
	const baseUrl = await config.getBaseUrl(context);

	try {
		const response = await context.helpers.requestWithAuthentication.call(
			context,
			credentialName,
			{
				method: 'GET',
				url: `${baseUrl}${endpoint}`,
				json: true,
			},
		) as ApiDataWrapper<T>;

		return response.data;
	} catch (error: unknown) {
		throw new Error(extractErrorMessage(error));
	}
}

// Maximum items to fetch in load options methods for performance
const MAX_LOAD_OPTIONS_ITEMS = 5000;

/**
 * Fetch all pages of a resource from the API (raw data)
 * Limited to MAX_LOAD_OPTIONS_ITEMS for performance
 * @param flat - If true, expects flat response { data: [item] } instead of nested { data: [{ data: item }] }
 */
async function fetchAllPagesRaw<T = ApiItem>(
	context: ILoadOptionsFunctions,
	config: ApiConfig,
	endpoint: string,
	extraQs?: Record<string, unknown>,
	flat = false,
): Promise<T[]> {
	const credentialName = config.getCredentialName(context);
	const baseUrl = await config.getBaseUrl(context);
	const results: T[] = [];
	let offset = 0;
	let hasMore = true;

	try {
		while (hasMore) {
			const response = await context.helpers.requestWithAuthentication.call(
				context,
				credentialName,
				{
					method: 'GET',
					url: `${baseUrl}${endpoint}`,
					qs: { limit: PAGE_SIZE, offset, ...extraQs },
					json: true,
				},
			) as { data: Array<ApiDataWrapper<T>> | T[] };

			if (flat) {
				results.push(...(response.data as T[]));
			} else {
				results.push(...(response.data as Array<ApiDataWrapper<T>>).map((item) => item.data));
			}
			hasMore = response.data.length === PAGE_SIZE;
			offset += PAGE_SIZE;
			
			// Stop if we've reached the max items limit
			if (results.length >= MAX_LOAD_OPTIONS_ITEMS) {
				return results.slice(0, MAX_LOAD_OPTIONS_ITEMS);
			}
		}
	} catch (error: unknown) {
		throw new Error(extractErrorMessage(error));
	}

	return results;
}

/**
 * Fetch all pages and convert to node property options
 */
async function fetchAllPages(
	context: ILoadOptionsFunctions,
	config: ApiConfig,
	optionsConfig: LoadOptionsConfig,
): Promise<INodePropertyOptions[]> {
	const { endpoint, nameField = 'name', valueField = 'id', includeEmpty = true } = optionsConfig;
	const items = await fetchAllPagesRaw<ApiItem>(context, config, endpoint);
	const options = items.map((item) => ({
		name: String(item[nameField]),
		value: item[valueField] as string | number,
	}));
	// Add empty option at the beginning for optional fields (not for multiOptions)
	if (includeEmpty) {
		return [{ name: '-', value: '' }, ...options];
	}
	return options;
}

type MethodConfig = Omit<LoadOptionsConfig, 'includeEmpty'>;

/**
 * Truncate text for display in dropdown options
 */
function truncateText(text: string, maxLength = 50): string {
	return text.length > maxLength 
		? text.substring(0, maxLength - 3) + '...' 
		: text;
}

/**
 * Format item with text and ID for display: "{text} (ID: {id})"
 */
function formatTextWithId(item: ApiItem, getText: (item: ApiItem) => string): INodePropertyOptions {
	const displayText = truncateText(getText(item));
	return {
		name: `${displayText} (ID: ${item.id})`,
		value: item.id,
	};
}

/**
 * Create a pair of load options methods with custom text formatting
 * Used for resources where text can be non-unique and needs "{text} (ID: {id})" format
 */
function createTextFormattedMethodPair(
	config: ApiConfig,
	getEndpoint: (context: ILoadOptionsFunctions) => string | null,
	getText: (item: ApiItem) => string,
): { regular: (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]>; multi: (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]> } {
	return {
		regular: async function (this: ILoadOptionsFunctions) {
			const endpoint = getEndpoint(this);
			if (!endpoint || endpoint.includes('null')) {
				return [{ name: '-', value: '' }];
			}
			const items = await fetchAllPagesRaw<ApiItem>(this, config, endpoint);
			const options = items.map((item) => formatTextWithId(item, getText));
			return [{ name: '-', value: '' }, ...options];
		},
		multi: async function (this: ILoadOptionsFunctions) {
			const endpoint = getEndpoint(this);
			if (!endpoint || endpoint.includes('null')) {
				return [];
			}
			const items = await fetchAllPagesRaw<ApiItem>(this, config, endpoint);
			return items.map((item) => formatTextWithId(item, getText));
		},
	};
}

/**
 * Create a pair of load options methods (regular with '-' and multi without)
 */
function createMethodPair(
	config: ApiConfig,
	methodConfig: MethodConfig,
): { regular: (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]>; multi: (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]> } {
	return {
		regular: async function (this: ILoadOptionsFunctions) {
			return fetchAllPages(this, config, { ...methodConfig, includeEmpty: true });
		},
		multi: async function (this: ILoadOptionsFunctions) {
			return fetchAllPages(this, config, { ...methodConfig, includeEmpty: false });
		},
	};
}

/**
 * Create a pair of load options methods with dynamic endpoint
 * Returns empty array if endpoint contains 'null' (dependent parameter not yet set)
 */
function createDynamicMethodPair(
	config: ApiConfig,
	getEndpoint: (context: ILoadOptionsFunctions) => string | null,
	methodConfig?: Omit<MethodConfig, 'endpoint'>,
): { regular: (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]>; multi: (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]> } {
	return {
		regular: async function (this: ILoadOptionsFunctions) {
			const endpoint = getEndpoint(this);
			// Return empty with placeholder if dependent parameter not set
			if (!endpoint || endpoint.includes('null')) {
				return [{ name: '-', value: '' }];
			}
			return fetchAllPages(this, config, { endpoint, ...methodConfig, includeEmpty: true });
		},
		multi: async function (this: ILoadOptionsFunctions) {
			const endpoint = getEndpoint(this);
			// Return empty array if dependent parameter not set
			if (!endpoint || endpoint.includes('null')) {
				return [];
			}
			return fetchAllPages(this, config, { endpoint, ...methodConfig, includeEmpty: false });
		},
	};
}

/**
 * Create common load options methods for both Crowdin and Enterprise
 */
export function createCommonLoadOptions(config: ApiConfig): LoadOptionsMethods {
	// Create method pairs for resources that need both versions
	const projects = createMethodPair(config, { endpoint: '/projects' });
	const languages = createMethodPair(config, { endpoint: '/languages' });
	const mtEngines = createMethodPair(config, { endpoint: '/mts' });
	const translationMemories = createMethodPair(config, { endpoint: '/tms' });
	const glossaries = createMethodPair(config, { endpoint: '/glossaries' });
	const storages = createMethodPair(config, { endpoint: '/storages', nameField: 'fileName' });
	const organizationWebhooks = createMethodPair(config, { endpoint: '/webhooks' });
	const applicationInstallations = createMethodPair(config, { endpoint: '/applications/installations', nameField: 'name', valueField: 'identifier' });

	// Project-scoped resources
	const branches = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/branches`);
	const projectFiles = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/files`, { nameField: 'path' });
	const projectDirectories = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/directories`);
	const projectLabels = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/labels`, { nameField: 'title' });
	const projectMembers = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/members`, { nameField: 'username' });
	const projectScreenshots = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/screenshots`);
	const projectBundles = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/bundles`);
	const projectDistributions = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/distributions`, { valueField: 'hash' });
	const projectTasks = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/tasks`, { nameField: 'title' });
	const projectFileFormatSettings = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/file-format-settings`);
	const projectBuilds = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/translations/builds`, { nameField: 'id' });
	const projectReviewedBuilds = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/strings/reviewed-builds`, { nameField: 'id' });
	const projectApprovals = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/approvals`, { nameField: 'id' });
	const projectVotes = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/votes`, { nameField: 'id' });
	const projectTaskSettingsTemplates = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/tasks/settings-templates`);
	const projectWebhooks = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/webhooks`);
	const projectStringsExporterSettings = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/strings-exporter-settings`, { nameField: 'format' });

	// File-scoped resources
	const fileReferences = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/files/${getFileId(ctx)}/references`);
	const fileRevisions = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/files/${getFileId(ctx)}/revisions`, { nameField: 'id' });

	// Glossary-scoped resources
	const glossaryConcepts = createDynamicMethodPair(config, (ctx) => `/glossaries/${getGlossaryId(ctx)}/concepts`, { nameField: 'id' });
	const glossaryTerms = createDynamicMethodPair(config, (ctx) => `/glossaries/${getGlossaryId(ctx)}/terms`, { nameField: 'text' });

	// Screenshot-scoped resources
	const screenshotTags = createDynamicMethodPair(config, (ctx) => `/projects/${getProjectId(ctx)}/screenshots/${getScreenshotId(ctx)}/tags`, { nameField: 'id' });

	// Integration-scoped resources (Crowdin Apps API)
	// Uses flat response format { data: [item] } instead of { data: [{ data: item }] }
	const integrationCrowdinFiles = {
		regular: async function (this: ILoadOptionsFunctions) {
			const appId = getApplicationIdentifier(this);
			const projectId = getProjectId(this);
			if (!appId || !projectId) {
				return [{ name: '-', value: '' }];
			}
			const items = await fetchAllPagesRaw<ApiItem>(this, config, `/applications/${appId}/api/crowdin-files`, { projectId }, true);
			const options = items
				.filter((item) => item.type !== undefined)
				.map((item) => ({
					name: String(item.name),
					value: item.id as string | number,
				}));
			return [{ name: '-', value: '' }, ...options];
		},
		multi: async function (this: ILoadOptionsFunctions) {
			const appId = getApplicationIdentifier(this);
			const projectId = getProjectId(this);
			if (!appId || !projectId) {
				return [];
			}
			const items = await fetchAllPagesRaw<ApiItem>(this, config, `/applications/${appId}/api/crowdin-files`, { projectId }, true);
			return items
				.filter((item) => item.type !== undefined)
				.map((item) => ({
					name: String(item.name),
					value: item.id as string | number,
				}));
		},
	};

	// Text-formatted resources (need "{text} (ID: {id})" format because text can be non-unique)
	const projectStrings = createTextFormattedMethodPair(
		config,
		(ctx) => `/projects/${getProjectId(ctx)}/strings`,
		(item) => {
			// Text can be string or object (plural forms)
			const textValue = item.text;
			if (typeof textValue === 'object' && textValue !== null) {
				// For plural forms, show the first available form
				const textObj = textValue as Record<string, string>;
				const firstKey = Object.keys(textObj)[0];
				return String(textObj[firstKey]);
			}
			return String(textValue);
		},
	);
	const projectComments = createTextFormattedMethodPair(
		config,
		(ctx) => `/projects/${getProjectId(ctx)}/comments`,
		(item) => String(item.text),
	);

	return {
		// ===== Account/Organization-level resources =====
		getProjects: projects.regular,
		getProjectsMulti: projects.multi,
		getLanguages: languages.regular,
		getLanguagesMulti: languages.multi,
		getMTEngines: mtEngines.regular,
		getMTEnginesMulti: mtEngines.multi,
		getTranslationMemories: translationMemories.regular,
		getTranslationMemoriesMulti: translationMemories.multi,
		getGlossaries: glossaries.regular,
		getGlossariesMulti: glossaries.multi,
		getStorages: storages.regular,
		getStoragesMulti: storages.multi,
		getOrganizationWebhooks: organizationWebhooks.regular,
		getOrganizationWebhooksMulti: organizationWebhooks.multi,
		getApplicationInstallations: applicationInstallations.regular,
		getApplicationInstallationsMulti: applicationInstallations.multi,

		// ===== Project-scoped resources =====
		getBranches: branches.regular,
		getBranchesMulti: branches.multi,
		getProjectFiles: projectFiles.regular,
		getProjectFilesMulti: projectFiles.multi,
		getProjectDirectories: projectDirectories.regular,
		getProjectDirectoriesMulti: projectDirectories.multi,
		getProjectLabels: projectLabels.regular,
		getProjectLabelsMulti: projectLabels.multi,
		getProjectMembers: projectMembers.regular,
		getProjectMembersMulti: projectMembers.multi,
		getProjectScreenshots: projectScreenshots.regular,
		getProjectScreenshotsMulti: projectScreenshots.multi,
		getProjectBundles: projectBundles.regular,
		getProjectBundlesMulti: projectBundles.multi,
		getProjectDistributions: projectDistributions.regular,
		getProjectDistributionsMulti: projectDistributions.multi,
		getProjectTasks: projectTasks.regular,
		getProjectTasksMulti: projectTasks.multi,
		getProjectFileFormatSettings: projectFileFormatSettings.regular,
		getProjectFileFormatSettingsMulti: projectFileFormatSettings.multi,
		getProjectBuilds: projectBuilds.regular,
		getProjectBuildsMulti: projectBuilds.multi,
		getProjectReviewedBuilds: projectReviewedBuilds.regular,
		getProjectReviewedBuildsMulti: projectReviewedBuilds.multi,
		getProjectApprovals: projectApprovals.regular,
		getProjectApprovalsMulti: projectApprovals.multi,
		getProjectVotes: projectVotes.regular,
		getProjectVotesMulti: projectVotes.multi,
		getProjectTaskSettingsTemplates: projectTaskSettingsTemplates.regular,
		getProjectTaskSettingsTemplatesMulti: projectTaskSettingsTemplates.multi,
		getProjectWebhooks: projectWebhooks.regular,
		getProjectWebhooksMulti: projectWebhooks.multi,
		getProjectStringsExporterSettings: projectStringsExporterSettings.regular,
		getProjectStringsExporterSettingsMulti: projectStringsExporterSettings.multi,

		// ===== File-scoped resources =====
		getFileReferences: fileReferences.regular,
		getFileReferencesMulti: fileReferences.multi,
		getFileRevisions: fileRevisions.regular,
		getFileRevisionsMulti: fileRevisions.multi,

		// ===== Glossary-scoped resources =====
		getGlossaryConcepts: glossaryConcepts.regular,
		getGlossaryConceptsMulti: glossaryConcepts.multi,
		getGlossaryTerms: glossaryTerms.regular,
		getGlossaryTermsMulti: glossaryTerms.multi,

		// ===== Screenshot-scoped resources =====
		getScreenshotTags: screenshotTags.regular,
		getScreenshotTagsMulti: screenshotTags.multi,

		// ===== Integration-scoped resources (Crowdin Apps API) =====
		getIntegrationCrowdinFiles: integrationCrowdinFiles.regular,
		getIntegrationCrowdinFilesMulti: integrationCrowdinFiles.multi,

		// ===== Text-formatted resources =====
		getProjectStrings: projectStrings.regular,
		getProjectStringsMulti: projectStrings.multi,
		getProjectComments: projectComments.regular,
		getProjectCommentsMulti: projectComments.multi,

		// ===== Special methods that can't use the pattern =====

		async getCommentAttachments(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const projectId = getProjectId(this);
			const commentId = getCommentId(this);
			if (!projectId || !commentId) {
				return [{ name: '-', value: '' }];
			}
			interface CommentWithAttachments extends ApiItem {
				attachments?: Array<{ id: number; name: string }>;
			}
			const comment = await fetchSingle<CommentWithAttachments>(this, config, `/projects/${projectId}/comments/${commentId}`);
			const attachments = comment.attachments || [];
			const options = attachments.map((attachment) => ({
				name: attachment.name,
				value: attachment.id,
			}));
			return [{ name: '-', value: '' }, ...options];
		},
	};
}
