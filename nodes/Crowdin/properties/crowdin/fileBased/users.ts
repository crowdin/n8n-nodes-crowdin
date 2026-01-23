// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeFieldBody } from '../../../utils/preSend';

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
				name: 'Get Member Info',
				value: 'api.projects.members.get',
				action: 'Get Member Info',
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
			}
		],
		default: 'api.user.get'
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
		placeholder: 'username desc,id'
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
		displayName: 'Role',
		name: 'role',
		description: 'Defines role type',
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
				name: 'manager',
				value: 'manager'
			},
			{
				name: 'developer',
				value: 'developer'
			},
			{
				name: 'language_coordinator',
				value: 'language_coordinator'
			},
			{
				name: 'proofreader',
				value: 'proofreader'
			},
			{
				name: 'translator',
				value: 'translator'
			},
			{
				name: 'blocked',
				value: 'blocked'
			},
			{
				name: 'pending',
				value: 'pending'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'role',
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
		required: true,
		name: 'userIds',
		type: 'multiOptions',
		default: [],
		description: 'User Identifier. Get via [List Users](#operation/api.projects.members.getMany)\n\n__Note:__ One of fields `userIds`, `usernames` or `emails` is required',
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
		required: true,
		name: 'usernames',
		type: 'fixedCollection',
		default: {},
		description: 'User Names. Get via [List Users](#operation/api.projects.members.getMany)\n\n__Note:__ One of fields `userIds`, `usernames` or `emails` is required',
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
		required: true,
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
		description: 'Array of objects. For creating user with `member` role leave this field empty\n\n__Note:__ `managerAccess`, `developerAccess` and `roles` parameters are mutually exclusive',
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
						description: 'Role name. `translator`, `proofreader` or `language_coordinator`\n\n__Note:__ In projects with a custom workflow, proofreaders are always assigned to the last proofreading step.',
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
										description: '`true` or `false`. `true` means that user will have access to all languages',
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
																		default: true,
																		description: 'Must be set to `true`',
																		placeholder: 'true'
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
																		default: true,
																		description: 'Must be set to `true`',
																		placeholder: 'true'
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
		description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
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
		description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
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
		description: 'Array of objects',
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
						description: 'Role name. `translator`, `proofreader` or `language_coordinator`\n\n__Note:__ In projects with a custom workflow, proofreaders are always assigned to the last proofreading step.',
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
										description: '`true` or `false`. `true` means that user will have access to all languages',
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
																		default: true,
																		description: 'Must be set to `true`',
																		placeholder: 'true'
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
																		default: true,
																		description: 'Must be set to `true`',
																		placeholder: 'true'
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
		description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
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
	}
];
