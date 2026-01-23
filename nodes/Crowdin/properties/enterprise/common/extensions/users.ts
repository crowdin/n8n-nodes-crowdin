import type { INodeProperties } from 'n8n-workflow';
import { transformGroupManagersBatch } from '../../../../utils/preSend';

/**
 * Update Group Managers operation - manually defined because:
 * - The API expects a JSON Patch array with add/remove operations
 * - We provide a user-friendly interface with typed operations
 * 
 * Note: This is Enterprise-only operation (Groups exist only in Enterprise)
 */
export const usersProperties: INodeProperties[] = [
	// ==================== UPDATE GROUP MANAGERS ====================
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['users']
			}
		},
		options: [
			{
				name: 'Update Group Managers',
				value: 'api.groups.managers.patch',
				action: 'Update Group Managers',
				description: '**Required scopes:** `group` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/groups/{{$parameter["groupId"]}}/managers'
					},
					send: {
						preSend: [transformGroupManagersBatch]
					}
				}
			},
		],
		default: 'api.groups.managers.patch'
	},

	// ==================== UPDATE GROUP MANAGERS - Fields ====================
	{
		displayName: 'PATCH /groups/{groupId}/managers',
		name: 'operation',
		type: 'notice',
		typeOptions: { theme: 'info' },
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['api.groups.managers.patch']
			}
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['api.groups.managers.patch']
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Items',
		name: 'items',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Operation',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['api.groups.managers.patch']
			}
		},
		typeOptions: {
			multipleValues: true
		},
		options: [
			{
				name: '_addManager',
				displayName: 'Add Manager',
				values: [
					{
						displayName: 'User Id',
						name: 'userId',
						type: 'options',
						default: '',
						required: true,
						description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getUsers'
						}
					}
				]
			},
			{
				name: '_removeManager',
				displayName: 'Remove Manager',
				values: [
					{
						displayName: 'User Id',
						name: 'userId',
						type: 'options',
						default: '',
						required: true,
						description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getUsers'
						}
					}
				]
			}
		],
		routing: {
			send: {
				property: 'items',
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
];
