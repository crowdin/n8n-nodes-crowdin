import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import type { ApiConfig, LoadOptionsConfig, ApiItem, ApiDataWrapper, ApiError } from '../common/types';
import { createCommonLoadOptions, getProjectId, getTmId, getAiProviderId, getTeamId } from '../common';

const PAGE_SIZE = 500;

/**
 * Crowdin Enterprise API configuration
 */
const enterpriseConfig: ApiConfig = {
	getBaseUrl: async (context: ILoadOptionsFunctions) => {
		const credentialName = enterpriseConfig.getCredentialName(context);
		const credentials = await context.getCredentials(credentialName);
		const organization = credentials.organization as string;
		return `https://${organization}.api.crowdin.com/api/v2`;
	},
	getCredentialName: (context: ILoadOptionsFunctions) => {
		const authType = context.getNodeParameter('authentication', 0) as string;
		return authType === 'oAuth2' ? 'crowdinEnterpriseOAuth2Api' : 'crowdinEnterpriseApi';
	},
};

/**
 * Extract error message from Crowdin API error response
 */
function extractErrorMessage(error: unknown): string {
	const err = error as ApiError;
	// n8n's NodeApiError stores the actual API message in 'description'
	if (err?.description && typeof err.description === 'string') {
		return err.description;
	}
	
	// Handle Crowdin API error format: { error: { message: "...", code: 403 } }
	if (err?.cause?.error?.message) {
		return err.cause.error.message;
	}
	
	// Handle response body error format
	if (typeof err?.response?.body === 'object' && err?.response?.body?.error?.message) {
		return err.response.body.error.message;
	}
	
	// Fallback to standard error message
	if (err?.message && typeof err.message === 'string') {
		return err.message;
	}
	
	return 'Unknown error occurred while loading options';
}

// Maximum items to fetch in load options methods for performance
const MAX_LOAD_OPTIONS_ITEMS = 5000;

/**
 * Fetch all pages and convert to node property options
 * Limited to MAX_LOAD_OPTIONS_ITEMS for performance
 */
async function fetchAllPages(
	context: ILoadOptionsFunctions,
	config: LoadOptionsConfig,
): Promise<INodePropertyOptions[]> {
	const { endpoint, nameField = 'name', valueField = 'id', includeEmpty = true } = config;
	const credentialName = enterpriseConfig.getCredentialName(context);
	const baseUrl = await enterpriseConfig.getBaseUrl(context);
	const results: ApiItem[] = [];
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
					qs: { limit: PAGE_SIZE, offset },
					json: true,
				},
			) as { data: Array<ApiDataWrapper<ApiItem>> };

			results.push(...response.data.map((item) => item.data));
			hasMore = response.data.length === PAGE_SIZE;
			offset += PAGE_SIZE;
			
			// Stop if we've reached the max items limit
			if (results.length >= MAX_LOAD_OPTIONS_ITEMS) {
				break;
			}
		}
	} catch (error: unknown) {
		// Extract the actual API error message and throw a clean Error
		const message = extractErrorMessage(error);
		const cleanError = new Error(String(message));
		cleanError.name = 'CrowdinApiError';
		throw cleanError;
	}

	const limitedResults = results.slice(0, MAX_LOAD_OPTIONS_ITEMS);
	const options = limitedResults.map((item) => ({
		name: String(item[nameField]),
		value: item[valueField] as string | number,
	}));
	// Add empty option at the beginning for optional single-select fields
	if (includeEmpty) {
		return [{ name: '-', value: '' }, ...options];
	}
	return options;
}

/**
 * Create method pair (regular with '-' placeholder, multi without)
 */
function createMethodPair(config: Omit<LoadOptionsConfig, 'includeEmpty'>) {
	return {
		regular: async function (this: ILoadOptionsFunctions) {
			return fetchAllPages(this, { ...config, includeEmpty: true });
		},
		multi: async function (this: ILoadOptionsFunctions) {
			return fetchAllPages(this, { ...config, includeEmpty: false });
		},
	};
}

/**
 * Create dynamic method pair with endpoint that depends on context
 * Returns empty array if endpoint contains 'null' (dependent parameter not yet set)
 */
function createDynamicMethodPair(
	getEndpoint: (context: ILoadOptionsFunctions) => string | null,
	config?: Omit<LoadOptionsConfig, 'endpoint' | 'includeEmpty'>,
) {
	return {
		regular: async function (this: ILoadOptionsFunctions) {
			const endpoint = getEndpoint(this);
			// Return empty with placeholder if dependent parameter not set
			if (!endpoint || endpoint.includes('null')) {
				return [{ name: '-', value: '' }];
			}
			return fetchAllPages(this, { endpoint, ...config, includeEmpty: true });
		},
		multi: async function (this: ILoadOptionsFunctions) {
			const endpoint = getEndpoint(this);
			// Return empty array if dependent parameter not set
			if (!endpoint || endpoint.includes('null')) {
				return [];
			}
			return fetchAllPages(this, { endpoint, ...config, includeEmpty: false });
		},
	};
}

// Create common load options with Enterprise config
const commonOptions = createCommonLoadOptions(enterpriseConfig);

// Create method pairs for Enterprise-specific resources
const groups = createMethodPair({ endpoint: '/groups' });
const users = createMethodPair({ endpoint: '/users', nameField: 'username' });
const workflowTemplates = createMethodPair({ endpoint: '/workflow-templates', nameField: 'title' });
const teams = createMethodPair({ endpoint: '/teams' });
const customSpellcheckers = createMethodPair({ endpoint: '/custom-spellcheckers' });
const externalQaChecks = createMethodPair({ endpoint: '/external-qa-checks' });
const fields = createMethodPair({ endpoint: '/fields' });
const vendors = createMethodPair({ endpoint: '/vendors' });
const securityLogs = createMethodPair({ endpoint: '/security-logs', nameField: 'event' });
const customQaChecks = createMethodPair({ endpoint: '/custom-qa-checks', nameField: 'title' });
const aiPrompts = createMethodPair({ endpoint: '/ai/prompts' });
const aiProviders = createMethodPair({ endpoint: '/ai/providers' });
const aiSnippets = createMethodPair({ endpoint: '/ai/settings/snippets', nameField: 'placeholder' });
// AI Snippets by placeholder value (for AI Prompt snippets field which needs placeholder strings, not IDs)
const aiSnippetsByPlaceholder = createMethodPair({ endpoint: '/ai/settings/snippets', nameField: 'placeholder', valueField: 'placeholder' });
const reportArchives = createMethodPair({ endpoint: '/reports/archives' });
const reportSettingsTemplates = createMethodPair({ endpoint: '/reports/settings-templates' });

// Project-scoped method pairs
const projectWorkflowSteps = createDynamicMethodPair(
	(ctx) => `/projects/${getProjectId(ctx)}/workflow-steps`,
	{ nameField: 'title' },
);

// TM-scoped method pairs
const tmSegments = createDynamicMethodPair(
	(ctx) => `/tms/${getTmId(ctx)}/segments`,
	{ nameField: 'id' },
);

// AI Provider-scoped method pairs
const aiProviderModels = createDynamicMethodPair(
	(ctx) => `/ai/providers/${getAiProviderId(ctx)}/models`,
	{ nameField: 'id', valueField: 'id' },
);

// Team-scoped method pairs
const teamMembers = createDynamicMethodPair(
	(ctx) => `/teams/${getTeamId(ctx)}/members`,
	{ nameField: 'username' },
);

/**
 * Enterprise-specific load options
 */
const enterpriseSpecificOptions = {
	// ===== Organization-level resources =====
	getGroups: groups.regular,
	getGroupsMulti: groups.multi,
	getUsers: users.regular,
	getUsersMulti: users.multi,
	getWorkflowTemplates: workflowTemplates.regular,
	getWorkflowTemplatesMulti: workflowTemplates.multi,
	getTeams: teams.regular,
	getTeamsMulti: teams.multi,
	getTeamMembers: teamMembers.regular,
	getTeamMembersMulti: teamMembers.multi,
	getCustomSpellcheckers: customSpellcheckers.regular,
	getCustomSpellcheckersMulti: customSpellcheckers.multi,
	getExternalQaChecks: externalQaChecks.regular,
	getExternalQaChecksMulti: externalQaChecks.multi,
	getFields: fields.regular,
	getFieldsMulti: fields.multi,
	getVendors: vendors.regular,
	getVendorsMulti: vendors.multi,
	getSecurityLogs: securityLogs.regular,
	getSecurityLogsMulti: securityLogs.multi,
	getCustomQaChecks: customQaChecks.regular,
	getCustomQaChecksMulti: customQaChecks.multi,
	getAiPrompts: aiPrompts.regular,
	getAiPromptsMulti: aiPrompts.multi,
	getAiProviders: aiProviders.regular,
	getAiProvidersMulti: aiProviders.multi,
	getAiSnippets: aiSnippets.regular,
	getAiSnippetsMulti: aiSnippets.multi,
	getAiSnippetsByPlaceholder: aiSnippetsByPlaceholder.regular,
	getAiSnippetsByPlaceholderMulti: aiSnippetsByPlaceholder.multi,
	getReportArchives: reportArchives.regular,
	getReportArchivesMulti: reportArchives.multi,
	getReportSettingsTemplates: reportSettingsTemplates.regular,
	getReportSettingsTemplatesMulti: reportSettingsTemplates.multi,

	// ===== Project-scoped =====
	getProjectWorkflowSteps: projectWorkflowSteps.regular,
	getProjectWorkflowStepsMulti: projectWorkflowSteps.multi,

	// ===== TM-scoped =====
	getTmSegments: tmSegments.regular,
	getTmSegmentsMulti: tmSegments.multi,

	// ===== AI Provider-scoped =====
	getAiProviderModels: aiProviderModels.regular,
	getAiProviderModelsMulti: aiProviderModels.multi,
};

/**
 * Combined load options for Crowdin Enterprise node
 */
export const loadOptions = {
	...commonOptions,
	...enterpriseSpecificOptions,
};
