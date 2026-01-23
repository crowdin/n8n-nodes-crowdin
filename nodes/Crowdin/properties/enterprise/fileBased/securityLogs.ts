// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const securityLogsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				]
			}
		},
		options: [
			{
				name: 'List Organization Security Logs',
				value: 'api.security-logs.getMany',
				action: 'List Organization Security Logs',
				description: '**Required scopes:** `security-log` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/security-logs'
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
				name: 'Get Organization Security Log',
				value: 'api.security-logs.get',
				action: 'Get Organization Security Log',
				description: '**Required scopes:** `security-log` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/security-logs/{{$parameter["securityLogId"]}}'
					}
				}
			},
			{
				name: 'List User Security Logs',
				value: 'api.users.security-logs.getMany',
				action: 'List User Security Logs',
				description: '**Required scopes:** `security-log` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/security-logs'
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
				name: 'Get User Security Log',
				value: 'api.users.security-logs.get',
				action: 'Get User Security Log',
				description: '**Required scopes:** `security-log` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/security-logs/{{$parameter["securityLogId"]}}'
					}
				}
			}
		],
		default: 'api.security-logs.getMany'
	},
	{
		displayName: 'GET /security-logs',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /security-logs/{securityLogId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.get'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/security-logs',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/security-logs/{securityLogId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.get'
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
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
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
		displayName: 'Event',
		name: 'event',
		description: undefined,
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'login',
				value: 'login'
			},
			{
				name: 'password.set',
				value: 'password.set'
			},
			{
				name: 'password.change',
				value: 'password.change'
			},
			{
				name: 'email.change',
				value: 'email.change'
			},
			{
				name: 'login.change',
				value: 'login.change'
			},
			{
				name: 'personal_token.issued',
				value: 'personal_token.issued'
			},
			{
				name: 'personal_token.revoked',
				value: 'personal_token.revoked'
			},
			{
				name: 'mfa.enabled',
				value: 'mfa.enabled'
			},
			{
				name: 'mfa.disabled',
				value: 'mfa.disabled'
			},
			{
				name: 'session.revoke',
				value: 'session.revoke'
			},
			{
				name: 'session.revoke_all',
				value: 'session.revoke_all'
			},
			{
				name: 'sso.connect',
				value: 'sso.connect'
			},
			{
				name: 'sso.disconnect',
				value: 'sso.disconnect'
			},
			{
				name: 'user.registered',
				value: 'user.registered'
			},
			{
				name: 'user.remove',
				value: 'user.remove'
			},
			{
				name: 'application.connected',
				value: 'application.connected'
			},
			{
				name: 'application.disconnected',
				value: 'application.disconnected'
			},
			{
				name: 'webauthn.created',
				value: 'webauthn.created'
			},
			{
				name: 'webauthn.deleted',
				value: 'webauthn.deleted'
			},
			{
				name: 'trusted_device.remove',
				value: 'trusted_device.remove'
			},
			{
				name: 'trusted_device.remove_all',
				value: 'trusted_device.remove_all'
			},
			{
				name: 'device_verification.enabled',
				value: 'device_verification.enabled'
			},
			{
				name: 'device_verification.disabled',
				value: 'device_verification.disabled'
			},
			{
				name: 'user.force_removed',
				value: 'user.force_removed'
			},
			{
				name: 'user.blocked',
				value: 'user.blocked'
			},
			{
				name: 'user.unblocked',
				value: 'user.unblocked'
			},
			{
				name: 'team.member.added',
				value: 'team.member.added'
			},
			{
				name: 'team.member.removed',
				value: 'team.member.removed'
			},
			{
				name: 'role.admin.granted',
				value: 'role.admin.granted'
			},
			{
				name: 'role.admin.revoked',
				value: 'role.admin.revoked'
			},
			{
				name: 'role.group_manager.granted',
				value: 'role.group_manager.granted'
			},
			{
				name: 'role.group_manager.revoked',
				value: 'role.group_manager.revoked'
			},
			{
				name: 'organization.settings.saml.changed',
				value: 'organization.settings.saml.changed'
			},
			{
				name: 'organization.settings.invite_restrict.changed',
				value: 'organization.settings.invite_restrict.changed'
			},
			{
				name: 'organization.settings.device_verification.changed',
				value: 'organization.settings.device_verification.changed'
			},
			{
				name: 'organization.settings.mfa.changed',
				value: 'organization.settings.mfa.changed'
			},
			{
				name: 'organization.settings.remember_me.changed',
				value: 'organization.settings.remember_me.changed'
			},
			{
				name: 'organization.settings.sign_up.changed',
				value: 'organization.settings.sign_up.changed'
			},
			{
				name: 'organization.settings.token_creation.changed',
				value: 'organization.settings.token_creation.changed'
			},
			{
				name: 'organization.settings.token_expiration.changed',
				value: 'organization.settings.token_expiration.changed'
			},
			{
				name: 'sso.custom_app.configured',
				value: 'sso.custom_app.configured'
			},
			{
				name: 'sso.custom_app.disabled',
				value: 'sso.custom_app.disabled'
			},
			{
				name: 'organization.auth_method.disabled',
				value: 'organization.auth_method.disabled'
			},
			{
				name: 'organization.auth_method.enabled',
				value: 'organization.auth_method.enabled'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'event',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
				]
			}
		}
	},
	{
		displayName: 'Created After',
		name: 'createdAfter',
		description: 'Date in UTC, ISO 8601',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'createdAfter',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
				]
			}
		},
		placeholder: '2024-01-10T10:41:33+00:00'
	},
	{
		displayName: 'Created Before',
		name: 'createdBefore',
		description: 'Date in UTC, ISO 8601',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'createdBefore',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
				]
			}
		},
		placeholder: '2024-01-26T10:33:43+00:00'
	},
	{
		displayName: 'Ip Address',
		name: 'ipAddress',
		description: undefined,
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'ipAddress',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
				]
			}
		},
		placeholder: '127.0.0.1'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: undefined,
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
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Security Log Id',
		name: 'securityLogId',
		required: true,
		description: 'Organization Security Log. Get via [List Organization Security Logs](#operation/api.security-logs.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.security-logs.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getSecurityLogs'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get) for own security logs or via [List Users](#operation/api.users.getMany) (available only for enterprise organization admins and owner)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
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
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
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
		displayName: 'Event',
		name: 'event',
		description: undefined,
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'login',
				value: 'login'
			},
			{
				name: 'password.set',
				value: 'password.set'
			},
			{
				name: 'password.change',
				value: 'password.change'
			},
			{
				name: 'email.change',
				value: 'email.change'
			},
			{
				name: 'login.change',
				value: 'login.change'
			},
			{
				name: 'personal_token.issued',
				value: 'personal_token.issued'
			},
			{
				name: 'personal_token.revoked',
				value: 'personal_token.revoked'
			},
			{
				name: 'mfa.enabled',
				value: 'mfa.enabled'
			},
			{
				name: 'mfa.disabled',
				value: 'mfa.disabled'
			},
			{
				name: 'session.revoke',
				value: 'session.revoke'
			},
			{
				name: 'session.revoke_all',
				value: 'session.revoke_all'
			},
			{
				name: 'sso.connect',
				value: 'sso.connect'
			},
			{
				name: 'sso.disconnect',
				value: 'sso.disconnect'
			},
			{
				name: 'user.registered',
				value: 'user.registered'
			},
			{
				name: 'user.remove',
				value: 'user.remove'
			},
			{
				name: 'application.connected',
				value: 'application.connected'
			},
			{
				name: 'application.disconnected',
				value: 'application.disconnected'
			},
			{
				name: 'webauthn.created',
				value: 'webauthn.created'
			},
			{
				name: 'webauthn.deleted',
				value: 'webauthn.deleted'
			},
			{
				name: 'trusted_device.remove',
				value: 'trusted_device.remove'
			},
			{
				name: 'trusted_device.remove_all',
				value: 'trusted_device.remove_all'
			},
			{
				name: 'device_verification.enabled',
				value: 'device_verification.enabled'
			},
			{
				name: 'device_verification.disabled',
				value: 'device_verification.disabled'
			},
			{
				name: 'user.force_removed',
				value: 'user.force_removed'
			},
			{
				name: 'user.blocked',
				value: 'user.blocked'
			},
			{
				name: 'user.unblocked',
				value: 'user.unblocked'
			},
			{
				name: 'team.member.added',
				value: 'team.member.added'
			},
			{
				name: 'team.member.removed',
				value: 'team.member.removed'
			},
			{
				name: 'role.admin.granted',
				value: 'role.admin.granted'
			},
			{
				name: 'role.admin.revoked',
				value: 'role.admin.revoked'
			},
			{
				name: 'role.group_manager.granted',
				value: 'role.group_manager.granted'
			},
			{
				name: 'role.group_manager.revoked',
				value: 'role.group_manager.revoked'
			},
			{
				name: 'organization.settings.saml.changed',
				value: 'organization.settings.saml.changed'
			},
			{
				name: 'organization.settings.invite_restrict.changed',
				value: 'organization.settings.invite_restrict.changed'
			},
			{
				name: 'organization.settings.device_verification.changed',
				value: 'organization.settings.device_verification.changed'
			},
			{
				name: 'organization.settings.mfa.changed',
				value: 'organization.settings.mfa.changed'
			},
			{
				name: 'organization.settings.remember_me.changed',
				value: 'organization.settings.remember_me.changed'
			},
			{
				name: 'organization.settings.sign_up.changed',
				value: 'organization.settings.sign_up.changed'
			},
			{
				name: 'organization.settings.token_creation.changed',
				value: 'organization.settings.token_creation.changed'
			},
			{
				name: 'organization.settings.token_expiration.changed',
				value: 'organization.settings.token_expiration.changed'
			},
			{
				name: 'sso.custom_app.configured',
				value: 'sso.custom_app.configured'
			},
			{
				name: 'sso.custom_app.disabled',
				value: 'sso.custom_app.disabled'
			},
			{
				name: 'organization.auth_method.disabled',
				value: 'organization.auth_method.disabled'
			},
			{
				name: 'organization.auth_method.enabled',
				value: 'organization.auth_method.enabled'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'event',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
				]
			}
		}
	},
	{
		displayName: 'Created After',
		name: 'createdAfter',
		description: 'Date in UTC, ISO 8601',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'createdAfter',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
				]
			}
		},
		placeholder: '2024-01-10T10:41:33+00:00'
	},
	{
		displayName: 'Created Before',
		name: 'createdBefore',
		description: 'Date in UTC, ISO 8601',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'createdBefore',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
				]
			}
		},
		placeholder: '2024-01-26T10:33:43+00:00'
	},
	{
		displayName: 'Ip Address',
		name: 'ipAddress',
		description: undefined,
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'ipAddress',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
				]
			}
		},
		placeholder: '127.0.0.1'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get) for own security logs or via [List Users](#operation/api.users.getMany) (available only for enterprise organization admins and owner)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Security Log Id',
		name: 'securityLogId',
		required: true,
		description: 'User Security Log Id. Get via [List User Security Logs](#operation/api.users.security-logs.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getSecurityLogs'
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
					'securityLogs'
				],
				operation: [
					'api.security-logs.getMany'
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
					'securityLogs'
				],
				operation: [
					'api.users.security-logs.getMany'
				]
			}
		}
	}
];
