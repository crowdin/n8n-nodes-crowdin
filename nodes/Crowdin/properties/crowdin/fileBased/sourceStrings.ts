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
				description: '**Required scopes:** `project.source.string` (Read only).\n\n__Note:__ For instant translation delivery directly to user devices, please use [OTA](https://support.crowdin.com/content-delivery/). Direct API usage will exceed established rate limits, which suspends further content updates.',
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
			},
			{
				name: 'Search Strings',
				value: 'api.strings.getMany',
				action: 'Search Strings',
				description: '**Required scopes:** `project.source.string` (Read only).\n\nSearches source strings by text/context/key. Provide up to 50 `projectIds`, or omit them to search all your own projects — or another owner\'s accessible projects via `userId`.',
				routing: {
					request: {
						method: 'GET',
						url: '=/strings'
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
				name: 'Replace Text in Source Strings',
				value: 'api.projects.strings.replacements.post',
				action: 'Replace Text in Source Strings',
				description: '**Required scopes:** `project.source.string` (Read and Write).\n\nFinds a text in the project source strings and replaces it, as an [asynchronous operation](#section/Introduction/Asynchronous-Operations). Start with `dryRun` set to `true`, review the result via [Get String Replacement Summary](#operation/api.projects.strings.replacements.summary.get) and [List String Replacement Matches](#operation/api.projects.strings.replacements.matches.getMany), then run the replacement for real, optionally passing the chosen `stringIds`. Protected strings and strings of files that cannot be edited online are skipped and counted in the summary.\n\n__Note:__ Only one source string replacement that is not a dry run can run in a project at a time, and a replacement can match up to 10000 strings',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/strings/replacements'
					}
				}
			},
			{
				name: 'Get String Replacement Status',
				value: 'api.projects.strings.replacements.get',
				action: 'Get String Replacement Status',
				description: '**Required scopes:** `project.source.string` (Read only).\n\nReturns the status and progress of a source string replacement started via [Replace Text in Source Strings](#operation/api.projects.strings.replacements.post).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings/replacements/{{$parameter["replacementId"]}}'
					}
				}
			},
			{
				name: 'List String Replacement Matches',
				value: 'api.projects.strings.replacements.matches.getMany',
				action: 'List String Replacement Matches',
				description: '**Required scopes:** `project.source.string` (Read only).\n\nReturns the strings of a source string replacement, sorted by string ID. For a dry run, lists the strings a real run would change, each with its current text and the text the replacement would produce from it. For a real run, lists the strings that were changed, each with its current text. Skipped strings are not listed, and neither are strings deleted since the replacement, so a page can hold fewer items than `limit`.\n\n__Note:__ Matches are available as long as the replacement exists',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings/replacements/{{$parameter["replacementId"]}}/matches'
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
				name: 'Get String Replacement Summary',
				value: 'api.projects.strings.replacements.summary.get',
				action: 'Get String Replacement Summary',
				description: '**Required scopes:** `project.source.string` (Read only).\n\nReturns the counters of a source string replacement: how many strings matched, how many were changed and how many were skipped, and why. Every matched string is either changed or skipped.\n\n__Note:__ The counters are final once the replacement status is `finished`',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings/replacements/{{$parameter["replacementId"]}}/summary'
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
		displayName: 'GET /strings',
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
					'api.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/strings/replacements',
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
					'api.projects.strings.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/strings/replacements/{replacementId}',
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
					'api.projects.strings.replacements.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/strings/replacements/{replacementId}/matches',
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
					'api.projects.strings.replacements.matches.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/strings/replacements/{replacementId}/summary',
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
					'api.projects.strings.replacements.summary.get'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,text,type'
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
		description: 'Filter strings by [CroQL](https://developer.crowdin.com/croql/)\n\n__Note:__ Can be used only with `denormalizePlaceholders`, `orderBy`, `offset` and `limit` in same request',
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
		displayName: 'Filter',
		name: 'filter',
		required: true,
		description: 'Search strings by the fields selected in `scope`',
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
					'api.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		description: 'Project identifiers to search across. Get via [List Projects](#operation/api.projects.getMany). It can be one project or a list of comma-separated ones (max 50). All projects must belong to the same owner. Optional — omit to search all your accessible projects.',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'projectIds',
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
					'api.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'Owner (user) whose projects to search when `projectIds` is omitted. Only projects you own or manage are searched. Defaults to your own account.',
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
					'sourceStrings'
				],
				operation: [
					'api.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Scope',
		name: 'scope',
		description: 'Specify field to be the target of filtering. One of: `all`, `text`, `context`, `key`. Default is `all`',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'all',
				value: 'all'
			},
			{
				name: 'text',
				value: 'text'
			},
			{
				name: 'context',
				value: 'context'
			},
			{
				name: 'key',
				value: 'key'
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
					'api.strings.getMany'
				]
			}
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
					'api.strings.getMany'
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
					'api.strings.getMany'
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
					'api.projects.strings.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: 'Text to find in the source strings, 1 to 128 characters. Matched literally, without regular expressions\n\n__Note:__ In plural strings, only the main form is searched. On a match, file-based projects get the text replaced in every form, string-based projects in the main form only',
		routing: {
			send: {
				property: 'text',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		},
		placeholder: 'Workspace'
	},
	{
		displayName: 'Replace With',
		required: true,
		name: 'replaceWith',
		type: 'string',
		default: '',
		description: 'Text that replaces every match, up to 10000 characters. Inserted literally: `$1` or `\\0` stay as typed. An empty string removes the matches',
		routing: {
			send: {
				property: 'replaceWith',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		},
		placeholder: 'Space'
	},
	{
		displayName: 'Match Mode',
		name: 'matchMode',
		type: 'options',
		default: '',
		description: 'How `text` is matched. One of: `phrase` finds the whole phrase anywhere in a string, `allWords` finds strings that contain every word of `text` and replaces each of these words, `entireText` finds strings whose whole text equals `text`. Default is `phrase`',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'phrase',
				value: 'phrase'
			},
			{
				name: 'allWords',
				value: 'allWords'
			},
			{
				name: 'entireText',
				value: 'entireText'
			}
		],
		routing: {
			send: {
				property: 'matchMode',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'Case Sensitive',
		name: 'caseSensitive',
		type: 'boolean',
		default: false,
		description: 'If `true`, the letter case of `text` must match. Default is `false`',
		routing: {
			send: {
				property: 'caseSensitive',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'File Ids',
		name: 'fileIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the strings of the given files. Get via [List Files](#operation/api.projects.files.getMany). All project files by default\n\n__Note:__ Can\'t be used with `directoryIds` or `branchIds` in the same request',
		routing: {
			send: {
				property: 'fileIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFilesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Directory Ids',
		name: 'directoryIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the strings of the files in the given directories, nested directories included. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `fileIds` or `branchIds` in the same request',
		routing: {
			send: {
				property: 'directoryIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDirectoriesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Branch Ids',
		name: 'branchIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the strings of the files in the given branches. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `fileIds` or `directoryIds` in the same request',
		routing: {
			send: {
				property: 'branchIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getBranchesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'String Ids',
		name: 'stringIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the given strings, for example to the matches of a dry run that should really be replaced. Get via [List String Replacement Matches](#operation/api.projects.strings.replacements.matches.getMany). Up to 10000 IDs',
		routing: {
			send: {
				property: 'stringIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStringsMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Update Option',
		name: 'updateOption',
		type: 'options',
		default: '',
		description: 'What happens to the translations of the changed strings. One of: `keep_translations_and_approvals`, `keep_translations` (approvals are removed), `clear_translations_and_approvals`. Default is `keep_translations_and_approvals`',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'keep_translations_and_approvals',
				value: 'keep_translations_and_approvals'
			},
			{
				name: 'keep_translations',
				value: 'keep_translations'
			},
			{
				name: 'clear_translations_and_approvals',
				value: 'clear_translations_and_approvals'
			}
		],
		routing: {
			send: {
				property: 'updateOption',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'Dry Run',
		name: 'dryRun',
		type: 'boolean',
		default: false,
		description: 'If `true`, the matches are found and listed, but no string is changed. Default is `false`',
		routing: {
			send: {
				property: 'dryRun',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.post'
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
					'api.projects.strings.replacements.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the source string replacement. Get via [Replace Text in Source Strings](#operation/api.projects.strings.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.get'
				]
			}
		},
		placeholder: '50fb3506-4127-4ba8-8296-f97dc7e3e0c3'
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
					'api.projects.strings.replacements.matches.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the source string replacement. Get via [Replace Text in Source Strings](#operation/api.projects.strings.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.matches.getMany'
				]
			}
		},
		placeholder: '50fb3506-4127-4ba8-8296-f97dc7e3e0c3'
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
					'api.projects.strings.replacements.matches.getMany'
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
					'api.projects.strings.replacements.summary.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the source string replacement. Get via [Replace Text in Source Strings](#operation/api.projects.strings.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.summary.get'
				]
			}
		},
		placeholder: '50fb3506-4127-4ba8-8296-f97dc7e3e0c3'
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
					'api.strings.getMany'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.replacements.matches.getMany'
				]
			}
		}
	}
];
