// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const labelsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'labels'
				]
			}
		},
		options: [
			{
				name: 'Assign Label to Strings',
				value: 'api.projects.labels.strings.post',
				action: 'Assign Label to Strings',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}/strings'
					}
				}
			},
			{
				name: 'Unassign Label from Strings',
				value: 'api.projects.labels.strings.deleteMany',
				action: 'Unassign Label from Strings',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}/strings'
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
				name: 'List Labels',
				value: 'api.projects.labels.getMany',
				action: 'List Labels',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/labels'
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
				name: 'Add Label',
				value: 'api.projects.labels.post',
				action: 'Add Label',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/labels'
					}
				}
			},
			{
				name: 'Get Label',
				value: 'api.projects.labels.get',
				action: 'Get Label',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}'
					}
				}
			},
			{
				name: 'Delete Label',
				value: 'api.projects.labels.delete',
				action: 'Delete Label',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}'
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
				name: 'Edit Label',
				value: 'api.projects.labels.patch',
				action: 'Edit Label',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Assign Label to Screenshots',
				value: 'api.projects.labels.screenshots.post',
				action: 'Assign Label to Screenshots',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}/screenshots'
					}
				}
			},
			{
				name: 'Unassign Label from Screenshots',
				value: 'api.projects.labels.screenshots.deleteMany',
				action: 'Unassign Label from Screenshots',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/labels/{{$parameter["labelId"]}}/screenshots'
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
		default: 'api.projects.labels.strings.post'
	},
	{
		displayName: 'POST /projects/{projectId}/labels/{labelId}/strings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.strings.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/labels/{labelId}/strings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.strings.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/labels',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/labels/{labelId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/labels/{labelId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/labels/{labelId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.patch'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/labels/{labelId}/screenshots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/labels/{labelId}/screenshots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.deleteMany'
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
					'labels'
				],
				operation: [
					'api.projects.labels.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'String Ids',
		required: true,
		name: 'stringIds',
		type: 'multiOptions',
		default: [],
		description: 'String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)\n\n__Note:__ You can assign up to 500 strings at a time.',
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
					'labels'
				],
				operation: [
					'api.projects.labels.strings.post'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.strings.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.strings.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'String Ids',
		name: 'stringIds',
		required: true,
		description: 'String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)\n\n__Note:__ You can unassign up to 500 strings at a time.',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'stringIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.strings.deleteMany'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.getMany'
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
					'labels'
				],
				operation: [
					'api.projects.labels.getMany'
				]
			}
		},
		placeholder: 'title desc,id'
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
					'labels'
				],
				operation: [
					'api.projects.labels.getMany'
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
		displayName: 'Is System',
		name: 'isSystem',
		description: 'Filter collection by isSystem value',
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
				property: 'isSystem',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.getMany'
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
					'labels'
				],
				operation: [
					'api.projects.labels.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Title',
		required: true,
		name: 'title',
		type: 'string',
		default: '',
		description: 'Label title',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.post'
				]
			}
		},
		placeholder: 'main'
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
					'labels'
				],
				operation: [
					'api.projects.labels.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
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
					'labels'
				],
				operation: [
					'api.projects.labels.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
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
					'labels'
				],
				operation: [
					'api.projects.labels.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
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
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Screenshot Ids',
		required: true,
		name: 'screenshotIds',
		type: 'multiOptions',
		default: [],
		description: 'Screenshot Identifiers. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)\n\n__Note:__ You can assign up to 500 screenshots at a time.',
		routing: {
			send: {
				property: 'screenshotIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshotsMulti',
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
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Label Id',
		name: 'labelId',
		required: true,
		description: 'Label Identifier. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabels',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Screenshot Ids',
		name: 'screenshotIds',
		required: true,
		description: 'Screenshots Identifiers. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)\n\n__Note:__ You can unassign up to 500 screenshots at a time.',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'screenshotIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'labels'
				],
				operation: [
					'api.projects.labels.screenshots.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshotsMulti',
			loadOptionsDependsOn: [
				'projectId'
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
					'labels'
				],
				operation: [
					'api.projects.labels.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Label title',
				placeholder: 'main'
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
					'labels'
				],
				operation: [
					'api.projects.labels.getMany'
				]
			}
		}
	}
];
