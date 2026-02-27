import type { IExecuteSingleFunctions, IHttpRequestOptions, PreSendAction } from 'n8n-workflow';

/**
 * Format date value for Crowdin API
 * Handles various input types and returns ISO 8601 format
 */
function formatDateForCrowdin(dateValue: unknown): string | undefined {
	if (!dateValue) return undefined;

	let date: Date;

	if (typeof dateValue === 'string') {
		// Parse ISO string or other date formats
		date = new Date(dateValue);
	} else if (typeof dateValue === 'number') {
		// Unix timestamp (milliseconds)
		date = new Date(dateValue);
	} else if (dateValue instanceof Date) {
		date = dateValue;
	} else {
		return undefined;
	}

	// Check if date is valid
	if (isNaN(date.getTime())) {
		return undefined;
	}

	// Format to ISO 8601 with timezone
	// Crowdin expects format like: "2019-09-27T07:00:14+00:00"
	return date.toISOString();
}

/**
 * Helper function to get file content as Buffer from various sources
 */
async function getFileContent(
	context: IExecuteSingleFunctions,
	contentSourceParam: string,
	binaryPropertyParam: string,
	fileUrlParam: string,
	fileContentParam: string,
): Promise<Buffer> {
	const contentSource = context.getNodeParameter(contentSourceParam, 'binaryData') as string;

	if (contentSource === 'binaryData') {
		const binaryPropertyName = context.getNodeParameter(binaryPropertyParam, 'data') as string;
		const binaryData = context.helpers.assertBinaryData(binaryPropertyName);

		if (binaryData.id) {
			return context.helpers.getBinaryDataBuffer(binaryPropertyName);
		} else if (binaryData.data) {
			return Buffer.from(binaryData.data, 'base64');
		} else {
			throw new Error('No binary data found');
		}
	} else if (contentSource === 'url') {
		const fileUrl = context.getNodeParameter(fileUrlParam) as string;
		const response = await context.helpers.httpRequest({
			method: 'GET',
			url: fileUrl,
			encoding: 'arraybuffer',
		});
		return Buffer.from(response as ArrayBuffer);
	} else if (contentSource === 'text') {
		const fileContent = context.getNodeParameter(fileContentParam) as string;
		return Buffer.from(fileContent, 'utf-8');
	} else {
		throw new Error(`Unknown content source: ${contentSource}`);
	}
}

/**
 * Get credential name based on node type and authentication method
 */
function getCredentialName(context: IExecuteSingleFunctions): string {
	const nodeType = context.getNode().type;
	const authType = context.getNodeParameter('authentication', 'oAuth2') as string;

	if (nodeType.includes('Enterprise')) {
		return authType === 'oAuth2' ? 'crowdinEnterpriseOAuth2Api' : 'crowdinEnterpriseApi';
	}
	return authType === 'oAuth2' ? 'crowdinOAuth2Api' : 'crowdinApi';
}

/**
 * PreSend for Add Storage operation - sets binary body from various content sources
 */
export async function setStorageBody(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = await getFileContent(
		this,
		'contentSource',
		'binaryPropertyName',
		'fileUrl',
		'fileContent',
	);

	requestOptions.body = body;
	requestOptions.headers = {
		...requestOptions.headers,
		'Content-Type': 'application/octet-stream',
	};

	return requestOptions;
}

/**
 * Configuration for createUploadFileToStorage factory
 */
export interface UploadFileToStorageConfig {
	/** Parameter name for file name (default: 'name') */
	fileNameParam?: string;
	/** Parameter name for content source (default: 'contentSource') */
	contentSourceParam?: string;
	/** Parameter name for binary property (default: 'binaryPropertyName') */
	binaryPropertyParam?: string;
	/** Parameter name for file URL (default: 'fileUrl') */
	fileUrlParam?: string;
	/** Parameter name for file content (default: 'fileContent') */
	fileContentParam?: string;
}

/**
 * Factory that creates a preSend function to upload file to storage and inject storageId.
 * Allows customizing parameter names for different operations.
 */
export function createUploadFileToStorage(config: UploadFileToStorageConfig = {}): PreSendAction {
	const {
		fileNameParam = 'name',
		contentSourceParam = 'contentSource',
		binaryPropertyParam = 'binaryPropertyName',
		fileUrlParam = 'fileUrl',
		fileContentParam = 'fileContent',
	} = config;

	return async function uploadFileToStorage(
		this: IExecuteSingleFunctions,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		// Get file name from the configured parameter
		const fileName = this.getNodeParameter(fileNameParam, '') as string;
		if (!fileName) {
			throw new Error(`File name is required (parameter: ${fileNameParam})`);
		}

		// Get file content
		const body = await getFileContent(
			this,
			contentSourceParam,
			binaryPropertyParam,
			fileUrlParam,
			fileContentParam,
		);

		// Get base URL from request options
		const baseUrl =
			typeof requestOptions.baseURL === 'string'
				? requestOptions.baseURL
				: 'https://api.crowdin.com/api/v2';

		// Upload to storage
		const credentialName = getCredentialName(this);
		const storageResponse = await this.helpers.httpRequestWithAuthentication.call(
			this,
			credentialName,
			{
				method: 'POST',
				url: `${baseUrl}/storages`,
				headers: {
					'Content-Type': 'application/octet-stream',
					'Crowdin-API-FileName': encodeURIComponent(fileName),
				},
				body,
				json: true,
			},
		);

		const storageId = storageResponse.data?.id;
		if (!storageId) {
			throw new Error('Failed to upload file to storage: no storage ID returned');
		}

		// Inject storageId into the request body
		const currentBody =
			typeof requestOptions.body === 'object' && requestOptions.body !== null
				? (requestOptions.body as Record<string, unknown>)
				: {};

		requestOptions.body = {
			...currentBody,
			storageId,
		};

		return requestOptions;
	};
}

/**
 * Default preSend for uploading file to storage.
 * Uses 'name' as the file name parameter.
 */
export const uploadFileToStorage = createUploadFileToStorage();

/**
 * Check if a value is empty and should be filtered out from the request
 */
function isEmptyValue(value: unknown): boolean {
	if (value === undefined || value === null) return true;
	if (value === '') return true;
	if (Array.isArray(value) && value.length === 0) return true;
	// Check for empty object (no own properties)
	if (typeof value === 'object' && Object.keys(value as object).length === 0) return true;
	return false;
}

/**
 * Parse JSON string value
 */
function parseJsonValue(value: unknown): unknown {
	if (typeof value !== 'string') return value;
	const trimmed = value.trim();
	if ((trimmed.startsWith('{') && trimmed.endsWith('}')) ||
		(trimmed.startsWith('[') && trimmed.endsWith(']'))) {
		try {
			return JSON.parse(trimmed);
		} catch {
			return value; // Keep original if parsing fails
		}
	}
	return value;
}

/**
 * Core normalization logic for request body.
 * 
 * Performs:
 * 1. Unwrapping fixedCollection items: { items: [...] } -> [...]
 * 2. Unwrapping fixedCollection fields: { fields: {...} } -> {...}
 * 3. Unwrapping oneOf variants: { _variantName: {...} } -> {...}
 * 4. Formatting dateTime fields: { "dateTime:field": value } -> { field: ISODate }
 * 5. Parsing JSON fields: { "json:field": jsonString } -> { field: parsedObject }
 * 6. Optionally filtering out empty values
 * 
 * @param obj - Value to normalize
 * @param filterEmpty - Whether to filter empty values at current level.
 *                      When recursing into nested objects, always passes true.
 *                      - POST: call with true (filter at all levels)
 *                      - PATCH: call with false (don't filter root, but filter nested)
 */
function normalizeValue(obj: unknown, filterEmpty: boolean): unknown {
	if (typeof obj !== 'object' || obj === null) return obj;
	
	if (Array.isArray(obj)) {
		// Always filter nested levels (pass true when recursing)
		return obj.map(item => normalizeValue(item, true));
	}
	
	const record = obj as Record<string, unknown>;
	const keys = Object.keys(record);
	
	// Check for n8n fixedCollection wrappers (only known wrapper keys)
	// - 'items' for multipleValues fixedCollection: { items: [...] } -> [...]
	// - 'fields' for single-value fixedCollection: { fields: {...} } -> {...}
	// - '_variantName' for oneOf variants: { _deepLPro: {...} } -> {...}
	// - 'json:_value' or 'dateTime:_value' for prefixed value wrappers
	if (keys.length === 1) {
		const key = keys[0];
		if (key === 'items' && Array.isArray(record.items)) {
			// Always filter nested levels
			return normalizeValue(record.items, true);
		}
		if (key === 'fields' && typeof record.fields === 'object' && record.fields !== null) {
			// Always filter nested levels
			return normalizeValue(record.fields, true);
		}
		// Unwrap prefixed keys (oneOf variants, simple values wrapped with '_value')
		// Works for both objects { _variant: {...} } and primitives { _value: "string" }
		if (key.startsWith('_')) {
			// Always filter nested levels
			return normalizeValue(record[key], true);
		}
		// Handle json:_value or dateTime:_value - parse/format and unwrap
		if (key === 'json:_value') {
			return parseJsonValue(record[key]);
		}
		if (key === 'dateTime:_value') {
			return formatDateForCrowdin(record[key]);
		}
	}
	
	// Recursively process all properties
	const result: Record<string, unknown> = {};
	for (const [k, v] of Object.entries(record)) {
		let finalKey = k;
		// Always filter nested levels (pass true when recursing)
		let finalValue = normalizeValue(v, true);
		
		// Handle flatten: prefix - flatten polymorphic fixedCollection
		// { variant1: [...], variant2: [...] } -> [...all items...]
		if (k.startsWith('flatten:')) {
			finalKey = k.slice(8); // Remove 'flatten:' prefix
			if (typeof finalValue === 'object' && finalValue !== null && !Array.isArray(finalValue)) {
				finalValue = Object.values(finalValue).flat();
				// Filter empty items from flattened array
				if (Array.isArray(finalValue)) {
					finalValue = (finalValue as unknown[]).filter(item => !isEmptyValue(item));
				}
			}
		}
		// Handle dateTime: prefix - format date and rename key
		else if (k.startsWith('dateTime:')) {
			finalKey = k.slice(9); // Remove 'dateTime:' prefix
			const formatted = formatDateForCrowdin(finalValue);
			if (formatted !== undefined) {
				finalValue = formatted;
			}
		}
		// Handle json: prefix - parse JSON and rename key
		else if (k.startsWith('json:')) {
			finalKey = k.slice(5); // Remove 'json:' prefix
			finalValue = parseJsonValue(finalValue);
		}
		// Handle spread: prefix - spread array of {key, value} pairs into parent object
		// Used for additionalProperties (dynamic key-value mappings like language code -> column number)
		else if (k.startsWith('spread:')) {
			if (Array.isArray(finalValue)) {
				for (const item of finalValue) {
					if (item && typeof item === 'object' && !Array.isArray(item)) {
						const entry = item as Record<string, unknown>;
						if (entry.key !== undefined && entry.key !== null && entry.key !== '') {
							result[String(entry.key)] = entry.value;
						}
					}
				}
			}
			continue; // Don't add 'spread:...' key to result
		}
		
		// Filter empty values only if filterEmpty is true (current level)
		if (filterEmpty && isEmptyValue(finalValue)) {
			continue;
		}
		result[finalKey] = finalValue;
	}
	return result;
}

/**
 * Normalize request body with full empty value filtering.
 * Use for regular POST/PUT operations where empty values should be omitted.
 */
function normalizeRequestBody(obj: unknown): unknown {
	return normalizeValue(obj, true);
}

/**
 * Normalize value for PATCH operations.
 * 
 * Top-level fields (explicitly selected by user) are preserved even if empty ([], '', 0, false).
 * Nested fields inside objects are filtered (removes empty strings, arrays, objects).
 */
function normalizeForPatch(obj: unknown): unknown {
	return normalizeValue(obj, false);
}

/**
 * PreSend for operations with root-level oneOf (_body field).
 * Extracts variant data from _body fixedCollection and replaces the entire request body.
 */
export async function normalizeRootBody(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = requestOptions.body as Record<string, unknown> | undefined;
	
	if (!body || typeof body !== 'object') {
		return requestOptions;
	}
	
	// Get _body field which contains the fixedCollection data
	const bodyField = body._body as Record<string, unknown> | undefined;
	if (!bodyField || typeof bodyField !== 'object') {
		return requestOptions;
	}
	
	// Extract variant data (first value of the fixedCollection)
	const variant = Object.values(bodyField)[0] as Record<string, unknown> | undefined;
	if (!variant || typeof variant !== 'object') {
		return requestOptions;
	}
	
	// Unwrap nested fixedCollections and replace entire body
	requestOptions.body = normalizeRequestBody(variant) as Record<string, unknown>;
	
	return requestOptions;
}

/**
 * PreSend that normalizes the entire request body.
 * Processes all fields recursively, unwrapping fixedCollections and transforming prefixed keys.
 */
export async function normalizeFieldBody(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = requestOptions.body as Record<string, unknown> | undefined;
	
	if (!body || typeof body !== 'object') {
		return requestOptions;
	}
	
	// Process all fields looking for fixedCollection structures
	requestOptions.body = normalizeRequestBody(body) as Record<string, unknown>;
	
	return requestOptions;
}

/**
 * Check if a value should be included in JSON Patch operations
 * Since PATCH fields are now in a collection, users explicitly select which fields to update.
 * We only filter out undefined/null values - everything else (0, false, empty arrays, empty strings)
 * are valid values that users might want to set.
 */
function isValidPatchValue(value: unknown): boolean {
	if (value === undefined || value === null) return false;
	return true;
}

/**
 * PreSend that transforms body fields to JSON Patch format (RFC 6902)
 * Converts { name: "value", title: "other" } to:
 * [{ op: "replace", path: "/name", value: "value" }, { op: "replace", path: "/title", value: "other" }]
 * 
 * Gets fields from updateFields node parameter and transforms them to JSON Patch array.
 * Normalizes values (unwraps fixedCollection/oneOf) but keeps empty values.
 */
export async function transformToJsonPatch(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	// Get body from routing OR from updateFields parameter directly
	// n8n routing with collections doesn't always populate body correctly
	let body = requestOptions.body as Record<string, unknown> | undefined;
	
	// If body is empty, try to get updateFields parameter directly
	if (!body || Object.keys(body).length === 0) {
		try {
			const updateFields = this.getNodeParameter('updateFields', {}) as Record<string, unknown>;
			if (updateFields && Object.keys(updateFields).length > 0) {
				body = updateFields;
			}
		} catch {
			// Parameter doesn't exist, continue with empty body
		}
	}
	
	if (!body || typeof body !== 'object') {
		throw new Error('At least one field must be provided for update');
	}
	
	// Normalize entire body - unwrap fixedCollection/oneOf, handle flatten:/json:/dateTime: prefixes
	const normalizedBody = normalizeForPatch(body) as Record<string, unknown>;
	
	// Convert body fields to JSON Patch array
	const patchOperations = Object.entries(normalizedBody)
		.filter(([, value]) => isValidPatchValue(value))
		.map(([field, value]) => {
			// Convert field_name back to /field/name format (for nested paths like settings_enabled -> /settings/enabled)
			const path = '/' + field.replace(/_/g, '/');
			return {
				op: 'replace' as const,
				path,
				value,
			};
		});
	
	if (patchOperations.length === 0) {
		throw new Error('At least one field must be provided for update');
	}
	
	requestOptions.body = patchOperations;
	
	return requestOptions;
}

/**
 * PreSend for batch operations that extract items from wrapper object.
 * 
 * Handles two formats:
 * 1. Simple batch: { items: { items: [...] } } -> [...]
 * 2. Polymorphic batch: { items: { variant1: [...], variant2: [...] } } -> [...all items...]
 * 
 * The transformation creates a wrapper schema with an 'items' property.
 * n8n generates this as a fixedCollection with various structures depending on schema.
 * This preSend extracts all items and unwraps nested fixedCollections.
 */
export async function extractBatchItems(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = requestOptions.body as Record<string, unknown> | undefined;
	
	if (!body || typeof body !== 'object') {
		throw new Error('Request body is required for batch operations');
	}
	
	// Get the items field which contains the fixedCollection wrapper
	const itemsWrapper = body.items as Record<string, unknown> | unknown[] | undefined;
	
	if (!itemsWrapper) {
		throw new Error('Items field is required for batch operations');
	}
	
	let items: unknown[] = [];
	
	if (Array.isArray(itemsWrapper)) {
		// Direct array
		items = itemsWrapper;
	} else if (typeof itemsWrapper === 'object') {
		// Object wrapper - could be { items: [...] } or { variant1: [...], variant2: [...] }
		for (const value of Object.values(itemsWrapper)) {
			if (Array.isArray(value)) {
				// Collect items from all variant arrays
				items.push(...value);
			}
		}
	}
	
	if (items.length === 0) {
		throw new Error('At least one item is required for batch operations');
	}
	
	// Unwrap nested fixedCollections in each item
	const unwrappedItems = items.map((item) => {
		if (typeof item === 'object' && item !== null) {
			return normalizeRequestBody(item);
		}
		return item;
	});
	
	// Replace body with just the array
	requestOptions.body = unwrappedItems;
	
	return requestOptions;
}

/**
 * PreSend that parses a JSON string from a field and sets it as the request body
 * Used for operations with generic/dynamic request body schema
 * @param fieldName - Name of the field containing the JSON string (default: 'body')
 */
export function parseJsonBodyField(fieldName: string = 'body'): PreSendAction {
	return async function(
		this: IExecuteSingleFunctions,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		const jsonString = this.getNodeParameter(fieldName, '') as string;
		
		if (jsonString && jsonString.trim()) {
			try {
				requestOptions.body = JSON.parse(jsonString);
			} catch {
				throw new Error(`Invalid JSON in "${fieldName}" field`);
			}
		}
		
		return requestOptions;
	};
}

/**
 * PreSend for Update Group Managers batch operation.
 * Transforms items to JSON Patch format:
 * - _addManager: [{userId: 1}] → [{op: "add", path: "/-", value: {userId: 1}}]
 * - _removeManager: [{userId: 2}] → [{op: "remove", path: "/2"}]
 */
export async function transformGroupManagersBatch(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = requestOptions.body as Record<string, unknown> | undefined;
	
	if (!body || typeof body !== 'object') {
		throw new Error('Request body is required');
	}
	
	const itemsWrapper = body.items as Record<string, unknown[]> | undefined;
	if (!itemsWrapper || typeof itemsWrapper !== 'object') {
		throw new Error('Items field is required');
	}
	
	const patchOperations: Array<{ op: string; path: string; value?: unknown }> = [];
	
	// Process add operations
	const addItems = itemsWrapper._addManager || [];
	for (const item of addItems) {
		const normalized = normalizeRequestBody(item) as Record<string, unknown>;
		patchOperations.push({
			op: 'add',
			path: '/-',
			value: normalized
		});
	}
	
	// Process remove operations
	const removeItems = itemsWrapper._removeManager || [];
	for (const item of removeItems) {
		const normalized = normalizeRequestBody(item) as Record<string, unknown>;
		const userId = normalized.userId;
		if (userId !== undefined) {
			patchOperations.push({
				op: 'remove',
				path: `/${userId}`
			});
		}
	}
	
	if (patchOperations.length === 0) {
		throw new Error('At least one operation is required');
	}
	
	requestOptions.body = patchOperations;
	return requestOptions;
}

/**
 * PreSend that transforms nested body structure to JSON Patch format.
 * For operations with structure: _VariantName -> _fields -> {actual fields}
 * 
 * Tries to get data from:
 * 1. requestOptions.body (from routing)
 * 2. _body parameter directly (fallback)
 * 
 * Converts them to JSON Patch array:
 * [{ op: "replace", path: "/name", value: "value" }, ...]
 */
export async function transformNestedBodyToJsonPatch(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	// Try to get body from routing first, then from parameter directly
	let body = requestOptions.body as Record<string, unknown> | undefined;
	
	// If body is empty, try to get _body parameter directly
	if (!body || typeof body !== 'object' || Object.keys(body).length === 0) {
		try {
			body = this.getNodeParameter('_body', {}) as Record<string, unknown>;
		} catch {
			// Parameter doesn't exist
		}
	}
	
	if (!body || typeof body !== 'object' || Object.keys(body).length === 0) {
		throw new Error('At least one field must be provided for update');
	}
	
	// Get first variant value (e.g., _TaskOperation, _VendorTaskOperation, etc.)
	const variantValue = Object.values(body)[0] as Record<string, unknown> | undefined;
	if (!variantValue || typeof variantValue !== 'object') {
		throw new Error('At least one field must be provided for update');
	}
	
	// Get _fields from variant
	const fields = variantValue._fields as Record<string, unknown> | undefined;
	if (!fields || typeof fields !== 'object' || Object.keys(fields).length === 0) {
		throw new Error('At least one field must be provided for update');
	}
	
	// Normalize fields - unwrap fixedCollection/oneOf, handle flatten:/json:/dateTime: prefixes
	const normalizedFields = normalizeForPatch(fields) as Record<string, unknown>;
	
	// Convert fields to JSON Patch array
	const patchOperations = Object.entries(normalizedFields)
		.filter(([, value]) => isValidPatchValue(value))
		.map(([field, value]) => {
			// Convert field_name to /field/name format (for nested paths)
			const path = '/' + field.replace(/_/g, '/');
			return {
				op: 'replace' as const,
				path,
				value,
			};
		});
	
	if (patchOperations.length === 0) {
		throw new Error('At least one field must be provided for update');
	}
	
	requestOptions.body = patchOperations;
	
	return requestOptions;
}

/**
 * Transform group teams batch operations to JSON Patch format.
 * Used for PATCH /groups/{groupId}/teams
 * 
 * Operations:
 * - Add Team: { op: "add", path: "/-", value: { teamId } }
 * - Remove Team: { op: "remove", path: "/{teamId}" }
 */
export async function transformGroupTeamsBatch(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = requestOptions.body as Record<string, unknown> | undefined;
	const itemsWrapper = body?.items as Record<string, unknown[]> | undefined;
	
	if (!itemsWrapper) {
		throw new Error('Items field is required for batch operations');
	}
	
	const patchOperations: Array<{ op: string; path: string; value?: unknown }> = [];
	
	// Process add operations
	const addItems = itemsWrapper._addTeam || [];
	for (const item of addItems) {
		const normalized = normalizeRequestBody(item) as Record<string, unknown>;
		const teamId = normalized.teamId;
		if (teamId !== undefined) {
			patchOperations.push({
				op: 'add',
				path: '/-',
				value: { teamId }
			});
		}
	}
	
	// Process remove operations
	const removeItems = itemsWrapper._removeTeam || [];
	for (const item of removeItems) {
		const normalized = normalizeRequestBody(item) as Record<string, unknown>;
		const teamId = normalized.teamId;
		if (teamId !== undefined) {
			patchOperations.push({
				op: 'remove',
				path: `/${teamId}`
			});
		}
	}
	
	if (patchOperations.length === 0) {
		throw new Error('At least one operation is required');
	}
	
	requestOptions.body = patchOperations;
	return requestOptions;
}

