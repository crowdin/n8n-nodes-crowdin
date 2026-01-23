// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeRootBody } from '../../../utils/preSend';

export const reportsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'reports'
				]
			}
		},
		options: [
			{
				name: 'List Report Archives',
				value: 'api.reports.archives.getMany',
				action: 'List Report Archives',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/archives'
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
				name: 'Get Report Archive',
				value: 'api.reports.archives.get',
				action: 'Get Report Archive',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/archives/{{$parameter["archiveId"]}}'
					}
				}
			},
			{
				name: 'Delete Report Archive',
				value: 'api.reports.archives.delete',
				action: 'Delete Report Archive',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/reports/archives/{{$parameter["archiveId"]}}'
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
				name: 'Export Report Archive',
				value: 'api.reports.archives.exports.post',
				action: 'Export Report Archive',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/reports/archives/{{$parameter["archiveId"]}}/exports'
					}
				}
			},
			{
				name: 'Check Report Archive Export Status',
				value: 'api.reports.archives.exports.get',
				action: 'Check Report Archive Export Status',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/archives/{{$parameter["archiveId"]}}/exports/{{$parameter["exportId"]}}'
					}
				}
			},
			{
				name: 'Download Report Archive',
				value: 'api.reports.archives.exports.download.get',
				action: 'Download Report Archive',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/archives/{{$parameter["archiveId"]}}/exports/{{$parameter["exportId"]}}/download'
					}
				}
			},
			{
				name: 'Generate Group Report',
				value: 'api.groups.reports.post',
				action: 'Generate Group Report',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/groups/{{$parameter["groupId"]}}/reports'
					}
				}
			},
			{
				name: 'Check Group Report Generation Status',
				value: 'api.groups.reports.get',
				action: 'Check Group Report Generation Status',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/reports/{{$parameter["reportId"]}}'
					}
				}
			},
			{
				name: 'Download Group Report',
				value: 'api.groups.reports.download.download',
				action: 'Download Group Report',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/reports/{{$parameter["reportId"]}}/download'
					}
				}
			},
			{
				name: 'List Report Settings Templates',
				value: 'api.reports.settings-templates.getMany',
				action: 'List Report Settings Templates',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/settings-templates'
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
				name: 'Add Report Settings Template',
				value: 'api.reports.settings-templates.post',
				action: 'Add Report Settings Template',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/reports/settings-templates'
					}
				}
			},
			{
				name: 'Get Report Settings Template',
				value: 'api.reports.settings-templates.get',
				action: 'Get Report Settings Template',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
					}
				}
			},
			{
				name: 'Delete Report Settings Template',
				value: 'api.reports.settings-templates.delete',
				action: 'Delete Report Settings Template',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
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
				name: 'Edit Report Settings Template',
				value: 'api.reports.settings-templates.patch',
				action: 'Edit Report Settings Template',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
					}
				}
			},
			{
				name: 'Generate Organization Report',
				value: 'api.reports.post',
				action: 'Generate Organization Report',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/reports'
					}
				}
			},
			{
				name: 'Check Organization Report Generation Status',
				value: 'api.reports.get',
				action: 'Check Organization Report Generation Status',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/{{$parameter["reportId"]}}'
					}
				}
			},
			{
				name: 'Download Organization Report',
				value: 'api.reports.download.download',
				action: 'Download Organization Report',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/reports/{{$parameter["reportId"]}}/download'
					}
				}
			},
			{
				name: 'Generate Report',
				value: 'api.projects.reports.post',
				action: 'Generate Report',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/reports'
					}
				}
			},
			{
				name: 'Check Report Generation Status',
				value: 'api.projects.reports.get',
				action: 'Check Report Generation Status',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/reports/{{$parameter["reportId"]}}'
					}
				}
			},
			{
				name: 'Download Report',
				value: 'api.projects.reports.download.download',
				action: 'Download Report',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/reports/{{$parameter["reportId"]}}/download'
					}
				}
			},
			{
				name: 'List User Report Settings Templates',
				value: 'api.users.reports.settings-templates.getMany',
				action: 'List User Report Settings Templates',
				description: '**Required scopes:** `user` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/reports/settings-templates'
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
				name: 'Add User Report Settings Template',
				value: 'api.users.reports.settings-templates.post',
				action: 'Add User Report Settings Template',
				description: '**Required scopes:** `user` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/reports/settings-templates'
					}
				}
			},
			{
				name: 'Get User Report Settings Template',
				value: 'api.users.reports.settings-templates.get',
				action: 'Get User Report Settings Template',
				description: '**Required scopes:** `user` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
					}
				}
			},
			{
				name: 'Delete User Report Settings Template',
				value: 'api.users.reports.settings-templates.delete',
				action: 'Delete User Report Settings Template',
				description: '**Required scopes:** `user` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
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
				name: 'Edit User Report Settings Template',
				value: 'api.users.reports.settings-templates.patch',
				action: 'Edit User Report Settings Template',
				description: '**Required scopes:** `user` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
					}
				}
			}
		],
		default: 'api.reports.archives.getMany'
	},
	{
		displayName: 'GET /reports/archives',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/archives/{archiveId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /reports/archives/{archiveId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.delete'
				]
			}
		}
	},
	{
		displayName: 'POST /reports/archives/{archiveId}/exports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/archives/{archiveId}/exports/{exportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/archives/{archiveId}/exports/{exportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.download.get'
				]
			}
		}
	},
	{
		displayName: 'POST /groups/{groupId}/reports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /groups/{groupId}/reports/{reportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /groups/{groupId}/reports/{reportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/settings-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /reports/settings-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.post'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/settings-templates/{reportSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /reports/settings-templates/{reportSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /reports/settings-templates/{reportSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.patch'
				]
			}
		}
	},
	{
		displayName: 'POST /reports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/{reportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /reports/{reportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/reports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/reports/{reportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/reports/{reportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/reports/settings-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/reports/settings-templates',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/reports/settings-templates/{reportSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/reports/settings-templates/{reportSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /users/{userId}/reports/settings-templates/{reportSettingsTemplateId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.patch'
				]
			}
		}
	},
	{
		displayName: 'Scope Type',
		name: 'scopeType',
		description: 'Filter report archives by scope type',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'organization',
				value: 'organization'
			},
			{
				name: 'group',
				value: 'group'
			},
			{
				name: 'project',
				value: 'project'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'scopeType',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		}
	},
	{
		displayName: 'Scope Id',
		name: 'scopeId',
		description: 'Filter archives by specific scope id\n\n __Note__: Use only if `scopeType` set to `group` or `project`',
		default: 0,
		type: 'number',
		routing: {
			send: {
				type: 'query',
				property: 'scopeId',
				value: '={{ $value !== 0 ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'User Identifier',
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
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
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
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
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
		displayName: 'Name',
		name: 'name',
		description: undefined,
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'costs-estimation-pe',
				value: 'costs-estimation-pe'
			},
			{
				name: 'translation-costs-pe',
				value: 'translation-costs-pe'
			},
			{
				name: 'group-translation-costs-pe',
				value: 'group-translation-costs-pe'
			},
			{
				name: 'pre-translate-accuracy',
				value: 'pre-translate-accuracy'
			},
			{
				name: 'translator-accuracy',
				value: 'translator-accuracy'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'name',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		}
	},
	{
		displayName: 'Date From',
		name: 'dateTime:dateFrom',
		description: 'Archive date from in UTC, ISO 8601',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'dateFrom',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		},
		placeholder: '2019-09-23T07:00:14+00:00'
	},
	{
		displayName: 'Date To',
		name: 'dateTime:dateTo',
		description: 'Archive date to in UTC, ISO 8601',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'dateTo',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
				]
			}
		},
		placeholder: '2019-09-27T07:00:14+00:00'
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
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
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
		displayName: 'Archive Id',
		name: 'archiveId',
		required: true,
		description: 'Report archive identifier. Get via [List Report Archives](#operation/api.reports.archives.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'Archive Id',
		name: 'archiveId',
		required: true,
		description: 'Report archive identifier. Get via [List Report Archives](#operation/api.reports.archives.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'Archive Id',
		name: 'archiveId',
		required: true,
		description: 'Report archive identifier. Get via [List Report Archives](#operation/api.reports.archives.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		default: '',
		description: 'Defines export file format',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'xlsx',
				value: 'xlsx'
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'json',
				value: 'json'
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
					'reports'
				],
				operation: [
					'api.reports.archives.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Archive Id',
		name: 'archiveId',
		required: true,
		description: 'Report archive identifier. Get via [List Report Archives](#operation/api.reports.archives.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export Report Archive](#operation/api.reports.archives.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.get'
				]
			}
		}
	},
	{
		displayName: 'Archive Id',
		name: 'archiveId',
		required: true,
		description: 'Report archive identifier. Get via [List Report Archives](#operation/api.reports.archives.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.download.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export Report Archive](#operation/api.reports.archives.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.archives.exports.download.get'
				]
			}
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
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
					'reports'
				],
				operation: [
					'api.groups.reports.post'
				]
			}
		},
		options: [
			{
				displayName: 'Group Translation Costs Post-Editing',
				name: '_groupTranslationCostsPostEditing',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-translation-costs-pe',
						description: 'group-translation-costs-pe',
						required: true,
						options: [
							{
								name: 'group-translation-costs-pe',
								value: 'group-translation-costs-pe'
							}
						],
						placeholder: 'group-translation-costs-pe'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Group Translation Costs Post-Editing Report schema',
						options: [
							{
								displayName: 'General',
								name: '_groupTranslationCostsPeReportGeneral',
								values: [
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Currency',
										name: 'currency',
										type: 'options',
										default: '',
										description: 'Defines report currency',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'USD',
												value: 'USD'
											},
											{
												name: 'EUR',
												value: 'EUR'
											},
											{
												name: 'JPY',
												value: 'JPY'
											},
											{
												name: 'GBP',
												value: 'GBP'
											},
											{
												name: 'AUD',
												value: 'AUD'
											},
											{
												name: 'CAD',
												value: 'CAD'
											},
											{
												name: 'CHF',
												value: 'CHF'
											},
											{
												name: 'CNY',
												value: 'CNY'
											},
											{
												name: 'SEK',
												value: 'SEK'
											},
											{
												name: 'NZD',
												value: 'NZD'
											},
											{
												name: 'MXN',
												value: 'MXN'
											},
											{
												name: 'SGD',
												value: 'SGD'
											},
											{
												name: 'HKD',
												value: 'HKD'
											},
											{
												name: 'NOK',
												value: 'NOK'
											},
											{
												name: 'KRW',
												value: 'KRW'
											},
											{
												name: 'TRY',
												value: 'TRY'
											},
											{
												name: 'RUB',
												value: 'RUB'
											},
											{
												name: 'INR',
												value: 'INR'
											},
											{
												name: 'BRL',
												value: 'BRL'
											},
											{
												name: 'ZAR',
												value: 'ZAR'
											},
											{
												name: 'GEL',
												value: 'GEL'
											},
											{
												name: 'UAH',
												value: 'UAH'
											},
											{
												name: 'DDK',
												value: 'DDK'
											},
											{
												name: 'PLN',
												value: 'PLN'
											}
										],
										placeholder: 'USD'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: 'perfect',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Mt Match',
														name: 'mtMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Ai Match',
														name: 'aiMatch',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: '\n\n__Note:__ The `aiMatch` field is optional. If this field is not filled in, the schema will be taken from the `mtMatch` field.',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Item',
																name: 'items',
																values: [
																	{
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														]
													},
													{
														displayName: 'Suggestion Match',
														name: 'suggestionMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Exclude Approvals For Edited Translations',
										name: 'excludeApprovalsForEditedTranslations',
										type: 'boolean',
										default: false,
										description: 'Exclude approvals when the same user has made translations for the string.'
									},
									{
										displayName: 'Pre Translated Strings Categorization Adjustment',
										name: 'preTranslatedStringsCategorizationAdjustment',
										type: 'boolean',
										default: false,
										description: 'Repetitive translations of pre-translated strings are reported under TM or MT match rates instead of Other suggestion match rates, depending on the initial pre-translation type.'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Top Members',
				name: '_groupTopMembers',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-top-members',
						description: 'group-top-members',
						required: true,
						options: [
							{
								name: 'group-top-members',
								value: 'group-top-members'
							}
						],
						placeholder: 'group-top-members'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Group Top Members Report schema',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
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
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Task Usage',
				name: '_groupTaskUsage',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-task-usage',
						description: 'group-task-usage',
						required: true,
						options: [
							{
								name: 'group-task-usage',
								value: 'group-task-usage'
							}
						],
						placeholder: 'group-task-usage'
					},
					{
						displayName: 'Task Usage Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						options: [
							{
								displayName: 'Workload',
								name: '_groupTaskUsageWorkloadReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'workload',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'workload',
												value: 'workload'
											}
										],
										placeholder: 'workload',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Create vs Resolve',
								name: '_groupTaskUsageCreateVsResolveReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'created-vs-resolved',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'created-vs-resolved',
												value: 'created-vs-resolved'
											}
										],
										placeholder: 'created-vs-resolved',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *       0 - translate\n *       1 - proofread\n *       2 - translate by vendor\n *       3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Performance',
								name: '_groupTaskUsagePerformanceReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'performance',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'performance',
												value: 'performance'
											}
										],
										placeholder: 'performance',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Time',
								name: '_groupTaskUsageTimeReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'time',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'time',
												value: 'time'
											}
										],
										placeholder: 'time',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Words Count From',
										name: 'wordsCountFrom',
										type: 'number',
										default: 0,
										description: undefined,
										placeholder: '1'
									},
									{
										displayName: 'Words Count To',
										name: 'wordsCountTo',
										type: 'number',
										default: 0,
										description: undefined,
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Cost',
								name: '_groupTaskUsageCostReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'cost',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'cost',
												value: 'cost'
											}
										],
										placeholder: 'cost',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Statuses',
										name: 'statuses',
										type: 'multiOptions',
										default: [],
										description: 'Task statuses to filter by',
										options: [
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
											},
											{
												name: 'review',
												value: 'review'
											}
										]
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Qa Check Isses Report',
				name: '_groupQaCheckIssesReport',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-qa-check-issues',
						description: 'group-qa-check-issues',
						required: true,
						options: [
							{
								name: 'group-qa-check-issues',
								value: 'group-qa-check-issues'
							}
						],
						placeholder: 'group-qa-check-issues'
					},
					{
						displayName: 'Group Qa Check Issues Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-05-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-05-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Translation Activity',
				name: '_groupTranslationActivity',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-translation-activity',
						description: 'group-translation-activity',
						required: true,
						options: [
							{
								name: 'group-translation-activity',
								value: 'group-translation-activity'
							}
						],
						placeholder: 'group-translation-activity'
					},
					{
						displayName: 'Group Translation Activity',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Source Content Updates',
				name: '_groupSourceContentUpdates',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-source-content-updates',
						description: 'group-source-content-updates',
						required: true,
						options: [
							{
								name: 'group-source-content-updates',
								value: 'group-source-content-updates'
							}
						],
						placeholder: 'group-source-content-updates'
					},
					{
						displayName: 'Group Source Content Updates',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Time Spent',
				name: '_groupTimeSpent',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-time-spent',
						description: 'group-time-spent',
						required: true,
						options: [
							{
								name: 'group-time-spent',
								value: 'group-time-spent'
							}
						],
						placeholder: 'group-time-spent'
					},
					{
						displayName: 'Group Time Spent',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'task',
												value: 'task'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: undefined,
														required: true
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
														required: true
													},
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
										description: 'Array of user ids'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *     0 - translate\n *     1 - proofread\n *     2 - translate by vendor\n *     3 - proofread by vendor',
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
											},
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
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Pre-translation Accuracy',
				name: '_groupPreTranslationAccuracy',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-pre-translate-accuracy',
						description: 'group-pre-translate-accuracy',
						required: true,
						options: [
							{
								name: 'group-pre-translate-accuracy',
								value: 'group-pre-translate-accuracy'
							}
						],
						placeholder: 'group-pre-translate-accuracy'
					},
					{
						displayName: 'General',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Translator Accuracy',
				name: '_groupTranslatorAccuracy',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-translator-accuracy',
						description: 'group-translator-accuracy',
						required: true,
						options: [
							{
								name: 'group-translator-accuracy',
								value: 'group-translator-accuracy'
							}
						],
						placeholder: 'group-translator-accuracy'
					},
					{
						displayName: 'General',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Saving Activity',
				name: '_groupSavingActivity',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-saving-activity',
						description: 'group-saving-activity',
						required: true,
						options: [
							{
								name: 'group-saving-activity',
								value: 'group-saving-activity'
							}
						],
						placeholder: 'group-saving-activity'
					},
					{
						displayName: 'Group Saving Activity Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2026-01-06T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2026-01-06T07:00:14+00:00'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: 'Report mode. `currency` mode available only if group has savingsReportSettingsTemplateId set',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'relative',
												value: 'relative'
											},
											{
												name: 'currency',
												value: 'currency'
											}
										],
										placeholder: 'relative'
									}
								]
							}
						],
						required: true
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
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Report Id',
		name: 'reportId',
		required: true,
		description: 'Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.get'
				]
			}
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Report Id',
		name: 'reportId',
		required: true,
		description: 'Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.groups.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
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
					'reports'
				],
				operation: [
					'api.reports.settings-templates.getMany'
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
					'reports'
				],
				operation: [
					'api.reports.settings-templates.getMany'
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
		displayName: 'Body',
		name: '_body',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.post'
				]
			}
		},
		options: [
			{
				displayName: 'Report settings template for post-editing',
				name: '_reportSettingsTemplateForPostEditing',
				values: [
					{
						displayName: 'Project Id',
						name: 'projectId',
						type: 'options',
						default: '',
						description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getProjects'
						}
					},
					{
						displayName: 'Group Id',
						name: 'groupId',
						type: 'options',
						default: '',
						description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getGroups'
						}
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Template name',
						required: true,
						placeholder: 'Default template'
					},
					{
						displayName: 'Currency',
						name: 'currency',
						type: 'options',
						default: 'USD',
						description: 'Defines report currency',
						required: true,
						options: [
							{
								name: 'USD',
								value: 'USD'
							},
							{
								name: 'EUR',
								value: 'EUR'
							},
							{
								name: 'JPY',
								value: 'JPY'
							},
							{
								name: 'GBP',
								value: 'GBP'
							},
							{
								name: 'AUD',
								value: 'AUD'
							},
							{
								name: 'CAD',
								value: 'CAD'
							},
							{
								name: 'CHF',
								value: 'CHF'
							},
							{
								name: 'CNY',
								value: 'CNY'
							},
							{
								name: 'SEK',
								value: 'SEK'
							},
							{
								name: 'NZD',
								value: 'NZD'
							},
							{
								name: 'MXN',
								value: 'MXN'
							},
							{
								name: 'SGD',
								value: 'SGD'
							},
							{
								name: 'HKD',
								value: 'HKD'
							},
							{
								name: 'NOK',
								value: 'NOK'
							},
							{
								name: 'KRW',
								value: 'KRW'
							},
							{
								name: 'TRY',
								value: 'TRY'
							},
							{
								name: 'RUB',
								value: 'RUB'
							},
							{
								name: 'INR',
								value: 'INR'
							},
							{
								name: 'BRL',
								value: 'BRL'
							},
							{
								name: 'ZAR',
								value: 'ZAR'
							},
							{
								name: 'GEL',
								value: 'GEL'
							},
							{
								name: 'UAH',
								value: 'UAH'
							},
							{
								name: 'DDK',
								value: 'DDK'
							},
							{
								name: 'PLN',
								value: 'PLN'
							}
						],
						placeholder: 'USD'
					},
					{
						displayName: 'Unit',
						name: 'unit',
						type: 'options',
						default: 'strings',
						description: 'Defines report unit',
						required: true,
						options: [
							{
								name: 'strings',
								value: 'strings'
							},
							{
								name: 'words',
								value: 'words'
							},
							{
								name: 'chars',
								value: 'chars'
							},
							{
								name: 'chars_with_spaces',
								value: 'chars_with_spaces'
							}
						],
						placeholder: 'words'
					},
					{
						displayName: 'Config',
						name: 'config',
						type: 'fixedCollection',
						default: {},
						description: 'Defines report config',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100-82',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Mt Match',
														name: 'mtMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Ai Match',
														name: 'aiMatch',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: '\n\n __Note:__ The `aiMatch` field is optional. If this field is not filled in, the schema will be taken from the `mtMatch` field.',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Item',
																name: 'items',
																values: [
																	{
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100-74',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														]
													},
													{
														displayName: 'Suggestion Match',
														name: 'suggestionMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Calculate Internal Matches',
										name: 'calculateInternalMatches',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Include Pre Translated Strings',
										name: 'includePreTranslatedStrings',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Exclude Approvals For Edited Translations',
										name: 'excludeApprovalsForEditedTranslations',
										type: 'boolean',
										default: false,
										description: 'Exclude approvals when the same user has made translations for the string.'
									},
									{
										displayName: 'Pre Translated Strings Categorization Adjustment',
										name: 'preTranslatedStringsCategorizationAdjustment',
										type: 'boolean',
										default: false,
										description: 'Repetitive translations of pre-translated strings are reported under TM or MT match rates instead of Other suggestion match rates, depending on the initial pre-translation type.'
									}
								]
							}
						],
						required: true
					},
					{
						displayName: 'Is Public',
						name: 'isPublic',
						type: 'boolean',
						default: false,
						description: 'Defines report public',
						placeholder: 'true'
					}
				]
			},
			{
				displayName: 'Report settings template for hourly',
				name: '_reportSettingsTemplateForHourly',
				values: [
					{
						displayName: 'Project Id',
						name: 'projectId',
						type: 'options',
						default: '',
						description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getProjects'
						}
					},
					{
						displayName: 'Group Id',
						name: 'groupId',
						type: 'options',
						default: '',
						description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getGroups'
						}
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Template name',
						required: true,
						placeholder: 'Default template'
					},
					{
						displayName: 'Currency',
						name: 'currency',
						type: 'options',
						default: 'USD',
						description: 'Defines report currency',
						required: true,
						options: [
							{
								name: 'USD',
								value: 'USD'
							},
							{
								name: 'EUR',
								value: 'EUR'
							},
							{
								name: 'JPY',
								value: 'JPY'
							},
							{
								name: 'GBP',
								value: 'GBP'
							},
							{
								name: 'AUD',
								value: 'AUD'
							},
							{
								name: 'CAD',
								value: 'CAD'
							},
							{
								name: 'CHF',
								value: 'CHF'
							},
							{
								name: 'CNY',
								value: 'CNY'
							},
							{
								name: 'SEK',
								value: 'SEK'
							},
							{
								name: 'NZD',
								value: 'NZD'
							},
							{
								name: 'MXN',
								value: 'MXN'
							},
							{
								name: 'SGD',
								value: 'SGD'
							},
							{
								name: 'HKD',
								value: 'HKD'
							},
							{
								name: 'NOK',
								value: 'NOK'
							},
							{
								name: 'KRW',
								value: 'KRW'
							},
							{
								name: 'TRY',
								value: 'TRY'
							},
							{
								name: 'RUB',
								value: 'RUB'
							},
							{
								name: 'INR',
								value: 'INR'
							},
							{
								name: 'BRL',
								value: 'BRL'
							},
							{
								name: 'ZAR',
								value: 'ZAR'
							},
							{
								name: 'GEL',
								value: 'GEL'
							},
							{
								name: 'UAH',
								value: 'UAH'
							},
							{
								name: 'DDK',
								value: 'DDK'
							},
							{
								name: 'PLN',
								value: 'PLN'
							}
						],
						placeholder: 'USD'
					},
					{
						displayName: 'Unit',
						name: 'unit',
						type: 'options',
						default: 'hours',
						description: 'Defines report unit',
						required: true,
						options: [
							{
								name: 'hours',
								value: 'hours'
							}
						],
						placeholder: 'hours'
					},
					{
						displayName: 'Config',
						name: 'config',
						type: 'fixedCollection',
						default: {},
						description: 'Defines report config',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										],
										required: true
									}
								]
							}
						],
						required: true
					},
					{
						displayName: 'Is Public',
						name: 'isPublic',
						type: 'boolean',
						default: false,
						description: 'Defines report public',
						placeholder: 'true'
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
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List Report Settings Template](#operation/api.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List Report Settings Template](#operation/api.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List Report Settings Template](#operation/api.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'A JSON Patch operation as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902#section-4)',
		routing: {
			request: {
				body: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.settings-templates.patch'
				]
			}
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
					'reports'
				],
				operation: [
					'api.reports.post'
				]
			}
		},
		options: [
			{
				displayName: 'Group Translation Costs Post-Editing',
				name: '_groupTranslationCostsPostEditing',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-translation-costs-pe',
						description: 'group-translation-costs-pe',
						required: true,
						options: [
							{
								name: 'group-translation-costs-pe',
								value: 'group-translation-costs-pe'
							}
						],
						placeholder: 'group-translation-costs-pe'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Group Translation Costs Post-Editing Report schema',
						options: [
							{
								displayName: 'General',
								name: '_groupTranslationCostsPeReportGeneral',
								values: [
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Currency',
										name: 'currency',
										type: 'options',
										default: '',
										description: 'Defines report currency',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'USD',
												value: 'USD'
											},
											{
												name: 'EUR',
												value: 'EUR'
											},
											{
												name: 'JPY',
												value: 'JPY'
											},
											{
												name: 'GBP',
												value: 'GBP'
											},
											{
												name: 'AUD',
												value: 'AUD'
											},
											{
												name: 'CAD',
												value: 'CAD'
											},
											{
												name: 'CHF',
												value: 'CHF'
											},
											{
												name: 'CNY',
												value: 'CNY'
											},
											{
												name: 'SEK',
												value: 'SEK'
											},
											{
												name: 'NZD',
												value: 'NZD'
											},
											{
												name: 'MXN',
												value: 'MXN'
											},
											{
												name: 'SGD',
												value: 'SGD'
											},
											{
												name: 'HKD',
												value: 'HKD'
											},
											{
												name: 'NOK',
												value: 'NOK'
											},
											{
												name: 'KRW',
												value: 'KRW'
											},
											{
												name: 'TRY',
												value: 'TRY'
											},
											{
												name: 'RUB',
												value: 'RUB'
											},
											{
												name: 'INR',
												value: 'INR'
											},
											{
												name: 'BRL',
												value: 'BRL'
											},
											{
												name: 'ZAR',
												value: 'ZAR'
											},
											{
												name: 'GEL',
												value: 'GEL'
											},
											{
												name: 'UAH',
												value: 'UAH'
											},
											{
												name: 'DDK',
												value: 'DDK'
											},
											{
												name: 'PLN',
												value: 'PLN'
											}
										],
										placeholder: 'USD'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: 'perfect',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Mt Match',
														name: 'mtMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Ai Match',
														name: 'aiMatch',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: '\n\n__Note:__ The `aiMatch` field is optional. If this field is not filled in, the schema will be taken from the `mtMatch` field.',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Item',
																name: 'items',
																values: [
																	{
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														]
													},
													{
														displayName: 'Suggestion Match',
														name: 'suggestionMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Exclude Approvals For Edited Translations',
										name: 'excludeApprovalsForEditedTranslations',
										type: 'boolean',
										default: false,
										description: 'Exclude approvals when the same user has made translations for the string.'
									},
									{
										displayName: 'Pre Translated Strings Categorization Adjustment',
										name: 'preTranslatedStringsCategorizationAdjustment',
										type: 'boolean',
										default: false,
										description: 'Repetitive translations of pre-translated strings are reported under TM or MT match rates instead of Other suggestion match rates, depending on the initial pre-translation type.'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Top Members',
				name: '_groupTopMembers',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-top-members',
						description: 'group-top-members',
						required: true,
						options: [
							{
								name: 'group-top-members',
								value: 'group-top-members'
							}
						],
						placeholder: 'group-top-members'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Group Top Members Report schema',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
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
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Task Usage',
				name: '_groupTaskUsage',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-task-usage',
						description: 'group-task-usage',
						required: true,
						options: [
							{
								name: 'group-task-usage',
								value: 'group-task-usage'
							}
						],
						placeholder: 'group-task-usage'
					},
					{
						displayName: 'Task Usage Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						options: [
							{
								displayName: 'Workload',
								name: '_groupTaskUsageWorkloadReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'workload',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'workload',
												value: 'workload'
											}
										],
										placeholder: 'workload',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Create vs Resolve',
								name: '_groupTaskUsageCreateVsResolveReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'created-vs-resolved',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'created-vs-resolved',
												value: 'created-vs-resolved'
											}
										],
										placeholder: 'created-vs-resolved',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *       0 - translate\n *       1 - proofread\n *       2 - translate by vendor\n *       3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Performance',
								name: '_groupTaskUsagePerformanceReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'performance',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'performance',
												value: 'performance'
											}
										],
										placeholder: 'performance',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Time',
								name: '_groupTaskUsageTimeReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'time',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'time',
												value: 'time'
											}
										],
										placeholder: 'time',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Words Count From',
										name: 'wordsCountFrom',
										type: 'number',
										default: 0,
										description: undefined,
										placeholder: '1'
									},
									{
										displayName: 'Words Count To',
										name: 'wordsCountTo',
										type: 'number',
										default: 0,
										description: undefined,
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Cost',
								name: '_groupTaskUsageCostReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'cost',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'cost',
												value: 'cost'
											}
										],
										placeholder: 'cost',
										required: true
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Statuses',
										name: 'statuses',
										type: 'multiOptions',
										default: [],
										description: 'Task statuses to filter by',
										options: [
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
											},
											{
												name: 'review',
												value: 'review'
											}
										]
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Qa Check Isses Report',
				name: '_groupQaCheckIssesReport',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-qa-check-issues',
						description: 'group-qa-check-issues',
						required: true,
						options: [
							{
								name: 'group-qa-check-issues',
								value: 'group-qa-check-issues'
							}
						],
						placeholder: 'group-qa-check-issues'
					},
					{
						displayName: 'Group Qa Check Issues Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-05-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-05-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Translation Activity',
				name: '_groupTranslationActivity',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-translation-activity',
						description: 'group-translation-activity',
						required: true,
						options: [
							{
								name: 'group-translation-activity',
								value: 'group-translation-activity'
							}
						],
						placeholder: 'group-translation-activity'
					},
					{
						displayName: 'Group Translation Activity',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Source Content Updates',
				name: '_groupSourceContentUpdates',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-source-content-updates',
						description: 'group-source-content-updates',
						required: true,
						options: [
							{
								name: 'group-source-content-updates',
								value: 'group-source-content-updates'
							}
						],
						placeholder: 'group-source-content-updates'
					},
					{
						displayName: 'Group Source Content Updates',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Time Spent',
				name: '_groupTimeSpent',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-time-spent',
						description: 'group-time-spent',
						required: true,
						options: [
							{
								name: 'group-time-spent',
								value: 'group-time-spent'
							}
						],
						placeholder: 'group-time-spent'
					},
					{
						displayName: 'Group Time Spent',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'task',
												value: 'task'
											},
											{
												name: 'project',
												value: 'project'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: undefined,
														required: true
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
														required: true
													},
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
										description: 'Array of user ids'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *     0 - translate\n *     1 - proofread\n *     2 - translate by vendor\n *     3 - proofread by vendor',
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
											},
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
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Pre-translation Accuracy',
				name: '_groupPreTranslationAccuracy',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-pre-translate-accuracy',
						description: 'group-pre-translate-accuracy',
						required: true,
						options: [
							{
								name: 'group-pre-translate-accuracy',
								value: 'group-pre-translate-accuracy'
							}
						],
						placeholder: 'group-pre-translate-accuracy'
					},
					{
						displayName: 'General',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Translator Accuracy',
				name: '_groupTranslatorAccuracy',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-translator-accuracy',
						description: 'group-translator-accuracy',
						required: true,
						options: [
							{
								name: 'group-translator-accuracy',
								value: 'group-translator-accuracy'
							}
						],
						placeholder: 'group-translator-accuracy'
					},
					{
						displayName: 'General',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Project Identifier for which the report should be generated. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Group Saving Activity',
				name: '_groupSavingActivity',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'group-saving-activity',
						description: 'group-saving-activity',
						required: true,
						options: [
							{
								name: 'group-saving-activity',
								value: 'group-saving-activity'
							}
						],
						placeholder: 'group-saving-activity'
					},
					{
						displayName: 'Group Saving Activity Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2026-01-06T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2026-01-06T07:00:14+00:00'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: 'Report mode. `currency` mode available only if group has savingsReportSettingsTemplateId set',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'relative',
												value: 'relative'
											},
											{
												name: 'currency',
												value: 'currency'
											}
										],
										placeholder: 'relative'
									}
								]
							}
						],
						required: true
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
		displayName: 'Report Id',
		name: 'reportId',
		required: true,
		description: 'Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.get'
				]
			}
		}
	},
	{
		displayName: 'Report Id',
		name: 'reportId',
		required: true,
		description: 'Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.reports.download.download'
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
					'reports'
				],
				operation: [
					'api.projects.reports.post'
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
					'reports'
				],
				operation: [
					'api.projects.reports.post'
				]
			}
		},
		options: [
			{
				displayName: 'Pre-translation Accuracy',
				name: '_preTranslationAccuracy',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'pre-translate-efficiency',
						description: 'pre-translate-efficiency(deprecated), pre-translate-accuracy',
						required: true,
						options: [
							{
								name: 'pre-translate-efficiency',
								value: 'pre-translate-efficiency'
							},
							{
								name: 'pre-translate-accuracy',
								value: 'pre-translate-accuracy'
							}
						],
						placeholder: 'pre-translate-accuracy'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Pre-translation Accuracy Report schema',
						options: [
							{
								displayName: 'General',
								name: '_preTranslateAccuracyReportGeneral',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
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
										description: 'Array of file ids. Get via [List Files](#operation/api.projects.files.getMany)'
									},
									{
										displayName: 'Directory Ids',
										name: 'directoryIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectDirectoriesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of directory ids. Get via [List Directories](#operation/api.projects.directories.getMany)'
									},
									{
										displayName: 'Branch Ids',
										name: 'branchIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getBranchesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of branch ids. Get via [List Branches](#operation/api.projects.branches.getMany)'
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
										description: 'Array of label ids. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Label Include Type',
										name: 'labelIncludeType',
										type: 'options',
										default: '',
										description: 'Defines which strings include in report',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings_with_label',
												value: 'strings_with_label'
											},
											{
												name: 'strings_without_label',
												value: 'strings_without_label'
											}
										],
										placeholder: 'strings_without_label'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							},
							{
								displayName: 'By Task',
								name: '_preTranslateAccuracyReportByTask',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'Task Id',
										name: 'taskId',
										type: 'options',
										default: '',
										description: 'Task Identifier for which the report should be generated. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getProjectTasks',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Translator Accuracy',
				name: '_translatorAccuracy',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'translator-accuracy',
						description: 'translator-accuracy',
						required: true,
						options: [
							{
								name: 'translator-accuracy',
								value: 'translator-accuracy'
							}
						],
						placeholder: 'translator-accuracy'
					},
					{
						displayName: 'General',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Match Score Categories',
										name: 'matchScoreCategories',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Split into categories by match score. Ranges should be in descending order (e.g., 100-90, 89-80)',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
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
										description: 'Array of file ids. Get via [List Files](#operation/api.projects.files.getMany)'
									},
									{
										displayName: 'Directory Ids',
										name: 'directoryIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectDirectoriesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of directory ids. Get via [List Directories](#operation/api.projects.directories.getMany)'
									},
									{
										displayName: 'Branch Ids',
										name: 'branchIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getBranchesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of branch ids. Get via [List Branches](#operation/api.projects.branches.getMany)'
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
										description: 'Array of label ids. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Label Include Type',
										name: 'labelIncludeType',
										type: 'options',
										default: '',
										description: 'Defines which strings include in report',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings_with_label',
												value: 'strings_with_label'
											},
											{
												name: 'strings_without_label',
												value: 'strings_without_label'
											}
										],
										placeholder: 'strings_without_label'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Costs Estimation Post-Editing',
				name: '_costsEstimationPostEditing',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'costs-estimation-pe',
						description: 'costs-estimation-pe',
						required: true,
						options: [
							{
								name: 'costs-estimation-pe',
								value: 'costs-estimation-pe'
							}
						],
						placeholder: 'costs-estimation-pe'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Costs Estimation Post-Editing Report schema',
						options: [
							{
								displayName: 'General',
								name: '_costsEstimationPeReportGeneral',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Currency',
										name: 'currency',
										type: 'options',
										default: '',
										description: 'Defines report currency',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'USD',
												value: 'USD'
											},
											{
												name: 'EUR',
												value: 'EUR'
											},
											{
												name: 'JPY',
												value: 'JPY'
											},
											{
												name: 'GBP',
												value: 'GBP'
											},
											{
												name: 'AUD',
												value: 'AUD'
											},
											{
												name: 'CAD',
												value: 'CAD'
											},
											{
												name: 'CHF',
												value: 'CHF'
											},
											{
												name: 'CNY',
												value: 'CNY'
											},
											{
												name: 'SEK',
												value: 'SEK'
											},
											{
												name: 'NZD',
												value: 'NZD'
											},
											{
												name: 'MXN',
												value: 'MXN'
											},
											{
												name: 'SGD',
												value: 'SGD'
											},
											{
												name: 'HKD',
												value: 'HKD'
											},
											{
												name: 'NOK',
												value: 'NOK'
											},
											{
												name: 'KRW',
												value: 'KRW'
											},
											{
												name: 'TRY',
												value: 'TRY'
											},
											{
												name: 'RUB',
												value: 'RUB'
											},
											{
												name: 'INR',
												value: 'INR'
											},
											{
												name: 'BRL',
												value: 'BRL'
											},
											{
												name: 'ZAR',
												value: 'ZAR'
											},
											{
												name: 'GEL',
												value: 'GEL'
											},
											{
												name: 'UAH',
												value: 'UAH'
											},
											{
												name: 'DDK',
												value: 'DDK'
											},
											{
												name: 'PLN',
												value: 'PLN'
											}
										]
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: 'perfect',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Calculate Internal Matches',
										name: 'calculateInternalMatches',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Include Pre Translated Strings',
										name: 'includePreTranslatedStrings',
										type: 'boolean',
										default: false,
										description: undefined
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
										description: 'Array of file ids. Get via [List Files](#operation/api.projects.files.getMany)'
									},
									{
										displayName: 'Directory Ids',
										name: 'directoryIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectDirectoriesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of directory ids. Get via [List Directories](#operation/api.projects.directories.getMany)'
									},
									{
										displayName: 'Branch Ids',
										name: 'branchIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getBranchesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of branch ids. Get via [List Branches](#operation/api.projects.branches.getMany)'
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
										description: 'Array of label ids. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Label Include Type',
										name: 'labelIncludeType',
										type: 'options',
										default: '',
										description: 'Defines which strings include in report',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings_with_label',
												value: 'strings_with_label'
											},
											{
												name: 'strings_without_label',
												value: 'strings_without_label'
											}
										]
									},
									{
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							},
							{
								displayName: 'By Task',
								name: '_costsEstimationPeReportByTask',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Currency',
										name: 'currency',
										type: 'options',
										default: '',
										description: 'Defines report currency',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'USD',
												value: 'USD'
											},
											{
												name: 'EUR',
												value: 'EUR'
											},
											{
												name: 'JPY',
												value: 'JPY'
											},
											{
												name: 'GBP',
												value: 'GBP'
											},
											{
												name: 'AUD',
												value: 'AUD'
											},
											{
												name: 'CAD',
												value: 'CAD'
											},
											{
												name: 'CHF',
												value: 'CHF'
											},
											{
												name: 'CNY',
												value: 'CNY'
											},
											{
												name: 'SEK',
												value: 'SEK'
											},
											{
												name: 'NZD',
												value: 'NZD'
											},
											{
												name: 'MXN',
												value: 'MXN'
											},
											{
												name: 'SGD',
												value: 'SGD'
											},
											{
												name: 'HKD',
												value: 'HKD'
											},
											{
												name: 'NOK',
												value: 'NOK'
											},
											{
												name: 'KRW',
												value: 'KRW'
											},
											{
												name: 'TRY',
												value: 'TRY'
											},
											{
												name: 'RUB',
												value: 'RUB'
											},
											{
												name: 'INR',
												value: 'INR'
											},
											{
												name: 'BRL',
												value: 'BRL'
											},
											{
												name: 'ZAR',
												value: 'ZAR'
											},
											{
												name: 'GEL',
												value: 'GEL'
											},
											{
												name: 'UAH',
												value: 'UAH'
											},
											{
												name: 'DDK',
												value: 'DDK'
											},
											{
												name: 'PLN',
												value: 'PLN'
											}
										]
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: 'perfect',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
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
										displayName: 'Calculate Internal Matches',
										name: 'calculateInternalMatches',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Include Pre Translated Strings',
										name: 'includePreTranslatedStrings',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Task Ids',
										name: 'taskIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectTasksMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of task ids. Get via [List Tasks](#operation/api.projects.tasks.getMany)'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Translation Costs Post-Editing',
				name: '_translationCostsPostEditing',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'translation-costs-pe',
						description: 'translation-costs-pe',
						required: true,
						options: [
							{
								name: 'translation-costs-pe',
								value: 'translation-costs-pe'
							}
						],
						placeholder: 'translation-costs-pe'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Translation Costs Post-Editing Report schema',
						options: [
							{
								displayName: 'General',
								name: '_translationCostsPeReportGeneral',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Currency',
										name: 'currency',
										type: 'options',
										default: '',
										description: 'Defines report currency',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'USD',
												value: 'USD'
											},
											{
												name: 'EUR',
												value: 'EUR'
											},
											{
												name: 'JPY',
												value: 'JPY'
											},
											{
												name: 'GBP',
												value: 'GBP'
											},
											{
												name: 'AUD',
												value: 'AUD'
											},
											{
												name: 'CAD',
												value: 'CAD'
											},
											{
												name: 'CHF',
												value: 'CHF'
											},
											{
												name: 'CNY',
												value: 'CNY'
											},
											{
												name: 'SEK',
												value: 'SEK'
											},
											{
												name: 'NZD',
												value: 'NZD'
											},
											{
												name: 'MXN',
												value: 'MXN'
											},
											{
												name: 'SGD',
												value: 'SGD'
											},
											{
												name: 'HKD',
												value: 'HKD'
											},
											{
												name: 'NOK',
												value: 'NOK'
											},
											{
												name: 'KRW',
												value: 'KRW'
											},
											{
												name: 'TRY',
												value: 'TRY'
											},
											{
												name: 'RUB',
												value: 'RUB'
											},
											{
												name: 'INR',
												value: 'INR'
											},
											{
												name: 'BRL',
												value: 'BRL'
											},
											{
												name: 'ZAR',
												value: 'ZAR'
											},
											{
												name: 'GEL',
												value: 'GEL'
											},
											{
												name: 'UAH',
												value: 'UAH'
											},
											{
												name: 'DDK',
												value: 'DDK'
											},
											{
												name: 'PLN',
												value: 'PLN'
											}
										],
										placeholder: 'USD'
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: 'perfect',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Mt Match',
														name: 'mtMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Ai Match',
														name: 'aiMatch',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: '\n\n __Note:__ The `aiMatch` field is optional. If this field is not filled in, the schema will be taken from the `mtMatch` field.',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Item',
																name: 'items',
																values: [
																	{
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														]
													},
													{
														displayName: 'Suggestion Match',
														name: 'suggestionMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Exclude Approvals For Edited Translations',
										name: 'excludeApprovalsForEditedTranslations',
										type: 'boolean',
										default: false,
										description: 'Exclude approvals when the same user has made translations for the string.'
									},
									{
										displayName: 'Pre Translated Strings Categorization Adjustment',
										name: 'preTranslatedStringsCategorizationAdjustment',
										type: 'boolean',
										default: false,
										description: 'Repetitive translations of pre-translated strings are reported under TM or MT match rates instead of Other suggestion match rates, depending on the initial pre-translation type.'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids'
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
										description: 'Array of file ids. Get via [List Files](#operation/api.projects.files.getMany)'
									},
									{
										displayName: 'Directory Ids',
										name: 'directoryIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectDirectoriesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of directory ids. Get via [List Directories](#operation/api.projects.directories.getMany)'
									},
									{
										displayName: 'Branch Ids',
										name: 'branchIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getBranchesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of branch ids. Get via [List Branches](#operation/api.projects.branches.getMany)'
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
										description: 'Array of label ids. Get via [List Labels](#operation/api.projects.labels.getMany)'
									},
									{
										displayName: 'Label Include Type',
										name: 'labelIncludeType',
										type: 'options',
										default: '',
										description: 'Defines which strings include in report',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings_with_label',
												value: 'strings_with_label'
											},
											{
												name: 'strings_without_label',
												value: 'strings_without_label'
											}
										],
										placeholder: 'strings_without_label'
									},
									{
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							},
							{
								displayName: 'By Task',
								name: '_translationCostsPeReportByTask',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Currency',
										name: 'currency',
										type: 'options',
										default: '',
										description: 'Defines report currency',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'USD',
												value: 'USD'
											},
											{
												name: 'EUR',
												value: 'EUR'
											},
											{
												name: 'JPY',
												value: 'JPY'
											},
											{
												name: 'GBP',
												value: 'GBP'
											},
											{
												name: 'AUD',
												value: 'AUD'
											},
											{
												name: 'CAD',
												value: 'CAD'
											},
											{
												name: 'CHF',
												value: 'CHF'
											},
											{
												name: 'CNY',
												value: 'CNY'
											},
											{
												name: 'SEK',
												value: 'SEK'
											},
											{
												name: 'NZD',
												value: 'NZD'
											},
											{
												name: 'MXN',
												value: 'MXN'
											},
											{
												name: 'SGD',
												value: 'SGD'
											},
											{
												name: 'HKD',
												value: 'HKD'
											},
											{
												name: 'NOK',
												value: 'NOK'
											},
											{
												name: 'KRW',
												value: 'KRW'
											},
											{
												name: 'TRY',
												value: 'TRY'
											},
											{
												name: 'RUB',
												value: 'RUB'
											},
											{
												name: 'INR',
												value: 'INR'
											},
											{
												name: 'BRL',
												value: 'BRL'
											},
											{
												name: 'ZAR',
												value: 'ZAR'
											},
											{
												name: 'GEL',
												value: 'GEL'
											},
											{
												name: 'UAH',
												value: 'UAH'
											},
											{
												name: 'DDK',
												value: 'DDK'
											},
											{
												name: 'PLN',
												value: 'PLN'
											}
										],
										placeholder: 'USD'
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n\n__Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: 'perfect',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Mt Match',
														name: 'mtMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Ai Match',
														name: 'aiMatch',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: '\n\n __Note:__ The `aiMatch` field is optional. If this field is not filled in, the schema will be taken from the `mtMatch` field.',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Item',
																name: 'items',
																values: [
																	{
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														]
													},
													{
														displayName: 'Suggestion Match',
														name: 'suggestionMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Task Ids',
										name: 'taskIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectTasksMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of task ids. Get via [List Tasks](#operation/api.projects.tasks.getMany)'
									},
									{
										displayName: 'Exclude Approvals For Edited Translations',
										name: 'excludeApprovalsForEditedTranslations',
										type: 'boolean',
										default: false,
										description: 'Exclude approvals when the same user has made translations for the string.'
									},
									{
										displayName: 'Pre Translated Strings Categorization Adjustment',
										name: 'preTranslatedStringsCategorizationAdjustment',
										type: 'boolean',
										default: false,
										description: 'Repetitive translations of pre-translated strings are reported under TM or MT match rates instead of Other suggestion match rates, depending on the initial pre-translation type.'
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Top Members',
				name: '_topMembers',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'top-members',
						description: 'top-members',
						required: true,
						options: [
							{
								name: 'top-members',
								value: 'top-members'
							}
						],
						placeholder: 'top-members'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Top Members Report schema',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Contribution Raw Data',
				name: '_contributionRawData',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'contribution-raw-data',
						description: 'contribution-raw-data',
						required: true,
						options: [
							{
								name: 'contribution-raw-data',
								value: 'contribution-raw-data'
							}
						],
						placeholder: 'contribution-raw-data'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Contribution Raw Data Report schema',
						options: [
							{
								displayName: 'General',
								name: '_contributionReportGeneral',
								values: [
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: 'Defines report mode',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'translations',
												value: 'translations'
											},
											{
												name: 'approvals',
												value: 'approvals'
											},
											{
												name: 'votes',
												value: 'votes'
											}
										],
										required: true
									},
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'User Id',
										name: 'userId',
										type: 'options',
										default: '',
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getUsers'
										}
									},
									{
										displayName: 'Columns',
										name: 'columns',
										type: 'multiOptions',
										default: [],
										description: undefined,
										options: [
											{
												name: 'userId',
												value: 'userId'
											},
											{
												name: 'languageId',
												value: 'languageId'
											},
											{
												name: 'stringId',
												value: 'stringId'
											},
											{
												name: 'translationId',
												value: 'translationId'
											},
											{
												name: 'fileId',
												value: 'fileId'
											},
											{
												name: 'filePath',
												value: 'filePath'
											},
											{
												name: 'pluralForm',
												value: 'pluralForm'
											},
											{
												name: 'sourceStringTextHash',
												value: 'sourceStringTextHash'
											},
											{
												name: 'mtEngine',
												value: 'mtEngine'
											},
											{
												name: 'mtId',
												value: 'mtId'
											},
											{
												name: 'tmName',
												value: 'tmName'
											},
											{
												name: 'tmId',
												value: 'tmId'
											},
											{
												name: 'aiPromptId',
												value: 'aiPromptId'
											},
											{
												name: 'preTranslated',
												value: 'preTranslated'
											},
											{
												name: 'mark',
												value: 'mark'
											},
											{
												name: 'sourceUnits',
												value: 'sourceUnits'
											},
											{
												name: 'targetUnits',
												value: 'targetUnits'
											},
											{
												name: 'createdAt',
												value: 'createdAt'
											},
											{
												name: 'updatedAt',
												value: 'updatedAt'
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
										description: 'Array of file ids. Get via [List Files](#operation/api.projects.files.getMany)'
									},
									{
										displayName: 'Directory Ids',
										name: 'directoryIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectDirectoriesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of directory ids. Get via [List Directories](#operation/api.projects.directories.getMany)'
									},
									{
										displayName: 'Branch Ids',
										name: 'branchIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getBranchesMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Array of branch ids. Get via [List Branches](#operation/api.projects.branches.getMany)'
									},
									{
										displayName: 'Tm Ids',
										name: 'tmIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getTranslationMemoriesMulti'
										},
										default: [],
										description: 'Array of Tm ids. Get via [List TMs](#operation/api.tms.getMany)'
									},
									{
										displayName: 'Mt Ids',
										name: 'mtIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getMTEnginesMulti'
										},
										default: [],
										description: 'Array of Mt ids. Get via [List MTs](#operation/api.mts.getMany)'
									},
									{
										displayName: 'Ai Prompt Ids',
										name: 'aiPromptIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getAiPromptsMulti'
										},
										default: [],
										description: 'Array of AI Prompts ids. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									}
								]
							},
							{
								displayName: 'By Task',
								name: '_contributionReportByTask',
								values: [
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: 'Defines report mode',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'translations',
												value: 'translations'
											},
											{
												name: 'approvals',
												value: 'approvals'
											},
											{
												name: 'votes',
												value: 'votes'
											}
										],
										required: true
									},
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Task Id',
										name: 'taskId',
										type: 'options',
										default: '',
										description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
										required: true,
										typeOptions: {
											loadOptionsMethod: 'getProjectTasks',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Columns',
										name: 'columns',
										type: 'multiOptions',
										default: [],
										description: undefined,
										options: [
											{
												name: 'userId',
												value: 'userId'
											},
											{
												name: 'languageId',
												value: 'languageId'
											},
											{
												name: 'stringId',
												value: 'stringId'
											},
											{
												name: 'translationId',
												value: 'translationId'
											},
											{
												name: 'fileId',
												value: 'fileId'
											},
											{
												name: 'filePath',
												value: 'filePath'
											},
											{
												name: 'pluralForm',
												value: 'pluralForm'
											},
											{
												name: 'sourceStringTextHash',
												value: 'sourceStringTextHash'
											},
											{
												name: 'mtEngine',
												value: 'mtEngine'
											},
											{
												name: 'mtId',
												value: 'mtId'
											},
											{
												name: 'tmName',
												value: 'tmName'
											},
											{
												name: 'tmId',
												value: 'tmId'
											},
											{
												name: 'aiPromptId',
												value: 'aiPromptId'
											},
											{
												name: 'preTranslated',
												value: 'preTranslated'
											},
											{
												name: 'mark',
												value: 'mark'
											},
											{
												name: 'sourceUnits',
												value: 'sourceUnits'
											},
											{
												name: 'targetUnits',
												value: 'targetUnits'
											},
											{
												name: 'createdAt',
												value: 'createdAt'
											},
											{
												name: 'updatedAt',
												value: 'updatedAt'
											}
										]
									},
									{
										displayName: 'Tm Ids',
										name: 'tmIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getTranslationMemoriesMulti'
										},
										default: [],
										description: 'Array of Tm ids. Get via [List TMs](#operation/api.tms.getMany)'
									},
									{
										displayName: 'Mt Ids',
										name: 'mtIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getMTEnginesMulti'
										},
										default: [],
										description: 'Array of Mt ids. Get via [List MTs](#operation/api.mts.getMany)'
									},
									{
										displayName: 'Ai Prompt Ids',
										name: 'aiPromptIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getAiPromptsMulti'
										},
										default: [],
										description: 'Array of AI Prompts ids. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)'
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Task Usage',
				name: '_taskUsage',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'task-usage',
						description: 'task-usage',
						required: true,
						options: [
							{
								name: 'task-usage',
								value: 'task-usage'
							}
						],
						placeholder: 'task-usage'
					},
					{
						displayName: 'Task Usage Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						options: [
							{
								displayName: 'Workload',
								name: '_taskUsageWorkloadReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'workload',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'workload',
												value: 'workload'
											}
										],
										placeholder: 'workload',
										required: true
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *     0 - translate\n *     1 - proofread\n *     2 - translate by vendor\n *     3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Create vs Resolve',
								name: '_taskUsageCreateVsResolveReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'created-vs-resolved',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'created-vs-resolved',
												value: 'created-vs-resolved'
											}
										],
										placeholder: 'created-vs-resolved',
										required: true
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *      0 - translate\n *      1 - proofread\n *      2 - translate by vendor\n *      3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Performance',
								name: '_taskUsagePerformanceReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'performance',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'performance',
												value: 'performance'
											}
										],
										placeholder: 'performance',
										required: true
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *     0 - translate\n *     1 - proofread\n *     2 - translate by vendor\n *     3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Time',
								name: '_taskUsageTimeReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'time',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'time',
												value: 'time'
											}
										],
										placeholder: 'time',
										required: true
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *     0 - translate\n *     1 - proofread\n *     2 - translate by vendor\n *     3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Words Count From',
										name: 'wordsCountFrom',
										type: 'number',
										default: 0,
										description: undefined,
										placeholder: '1'
									},
									{
										displayName: 'Words Count To',
										name: 'wordsCountTo',
										type: 'number',
										default: 0,
										description: undefined,
										placeholder: '1'
									}
								]
							},
							{
								displayName: 'Cost',
								name: '_taskUsageCostReport',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										],
										required: true
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										default: '',
										description: 'cost',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'cost',
												value: 'cost'
											}
										],
										placeholder: 'cost',
										required: true
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-25T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'type',
												value: 'type'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *     0 - translate\n *     1 - proofread\n *     2 - translate by vendor\n *     3 - proofread by vendor',
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
											},
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
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Creator Id',
										name: 'creatorId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Assignee Id',
										name: 'assigneeId',
										type: 'number',
										default: 0,
										description: 'User Identifier for which the report should be generated. Get via [List Project Members](#operation/api.projects.members.getMany)',
										placeholder: '1'
									},
									{
										displayName: 'Statuses',
										name: 'statuses',
										type: 'multiOptions',
										default: [],
										description: 'Task statuses to filter by',
										options: [
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
											},
											{
												name: 'review',
												value: 'review'
											}
										]
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Source Content Updates',
				name: '_sourceContentUpdates',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'source-content-updates',
						description: 'source-content-updates',
						required: true,
						options: [
							{
								name: 'source-content-updates',
								value: 'source-content-updates'
							}
						],
						placeholder: 'source-content-updates'
					},
					{
						displayName: 'Source Content Updates',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Project Members',
				name: '_projectMembers',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'project-members',
						description: 'project-members',
						required: true,
						options: [
							{
								name: 'project-members',
								value: 'project-members'
							}
						],
						placeholder: 'project-members'
					},
					{
						displayName: 'Project Members Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-05-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-05-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Issues in Editor',
				name: '_issuesInEditor',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'editor-issues',
						description: 'editor-issues',
						required: true,
						options: [
							{
								name: 'editor-issues',
								value: 'editor-issues'
							}
						],
						placeholder: 'editor-issues'
					},
					{
						displayName: 'Issue Detail Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2019-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2019-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Issue Type',
										name: 'issueType',
										type: 'options',
										default: '',
										description: 'Defines issue type',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'general_question',
												value: 'general_question'
											},
											{
												name: 'translation_mistake',
												value: 'translation_mistake'
											},
											{
												name: 'context_request',
												value: 'context_request'
											},
											{
												name: 'source_mistake',
												value: 'source_mistake'
											}
										],
										placeholder: 'general_question'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Project Qa Check Isses Report',
				name: '_projectQaCheckIssesReport',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'qa-check-issues',
						description: 'qa-check-issues',
						required: true,
						options: [
							{
								name: 'qa-check-issues',
								value: 'qa-check-issues'
							}
						],
						placeholder: 'qa-check-issues'
					},
					{
						displayName: 'Project Qa Check Issues Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-05-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-05-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Project Saving Activity',
				name: '_projectSavingActivity',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'saving-activity',
						description: 'saving-activity',
						required: true,
						options: [
							{
								name: 'saving-activity',
								value: 'saving-activity'
							}
						],
						placeholder: 'saving-activity'
					},
					{
						displayName: 'Saving Activity Report',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: undefined,
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'currency',
												value: 'currency'
											},
											{
												name: 'relative',
												value: 'relative'
											}
										]
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Project Translation Activity',
				name: '_projectTranslationActivity',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'translation-activity',
						description: 'translation-activity',
						required: true,
						options: [
							{
								name: 'translation-activity',
								value: 'translation-activity'
							}
						],
						placeholder: 'translation-activity'
					},
					{
						displayName: 'Project Translation Activity',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Unit',
										name: 'unit',
										type: 'options',
										default: '',
										description: 'Defines report unit',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'strings',
												value: 'strings'
											},
											{
												name: 'words',
												value: 'words'
											},
											{
												name: 'chars',
												value: 'chars'
											},
											{
												name: 'chars_with_spaces',
												value: 'chars_with_spaces'
											}
										],
										placeholder: 'words'
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getLanguages'
										}
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Time Spent',
				name: '_timeSpent',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'time-spent',
						description: 'time-spent',
						required: true,
						options: [
							{
								name: 'time-spent',
								value: 'time-spent'
							}
						],
						placeholder: 'time-spent'
					},
					{
						displayName: 'Project Time Spent',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines export file format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'xlsx',
												value: 'xlsx'
											},
											{
												name: 'csv',
												value: 'csv'
											},
											{
												name: 'json',
												value: 'json'
											}
										]
									},
									{
										displayName: 'Group By',
										name: 'groupBy',
										type: 'options',
										default: '',
										description: 'Defines grouping parameter',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'user',
												value: 'user'
											},
											{
												name: 'language',
												value: 'language'
											},
											{
												name: 'task',
												value: 'task'
											}
										],
										placeholder: 'user'
									},
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: undefined,
														required: true
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
														required: true
													},
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										]
									},
									{
										displayName: 'Language Id',
										name: 'languageId',
										type: 'options',
										default: '',
										description: 'Language Identifier for which the report should be generated. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
										description: 'Array of user ids'
									},
									{
										displayName: 'Type Tasks',
										name: 'typeTasks',
										type: 'options',
										default: '',
										description: 'Task type:\n *         0 - translate\n *         1 - proofread\n *         2 - translate by vendor\n *         3 - proofread by vendor',
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
											},
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
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2025-09-23T07:00:14+00:00'
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2025-09-27T07:00:14+00:00'
									},
									{
										displayName: 'Task Ids',
										name: 'taskIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectTasksMulti',
											loadOptionsDependsOn: [
												'projectId'
											]
										},
										default: [],
										description: 'Task Identifier for which the report should be generated. Get via [List Tasks](#operation/api.projects.tasks.getMany)'
									},
									{
										displayName: 'Workflow Step Id',
										name: 'workflowStepId',
										type: 'options',
										default: '',
										description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)',
										typeOptions: {
											loadOptionsMethod: 'getProjectWorkflowSteps',
											loadOptionsDependsOn: [
												'projectId'
											]
										}
									},
									{
										displayName: 'Skip Archiving',
										name: 'skipArchiving',
										type: 'boolean',
										default: false,
										description: 'If true, the report will not be saved to the archive for historical reference.'
									}
								]
							}
						],
						required: true
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
					'reports'
				],
				operation: [
					'api.projects.reports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Report Id',
		name: 'reportId',
		required: true,
		description: 'Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.get'
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
					'reports'
				],
				operation: [
					'api.projects.reports.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Report Id',
		name: 'reportId',
		required: true,
		description: 'Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.getMany'
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.post'
				]
			}
		},
		options: [
			{
				displayName: 'User Report settings template for post-editing',
				name: '_userReportSettingsTemplateForPostEditing',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Template name',
						required: true,
						placeholder: 'Default template'
					},
					{
						displayName: 'Currency',
						name: 'currency',
						type: 'options',
						default: 'USD',
						description: 'Defines report currency',
						required: true,
						options: [
							{
								name: 'USD',
								value: 'USD'
							},
							{
								name: 'EUR',
								value: 'EUR'
							},
							{
								name: 'JPY',
								value: 'JPY'
							},
							{
								name: 'GBP',
								value: 'GBP'
							},
							{
								name: 'AUD',
								value: 'AUD'
							},
							{
								name: 'CAD',
								value: 'CAD'
							},
							{
								name: 'CHF',
								value: 'CHF'
							},
							{
								name: 'CNY',
								value: 'CNY'
							},
							{
								name: 'SEK',
								value: 'SEK'
							},
							{
								name: 'NZD',
								value: 'NZD'
							},
							{
								name: 'MXN',
								value: 'MXN'
							},
							{
								name: 'SGD',
								value: 'SGD'
							},
							{
								name: 'HKD',
								value: 'HKD'
							},
							{
								name: 'NOK',
								value: 'NOK'
							},
							{
								name: 'KRW',
								value: 'KRW'
							},
							{
								name: 'TRY',
								value: 'TRY'
							},
							{
								name: 'RUB',
								value: 'RUB'
							},
							{
								name: 'INR',
								value: 'INR'
							},
							{
								name: 'BRL',
								value: 'BRL'
							},
							{
								name: 'ZAR',
								value: 'ZAR'
							},
							{
								name: 'GEL',
								value: 'GEL'
							},
							{
								name: 'UAH',
								value: 'UAH'
							},
							{
								name: 'DDK',
								value: 'DDK'
							},
							{
								name: 'PLN',
								value: 'PLN'
							}
						],
						placeholder: 'USD'
					},
					{
						displayName: 'Unit',
						name: 'unit',
						type: 'options',
						default: 'strings',
						description: 'Defines report unit',
						required: true,
						options: [
							{
								name: 'strings',
								value: 'strings'
							},
							{
								name: 'words',
								value: 'words'
							},
							{
								name: 'chars',
								value: 'chars'
							},
							{
								name: 'chars_with_spaces',
								value: 'chars_with_spaces'
							}
						],
						placeholder: 'words'
					},
					{
						displayName: 'Config',
						name: 'config',
						type: 'fixedCollection',
						default: {},
						description: 'Defines report config',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: 'Applies to all languages by default',
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
													},
													{
														displayName: 'Full Translation',
														name: 'fullTranslation',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													},
													{
														displayName: 'Proofread',
														name: 'proofread',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.12',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Net Rate Schemes',
										name: 'netRateSchemes',
										type: 'fixedCollection',
										default: {},
										description: 'Net Rate Schemes (Percentage paid of full translation rate)\n *\n * __Note:__ A new translation will be included in the report at the lowest rate if multiple scheme categories can be applied to the translation',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Tm Match',
														name: 'tmMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `perfect`, `100`, or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100-82',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Mt Match',
														name: 'mtMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													},
													{
														displayName: 'Ai Match',
														name: 'aiMatch',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: '\n\n __Note:__ The `aiMatch` field is optional. If this field is not filled in, the schema will be taken from the `mtMatch` field.',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Item',
																name: 'items',
																values: [
																	{
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100-74',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														]
													},
													{
														displayName: 'Suggestion Match',
														name: 'suggestionMatch',
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
																		displayName: 'Match Type',
																		name: 'matchType',
																		type: 'string',
																		default: '',
																		description: 'Match type, %. Possible values: `100` or a percentage range (e.g., `99-82`, `81-60`)',
																		placeholder: '100',
																		required: true
																	},
																	{
																		displayName: 'Price',
																		name: 'price',
																		type: 'number',
																		default: undefined,
																		description: 'Price, %',
																		placeholder: '0.1',
																		required: true
																	}
																]
															}
														],
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Calculate Internal Matches',
										name: 'calculateInternalMatches',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Include Pre Translated Strings',
										name: 'includePreTranslatedStrings',
										type: 'boolean',
										default: false,
										description: undefined
									},
									{
										displayName: 'Exclude Approvals For Edited Translations',
										name: 'excludeApprovalsForEditedTranslations',
										type: 'boolean',
										default: false,
										description: 'Exclude approvals when the same user has made translations for the string.'
									},
									{
										displayName: 'Pre Translated Strings Categorization Adjustment',
										name: 'preTranslatedStringsCategorizationAdjustment',
										type: 'boolean',
										default: false,
										description: 'Repetitive translations of pre-translated strings are reported under TM or MT match rates instead of Other suggestion match rates, depending on the initial pre-translation type.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'User Report hourly settings template',
				name: '_userReportHourlySettingsTemplate',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Template name',
						required: true,
						placeholder: 'Default hourly template'
					},
					{
						displayName: 'Currency',
						name: 'currency',
						type: 'options',
						default: 'USD',
						description: 'Defines report currency',
						required: true,
						options: [
							{
								name: 'USD',
								value: 'USD'
							},
							{
								name: 'EUR',
								value: 'EUR'
							},
							{
								name: 'JPY',
								value: 'JPY'
							},
							{
								name: 'GBP',
								value: 'GBP'
							},
							{
								name: 'AUD',
								value: 'AUD'
							},
							{
								name: 'CAD',
								value: 'CAD'
							},
							{
								name: 'CHF',
								value: 'CHF'
							},
							{
								name: 'CNY',
								value: 'CNY'
							},
							{
								name: 'SEK',
								value: 'SEK'
							},
							{
								name: 'NZD',
								value: 'NZD'
							},
							{
								name: 'MXN',
								value: 'MXN'
							},
							{
								name: 'SGD',
								value: 'SGD'
							},
							{
								name: 'HKD',
								value: 'HKD'
							},
							{
								name: 'NOK',
								value: 'NOK'
							},
							{
								name: 'KRW',
								value: 'KRW'
							},
							{
								name: 'TRY',
								value: 'TRY'
							},
							{
								name: 'RUB',
								value: 'RUB'
							},
							{
								name: 'INR',
								value: 'INR'
							},
							{
								name: 'BRL',
								value: 'BRL'
							},
							{
								name: 'ZAR',
								value: 'ZAR'
							},
							{
								name: 'GEL',
								value: 'GEL'
							},
							{
								name: 'UAH',
								value: 'UAH'
							},
							{
								name: 'DDK',
								value: 'DDK'
							},
							{
								name: 'PLN',
								value: 'PLN'
							}
						],
						placeholder: 'USD'
					},
					{
						displayName: 'Unit',
						name: 'unit',
						type: 'options',
						default: 'hours',
						description: 'Defines report unit',
						required: true,
						options: [
							{
								name: 'hours',
								value: 'hours'
							}
						],
						placeholder: 'hours'
					},
					{
						displayName: 'Config',
						name: 'config',
						type: 'fixedCollection',
						default: {},
						description: 'Defines report config',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Base Rates',
										name: 'baseRates',
										type: 'fixedCollection',
										default: {},
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										],
										required: true
									},
									{
										displayName: 'Individual Rates',
										name: 'individualRates',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'Individual rates (Custom rates for certain languages or users)',
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Item',
												name: 'items',
												values: [
													{
														displayName: 'Language Ids',
														name: 'languageIds',
														type: 'multiOptions',
														typeOptions: {
															loadOptionsMethod: 'getLanguagesMulti'
														},
														default: [],
														description: 'Array of language ids',
														required: true
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
														required: true
													},
													{
														displayName: 'Hourly',
														name: 'hourly',
														type: 'number',
														default: undefined,
														description: undefined,
														placeholder: '0.1',
														required: true
													}
												]
											}
										],
										required: true
									}
								]
							}
						],
						required: true
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List User Report Settings Template](#operation/api.users.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List User Report Settings Template](#operation/api.users.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List User Report Settings Template](#operation/api.users.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'A JSON Patch operation as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902#section-4)',
		routing: {
			request: {
				body: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.patch'
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
					'reports'
				],
				operation: [
					'api.reports.archives.getMany'
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
					'reports'
				],
				operation: [
					'api.reports.settings-templates.getMany'
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
					'reports'
				],
				operation: [
					'api.users.reports.settings-templates.getMany'
				]
			}
		}
	}
];
