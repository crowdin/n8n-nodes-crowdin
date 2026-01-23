// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const workflowsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'workflows'
				]
			}
		},
		options: [
			{
				name: 'List Workflow Steps',
				value: 'api.projects.workflow-steps.getMany',
				action: 'List Workflow Steps',
				description: '**Required scopes:** `project` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/workflow-steps'
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
				name: 'Get Workflow Step',
				value: 'api.projects.workflow-steps.get',
				action: 'Get Workflow Step',
				description: '**Required scopes:** `project` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/workflow-steps/{{$parameter["stepId"]}}'
					}
				}
			},
			{
				name: 'List Strings on the Workflow Step',
				value: 'api.projects.workflow-steps.strings.getMany',
				action: 'List Strings on the Workflow Step',
				description: '**Required scopes:** `project` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/workflow-steps/{{$parameter["stepId"]}}/strings'
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
				name: 'List Workflow Templates',
				value: 'api.workflow-templates.getMany',
				action: 'List Workflow Templates',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/workflow-templates'
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
				name: 'Get Workflow Template',
				value: 'api.workflow-templates.get',
				action: 'Get Workflow Template',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/workflow-templates/{{$parameter["templateId"]}}'
					}
				}
			}
		],
		default: 'api.projects.workflow-steps.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/workflow-steps',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/workflow-steps/{stepId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/workflow-steps/{stepId}/strings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /workflow-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.workflow-templates.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /workflow-templates/{templateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.workflow-templates.get'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.getMany'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Step Id',
		name: 'stepId',
		required: true,
		description: 'Workflow Step Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWorkflowSteps',
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Step Id',
		name: 'stepId',
		required: true,
		description: 'Workflow Step Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWorkflowSteps',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		description: 'Filter progress by Language Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'languageIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,text,identifier'
	},
	{
		displayName: 'Status',
		name: 'status',
		description: 'String status on the workflow step',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'todo',
				value: 'todo'
			},
			{
				name: 'done',
				value: 'done'
			},
			{
				name: 'pending',
				value: 'pending'
			},
			{
				name: 'incomplete',
				value: 'incomplete'
			},
			{
				name: 'need_review',
				value: 'need_review'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'status',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
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
		displayName: 'Group Id',
		name: 'groupId',
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)\n\n __Note__: Set 0 to see items of root group',
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
					'workflows'
				],
				operation: [
					'api.workflow-templates.getMany'
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
					'workflows'
				],
				operation: [
					'api.workflow-templates.getMany'
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
		displayName: 'Template Id',
		name: 'templateId',
		required: true,
		description: 'Workflow Template Identifier. Get via [List Workflow Templates](#operation/api.workflow-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'workflows'
				],
				operation: [
					'api.workflow-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getWorkflowTemplates'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.getMany'
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
					'workflows'
				],
				operation: [
					'api.projects.workflow-steps.strings.getMany'
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
					'workflows'
				],
				operation: [
					'api.workflow-templates.getMany'
				]
			}
		}
	}
];
