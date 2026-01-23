import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import type { ApiConfig, ApiItem, ApiDataWrapper, ApiError } from '../common/types';
import { createCommonLoadOptions, getAiProviderId } from '../common';

const BASE_URL = 'https://api.crowdin.com/api/v2';

/**
 * Crowdin API configuration
 */
const crowdinConfig: ApiConfig = {
	getBaseUrl: () => BASE_URL,
	getCredentialName: (context: ILoadOptionsFunctions) => {
		const authType = context.getNodeParameter('authentication', 0) as string;
		return authType === 'oAuth2' ? 'crowdinOAuth2Api' : 'crowdinApi';
	},
};

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
 * Fetch single resource from Crowdin API
 */
async function fetchSingle<T = ApiItem>(context: ILoadOptionsFunctions, endpoint: string): Promise<T> {
	const credentialName = crowdinConfig.getCredentialName(context);

	try {
		const response = await context.helpers.requestWithAuthentication.call(
			context,
			credentialName,
			{
				method: 'GET',
				url: `${BASE_URL}${endpoint}`,
				json: true,
			},
		) as ApiDataWrapper<T>;

		return response.data;
	} catch (error: unknown) {
		throw new Error(extractErrorMessage(error));
	}
}

const PAGE_SIZE = 500;
// Maximum items to fetch in load options methods for performance
const MAX_LOAD_OPTIONS_ITEMS = 5000;

interface UserItem extends ApiItem {
	id: number;
	username: string;
}

/**
 * Get current user ID (needed for user-scoped resources in Crowdin)
 */
async function getCurrentUserId(context: ILoadOptionsFunctions): Promise<number> {
	const user = await fetchSingle<UserItem>(context, '/user');
	return user.id;
}

/**
 * Fetch all pages for user-scoped resources in Crowdin
 * Limited to MAX_LOAD_OPTIONS_ITEMS for performance
 */
async function fetchUserScopedPages(
	context: ILoadOptionsFunctions,
	endpoint: string,
	nameField: string = 'name',
	includeEmpty: boolean = true,
	valueField: string = 'id',
): Promise<INodePropertyOptions[]> {
	const userId = await getCurrentUserId(context);
	const credentialName = crowdinConfig.getCredentialName(context);
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
					url: `${BASE_URL}/users/${userId}${endpoint}`,
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
		throw new Error(extractErrorMessage(error));
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

// Create common load options with Crowdin config
const commonOptions = createCommonLoadOptions(crowdinConfig);

/**
 * Crowdin-specific load options
 */
const crowdinSpecificOptions = {
	/**
	 * Get users - In Crowdin (non-enterprise), returns only current user
	 */
	async getUsers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const currentUser = await fetchSingle<UserItem>(this, '/user');
		return [
			{ name: '-', value: '' },
			{ name: currentUser.username, value: currentUser.id },
		];
	},

	async getUsersMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const currentUser = await fetchSingle<UserItem>(this, '/user');
		return [{ name: currentUser.username, value: currentUser.id }];
	},

	/**
	 * Get AI prompts - requires current user ID in Crowdin
	 */
	async getAiPrompts(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/prompts', 'name', true);
	},

	async getAiPromptsMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/prompts', 'name', false);
	},

	/**
	 * Get AI providers - requires current user ID in Crowdin
	 */
	async getAiProviders(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/providers', 'name', true);
	},

	async getAiProvidersMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/providers', 'name', false);
	},

	/**
	 * Get AI provider models - requires current user ID and AI provider ID
	 */
	async getAiProviderModels(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const aiProviderId = getAiProviderId(this);
		if (!aiProviderId) {
			return [{ name: '-', value: '' }];
		}
		return fetchUserScopedPages(this, `/ai/providers/${aiProviderId}/models`, 'id', true, 'id');
	},

	async getAiProviderModelsMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const aiProviderId = getAiProviderId(this);
		if (!aiProviderId) {
			return [];
		}
		return fetchUserScopedPages(this, `/ai/providers/${aiProviderId}/models`, 'id', false, 'id');
	},

	/**
	 * Get AI snippets - requires current user ID in Crowdin
	 */
	async getAiSnippets(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/settings/snippets', 'placeholder', true);
	},

	async getAiSnippetsMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/settings/snippets', 'placeholder', false);
	},

	/**
	 * Get AI snippets by placeholder value (for AI Prompt snippets field)
	 */
	async getAiSnippetsByPlaceholder(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/settings/snippets', 'placeholder', true, 'placeholder');
	},

	async getAiSnippetsByPlaceholderMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/ai/settings/snippets', 'placeholder', false, 'placeholder');
	},

	/**
	 * Get report archives - requires current user ID in Crowdin
	 */
	async getReportArchives(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/reports/archives', 'name', true);
	},

	async getReportArchivesMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/reports/archives', 'name', false);
	},

	/**
	 * Get report settings templates - requires current user ID in Crowdin
	 */
	async getReportSettingsTemplates(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/reports/settings-templates', 'name', true);
	},

	async getReportSettingsTemplatesMulti(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		return fetchUserScopedPages(this, '/reports/settings-templates', 'name', false);
	},
};

/**
 * Combined load options for Crowdin node
 */
export const loadOptions = {
	...commonOptions,
	...crowdinSpecificOptions,
};
