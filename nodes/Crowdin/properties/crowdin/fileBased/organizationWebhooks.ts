// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const organizationWebhooksProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				]
			}
		},
		options: [
			{
				name: 'List Webhooks',
				value: 'api.webhooks.getMany',
				action: 'List Webhooks',
				description: '**Required scopes:** `webhook` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/webhooks'
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
				name: 'Add Webhook',
				value: 'api.webhooks.post',
				action: 'Add Webhook',
				description: '**Required scopes:** `webhook` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/webhooks'
					}
				}
			},
			{
				name: 'Get Webhook',
				value: 'api.webhooks.get',
				action: 'Get Webhook',
				description: '**Required scopes:** `webhook` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}'
					}
				}
			},
			{
				name: 'Delete Webhook',
				value: 'api.webhooks.delete',
				action: 'Delete Webhook',
				description: '**Required scopes:** `webhook` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}'
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
				name: 'Edit Webhook',
				value: 'api.webhooks.patch',
				action: 'Edit Webhook',
				description: '**Required scopes:** `webhook` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.webhooks.getMany'
	},
	{
		displayName: 'GET /webhooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /webhooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'GET /webhooks/{organizationWebhookId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /webhooks/{organizationWebhookId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /webhooks/{organizationWebhookId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.patch'
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.getMany'
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
		description: 'Webhook name',
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		},
		placeholder: 'Proofread'
	},
	{
		displayName: 'Url',
		required: true,
		name: 'url',
		type: 'string',
		default: '',
		description: 'Webhook URL',
		routing: {
			send: {
				property: 'url',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		},
		placeholder: 'https://webhook.site/1c20d9b5-6e6a-4522-974d-9da7ea7595c9'
	},
	{
		displayName: 'Events',
		required: true,
		name: 'events',
		type: 'multiOptions',
		default: [],
		description: 'Webhook events',
		routing: {
			send: {
				property: 'events',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		},
		options: [
			{
				name: 'project.created',
				value: 'project.created'
			},
			{
				name: 'project.deleted',
				value: 'project.deleted'
			}
		]
	},
	{
		displayName: 'Request Type',
		required: true,
		name: 'requestType',
		type: 'options',
		default: 'POST',
		description: 'Webhook request type',
		options: [
			{
				name: 'POST',
				value: 'POST'
			},
			{
				name: 'GET',
				value: 'GET'
			}
		],
		routing: {
			send: {
				property: 'requestType',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'Is Active',
		name: 'isActive',
		type: 'boolean',
		default: true,
		description: 'Defines whether webhook is active',
		routing: {
			send: {
				property: 'isActive',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'Batching Enabled',
		name: 'batchingEnabled',
		type: 'boolean',
		default: false,
		description: 'Defines whether webhook batching is enabled',
		routing: {
			send: {
				property: 'batchingEnabled',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'Content Type',
		name: 'contentType',
		type: 'options',
		default: '',
		description: 'Webhook content type',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'multipart/form-data',
				value: 'multipart/form-data'
			},
			{
				name: 'application/json',
				value: 'application/json'
			},
			{
				name: 'application/x-www-form-urlencoded',
				value: 'application/x-www-form-urlencoded'
			}
		],
		routing: {
			send: {
				property: 'contentType',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'Headers',
		name: 'headers',
		type: 'json',
		default: '{\n  "Accept": "application/xml"\n}',
		description: 'Webhook headers',
		routing: {
			send: {
				property: 'headers',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'Payload',
		name: 'payload',
		type: 'fixedCollection',
		default: {},
		description: 'Custom webhook payload',
		routing: {
			send: {
				property: 'payload',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.post'
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
						displayName: 'Created',
						name: 'json:project.created',
						type: 'json',
						default: '{}',
						description: 'Read more about [Events payload examples](https://developer.crowdin.com/webhooks). Additionally, you can check out Events payloads while creating webhooks via UI in your Crowdin profile settings > Webhooks tab > click Add webhook.'
					}
				]
			}
		]
	},
	{
		displayName: 'Organization Webhook Id',
		name: 'organizationWebhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
		}
	},
	{
		displayName: 'Organization Webhook Id',
		name: 'organizationWebhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
		}
	},
	{
		displayName: 'Organization Webhook Id',
		name: 'organizationWebhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Webhook name',
				placeholder: 'Proofread'
			},
			{
				displayName: 'Is Active',
				name: 'isActive',
				type: 'boolean',
				default: true,
				description: 'Defines whether webhook is active'
			},
			{
				displayName: 'Batching Enabled',
				name: 'batchingEnabled',
				type: 'boolean',
				default: false,
				description: 'Defines whether webhook batching is enabled'
			},
			{
				displayName: 'Content Type',
				name: 'contentType',
				type: 'options',
				default: '',
				description: 'Webhook content type',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'multipart/form-data',
						value: 'multipart/form-data'
					},
					{
						name: 'application/json',
						value: 'application/json'
					},
					{
						name: 'application/x-www-form-urlencoded',
						value: 'application/x-www-form-urlencoded'
					}
				]
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				default: [],
				description: 'Webhook events',
				options: [
					{
						name: 'project.created',
						value: 'project.created'
					},
					{
						name: 'project.deleted',
						value: 'project.deleted'
					}
				]
			},
			{
				displayName: 'Headers',
				name: 'json:headers',
				type: 'json',
				default: '{\n  "Accept": "application/xml"\n}',
				description: 'Webhook headers'
			},
			{
				displayName: 'Request Type',
				name: 'requestType',
				type: 'options',
				default: '',
				description: 'Webhook request type',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'POST',
						value: 'POST'
					},
					{
						name: 'GET',
						value: 'GET'
					}
				]
			},
			{
				displayName: 'Payload',
				name: 'payload',
				type: 'fixedCollection',
				default: {},
				description: 'Custom webhook payload',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Created',
								name: 'json:project.created',
								type: 'json',
								default: '{}',
								description: 'Read more about [Events payload examples](https://developer.crowdin.com/webhooks). Additionally, you can check out Events payloads while creating webhooks via UI in your Crowdin profile settings > Webhooks tab > click Add webhook.'
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
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.getMany'
				]
			}
		}
	}
];
