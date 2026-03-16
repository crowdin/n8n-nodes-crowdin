// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody } from '../../../utils/preSend';

export const usersProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'users'
				]
			}
		},
		options: [
			{
				name: 'List Group Managers',
				value: 'api.groups.managers.getMany',
				action: 'List Group Managers',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/managers'
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
				name: 'Get Group Manager',
				value: 'api.groups.managers.get',
				action: 'Get Group Manager',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/managers/{{$parameter["userId"]}}'
					}
				}
			},
			{
				name: 'List Project Members',
				value: 'api.projects.members.getMany',
				action: 'List Project Members',
				description: '**Required scopes:** `project.member` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/members'
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
				name: 'Add Project Member',
				value: 'api.projects.members.post',
				action: 'Add Project Member',
				description: '**Required scopes:** `project.member` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/members'
					}
				}
			},
			{
				name: 'Get Project Member Permissions',
				value: 'api.projects.members.get',
				action: 'Get Project Member Permissions',
				description: '**Required scopes:** `project.member` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/members/{{$parameter["memberId"]}}'
					}
				}
			},
			{
				name: 'Replace Project Member Permissions',
				value: 'api.projects.members.put',
				action: 'Replace Project Member Permissions',
				description: '**Required scopes:** `project.member` (Read and Write).',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/members/{{$parameter["memberId"]}}'
					}
				}
			},
			{
				name: 'Delete Member From Project',
				value: 'api.projects.members.delete',
				action: 'Delete Member From Project',
				description: '**Required scopes:** `project.member` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/members/{{$parameter["memberId"]}}'
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
				name: 'List Users',
				value: 'api.users.getMany',
				action: 'List Users',
				description: '**Required scopes:** `user` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users'
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
				name: 'Invite User',
				value: 'api.users.post',
				action: 'Invite User',
				description: '**Required scopes:** `user` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users'
					}
				}
			},
			{
				name: 'Get User',
				value: 'api.users.getById',
				action: 'Get User',
				description: '**Required scopes:** `user` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}'
					}
				}
			},
			{
				name: 'Delete User',
				value: 'api.users.delete',
				action: 'Delete User',
				description: '**Required scopes:** `user` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}'
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
				name: 'Edit User',
				value: 'api.users.patch',
				action: 'Edit User',
				description: '**Required scopes:** `user` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Get Authenticated User',
				value: 'api.user.get',
				action: 'Get Authenticated User',
				routing: {
					request: {
						method: 'GET',
						url: '=/user'
					}
				}
			},
			{
				name: 'List User Projects Permissions',
				value: 'api.users.projects.permissions.getMany',
				action: 'List User Projects Permissions',
				description: '**Required scopes:** `user` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/projects/permissions'
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
				name: 'List User Projects Contributions',
				value: 'api.users.projects.contributions.getMany',
				action: 'List User Projects Contributions',
				description: '**Required scopes:** `user` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/projects/contributions'
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
		default: 'api.groups.managers.getMany'
	},
	{
		displayName: 'GET /groups/{groupId}/managers',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.groups.managers.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /groups/{groupId}/managers/{userId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.groups.managers.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/members/{memberId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /projects/{projectId}/members/{memberId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.put'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/members/{memberId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /users',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /users',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getById'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /users/{userId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /user',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.user.get'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/projects/permissions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.projects.permissions.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/projects/contributions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.projects.contributions.getMany'
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
					'users'
				],
				operation: [
					'api.groups.managers.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Team Ids',
		name: 'teamIds',
		description: 'Defines team ids. It can be one team id or a list of comma-separated ones. Get via [List Teams](#tag/Teams/operation/api.teams.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'teamIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.groups.managers.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeamsMulti'
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
					'users'
				],
				operation: [
					'api.groups.managers.getMany'
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
					'users'
				],
				operation: [
					'api.groups.managers.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,username'
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
					'users'
				],
				operation: [
					'api.groups.managers.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.groups.managers.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'users'
				],
				operation: [
					'api.projects.members.getMany'
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
					'users'
				],
				operation: [
					'api.projects.members.getMany'
				]
			}
		},
		placeholder: 'lastName desc,username'
	},
	{
		displayName: 'Search',
		name: 'search',
		description: 'Search users by `firstName`, `lastName` or `username`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'search',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.getMany'
				]
			}
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'languageId',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Workflow Step Id',
		name: 'workflowStepId',
		description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'workflowStepId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.getMany'
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
					'users'
				],
				operation: [
					'api.projects.members.getMany'
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
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'User Ids',
		name: 'userIds',
		type: 'multiOptions',
		default: [],
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)\n\n__Note:__ One of fields `userIds`, `usernames` or `emails` is required',
		routing: {
			send: {
				property: 'userIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
		}
	},
	{
		displayName: 'Usernames',
		name: 'usernames',
		type: 'fixedCollection',
		default: {},
		description: 'User Names. Get via [List Users](#operation/api.users.getMany)\n\n__Note:__ One of fields `userIds`, `usernames` or `emails` is required',
		routing: {
			send: {
				property: 'usernames',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
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
						default: ''
					}
				]
			}
		]
	},
	{
		displayName: 'Emails',
		name: 'emails',
		type: 'fixedCollection',
		default: {},
		description: 'User Emails.\n\n__Note:__ One of fields `userIds`, `usernames` or `emails` is required',
		routing: {
			send: {
				property: 'emails',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
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
						default: ''
					}
				]
			}
		]
	},
	{
		displayName: 'Manager Access',
		name: 'managerAccess',
		type: 'boolean',
		default: false,
		description: 'Grant manager access to a project',
		routing: {
			send: {
				property: 'managerAccess',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		}
	},
	{
		displayName: 'Developer Access',
		name: 'developerAccess',
		type: 'boolean',
		default: false,
		description: 'Grant developer access to a project',
		routing: {
			send: {
				property: 'developerAccess',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		}
	},
	{
		displayName: 'Roles',
		name: 'roles',
		type: 'fixedCollection',
		default: {},
		description: 'Array of objects\n\n__Note:__ `managerAccess`, `developerAccess`, `accessToAllWorkflowSteps`, `permissions` and`roles` parameters are mutually exclusive',
		routing: {
			send: {
				property: 'roles',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
				preSend: [
					normalizeFieldBody
				]
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'translator role',
				name: 'items',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Role name. `translator`, `proofreader` or `language_coordinator`',
						placeholder: 'translator'
					},
					{
						displayName: 'Permissions',
						name: 'permissions',
						type: 'fixedCollection',
						default: {},
						description: 'Role permission configuration',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'All Languages',
										name: 'allLanguages',
										type: 'boolean',
										default: false,
										description: '`true` or `false`. `true` means that user will have access to all languages and workflow steps',
										placeholder: 'false'
									},
									{
										displayName: 'Languages Access',
										name: 'languagesAccess',
										type: 'fixedCollection',
										default: {},
										description: 'needed if `allLanguages` equal `false`',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'It',
														name: 'it',
														type: 'fixedCollection',
														default: {},
														description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
														placeholder: 'Add Field',
														options: [
															{
																displayName: 'Fields',
																name: 'fields',
																values: [
																	{
																		displayName: 'All Content',
																		name: 'allContent',
																		type: 'boolean',
																		default: false,
																		description: '`true` or `false`. `true` means that user will have access to all workflow steps for given language',
																		placeholder: 'false'
																	},
																	{
																		displayName: 'Workflow Step Ids',
																		name: 'workflowStepIds',
																		type: 'multiOptions',
																		typeOptions: {
																			loadOptionsMethod: 'getProjectWorkflowStepsMulti',
																			loadOptionsDependsOn: [
																				'projectId'
																			]
																		},
																		default: [],
																		description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)'
																	}
																]
															}
														]
													},
													{
														displayName: 'Uk',
														name: 'uk',
														type: 'fixedCollection',
														default: {},
														description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
														placeholder: 'Add Field',
														options: [
															{
																displayName: 'Fields',
																name: 'fields',
																values: [
																	{
																		displayName: 'All Content',
																		name: 'allContent',
																		type: 'boolean',
																		default: false,
																		description: '`true` or `false`. `true` means that user will have access to all workflow steps for given language',
																		placeholder: 'true'
																	},
																	{
																		displayName: 'Workflow Step Ids',
																		name: 'workflowStepIds',
																		type: 'multiOptions',
																		default: [],
																		description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)',
																		typeOptions: {
																			loadOptionsMethod: 'getProjectWorkflowStepsMulti',
																			loadOptionsDependsOn: [
																				'projectId'
																			]
																		}
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
							}
						]
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
					'users'
				],
				operation: [
					'api.projects.members.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Member Id',
		name: 'memberId',
		required: true,
		description: 'Team Member Identifier. Get via [List Team Members](#operation/api.teams.members.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectMembers',
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
					'users'
				],
				operation: [
					'api.projects.members.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Member Id',
		name: 'memberId',
		required: true,
		description: 'Team Member Identifier. Get via [List Team Members](#operation/api.teams.members.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectMembers',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Manager Access',
		name: 'managerAccess',
		type: 'boolean',
		default: false,
		description: 'Grant manager access to a project',
		routing: {
			send: {
				property: 'managerAccess',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.put'
				]
			}
		}
	},
	{
		displayName: 'Developer Access',
		name: 'developerAccess',
		type: 'boolean',
		default: false,
		description: 'Grant developer access to a project',
		routing: {
			send: {
				property: 'developerAccess',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.put'
				]
			}
		}
	},
	{
		displayName: 'Roles',
		name: 'roles',
		type: 'fixedCollection',
		default: {},
		description: 'Array of objects\n\n__Note:__ `managerAccess`, `developerAccess`, `accessToAllWorkflowSteps`, `permissions` and`roles` parameters are mutually exclusive',
		routing: {
			send: {
				property: 'roles',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
				preSend: [
					normalizeFieldBody
				]
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.put'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'translator role',
				name: 'items',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Role name. `translator`, `proofreader` or `language_coordinator`',
						placeholder: 'translator'
					},
					{
						displayName: 'Permissions',
						name: 'permissions',
						type: 'fixedCollection',
						default: {},
						description: 'Role permission configuration',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'All Languages',
										name: 'allLanguages',
										type: 'boolean',
										default: false,
										description: '`true` or `false`. `true` means that user will have access to all languages and workflow steps',
										placeholder: 'false'
									},
									{
										displayName: 'Languages Access',
										name: 'languagesAccess',
										type: 'fixedCollection',
										default: {},
										description: 'needed if `allLanguages` equal `false`',
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'It',
														name: 'it',
														type: 'fixedCollection',
														default: {},
														description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
														placeholder: 'Add Field',
														options: [
															{
																displayName: 'Fields',
																name: 'fields',
																values: [
																	{
																		displayName: 'All Content',
																		name: 'allContent',
																		type: 'boolean',
																		default: false,
																		description: '`true` or `false`. `true` means that user will have access to all workflow steps for given language',
																		placeholder: 'false'
																	},
																	{
																		displayName: 'Workflow Step Ids',
																		name: 'workflowStepIds',
																		type: 'multiOptions',
																		typeOptions: {
																			loadOptionsMethod: 'getProjectWorkflowStepsMulti',
																			loadOptionsDependsOn: [
																				'projectId'
																			]
																		},
																		default: [],
																		description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)'
																	}
																]
															}
														]
													},
													{
														displayName: 'Uk',
														name: 'uk',
														type: 'fixedCollection',
														default: {},
														description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
														placeholder: 'Add Field',
														options: [
															{
																displayName: 'Fields',
																name: 'fields',
																values: [
																	{
																		displayName: 'All Content',
																		name: 'allContent',
																		type: 'boolean',
																		default: false,
																		description: '`true` or `false`. `true` means that user will have access to all workflow steps for given language',
																		placeholder: 'true'
																	},
																	{
																		displayName: 'Workflow Step Ids',
																		name: 'workflowStepIds',
																		type: 'multiOptions',
																		default: [],
																		description: 'Workflow Step Identifier. Get via [List Workflow Steps](#operation/api.projects.workflow-steps.getMany)',
																		typeOptions: {
																			loadOptionsMethod: 'getProjectWorkflowStepsMulti',
																			loadOptionsDependsOn: [
																				'projectId'
																			]
																		}
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
							}
						]
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
					'users'
				],
				operation: [
					'api.projects.members.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Member Id',
		name: 'memberId',
		required: true,
		description: 'Team Member Identifier. Get via [List Team Members](#operation/api.teams.members.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.projects.members.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectMembers',
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
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,username'
	},
	{
		displayName: 'Status',
		name: 'status',
		description: 'Filter users by status',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'active',
				value: 'active'
			},
			{
				name: 'pending',
				value: 'pending'
			},
			{
				name: 'blocked',
				value: 'blocked'
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
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		}
	},
	{
		displayName: 'Search',
		name: 'search',
		description: 'Search users by `firstName`, `lastName`, `username`, or `email`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'search',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		}
	},
	{
		displayName: 'Two Factor',
		name: 'twoFactor',
		description: 'Filter users by two-factor authentication status',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'enabled',
				value: 'enabled'
			},
			{
				name: 'disabled',
				value: 'disabled'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'twoFactor',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		}
	},
	{
		displayName: 'Organization Roles',
		name: 'organizationRoles',
		description: 'Filter by role in organization. It can be one role or a list of comma-separated ones.\n\nPossible values: `admin`, `manager`, `vendor`, `client`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'organizationRoles',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		placeholder: 'manager,vendor,client'
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		description: 'Filter by team identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'teamId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		description: 'Filter by project identifier. Get via [List Projects](#operation/api.projects.getMany). It can be one project or a list of comma-separated ones',
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
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Project Roles',
		name: 'projectRoles',
		description: 'Filter by role in project. It can be one role or a list of comma-separated ones.\n\nPossible values: `manager`, `developer`, `translator`, `proofreader`, `language_coordinator`, `member`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'projectRoles',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		placeholder: 'manager,developer,language_coordinator'
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		description: 'Filter project languages. Get via [List Supported Languages](#operation/api.languages.getMany). It can be one language or a list of comma-separated ones',
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
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Group Ids',
		name: 'groupIds',
		description: 'Filter by group identifier. Get via [List Groups](#operation/api.groups.getMany). It can be one group or a list of comma-separated ones',
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
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroupsMulti'
		}
	},
	{
		displayName: 'Last Seen From',
		name: 'lastSeenFrom',
		description: 'Date in UTC, ISO 8601.\n\n__NOTE:__ Must be used together with `lastSeenTo`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'lastSeenFrom',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		placeholder: '2024-01-10T10:41:33+00:00'
	},
	{
		displayName: 'Last Seen To',
		name: 'lastSeenTo',
		description: 'Date in UTC, ISO 8601.\n\n__NOTE:__ Must be used together with `lastSeenFrom`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'lastSeenTo',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getMany'
				]
			}
		},
		placeholder: '2024-01-10T10:41:33+00:00'
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
					'users'
				],
				operation: [
					'api.users.getMany'
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
		displayName: 'Email',
		required: true,
		name: 'email',
		type: 'string',
		default: '',
		description: 'Invited user email',
		routing: {
			send: {
				property: 'email',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.post'
				]
			}
		},
		placeholder: 'john@example.com'
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
		description: 'Invited user first name',
		routing: {
			send: {
				property: 'firstName',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.post'
				]
			}
		},
		placeholder: 'Jon'
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
		description: 'Invited user last name',
		routing: {
			send: {
				property: 'lastName',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.post'
				]
			}
		},
		placeholder: 'Doe'
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		default: '',
		description: 'Invited user timezone',
		routing: {
			send: {
				property: 'timezone',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.post'
				]
			}
		},
		placeholder: 'America/New_York'
	},
	{
		displayName: 'Admin Access',
		name: 'adminAccess',
		type: 'boolean',
		default: false,
		description: 'Grant admin access to an organization',
		routing: {
			send: {
				property: 'adminAccess',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.post'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.getById'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.projects.permissions.getMany'
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
					'users'
				],
				operation: [
					'api.users.projects.permissions.getMany'
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
		description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.projects.contributions.getMany'
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
					'users'
				],
				operation: [
					'api.users.projects.contributions.getMany'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.users.patch'
				]
			}
		},
		options: [
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'Invited user first name',
				placeholder: 'Jon'
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Invited user last name',
				placeholder: 'Doe'
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				description: 'Invited user timezone',
				placeholder: 'America/New_York'
			},
			{
				displayName: 'Admin Access',
				name: 'adminAccess',
				type: 'boolean',
				default: false,
				description: 'Grant admin access to an organization'
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
					'users'
				],
				operation: [
					'api.groups.managers.getMany'
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
					'users'
				],
				operation: [
					'api.projects.members.getMany'
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
					'users'
				],
				operation: [
					'api.users.getMany'
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
					'users'
				],
				operation: [
					'api.users.projects.permissions.getMany'
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
					'users'
				],
				operation: [
					'api.users.projects.contributions.getMany'
				]
			}
		}
	}
];
