// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const sourceFilesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				]
			}
		},
		options: [
			{
				name: 'Check Delete Branch Job Status',
				value: 'api.projects.branches.jobs.get',
				action: 'Check Delete Branch Job Status',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/jobs/{{$parameter["jobIdentifier"]}}'
					}
				}
			}
		],
		default: 'api.projects.branches.jobs.get'
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}/jobs/{jobIdentifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.jobs.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.jobs.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		required: true,
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.jobs.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getBranches',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		required: true,
		description: 'Delete operation identifier (UUID). Returned by the async DELETE (Prefer: respond-async).',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.jobs.get'
				]
			}
		}
	}
];
