// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const oAuthClientsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				]
			}
		},
		options: [
			{
				name: 'List OAuth Clients',
				value: 'api.oauth-clients.getMany',
				action: 'List OAuth Clients',
				description: '**Required scopes:** `oauth-client` (Read only).\n\nReturns a list of OAuth clients sorted by name, with their secrets masked except for the first 3 characters.',
				routing: {
					request: {
						method: 'GET',
						url: '=/oauth-clients'
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
				name: 'Add OAuth Client',
				value: 'api.oauth-clients.post',
				action: 'Add OAuth Client',
				description: '**Required scopes:** `oauth-client` (Read and Write).\n\nCreates an OAuth client that an application or integration uses to call the API on behalf of users, and returns it together with its secret.\n\nA token limited to particular projects or other resources cannot create clients.\n\n__Note:__ The secret is returned only in this response. Store it securely',
				routing: {
					request: {
						method: 'POST',
						url: '=/oauth-clients'
					}
				}
			},
			{
				name: 'Get OAuth Client',
				value: 'api.oauth-clients.get',
				action: 'Get OAuth Client',
				description: '**Required scopes:** `oauth-client` (Read only).\n\nReturns an OAuth client with its secret masked except for the first 3 characters.',
				routing: {
					request: {
						method: 'GET',
						url: '=/oauth-clients/{{$parameter["clientId"]}}'
					}
				}
			}
		],
		default: 'api.oauth-clients.getMany'
	},
	{
		displayName: 'GET /oauth-clients',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /oauth-clients',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.post'
				]
			}
		}
	},
	{
		displayName: 'GET /oauth-clients/{clientId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.get'
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
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.getMany'
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
		description: 'Client name shown to users when the client asks for access (2–255 characters)',
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
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.post'
				]
			}
		},
		placeholder: 'Acme Glossary Sync'
	},
	{
		displayName: 'Redirect Urls',
		required: true,
		name: 'redirectUrls',
		type: 'fixedCollection',
		default: {},
		description: 'URLs the user may return to after authorizing the client',
		routing: {
			send: {
				property: 'redirectUrls',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.post'
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
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Client description (up to 10,000 characters)',
		routing: {
			send: {
				property: 'description',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.post'
				]
			}
		},
		placeholder: 'Syncs glossaries between Acme and Crowdin'
	},
	{
		displayName: 'Scopes',
		name: 'scopes',
		type: 'fixedCollection',
		default: {},
		description: 'Scopes the client may request. Default is `*`. The client cannot get a scope that the token or the app making this request lacks, so a caller without `*` has to list the scopes here.<br><br>Available scopes: `*`, `user`, `team`, `field`, `notification`, `tm`, `glossary`, `style-guide`, `mt`, `webhook`, `manager`, `vendor`, `client`, `group`, `project`, `project.settings`, `project.member`, `project.status`, `project.status.issue`, `project.status.progress`, `project.status.qa-check`, `project.source`, `project.source.file`, `project.source.string`, `project.translation`, `project.task`, `project.dictionary`, `project.report`, `project.advisor`, `project.placeholder`, `project.discussion`, `project.webhook`, `project.screenshot`, `security-log`, `ai`, `ai.prompt`, `ai.provider`, `ai.proxy`, `ai.translate`, `ai.request-log`, `application`, `application.installation`, `application.proxy`, `application.consent`, `application.storage`, `application.credits`, `application.transaction`, `organization`, `custom-placeholder`, `custom-spellchecker`, `language`, `external-qa-check`, `automation`, `automation.rule`, `automation.rule.execution`, `oauth-client`.<br><br>Each scope supports `:read` and `:write` modifiers (e.g. `project:read`); without a modifier the scope grants both',
		routing: {
			send: {
				property: 'scopes',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.post'
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
		displayName: 'Confidential',
		name: 'confidential',
		type: 'boolean',
		default: true,
		description: 'If `true`, the client gets a secret. If `false`, the client is public and authorizes with PKCE only. Default is `true`',
		routing: {
			send: {
				property: 'confidential',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.post'
				]
			}
		}
	},
	{
		displayName: 'Client Id',
		name: 'clientId',
		required: true,
		description: 'ID of the OAuth client. Get via [List OAuth Clients](#operation/api.oauth-clients.getMany)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.get'
				]
			}
		},
		placeholder: 'dD03Ecs4yVxW0yDNqqw4'
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
					'oAuthClients'
				],
				operation: [
					'api.oauth-clients.getMany'
				]
			}
		}
	}
];
