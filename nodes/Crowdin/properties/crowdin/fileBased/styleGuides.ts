// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const styleGuidesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				]
			}
		},
		options: [
			{
				name: 'List Style Guides',
				value: 'api.style-guides.getMany',
				action: 'List Style Guides',
				description: '**Required scopes:** `style-guide` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/style-guides'
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
				name: 'Create Style Guide',
				value: 'api.style-guides.post',
				action: 'Create Style Guide',
				description: '**Required scopes:** `style-guide` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/style-guides'
					}
				}
			},
			{
				name: 'Get Style Guide',
				value: 'api.style-guides.get',
				action: 'Get Style Guide',
				description: '**Required scopes:** `style-guide` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/style-guides/{{$parameter["styleGuideId"]}}'
					}
				}
			},
			{
				name: 'Delete Style Guide',
				value: 'api.style-guides.delete',
				action: 'Delete Style Guide',
				description: '**Required scopes:** `style-guide` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/style-guides/{{$parameter["styleGuideId"]}}'
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
				name: 'Edit Style Guide',
				value: 'api.style-guides.patch',
				action: 'Edit Style Guide',
				description: '**Required scopes:** `style-guide` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/style-guides/{{$parameter["styleGuideId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.style-guides.getMany'
	},
	{
		displayName: 'GET /style-guides',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /style-guides',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		}
	},
	{
		displayName: 'GET /style-guides/{styleGuideId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /style-guides/{styleGuideId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /style-guides/{styleGuideId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.patch'
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
					'styleGuides'
				],
				operation: [
					'api.style-guides.getMany'
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
					'styleGuides'
				],
				operation: [
					'api.style-guides.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'List user style guides',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'userId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Style Guide name',
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
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		},
		placeholder: 'Be My Eyes iOS\'s Style Guide'
	},
	{
		displayName: 'Ai Instructions',
		name: 'aiInstructions',
		type: 'string',
		default: '',
		description: 'Style Guide instructions for AI models',
		routing: {
			send: {
				property: 'aiInstructions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		type: 'multiOptions',
		default: [],
		description: 'Style Guide Language Identifier list. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'languageIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		type: 'multiOptions',
		default: [],
		description: 'Project ids to assign style guide to',
		routing: {
			send: {
				property: 'projectIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Is Shared',
		name: 'isShared',
		type: 'boolean',
		default: false,
		description: 'Whether style guide should be shared to all projects within the account',
		routing: {
			send: {
				property: 'isShared',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage identifier.',
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
					'styleGuides'
				],
				operation: [
					'api.style-guides.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Style Guide Id',
		name: 'styleGuideId',
		required: true,
		description: 'Style Guide Identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.get'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Style Guide Id',
		name: 'styleGuideId',
		required: true,
		description: 'Style Guide Identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.delete'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Style Guide Id',
		name: 'styleGuideId',
		required: true,
		description: 'Style Guide Identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'styleGuides'
				],
				operation: [
					'api.style-guides.patch'
				]
			}
		},
		placeholder: '0'
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
					'styleGuides'
				],
				operation: [
					'api.style-guides.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Style Guide name',
				placeholder: 'Be My Eyes iOS\'s Style Guide'
			},
			{
				displayName: 'Ai Instructions',
				name: 'aiInstructions',
				type: 'string',
				default: '',
				description: 'Style Guide instructions for AI models'
			},
			{
				displayName: 'Language Ids',
				name: 'languageIds',
				type: 'multiOptions',
				default: [],
				description: 'Style Guide Language Identifier list. Get via [List Supported Languages](#operation/api.languages.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getLanguagesMulti'
				}
			},
			{
				displayName: 'Project Ids',
				name: 'projectIds',
				type: 'multiOptions',
				default: [],
				description: 'Project ids to assign style guide to',
				typeOptions: {
					loadOptionsMethod: 'getProjectsMulti'
				}
			},
			{
				displayName: 'Is Shared',
				name: 'isShared',
				type: 'boolean',
				default: false,
				description: 'Whether style guide should be shared to all projects within the account'
			},
			{
				displayName: 'Storage Id',
				name: 'storageId',
				type: 'options',
				default: '',
				description: 'Storage identifier.',
				typeOptions: {
					loadOptionsMethod: 'getStorages'
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
					'styleGuides'
				],
				operation: [
					'api.style-guides.getMany'
				]
			}
		}
	}
];
