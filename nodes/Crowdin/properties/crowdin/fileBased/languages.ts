// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const languagesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'languages'
				]
			}
		},
		options: [
			{
				name: 'List Supported Languages',
				value: 'api.languages.getMany',
				action: 'List Supported Languages',
				routing: {
					request: {
						method: 'GET',
						url: '=/languages'
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
				name: 'Add Custom Language',
				value: 'api.languages.post',
				action: 'Add Custom Language',
				description: '**Required scopes:** `language` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/languages'
					}
				}
			},
			{
				name: 'Get Language',
				value: 'api.languages.get',
				action: 'Get Language',
				routing: {
					request: {
						method: 'GET',
						url: '=/languages/{{$parameter["languageId"]}}'
					}
				}
			},
			{
				name: 'Delete Custom Language',
				value: 'api.languages.delete',
				action: 'Delete Custom Language',
				description: '**Required scopes:** `language` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/languages/{{$parameter["languageId"]}}'
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
				name: 'Edit Custom Language',
				value: 'api.languages.patch',
				action: 'Edit Custom Language',
				description: '**Required scopes:** `language` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/languages/{{$parameter["languageId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.languages.getMany'
	},
	{
		displayName: 'GET /languages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /languages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		}
	},
	{
		displayName: 'GET /languages/{languageId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /languages/{languageId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /languages/{languageId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.patch'
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
					'languages'
				],
				operation: [
					'api.languages.getMany'
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
		description: 'Language name',
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
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		},
		placeholder: 'CustomLanguage'
	},
	{
		displayName: 'Code',
		required: true,
		name: 'code',
		type: 'string',
		default: '',
		description: 'Custom language code',
		routing: {
			send: {
				property: 'code',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		},
		placeholder: 'custom'
	},
	{
		displayName: 'Locale Code',
		required: true,
		name: 'localeCode',
		type: 'string',
		default: '',
		description: 'Custom language locale code',
		routing: {
			send: {
				property: 'localeCode',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		},
		placeholder: 'custom-Uk'
	},
	{
		displayName: 'Text Direction',
		required: true,
		name: 'textDirection',
		type: 'options',
		default: 'ltr',
		description: 'Text direction in custom language. Available values:\n * \'ltr\' — left-to-right\n * \'rtl\' — right-to-left',
		options: [
			{
				name: 'ltr',
				value: 'ltr'
			},
			{
				name: 'rtl',
				value: 'rtl'
			}
		],
		routing: {
			send: {
				property: 'textDirection',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		}
	},
	{
		displayName: 'Plural Category Names',
		required: true,
		name: 'pluralCategoryNames',
		type: 'options',
		default: '',
		description: 'Array with category names',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '["one","other"]',
				value: '["one","other"]'
			},
			{
				name: '["one","two","other"]',
				value: '["one","two","other"]'
			},
			{
				name: '["one","few","other"]',
				value: '["one","few","other"]'
			},
			{
				name: '["one","few","many","other"]',
				value: '["one","few","many","other"]'
			},
			{
				name: '["one","two","few","other"]',
				value: '["one","two","few","other"]'
			},
			{
				name: '["one","two","few","many","other"]',
				value: '["one","two","few","many","other"]'
			},
			{
				name: '["zero","one","other"]',
				value: '["zero","one","other"]'
			},
			{
				name: '["zero","one","two","few","many","other"]',
				value: '["zero","one","two","few","many","other"]'
			},
			{
				name: '["other"]',
				value: '["other"]'
			}
		],
		routing: {
			send: {
				property: 'pluralCategoryNames',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value ? JSON.parse($value) : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		}
	},
	{
		displayName: 'Three Letters Code',
		required: true,
		name: 'threeLettersCode',
		type: 'string',
		default: '',
		description: 'Custom language 3 letters code\n\n __Format:__ ISO 6393 code',
		routing: {
			send: {
				property: 'threeLettersCode',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		},
		placeholder: 'cus'
	},
	{
		displayName: 'Two Letters Code',
		name: 'twoLettersCode',
		type: 'string',
		default: '',
		description: 'Custom language 2 letters code\n\n __Format:__ ISO 6391 code',
		routing: {
			send: {
				property: 'twoLettersCode',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		},
		placeholder: 'cu'
	},
	{
		displayName: 'Dialect Of',
		name: 'dialectOf',
		type: 'options',
		default: '',
		description: 'Use if custom language is a dialect. Get `id` via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'dialectOf',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		required: true,
		description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		required: true,
		description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		required: true,
		description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'languages'
				],
				operation: [
					'api.languages.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
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
					'languages'
				],
				operation: [
					'api.languages.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Language name',
				placeholder: 'CustomLanguage'
			},
			{
				displayName: 'Text Direction',
				name: 'textDirection',
				type: 'options',
				default: '',
				description: 'Text direction in custom language. Available values:\n * \'ltr\' — left-to-right\n * \'rtl\' — right-to-left',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'ltr',
						value: 'ltr'
					},
					{
						name: 'rtl',
						value: 'rtl'
					}
				]
			},
			{
				displayName: 'Plural Category Names',
				name: 'pluralCategoryNames',
				type: 'options',
				default: '',
				description: 'Array with category names',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: '["one","other"]',
						value: '["one","other"]'
					},
					{
						name: '["one","two","other"]',
						value: '["one","two","other"]'
					},
					{
						name: '["one","few","other"]',
						value: '["one","few","other"]'
					},
					{
						name: '["one","few","many","other"]',
						value: '["one","few","many","other"]'
					},
					{
						name: '["one","two","few","other"]',
						value: '["one","two","few","other"]'
					},
					{
						name: '["one","two","few","many","other"]',
						value: '["one","two","few","many","other"]'
					},
					{
						name: '["zero","one","other"]',
						value: '["zero","one","other"]'
					},
					{
						name: '["zero","one","two","few","many","other"]',
						value: '["zero","one","two","few","many","other"]'
					},
					{
						name: '["other"]',
						value: '["other"]'
					}
				]
			},
			{
				displayName: 'Three Letters Code',
				name: 'threeLettersCode',
				type: 'string',
				default: '',
				description: 'Custom language 3 letters code\n\n __Format:__ ISO 6393 code',
				placeholder: 'cus'
			},
			{
				displayName: 'Locale Code',
				name: 'localeCode',
				type: 'string',
				default: '',
				description: 'Custom language locale code',
				placeholder: 'custom-Uk'
			},
			{
				displayName: 'Dialect Of',
				name: 'dialectOf',
				type: 'options',
				default: '',
				description: 'Use if custom language is a dialect. Get `id` via [List Supported Languages](#operation/api.languages.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getLanguages'
				}
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
					'languages'
				],
				operation: [
					'api.languages.getMany'
				]
			}
		}
	}
];
