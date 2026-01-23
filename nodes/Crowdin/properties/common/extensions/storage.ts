import type { INodeProperties } from 'n8n-workflow';
import { setStorageBody } from '../../../utils/preSend';

export const storageProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'storage'
				]
			}
		},
		options: [
			{
				name: 'Add Storage',
				value: 'api.storages.post',
				action: 'Add Storage',
				routing: {
					request: {
						method: 'POST',
						url: '=/storages',
						headers: {
							'Crowdin-API-FileName': '={{$parameter["fileName"]}}'
						}
					},
					send: {
						preSend: [setStorageBody]
					}
				}
			}
		],
		default: 'api.storages.post'
	},
	{
		displayName: 'POST /storages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.post'
				]
			}
		}
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		required: true,
		description: 'URL encoded file name. ZIP files are not allowed.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.post'
				]
			}
		},
		placeholder: 'strings.json'
	},
	{
		displayName: 'Content Source',
		name: 'contentSource',
		description: 'Where to get the file content from',
		default: 'binaryData',
		type: 'options',
		options: [
			{
				name: 'Binary Data',
				value: 'binaryData',
				description: 'Use binary data from previous node'
			},
			{
				name: 'URL',
				value: 'url',
				description: 'Download content from URL'
			},
			{
				name: 'Text',
				value: 'text',
				description: 'Use text content directly'
			}
		],
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.post'
				]
			}
		}
	},
	{
		displayName: 'Input Binary Field',
		name: 'binaryPropertyName',
		description: 'Name of the binary property containing the file data',
		default: 'data',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.post'
				],
				contentSource: [
					'binaryData'
				]
			}
		}
	},
	{
		displayName: 'File URL',
		name: 'fileUrl',
		required: true,
		description: 'URL to download the file from',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.post'
				],
				contentSource: [
					'url'
				]
			}
		},
		placeholder: 'https://example.com/file.json'
	},
	{
		displayName: 'File Content',
		name: 'fileContent',
		required: true,
		description: 'Text content of the file',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.post'
				],
				contentSource: [
					'text'
				]
			}
		},
		placeholder: '{"key": "value"}',
		typeOptions: {
			rows: 5
		}
	}
];
