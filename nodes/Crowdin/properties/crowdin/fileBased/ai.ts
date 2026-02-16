// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, normalizeFieldBody } from '../../../utils/preSend';

export const aiProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'ai'
				]
			}
		},
		options: [
			{
				name: 'List AI Snippets',
				value: 'api.ai.prompts.snippets.getMany',
				action: 'List AI Snippets',
				description: '**Required scopes:** `ai.prompt` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/settings/snippets'
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
				name: 'Add AI Snippet',
				value: 'api.ai.prompts.snippets.post',
				action: 'Add AI Snippet',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/settings/snippets'
					}
				}
			},
			{
				name: 'Get AI Snippet',
				value: 'api.ai.prompts.snippets.get',
				action: 'Get AI Snippet',
				description: '**Required scopes:** `ai.prompt` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/settings/snippets/{{$parameter["aiSnippetId"]}}'
					}
				}
			},
			{
				name: 'Delete AI Snippet',
				value: 'api.ai.prompts.snippets.delete',
				action: 'Delete AI Snippet',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/ai/settings/snippets/{{$parameter["aiSnippetId"]}}'
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
				name: 'Edit AI Snippet',
				value: 'api.ai.prompts.snippets.patch',
				action: 'Edit AI Snippet',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}/ai/settings/snippets/{{$parameter["aiSnippetId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'AI File Translations',
				value: 'api.users.ai.file-translations.post',
				action: 'AI File Translations',
				description: '**Required scopes:** `ai.translate` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/file-translations'
					}
				}
			},
			{
				name: 'Get File Translations Status',
				value: 'api.users.ai.file-translations.get',
				action: 'Get File Translations Status',
				description: '**Required scopes:** `ai.translate` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/file-translations/{{$parameter["jobIdentifier"]}}'
					}
				}
			},
			{
				name: 'Cancel File Translations',
				value: 'api.users.ai.file-translations.delete',
				action: 'Cancel File Translations',
				description: '**Required scopes:** `ai.translate` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/ai/file-translations/{{$parameter["jobIdentifier"]}}'
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
				name: 'Download Translated File',
				value: 'api.users.ai.file-translations.download',
				action: 'Download Translated File',
				description: '**Required scopes:** `ai.translate` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/file-translations/{{$parameter["jobIdentifier"]}}/download'
					}
				}
			},
			{
				name: 'Download Translated File Strings',
				value: 'api.users.ai.file-translations.download-strings',
				action: 'Download Translated File Strings',
				description: '**Required scopes:** `ai.translate` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/file-translations/{{$parameter["jobIdentifier"]}}/translations'
					}
				}
			},
			{
				name: 'Clone AI Prompt',
				value: 'api.users.ai.prompts.clones.post',
				action: 'Clone AI Prompt',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/prompts/{{$parameter["aiPromptId"]}}/clones'
					}
				}
			},
			{
				name: 'List AI Prompts',
				value: 'api.ai.prompts.getMany',
				action: 'List AI Prompts',
				description: '**Required scopes:** `ai.prompt` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/prompts'
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
				name: 'Add AI Prompt',
				value: 'api.users.ai.prompts.post',
				action: 'Add AI Prompt',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/prompts'
					}
				}
			},
			{
				name: 'Get AI Prompt',
				value: 'api.users.ai.prompts.get',
				action: 'Get AI Prompt',
				description: '**Required scopes:** `ai.prompt` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/prompts/{{$parameter["aiPromptId"]}}'
					}
				}
			},
			{
				name: 'Delete AI Prompt',
				value: 'api.users.ai.prompts.delete',
				action: 'Delete AI Prompt',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/ai/prompts/{{$parameter["aiPromptId"]}}'
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
				name: 'Edit AI Prompt',
				value: 'api.users.ai.prompts.patch',
				action: 'Edit AI Prompt',
				description: '**Required scopes:** `ai.prompt` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}/ai/prompts/{{$parameter["aiPromptId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List AI Provider Models',
				value: 'api.ai.providers.models.crowdin.getMany',
				action: 'List AI Provider Models',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/models'
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data'
								}
							}
						]
					}
				}
			},
			{
				name: 'List AI Providers',
				value: 'api.ai.providers.getMany',
				action: 'List AI Providers',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/providers'
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
				name: 'Add AI Provider',
				value: 'api.users.ai.providers.post',
				action: 'Add AI Provider',
				description: '**Required scopes:** `ai.provider` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/providers'
					}
				}
			},
			{
				name: 'Get AI Provider',
				value: 'api.users.ai.providers.get',
				action: 'Get AI Provider',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}'
					}
				}
			},
			{
				name: 'Delete AI Provider',
				value: 'api.users.ai.providers.delete',
				action: 'Delete AI Provider',
				description: '**Required scopes:** `ai.provider` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}'
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
				name: 'Edit AI Provider',
				value: 'api.users.ai.providers.patch',
				action: 'Edit AI Provider',
				description: '**Required scopes:** `ai.provider` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List AI Provider Models',
				value: 'api.ai.providers.models.getMany',
				action: 'List AI Provider Models',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}/models'
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data'
								}
							}
						]
					}
				}
			},
			{
				name: 'List Supported AI Provider Models',
				value: 'api.ai.providers.supported-models.crowdin.getMany',
				action: 'List Supported AI Provider Models',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/supported-models'
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
				name: 'Generate AI Report',
				value: 'api.users.ai.reports.post',
				action: 'Generate AI Report',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/reports'
					}
				}
			},
			{
				name: 'Check AI Report Generation Status',
				value: 'api.users.ai.reports.get',
				action: 'Check AI Report Generation Status',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/reports/{{$parameter["aiReportId"]}}'
					}
				}
			},
			{
				name: 'Download AI Report',
				value: 'api.users.ai.reports.download.download',
				action: 'Download AI Report',
				description: '**Required scopes:** `ai.provider` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/reports/{{$parameter["aiReportId"]}}/download'
					}
				}
			},
			{
				name: 'Get AI Settings',
				value: 'api.users.ai.settings.get',
				action: 'Get AI Settings',
				description: '**Required scopes:** `ai` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/settings'
					}
				}
			},
			{
				name: 'AI Translate Strings',
				value: 'api.users.ai.translate.strings.post',
				action: 'AI Translate Strings',
				description: '**Required scopes:** `ai.translate` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/translate'
					}
				}
			},
			{
				name: 'Get Project AI Settings',
				value: 'api.projects.ai.settings.get',
				action: 'Get Project AI Settings',
				description: '**Required scopes:** `project` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/ai/settings'
					}
				}
			}
		],
		default: 'api.ai.prompts.snippets.getMany'
	},
	{
		displayName: 'GET /users/{userId}/ai/settings/snippets',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/settings/snippets',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/settings/snippets/{aiSnippetId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/ai/settings/snippets/{aiSnippetId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /users/{userId}/ai/settings/snippets/{aiSnippetId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.patch'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/file-translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/file-translations/{jobIdentifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/ai/file-translations/{jobIdentifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/file-translations/{jobIdentifier}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.download'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/file-translations/{jobIdentifier}/translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.download-strings'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/prompts/{aiPromptId}/clones',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.clones.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/prompts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/prompts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/prompts/{aiPromptId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/ai/prompts/{aiPromptId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /users/{userId}/ai/prompts/{aiPromptId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/providers/models',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.models.crowdin.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/providers',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/providers',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/providers/{aiProviderId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/ai/providers/{aiProviderId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /users/{userId}/ai/providers/{aiProviderId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/providers/{aiProviderId}/models',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.models.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/providers/supported-models',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/reports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/reports/{aiReportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/reports/{aiReportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'GET /users/{userId}/ai/settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.settings.get'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/translate',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/ai/settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.projects.ai.settings.get'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.getMany'
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Description',
		required: true,
		name: 'description',
		type: 'string',
		default: '',
		description: 'The description must be unique and must be between 3 and 255 characters.',
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
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.post'
				]
			}
		},
		placeholder: 'Product description'
	},
	{
		displayName: 'Placeholder',
		required: true,
		name: 'placeholder',
		type: 'string',
		default: '',
		description: 'The placeholder must be unique and must start with `%custom:` and end with `%`. Allowed characters: `a-z`, `A-Z`, `0-9`, `-`. The full length must not exceed 255 characters.',
		routing: {
			send: {
				property: 'placeholder',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.post'
				]
			}
		},
		placeholder: '%custom:productDescription%'
	},
	{
		displayName: 'Value',
		required: true,
		name: 'value',
		type: 'string',
		default: '',
		description: 'The text that will be utilized in the prompt. The value must not exceed 4000 characters.',
		routing: {
			send: {
				property: 'value',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.post'
				]
			}
		},
		placeholder: 'The product is the professional consulting service that transform challenges into opportunities.'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Snippet Id',
		name: 'aiSnippetId',
		required: true,
		description: 'AI Snippet identifier. Get via [List AI Snippets](#operation/api.ai.prompts.snippets.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiSnippets'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Snippet Id',
		name: 'aiSnippetId',
		required: true,
		description: 'AI Snippet identifier. Get via [List AI Snippets](#operation/api.ai.prompts.snippets.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiSnippets'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Snippet Id',
		name: 'aiSnippetId',
		required: true,
		description: 'AI Snippet identifier. Get via [List AI Snippets](#operation/api.ai.prompts.snippets.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiSnippets'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage Identifier of the file to translate. Get via [List Storages](#operation/api.storages.getMany)',
		routing: {
			send: {
				property: 'storageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Source Language Id',
		name: 'sourceLanguageId',
		type: 'options',
		default: '',
		description: 'Source Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany). If not specified, auto-detection will be used.',
		routing: {
			send: {
				property: 'sourceLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Target Language Id',
		required: true,
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
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Values available:\n- empty value or \'auto\' — Try to detect file type by extension or MIME type\n- \'android\' — Android (*.xml)\n- \'macosx\' — Mac OS X / iOS (*.strings)\n- \'resx\' — .NET, Windows Phone (*.resx)\n- \'properties\' — Java (*.properties)\n- \'gettext\' — GNU GetText (*.po, *.pot)\n- \'yaml\' — Ruby On Rails (*.yaml, *.yml)\n- \'php\' — Hypertext Preprocessor (*.php)\n- \'json\' — Generic JSON (*.json)\n- \'xml\' — Generic XML (*.xml)\n- \'ini\' — Generic INI (*.ini)\n- \'rc\' — Windows Resources (*.rc)\n- \'resw\' — Windows 8 Metro (*.resw)\n- \'resjson\' — Windows 8 Metro (*.resjson)\n- \'qtts\' — Nokia Qt (*.ts)\n- \'joomla\' — Joomla localizable resources (*.ini)\n- \'chrome\' — Google Chrome Extension (*.json)\n- \'dtd\' — Mozilla DTD (*.dtd)\n- \'dklang\' — Delphi DKLang (*.dklang)\n- \'flex\' — Flex (*.properties)\n- \'nsh\' — NSIS Installer Resources (*.nsh)\n- \'wxl\' — WiX Installer (*.wxl)\n- \'xliff\' — XLIFF (*.xliff, *.xlf)\n- \'xliff_two\' — XLIFF 2.0 (*.xliff, *.xlf)\n- \'html\' — HTML (*.html, *.htm, *.xhtml, *.xhtm, *.xht, *.hbs, *.liquid)\n- \'haml\' — Haml (*.haml)\n- \'txt\' — Plain Text (*.txt)\n- \'csv\' — Comma Separated Values (*.csv)\n- \'md\' — Markdown (*.md, *.text, *.markdown...)\n- \'flsnp\' — MadCap Flare (*.flnsp, .flpgpl .fltoc)\n- \'fm_html\' — Jekyll HTML (*.html)\n- \'fm_md\' — Jekyll Markdown (*.md)\n- \'mediawiki\' — MediaWiki (*.wiki, *.wikitext, *.mediawiki)\n- \'docx\' — Microsoft Office, OpenOffice.org Documents, Adobe InDesign, Adobe FrameMaker(*.docx, *.dotx, *.docm, *.dotm, *.xlsx, *.xltx, *.xlsm, *.xltm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm, *.odt, *.ods, *.odg, *.odp, *.imdl, *.mif)\n- \'xlsx\' — Microsoft Excel (*.xlsx)\n- \'sbv\' — Youtube .sbv (*.sbv)\n- \'properties_play\' — Play Framework\n- \'properties_xml\' — Java Application (*.xml)\n- \'maxthon\' — Maxthon Browser (*.ini)\n- \'go_json\' — Go (*.gotext.json)\n- \'dita\' — DITA Document (*.dita, *.ditamap)\n- \'mif\' — Adobe FrameMaker (*.mif)\n- \'idml\' — Adobe InDesign (*.idml)\n- \'stringsdict\' — iOS (*.stringsdict)\n- \'plist\' — Mac OS property list (*.plist)\n- \'vtt\' — Video Subtitling and WebVTT (*.vtt)\n- \'vdf\' — Steamworks Localization Valve Data File (*.vdf)\n- \'srt\' — SubRip .srt (*.srt)\n- \'stf\' — Salesforce (*.stf)\n- \'toml\' — Toml (*.toml)\n- \'contentful_rt\' — Contentful (*.json)\n- \'svg\' — SVG (*.svg)\n- \'js\' — JavaScript (*.js)\n- \'coffee\' — CoffeeScript (*.coffee)\n- \'nestjs_i18n\' - NestJS i18n\n- \'loc\' — LOC (*.loc)\n\n__Note__: Use `docx` type to import each cell as a separate source string for XLSX file',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'auto',
				value: 'auto'
			},
			{
				name: 'android',
				value: 'android'
			},
			{
				name: 'macosx',
				value: 'macosx'
			},
			{
				name: 'resx',
				value: 'resx'
			},
			{
				name: 'properties',
				value: 'properties'
			},
			{
				name: 'gettext',
				value: 'gettext'
			},
			{
				name: 'yaml',
				value: 'yaml'
			},
			{
				name: 'php',
				value: 'php'
			},
			{
				name: 'json',
				value: 'json'
			},
			{
				name: 'xml',
				value: 'xml'
			},
			{
				name: 'ini',
				value: 'ini'
			},
			{
				name: 'rc',
				value: 'rc'
			},
			{
				name: 'resw',
				value: 'resw'
			},
			{
				name: 'resjson',
				value: 'resjson'
			},
			{
				name: 'qtts',
				value: 'qtts'
			},
			{
				name: 'joomla',
				value: 'joomla'
			},
			{
				name: 'chrome',
				value: 'chrome'
			},
			{
				name: 'dtd',
				value: 'dtd'
			},
			{
				name: 'dklang',
				value: 'dklang'
			},
			{
				name: 'flex',
				value: 'flex'
			},
			{
				name: 'nsh',
				value: 'nsh'
			},
			{
				name: 'wxl',
				value: 'wxl'
			},
			{
				name: 'xliff',
				value: 'xliff'
			},
			{
				name: 'xliff_two',
				value: 'xliff_two'
			},
			{
				name: 'html',
				value: 'html'
			},
			{
				name: 'haml',
				value: 'haml'
			},
			{
				name: 'txt',
				value: 'txt'
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'md',
				value: 'md'
			},
			{
				name: 'mdx_v1',
				value: 'mdx_v1'
			},
			{
				name: 'mdx_v2',
				value: 'mdx_v2'
			},
			{
				name: 'flsnp',
				value: 'flsnp'
			},
			{
				name: 'fm_html',
				value: 'fm_html'
			},
			{
				name: 'fm_md',
				value: 'fm_md'
			},
			{
				name: 'mediawiki',
				value: 'mediawiki'
			},
			{
				name: 'docx',
				value: 'docx'
			},
			{
				name: 'xlsx',
				value: 'xlsx'
			},
			{
				name: 'sbv',
				value: 'sbv'
			},
			{
				name: 'properties_play',
				value: 'properties_play'
			},
			{
				name: 'properties_xml',
				value: 'properties_xml'
			},
			{
				name: 'maxthon',
				value: 'maxthon'
			},
			{
				name: 'go_json',
				value: 'go_json'
			},
			{
				name: 'dita',
				value: 'dita'
			},
			{
				name: 'idml',
				value: 'idml'
			},
			{
				name: 'mif',
				value: 'mif'
			},
			{
				name: 'stringsdict',
				value: 'stringsdict'
			},
			{
				name: 'plist',
				value: 'plist'
			},
			{
				name: 'vtt',
				value: 'vtt'
			},
			{
				name: 'vdf',
				value: 'vdf'
			},
			{
				name: 'srt',
				value: 'srt'
			},
			{
				name: 'stf',
				value: 'stf'
			},
			{
				name: 'toml',
				value: 'toml'
			},
			{
				name: 'contentful_rt',
				value: 'contentful_rt'
			},
			{
				name: 'svg',
				value: 'svg'
			},
			{
				name: 'js',
				value: 'js'
			},
			{
				name: 'coffee',
				value: 'coffee'
			},
			{
				name: 'ts',
				value: 'ts'
			},
			{
				name: 'i18next_json',
				value: 'i18next_json'
			},
			{
				name: 'xaml',
				value: 'xaml'
			},
			{
				name: 'arb',
				value: 'arb'
			},
			{
				name: 'adoc',
				value: 'adoc'
			},
			{
				name: 'fbt',
				value: 'fbt'
			},
			{
				name: 'webxml',
				value: 'webxml'
			},
			{
				name: 'nestjs_i18n',
				value: 'nestjs_i18n'
			},
			{
				name: 'loc',
				value: 'loc'
			}
		],
		routing: {
			send: {
				property: 'type',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Parser Version',
		name: 'parserVersion',
		type: 'number',
		default: 0,
		description: 'Using latest parser version by default.\n\n__Note:__ Must be used together with `type`',
		routing: {
			send: {
				property: 'parserVersion',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		placeholder: '1'
	},
	{
		displayName: 'Tm Ids',
		name: 'tmIds',
		type: 'multiOptions',
		default: [],
		description: 'Array of Translation Memory IDs. Get via [List TMs](#operation/api.tms.getMany)',
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
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
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
		description: 'Array of Glossary Identifiers. Get via [List Glossaries](#operation/api.glossaries.getMany)',
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
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossariesMulti'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		type: 'options',
		default: '',
		description: 'Pre-Translation Prompt Identifier. Get via [List Prompts](#operation/api.ai.prompts.getMany)\n\n__Note:__ Can\'t be used with `aiProviderId` or `aiModelId` in same request',
		routing: {
			send: {
				property: 'aiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		type: 'options',
		default: '',
		description: 'AI Provider Identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)\n\n__Note:__ Must be used together with `aiModelId`. Can\'t be used with `aiPromptId` in same request',
		routing: {
			send: {
				property: 'aiProviderId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Ai Model Id',
		name: 'aiModelId',
		type: 'options',
		default: '',
		description: 'AI Model ID. Get via [List AI Provider Models](#operation/api.ai.providers.models.getMany)\n\n__Note:__ Must be used together with `aiProviderId`. Can\'t be used with `aiPromptId` in same request',
		routing: {
			send: {
				property: 'aiModelId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviderModels',
			loadOptionsDependsOn: [
				'aiProviderId'
			]
		}
	},
	{
		displayName: 'Instructions',
		name: 'instructions',
		type: 'fixedCollection',
		default: {},
		description: 'Custom instructions for translation',
		routing: {
			send: {
				property: 'instructions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
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
		displayName: 'Attachment Ids',
		name: 'attachmentIds',
		type: 'fixedCollection',
		default: {},
		description: 'Storage IDs of images to pass to AI as attachments (max 10). Get via [List Storages](#operation/api.storages.getMany)\n\nOnly image files are allowed:\n * jpeg\n * jpg\n * png\n * gif\n * webp',
		routing: {
			send: {
				property: 'attachmentIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.post'
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
						type: 'number',
						default: 0,
						placeholder: '0'
					}
				]
			}
		]
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'AI File Translations job identifier',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.get'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'AI File Translations job identifier',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.delete'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'AI File Translations job identifier',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.download'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.download-strings'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'AI File Translations job identifier',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.file-translations.download-strings'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.clones.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		required: true,
		description: 'AI Prompt identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.clones.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'AI prompt name',
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
					'ai'
				],
				operation: [
					'api.users.ai.prompts.clones.post'
				]
			}
		},
		placeholder: 'Pre-translate prompt'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		description: 'Allows you to filter the prompts available for the specific project. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Action',
		name: 'action',
		description: 'Allows you to filter the prompts available for the specific action',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'pre_translate',
				value: 'pre_translate'
			},
			{
				name: 'assist',
				value: 'assist'
			},
			{
				name: 'qa_check',
				value: 'qa_check'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'action',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.prompts.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.prompts.getMany'
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'AI prompt name',
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
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		},
		placeholder: 'Pre-translate prompt'
	},
	{
		displayName: 'Action',
		required: true,
		name: 'action',
		type: 'options',
		default: 'pre_translate',
		description: 'AI prompt action',
		options: [
			{
				name: 'pre_translate',
				value: 'pre_translate'
			},
			{
				name: 'assist',
				value: 'assist'
			},
			{
				name: 'qa_check',
				value: 'qa_check'
			}
		],
		routing: {
			send: {
				property: 'action',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		type: 'options',
		default: '',
		description: 'AI Provider identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)',
		routing: {
			send: {
				property: 'aiProviderId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Ai Model Id',
		name: 'aiModelId',
		type: 'options',
		default: '',
		description: 'Ai Model id. Get via [List AI Provider Models](#operation/api.ai.providers.models.getMany)',
		routing: {
			send: {
				property: 'aiModelId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviderModels',
			loadOptionsDependsOn: [
				'aiProviderId'
			]
		}
	},
	{
		displayName: 'Enabled Project Ids',
		name: 'enabledProjectIds',
		type: 'multiOptions',
		default: [],
		description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'enabledProjectIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectsMulti'
		}
	},
	{
		displayName: 'Config',
		name: 'config',
		required: true,
		description: 'AI prompt configuration',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.post'
				]
			}
		},
		options: [
			{
				displayName: 'Basic mode (pre-translate action)',
				name: '_basicModePreTranslateAction',
				values: [
					{
						displayName: 'Mode',
						name: 'mode',
						type: 'options',
						default: 'basic',
						description: undefined,
						required: true,
						options: [
							{
								name: 'basic',
								value: 'basic'
							}
						]
					},
					{
						displayName: 'Snippets',
						name: 'snippets',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getAiSnippetsByPlaceholderMulti'
						},
						default: [],
						description: 'Array of snippets. Get via [List AI Snippets](#operation/api.ai.snippets.getMany)'
					},
					{
						displayName: 'Other Language Translations',
						name: 'otherLanguageTranslations',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Is Enabled',
										name: 'isEnabled',
										type: 'boolean',
										default: true,
										description: undefined
									},
									{
										displayName: 'Language Ids',
										name: 'languageIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getLanguagesMulti'
										},
										default: [],
										description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)'
									}
								]
							}
						]
					},
					{
						displayName: 'Glossary Terms',
						name: 'glossaryTerms',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Tm Suggestions',
						name: 'tmSuggestions',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'File Context',
						name: 'fileContext',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Generate File Summary',
						name: 'generateFileSummary',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Screenshots',
						name: 'screenshots',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Public Project Description',
						name: 'publicProjectDescription',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Siblings Strings',
						name: 'siblingsStrings',
						type: 'boolean',
						default: false,
						description: undefined
					}
				]
			},
			{
				displayName: 'Basic mode (assist action)',
				name: '_basicModeAssistAction',
				values: [
					{
						displayName: 'Mode',
						name: 'mode',
						type: 'options',
						default: 'basic',
						description: undefined,
						required: true,
						options: [
							{
								name: 'basic',
								value: 'basic'
							}
						]
					},
					{
						displayName: 'Snippets',
						name: 'snippets',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getAiSnippetsByPlaceholderMulti'
						},
						default: [],
						description: 'Array of snippets. Get via [List AI Snippets](#operation/api.ai.snippets.getMany)'
					},
					{
						displayName: 'Other Language Translations',
						name: 'otherLanguageTranslations',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Is Enabled',
										name: 'isEnabled',
										type: 'boolean',
										default: true,
										description: undefined
									},
									{
										displayName: 'Language Ids',
										name: 'languageIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getLanguagesMulti'
										},
										default: [],
										description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)'
									}
								]
							}
						]
					},
					{
						displayName: 'Glossary Terms',
						name: 'glossaryTerms',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Tm Suggestions',
						name: 'tmSuggestions',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'File Context',
						name: 'fileContext',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Generate File Summary',
						name: 'generateFileSummary',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Screenshots',
						name: 'screenshots',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'File Content',
						name: 'fileContent',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Public Project Description',
						name: 'publicProjectDescription',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Siblings Strings',
						name: 'siblingsStrings',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Filtered Strings',
						name: 'filteredStrings',
						type: 'boolean',
						default: false,
						description: undefined
					}
				]
			},
			{
				displayName: 'Basic mode (QA check action)',
				name: '_basicModeQaCheckAction',
				values: [
					{
						displayName: 'Mode',
						name: 'mode',
						type: 'options',
						default: 'basic',
						description: undefined,
						required: true,
						options: [
							{
								name: 'basic',
								value: 'basic'
							}
						]
					},
					{
						displayName: 'Evaluation Steps',
						name: 'evaluationSteps',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
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
										default: '',
										description: undefined
									}
								]
							}
						],
						required: true
					},
					{
						displayName: 'Snippets',
						name: 'snippets',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getAiSnippetsByPlaceholderMulti'
						},
						default: [],
						description: undefined
					},
					{
						displayName: 'Glossary Terms',
						name: 'glossaryTerms',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Tm Suggestions',
						name: 'tmSuggestions',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'File Context',
						name: 'fileContext',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Screenshots',
						name: 'screenshots',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Public Project Description',
						name: 'publicProjectDescription',
						type: 'boolean',
						default: false,
						description: undefined
					}
				]
			},
			{
				displayName: 'Advanced mode',
				name: '_advancedMode',
				values: [
					{
						displayName: 'Mode',
						name: 'mode',
						type: 'options',
						default: 'advanced',
						description: undefined,
						required: true,
						options: [
							{
								name: 'advanced',
								value: 'advanced'
							}
						]
					},
					{
						displayName: 'Generate File Summary',
						name: 'generateFileSummary',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Glossary Terms',
						name: 'glossaryTerms',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Tm Suggestions',
						name: 'tmSuggestions',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Screenshots',
						name: 'screenshots',
						type: 'boolean',
						default: false,
						description: undefined
					},
					{
						displayName: 'Prompt',
						name: 'prompt',
						type: 'string',
						default: '',
						description: undefined,
						required: true
					},
					{
						displayName: 'File Content',
						name: 'fileContent',
						type: 'boolean',
						default: false,
						description: '__Note:__ Available only for Assist action'
					},
					{
						displayName: 'Other Language Translations',
						name: 'otherLanguageTranslations',
						type: 'fixedCollection',
						default: {},
						description: '__Note:__ Not available for QA check action',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Is Enabled',
										name: 'isEnabled',
										type: 'boolean',
										default: true,
										description: undefined
									},
									{
										displayName: 'Language Ids',
										name: 'languageIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getLanguagesMulti'
										},
										default: [],
										description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)'
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'External mode',
				name: '_externalMode',
				values: [
					{
						displayName: 'Mode',
						name: 'mode',
						type: 'options',
						default: 'external',
						description: undefined,
						required: true,
						options: [
							{
								name: 'external',
								value: 'external'
							}
						]
					},
					{
						displayName: 'Identifier',
						name: 'identifier',
						type: 'string',
						default: '',
						description: 'Application identifier. Get via [List Applications](#operation/api.applications.installations.getMany)',
						required: true
					},
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'Module key',
						required: true
					},
					{
						displayName: 'Options',
						name: 'json:options',
						type: 'json',
						default: '{}',
						description: 'Options to compile the prompt. Get from configurator'
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'config',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		required: true,
		description: 'AI Prompt identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		required: true,
		description: 'AI Prompt identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		required: true,
		description: 'AI Prompt identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.prompts.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.models.crowdin.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.providers.getMany'
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
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'AI provider name',
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
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		},
		placeholder: 'OpenAI'
	},
	{
		displayName: 'Type',
		required: true,
		name: 'type',
		type: 'options',
		default: 'open_ai',
		description: 'AI provider type',
		options: [
			{
				name: 'open_ai',
				value: 'open_ai'
			},
			{
				name: 'azure_open_ai',
				value: 'azure_open_ai'
			},
			{
				name: 'google_gemini',
				value: 'google_gemini'
			},
			{
				name: 'google_gemini_ai_studio',
				value: 'google_gemini_ai_studio'
			},
			{
				name: 'mistral_ai',
				value: 'mistral_ai'
			},
			{
				name: 'anthropic',
				value: 'anthropic'
			},
			{
				name: 'x_ai',
				value: 'x_ai'
			},
			{
				name: 'watsonx',
				value: 'watsonx'
			},
			{
				name: 'deepseek',
				value: 'deepseek'
			},
			{
				name: 'custom_ai',
				value: 'custom_ai'
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
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		}
	},
	{
		displayName: 'Credentials',
		name: 'credentials',
		description: 'User’s own AI provider credentials.\n\n__Note__: Use only if `useSystemCredentials` is set to false.',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		},
		options: [
			{
				displayName: 'OpenAI',
				name: '_openAi',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Azure OpenAI',
				name: '_azureOpenAi',
				values: [
					{
						displayName: 'Resource Name',
						name: 'resourceName',
						type: 'string',
						default: '',
						required: true
					},
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					},
					{
						displayName: 'Deployment Name',
						name: 'deploymentName',
						type: 'string',
						default: '',
						required: true
					},
					{
						displayName: 'Api Version',
						name: 'apiVersion',
						type: 'string',
						default: '',
						required: true
					}
				]
			},
			{
				displayName: 'Google Gemini (Vertex AI)',
				name: '_googleGeminiVertexAi',
				values: [
					{
						displayName: 'Project',
						name: 'project',
						type: 'string',
						default: '',
						required: true
					},
					{
						displayName: 'Region',
						name: 'region',
						type: 'string',
						default: '',
						required: true
					},
					{
						displayName: 'Service Account Key',
						name: 'json:serviceAccountKey',
						type: 'json',
						default: '{}',
						required: true
					}
				]
			},
			{
				displayName: 'Google Gemini (AI Studio)',
				name: '_googleGeminiAiStudio',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						description: 'API key from Google AI Studio',
						required: true,
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Mistral AI',
				name: '_mistralAi',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Anthropic',
				name: '_anthropic',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'xAi',
				name: '_xAi',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'IBM Watsonx',
				name: '_ibmWatsonx',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					},
					{
						displayName: 'Project Id',
						name: 'projectId',
						type: 'string',
						default: '',
						required: true
					},
					{
						displayName: 'Region',
						name: 'region',
						type: 'string',
						default: '',
						required: true
					}
				]
			},
			{
				displayName: 'DeepSeek',
				name: '_deepSeek',
				values: [
					{
						displayName: 'Api Key',
						name: 'apiKey',
						type: 'string',
						default: '',
						required: true,
						typeOptions: {
							password: true
						}
					}
				]
			},
			{
				displayName: 'Custom AI',
				name: '_customAi',
				values: [
					{
						displayName: 'Identifier',
						name: 'identifier',
						type: 'string',
						default: '',
						description: 'Crowdin App identifier',
						required: true
					},
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'AI Provider module key',
						required: true
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'credentials',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Is Enabled',
		name: 'isEnabled',
		type: 'boolean',
		default: true,
		description: 'Defines whether to AI provider is enabled.',
		routing: {
			send: {
				property: 'isEnabled',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		}
	},
	{
		displayName: 'Use System Credentials',
		name: 'useSystemCredentials',
		type: 'boolean',
		default: false,
		description: 'Enables the paid service AI provider via Crowdin.\n\n__Note__: Set to true if `credentials` is not provided. Not supported for `custom_ai`, `x_ai`, `watsonx`, `deepseek` and `google_gemini_ai_studio` types.',
		routing: {
			send: {
				property: 'useSystemCredentials',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.post'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		required: true,
		description: 'AI Provider identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		required: true,
		description: 'AI Provider identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		required: true,
		description: 'AI Provider identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.models.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		required: true,
		description: 'AI Provider identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.models.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
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
		displayName: 'Provider Type',
		name: 'providerType',
		description: 'Filter by provider type',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'providerType',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
				]
			}
		},
		placeholder: 'open_ai'
	},
	{
		displayName: 'Enabled',
		name: 'enabled',
		description: 'Filter by enabled providers',
		default: true,
		type: 'boolean',
		routing: {
			send: {
				type: 'query',
				property: 'enabled',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
				]
			}
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
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
				]
			}
		},
		placeholder: 'knowledgeCutoff desc'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Body',
		name: '_body',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.post'
				]
			}
		},
		options: [
			{
				displayName: 'Tokens Usage Raw Data',
				name: '_tokensUsageRawData',
				values: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 'tokens-usage-raw-data',
						description: 'tokens-usage-raw-data',
						required: true,
						options: [
							{
								name: 'tokens-usage-raw-data',
								value: 'tokens-usage-raw-data'
							}
						],
						placeholder: 'tokens-usage-raw-data'
					},
					{
						displayName: 'Schema',
						name: 'schema',
						type: 'fixedCollection',
						default: {},
						description: 'Tokens Usage Raw Data Report schema',
						options: [
							{
								displayName: 'General',
								name: '_aiReportTokensRawUsageGeneral',
								values: [
									{
										displayName: 'Date From',
										name: 'dateTime:dateFrom',
										type: 'dateTime',
										default: '',
										description: 'Report date from in UTC, ISO 8601',
										placeholder: '2024-01-23T07:00:14+00:00',
										required: true
									},
									{
										displayName: 'Date To',
										name: 'dateTime:dateTo',
										type: 'dateTime',
										default: '',
										description: 'Report date to in UTC, ISO 8601',
										placeholder: '2024-09-27T07:00:14+00:00',
										required: true
									},
									{
										displayName: 'Format',
										name: 'format',
										type: 'options',
										default: '',
										description: 'Defines report target format',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'json',
												value: 'json'
											},
											{
												name: 'csv',
												value: 'csv'
											}
										],
										placeholder: 'json'
									},
									{
										displayName: 'Project Ids',
										name: 'projectIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getProjectsMulti'
										},
										default: [],
										description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)'
									},
									{
										displayName: 'Prompt Ids',
										name: 'promptIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getAiPromptsMulti'
										},
										default: [],
										description: 'Array of AI Prompt ids. Get via [List TMs](#operation/api.ai.prompts.getMany)'
									},
									{
										displayName: 'User Ids',
										name: 'userIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getUsersMulti'
										},
										default: [],
										description: 'Array of user ids'
									}
								]
							}
						],
						required: true
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeRootBody
				],
				property: '_body',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Report Id',
		name: 'aiReportId',
		required: true,
		description: 'AI Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.get'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Ai Report Id',
		name: 'aiReportId',
		required: true,
		description: 'AI Report Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.reports.download.download'
				]
			}
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		required: true,
		description: 'User Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Strings',
		required: true,
		name: 'strings',
		type: 'fixedCollection',
		default: {},
		description: 'Array of strings to translate (max 500 strings, each max 10000 characters)',
		routing: {
			send: {
				property: 'strings',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
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
		displayName: 'Source Language Id',
		name: 'sourceLanguageId',
		type: 'options',
		default: '',
		description: 'Source Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany). If not specified, auto-detection will be used.',
		routing: {
			send: {
				property: 'sourceLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Target Language Id',
		required: true,
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
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Tm Ids',
		name: 'tmIds',
		type: 'multiOptions',
		default: [],
		description: 'Array of Translation Memory Identifiers. Get via [List TMs](#operation/api.tms.getMany)',
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
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
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
		description: 'Array of Glossary Identifiers. Get via [List Glossaries](#operation/api.glossaries.getMany)',
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
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossariesMulti'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		type: 'options',
		default: '',
		description: 'Pre-Translation Prompt Identifier. Get via [List Prompts](#operation/api.ai.prompts.getMany)\n\n__Note:__ Can\'t be used with `aiProviderId` or `aiModelId` in same request',
		routing: {
			send: {
				property: 'aiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Ai Provider Id',
		name: 'aiProviderId',
		type: 'options',
		default: '',
		description: 'AI Provider Identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)\n\n__Note:__ Must be used together with `aiModelId`. Can\'t be used with `aiPromptId` in same request',
		routing: {
			send: {
				property: 'aiProviderId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Ai Model Id',
		name: 'aiModelId',
		type: 'options',
		default: '',
		description: 'AI Model ID. Get via [List AI Provider Models](#operation/api.ai.providers.models.getMany)\n\n__Note:__ Must be used together with `aiProviderId`. Can\'t be used with `aiPromptId` in same request',
		routing: {
			send: {
				property: 'aiModelId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviderModels',
			loadOptionsDependsOn: [
				'aiProviderId'
			]
		}
	},
	{
		displayName: 'Instructions',
		name: 'instructions',
		type: 'fixedCollection',
		default: {},
		description: 'Custom instructions for translation',
		routing: {
			send: {
				property: 'instructions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
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
		displayName: 'Attachment Ids',
		name: 'attachmentIds',
		type: 'multiOptions',
		default: [],
		description: 'Storage IDs of images to pass to AI as attachments (max 10). Get via [List Storages](#operation/api.storages.getMany)\n\nOnly image files are allowed:\n * jpeg\n * jpg\n * png\n * gif\n * webp',
		routing: {
			send: {
				property: 'attachmentIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.translate.strings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStoragesMulti'
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
					'ai'
				],
				operation: [
					'api.projects.ai.settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'The description must be unique and must be between 3 and 255 characters.',
				placeholder: 'Product description'
			},
			{
				displayName: 'Placeholder',
				name: 'placeholder',
				type: 'string',
				default: '',
				description: 'The placeholder must be unique and must start with `%custom:` and end with `%`. Allowed characters: `a-z`, `A-Z`, `0-9`, `-`. The full length must not exceed 255 characters.',
				placeholder: '%custom:productDescription%'
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				description: 'The text that will be utilized in the prompt. The value must not exceed 4000 characters.',
				placeholder: 'The product is the professional consulting service that transform challenges into opportunities.'
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
					'ai'
				],
				operation: [
					'api.users.ai.prompts.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'AI prompt name',
				placeholder: 'Pre-translate prompt'
			},
			{
				displayName: 'Action',
				name: 'action',
				type: 'options',
				default: '',
				description: 'AI prompt action',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'pre_translate',
						value: 'pre_translate'
					},
					{
						name: 'assist',
						value: 'assist'
					},
					{
						name: 'qa_check',
						value: 'qa_check'
					}
				]
			},
			{
				displayName: 'Ai Provider Id',
				name: 'aiProviderId',
				type: 'options',
				default: '',
				description: 'AI Provider identifier. Get via [List AI Providers](#operation/api.ai.providers.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getAiProviders'
				}
			},
			{
				displayName: 'Ai Model Id',
				name: 'aiModelId',
				type: 'options',
				default: '',
				description: 'Ai Model id. Get via [List AI Provider Models](#operation/api.ai.providers.models.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getAiProviderModels',
					loadOptionsDependsOn: [
						'aiProviderId'
					]
				}
			},
			{
				displayName: 'Enabled Project Ids',
				name: 'enabledProjectIds',
				type: 'multiOptions',
				default: [],
				description: 'Array of project ids. Get via [List Projects](#operation/api.projects.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getProjectsMulti'
				}
			},
			{
				displayName: 'Config',
				name: 'config',
				description: 'AI prompt configuration',
				default: {},
				type: 'fixedCollection',
				options: [
					{
						name: '_basicModePreTranslateAction',
						displayName: 'Basic mode (pre-translate action)',
						values: [
							{
								displayName: 'Mode',
								name: 'mode',
								type: 'options',
								default: 'basic',
								description: undefined,
								required: true,
								options: [
									{
										name: 'basic',
										value: 'basic'
									}
								]
							},
							{
								displayName: 'Snippets',
								name: 'snippets',
								type: 'multiOptions',
								typeOptions: {
									loadOptionsMethod: 'getAiSnippetsByPlaceholderMulti'
								},
								default: [],
								description: 'Array of snippets. Get via [List AI Snippets](#operation/api.ai.snippets.getMany)'
							},
							{
								displayName: 'Other Language Translations',
								name: 'otherLanguageTranslations',
								type: 'fixedCollection',
								default: {},
								description: undefined,
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Is Enabled',
												name: 'isEnabled',
												type: 'boolean',
												default: true,
												description: undefined
											},
											{
												displayName: 'Language Ids',
												name: 'languageIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getLanguagesMulti'
												},
												default: [],
												description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)'
											}
										]
									}
								]
							},
							{
								displayName: 'Glossary Terms',
								name: 'glossaryTerms',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Tm Suggestions',
								name: 'tmSuggestions',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'File Context',
								name: 'fileContext',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Generate File Summary',
								name: 'generateFileSummary',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Screenshots',
								name: 'screenshots',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Public Project Description',
								name: 'publicProjectDescription',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Siblings Strings',
								name: 'siblingsStrings',
								type: 'boolean',
								default: false,
								description: undefined
							}
						]
					},
					{
						name: '_basicModeAssistAction',
						displayName: 'Basic mode (assist action)',
						values: [
							{
								displayName: 'Mode',
								name: 'mode',
								type: 'options',
								default: 'basic',
								description: undefined,
								required: true,
								options: [
									{
										name: 'basic',
										value: 'basic'
									}
								]
							},
							{
								displayName: 'Snippets',
								name: 'snippets',
								type: 'multiOptions',
								typeOptions: {
									loadOptionsMethod: 'getAiSnippetsByPlaceholderMulti'
								},
								default: [],
								description: 'Array of snippets. Get via [List AI Snippets](#operation/api.ai.snippets.getMany)'
							},
							{
								displayName: 'Other Language Translations',
								name: 'otherLanguageTranslations',
								type: 'fixedCollection',
								default: {},
								description: undefined,
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Is Enabled',
												name: 'isEnabled',
												type: 'boolean',
												default: true,
												description: undefined
											},
											{
												displayName: 'Language Ids',
												name: 'languageIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getLanguagesMulti'
												},
												default: [],
												description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)'
											}
										]
									}
								]
							},
							{
								displayName: 'Glossary Terms',
								name: 'glossaryTerms',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Tm Suggestions',
								name: 'tmSuggestions',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'File Context',
								name: 'fileContext',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Generate File Summary',
								name: 'generateFileSummary',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Screenshots',
								name: 'screenshots',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'File Content',
								name: 'fileContent',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Public Project Description',
								name: 'publicProjectDescription',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Siblings Strings',
								name: 'siblingsStrings',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Filtered Strings',
								name: 'filteredStrings',
								type: 'boolean',
								default: false,
								description: undefined
							}
						]
					},
					{
						name: '_basicModeQaCheckAction',
						displayName: 'Basic mode (QA check action)',
						values: [
							{
								displayName: 'Mode',
								name: 'mode',
								type: 'options',
								default: 'basic',
								description: undefined,
								required: true,
								options: [
									{
										name: 'basic',
										value: 'basic'
									}
								]
							},
							{
								displayName: 'Evaluation Steps',
								name: 'evaluationSteps',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: undefined,
								placeholder: 'Add Item',
								options: [
									{
										name: 'items',
										displayName: 'Items',
										values: [
											{
												displayName: 'Value',
												name: '_value',
												type: 'string',
												default: '',
												description: undefined
											}
										]
									}
								],
								required: true
							},
							{
								displayName: 'Snippets',
								name: 'snippets',
								type: 'multiOptions',
								typeOptions: {
									loadOptionsMethod: 'getAiSnippetsByPlaceholderMulti'
								},
								default: [],
								description: undefined
							},
							{
								displayName: 'Glossary Terms',
								name: 'glossaryTerms',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Tm Suggestions',
								name: 'tmSuggestions',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'File Context',
								name: 'fileContext',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Screenshots',
								name: 'screenshots',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Public Project Description',
								name: 'publicProjectDescription',
								type: 'boolean',
								default: false,
								description: undefined
							}
						]
					},
					{
						name: '_advancedMode',
						displayName: 'Advanced mode',
						values: [
							{
								displayName: 'Mode',
								name: 'mode',
								type: 'options',
								default: 'advanced',
								description: undefined,
								required: true,
								options: [
									{
										name: 'advanced',
										value: 'advanced'
									}
								]
							},
							{
								displayName: 'Generate File Summary',
								name: 'generateFileSummary',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Glossary Terms',
								name: 'glossaryTerms',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Tm Suggestions',
								name: 'tmSuggestions',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Screenshots',
								name: 'screenshots',
								type: 'boolean',
								default: false,
								description: undefined
							},
							{
								displayName: 'Prompt',
								name: 'prompt',
								type: 'string',
								default: '',
								description: undefined,
								required: true
							},
							{
								displayName: 'File Content',
								name: 'fileContent',
								type: 'boolean',
								default: false,
								description: '__Note:__ Available only for Assist action'
							},
							{
								displayName: 'Other Language Translations',
								name: 'otherLanguageTranslations',
								type: 'fixedCollection',
								default: {},
								description: '__Note:__ Not available for QA check action',
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Is Enabled',
												name: 'isEnabled',
												type: 'boolean',
												default: true,
												description: undefined
											},
											{
												displayName: 'Language Ids',
												name: 'languageIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getLanguagesMulti'
												},
												default: [],
												description: 'Array of language ids. Get via [List Supported Languages](#operation/api.languages.getMany)'
											}
										]
									}
								]
							}
						]
					},
					{
						name: '_externalMode',
						displayName: 'External mode',
						values: [
							{
								displayName: 'Mode',
								name: 'mode',
								type: 'options',
								default: 'external',
								description: undefined,
								required: true,
								options: [
									{
										name: 'external',
										value: 'external'
									}
								]
							},
							{
								displayName: 'Identifier',
								name: 'identifier',
								type: 'string',
								default: '',
								description: 'Application identifier. Get via [List Applications](#operation/api.applications.installations.getMany)',
								required: true
							},
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								default: '',
								description: 'Module key',
								required: true
							},
							{
								displayName: 'Options',
								name: 'json:options',
								type: 'json',
								default: '{}',
								description: 'Options to compile the prompt. Get from configurator'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'ai'
				],
				operation: [
					'api.users.ai.providers.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'AI provider name',
				placeholder: 'OpenAI'
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'AI provider type',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'open_ai',
						value: 'open_ai'
					},
					{
						name: 'azure_open_ai',
						value: 'azure_open_ai'
					},
					{
						name: 'google_gemini',
						value: 'google_gemini'
					},
					{
						name: 'google_gemini_ai_studio',
						value: 'google_gemini_ai_studio'
					},
					{
						name: 'mistral_ai',
						value: 'mistral_ai'
					},
					{
						name: 'anthropic',
						value: 'anthropic'
					},
					{
						name: 'x_ai',
						value: 'x_ai'
					},
					{
						name: 'watsonx',
						value: 'watsonx'
					},
					{
						name: 'deepseek',
						value: 'deepseek'
					},
					{
						name: 'custom_ai',
						value: 'custom_ai'
					}
				]
			},
			{
				displayName: 'Credentials',
				name: 'credentials',
				description: 'User’s own AI provider credentials.\n\n__Note__: Use only if `useSystemCredentials` is set to false.',
				default: {},
				type: 'fixedCollection',
				options: [
					{
						name: '_openAi',
						displayName: 'OpenAI',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_azureOpenAi',
						displayName: 'Azure OpenAI',
						values: [
							{
								displayName: 'Resource Name',
								name: 'resourceName',
								type: 'string',
								default: '',
								required: true
							},
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							},
							{
								displayName: 'Deployment Name',
								name: 'deploymentName',
								type: 'string',
								default: '',
								required: true
							},
							{
								displayName: 'Api Version',
								name: 'apiVersion',
								type: 'string',
								default: '',
								required: true
							}
						]
					},
					{
						name: '_googleGeminiVertexAi',
						displayName: 'Google Gemini (Vertex AI)',
						values: [
							{
								displayName: 'Project',
								name: 'project',
								type: 'string',
								default: '',
								required: true
							},
							{
								displayName: 'Region',
								name: 'region',
								type: 'string',
								default: '',
								required: true
							},
							{
								displayName: 'Service Account Key',
								name: 'json:serviceAccountKey',
								type: 'json',
								default: '{}',
								required: true
							}
						]
					},
					{
						name: '_googleGeminiAiStudio',
						displayName: 'Google Gemini (AI Studio)',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								description: 'API key from Google AI Studio',
								required: true,
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_mistralAi',
						displayName: 'Mistral AI',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_anthropic',
						displayName: 'Anthropic',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_xAi',
						displayName: 'xAi',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_ibmWatsonx',
						displayName: 'IBM Watsonx',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							},
							{
								displayName: 'Project Id',
								name: 'projectId',
								type: 'string',
								default: '',
								required: true
							},
							{
								displayName: 'Region',
								name: 'region',
								type: 'string',
								default: '',
								required: true
							}
						]
					},
					{
						name: '_deepSeek',
						displayName: 'DeepSeek',
						values: [
							{
								displayName: 'Api Key',
								name: 'apiKey',
								type: 'string',
								default: '',
								required: true,
								typeOptions: {
									password: true
								}
							}
						]
					},
					{
						name: '_customAi',
						displayName: 'Custom AI',
						values: [
							{
								displayName: 'Identifier',
								name: 'identifier',
								type: 'string',
								default: '',
								description: 'Crowdin App identifier',
								required: true
							},
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								default: '',
								description: 'AI Provider module key',
								required: true
							}
						]
					}
				]
			},
			{
				displayName: 'Is Enabled',
				name: 'isEnabled',
				type: 'boolean',
				default: true,
				description: 'Defines whether to AI provider is enabled.'
			},
			{
				displayName: 'Use System Credentials',
				name: 'useSystemCredentials',
				type: 'boolean',
				default: false,
				description: 'Enables the paid service AI provider via Crowdin.\n\n__Note__: Set to true if `credentials` is not provided. Not supported for `custom_ai`, `x_ai`, `watsonx`, `deepseek` and `google_gemini_ai_studio` types.'
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
					'ai'
				],
				operation: [
					'api.ai.prompts.snippets.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.prompts.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.providers.getMany'
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
					'ai'
				],
				operation: [
					'api.ai.providers.supported-models.crowdin.getMany'
				]
			}
		}
	}
];
