import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../../utils/preSend';

/**
 * Edit Authenticated User operation - manually defined because:
 * - The API expects a JSON Patch array
 * - We provide a user-friendly interface with individual fields
 * 
 * Note: This is Crowdin-only operation (not available in Enterprise)
 */
export const usersProperties: INodeProperties[] = [
	// ==================== OPERATION ====================
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
				name: 'Edit Authenticated User',
				value: 'api.user.patch',
				action: 'Edit Authenticated User',
				routing: {
					request: {
						method: 'PATCH',
						url: '/user'
					},
					send: {
						preSend: [transformToJsonPatch]
					}
				}
			},
		],
		default: 'api.user.patch'
	},

	// ==================== EDIT AUTHENTICATED USER - Fields ====================
	{
		displayName: 'PATCH /user',
		name: 'operation',
		type: 'notice',
		typeOptions: { theme: 'info' },
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['api.user.patch']
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
				resource: ['users'],
				operation: ['api.user.patch']
			}
		},
		options: [
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				placeholder: 'john_smith'
			},
			{
				displayName: 'Full Name',
				name: 'fullName',
				type: 'string',
				default: '',
				placeholder: 'John Smith'
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				placeholder: 'Europe/Kyiv',
			},
			{
				displayName: 'Avatar Storage Id',
				name: 'avatarStorageId',
				type: 'options',
				default: '',
				description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getStorages'
				}
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
