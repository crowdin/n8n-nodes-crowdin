// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeRootBody } from '../../../utils/preSend';

export const sourceStringsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				]
			}
		},
		options: [
			{
				name: 'List Strings',
				value: 'api.projects.strings.getMany',
				action: 'List Strings',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings'
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
				name: 'Add String',
				value: 'api.projects.strings.post',
				action: 'Add String',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/strings'
					}
				}
			},
			{
				name: 'Get String',
				value: 'api.projects.strings.get',
				action: 'Get String',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings/{{$parameter["stringId"]}}'
					}
				}
			},
			{
				name: 'Delete String',
				value: 'api.projects.strings.delete',
				action: 'Delete String',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/strings/{{$parameter["stringId"]}}'
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
		default: 'api.projects.strings.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/strings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/strings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/strings/{stringId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/strings/{stringId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.delete'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Denormalize Placeholders',
		name: 'denormalizePlaceholders',
		description: 'Enable denormalize placeholders',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '0',
				value: 0
			},
			{
				name: '1',
				value: 1
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'denormalizePlaceholders',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		description: 'Filter strings by `labelIds`. Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'labelIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabelsMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'File Id',
		name: 'fileId',
		description: 'File Identifier. Get via [List Files](#operation/api.projects.files.getMany)\n\n__Note:__ Can\'t be used with `taskId`, `directoryId` or `branchId` in same request',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'fileId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFiles',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `taskId`, `fileId` or `directoryId` in the same request',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'branchId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getBranches',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Directory Id',
		name: 'directoryId',
		description: 'Directory Identifier. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `taskId`, `fileId` or `branchId` in same request',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'directoryId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDirectories',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)\n\n__Note:__ Can\'t be used with `fileId`, `directoryId` or `branchId` in same request',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'taskId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectTasks',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Croql',
		name: 'croql',
		description: 'Filter strings by [CroQL](https://developer.crowdin.com/croql/)\n\n__Note:__ Can be used only with `denormalizePlaceholders`, `offset` and `limit` in same request',
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'Filter',
		name: 'filter',
		description: 'Filter strings by `identifier`, `text` or `context`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'filter',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'Scope',
		name: 'scope',
		description: 'Specify field to be the target of filtering. It can be one scope or a list of comma-separated scopes',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'identifier',
				value: 'identifier'
			},
			{
				name: 'text',
				value: 'text'
			},
			{
				name: 'context',
				value: 'context'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'scope',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Body',
		name: '_body',
		description: 'Add String',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.post'
				]
			}
		},
		options: [
			{
				displayName: 'String Create Form',
				name: '_stringCreateForm',
				values: [
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						default: '',
						description: 'Text for translation',
						required: true,
						placeholder: 'Not all videos are shown to users. See more'
					},
					{
						displayName: 'Identifier',
						name: 'identifier',
						type: 'string',
						default: '',
						description: 'Defines unique string identifier. Max. length is 512 characters\n\n __Note:__ Required for YAML files and XLSX files with identifiers in their schema',
						placeholder: '6a1821e6499ebae94de4b880fd93b985'
					},
					{
						displayName: 'File Id',
						name: 'fileId',
						type: 'options',
						default: '',
						description: 'File Identifier. Get via [List Files](#operation/api.projects.files.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getProjectFiles',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Context',
						name: 'context',
						type: 'string',
						default: '',
						description: 'Use to provide additional information for better source text understanding',
						placeholder: 'shown on main page'
					},
					{
						displayName: 'Is Hidden',
						name: 'isHidden',
						type: 'boolean',
						default: false,
						description: 'Defines whether to make string unavailable for translation',
						placeholder: 'false'
					},
					{
						displayName: 'Max Length',
						name: 'maxLength',
						type: 'number',
						default: 0,
						description: 'Max. length of translated text (0 – unlimited)',
						placeholder: '35'
					},
					{
						displayName: 'Label Ids',
						name: 'labelIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectLabelsMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
					}
				]
			},
			{
				displayName: 'Plural String Create Form',
				name: '_pluralStringCreateForm',
				values: [
					{
						displayName: 'Text',
						name: 'json:text',
						type: 'json',
						default: '{}',
						description: 'Text for translation',
						required: true,
						placeholder: '{"one":"string","other":"strings"}'
					},
					{
						displayName: 'Identifier',
						name: 'identifier',
						type: 'string',
						default: '',
						description: 'Defines unique string identifier. Max. length is 512 characters\n\n __Note:__ Required for YAML files and XLSX files with identifiers in their schema',
						placeholder: '6a1821e6499ebae94de4b880fd93b985'
					},
					{
						displayName: 'File Id',
						name: 'fileId',
						type: 'options',
						default: '',
						description: 'File Identifier. Get via [List Files](#operation/api.projects.files.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getProjectFiles',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Context',
						name: 'context',
						type: 'string',
						default: '',
						description: 'Use to provide additional information for better source text understanding',
						placeholder: 'shown on main page'
					},
					{
						displayName: 'Is Hidden',
						name: 'isHidden',
						type: 'boolean',
						default: false,
						description: 'Defines whether to make string unavailable for translation',
						placeholder: 'false'
					},
					{
						displayName: 'Max Length',
						name: 'maxLength',
						type: 'number',
						default: 0,
						description: 'Max. length of translated text (0 – unlimited)',
						placeholder: '35'
					},
					{
						displayName: 'Label Ids',
						name: 'labelIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectLabelsMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeRootBody
				],
				property: '_body',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		name: 'stringId',
		required: true,
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Denormalize Placeholders',
		name: 'denormalizePlaceholders',
		description: 'Enable denormalize placeholders',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '0',
				value: 0
			},
			{
				name: '1',
				value: 1
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'denormalizePlaceholders',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.get'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		name: 'stringId',
		required: true,
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		}
	}
];
