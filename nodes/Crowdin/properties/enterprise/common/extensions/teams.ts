import type { INodeProperties } from 'n8n-workflow';
import { transformGroupTeamsBatch } from '../../../../utils/preSend';

/**
 * Update Group Teams operation - manually defined because:
 * - The API expects a JSON Patch array with add/remove operations
 * - We provide a user-friendly interface with typed operations
 * 
 * Note: This is Enterprise-only operation (Teams exist only in Enterprise)
 */
export const teamsProperties: INodeProperties[] = [
	// ==================== UPDATE GROUP TEAMS ====================
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['teams']
			}
		},
		options: [
			{
				name: 'Update Group Teams',
				value: 'api.groups.teams.patch',
				action: 'Update Group Teams',
				description: '**Required scopes:** `group` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/groups/{{$parameter["groupId"]}}/teams'
					},
					send: {
						preSend: [transformGroupTeamsBatch]
					}
				}
			},
		],
		default: 'api.groups.teams.patch'
	},

	// ==================== UPDATE GROUP TEAMS - Fields ====================
	{
		displayName: 'PATCH /groups/{groupId}/teams',
		name: 'operation',
		type: 'notice',
		typeOptions: { theme: 'info' },
		default: '',
		displayOptions: {
			show: {
				resource: ['teams'],
				operation: ['api.groups.teams.patch']
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
				resource: ['teams'],
				operation: ['api.groups.teams.patch']
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
				resource: ['teams'],
				operation: ['api.groups.teams.patch']
			}
		},
		typeOptions: {
			multipleValues: true
		},
		options: [
			{
				name: '_addTeam',
				displayName: 'Add Team',
				values: [
					{
						displayName: 'Team Id',
						name: 'teamId',
						type: 'options',
						default: '',
						required: true,
						description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getTeams'
						}
					}
				]
			},
			{
				name: '_removeTeam',
				displayName: 'Remove Team',
				values: [
					{
						displayName: 'Team Id',
						name: 'teamId',
						type: 'options',
						default: '',
						required: true,
						description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getTeams'
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
