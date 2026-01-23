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
				value: 'api.tasks.getMany',
				action: 'List Tasks',
				description: '**Required scopes:** `project.task` (Read only).\n\nList all organization tasks.',
				routing: {
					request: {
						method: 'GET',
						url: '=/tasks'
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
		default: 'api.tasks.getMany'
	},
	{
		displayName: 'GET /tasks',
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
				name: 'review',
				value: 'review'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
				]
			}
		},
		placeholder: '1,2'
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		description: 'Filter by project IDs. It can be one ID or a list of comma-separated ID values. Cannot be used together with groupIds',
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
					'api.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Group Ids',
		name: 'groupIds',
		description: 'Filter by group IDs. It can be one ID or a list of comma-separated ID values. Cannot be used together with projectIds. Enterprise only',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'groupIds',
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
					'api.tasks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroupsMulti'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
					'api.tasks.getMany'
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
									},
									{
										displayName: 'Team Ids',
										name: 'teamIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getTeamsMulti'
										},
										default: [],
										description: 'Team Identifiers. Get via [List Teams](#operation/api.teams.getMany)',
										routing: {
											send: {
												property: 'config.languages.teamIds',
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
				name: 'review',
				value: 'review'
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
				displayName: 'Enterprise Task Create Form',
				name: '_enterpriseTaskCreateForm',
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
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n\n__Note:__ One of fields `type` or `workflowStepId` is required. Both cannot be provided simultaneously',
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
										]
									},
									{
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Task workflow step id\n\n__Note:__ One of fields `type` or `workflowStepId` is required. Both cannot be provided simultaneously',
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true,
										placeholder: 'French'
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
										description: 'Task description',
										placeholder: 'Proofread all French strings'
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
										displayName: 'Assignees',
										name: 'assignees',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Task assigned users',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Task assignee',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
														placeholder: '1',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified',
														placeholder: '5'
													}
												]
											}
										]
									},
									{
										displayName: 'Assigned Teams',
										name: 'assignedTeams',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Task assigned teams',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Task assigned teams',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
														placeholder: '1',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assigned team\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified',
														placeholder: '5'
													}
												]
											}
										]
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Task deadline in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Task date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Task date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
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
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`',
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
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n\n__Note:__ One of fields `type` or `workflowStepId` is required. Both cannot be provided simultaneously',
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
										]
									},
									{
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Task workflow step id\n\n__Note:__ One of fields `type` or `workflowStepId` is required. Both cannot be provided simultaneously',
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true,
										placeholder: 'French'
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
										description: 'Task description',
										placeholder: 'Proofread all French strings'
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
										displayName: 'Assignees',
										name: 'assignees',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Task assigned users',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Task assignee',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
														placeholder: '1',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified',
														placeholder: '5'
													}
												]
											}
										]
									},
									{
										displayName: 'Assigned Teams',
										name: 'assignedTeams',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Task assigned teams',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Task assigned teams',
												name: 'items',
												values: [
													{
														displayName: 'Id',
														name: 'id',
														type: 'number',
														default: undefined,
														description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
														placeholder: '1',
														required: true
													},
													{
														displayName: 'Words Count',
														name: 'wordsCount',
														type: 'number',
														default: 0,
														description: 'Defines how many words (starting from 1) are assigned to each task assigned team\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified',
														placeholder: '5'
													}
												]
											}
										]
									},
									{
										displayName: 'Include Pre Translated Strings Only',
										name: 'includePreTranslatedStringsOnly',
										type: 'boolean',
										default: false,
										description: 'Defines whether to export only pretranslated strings\n *\n * __Note:__ `true` value can\'t be used with `type=0` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Task deadline in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Task date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Task date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
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
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`',
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
				displayName: 'Enterprise Vendor Task Create Form',
				name: '_enterpriseVendorTaskCreateForm',
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
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Task workflow step id with type `Translate by Vendor` or `Proofread by Vendor`',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true,
										placeholder: 'French'
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
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description',
										placeholder: 'Proofread all French strings'
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
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Task deadline in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Task date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
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
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`',
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
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Task workflow step id with type `Translate by Vendor` or `Proofread by Vendor`',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										description: 'Task title',
										required: true,
										placeholder: 'French'
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
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Task description',
										placeholder: 'Proofread all French strings'
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
										description: 'Defines whether to export only pretranslated strings\n\n__Note:__ `true` value can\'t be used with `type=0` in same request',
										placeholder: 'true'
									},
									{
										displayName: 'Deadline',
										name: 'dateTime:deadline',
										type: 'dateTime',
										default: '',
										description: 'Task deadline in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Started At',
										name: 'dateTime:startedAt',
										type: 'dateTime',
										default: '',
										description: 'Defines task started date in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Task date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date From',
										name: 'dateTime:translationsUpdatedDateFrom',
										type: 'dateTime',
										default: '',
										description: 'Defines start date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Translations Updated Date To',
										name: 'dateTime:translationsUpdatedDateTo',
										type: 'dateTime',
										default: '',
										description: 'Defines end date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601',
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
										description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`',
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
				displayName: 'Enterprise Pending Task Create Form',
				name: '_enterprisePendingTaskCreateForm',
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
						default: '',
						description: 'Task type:\n *      1 - proofread\n\n__Note:__ One of fields `type` or `workflowStepId` is required. Both cannot be provided simultaneously',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: '1',
								value: 1
							}
						]
					},
					{
						displayName: 'Workflow Step Id',
						name: 'workflowStepId',
						type: 'options',
						default: '',
						description: 'Task workflow step id\n\n__Note:__ One of fields `type` or `workflowStepId` is required. Both cannot be provided simultaneously',
						typeOptions: {
							loadOptionsMethod: 'getProjectWorkflowSteps',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
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
						description: 'Task assigned users',
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Task assignee',
								name: 'items',
								values: [
									{
										displayName: 'Id',
										name: 'id',
										type: 'number',
										default: undefined,
										description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
										placeholder: '1',
										required: true
									},
									{
										displayName: 'Words Count',
										name: 'wordsCount',
										type: 'number',
										default: 0,
										description: 'Defines how many words (starting from 1) are assigned to each task assignee\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified',
										placeholder: '5'
									}
								]
							}
						]
					},
					{
						displayName: 'Assigned Teams',
						name: 'assignedTeams',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Task assigned teams',
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Task assigned teams',
								name: 'items',
								values: [
									{
										displayName: 'Id',
										name: 'id',
										type: 'number',
										default: undefined,
										description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
										placeholder: '1',
										required: true
									},
									{
										displayName: 'Words Count',
										name: 'wordsCount',
										type: 'number',
										default: 0,
										description: 'Defines how many words (starting from 1) are assigned to each task assigned team\n *\n * __Note:__ Can be used only when \'splitContent\' parameter is specified',
										placeholder: '5'
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
		placeholder: 'createdAt desc,name,priority'
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
				name: 'review',
				value: 'review'
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
											},
											{
												displayName: 'Team Ids',
												name: 'teamIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getTeamsMulti'
												},
												default: [],
												description: 'Team Identifiers. Get via [List Teams](#operation/api.teams.getMany)',
												routing: {
													send: {
														property: 'config.languages.teamIds',
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
					'api.tasks.getMany'
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
