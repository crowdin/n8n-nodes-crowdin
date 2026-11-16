// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const discussionsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'discussions'
				]
			}
		},
		options: [
			{
				name: 'List Project Discussions',
				value: 'api.projects.discussions.getMany',
				action: 'List Project Discussions',
				description: '**Required scopes:** `project.discussion` (Read only).\n\nReturns the project discussions. By default, only `open` discussions are returned, the most recently updated first.\n\n__Note:__ In a public project, any signed-in user can read the discussions',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/discussions'
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
				name: 'Add Project Discussion',
				value: 'api.projects.discussions.post',
				action: 'Add Project Discussion',
				description: '**Required scopes:** `project.discussion` (Read and Write).\n\nStarts a new project discussion with a description. Every project member is notified about the new discussion, and the users mentioned in the description are notified about the mention.\n\n__Note:__ Only project members can start discussions',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/discussions'
					}
				}
			},
			{
				name: 'Get Project Discussion',
				value: 'api.projects.discussions.get',
				action: 'Get Project Discussion',
				description: '**Required scopes:** `project.discussion` (Read only).\n\nReturns a single project discussion without its replies. Get the replies via [List Discussion Replies](#operation/api.projects.discussions.replies.getMany).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}'
					}
				}
			},
			{
				name: 'Delete Project Discussion',
				value: 'api.projects.discussions.delete',
				action: 'Delete Project Discussion',
				description: '**Required scopes:** `project.discussion` (Read and Write).\n\nDeletes a project discussion together with all its replies.\n\n__Note:__ Only the author of the discussion and project managers can delete it',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}'
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
				name: 'Edit Project Discussion',
				value: 'api.projects.discussions.patch',
				action: 'Edit Project Discussion',
				description: '**Required scopes:** `project.discussion` (Read and Write).\n\nRenames, closes, reopens, mutes or unmutes a project discussion. Closing or reopening posts a `system` reply and notifies the discussion participants. Muting applies only to the authenticated user.\n\n__Note:__ Only the author of the discussion and project managers can rename, close or reopen it. Anyone who can reply to the discussion can mute it for themselves',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Discussion Replies',
				value: 'api.projects.discussions.replies.getMany',
				action: 'List Discussion Replies',
				description: '**Required scopes:** `project.discussion` (Read only).\n\nReturns the replies of a project discussion in the order they were posted, starting with the description of the discussion.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}/replies'
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
				name: 'Add Discussion Reply',
				value: 'api.projects.discussions.replies.post',
				action: 'Add Discussion Reply',
				description: '**Required scopes:** `project.discussion` (Read and Write).\n\nPosts a reply to a project discussion. The discussion participants who have not muted it are notified about the reply, and the users mentioned in the reply are notified about the mention.\n\n__Note:__ Only project members can reply',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}/replies'
					}
				}
			},
			{
				name: 'Get Discussion Reply',
				value: 'api.projects.discussions.replies.get',
				action: 'Get Discussion Reply',
				description: '**Required scopes:** `project.discussion` (Read only).\n\nReturns a single reply of a project discussion.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}/replies/{{$parameter["replyId"]}}'
					}
				}
			},
			{
				name: 'Delete Discussion Reply',
				value: 'api.projects.discussions.replies.delete',
				action: 'Delete Discussion Reply',
				description: '**Required scopes:** `project.discussion` (Read and Write).\n\nDeletes a discussion reply.\n\n__Note:__ Only regular replies can be deleted, by their author or a project manager. The description and `system` replies stay until the discussion is deleted',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}/replies/{{$parameter["replyId"]}}'
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
				name: 'Edit Discussion Reply',
				value: 'api.projects.discussions.replies.patch',
				action: 'Edit Discussion Reply',
				description: '**Required scopes:** `project.discussion` (Read and Write).\n\nEdits the text of a discussion reply. Users newly mentioned in the text are notified about the mention.\n\n__Note:__ Only the author can edit their `reply` or `description`. `system` replies can\'t be edited',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/discussions/{{$parameter["discussionId"]}}/replies/{{$parameter["replyId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.projects.discussions.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/discussions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/discussions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/discussions/{discussionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/discussions/{discussionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/discussions/{discussionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/discussions/{discussionId}/replies',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/discussions/{discussionId}/replies',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/discussions/{discussionId}/replies/{replyId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/discussions/{discussionId}/replies/{replyId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/discussions/{discussionId}/replies/{replyId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.patch'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		description: 'Filter results to discussions with the given statuses: `open`, `closed`. It can be one status or a list of comma-separated ones. Default is `open`',
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		},
		placeholder: 'open,closed'
	},
	{
		displayName: 'User Ids',
		name: 'userIds',
		description: 'Filter results to discussions started by the given users. Get via [List Project Members](#operation/api.projects.members.getMany). It can be one user ID or a list of comma-separated ones',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'userIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		description: 'Filter results to discussions about the given target languages. Get via [Project Target Languages](#operation/api.projects.get). It can be one language ID or a list of comma-separated ones',
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Search',
		name: 'search',
		description: 'Filter results to discussions whose title, description or any regular reply contains the given text, up to 255 characters',
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		},
		placeholder: 'checkout'
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		description: 'Sort results by `id`, `title`, `createdAt`, `updatedAt` or `repliesCount`. Default is `updatedAt desc`. Read more about [sorting rules](#section/Introduction/Sorting)',
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
				]
			}
		},
		placeholder: 'repliesCount desc'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Title',
		required: true,
		name: 'title',
		type: 'string',
		default: '',
		description: 'Discussion title, up to 255 characters',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.post'
				]
			}
		},
		placeholder: 'Tone of voice for the checkout screens'
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: 'Description of the discussion in Markdown, up to 16000 characters, posted as its first reply. Mention a project member with `@username` to notify them',
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.post'
				]
			}
		},
		placeholder: 'Should we address customers formally on the checkout screens? @olena what do you think?'
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		type: 'options',
		default: '',
		description: 'ID of the target language the discussion is about. Get via [Project Target Languages](#operation/api.projects.get). `null` or omitted for a discussion about all languages',
		routing: {
			send: {
				property: 'languageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.get'
				]
			}
		},
		placeholder: '55'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.delete'
				]
			}
		},
		placeholder: '55'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.patch'
				]
			}
		},
		placeholder: '55'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.getMany'
				]
			}
		},
		placeholder: '55'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.getMany'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.post'
				]
			}
		},
		placeholder: '55'
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: 'Reply text in Markdown, up to 16000 characters. Mention a project member with `@username` to notify them',
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.post'
				]
			}
		},
		placeholder: 'Informal address matches the rest of the app, so I would keep it'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.get'
				]
			}
		},
		placeholder: '55'
	},
	{
		displayName: 'Reply Id',
		name: 'replyId',
		required: true,
		description: 'ID of the reply. Get via [List Discussion Replies](#operation/api.projects.discussions.replies.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.get'
				]
			}
		},
		placeholder: '912'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.delete'
				]
			}
		},
		placeholder: '55'
	},
	{
		displayName: 'Reply Id',
		name: 'replyId',
		required: true,
		description: 'ID of the reply. Get via [List Discussion Replies](#operation/api.projects.discussions.replies.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.delete'
				]
			}
		},
		placeholder: '912'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Discussion Id',
		name: 'discussionId',
		required: true,
		description: 'ID of the discussion. Get via [List Project Discussions](#operation/api.projects.discussions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.patch'
				]
			}
		},
		placeholder: '55'
	},
	{
		displayName: 'Reply Id',
		name: 'replyId',
		required: true,
		description: 'ID of the reply. Get via [List Discussion Replies](#operation/api.projects.discussions.replies.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.patch'
				]
			}
		},
		placeholder: '912'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Discussion title, up to 255 characters',
				placeholder: 'Tone of voice for the checkout screens'
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				description: 'Discussion status. One of: `open`, `closed`',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'open',
						value: 'open'
					},
					{
						name: 'closed',
						value: 'closed'
					}
				]
			},
			{
				displayName: 'Is Muted',
				name: 'isMuted',
				type: 'boolean',
				default: false,
				description: 'If `true`, the authenticated user muted the discussion and is not notified about new replies in it'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Reply text in Markdown, up to 16000 characters. Mention a project member with `@username` to notify them',
				placeholder: 'Informal address matches the rest of the app, so I would keep it'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.getMany'
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
					'discussions'
				],
				operation: [
					'api.projects.discussions.replies.getMany'
				]
			}
		}
	}
];
