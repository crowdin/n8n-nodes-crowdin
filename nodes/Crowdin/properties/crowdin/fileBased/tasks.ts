// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, normalizeFieldBody } from '../../../utils/preSend';

export const tasksProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'tasks'
				]
			}
		},
		options: [
			{
				name: 'List Tasks',
				value: 'api.users.tasks.getMany',
				action: 'List Tasks',
				description: '**Required scopes:** `project.task` (Read only).\n\nLists all of the user\'s project tasks.',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/tasks'
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
				name: 'Export Project Task Strings',
				value: 'api.projects.tasks.exports.post',
				action: 'Export Project Task Strings',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}/exports'
					}
				}
			},
			{
				name: 'List Project Task Settings Templates',
				value: 'api.projects.tasks.settings-templates.getMany',
				action: 'List Project Task Settings Templates',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/settings-templates'
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
				name: 'Add Project Task Settings Template',
				value: 'api.projects.tasks.settings-templates.post',
				action: 'Add Project Task Settings Template',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/settings-templates'
					}
				}
			},
			{
				name: 'Get Project Task Settings Template',
				value: 'api.projects.tasks.settings-templates.get',
				action: 'Get Project Task Settings Template',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/settings-templates/{{$parameter["taskSettingsTemplateId"]}}'
					}
				}
			},
			{
				name: 'Delete Project Task Settings Template',
				value: 'api.projects.tasks.settings-templates.delete',
				action: 'Delete Project Task Settings Template',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/settings-templates/{{$parameter["taskSettingsTemplateId"]}}'
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
				name: 'Edit Project Task Settings Template',
				value: 'api.projects.tasks.settings-templates.patch',
				action: 'Edit Project Task Settings Template',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/settings-templates/{{$parameter["taskSettingsTemplateId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Project Tasks',
				value: 'api.projects.tasks.getMany',
				action: 'List Project Tasks',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/tasks'
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
				name: 'Add Project Task',
				value: 'api.projects.tasks.post',
				action: 'Add Project Task',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/tasks'
					}
				}
			},
			{
				name: 'Get Project Task',
				value: 'api.projects.tasks.get',
				action: 'Get Project Task',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}'
					}
				}
			},
			{
				name: 'Delete Project Task',
				value: 'api.projects.tasks.delete',
				action: 'Delete Project Task',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}'
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
				name: 'List Project Task Comments',
				value: 'api.projects.tasks.comments.getMany',
				action: 'List Project Task Comments',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}/comments'
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
				name: 'Add Project Task Comment',
				value: 'api.projects.tasks.comments.post',
				action: 'Add Project Task Comment',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}/comments'
					}
				}
			},
			{
				name: 'Get Project Task Comment',
				value: 'api.projects.tasks.comments.get',
				action: 'Get Project Task Comment',
				description: '**Required scopes:** `project.task` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}/comments/{{$parameter["commentId"]}}'
					}
				}
			},
			{
				name: 'Delete Project Task Comment',
				value: 'api.projects.tasks.comments.delete',
				action: 'Delete Project Task Comment',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}/comments/{{$parameter["commentId"]}}'
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
				name: 'Edit Project Task Comment',
				value: 'api.projects.tasks.comments.patch',
				action: 'Edit Project Task Comment',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}/comments/{{$parameter["commentId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List User Tasks',
				value: 'api.user.tasks.getMany',
				action: 'List User Tasks',
				routing: {
					request: {
						method: 'GET',
						url: '=/user/tasks'
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
			}
		],
		default: 'api.users.tasks.getMany'
	},
	{
		displayName: 'GET /users/{userId}/tasks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/tasks/{taskId}/exports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.exports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/tasks/settings-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/tasks/settings-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/tasks/settings-templates/{taskSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/tasks/settings-templates/{taskSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/tasks/settings-templates/{taskSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/tasks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/tasks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/tasks/{taskId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/tasks/{taskId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/tasks/{taskId}/comments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/tasks/{taskId}/comments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/tasks/{taskId}/comments/{commentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/tasks/{taskId}/comments/{commentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/tasks/{taskId}/comments/{commentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /user/tasks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.user.tasks.getMany'
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
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,title'
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
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
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
		displayName: 'Status',
		name: 'status',
		description: 'List tasks with specified statuses. It can be one status or a list of comma-separated status values',
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
				name: 'in_progress',
				value: 'in_progress'
			},
			{
				name: 'done',
				value: 'done'
			},
			{
				name: 'closed',
				value: 'closed'
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
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'Filter by task type. It can be one type or a list of comma-separated type values\n\n- 0 - translate by own translators\n- 1 - proofread by own proofreaders\n- 2 - translate by vendor\n- 3 - proofread by vendor',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'type',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		placeholder: '1,2'
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		description: 'Filter by project IDs. It can be one ID or a list of comma-separated ID values',
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
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Assignee Ids',
		name: 'assigneeIds',
		description: 'Filter by assignee user IDs. It can be one ID or a list of comma-separated ID values',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'assigneeIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
		}
	},
	{
		displayName: 'Creator Ids',
		name: 'creatorIds',
		description: 'Filter by creator user IDs. It can be one ID or a list of comma-separated ID values',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'creatorIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
		}
	},
	{
		displayName: 'Target Language Ids',
		name: 'targetLanguageIds',
		description: 'Filter by target language IDs. It can be one ID or a list of comma-separated ID values',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'targetLanguageIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Source Language Ids',
		name: 'sourceLanguageIds',
		description: 'Filter by source language IDs. It can be one ID or a list of comma-separated ID values. Cannot be used together with projectIds',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'sourceLanguageIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Created At From',
		name: 'dateTime:createdAtFrom',
		description: 'Filter tasks created from this date (ISO 8601)',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'createdAtFrom',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		placeholder: '2025-01-01T00:00:00Z'
	},
	{
		displayName: 'Created At To',
		name: 'dateTime:createdAtTo',
		description: 'Filter tasks created until this date (ISO 8601)',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'createdAtTo',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		placeholder: '2025-12-31T23:59:59Z'
	},
	{
		displayName: 'Deadline From',
		name: 'dateTime:deadlineFrom',
		description: 'Filter tasks with deadline from this date (ISO 8601)',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'deadlineFrom',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		placeholder: '2025-01-01T00:00:00Z'
	},
	{
		displayName: 'Deadline To',
		name: 'dateTime:deadlineTo',
		description: 'Filter tasks with deadline until this date (ISO 8601)',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'deadlineTo',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
				]
			}
		},
		placeholder: '2025-12-31T23:59:59Z'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.exports.post'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Template name',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.post'
				]
			}
		},
		placeholder: 'Default template'
	},
	{
		displayName: 'Config',
		required: true,
		name: 'config',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'config',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}',
				preSend: [
					normalizeFieldBody
				]
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.post'
				]
			}
		},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				values: [
					{
						displayName: 'Languages',
						name: 'languages',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
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
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										routing: {
											send: {
												property: 'config.languages.languageId',
												propertyInDotNotation: false,
												type: 'body',
												value: '={{ $value || undefined }}'
											}
										},
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids',
										routing: {
											send: {
												property: 'config.languages.userIds',
												propertyInDotNotation: false,
												type: 'body',
												value: '={{ $value }}'
											}
										}
									}
								]
							}
						],
						required: true
					}
				]
			}
		]
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Settings Template Id',
		name: 'taskSettingsTemplateId',
		required: true,
		description: 'Task Settings Template Identifier. Get via [List Report Settings Template](#operation/api.projects.tasks.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectTaskSettingsTemplates',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Settings Template Id',
		name: 'taskSettingsTemplateId',
		required: true,
		description: 'Task Settings Template Identifier. Get via [List Report Settings Template](#operation/api.projects.tasks.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectTaskSettingsTemplates',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Settings Template Id',
		name: 'taskSettingsTemplateId',
		required: true,
		description: 'Task Settings Template Identifier. Get via [List Report Settings Template](#operation/api.projects.tasks.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectTaskSettingsTemplates',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,title'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
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
		displayName: 'Status',
		name: 'status',
		description: 'List tasks with specified statuses. It can be one status or a list of comma-separated status values',
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
				name: 'in_progress',
				value: 'in_progress'
			},
			{
				name: 'done',
				value: 'done'
			},
			{
				name: 'closed',
				value: 'closed'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
				]
			}
		}
	},
	{
		displayName: 'Assignee Id',
		name: 'assigneeId',
		description: 'List tasks for specified assignee.',
		default: 0,
		type: 'number',
		routing: {
			send: {
				type: 'query',
				property: 'assigneeId',
				value: '={{ $value !== 0 ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
				]
			}
		},
		placeholder: '123'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.post'
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
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.post'
				]
			}
		},
		options: [
			{
				displayName: 'Crowdin Task Create Form',
				name: '_crowdinTaskCreateForm',
				values: [
					{
						displayName: 'Form Type',
						name: '_subType',
						type: 'fixedCollection',
						default: {},
						description: 'Select the form type',
						options: [
							{
								displayName: 'CreateByFileIdsForm',
								name: '_createByFileIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 0,
										description: 'Task type:\n * 0 - translate\n * 1 - proofread',
										required: true,
										options: [
											{
												name: '0',
												value: 0
											},
											{
												name: '1',
												value: 1
											}
										]
									},
									{
										displayName: 'File Ids',
										name: 'fileIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectFilesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task File Identifiers. Get via [List Files](#operation/api.projects.files.getMany)',
										required: true
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
									},
									{
										displayName: 'Label Match Rule',
										name: 'labelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `labelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Exclude Label Ids',
										name: 'excludeLabelIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectLabelsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Exclude Label Match Rule',
										name: 'excludeLabelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for excluded labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `excludeLabelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Split Content',
										name: 'splitContent',
										type: 'boolean',
										default: false,
										description: 'Split content for task',
										placeholder: 'true'
									},
									{
										displayName: 'Skip Assigned Strings',
										name: 'skipAssignedStrings',
										type: 'boolean',
										default: false,
										description: 'Skip strings already included in other tasks',
										placeholder: 'true'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` or `type=2` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Assignees',
										name: 'assignees',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: undefined,
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified'
													}
												]
											}
										]
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Defines task deadline date\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only)\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only)\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							},
							{
								displayName: 'CreateByStringIdsForm',
								name: '_createByStringIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 0,
										description: 'Task type:\n * 0 - translate\n * 1 - proofread',
										required: true,
										options: [
											{
												name: '0',
												value: 0
											},
											{
												name: '1',
												value: 1
											}
										]
									},
									{
										displayName: 'String Ids',
										name: 'stringIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectStringsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)',
										required: true
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Split Content',
										name: 'splitContent',
										type: 'boolean',
										default: false,
										description: 'Split content for task',
										placeholder: 'true'
									},
									{
										displayName: 'Skip Assigned Strings',
										name: 'skipAssignedStrings',
										type: 'boolean',
										default: false,
										description: 'Skip strings already included in other tasks',
										placeholder: 'true'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` or `type=2` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Assignees',
										name: 'assignees',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: undefined,
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified'
													}
												]
											}
										]
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Defines task deadline date\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Crowdin Language Service Task Create Form',
				name: '_crowdinLanguageServiceTaskCreateForm',
				values: [
					{
						displayName: 'Form Type',
						name: '_subType',
						type: 'fixedCollection',
						default: {},
						description: 'Select the form type',
						options: [
							{
								displayName: 'CreateByFileIdsForm',
								name: '_createByFileIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 2,
										description: 'Task type:\n * 2 - translate by vendor\n * 3 - proofread by vendor',
										required: true,
										options: [
											{
												name: '2',
												value: 2
											},
											{
												name: '3',
												value: 3
											}
										]
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n * Crowdin Language Services',
										required: true
									},
									{
										displayName: 'File Ids',
										name: 'fileIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectFilesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task File Identifiers. Get via [List Files](#operation/api.projects.files.getMany)',
										required: true
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
									},
									{
										displayName: 'Label Match Rule',
										name: 'labelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `labelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Exclude Label Ids',
										name: 'excludeLabelIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectLabelsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Exclude Label Match Rule',
										name: 'excludeLabelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for excluded labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `excludeLabelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to include only pretranslated strings',
										placeholder: 'true'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							},
							{
								displayName: 'CreateByStringIdsForm',
								name: '_createByStringIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 2,
										description: 'Task type:\n * 2 - translate by vendor\n * 3 - proofread by vendor',
										required: true,
										options: [
											{
												name: '2',
												value: 2
											},
											{
												name: '3',
												value: 3
											}
										]
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n * "crowdin_language_service" - Crowdin Language Services',
										required: true
									},
									{
										displayName: 'String Ids',
										name: 'stringIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectStringsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)',
										required: true
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to include only pretranslated strings',
										placeholder: 'true'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Crowdin Vendor Oht Task Create Form',
				name: '_crowdinVendorOhtTaskCreateForm',
				values: [
					{
						displayName: 'Form Type',
						name: '_subType',
						type: 'fixedCollection',
						default: {},
						description: 'Select the form type',
						options: [
							{
								displayName: 'CreateByFileIdsForm',
								name: '_createByFileIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 2,
										description: 'Task type:\n * 2 - translate by vendor\n * 3 - proofread by vendor',
										required: true,
										options: [
											{
												name: '2',
												value: 2
											},
											{
												name: '3',
												value: 3
											}
										]
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n * "oht" - OneHourTranslation',
										required: true
									},
									{
										displayName: 'File Ids',
										name: 'fileIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectFilesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task File Identifiers. Get via [List Files](#operation/api.projects.files.getMany)',
										required: true
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
									},
									{
										displayName: 'Label Match Rule',
										name: 'labelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n __Note:__ Can only be used when `labelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Exclude Label Ids',
										name: 'excludeLabelIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectLabelsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Exclude Label Match Rule',
										name: 'excludeLabelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for excluded labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n __Note:__ Can only be used when `excludeLabelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Expertise',
										name: 'expertise',
										type: 'options',
										default: '',
										description: 'Task expertise:\n *  "standard"\n *  "mobile-applications"\n *  "software-it"\n *  "gaming-video-games"\n *  "technical-engineering"\n *  "marketing-consumer-media"\n *  "business-finance"\n *  "legal-certificate"\n *  "medical"\n *  "ad-words-banners"\n *  "automotive-aerospace"\n *  "scientific"\n *  "scientific-academic"\n *  "tourism"\n *  "training-employee-handbooks"\n *  "forex-crypto"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'standard',
												value: 'standard'
											},
											{
												name: 'mobile-applications',
												value: 'mobile-applications'
											},
											{
												name: 'software-it',
												value: 'software-it'
											},
											{
												name: 'gaming-video-games',
												value: 'gaming-video-games'
											},
											{
												name: 'technical-engineering',
												value: 'technical-engineering'
											},
											{
												name: 'marketing-consumer-media',
												value: 'marketing-consumer-media'
											},
											{
												name: 'business-finance',
												value: 'business-finance'
											},
											{
												name: 'legal-certificate',
												value: 'legal-certificate'
											},
											{
												name: 'medical',
												value: 'medical'
											},
											{
												name: 'ad-words-banners',
												value: 'ad-words-banners'
											},
											{
												name: 'automotive-aerospace',
												value: 'automotive-aerospace'
											},
											{
												name: 'scientific',
												value: 'scientific'
											},
											{
												name: 'scientific-academic',
												value: 'scientific-academic'
											},
											{
												name: 'tourism',
												value: 'tourism'
											},
											{
												name: 'training-employee-handbooks',
												value: 'training-employee-handbooks'
											},
											{
												name: 'forex-crypto',
												value: 'forex-crypto'
											}
										]
									},
									{
										displayName: 'Edit Service',
										name: 'editService',
										type: 'boolean',
										default: false,
										description: 'Enables Edit stage for all jobs',
										placeholder: 'true'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to include only pretranslated strings',
										placeholder: 'true'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only)\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							},
							{
								displayName: 'CreateByStringIdsForm',
								name: '_createByStringIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 2,
										description: 'Task type:\n * 2 - translate by vendor\n * 3 - proofread by vendor',
										required: true,
										options: [
											{
												name: '2',
												value: 2
											},
											{
												name: '3',
												value: 3
											}
										]
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n * "oht" - OneHourTranslation',
										required: true
									},
									{
										displayName: 'String Ids',
										name: 'stringIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectStringsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)',
										required: true
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Expertise',
										name: 'expertise',
										type: 'options',
										default: '',
										description: 'Task expertise:\n *  "standard"\n *  "mobile-applications"\n *  "software-it"\n *  "gaming-video-games"\n *  "technical-engineering"\n *  "marketing-consumer-media"\n *  "business-finance"\n *  "legal-certificate"\n *  "medical"\n *  "ad-words-banners"\n *  "automotive-aerospace"\n *  "scientific"\n *  "scientific-academic"\n *  "tourism"\n *  "training-employee-handbooks"\n *  "forex-crypto"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'standard',
												value: 'standard'
											},
											{
												name: 'mobile-applications',
												value: 'mobile-applications'
											},
											{
												name: 'software-it',
												value: 'software-it'
											},
											{
												name: 'gaming-video-games',
												value: 'gaming-video-games'
											},
											{
												name: 'technical-engineering',
												value: 'technical-engineering'
											},
											{
												name: 'marketing-consumer-media',
												value: 'marketing-consumer-media'
											},
											{
												name: 'business-finance',
												value: 'business-finance'
											},
											{
												name: 'legal-certificate',
												value: 'legal-certificate'
											},
											{
												name: 'medical',
												value: 'medical'
											},
											{
												name: 'ad-words-banners',
												value: 'ad-words-banners'
											},
											{
												name: 'automotive-aerospace',
												value: 'automotive-aerospace'
											},
											{
												name: 'scientific',
												value: 'scientific'
											},
											{
												name: 'scientific-academic',
												value: 'scientific-academic'
											},
											{
												name: 'tourism',
												value: 'tourism'
											},
											{
												name: 'training-employee-handbooks',
												value: 'training-employee-handbooks'
											},
											{
												name: 'forex-crypto',
												value: 'forex-crypto'
											}
										]
									},
									{
										displayName: 'Edit Service',
										name: 'editService',
										type: 'boolean',
										default: false,
										description: 'Enables Edit stage for all jobs',
										placeholder: 'true'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to include only pretranslated strings',
										placeholder: 'true'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Crowdin Vendor Gengo Task Create Form',
				name: '_crowdinVendorGengoTaskCreateForm',
				values: [
					{
						displayName: 'Form Type',
						name: '_subType',
						type: 'fixedCollection',
						default: {},
						description: 'Select the form type',
						options: [
							{
								displayName: 'CreateByFileIdsForm',
								name: '_createByFileIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'number',
										default: undefined,
										description: 'Task type:\n * 2 - translate by vendor',
										required: true
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n * "gengo" - Gengo',
										required: true
									},
									{
										displayName: 'File Ids',
										name: 'fileIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectFilesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task File Identifiers. Get via [List Files](#operation/api.projects.files.getMany)',
										required: true
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
									},
									{
										displayName: 'Label Match Rule',
										name: 'labelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `labelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Exclude Label Ids',
										name: 'excludeLabelIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectLabelsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Exclude Label Match Rule',
										name: 'excludeLabelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for excluded labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `excludeLabelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Expertise',
										name: 'expertise',
										type: 'options',
										default: '',
										description: 'Task expertise:\n * "standard"\n * "pro"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'standard',
												value: 'standard'
											},
											{
												name: 'pro',
												value: 'pro'
											}
										]
									},
									{
										displayName: 'Tone',
										name: 'tone',
										type: 'options',
										default: '',
										description: 'Task tone:\n * ""\n * "Informal"\n * "Friendly"\n * "Business"\n * "Formal"\n * "other"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: '',
												value: ''
											},
											{
												name: 'Informal',
												value: 'Informal'
											},
											{
												name: 'Friendly',
												value: 'Friendly'
											},
											{
												name: 'Business',
												value: 'Business'
											},
											{
												name: 'Formal',
												value: 'Formal'
											},
											{
												name: 'other',
												value: 'other'
											}
										]
									},
									{
										displayName: 'Purpose',
										name: 'purpose',
										type: 'options',
										default: '',
										description: 'Task purpose:\n * "Personal use"\n * "Business"\n * "Online content"\n * "App/Web localization"\n * "Media content"\n * "Semi-technical"\n * "other"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'Personal use',
												value: 'Personal use'
											},
											{
												name: 'Business',
												value: 'Business'
											},
											{
												name: 'Online content',
												value: 'Online content'
											},
											{
												name: 'App/Web localization',
												value: 'App/Web localization'
											},
											{
												name: 'Media content',
												value: 'Media content'
											},
											{
												name: 'Semi-technical',
												value: 'Semi-technical'
											},
											{
												name: 'other',
												value: 'other'
											}
										]
									},
									{
										displayName: 'Customer Message',
										name: 'customerMessage',
										type: 'string',
										default: '',
										description: 'Instructions for translators'
									},
									{
										displayName: 'Use Preferred',
										name: 'usePreferred',
										type: 'boolean',
										default: false,
										description: 'Use preferred translators',
										placeholder: 'true'
									},
									{
										displayName: 'Edit Service',
										name: 'editService',
										type: 'boolean',
										default: false,
										description: 'Enables Edit stage for all jobs',
										placeholder: 'true'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							},
							{
								displayName: 'CreateByStringIdsForm',
								name: '_createByStringIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'number',
										default: undefined,
										description: 'Task type:\n *  2 - translate by vendor',
										required: true
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n * "gengo" - Gengo',
										required: true
									},
									{
										displayName: 'String Ids',
										name: 'stringIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectStringsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)',
										required: true
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Expertise',
										name: 'expertise',
										type: 'options',
										default: '',
										description: 'Task expertise:\n * "standard"\n * "pro"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'standard',
												value: 'standard'
											},
											{
												name: 'pro',
												value: 'pro'
											}
										]
									},
									{
										displayName: 'Tone',
										name: 'tone',
										type: 'options',
										default: '',
										description: 'Task tone:\n * ""\n * "Informal"\n * "Friendly"\n * "Business"\n * "Formal"\n * "other"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: '',
												value: ''
											},
											{
												name: 'Informal',
												value: 'Informal'
											},
											{
												name: 'Friendly',
												value: 'Friendly'
											},
											{
												name: 'Business',
												value: 'Business'
											},
											{
												name: 'Formal',
												value: 'Formal'
											},
											{
												name: 'other',
												value: 'other'
											}
										]
									},
									{
										displayName: 'Purpose',
										name: 'purpose',
										type: 'options',
										default: '',
										description: 'Task purpose:\n * "Personal use"\n * "Business"\n * "Online content"\n * "App/Web localization"\n * "Media content"\n * "Semi-technical"\n * "other"',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'Personal use',
												value: 'Personal use'
											},
											{
												name: 'Business',
												value: 'Business'
											},
											{
												name: 'Online content',
												value: 'Online content'
											},
											{
												name: 'App/Web localization',
												value: 'App/Web localization'
											},
											{
												name: 'Media content',
												value: 'Media content'
											},
											{
												name: 'Semi-technical',
												value: 'Semi-technical'
											},
											{
												name: 'other',
												value: 'other'
											}
										]
									},
									{
										displayName: 'Customer Message',
										name: 'customerMessage',
										type: 'string',
										default: '',
										description: 'Instructions for translators'
									},
									{
										displayName: 'Use Preferred',
										name: 'usePreferred',
										type: 'boolean',
										default: false,
										description: 'Use preferred translators',
										placeholder: 'true'
									},
									{
										displayName: 'Edit Service',
										name: 'editService',
										type: 'boolean',
										default: false,
										description: 'Enables Edit stage for all jobs',
										placeholder: 'true'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n __Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Crowdin Vendor Manual Task Create Form',
				name: '_crowdinVendorManualTaskCreateForm',
				values: [
					{
						displayName: 'Form Type',
						name: '_subType',
						type: 'fixedCollection',
						default: {},
						description: 'Select the form type',
						options: [
							{
								displayName: 'CreateByFileIdsForm',
								name: '_createByFileIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 2,
										description: 'Task type: \n * 2 - translate by vendor\n * 3 - proofread by vendor',
										required: true,
										options: [
											{
												name: '2',
												value: 2
											},
											{
												name: '3',
												value: 3
											}
										]
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n *   "alconost" - Alconost,\n *   "babbleon" - Babble-on,\n *   "tomedes" - Tomedes,\n *   "e2f" - e2f,\n *   "write_path_admin" - WritePath,\n *   "inlingo" - Inlingo,\n *   "acclaro" - Acclaro,\n *   "translate_by_humans" - Translate by Humans,\n *   "lingo24" - Lingo24,\n *   "gte_localize" - GTE Localize,\n *   "kettu_solutions" - Kettu Solutions',
										required: true
									},
									{
										displayName: 'File Ids',
										name: 'fileIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectFilesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task File Identifiers. Get via [List Files](#operation/api.projects.files.getMany)',
										required: true
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
									},
									{
										displayName: 'Label Match Rule',
										name: 'labelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n__Note:__ Can only be used when `labelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Exclude Label Ids',
										name: 'excludeLabelIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectLabelsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Exclude Label Match Rule',
										name: 'excludeLabelMatchRule',
										type: 'options',
										default: '',
										description: 'Match rule for excluded labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n__Note:__ Can only be used when `excludeLabelIds` parameter is provided',
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
												name: 'any',
												value: 'any'
											}
										]
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Skip Assigned Strings',
										name: 'skipAssignedStrings',
										type: 'boolean',
										default: false,
										description: 'Skip strings already included in other tasks',
										placeholder: 'true'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` or `type=2` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Assignees',
										name: 'assignees',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: undefined,
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified'
													}
												]
											}
										]
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Defines task deadline date\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							},
							{
								displayName: 'CreateByStringIdsForm',
								name: '_createByStringIdsForm',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Task Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: 2,
										description: 'Task type:\n * 2 - translate by vendor\n * 3 - proofread by vendor',
										required: true,
										options: [
											{
												name: '2',
												value: 2
											},
											{
												name: '3',
												value: 3
											}
										]
									},
									{
										displayName: 'Vendor',
										name: 'vendor',
										type: 'string',
										default: '',
										description: 'Task vendor:\n *   "alconost" - Alconost,\n *   "babbleon" - Babble-on,\n *   "tomedes" - Tomedes,\n *   "e2f" - e2f,\n *   "write_path_admin" - WritePath,\n *   "inlingo" - Inlingo,\n *   "acclaro" - Acclaro,\n *   "translate_by_humans" - Translate by Humans,\n *   "lingo24" - Lingo24,\n *   "gte_localize" - GTE Localize,\n *   "kettu_solutions" - Kettu Solutions',
										required: true
									},
									{
										displayName: 'String Ids',
										name: 'stringIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectStringsMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)',
										required: true
									},
									{
										displayName: 'Status',
										name: 'status',
										type: 'options',
										default: '',
										description: 'Task status',
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
												name: 'in_progress',
												value: 'in_progress'
											}
										]
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description'
									},
									{
										displayName: 'Skip Assigned Strings',
										name: 'skipAssignedStrings',
										type: 'boolean',
										default: false,
										description: 'Skip strings already included in other tasks',
										placeholder: 'true'
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` or `type=2` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Assignees',
										name: 'assignees',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: undefined,
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified'
													}
												]
											}
										]
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Defines task deadline date\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when strings were modified\n\n__Format:__ UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Generate Cost Estimate',
										name: 'generateCostEstimate',
										type: 'boolean',
										default: false,
										description: 'Generate cost estimate report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Generate Translation Cost',
										name: 'generateTranslationCost',
										type: 'boolean',
										default: false,
										description: 'Generate translation cost report for the task. Requires `reportSettingsTemplateId`',
										placeholder: 'false'
									},
									{
										displayName: 'Report Settings Template Id',
										name: 'reportSettingsTemplateId',
										type: 'options',
										default: '',
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany). Required when `generateCostEstimate` or `generateTranslationCost` is `true`',
										typeOptions: {
											loadOptionsMethod: 'getReportSettingsTemplates'
										}
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Crowdin Pending Task Create Form',
				name: '_crowdinPendingTaskCreateForm',
				values: [
					{
						displayName: 'Preceding Task Id',
						name: 'precedingTaskId',
						type: 'options',
						default: '',
						description: 'Translate Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getProjectTasks',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 1,
						description: 'Task type:\n * 1 - proofread',
						required: true,
						options: [
							{
								name: '1',
								value: 1
							}
						]
					},
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
						description: 'Task title',
						required: true
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Task description'
					},
					{
						displayName: 'Assignees',
						name: 'assignees',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Id',
										name: 'id',
										type: 'number',
										default: undefined,
										description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
										required: true
									},
									{
										displayName: 'Words Count',
										name: 'wordsCount',
										type: 'number',
										default: 0,
										description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified'
									}
								]
							}
						]
					},
					{
						displayName: 'Deadline',
						name: 'dateTime:deadline',
						type: 'dateTime',
						default: '',
						description: 'Defines task deadline date\n\n __Format:__ UTC, ISO 8601',
						placeholder: '2019-09-27T07:00:14+00:00'
					}
				]
			},
			{
				displayName: 'Crowdin Vendor Manual Pending Task Create Form',
				name: '_crowdinVendorManualPendingTaskCreateForm',
				values: [
					{
						displayName: 'Preceding Task Id',
						name: 'precedingTaskId',
						type: 'options',
						default: '',
						description: 'Translate Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getProjectTasks',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 3,
						description: 'Task type:\n * 3 - proofread by vendor',
						required: true,
						options: [
							{
								name: '3',
								value: 3
							}
						]
					},
					{
						displayName: 'Vendor',
						name: 'vendor',
						type: 'string',
						default: '',
						description: 'Task vendor:\n *   "alconost" - Alconost,\n *   "babbleon" - Babble-on,\n *   "tomedes" - Tomedes,\n *   "e2f" - e2f,\n *   "write_path_admin" - WritePath,\n *   "inlingo" - Inlingo,\n *   "acclaro" - Acclaro,\n *   "translate_by_humans" - Translate by Humans,\n *   "lingo24" - Lingo24,\n *   "gte_localize" - GTE Localize,\n *   "kettu_solutions" - Kettu Solutions',
						required: true
					},
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
						description: 'Task title',
						required: true
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Task description'
					},
					{
						displayName: 'Assignees',
						name: 'assignees',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Id',
										name: 'id',
										type: 'number',
										default: undefined,
										description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
										required: true
									},
									{
										displayName: 'Words Count',
										name: 'wordsCount',
										type: 'number',
										default: 0,
										description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified'
									}
								]
							}
						]
					},
					{
						displayName: 'Deadline',
						name: 'dateTime:deadline',
						type: 'dateTime',
						default: '',
						description: 'Defines task deadline date\n\n __Format:__ UTC, ISO 8601',
						placeholder: '2019-09-27T07:00:14+00:00'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.get'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.delete'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.post'
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
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		description: 'Text comment',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.post'
				]
			}
		},
		placeholder: 'Work in task'
	},
	{
		displayName: 'Time Spent',
		name: 'timeSpent',
		type: 'number',
		default: 0,
		description: 'Specifies the time spent on the task in seconds.',
		routing: {
			send: {
				property: 'timeSpent',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.post'
				]
			}
		},
		placeholder: '3600'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.get'
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
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'Unique identifier for the task comment. Obtain the ID using the [List Task Comments](#operation/api.projects.tasks.comments.getMany) endpoint.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.delete'
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
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'Unique identifier for the task comment. Obtain the ID using the [List Task Comments](#operation/api.projects.tasks.comments.getMany) endpoint.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.patch'
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
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'Unique identifier for the task comment. Obtain the ID using the [List Task Comments](#operation/api.projects.tasks.comments.getMany) endpoint.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'tasks'
				],
				operation: [
					'api.user.tasks.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,title'
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
					'tasks'
				],
				operation: [
					'api.user.tasks.getMany'
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
		displayName: 'Status',
		name: 'status',
		description: 'List tasks with specified statuses. It can be one status or a list of comma-separated status values',
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
				name: 'in_progress',
				value: 'in_progress'
			},
			{
				name: 'done',
				value: 'done'
			},
			{
				name: 'closed',
				value: 'closed'
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
					'tasks'
				],
				operation: [
					'api.user.tasks.getMany'
				]
			}
		}
	},
	{
		displayName: 'Is Archived',
		name: 'isArchived',
		description: 'List archived/not archived tasks for the authorized user.\n * 1 - archived\n * 0 - not archived',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '1',
				value: 1
			},
			{
				name: '0',
				value: 0
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'isArchived',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.user.tasks.getMany'
				]
			}
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Template name',
				placeholder: 'Default template'
			},
			{
				displayName: 'Config',
				name: 'config',
				type: 'fixedCollection',
				default: {},
				description: 'Defines task config',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Languages',
								name: 'languages',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: undefined,
								placeholder: 'Add Item',
								options: [
									{
										name: 'items',
										displayName: 'Item',
										values: [
											{
												displayName: 'Language Id',
												name: 'languageId',
												type: 'options',
												default: '',
												description: 'Task Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
												routing: {
													send: {
														property: 'config.languages.languageId',
														propertyInDotNotation: false,
														type: 'body',
														value: '={{ $value || undefined }}'
													}
												},
												typeOptions: {
													loadOptionsMethod: 'getLanguages'
												}
											},
											{
												displayName: 'User Ids',
												name: 'userIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getUsersMulti'
												},
												default: [],
												description: 'Array of user ids',
												routing: {
													send: {
														property: 'config.languages.userIds',
														propertyInDotNotation: false,
														type: 'body',
														value: '={{ $value }}'
													}
												}
											}
										]
									}
								],
								required: true
							}
						]
					}
				]
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Text comment',
				placeholder: 'Work in task'
			},
			{
				displayName: 'Time Spent',
				name: 'timeSpent',
				type: 'number',
				default: 0,
				description: 'Specifies the time spent on the task in seconds.',
				placeholder: '3600'
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
					'tasks'
				],
				operation: [
					'api.users.tasks.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.settings-templates.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.getMany'
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
					'tasks'
				],
				operation: [
					'api.projects.tasks.comments.getMany'
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
					'tasks'
				],
				operation: [
					'api.user.tasks.getMany'
				]
			}
		}
	}
];
