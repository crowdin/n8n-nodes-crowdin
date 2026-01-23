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
				description: '**Required scopes:** `project.webhook` (Read only).',
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
				description: '**Required scopes:** `project.webhook` (Read and Write).',
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
				description: '**Required scopes:** `project.webhook` (Read only).',
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
				description: '**Required scopes:** `project.webhook` (Read and Write).',
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
				description: '**Required scopes:** `project.webhook` (Read and Write).',
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
		description: 'You can configure webhooks for the following events:\n * \'file.added\' — project file is added\n * \'file.updated\' - project file is updated\n * \'file.reverted\' - project file is reverted\n * \'file.deleted\' - project file is deleted\n * \'file.translated\' — project file is fully translated\n * \'file.approved\' — project file is fully reviewed\n * \'file.qa.finished\' - project file QA check is finished\n * \'project.translated\' — all strings in project are translated\n * \'project.approved\' — all strings in project are approved\n * \'project.qa.finished\' — all strings in project are QA check is finished\n * \'project.built\' - project are successfully built\n * \'translation.updated\' — final translation of string is updated (using Replace in suggestions feature)\n * \'string.added\' — source string is added\n * \'string.updated\' — source string is updated\n * \'string.deleted\' — source string is deleted\n * \'stringComment.created\' - string comment/issue is added\n * \'stringComment.updated\' - string comment/issue is updated\n * \'stringComment.deleted\' - string comment/issue is deleted\n * \'stringComment.restored\' - string comment/issue is restored\n * \'suggestion.added\' — one of source strings is translated\n * \'suggestion.updated\' — translation for source string is updated (using Replace in suggestions feature)\n * \'suggestion.deleted\' — one of translations is deleted\n * \'suggestion.approved\' — translation for string is approved\n * \'suggestion.disapproved\' — approval for previously added translation is removed\n * \'task.added\' - task is added\n * \'task.statusChanged\' - task status was changed\n * \'task.updated\' - task is updated\n * \'task.deleted\' - task is deleted',
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
				name: 'file.added',
				value: 'file.added'
			},
			{
				name: 'file.updated',
				value: 'file.updated'
			},
			{
				name: 'file.reverted',
				value: 'file.reverted'
			},
			{
				name: 'file.deleted',
				value: 'file.deleted'
			},
			{
				name: 'file.translated',
				value: 'file.translated'
			},
			{
				name: 'file.approved',
				value: 'file.approved'
			},
			{
				name: 'file.qa.finished',
				value: 'file.qa.finished'
			},
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
				description: 'You can configure webhooks for the following events:\n * \'file.added\' — project file is added\n * \'file.updated\' - project file is updated\n * \'file.reverted\' - project file is reverted\n * \'file.deleted\' - project file is deleted\n * \'file.translated\' — project file is fully translated\n * \'file.approved\' — project file is fully reviewed\n * \'file.qa.finished\' - project file QA check is finished\n * \'project.translated\' — all strings in project are translated\n * \'project.approved\' — all strings in project are approved\n * \'project.qa.finished\' — all strings in project are QA check is finished\n * \'project.built\' - project are successfully built\n * \'translation.updated\' — final translation of string is updated (using Replace in suggestions feature)\n * \'string.added\' — source string is added\n * \'string.updated\' — source string is updated\n * \'string.deleted\' — source string is deleted\n * \'stringComment.created\' - string comment/issue is added\n * \'stringComment.updated\' - string comment/issue is updated\n * \'stringComment.deleted\' - string comment/issue is deleted\n * \'stringComment.restored\' - string comment/issue is restored\n * \'suggestion.added\' — one of source strings is translated\n * \'suggestion.updated\' — translation for source string is updated (using Replace in suggestions feature)\n * \'suggestion.deleted\' — one of translations is deleted\n * \'suggestion.approved\' — translation for string is approved\n * \'suggestion.disapproved\' — approval for previously added translation is removed\n * \'task.added\' - task is added\n * \'task.statusChanged\' - task status was changed\n * \'task.updated\' - task is updated\n * \'task.deleted\' - task is deleted',
				options: [
					{
						name: 'file.added',
						value: 'file.added'
					},
					{
						name: 'file.updated',
						value: 'file.updated'
					},
					{
						name: 'file.reverted',
						value: 'file.reverted'
					},
					{
						name: 'file.deleted',
						value: 'file.deleted'
					},
					{
						name: 'file.translated',
						value: 'file.translated'
					},
					{
						name: 'file.approved',
						value: 'file.approved'
					},
					{
						name: 'file.qa.finished',
						value: 'file.qa.finished'
					},
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
	}
];
