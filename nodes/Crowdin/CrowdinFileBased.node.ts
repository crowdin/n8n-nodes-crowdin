import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { properties } from './properties/crowdin/fileBased';
import { loadOptions } from './methods/crowdin';
import { extendProperties } from './utils/extendProperties';
import { extensions as commonExtensions } from './properties/common/extensions';
import { extensions as platformExtensions } from './properties/crowdin/common/extensions';
import { extensions as variantExtensions } from './properties/crowdin/common/extensions/fileBased';

extendProperties(properties, [...commonExtensions, ...platformExtensions, ...variantExtensions]);

export class CrowdinFileBased implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Crowdin (File-Based)',
		name: 'crowdinFileBased',
		icon: { light: 'file:../../icons/crowdin.svg', dark: 'file:../../icons/crowdin.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with crowdin.com API for localization management',
		defaults: {
			name: 'Crowdin (File-Based)',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'crowdinOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['oAuth2'],
					},
				},
			},
			{
				name: 'crowdinApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['accessToken'],
					},
				},
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: 'https://api.crowdin.com/api/v2',
		},
		requestOperations: {
			pagination: {
				type: 'offset',
				properties: {
					limitParameter: 'limit',
					offsetParameter: 'offset',
					pageSize: 500,
					rootProperty: 'data',
					type: 'query',
				},
			},
		},
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'OAuth2',
						value: 'oAuth2',
						description: 'Connect using OAuth2 (recommended)',
					},
					{
						name: 'Access Token',
						value: 'accessToken',
						description: 'Connect using Personal Access Token',
					},
				],
				default: 'oAuth2',
			},
			...properties,
		],
	};

	methods = { loadOptions };
}
