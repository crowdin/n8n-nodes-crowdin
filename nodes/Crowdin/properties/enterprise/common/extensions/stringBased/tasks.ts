import type { INodeProperties } from 'n8n-workflow';
import { transformNestedBodyToJsonPatch } from '../../../../../utils/preSend';

/**
 * Enterprise String-Based Task PATCH operation.
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
				name: 'Edit Project Task',
				value: 'api.projects.tasks.patch',
				action: 'Edit Project Task',
				description: '**Required scopes:** `project.task` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/tasks/{{$parameter["taskId"]}}'
					},
					send: {
						preSend: [transformNestedBodyToJsonPatch]
					}
				}
			},
		],
		default: 'api.projects.tasks.patch'
	},

	// ========================================================================
	// Edit Project Task (api.projects.tasks.patch)
	// ========================================================================
	{
		displayName: 'PATCH /projects/{projectId}/tasks/{taskId}',
		name: 'operation',
		type: 'notice',
		typeOptions: { theme: 'info' },
		default: '',
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['api.projects.tasks.patch']
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
		typeOptions: { loadOptionsMethod: 'getProjects' },
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['api.projects.tasks.patch']
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
				operation: ['api.projects.tasks.patch']
			}
		}
	},
	{
		displayName: 'Body',
		name: '_body',
		type: 'fixedCollection',
		default: {},
		displayOptions: {
			show: {
				resource: ['tasks'],
				operation: ['api.projects.tasks.patch']
			}
		},
		options: [
			{
				name: '_TaskOperation',
				displayName: 'Task Operation',
				values: [
					{
						displayName: 'Fields',
						name: '_fields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Status',
								name: 'status',
								type: 'options',
								default: '',
								description: 'Task status',
								options: [
									{ name: '-', value: '' },
									{ name: 'todo', value: 'todo' },
									{ name: 'in_progress', value: 'in_progress' },
									{ name: 'done', value: 'done' },
									{ name: 'closed', value: 'closed' },
								]
							},
							{
								displayName: 'Title',
								name: 'title',
								type: 'string',
								default: '',
								description: 'Task title'
							},
							{
								displayName: 'Description',
								name: 'description',
								type: 'string',
								default: '',
								description: 'Task description'
							},
							{
								displayName: 'Deadline',
								name: 'dateTime:deadline',
								type: 'dateTime',
								default: '',
								description: 'Task deadline in UTC, ISO 8601'
							},
							{
								displayName: 'Started At',
								name: 'dateTime:startedAt',
								type: 'dateTime',
								default: '',
								description: 'Defines task started date in UTC, ISO 8601'
							},
							{
								displayName: 'Resolved At',
								name: 'dateTime:resolvedAt',
								type: 'dateTime',
								default: '',
								description: 'Task resolved date in UTC, ISO 8601'
							},
							{
								displayName: 'Split Content',
								name: 'splitContent',
								type: 'boolean',
								default: false,
								description: 'Whether to split content for task'
							},
							{
								displayName: 'Branch Ids',
								name: 'branchIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getBranchesMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Task Branch Identifiers. Get via [List Branches](#operation/api.projects.branches.getMany)'
							},
							{
								displayName: 'String Ids',
								name: 'stringIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getProjectStringsMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)'
							},
							{
								displayName: 'Assignees',
								name: 'assignees',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Assignee',
								description: 'Task assigned users',
								options: [{ displayName: 'Items', name: 'items', values: [
									{ displayName: 'ID', name: 'id', type: 'options', typeOptions: { loadOptionsMethod: 'getProjectMembers', loadOptionsDependsOn: ['projectId'] }, default: '', description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)' },
									{ displayName: 'Words Count', name: 'wordsCount', type: 'number', default: 0, description: 'Defines how many words (starting from 1) are assigned to each task assignee. Can be used only when `splitContent` parameter is specified.' }
								] }]
							},
							{
								displayName: 'Assigned Teams',
								name: 'assignedTeams',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Team',
								description: 'Task assigned teams',
								options: [{ displayName: 'Items', name: 'items', values: [
									{ displayName: 'ID', name: 'id', type: 'options', typeOptions: { loadOptionsMethod: 'getTeams' }, default: '', description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)' },
									{ displayName: 'Words Count', name: 'wordsCount', type: 'number', default: 0, description: 'Defines how many words (starting from 1) are assigned to each task assigned team. Can be used only when `splitContent` parameter is specified.' }
								] }]
							},
							{
								displayName: 'Date From',
								name: 'dateTime:dateFrom',
								type: 'dateTime',
								default: '',
								description: 'Task date from in UTC, ISO 8601'
							},
							{
								displayName: 'Date To',
								name: 'dateTime:dateTo',
								type: 'dateTime',
								default: '',
								description: 'Task date to in UTC, ISO 8601'
							},
							{
								displayName: 'Translations Updated Date From',
								name: 'dateTime:translationsUpdatedDateFrom',
								type: 'dateTime',
								default: '',
								description: 'Defines start date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601'
							},
							{
								displayName: 'Translations Updated Date To',
								name: 'dateTime:translationsUpdatedDateTo',
								type: 'dateTime',
								default: '',
								description: 'Defines end date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601'
							},
							{
								displayName: 'Label Ids',
								name: 'labelIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getProjectLabelsMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
							},
							{
								displayName: 'Label Match Rule',
								name: 'labelMatchRule',
								type: 'options',
								default: '',
								description: 'Match rule for labels: "all" - all labels must be present in string, "any" - any of the labels must be present in string. Can only be used when `labelIds` parameter is provided.',
								options: [{ name: '-', value: '' }, { name: 'all', value: 'all' }, { name: 'any', value: 'any' }]
							},
							{
								displayName: 'Exclude Label Ids',
								name: 'excludeLabelIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getProjectLabelsMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Label Identifiers to exclude. Get via [List Labels](#operation/api.projects.labels.getMany)'
							},
							{
								displayName: 'Exclude Label Match Rule',
								name: 'excludeLabelMatchRule',
								type: 'options',
								default: '',
								description: 'Match rule for excluded labels: "all" - all labels must be present in string, "any" - any of the labels must be present in string. Can only be used when `excludeLabelIds` parameter is provided.',
								options: [{ name: '-', value: '' }, { name: 'all', value: 'all' }, { name: 'any', value: 'any' }]
							},
							{
								displayName: 'Generate Cost Estimate',
								name: 'generateCostEstimate',
								type: 'boolean',
								default: false,
								description: 'Whether to generate cost estimate report for the task. Requires `reportSettingsTemplateId`.'
							},
							{
								displayName: 'Report Settings Template ID',
								name: 'reportSettingsTemplateId',
								type: 'options',
								typeOptions: { loadOptionsMethod: 'getReportSettingsTemplates' },
								default: '',
								description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`.'
							},
						]
					}
				]
			},
			{
				name: '_VendorTaskOperation',
				displayName: 'Vendor Task Operation',
				values: [
					{
						displayName: 'Fields',
						name: '_fields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Title',
								name: 'title',
								type: 'string',
								default: '',
								description: 'Task title'
							},
							{
								displayName: 'Description',
								name: 'description',
								type: 'string',
								default: '',
								description: 'Task description'
							},
							{
								displayName: 'Branch Ids',
								name: 'branchIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getBranchesMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Task Branch Identifiers. Get via [List Branches](#operation/api.projects.branches.getMany)'
							},
							{
								displayName: 'String Ids',
								name: 'stringIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getProjectStringsMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Task String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany)'
							},
							{
								displayName: 'Date From',
								name: 'dateTime:dateFrom',
								type: 'dateTime',
								default: '',
								description: 'Task date from in UTC, ISO 8601'
							},
							{
								displayName: 'Date To',
								name: 'dateTime:dateTo',
								type: 'dateTime',
								default: '',
								description: 'Task date to in UTC, ISO 8601'
							},
							{
								displayName: 'Translations Updated Date From',
								name: 'dateTime:translationsUpdatedDateFrom',
								type: 'dateTime',
								default: '',
								description: 'Defines start date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601'
							},
							{
								displayName: 'Translations Updated Date To',
								name: 'dateTime:translationsUpdatedDateTo',
								type: 'dateTime',
								default: '',
								description: 'Defines end date for interval when translation were updated (proofread tasks only) in UTC, ISO 8601'
							},
							{
								displayName: 'Deadline',
								name: 'dateTime:deadline',
								type: 'dateTime',
								default: '',
								description: 'Task deadline in UTC, ISO 8601'
							},
							{
								displayName: 'Started At',
								name: 'dateTime:startedAt',
								type: 'dateTime',
								default: '',
								description: 'Defines task started date in UTC, ISO 8601'
							},
							{
								displayName: 'Resolved At',
								name: 'dateTime:resolvedAt',
								type: 'dateTime',
								default: '',
								description: 'Task resolved date in UTC, ISO 8601'
							},
							{
								displayName: 'Label Ids',
								name: 'labelIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getProjectLabelsMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
							},
							{
								displayName: 'Label Match Rule',
								name: 'labelMatchRule',
								type: 'options',
								default: '',
								description: 'Match rule for labels: "all" - all labels must be present in string, "any" - any of the labels must be present in string. Can only be used when `labelIds` parameter is provided.',
								options: [{ name: '-', value: '' }, { name: 'all', value: 'all' }, { name: 'any', value: 'any' }]
							},
							{
								displayName: 'Exclude Label Ids',
								name: 'excludeLabelIds',
								type: 'multiOptions',
								typeOptions: { loadOptionsMethod: 'getProjectLabelsMulti', loadOptionsDependsOn: ['projectId'] },
								default: [],
								description: 'Label Identifiers to exclude. Get via [List Labels](#operation/api.projects.labels.getMany)'
							},
							{
								displayName: 'Exclude Label Match Rule',
								name: 'excludeLabelMatchRule',
								type: 'options',
								default: '',
								description: 'Match rule for excluded labels: "all" - all labels must be present in string, "any" - any of the labels must be present in string. Can only be used when `excludeLabelIds` parameter is provided.',
								options: [{ name: '-', value: '' }, { name: 'all', value: 'all' }, { name: 'any', value: 'any' }]
							},
							{
								displayName: 'Generate Cost Estimate',
								name: 'generateCostEstimate',
								type: 'boolean',
								default: false,
								description: 'Whether to generate cost estimate report for the task. Requires `reportSettingsTemplateId`.'
							},
							{
								displayName: 'Report Settings Template ID',
								name: 'reportSettingsTemplateId',
								type: 'options',
								typeOptions: { loadOptionsMethod: 'getReportSettingsTemplates' },
								default: '',
								description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany). Required when `generateCostEstimate` is `true`.'
							},
						]
					}
				]
			},
			{
				name: '_InterOrganizationalTaskOperation',
				displayName: 'Inter-Organizational Task Operation',
				values: [
					{
						displayName: 'Fields',
						name: '_fields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Assignee',
								name: 'assignee',
								type: 'fixedCollection',
								default: {},
								description: 'Task assigned user',
								options: [{ displayName: 'Assignee', name: 'items', values: [
									{ displayName: 'ID', name: 'id', type: 'options', typeOptions: { loadOptionsMethod: 'getProjectMembers', loadOptionsDependsOn: ['projectId'] }, default: '', description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)' },
									{ displayName: 'Words Count', name: 'wordsCount', type: 'number', default: 0, description: 'Defines how many words (starting from 1) are assigned to each task assignee. Can be used only when `splitContent` parameter is specified.' }
								] }]
							},
							{
								displayName: 'Assigned Teams',
								name: 'assignedTeams',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Team',
								description: 'Task assigned teams',
								options: [{ displayName: 'Items', name: 'items', values: [
									{ displayName: 'ID', name: 'id', type: 'options', typeOptions: { loadOptionsMethod: 'getTeams' }, default: '', description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)' },
									{ displayName: 'Words Count', name: 'wordsCount', type: 'number', default: 0, description: 'Defines how many words (starting from 1) are assigned to each task assigned team. Can be used only when `splitContent` parameter is specified.' }
								] }]
							},
							{
								displayName: 'Split Content',
								name: 'splitContent',
								type: 'boolean',
								default: false,
								description: 'Whether to split content for task'
							},
							{
								displayName: 'Status',
								name: 'status',
								type: 'options',
								default: '',
								description: 'Task status',
								options: [
									{ name: '-', value: '' },
									{ name: 'todo', value: 'todo' },
									{ name: 'in_progress', value: 'in_progress' },
									{ name: 'done', value: 'done' },
									{ name: 'closed', value: 'closed' },
								]
							},
						]
					}
				]
			},
			{
				name: '_PendingTaskOperation',
				displayName: 'Pending Task Operation',
				values: [
					{
						displayName: 'Fields',
						name: '_fields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Title',
								name: 'title',
								type: 'string',
								default: '',
								description: 'Task title'
							},
							{
								displayName: 'Description',
								name: 'description',
								type: 'string',
								default: '',
								description: 'Task description'
							},
							{
								displayName: 'Assignees',
								name: 'assignees',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Assignee',
								description: 'Task assigned users',
								options: [{ displayName: 'Items', name: 'items', values: [
									{ displayName: 'ID', name: 'id', type: 'options', typeOptions: { loadOptionsMethod: 'getProjectMembers', loadOptionsDependsOn: ['projectId'] }, default: '', description: 'User Identifier. Get via [List Users](#operation/api.users.getMany)' },
									{ displayName: 'Words Count', name: 'wordsCount', type: 'number', default: 0, description: 'Defines how many words (starting from 1) are assigned to each task assignee. Can be used only when `splitContent` parameter is specified.' }
								] }]
							},
							{
								displayName: 'Assigned Teams',
								name: 'assignedTeams',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Team',
								description: 'Task assigned teams',
								options: [{ displayName: 'Items', name: 'items', values: [
									{ displayName: 'ID', name: 'id', type: 'options', typeOptions: { loadOptionsMethod: 'getTeams' }, default: '', description: 'Team Identifier. Get via [List Teams](#operation/api.teams.getMany)' },
									{ displayName: 'Words Count', name: 'wordsCount', type: 'number', default: 0, description: 'Defines how many words (starting from 1) are assigned to each task assigned team. Can be used only when `splitContent` parameter is specified.' }
								] }]
							},
							{
								displayName: 'Deadline',
								name: 'dateTime:deadline',
								type: 'dateTime',
								default: '',
								description: 'Task deadline in UTC, ISO 8601'
							},
						]
					}
				]
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
