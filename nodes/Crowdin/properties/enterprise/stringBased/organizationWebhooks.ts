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
			},
			{
				name: 'List Organization Webhook Deliveries',
				value: 'api.webhooks.deliveries.getMany',
				action: 'List Organization Webhook Deliveries',
				description: '**Required scopes:** `webhook` (Read only).\n\nReturns the deliveries of a webhook, the most recent first. Deliveries are kept for 30 days. Test requests are not listed.',
				routing: {
					request: {
						method: 'GET',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}/deliveries'
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
				name: 'Get Organization Webhook Delivery',
				value: 'api.webhooks.deliveries.get',
				action: 'Get Organization Webhook Delivery',
				description: '**Required scopes:** `webhook` (Read only).\n\nReturns a single webhook delivery with its request headers and payload. Header values that can carry credentials are masked. Deliveries of a deleted webhook are available by the ID of that webhook.',
				routing: {
					request: {
						method: 'GET',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}/deliveries/{{$parameter["deliveryId"]}}'
					}
				}
			},
			{
				name: 'List All Organization Webhook Deliveries',
				value: 'api.webhooks.deliveries.getAll',
				action: 'List All Organization Webhook Deliveries',
				description: '**Required scopes:** `webhook` (Read only).\n\nReturns the deliveries of all organization webhooks, including deleted webhooks, the most recent first. Deliveries are kept for 30 days. Test requests are not listed.',
				routing: {
					request: {
						method: 'GET',
						url: '=/webhooks/deliveries'
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
				name: 'Resend Organization Webhook Delivery',
				value: 'api.webhooks.deliveries.resend.post',
				action: 'Resend Organization Webhook Delivery',
				description: '**Required scopes:** `webhook` (Read and Write).\n\nSends the payload of a delivery again to the URL it was sent to, with the request method and content type of that delivery and the current headers of the webhook, and returns the new delivery. A delivery of a deleted webhook is resent without custom headers. A failure of the target server is returned as a delivery with `status` set to `failed`, not as an error.\n\n__Note:__ The target system may act on the payload again',
				routing: {
					request: {
						method: 'POST',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}/deliveries/{{$parameter["deliveryId"]}}/resend'
					}
				}
			},
			{
				name: 'Test Organization Webhook',
				value: 'api.webhooks.tests.post',
				action: 'Test Organization Webhook',
				description: '**Required scopes:** `webhook` (Read and Write).\n\nSends a sample payload of one webhook event to the saved webhook URL, with the saved request method, content type and headers, and returns the answer of the target server. A failure of the target server is returned as data with `status` set to `failed`, not as an error. Test requests are not added to the webhook deliveries. The request body can be omitted.\n\n__Note:__ The target system may act on the sample payload',
				routing: {
					request: {
						method: 'POST',
						url: '=/webhooks/{{$parameter["organizationWebhookId"]}}/tests'
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
		displayName: 'GET /webhooks/{organizationWebhookId}/deliveries',
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
					'api.webhooks.deliveries.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /webhooks/{organizationWebhookId}/deliveries/{deliveryId}',
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
					'api.webhooks.deliveries.get'
				]
			}
		}
	},
	{
		displayName: 'GET /webhooks/deliveries',
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
					'api.webhooks.deliveries.getAll'
				]
			}
		}
	},
	{
		displayName: 'POST /webhooks/{organizationWebhookId}/deliveries/{deliveryId}/resend',
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
					'api.webhooks.deliveries.resend.post'
				]
			}
		}
	},
	{
		displayName: 'POST /webhooks/{organizationWebhookId}/tests',
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
					'api.webhooks.tests.post'
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
				name: 'group.created',
				value: 'group.created'
			},
			{
				name: 'group.deleted',
				value: 'group.deleted'
			},
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
					'api.webhooks.deliveries.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		description: 'Filter results to deliveries with the given status. One of: `success` for a 2xx or 304 answer of the target server, `failed` for any other answer or no answer',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'success',
				value: 'success'
			},
			{
				name: 'failed',
				value: 'failed'
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getMany'
				]
			}
		}
	},
	{
		displayName: 'Events',
		name: 'events',
		description: 'Filter results to deliveries of the given events. It can be one event or a list of comma-separated ones',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'events',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getMany'
				]
			}
		},
		placeholder: 'file.translated,file.approved'
	},
	{
		displayName: 'Created After',
		name: 'dateTime:createdAfter',
		description: 'Filter results to deliveries sent at or after the given date, in ISO 8601 format',
		default: '',
		type: 'dateTime',
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getMany'
				]
			}
		},
		placeholder: '2026-09-28T00:00:00+00:00'
	},
	{
		displayName: 'Created Before',
		name: 'dateTime:createdBefore',
		description: 'Filter results to deliveries sent at or before the given date, in ISO 8601 format',
		default: '',
		type: 'dateTime',
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getMany'
				]
			}
		},
		placeholder: '2026-09-29T00:00:00+00:00'
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
					'api.webhooks.deliveries.getMany'
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
					'api.webhooks.deliveries.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
		}
	},
	{
		displayName: 'Delivery Id',
		name: 'deliveryId',
		required: true,
		description: 'ID of the webhook delivery. Get via [List Organization Webhook Deliveries](#operation/api.webhooks.deliveries.getMany) or [List All Organization Webhook Deliveries](#operation/api.webhooks.deliveries.getAll)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.get'
				]
			}
		},
		placeholder: '9051'
	},
	{
		displayName: 'Webhook Ids',
		name: 'webhookIds',
		description: 'Filter results to deliveries of the given webhooks, including deleted ones. It can be one ID or a list of comma-separated ID values. Get via [List Webhooks](#operation/api.webhooks.getMany)',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'webhookIds',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getAll'
				]
			}
		},
		placeholder: '4,7'
	},
	{
		displayName: 'Status',
		name: 'status',
		description: 'Filter results to deliveries with the given status. One of: `success` for a 2xx or 304 answer of the target server, `failed` for any other answer or no answer',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'success',
				value: 'success'
			},
			{
				name: 'failed',
				value: 'failed'
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getAll'
				]
			}
		}
	},
	{
		displayName: 'Events',
		name: 'events',
		description: 'Filter results to deliveries of the given events. It can be one event or a list of comma-separated ones',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'events',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getAll'
				]
			}
		},
		placeholder: 'file.translated,file.approved'
	},
	{
		displayName: 'Created After',
		name: 'dateTime:createdAfter',
		description: 'Filter results to deliveries sent at or after the given date, in ISO 8601 format',
		default: '',
		type: 'dateTime',
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getAll'
				]
			}
		},
		placeholder: '2026-09-28T00:00:00+00:00'
	},
	{
		displayName: 'Created Before',
		name: 'dateTime:createdBefore',
		description: 'Filter results to deliveries sent at or before the given date, in ISO 8601 format',
		default: '',
		type: 'dateTime',
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getAll'
				]
			}
		},
		placeholder: '2026-09-29T00:00:00+00:00'
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
					'api.webhooks.deliveries.getAll'
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
					'api.webhooks.deliveries.resend.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
		}
	},
	{
		displayName: 'Delivery Id',
		name: 'deliveryId',
		required: true,
		description: 'ID of the webhook delivery. Get via [List Organization Webhook Deliveries](#operation/api.webhooks.deliveries.getMany) or [List All Organization Webhook Deliveries](#operation/api.webhooks.deliveries.getAll)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.resend.post'
				]
			}
		},
		placeholder: '9051'
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
					'api.webhooks.tests.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getOrganizationWebhooks'
		}
	},
	{
		displayName: 'Event',
		name: 'event',
		type: 'string',
		default: '',
		description: 'Event to send a sample payload for. Must be one of the webhook `events`. Default is the first event of the webhook',
		routing: {
			send: {
				property: 'event',
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
					'api.webhooks.tests.post'
				]
			}
		},
		placeholder: 'file.translated'
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
						name: 'group.created',
						value: 'group.created'
					},
					{
						name: 'group.deleted',
						value: 'group.deleted'
					},
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
					'api.webhooks.deliveries.getMany'
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
					'organizationWebhooks'
				],
				operation: [
					'api.webhooks.deliveries.getAll'
				]
			}
		}
	}
];
