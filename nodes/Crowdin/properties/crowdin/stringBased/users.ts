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
				name: 'List Managers',
				value: 'api.managers.getMany',
				action: 'List Managers',
				description: '**Required scopes:** `manager` (Read only).\n\nReturns the managers of your account: users you let manage your projects, TMs, glossaries, and style guides (`active`), and people invited by email who have not accepted the invitation yet (`pending`). Each manager lists only the resources you own or manage. Default order is by `id`.\n\n__Note:__ Managers you added to a project with `managerAccess` in [Add Project Member](#operation/api.projects.members.post) are listed too',
				routing: {
					request: {
						method: 'GET',
						url: '=/managers'
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
				name: 'Add Manager',
				value: 'api.managers.post',
				action: 'Add Manager',
				description: '**Required scopes:** `manager` (Read and Write).\n\nAdds a manager to your account and grants them access to the listed projects, TMs, glossaries, and style guides. Default TMs and glossaries of the listed projects are granted too. A user added by `username`, or by an `email` that belongs to a Crowdin account, becomes `active` at once and gets a notification. Anyone else gets an invitation email and stays `pending` until they accept it. If an invitation email went to the address in the last 24 hours, from any account, no new email is sent, but the invitation is saved. An invitation can\'t be sent again: adding a person who already has your pending invitation returns `409` and sends no email.\n\n__Note:__ Available only if your email is verified. Up to 50 manager emails a day; each manager takes a seat in your plan\'s managers limit',
				routing: {
					request: {
						method: 'POST',
						url: '=/managers'
					}
				}
			},
			{
				name: 'Get Manager',
				value: 'api.managers.get',
				action: 'Get Manager',
				description: '**Required scopes:** `manager` (Read only).\n\nReturns a manager or a pending invitation of your account, with the resources you own or manage that they have access to.',
				routing: {
					request: {
						method: 'GET',
						url: '=/managers/{{$parameter["managerId"]}}'
					}
				}
			},
			{
				name: 'Delete Manager',
				value: 'api.managers.delete',
				action: 'Delete Manager',
				description: '**Required scopes:** `manager` (Read and Write).\n\nRemoves a manager from your account, or cancels a pending invitation. An active manager stops managing all projects in `projectIds`, with all roles and tasks there, and loses access to your TMs, glossaries, and style guides. Canceling an invitation withdraws the offers on resources you own or manage; offers from other accounts on other resources stay.\n\n__Note:__ Needs a token that isn\'t restricted to specific projects or resources. Crowdin app agents can\'t be removed here; uninstall the app instead',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/managers/{{$parameter["managerId"]}}'
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
				name: 'Edit Manager',
				value: 'api.managers.patch',
				action: 'Edit Manager',
				description: '**Required scopes:** `manager` (Read and Write).\n\nChanges the access of an active manager to your projects, TMs, glossaries, and style guides, or changes a pending invitation. `replace` sets a whole list, `add` grants one resource, and `remove` revokes one. Operations apply in order. Default TMs and glossaries of an added project are granted too; removing a project removes the manager from it with all roles and tasks. An active manager gets a notification about new access only; a pending manager gets no email.\n\n__Note:__ A default TM or glossary of a project the manager keeps can\'t be removed on its own. A patch that leaves the manager without any access is rejected; use [Delete Manager](#operation/api.managers.delete) to remove all access',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/managers/{{$parameter["managerId"]}}'
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
				description: '**Required scopes:** `project.member` (Read and Write).\n\nRemoves a member from the project. A manager can pass their own ID to leave the project, and the project owner is notified.',
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
		default: 'api.managers.getMany'
	},
	{
		displayName: 'GET /managers',
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
					'api.managers.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /managers',
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
					'api.managers.post'
				]
			}
		}
	},
	{
		displayName: 'GET /managers/{managerId}',
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
					'api.managers.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /managers/{managerId}',
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
					'api.managers.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /managers/{managerId}',
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
					'api.managers.patch'
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
		displayName: 'Status',
		name: 'status',
		description: 'Filter results by manager status. It can be one status or a list of comma-separated ones. One of: `active`, `pending`. Default is both',
		default: '',
		type: 'string',
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
					'api.managers.getMany'
				]
			}
		},
		placeholder: 'active,pending'
	},
	{
		displayName: 'Email',
		name: 'email',
		description: 'Filter results to the invitation sent to this email, ignoring case. Applies to `pending` managers only',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'email',
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
					'api.managers.getMany'
				]
			}
		},
		placeholder: 'jane.smith@example.com'
	},
	{
		displayName: 'Search',
		name: 'search',
		description: 'Filter results to managers whose username or full name contains this text, ignoring case',
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
					'api.managers.getMany'
				]
			}
		},
		placeholder: 'olena'
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		description: 'Filter results to managers with access to at least one of these projects. It can be one ID or a list of comma-separated ID values',
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
					'api.managers.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		description: 'Read more about [sorting rules](#section/Introduction/Sorting). Default is `id`',
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
					'api.managers.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,id'
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
					'api.managers.getMany'
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
		displayName: 'Username',
		name: 'username',
		type: 'string',
		default: '',
		description: 'Username of a registered user. The user becomes an `active` manager at once.\n\n__Note:__ One of fields `username` or `email` is required. Both cannot be provided simultaneously',
		routing: {
			send: {
				property: 'username',
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
					'api.managers.post'
				]
			}
		},
		placeholder: 'taras.m'
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		description: 'Email of the person to add. If it belongs to a Crowdin account, the manager is `active` at once. Otherwise the person gets an invitation email and stays `pending` until they accept it.\n\n__Note:__ One of fields `username` or `email` is required. Both cannot be provided simultaneously',
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
					'api.managers.post'
				]
			}
		},
		placeholder: 'jane.smith@example.com'
	},
	{
		displayName: 'Project Ids',
		name: 'projectIds',
		type: 'multiOptions',
		default: [],
		description: 'IDs of your projects, or projects you manage, to grant manager access to. Default TMs and glossaries of these projects are granted too. Get via [List Projects](#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'projectIds',
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
					'api.managers.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Tm Ids',
		name: 'tmIds',
		type: 'multiOptions',
		default: [],
		description: 'IDs of your TMs, or TMs you manage, to grant access to. Get via [List TMs](#operation/api.tms.getMany)',
		routing: {
			send: {
				property: 'tmIds',
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
					'api.managers.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemoriesMulti'
		}
	},
	{
		displayName: 'Glossary Ids',
		name: 'glossaryIds',
		type: 'multiOptions',
		default: [],
		description: 'IDs of your glossaries, or glossaries you manage, to grant access to. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		routing: {
			send: {
				property: 'glossaryIds',
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
					'api.managers.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossariesMulti'
		}
	},
	{
		displayName: 'Style Guide Ids',
		name: 'styleGuideIds',
		type: 'multiOptions',
		default: [],
		description: 'IDs of your style guides, or style guides you manage, to grant access to. Get via [List Style Guides](#operation/api.style-guides.getMany)\n\n__Note:__ At least one of `projectIds`, `tmIds`, `glossaryIds` or `styleGuideIds` must not be empty',
		routing: {
			send: {
				property: 'styleGuideIds',
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
					'api.managers.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStyleGuidesMulti'
		}
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		description: 'Personal message added to the notification email',
		routing: {
			send: {
				property: 'message',
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
					'api.managers.post'
				]
			}
		},
		placeholder: 'Hi Taras, please help us manage the mobile app localization.'
	},
	{
		displayName: 'Manager Id',
		name: 'managerId',
		required: true,
		description: 'ID of the manager. The same as the manager\'s user ID for both `active` and `pending` managers. Get via [List Managers](#operation/api.managers.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.managers.get'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Manager Id',
		name: 'managerId',
		required: true,
		description: 'ID of the manager. The same as the manager\'s user ID for both `active` and `pending` managers. Get via [List Managers](#operation/api.managers.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.managers.delete'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Manager Id',
		name: 'managerId',
		required: true,
		description: 'ID of the manager. The same as the manager\'s user ID for both `active` and `pending` managers. Get via [List Managers](#operation/api.managers.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'api.managers.patch'
				]
			}
		},
		placeholder: '0'
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
					'api.managers.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Project Ids',
				name: 'projectIds',
				type: 'multiOptions',
				default: [],
				description: 'IDs of your projects, or projects you manage, to grant manager access to. Default TMs and glossaries of these projects are granted too. Get via [List Projects](#operation/api.projects.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getProjectsMulti'
				}
			},
			{
				displayName: 'Tm Ids',
				name: 'tmIds',
				type: 'multiOptions',
				default: [],
				description: 'IDs of your TMs, or TMs you manage, to grant access to. Get via [List TMs](#operation/api.tms.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getTranslationMemoriesMulti'
				}
			},
			{
				displayName: 'Glossary Ids',
				name: 'glossaryIds',
				type: 'multiOptions',
				default: [],
				description: 'IDs of your glossaries, or glossaries you manage, to grant access to. Get via [List Glossaries](#operation/api.glossaries.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getGlossariesMulti'
				}
			},
			{
				displayName: 'Style Guide Ids',
				name: 'styleGuideIds',
				type: 'multiOptions',
				default: [],
				description: 'IDs of your style guides, or style guides you manage, to grant access to. Get via [List Style Guides](#operation/api.style-guides.getMany)\n\n__Note:__ At least one of `projectIds`, `tmIds`, `glossaryIds` or `styleGuideIds` must not be empty',
				typeOptions: {
					loadOptionsMethod: 'getStyleGuidesMulti'
				}
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
					'api.managers.getMany'
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
	}
];
