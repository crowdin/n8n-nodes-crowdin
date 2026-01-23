// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeFieldBody } from '../../../utils/preSend';

export const stringCommentsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				]
			}
		},
		options: [
			{
				name: 'Delete Attachment from String Comment',
				value: 'api.projects.comments.attachments.delete',
				action: 'Delete Attachment from String Comment',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/comments/{{$parameter["commentId"]}}/attachments/{{$parameter["attachmentId"]}}'
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
				name: 'List String Comments',
				value: 'api.projects.comments.getMany',
				action: 'List String Comments',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/comments'
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
				name: 'Add String Comment',
				value: 'api.projects.comments.post',
				action: 'Add String Comment',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/comments'
					}
				}
			},
			{
				name: 'Get String Comment',
				value: 'api.projects.comments.get',
				action: 'Get String Comment',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/comments/{{$parameter["commentId"]}}'
					}
				}
			},
			{
				name: 'Delete String Comment',
				value: 'api.projects.comments.delete',
				action: 'Delete String Comment',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/comments/{{$parameter["commentId"]}}'
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
		default: 'api.projects.comments.attachments.delete'
	},
	{
		displayName: 'DELETE /projects/{projectId}/comments/{commentId}/attachments/{attachmentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.attachments.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/comments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/comments',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/comments/{commentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/comments/{commentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.delete'
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.attachments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'String Comment Identifier. Get via [List String Comments](#operation/api.projects.strings.comments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.attachments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Attachment Id',
		name: 'attachmentId',
		required: true,
		description: 'Attachment Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.attachments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getCommentAttachments',
			loadOptionsDependsOn: [
				'projectId',
				'commentId'
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
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
		displayName: 'String Id',
		name: 'stringId',
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'stringId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'Defines string comment type\n\n__Note:__ `type=comment` can\'t be used with `issueType` or `issueStatus` in same request',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'comment',
				value: 'comment'
			},
			{
				name: 'issue',
				value: 'issue'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'type',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
				]
			}
		}
	},
	{
		displayName: 'Issue Type',
		name: 'issueType',
		description: 'Defines issue type. It can be one issue type or a list of comma-separated ones',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'general_question',
				value: 'general_question'
			},
			{
				name: 'translation_mistake',
				value: 'translation_mistake'
			},
			{
				name: 'context_request',
				value: 'context_request'
			},
			{
				name: 'source_mistake',
				value: 'source_mistake'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'issueType',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
				]
			}
		}
	},
	{
		displayName: 'Issue Status',
		name: 'issueStatus',
		description: 'Defines issue resolution status',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'resolved',
				value: 'resolved'
			},
			{
				name: 'unresolved',
				value: 'unresolved'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'issueStatus',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		required: true,
		name: 'stringId',
		type: 'options',
		default: '',
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		routing: {
			send: {
				property: 'stringId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: undefined,
		routing: {
			send: {
				property: 'text',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		},
		placeholder: 'some issue with translation'
	},
	{
		displayName: 'Type',
		required: true,
		name: 'type',
		type: 'options',
		default: 'issue',
		description: 'Defines comment or issue',
		options: [
			{
				name: 'comment',
				value: 'comment'
			},
			{
				name: 'issue',
				value: 'issue'
			}
		],
		routing: {
			send: {
				property: 'type',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		}
	},
	{
		displayName: 'Target Language Id',
		name: 'targetLanguageId',
		type: 'options',
		default: '',
		description: 'Target Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'targetLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Issue Type',
		name: 'issueType',
		type: 'options',
		default: '',
		description: 'Defines issue type',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'general_question',
				value: 'general_question'
			},
			{
				name: 'translation_mistake',
				value: 'translation_mistake'
			},
			{
				name: 'context_request',
				value: 'context_request'
			},
			{
				name: 'source_mistake',
				value: 'source_mistake'
			}
		],
		routing: {
			send: {
				property: 'issueType',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		}
	},
	{
		displayName: 'Attachments',
		name: 'attachments',
		type: 'fixedCollection',
		default: {},
		description: 'List of attachments to be added to the comment. Each object must contain id (Storage Identifier). Get via [List Storages](#operation/api.storages.getMany)',
		routing: {
			send: {
				property: 'attachments',
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Item',
				name: 'items',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'number',
						default: 0,
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
						placeholder: '123'
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'String Comment Identifier. Get via [List String Comments](#operation/api.projects.strings.comments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'String Comment Identifier. Get via [List String Comments](#operation/api.projects.strings.comments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringComments'
				],
				operation: [
					'api.projects.comments.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
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
					'stringComments'
				],
				operation: [
					'api.projects.comments.getMany'
				]
			}
		}
	}
];
