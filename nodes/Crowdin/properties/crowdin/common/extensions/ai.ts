import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../../utils/preSend';

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
				name: 'Edit AI Settings',
				value: 'api.users.ai.settings.patch',
				action: 'Edit AI Settings',
				description: '**Required scopes:** `ai` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/users/{{$parameter["userId"]}}/ai/settings'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.users.ai.settings.patch'
	},
	{
		displayName: 'PATCH /users/{userId}/ai/settings',
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
					'api.users.ai.settings.patch'
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
					'api.users.ai.settings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
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
					'api.users.ai.settings.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Pre-Translation Ai Prompt Id',
				name: 'preTranslationAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for Pre-Translation',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Assist Action Ai Prompt Id',
				name: 'assistActionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for AI Assist action in Editor',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Editor Suggestion Ai Prompt Id',
				name: 'editorSuggestionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for AI Suggestion action in Editor',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'QA Check Action Ai Prompt Id',
				name: 'qaCheckActionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for AI QA Check action',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Shortcuts',
				name: 'shortcuts',
				type: 'fixedCollection',
				default: {},
				description: 'AI shortcuts configuration. Each shortcut has a name and prompt.',
				typeOptions: {
					multipleValues: true
				},
				placeholder: 'Add Shortcut',
				options: [
					{
						name: 'items',
						displayName: 'Shortcut',
						values: [
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
								description: 'Shortcut name',
								placeholder: 'My first shortcut'
							},
							{
								displayName: 'Prompt',
								name: 'prompt',
								type: 'string',
								default: '',
								description: 'Shortcut prompt',
								placeholder: 'Make translation shorter'
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
	}
];
