import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';

/**
 * Configuration for fetching load options from API
 */
export interface LoadOptionsConfig {
	endpoint: string;
	nameField?: string;
	valueField?: string;
	/** Whether to include empty '-' option at the beginning (default: true) */
	includeEmpty?: boolean;
}

/**
 * API context configuration for different products
 */
export interface ApiConfig {
	/** Get the base URL for API calls */
	getBaseUrl: (context: ILoadOptionsFunctions) => Promise<string> | string;
	/** Get the credential name based on authentication type */
	getCredentialName: (context: ILoadOptionsFunctions) => string;
}

/**
 * Type for load options method
 */
export type LoadOptionsMethod = (this: ILoadOptionsFunctions) => Promise<INodePropertyOptions[]>;

/**
 * Collection of load options methods
 */
export type LoadOptionsMethods = Record<string, LoadOptionsMethod>;

/**
 * Base interface for API items with id and dynamic fields
 */
export interface ApiItem {
	id: number | string;
	[key: string]: unknown;
}

/**
 * Crowdin API response wrapper for single item
 */
export interface ApiDataWrapper<T = ApiItem> {
	data: T;
}

/**
 * Crowdin API response for paginated list
 */
export interface ApiListResponse<T = ApiItem> {
	data: Array<ApiDataWrapper<T>>;
}

/**
 * Crowdin API error structure
 */
export interface CrowdinApiErrorResponse {
	error?: {
		message?: string;
		code?: number;
	};
}

/**
 * Error object that may come from n8n or Crowdin API
 */
export interface ApiError {
	message?: string;
	description?: string;
	cause?: {
		error?: {
			message?: string;
		};
		response?: {
			body?: string | CrowdinApiErrorResponse;
		};
	};
	response?: {
		body?: CrowdinApiErrorResponse;
	};
	error?: {
		message?: string;
	};
}
