// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody } from '../../../utils/preSend';

export const teamsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'teams'
				]
			}
		},
		options: [
			{
				name: 'List Group Teams',
				value: 'api.groups.teams.getMany',
				action: 'List Group Teams',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/teams'
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
				name: 'Get Group Team',
				value: 'api.groups.teams.get',
				action: 'Get Group Team',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/teams/{{$parameter["teamId"]}}'
					}
				}
			},
			{
				name: 'List Team Projects Permissions',
				value: 'api.teams.projects.permissions.getMany',
				action: 'List Team Projects Permissions',
				description: '**Required scopes:** `team` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/teams/{{$parameter["teamId"]}}/projects/permissions'
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
				name: 'Add Team To Project',
				value: 'api.projects.teams.post',
				action: 'Add Team To Project',
				description: '**Required scopes:** `project.member` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/teams'
					}
				}
			},
			{
				name: 'List Teams',
				value: 'api.teams.getMany',
				action: 'List Teams',
				description: '**Required scopes:** `team` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/teams'
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
				name: 'Add Team',
				value: 'api.teams.post',
				action: 'Add Team',
				description: '**Required scopes:** `team` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/teams'
					}
				}
			},
			{
				name: 'Get Team',
				value: 'api.teams.get',
				action: 'Get Team',
				description: '**Required scopes:** `team` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/teams/{{$parameter["teamId"]}}'
					}
				}
			},
			{
				name: 'Delete Team',
				value: 'api.teams.delete',
				action: 'Delete Team',
				description: '**Required scopes:** `team` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/teams/{{$parameter["teamId"]}}'
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
				name: 'Edit Team',
				value: 'api.teams.patch',
				action: 'Edit Team',
				description: '**Required scopes:** `team` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/teams/{{$parameter["teamId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Team Members List',
				value: 'api.teams.members.getMany',
				action: 'Team Members List',
				description: '**Required scopes:** `team` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/teams/{{$parameter["teamId"]}}/members'
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
				name: 'Add Team Members',
				value: 'api.teams.members.post',
				action: 'Add Team Members',
				description: '**Required scopes:** `team` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/teams/{{$parameter["teamId"]}}/members'
					}
				}
			},
			{
				name: 'Delete All Team Members',
				value: 'api.teams.members.deleteMany',
				action: 'Delete All Team Members',
				description: '**Required scopes:** `team` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/teams/{{$parameter["teamId"]}}/members'
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
				name: 'Delete Team Member',
				value: 'api.teams.members.delete',
				action: 'Delete Team Member',
				description: '**Required scopes:** `team` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/teams/{{$parameter["teamId"]}}/members/{{$parameter["memberId"]}}'
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
		default: 'api.groups.teams.getMany'
	},
	{
		displayName: 'GET /groups/{groupId}/teams',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.groups.teams.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /groups/{groupId}/teams/{teamId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.groups.teams.get'
				]
			}
		}
	},
	{
		displayName: 'GET /teams/{teamId}/projects/permissions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.projects.permissions.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/teams',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.projects.teams.post'
				]
			}
		}
	},
	{
		displayName: 'GET /teams',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /teams',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.post'
				]
			}
		}
	},
	{
		displayName: 'GET /teams/{teamId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /teams/{teamId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /teams/{teamId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /teams/{teamId}/members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /teams/{teamId}/members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /teams/{teamId}/members',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'DELETE /teams/{teamId}/members/{memberId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.delete'
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
					'teams'
				],
				operation: [
					'api.groups.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.groups.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.groups.teams.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name'
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
					'teams'
				],
				operation: [
					'api.groups.teams.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.groups.teams.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.projects.permissions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
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
					'teams'
				],
				operation: [
					'api.teams.projects.permissions.getMany'
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
					'teams'
				],
				operation: [
					'api.projects.teams.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Team Id',
		required: true,
		name: 'teamId',
		type: 'options',
		default: '',
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		routing: {
			send: {
				property: 'teamId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.projects.teams.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
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
					'teams'
				],
				operation: [
					'api.projects.teams.post'
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
					'teams'
				],
				operation: [
					'api.projects.teams.post'
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
					'teams'
				],
				operation: [
					'api.projects.teams.post'
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
		displayName: 'Search',
		name: 'search',
		description: 'Search by `name`',
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
				]
			}
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroupsMulti'
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name'
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
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
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Team name',
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
					'teams'
				],
				operation: [
					'api.teams.post'
				]
			}
		},
		placeholder: 'French'
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
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
					'teams'
				],
				operation: [
					'api.teams.members.getMany'
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
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'User Ids',
		required: true,
		name: 'userIds',
		type: 'multiOptions',
		default: [],
		description: 'Team Users Identifiers. Get via [List Users](#operation/api.users.getMany)\n\n__Note:__ You can invite up to 50 team members at a time.',
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
					'teams'
				],
				operation: [
					'api.teams.members.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
		}
	},
	{
		displayName: 'Team Id',
		name: 'teamId',
		required: true,
		description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'teams'
				],
				operation: [
					'api.teams.members.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeams'
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
					'teams'
				],
				operation: [
					'api.teams.members.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTeamMembers',
			loadOptionsDependsOn: [
				'teamId'
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
					'teams'
				],
				operation: [
					'api.teams.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Team name',
				placeholder: 'French'
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
					'teams'
				],
				operation: [
					'api.groups.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.teams.projects.permissions.getMany'
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
					'teams'
				],
				operation: [
					'api.teams.getMany'
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
					'teams'
				],
				operation: [
					'api.teams.members.getMany'
				]
			}
		}
	}
];
