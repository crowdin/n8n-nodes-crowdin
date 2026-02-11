// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody } from '../../../utils/preSend';

export const translationMemoryProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				]
			}
		},
		options: [
			{
				name: 'List TMs',
				value: 'api.tms.getMany',
				action: 'List TMs',
				description: '**Required scopes:** `tm` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms'
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
				name: 'Add TM',
				value: 'api.tms.post',
				action: 'Add TM',
				description: '**Required scopes:** `tm` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/tms'
					}
				}
			},
			{
				name: 'Get TM',
				value: 'api.tms.get',
				action: 'Get TM',
				description: '**Required scopes:** `tm` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms/{{$parameter["tmId"]}}'
					}
				}
			},
			{
				name: 'Delete TM',
				value: 'api.tms.delete',
				action: 'Delete TM',
				description: '**Required scopes:** `tm` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/tms/{{$parameter["tmId"]}}'
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
				name: 'Edit TM',
				value: 'api.tms.patch',
				action: 'Edit TM',
				description: '**Required scopes:** `tm` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/tms/{{$parameter["tmId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List TM Segments',
				value: 'api.tms.segments.getMany',
				action: 'List TM Segments',
				description: '**Required scopes:** `tm` (Read only).\n\nGet list of translation unit segments',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms/{{$parameter["tmId"]}}/segments'
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
				name: 'Create TM Segment',
				value: 'api.tms.segments.post',
				action: 'Create TM Segment',
				description: '**Required scopes:** `tm` (Read and Write).\n\nCreate translation unit with given segments',
				routing: {
					request: {
						method: 'POST',
						url: '=/tms/{{$parameter["tmId"]}}/segments'
					}
				}
			},
			{
				name: 'Clear TM',
				value: 'api.tms.segments.clear',
				action: 'Clear TM',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/tms/{{$parameter["tmId"]}}/segments'
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
				name: 'Export TM',
				value: 'api.tms.exports.post',
				action: 'Export TM',
				description: '**Required scopes:** `tm` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/tms/{{$parameter["tmId"]}}/exports'
					}
				}
			},
			{
				name: 'Check TM Export Status',
				value: 'api.tms.exports.get',
				action: 'Check TM Export Status',
				description: '**Required scopes:** `tm` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms/{{$parameter["tmId"]}}/exports/{{$parameter["exportId"]}}'
					}
				}
			},
			{
				name: 'Download TM',
				value: 'api.tms.exports.download.download',
				action: 'Download TM',
				description: '**Required scopes:** `tm` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms/{{$parameter["tmId"]}}/exports/{{$parameter["exportId"]}}/download'
					}
				}
			},
			{
				name: 'Concordance search in TMs',
				value: 'api.projects.tms.concordance.post',
				action: 'Concordance search in TMs',
				description: '**Required scopes:** `tm` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/tms/concordance'
					}
				}
			},
			{
				name: 'Import TM',
				value: 'api.tms.imports.post',
				action: 'Import TM',
				description: '**Required scopes:** `tm` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/tms/{{$parameter["tmId"]}}/imports'
					}
				}
			},
			{
				name: 'Check TM Import Status',
				value: 'api.tms.imports.get',
				action: 'Check TM Import Status',
				description: '**Required scopes:** `tm` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms/{{$parameter["tmId"]}}/imports/{{$parameter["importId"]}}'
					}
				}
			},
			{
				name: 'Get TM Segment',
				value: 'api.tms.segments.get',
				action: 'Get TM Segment',
				description: '**Required scopes:** `tm` (Read only).\n\nGet segments of translation unit',
				routing: {
					request: {
						method: 'GET',
						url: '=/tms/{{$parameter["tmId"]}}/segments/{{$parameter["segmentId"]}}'
					}
				}
			},
			{
				name: 'Delete TM Segment',
				value: 'api.tms.segments.delete',
				action: 'Delete TM Segment',
				description: '**Required scopes:** `tm` (Read and Write).\n\nDelete all segments of translation unit',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/tms/{{$parameter["tmId"]}}/segments/{{$parameter["segmentId"]}}'
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
			}
		],
		default: 'api.tms.getMany'
	},
	{
		displayName: 'GET /tms',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /tms',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.post'
				]
			}
		}
	},
	{
		displayName: 'GET /tms/{tmId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /tms/{tmId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /tms/{tmId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /tms/{tmId}/segments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /tms/{tmId}/segments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /tms/{tmId}/segments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.clear'
				]
			}
		}
	},
	{
		displayName: 'POST /tms/{tmId}/exports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /tms/{tmId}/exports/{exportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /tms/{tmId}/exports/{exportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.download.download'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/tms/concordance',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
				]
			}
		}
	},
	{
		displayName: 'POST /tms/{tmId}/imports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /tms/{tmId}/imports/{importId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /tms/{tmId}/segments/{segmentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /tms/{tmId}/segments/{segmentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.delete'
				]
			}
		}
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		description: 'Read more about [sorting rules](#section/Introduction/Sorting)',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'orderBy',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name'
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)\n\n* __Note__: Set 0 to see TMs of root group',
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
					'translationMemory'
				],
				operation: [
					'api.tms.getMany'
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
					'translationMemory'
				],
				operation: [
					'api.tms.getMany'
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
		description: 'Translation Memory name',
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
					'translationMemory'
				],
				operation: [
					'api.tms.post'
				]
			}
		},
		placeholder: 'Knowledge Base\'s TM'
	},
	{
		displayName: 'Language Id',
		required: true,
		name: 'languageId',
		type: 'options',
		default: '',
		description: 'Translation Memory Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'languageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		type: 'options',
		default: '',
		description: 'Group Identifier – defines group to which TM is added. Get via [List Groups](#operation/api.groups.getMany)\n\n* If \'0\' – TM will be available for all projects and groups in your workspace',
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
					'translationMemory'
				],
				operation: [
					'api.tms.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		description: 'Read more about [sorting rules](#section/Introduction/Sorting)',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'orderBy',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.getMany'
				]
			}
		},
		placeholder: 'id desc'
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
					'translationMemory'
				],
				operation: [
					'api.tms.segments.getMany'
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
		displayName: 'Croql',
		name: 'croql',
		description: 'Filter segments by [CroQL](https://developer.crowdin.com/croql/)',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'croql',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.getMany'
				]
			}
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Records',
		required: true,
		name: 'records',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'records',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
				preSend: [
					normalizeFieldBody
				]
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Item',
				name: 'items',
				values: [
					{
						displayName: 'Language Id',
						name: 'languageId',
						type: 'options',
						default: '',
						description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getLanguages'
						}
					},
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						default: '',
						description: 'Record text',
						placeholder: 'Перекладений текст'
					}
				]
			}
		]
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.clear'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Source Language Id',
		name: 'sourceLanguageId',
		type: 'options',
		default: '',
		description: 'Defines Source Language in language pair. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
					'translationMemory'
				],
				operation: [
					'api.tms.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Target Language Id',
		name: 'targetLanguageId',
		type: 'options',
		default: '',
		description: 'Defines Target Language in language pair. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
					'translationMemory'
				],
				operation: [
					'api.tms.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		default: '',
		description: 'Defines TMs file format',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'tmx',
				value: 'tmx'
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'xlsx',
				value: 'xlsx'
			}
		],
		routing: {
			send: {
				property: 'format',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export TM](#operation/api.tms.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.get'
				]
			}
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export TM](#operation/api.tms.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.exports.download.download'
				]
			}
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Source Language Id',
		required: true,
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
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
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
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Auto Substitution',
		required: true,
		name: 'autoSubstitution',
		type: 'boolean',
		default: true,
		description: 'Improves TM suggestions',
		routing: {
			send: {
				property: 'autoSubstitution',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
				]
			}
		}
	},
	{
		displayName: 'Min Relevant',
		required: true,
		name: 'minRelevant',
		type: 'number',
		default: undefined,
		description: 'Show TM suggestions with specified minimum match',
		routing: {
			send: {
				property: 'minRelevant',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
				]
			}
		},
		placeholder: '60'
	},
	{
		displayName: 'Expressions',
		required: true,
		name: 'expressions',
		type: 'fixedCollection',
		default: {},
		description: 'Expressions to search\n\n__Note:__ Can\'t be used with `expression` in same request',
		routing: {
			send: {
				property: 'expressions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.projects.tms.concordance.post'
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
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)\n\nSupported file formats:\n* TMX\n* CSV\n* XLS/XLSX\n\nSee TMX 1.4b Specification',
		routing: {
			send: {
				property: 'storageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'First Line Contains Header',
		name: 'firstLineContainsHeader',
		type: 'boolean',
		default: false,
		description: 'Defines whether file includes first row header that should not be imported\n\n__Note:__ Used for upload of CSV or XLS/XLSX files only',
		routing: {
			send: {
				property: 'firstLineContainsHeader',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.post'
				]
			}
		}
	},
	{
		displayName: 'Scheme',
		name: 'scheme',
		type: 'json',
		default: '{\n  "en": 0,\n  "de": 1,\n  "pl": 2,\n  "uk": 4\n}',
		description: 'Defines data columns mapping. The passed value should be an associative array containing both language id and column number:\n* `{languageId}` – Crowdin id for the specified language. Get via [List Supported Languages](#operation/api.languages.getMany)\n* `{columnNumber}` – a column number. Please note, that column numbering starts at 0\n\n__Note:__ Required for CSV or XLS/XLSX files',
		routing: {
			send: {
				property: 'scheme',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.post'
				]
			}
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Import Id',
		name: 'importId',
		required: true,
		description: 'Import Identifier, consists of 36 characters. Get via [Import TM](#operation/api.tms.imports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.imports.get'
				]
			}
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Segment Id',
		name: 'segmentId',
		required: true,
		description: 'TM Segment Identifier. Get via [List TM Segments](#operation/api.tms.segments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTmSegments',
			loadOptionsDependsOn: [
				'tmId'
			]
		}
	},
	{
		displayName: 'Tm Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Segment Id',
		name: 'segmentId',
		required: true,
		description: 'TM Segment Identifier. Get via [List TM Segments](#operation/api.tms.segments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTmSegments',
			loadOptionsDependsOn: [
				'tmId'
			]
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
					'translationMemory'
				],
				operation: [
					'api.tms.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Group Id',
				name: 'groupId',
				type: 'options',
				default: '',
				description: 'Group Identifier – defines group to which TM is added. Get via [List Groups](#operation/api.groups.getMany)\n\n* If \'0\' – TM will be available for all projects and groups in your workspace',
				typeOptions: {
					loadOptionsMethod: 'getGroups'
				}
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Translation Memory name',
				placeholder: 'Knowledge Base\'s TM'
			},
			{
				displayName: 'Language Id',
				name: 'languageId',
				type: 'options',
				default: '',
				description: 'Translation Memory Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
					'translationMemory'
				],
				operation: [
					'api.tms.getMany'
				]
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
					'translationMemory'
				],
				operation: [
					'api.tms.segments.getMany'
				]
			}
		}
	}
];
