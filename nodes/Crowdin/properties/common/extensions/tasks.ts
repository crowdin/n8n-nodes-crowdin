import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

/**
 * User Task operations - same for all variants (Crowdin/Enterprise, file-based/string-based).
 */
export const tasksProperties: INodeProperties[] = [
	// ========================================================================
	// Operations
	// ========================================================================
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tasks']
			}
		},
		options: [
			{
				name: 'Edit Task Archived Status',
				value: 'api.user.tasks.patch',
				action: 'Edit Task Archived Status',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/user/tasks/{{$parameter["taskId"]}}?projectId={{$parameter["projectId"]}}'
					},
					send: {
						preSend: [transformToJsonPatch]
					}
				}
			},
		],
		default: 'api.user.tasks.patch'
	},

	// ========================================================================
	// Edit Task Archived Status (api.user.tasks.patch)
	// ========================================================================
	{
		displayName: 'PATCH /user/tasks/{taskId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['api.user.tasks.patch']
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
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		},
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['api.user.tasks.patch']
			}
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		required: true,
		description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getProjectTasks',
			loadOptionsDependsOn: ['projectId']
		},
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['api.user.tasks.patch']
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
				resource: ['tasks'],
				operation: ['api.user.tasks.patch']
			}
		},
		options: [
			{
				displayName: 'Is Archived',
				name: 'isArchived',
				type: 'boolean',
				default: true,
				description: 'Acceptable values: `true` – archive task, `false` – move a task from archived to a list of all tasks'
			},
		],
		routing: {
			send: {
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
];
