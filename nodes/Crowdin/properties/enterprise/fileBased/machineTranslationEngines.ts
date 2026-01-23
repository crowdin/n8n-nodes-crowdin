// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody } from '../../../utils/preSend';

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
				name: 'Add MT',
				value: 'api.mts.post',
				action: 'Add MT',
				description: '**Required scopes:** `mt` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/mts'
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
				name: 'Delete MT',
				value: 'api.mts.delete',
				action: 'Delete MT',
				description: '**Required scopes:** `mt` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/mts/{{$parameter["mtId"]}}'
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "success": true } }}'
								}
							}
						]
					}
				}
			},
			{
				name: 'Edit MT',
				value: 'api.mts.patch',
				action: 'Edit MT',
				description: '**Required scopes:** `mt` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/mts/{{$parameter["mtId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
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
		displayName: 'POST /mts',
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
					'api.mts.post'
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
		displayName: 'DELETE /mts/{mtId}',
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
					'api.mts.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /mts/{mtId}',
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
					'api.mts.patch'
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
		displayName: 'Group Id',
		name: 'groupId',
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)\n     *\n     * __Note__: Set 0 to see MTs of root group',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'groupId',
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
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
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
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Machine Translation engine name',
		routing: {
			send: {
				property: 'name',
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
					'api.mts.post'
				]
			}
		}
	},
	{
		displayName: 'Type',
		required: true,
		name: 'type',
		type: 'options',
		default: 'google',
		description: 'MT engine type',
		options: [
			{
				name: 'google',
				value: 'google'
			},
			{
				name: 'google_automl',
				value: 'google_automl'
			},
			{
				name: 'microsoft',
				value: 'microsoft'
			},
			{
				name: 'deepl',
				value: 'deepl'
			},
			{
				name: 'amazon',
				value: 'amazon'
			},
			{
				name: 'modernmt',
				value: 'modernmt'
			},
			{
				name: 'custom_mt',
				value: 'custom_mt'
			}
		],
		routing: {
			send: {
				property: 'type',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.post'
				]
			}
		}
	},
	{
		displayName: 'Credentials',
		name: 'credentials',
		required: true,
		description: 'MT engine credentials',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.post'
				]
			}
		},
		options: [
			{
				displayName: 'Google Translate',
				name: '_googleTranslate',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Google AutoML Translate',
				name: '_googleAutoMlTranslate',
				values: [
					{
						displayName: 'Credentials',
						name: 'credentials',
						type: 'string',
						default: '',
						description: 'Your Google Translate credentials as a JSON (base64 encoded) file.'
					}
				]
			},
			{
				displayName: 'Microsoft Translate',
				name: '_microsoftTranslate',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						typeOptions: {
							password: true
						}
					},
					{
						displayName: 'Model',
						name: 'model',
						type: 'string',
						default: '',
						description: 'Custom model (optional)'
					}
				]
			},
			{
				displayName: 'DeepL Pro',
				name: '_deepLPro',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Amazon Translate',
				name: '_amazonTranslate',
				values: [
					{
						displayName: 'Access Key',
						name: 'accessKey',
						type: 'string',
						default: '',
						description: 'Api key',
						typeOptions: {
							password: true
						}
					},
					{
						displayName: 'Secret Key',
						name: 'secretKey',
						type: 'string',
						default: '',
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'ModernMT Translate',
				name: '_modernMtTranslate',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Custom MT Translate',
				name: '_customMtTranslate',
				values: [
					{
						displayName: 'Url',
						name: 'url',
						type: 'string',
						default: '',
						description: 'Base URL'
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'credentials',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		type: 'options',
		default: '',
		description: 'Group Identifier – defines group to which MT is added. Get via [List Groups](#operation/api.groups.getMany)\n *\n * If \'0\' – MT will be available for all projects and groups in your workspace',
		routing: {
			send: {
				property: 'groupId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Enabled Language Ids',
		name: 'enabledLanguageIds',
		type: 'multiOptions',
		default: [],
		description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'enabledLanguageIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Enabled Project Ids',
		name: 'enabledProjectIds',
		type: 'multiOptions',
		default: [],
		description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'enabledProjectIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Is Enabled',
		name: 'isEnabled',
		type: 'boolean',
		default: true,
		description: 'Defines whether to enabled MT engine.',
		routing: {
			send: {
				property: 'isEnabled',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.post'
				]
			}
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
					'api.mts.delete'
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
					'api.mts.patch'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'machineTranslationEngines'
				],
				operation: [
					'api.mts.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Machine Translation engine name'
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'MT engine type',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'google',
						value: 'google'
					},
					{
						name: 'google_automl',
						value: 'google_automl'
					},
					{
						name: 'microsoft',
						value: 'microsoft'
					},
					{
						name: 'deepl',
						value: 'deepl'
					},
					{
						name: 'amazon',
						value: 'amazon'
					},
					{
						name: 'modernmt',
						value: 'modernmt'
					},
					{
						name: 'custom_mt',
						value: 'custom_mt'
					}
				]
			},
			{
				displayName: 'Credentials',
				name: 'credentials',
				description: 'MT engine credentials',
				default: {},
				type: 'fixedCollection',
				options: [
					{
						name: '_googleTranslate',
						displayName: 'Google Translate',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_googleAutoMlTranslate',
						displayName: 'Google AutoML Translate',
						values: [
							{
								displayName: 'Credentials',
								name: 'credentials',
								type: 'string',
								default: '',
								description: 'Your Google Translate credentials as a JSON (base64 encoded) file.'
							}
						]
					},
					{
						name: '_microsoftTranslate',
						displayName: 'Microsoft Translate',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								typeOptions: {
									password: true
								}
							},
							{
								displayName: 'Model',
								name: 'model',
								type: 'string',
								default: '',
								description: 'Custom model (optional)'
							}
						]
					},
					{
						name: '_deepLPro',
						displayName: 'DeepL Pro',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_amazonTranslate',
						displayName: 'Amazon Translate',
						values: [
							{
								displayName: 'Access Key',
								name: 'accessKey',
								type: 'string',
								default: '',
								description: 'Api key',
								typeOptions: {
									password: true
								}
							},
							{
								displayName: 'Secret Key',
								name: 'secretKey',
								type: 'string',
								default: '',
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_modernMtTranslate',
						displayName: 'ModernMT Translate',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_customMtTranslate',
						displayName: 'Custom MT Translate',
						values: [
							{
								displayName: 'Url',
								name: 'url',
								type: 'string',
								default: '',
								description: 'Base URL'
							}
						]
					}
				]
			},
			{
				displayName: 'Enabled Language Ids',
				name: 'enabledLanguageIds',
				type: 'multiOptions',
				default: [],
				description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getLanguagesMulti'
				}
			},
			{
				displayName: 'Enabled Project Ids',
				name: 'enabledProjectIds',
				type: 'multiOptions',
				default: [],
				description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getProjectsMulti'
				}
			},
			{
				displayName: 'Is Enabled',
				name: 'isEnabled',
				type: 'boolean',
				default: true,
				description: 'Defines whether to enabled MT engine.'
			}
		],
		routing: {
			send: {
				type: 'body',
				value: '={{ $value }}'
			}
		}
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
