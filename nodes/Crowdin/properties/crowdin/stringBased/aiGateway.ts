// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { parseJsonBodyField } from '../../../utils/preSend';

export const aiGatewayProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				]
			}
		},
		options: [
			{
				name: 'AI Gateway GET',
				value: 'api.ai.providers.gateway.crowdin.get',
				action: 'AI Gateway GET',
				description: '**Required scopes:** `ai.proxy` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}/gateway/{{$parameter["path"]}}'
					}
				}
			},
			{
				name: 'AI Gateway PUT',
				value: 'api.ai.providers.gateway.crowdin.put',
				action: 'AI Gateway PUT',
				description: '**Required scopes:** `ai.proxy` (Read and Write).',
				routing: {
					request: {
						method: 'PUT',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}/gateway/{{$parameter["path"]}}'
					},
					send: {
						preSend: [
							parseJsonBodyField()
						]
					}
				}
			},
			{
				name: 'AI Gateway POST',
				value: 'api.ai.providers.gateway.crowdin.post',
				action: 'AI Gateway POST',
				description: '**Required scopes:** `ai.proxy` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}/gateway/{{$parameter["path"]}}'
					},
					send: {
						preSend: [
							parseJsonBodyField()
						]
					}
				}
			},
			{
				name: 'AI Gateway DELETE',
				value: 'api.ai.providers.gateway.crowdin.delete',
				action: 'AI Gateway DELETE',
				description: '**Required scopes:** `ai.proxy` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}/gateway/{{$parameter["path"]}}'
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
				name: 'AI Gateway PATCH',
				value: 'api.ai.providers.gateway.crowdin.patch',
				action: 'AI Gateway PATCH',
				description: '**Required scopes:** `ai.proxy` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}/ai/providers/{{$parameter["aiProviderId"]}}/gateway/{{$parameter["path"]}}'
					},
					send: {
						preSend: [
							parseJsonBodyField()
						]
					}
				}
			}
		],
		default: 'api.ai.providers.gateway.crowdin.get'
	},
	{
		displayName: 'GET /users/{userId}/ai/providers/{aiProviderId}/gateway/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /users/{userId}/ai/providers/{aiProviderId}/gateway/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.put'
				]
			}
		}
	},
	{
		displayName: 'POST /users/{userId}/ai/providers/{aiProviderId}/gateway/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /users/{userId}/ai/providers/{aiProviderId}/gateway/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /users/{userId}/ai/providers/{aiProviderId}/gateway/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.patch'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.get'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'Raw provider API path after `/gateway/`. This is a multi-segment path and may contain slashes (e.g. `chat/completions`, `messages`, `models/gemini-pro:generateContent`). Router pattern: `{path:.+}`.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.get'
				]
			}
		},
		placeholder: 'chat/completions'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.put'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'Raw provider API path after `/gateway/`. This is a multi-segment path and may contain slashes (e.g. `chat/completions`, `messages`, `models/gemini-pro:generateContent`). Router pattern: `{path:.+}`.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.put'
				]
			}
		},
		placeholder: 'chat/completions'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.post'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'Raw provider API path after `/gateway/`. This is a multi-segment path and may contain slashes (e.g. `chat/completions`, `messages`, `models/gemini-pro:generateContent`). Router pattern: `{path:.+}`.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.post'
				]
			}
		},
		placeholder: 'chat/completions'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.delete'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'Raw provider API path after `/gateway/`. This is a multi-segment path and may contain slashes (e.g. `chat/completions`, `messages`, `models/gemini-pro:generateContent`). Router pattern: `{path:.+}`.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.delete'
				]
			}
		},
		placeholder: 'chat/completions'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.patch'
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
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiProviders'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'Raw provider API path after `/gateway/`. This is a multi-segment path and may contain slashes (e.g. `chat/completions`, `messages`, `models/gemini-pro:generateContent`). Router pattern: `{path:.+}`.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.patch'
				]
			}
		},
		placeholder: 'chat/completions'
	},
	{
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'The request body as JSON. The structure depends on the specific application.',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.post'
				]
			}
		}
	},
	{
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'The request body as JSON. The structure depends on the specific application.',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.put'
				]
			}
		}
	},
	{
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'The request body as JSON. The structure depends on the specific application.',
		displayOptions: {
			show: {
				resource: [
					'aiGateway'
				],
				operation: [
					'api.ai.providers.gateway.crowdin.patch'
				]
			}
		}
	}
];
