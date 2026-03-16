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
						url: '=/users/{{$parameter["userId"]}}/reports/archives'
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
				value: 'api.users.reports.archives.get',
				action: 'Get Report Archive',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/reports/archives/{{$parameter["archiveId"]}}'
					}
				}
			},
			{
				name: 'Delete Report Archive',
				value: 'api.users.reports.archives.delete',
				action: 'Delete Report Archive',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/reports/archives/{{$parameter["archiveId"]}}'
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
						url: '=/users/{{$parameter["userId"]}}/reports/archives/{{$parameter["archiveId"]}}/exports'
					}
				}
			},
			{
				name: 'Check Report Archive Export Status',
				value: 'api.users.reports.archives.exports.get',
				action: 'Check Report Archive Export Status',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/reports/archives/{{$parameter["archiveId"]}}/exports/{{$parameter["exportId"]}}'
					}
				}
			},
			{
				name: 'Download Report Archive',
				value: 'api.users.reports.archives.exports.download.get',
				action: 'Download Report Archive',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/reports/archives/{{$parameter["archiveId"]}}/exports/{{$parameter["exportId"]}}/download'
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
				name: 'List Report Settings Templates',
				value: 'api.projects.reports.settings-templates.getMany',
				action: 'List Report Settings Templates',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/reports/settings-templates'
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
				value: 'api.projects.reports.settings-templates.post',
				action: 'Add Report Settings Template',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/reports/settings-templates'
					}
				}
			},
			{
				name: 'Get Report Settings Template',
				value: 'api.projects.reports.settings-templates.get',
				action: 'Get Report Settings Template',
				description: '**Required scopes:** `project.report` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
					}
				}
			},
			{
				name: 'Delete Report Settings Template',
				value: 'api.projects.reports.settings-templates.delete',
				action: 'Delete Report Settings Template',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
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
				value: 'api.projects.reports.settings-templates.patch',
				action: 'Edit Report Settings Template',
				description: '**Required scopes:** `project.report` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/reports/settings-templates/{{$parameter["reportSettingsTemplateId"]}}'
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
		displayName: 'GET /users/{userId}/reports/archives',
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
		displayName: 'GET /users/{userId}/reports/archives/{archiveId}',
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
					'api.users.reports.archives.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/reports/archives/{archiveId}',
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
					'api.users.reports.archives.delete'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/reports/archives/{archiveId}/exports',
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
		displayName: 'GET /users/{userId}/reports/archives/{archiveId}/exports/{exportId}',
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
					'api.users.reports.archives.exports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/reports/archives/{archiveId}/exports/{exportId}/download',
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
					'api.users.reports.archives.exports.download.get'
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
		displayName: 'GET /projects/{projectId}/reports/settings-templates',
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
					'api.projects.reports.settings-templates.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/reports/settings-templates',
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
					'api.projects.reports.settings-templates.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/reports/settings-templates/{reportSettingsTemplateId}',
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
					'api.projects.reports.settings-templates.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/reports/settings-templates/{reportSettingsTemplateId}',
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
					'api.projects.reports.settings-templates.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/reports/settings-templates/{reportSettingsTemplateId}',
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
					'api.projects.reports.settings-templates.patch'
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
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
		displayName: 'Scope Type',
		name: 'scopeType',
		description: 'Filter only project report archives',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
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
		description: 'Filter archives by specific scope id',
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.archives.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'api.users.reports.archives.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.archives.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'api.users.reports.archives.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportArchives'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
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
			loadOptionsMethod: 'getUsers'
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.archives.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'api.users.reports.archives.exports.get'
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
					'api.users.reports.archives.exports.get'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.users.reports.archives.exports.download.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'api.users.reports.archives.exports.download.get'
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
					'api.users.reports.archives.exports.download.get'
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
										]
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
										]
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
										]
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
										description: 'Array of user ids. Get via [List Project Members](#operation/api.projects.members.getMany)'
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
												name: 'aiPromptName',
												value: 'aiPromptName'
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
												name: 'aiPromptName',
												value: 'aiPromptName'
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
				displayName: 'Editor Issues',
				name: '_editorIssues',
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
						displayName: 'Editor Issues Report',
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
				displayName: 'Project Qa Check Issues Report',
				name: '_projectQaCheckIssuesReport',
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
										description: 'Task type:\n *          0 - Translate by own translators\n *          1 - Proofread by own proofreaders\n *          2 - Translate by vendor\n *          3 - Proofread by vendor',
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
					'api.projects.reports.settings-templates.getMany'
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
					'reports'
				],
				operation: [
					'api.projects.reports.settings-templates.getMany'
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
					'reports'
				],
				operation: [
					'api.projects.reports.settings-templates.post'
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
					'api.projects.reports.settings-templates.post'
				]
			}
		},
		options: [
			{
				displayName: 'Report settings template for post-editing',
				name: '_reportSettingsTemplateForPostEditing',
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
																		placeholder: '100-93',
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
					},
					{
						displayName: 'Is Global',
						name: 'isGlobal',
						type: 'boolean',
						default: false,
						description: 'Defines a report as global',
						placeholder: 'true'
					}
				]
			},
			{
				displayName: 'Report settings template for hourly',
				name: '_reportSettingsTemplateForHourly',
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
					},
					{
						displayName: 'Is Global',
						name: 'isGlobal',
						type: 'boolean',
						default: false,
						description: 'Defines a report as global',
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
					'api.projects.reports.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List Report Settings Template](#operation/api.projects.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.settings-templates.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
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
					'api.projects.reports.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List Report Settings Template](#operation/api.projects.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.settings-templates.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
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
					'api.projects.reports.settings-templates.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Report Settings Template Id',
		name: 'reportSettingsTemplateId',
		required: true,
		description: 'Report Settings Template Identifier. Get via [List Report Settings Template](#operation/api.projects.reports.settings-templates.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'reports'
				],
				operation: [
					'api.projects.reports.settings-templates.patch'
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
					'api.projects.reports.settings-templates.patch'
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
																		placeholder: '100-93',
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
					'api.projects.reports.settings-templates.getMany'
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
