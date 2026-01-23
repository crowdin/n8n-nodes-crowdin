// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const machineTranslationEnginesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				]
			}
		},
		options: [
			{
				name: 'List MTs',
				value: 'api.mts.getMany',
				action: 'List MTs',
				description: '**Required scopes:** `mt` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/mts'
					},
					send: {
						paginate: '={{$parameter["returnAll"]}}'
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								enabled: '={{!$parameter["returnAll"]}}',
								properties: {
									property: 'data'
								}
							}
						]
					}
				}
			},
			{
				name: 'Get MT',
				value: 'api.mts.get',
				action: 'Get MT',
				description: '**Required scopes:** `mt` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/mts/{{$parameter["mtId"]}}'
					}
				}
			},
			{
				name: 'Translate via MT',
				value: 'api.mts.translations.post',
				action: 'Translate via MT',
				description: '**Required scopes:** `mt` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/mts/{{$parameter["mtId"]}}/translations'
					}
				}
			}
		],
		default: 'api.mts.getMany'
	},
	{
		displayName: 'GET /mts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /mts/{mtId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.get'
				]
			}
		}
	},
	{
		displayName: 'POST /mts/{mtId}/translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.translations.post'
				]
			}
		}
	},
	{
		displayName: 'Limit',
		name: 'limit',
		description: 'Max number of results to return',
		default: 50,
		type: 'number',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.getMany'
				],
				returnAll: [
					false
				]
			}
		},
		typeOptions: {
			minValue: 1
		}
	},
	{
		displayName: 'Mt Id',
		name: 'mtId',
		required: true,
		description: 'Machine Translation engine identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getMTEngines'
		}
	},
	{
		displayName: 'Mt Id',
		name: 'mtId',
		required: true,
		description: 'Machine Translation engine identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getMTEngines'
		}
	},
	{
		displayName: 'Language Recognition Provider',
		name: 'languageRecognitionProvider',
		type: 'options',
		default: '',
		description: 'Select a provider for language recognition\n\n__Note:__ Is required if the source language is not selected',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'crowdin',
				value: 'crowdin'
			},
			{
				name: 'engine',
				value: 'engine'
			}
		],
		routing: {
			send: {
				property: 'languageRecognitionProvider',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.translations.post'
				]
			}
		}
	},
	{
		displayName: 'Source Language Id',
		name: 'sourceLanguageId',
		type: 'options',
		default: '',
		description: 'Source Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'sourceLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Target Language Id',
		required: true,
		name: 'targetLanguageId',
		type: 'options',
		default: '',
		description: 'Target Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'targetLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Strings',
		name: 'strings',
		type: 'fixedCollection',
		default: {},
		description: 'Strings that should be translated\n\n__Note:__ You can translate up to 100 strings at a time.',
		routing: {
			send: {
				property: 'strings',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.translations.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'Value',
						name: '_value',
						type: 'string',
						default: ''
					}
				]
			}
		]
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.getMany'
				]
			}
		}
	}
];
