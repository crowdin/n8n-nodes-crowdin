import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IPollFunctions,
	IWebhookFunctions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export type CrowdinContext =
	| IExecuteFunctions
	| ILoadOptionsFunctions
	| IHookFunctions
	| IPollFunctions
	| IWebhookFunctions;

/**
 * Get the access token from OAuth2 credentials.
 * n8n automatically handles token refresh when calling getCredentials().
 */
function getOAuth2AccessToken(credentials: IDataObject): string {
	// n8n OAuth2 stores the token in oauthTokenData after authorization
	if (credentials.oauthTokenData) {
		const tokenData = credentials.oauthTokenData as IDataObject;
		if (tokenData.access_token) {
			return tokenData.access_token as string;
		}
	}
	throw new Error('No access token found. Please reconnect your Crowdin account.');
}

/**
 * Get the base URL and access token for API calls.
 * Supports both crowdin.com and Enterprise credentials.
 */
export async function getApiConfig(
	context: CrowdinContext,
): Promise<{ baseUrl: string; accessToken: string; isEnterprise: boolean }> {
	let authentication = 'oAuth2';
	try {
		authentication = context.getNodeParameter('authentication', 0, 'oAuth2') as string;
	} catch {
		// Parameter might not exist
	}

	let accessToken: string;
	let organization: string | undefined;
	let isEnterprise = false;

	if (authentication === 'accessToken') {
		// Try Enterprise credentials first, then fall back to crowdin.com credentials
		try {
			const credentials = await context.getCredentials('crowdinEnterpriseApi');
			accessToken = credentials.accessToken as string;
			organization = credentials.organization as string;
			isEnterprise = true;
		} catch {
			// Fall back to crowdin.com credentials
			const credentials = await context.getCredentials('crowdinApi');
			accessToken = credentials.accessToken as string;
			organization = undefined; // crowdin.com doesn't have organization
			isEnterprise = false;
		}
	} else {
		// OAuth2 - try Enterprise first, then crowdin.com
		try {
			const credentials = await context.getCredentials('crowdinEnterpriseOAuth2Api');
			accessToken = getOAuth2AccessToken(credentials);
			organization = credentials.organization as string;
			isEnterprise = true;
		} catch {
			// Fall back to crowdin.com OAuth2 credentials
			const credentials = await context.getCredentials('crowdinOAuth2Api');
			accessToken = getOAuth2AccessToken(credentials);
            organization = undefined;
            isEnterprise = false;
		}
	}

	const baseUrl = organization
		? `https://${organization}.api.crowdin.com`
		: 'https://api.crowdin.com';

	return { baseUrl, accessToken, isEnterprise };
}

/**
 * Make an API request to the Crowdin API.
 */
export async function crowdinApiRequest(
	this: CrowdinContext,
	method: IHttpRequestMethods,
	endpoint: string,
	body?: IDataObject | IDataObject[],
	query?: IDataObject,
	options?: {
		encoding?: null; // null = binary (arraybuffer)
		returnFullResponse?: boolean;
		contentType?: string;
	},
): Promise<IDataObject> {
	const { baseUrl, accessToken } = await getApiConfig(this);

	const headers: Record<string, string> = {
		Authorization: `Bearer ${accessToken}`,
	};

	if (options?.contentType) {
		headers['Content-Type'] = options.contentType;
	}

	try {
		const response = await (this as IExecuteFunctions).helpers.httpRequest({
			method,
			url: `${baseUrl}/api/v2${endpoint}`,
			headers,
			qs: query,
			body,
			returnFullResponse: options?.returnFullResponse,
			// encoding: null → arraybuffer for binary data
			encoding: options?.encoding === null ? 'arraybuffer' : undefined,
			json: true,
		});
		return response as IDataObject;
	} catch (error) {
		const errorData = (error as { error?: { error?: { message?: string; code?: string } } }).error;
		const message = errorData?.error?.message || (error as Error).message;
		throw new NodeApiError(this.getNode(), error as JsonObject, { message });
	}
}

/**
 * Make an API request and return all items across paginated responses.
 */
export async function crowdinApiRequestAllItems(
	this: CrowdinContext,
	method: IHttpRequestMethods,
	endpoint: string,
	body?: IDataObject,
	query?: IDataObject,
): Promise<IDataObject[]> {
	const returnData: IDataObject[] = [];
	let offset = 0;
	const limit = 500;

	const qs = { ...query, limit, offset };

	let response: IDataObject;
	do {
		qs.offset = offset;
		response = await crowdinApiRequest.call(this, method, endpoint, body, qs);

		const data = response.data as Array<{ data: IDataObject }>;
		if (data && Array.isArray(data)) {
			for (const item of data) {
				returnData.push(item.data);
			}
		}

		offset += limit;
	} while (
		response.data &&
		Array.isArray(response.data) &&
		(response.data as IDataObject[]).length === limit
	);

	return returnData;
}