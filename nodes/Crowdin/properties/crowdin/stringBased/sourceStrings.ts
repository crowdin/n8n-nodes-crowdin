// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeRootBody, normalizeFieldBody } from '../../../utils/preSend';

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
			},
			{
				name: 'Upload Strings Status',
				value: 'api.projects.strings.uploads.get',
				action: 'Upload Strings Status',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings/uploads/{{$parameter["uploadId"]}}'
					}
				}
			},
			{
				name: 'Upload Strings',
				value: 'api.projects.strings.uploads.post',
				action: 'Upload Strings',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/strings/uploads'
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
		displayName: 'GET /projects/{projectId}/strings/uploads/{uploadId}',
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
					'api.projects.strings.uploads.get'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/strings/uploads',
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
					'api.projects.strings.uploads.post'
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
		displayName: 'Branch Id',
		name: 'branchId',
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `taskId` in the same request',
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
		displayName: 'Task Id',
		name: 'taskId',
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)\n\n__Note:__ Can\'t be used with `branchId` in same request',
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
						description: 'Defines unique string identifier',
						required: true,
						placeholder: '6a1821e6499ebae94de4b880fd93b985'
					},
					{
						displayName: 'Branch Id',
						name: 'branchId',
						type: 'options',
						default: '',
						description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getBranches',
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
						description: 'Defines unique string identifier. Max. length is 512 characters',
						required: true,
						placeholder: '6a1821e6499ebae94de4b880fd93b985'
					},
					{
						displayName: 'Branch Id',
						name: 'branchId',
						type: 'options',
						default: '',
						description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getBranches',
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
					'api.projects.strings.uploads.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Upload Id',
		name: 'uploadId',
		required: true,
		description: 'Upload Strings Identifier, consists of 36 characters. Get via [Upload Strings](#operation/api.projects.strings.uploads.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.uploads.get'
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
					'api.projects.strings.uploads.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.uploads.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Branch Id',
		required: true,
		name: 'branchId',
		type: 'options',
		default: '',
		description: 'Branch Identifier — defines branch to which file will be added. Get via [List Branches](#operation/api.projects.branches.getMany)',
		routing: {
			send: {
				property: 'branchId',
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
					'api.projects.strings.uploads.post'
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
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Values available:\n * empty value or \'auto\' — Try to detect file type by extension or MIME type\n * \'android\' — Android (*.xml)\n * \'macosx\' — Mac OS X / iOS (*.strings)\n * \'arb\' — Application Resource Bundle (*.arb)\n * \'csv\' — Comma Separated Values (*.csv)\n * \'json\' — Generic JSON (*.json)\n * \'xliff\' — XLIFF (*.xliff, *.xlf)\n * \'xliff_two\' — XLIFF 2.0 (*.xliff, *.xlf)\n * \'xlsx\' — Microsoft Excel (*.xlsx)\n * \'resx\' — .NET, Windows Phone (*.resx)\n * \'gettext\' — GNU GetText (*.po, *.pot)\n * \'i18next_json\' — i18next (*.json)\n * \'properties\' — Java (*.properties)\n * \'properties_xml\' — Java Application (*.xml)\n * \'properties_play\' — Play Framework\n * \'yaml\' — Ruby On Rails (*.yaml, *.yml)\n * \'string_catalog\' — String Catalog (*.xcstrings)\n * \'nestjs_i18n\' — NestJS i18n (*.json)\n * \'stringsdict\' — iOS (*.stringsdict)',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'auto',
				value: 'auto'
			},
			{
				name: 'android',
				value: 'android'
			},
			{
				name: 'macosx',
				value: 'macosx'
			},
			{
				name: 'arb',
				value: 'arb'
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'json',
				value: 'json'
			},
			{
				name: 'xlsx',
				value: 'xlsx'
			},
			{
				name: 'xliff',
				value: 'xliff'
			},
			{
				name: 'xliff_two',
				value: 'xliff_two'
			},
			{
				name: 'resx',
				value: 'resx'
			},
			{
				name: 'gettext',
				value: 'gettext'
			},
			{
				name: 'i18next_json',
				value: 'i18next_json'
			},
			{
				name: 'macosx',
				value: 'macosx'
			},
			{
				name: 'properties',
				value: 'properties'
			},
			{
				name: 'properties_xml',
				value: 'properties_xml'
			},
			{
				name: 'properties_play',
				value: 'properties_play'
			},
			{
				name: 'yaml',
				value: 'yaml'
			},
			{
				name: 'string_catalog',
				value: 'string_catalog'
			},
			{
				name: 'nestjs_i18n',
				value: 'nestjs_i18n'
			},
			{
				name: 'stringsdict',
				value: 'stringsdict'
			}
		],
		routing: {
			send: {
				property: 'type',
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
					'api.projects.strings.uploads.post'
				]
			}
		}
	},
	{
		displayName: 'Parser Version',
		name: 'parserVersion',
		type: 'number',
		default: 0,
		description: 'Using latest parser version by default.\n\n__Note:__ Must be used together with `type`',
		routing: {
			send: {
				property: 'parserVersion',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.uploads.post'
				]
			}
		},
		placeholder: '1'
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		type: 'multiOptions',
		default: [],
		description: 'Attach labels to strings. Get via [List Labels](#operation/api.projects.labels.getMany)',
		routing: {
			send: {
				property: 'labelIds',
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
					'api.projects.strings.uploads.post'
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
		displayName: 'Update Strings',
		name: 'updateStrings',
		type: 'boolean',
		default: false,
		description: 'Update strings that have the same keys',
		routing: {
			send: {
				property: 'updateStrings',
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
					'api.projects.strings.uploads.post'
				]
			}
		}
	},
	{
		displayName: 'Cleanup Mode',
		name: 'cleanupMode',
		type: 'boolean',
		default: false,
		description: 'If `true`, all strings with a system label that do not exist in the file will be deleted.',
		routing: {
			send: {
				property: 'cleanupMode',
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
					'api.projects.strings.uploads.post'
				]
			}
		}
	},
	{
		displayName: 'Import Options',
		name: 'importOptions',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.uploads.post'
				]
			}
		},
		options: [
			{
				displayName: 'Spreadsheet File Upload Options',
				name: '_spreadsheetFileUploadOptions',
				values: [
					{
						displayName: 'Spreadsheet File Upload Schema for String-Based Projects',
						name: 'scheme',
						type: 'fixedCollection',
						default: {},
						description: 'Defines data columns mapping. The column numbering starts at 0',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'None',
										name: 'none',
										type: 'number',
										default: 0,
										description: 'Defines empty column'
									},
									{
										displayName: 'Identifier',
										name: 'identifier',
										type: 'number',
										default: 0,
										description: 'Defines identifier column number'
									},
									{
										displayName: 'Source Phrase',
										name: 'sourcePhrase',
										type: 'number',
										default: 0,
										description: 'Defines source phrase column number'
									},
									{
										displayName: 'Source Or Translation',
										name: 'sourceOrTranslation',
										type: 'number',
										default: 0,
										description: 'Defines source or translation column number'
									},
									{
										displayName: 'Translation',
										name: 'translation',
										type: 'number',
										default: 0,
										description: 'Defines translation column number'
									},
									{
										displayName: 'Context',
										name: 'context',
										type: 'number',
										default: 0,
										description: 'Defines context column number'
									},
									{
										displayName: 'Translatable',
										name: 'translatable',
										type: 'number',
										default: 0,
										description: 'Defines visible status `yes` as show and `no` as hidden'
									},
									{
										displayName: 'Additional Properties',
										name: 'spread:additionalProperties',
										description: 'Defines column number for the specified language. Use language identifier as a key (e.g., `en`, `de`) and column number as a value',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										placeholder: 'Add Property',
										options: [
											{
												displayName: 'Items',
												name: 'items',
												values: [
													{
														displayName: 'Key',
														name: 'key',
														type: 'string',
														default: ''
													},
													{
														displayName: 'Value',
														name: 'value',
														type: 'number',
														default: 0,
														description: 'Defines column number for the specified language. Use language identifier as a key (e.g., `en`, `de`) and column number as a value',
														placeholder: '0'
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'StringCatalog File Import Options',
				name: '_stringCatalogFileImportOptions',
				values: [
					{
						displayName: 'Import Key As Source',
						name: 'importKeyAsSource',
						type: 'boolean',
						default: true,
						description: 'Determines whether to import the key as source string if it does not exist.'
					},
					{
						displayName: 'Import Translations',
						name: 'importTranslations',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import translations from the file'
					}
				]
			},
			{
				displayName: 'Other Files Import Options',
				name: '_otherFilesImportOptions',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments. Only for __android__, __arb__, __macosx__, __json__, __xlsx__, __csv__, __xliff13__, __xliff_two4__ files.\n\n__Note:__ When Content segmentation is enabled, the translation upload is handled by an experimental machine learning technology. To achieve the best results, we recommend uploading translation files with the same or as close as possible file structure as in source files.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'importOptions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Update Option',
		name: 'updateOption',
		type: 'options',
		default: '',
		description: 'Defines whether to keep existing translations and approvals for updated strings.\n\n__Note:__  Must be used together with `updateStrings = true`',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'clear_translations_and_approvals',
				value: 'clear_translations_and_approvals'
			},
			{
				name: 'keep_translations',
				value: 'keep_translations'
			},
			{
				name: 'keep_translations_and_approvals',
				value: 'keep_translations_and_approvals'
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
					'api.projects.strings.uploads.post'
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
					'api.projects.strings.getMany'
				]
			}
		}
	}
];
