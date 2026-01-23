// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeRootBody } from '../../../utils/preSend';

export const notificationsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'notifications'
				]
			}
		},
		options: [
			{
				name: 'Send Notification to Authenticated User',
				value: 'api.notify.post',
				action: 'Send Notification to Authenticated User',
				description: '**Required scopes:** `notification` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/notify'
					}
				}
			},
			{
				name: 'Send Notification To Project Members',
				value: 'api.projects.notify.post',
				action: 'Send Notification To Project Members',
				description: '**Required scopes:** `project` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/notify'
					}
				}
			}
		],
		default: 'api.notify.post'
	},
	{
		displayName: 'POST /notify',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'notifications'
				],
				operation: [
					'api.notify.post'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/notify',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'notifications'
				],
				operation: [
					'api.projects.notify.post'
				]
			}
		}
	},
	{
		displayName: 'Message',
		required: true,
		name: 'message',
		type: 'string',
		default: '',
		description: 'Message text. __Up to 10000 characters.__',
		routing: {
			send: {
				property: 'message',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'notifications'
				],
				operation: [
					'api.notify.post'
				]
			}
		},
		placeholder: 'New notification message'
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
					'notifications'
				],
				operation: [
					'api.projects.notify.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'notifications'
				],
				operation: [
					'api.projects.notify.post'
				]
			}
		},
		options: [
			{
				displayName: 'By userIds',
				name: '_byUserIds',
				values: [
					{
						displayName: 'User Ids',
						name: 'userIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getUsersMulti'
						},
						default: [],
						description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
						required: true
					},
					{
						displayName: 'Message',
						name: 'message',
						type: 'string',
						default: '',
						description: 'Message text. __Up to 10000 characters.__',
						required: true,
						placeholder: 'New notification message'
					}
				]
			},
			{
				displayName: 'By role',
				name: '_byRole',
				values: [
					{
						displayName: 'Role',
						name: 'role',
						type: 'options',
						default: 'owner',
						description: undefined,
						required: true,
						options: [
							{
								name: 'owner',
								value: 'owner'
							},
							{
								name: 'manager',
								value: 'manager'
							}
						]
					},
					{
						displayName: 'Message',
						name: 'message',
						type: 'string',
						default: '',
						description: 'Message text. __Up to 10000 characters.__',
						required: true,
						placeholder: 'New notification message'
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
	}
];
