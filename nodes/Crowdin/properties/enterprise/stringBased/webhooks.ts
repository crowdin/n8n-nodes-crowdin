// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const webhooksProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				]
			}
		},
		options: [
			{
				name: 'List Webhooks',
				value: 'api.projects.webhooks.getMany',
				action: 'List Webhooks',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks'
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
				value: 'api.projects.webhooks.post',
				action: 'Add Webhook',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks'
					}
				}
			},
			{
				name: 'Get Webhook',
				value: 'api.projects.webhooks.get',
				action: 'Get Webhook',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}'
					}
				}
			},
			{
				name: 'Delete Webhook',
				value: 'api.projects.webhooks.delete',
				action: 'Delete Webhook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}'
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
				value: 'api.projects.webhooks.patch',
				action: 'Edit Webhook',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Webhook Deliveries',
				value: 'api.projects.webhooks.deliveries.getMany',
				action: 'List Webhook Deliveries',
				description: '**Required scopes:** `project.webhook` (Read only).\n\nReturns the deliveries of a webhook, the most recent first. Deliveries are kept for 30 days. Test requests are not listed.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}/deliveries'
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
				name: 'Get Webhook Delivery',
				value: 'api.projects.webhooks.deliveries.get',
				action: 'Get Webhook Delivery',
				description: '**Required scopes:** `project.webhook` (Read only).\n\nReturns a single webhook delivery with its request headers and payload. Header values that can carry credentials are masked. Deliveries of a deleted webhook are available by the ID of that webhook.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}/deliveries/{{$parameter["deliveryId"]}}'
					}
				}
			},
			{
				name: 'List All Webhook Deliveries',
				value: 'api.projects.webhooks.deliveries.getAll',
				action: 'List All Webhook Deliveries',
				description: '**Required scopes:** `project.webhook` (Read only).\n\nReturns the deliveries of all project webhooks, including deleted webhooks, the most recent first. Deliveries are kept for 30 days. Test requests are not listed.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/deliveries'
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
				name: 'Resend Webhook Delivery',
				value: 'api.projects.webhooks.deliveries.resend.post',
				action: 'Resend Webhook Delivery',
				description: '**Required scopes:** `project.webhook` (Read and Write).\n\nSends the payload of a delivery again to the URL it was sent to, with the request method and content type of that delivery and the current headers of the webhook, and returns the new delivery. A delivery of a deleted webhook is resent without custom headers. A failure of the target server is returned as a delivery with `status` set to `failed`, not as an error.\n\n__Note:__ The target system may act on the payload again',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}/deliveries/{{$parameter["deliveryId"]}}/resend'
					}
				}
			},
			{
				name: 'Test Webhook',
				value: 'api.projects.webhooks.tests.post',
				action: 'Test Webhook',
				description: '**Required scopes:** `project.webhook` (Read and Write).\n\nSends a sample payload of one webhook event to the saved webhook URL, with the saved request method, content type and headers, and returns the answer of the target server. A failure of the target server is returned as data with `status` set to `failed`, not as an error. Test requests are not added to the webhook deliveries. The request body can be omitted.\n\n__Note:__ The target system may act on the sample payload',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/webhooks/{{$parameter["webhookId"]}}/tests'
					}
				}
			}
		],
		default: 'api.projects.webhooks.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/webhooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/webhooks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/webhooks/{webhookId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/webhooks/{webhookId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/webhooks/{webhookId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/webhooks/{webhookId}/deliveries',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/webhooks/{webhookId}/deliveries/{deliveryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/webhooks/deliveries',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/webhooks/{webhookId}/deliveries/{deliveryId}/resend',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.resend.post'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/webhooks/{webhookId}/tests',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.tests.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
		description: 'You can configure webhooks for the following events:\n * \'project.translated\' — all strings in project are translated\n * \'project.approved\' — all strings in project are approved\n * \'project.qa.finished\' - all strings in project QA check are finished\n * \'project.built\' - project are successfully built\n * \'preTranslation.completed\' - Auto-Translation finishes, fails or is canceled\n * \'translation.updated\' — final translation of string is updated (using Replace in suggestions feature)\n * \'string.added\' — source string is added\n * \'string.updated\' — source string is updated\n * \'string.deleted\' — source string is deleted\n * \'string.labelsAssigned\' — labels are assigned to source string\n * \'string.labelsUnassigned\' — labels are unassigned from source string\n * \'label.created\' — label is created\n * \'label.updated\' — label is updated\n * \'label.deleted\' — label is deleted\n * \'stringComment.created\' - string comment/issue is added\n * \'stringComment.updated\' - string comment/issue is updated\n * \'stringComment.deleted\' - string comment/issue is deleted\n * \'stringComment.restored\' - string comment/issue is restored\n * \'suggestion.added\' — one of source strings is translated\n * \'suggestion.updated\' — translation for source string is updated (using Replace in suggestions feature)\n * \'suggestion.deleted\' — one of translations is deleted\n * \'suggestion.approved\' — translation for string is approved\n * \'suggestion.disapproved\' — approval for previously added translation is removed\n * \'task.added\' - task is added\n * \'task.statusChanged\' - task status was changed\n * \'task.updated\' - task is updated\n * \'task.deleted\' - task is deleted',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
				]
			}
		},
		options: [
			{
				name: 'project.translated',
				value: 'project.translated'
			},
			{
				name: 'project.approved',
				value: 'project.approved'
			},
			{
				name: 'project.qa.finished',
				value: 'project.qa.finished'
			},
			{
				name: 'project.built',
				value: 'project.built'
			},
			{
				name: 'preTranslation.completed',
				value: 'preTranslation.completed'
			},
			{
				name: 'translation.updated',
				value: 'translation.updated'
			},
			{
				name: 'string.added',
				value: 'string.added'
			},
			{
				name: 'string.updated',
				value: 'string.updated'
			},
			{
				name: 'string.deleted',
				value: 'string.deleted'
			},
			{
				name: 'string.labelsAssigned',
				value: 'string.labelsAssigned'
			},
			{
				name: 'string.labelsUnassigned',
				value: 'string.labelsUnassigned'
			},
			{
				name: 'label.created',
				value: 'label.created'
			},
			{
				name: 'label.updated',
				value: 'label.updated'
			},
			{
				name: 'label.deleted',
				value: 'label.deleted'
			},
			{
				name: 'stringComment.created',
				value: 'stringComment.created'
			},
			{
				name: 'stringComment.updated',
				value: 'stringComment.updated'
			},
			{
				name: 'stringComment.deleted',
				value: 'stringComment.deleted'
			},
			{
				name: 'stringComment.restored',
				value: 'stringComment.restored'
			},
			{
				name: 'suggestion.added',
				value: 'suggestion.added'
			},
			{
				name: 'suggestion.updated',
				value: 'suggestion.updated'
			},
			{
				name: 'suggestion.deleted',
				value: 'suggestion.deleted'
			},
			{
				name: 'suggestion.approved',
				value: 'suggestion.approved'
			},
			{
				name: 'suggestion.disapproved',
				value: 'suggestion.disapproved'
			},
			{
				name: 'task.added',
				value: 'task.added'
			},
			{
				name: 'task.statusChanged',
				value: 'task.statusChanged'
			},
			{
				name: 'task.updated',
				value: 'task.updated'
			},
			{
				name: 'task.deleted',
				value: 'task.deleted'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
				]
			}
		}
	},
	{
		displayName: 'Headers',
		name: 'headers',
		type: 'json',
		default: '{\n  "Authorization": "Bearer <ACCESS_TOKEN>"\n}',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.post'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Delivery Id',
		name: 'deliveryId',
		required: true,
		description: 'ID of the webhook delivery. Get via [List Webhook Deliveries](#operation/api.projects.webhooks.deliveries.getMany) or [List All Webhook Deliveries](#operation/api.projects.webhooks.deliveries.getAll)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.get'
				]
			}
		},
		placeholder: '9051'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Ids',
		name: 'webhookIds',
		description: 'Filter results to deliveries of the given webhooks, including deleted ones. It can be one ID or a list of comma-separated ID values. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.resend.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.resend.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Delivery Id',
		name: 'deliveryId',
		required: true,
		description: 'ID of the webhook delivery. Get via [List Webhook Deliveries](#operation/api.projects.webhooks.deliveries.getMany) or [List All Webhook Deliveries](#operation/api.projects.webhooks.deliveries.getAll)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.resend.post'
				]
			}
		},
		placeholder: '9051'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.tests.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Webhook Id',
		name: 'webhookId',
		required: true,
		description: 'Webhook Identifier. Get via [List Webhooks](#operation/api.projects.webhooks.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.tests.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectWebhooks',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.tests.post'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.patch'
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
				description: 'You can configure webhooks for the following events:\n * \'project.translated\' — all strings in project are translated\n * \'project.approved\' — all strings in project are approved\n * \'project.qa.finished\' - all strings in project QA check are finished\n * \'project.built\' - project are successfully built\n * \'preTranslation.completed\' - Auto-Translation finishes, fails or is canceled\n * \'translation.updated\' — final translation of string is updated (using Replace in suggestions feature)\n * \'string.added\' — source string is added\n * \'string.updated\' — source string is updated\n * \'string.deleted\' — source string is deleted\n * \'string.labelsAssigned\' — labels are assigned to source string\n * \'string.labelsUnassigned\' — labels are unassigned from source string\n * \'label.created\' — label is created\n * \'label.updated\' — label is updated\n * \'label.deleted\' — label is deleted\n * \'stringComment.created\' - string comment/issue is added\n * \'stringComment.updated\' - string comment/issue is updated\n * \'stringComment.deleted\' - string comment/issue is deleted\n * \'stringComment.restored\' - string comment/issue is restored\n * \'suggestion.added\' — one of source strings is translated\n * \'suggestion.updated\' — translation for source string is updated (using Replace in suggestions feature)\n * \'suggestion.deleted\' — one of translations is deleted\n * \'suggestion.approved\' — translation for string is approved\n * \'suggestion.disapproved\' — approval for previously added translation is removed\n * \'task.added\' - task is added\n * \'task.statusChanged\' - task status was changed\n * \'task.updated\' - task is updated\n * \'task.deleted\' - task is deleted',
				options: [
					{
						name: 'project.translated',
						value: 'project.translated'
					},
					{
						name: 'project.approved',
						value: 'project.approved'
					},
					{
						name: 'project.qa.finished',
						value: 'project.qa.finished'
					},
					{
						name: 'project.built',
						value: 'project.built'
					},
					{
						name: 'preTranslation.completed',
						value: 'preTranslation.completed'
					},
					{
						name: 'translation.updated',
						value: 'translation.updated'
					},
					{
						name: 'string.added',
						value: 'string.added'
					},
					{
						name: 'string.updated',
						value: 'string.updated'
					},
					{
						name: 'string.deleted',
						value: 'string.deleted'
					},
					{
						name: 'string.labelsAssigned',
						value: 'string.labelsAssigned'
					},
					{
						name: 'string.labelsUnassigned',
						value: 'string.labelsUnassigned'
					},
					{
						name: 'label.created',
						value: 'label.created'
					},
					{
						name: 'label.updated',
						value: 'label.updated'
					},
					{
						name: 'label.deleted',
						value: 'label.deleted'
					},
					{
						name: 'stringComment.created',
						value: 'stringComment.created'
					},
					{
						name: 'stringComment.updated',
						value: 'stringComment.updated'
					},
					{
						name: 'stringComment.deleted',
						value: 'stringComment.deleted'
					},
					{
						name: 'stringComment.restored',
						value: 'stringComment.restored'
					},
					{
						name: 'suggestion.added',
						value: 'suggestion.added'
					},
					{
						name: 'suggestion.updated',
						value: 'suggestion.updated'
					},
					{
						name: 'suggestion.deleted',
						value: 'suggestion.deleted'
					},
					{
						name: 'suggestion.approved',
						value: 'suggestion.approved'
					},
					{
						name: 'suggestion.disapproved',
						value: 'suggestion.disapproved'
					},
					{
						name: 'task.added',
						value: 'task.added'
					},
					{
						name: 'task.statusChanged',
						value: 'task.statusChanged'
					},
					{
						name: 'task.updated',
						value: 'task.updated'
					},
					{
						name: 'task.deleted',
						value: 'task.deleted'
					}
				]
			},
			{
				displayName: 'Headers',
				name: 'json:headers',
				type: 'json',
				default: '{\n  "Authorization": "Bearer <ACCESS_TOKEN>"\n}',
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getMany'
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
					'webhooks'
				],
				operation: [
					'api.projects.webhooks.deliveries.getAll'
				]
			}
		}
	}
];
