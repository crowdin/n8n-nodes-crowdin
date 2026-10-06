// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const placeholdersProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				]
			}
		},
		options: [
			{
				name: 'List Project System Placeholders',
				value: 'api.projects.system-placeholders.getMany',
				action: 'List Project System Placeholders',
				description: '**Required scopes:** `project.placeholder` (Read only).\n\nReturns every placeholder Crowdin ships, with the state it has in this project. The catalogue is fixed and always comes in the same order, so `isEnabled` is the only value that changes between requests. See [Placeholders](#tag/Placeholders) for what each key matches.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/system-placeholders'
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
			}
		],
		default: 'api.projects.system-placeholders.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/system-placeholders',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.system-placeholders.getMany'
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
					'placeholders'
				],
				operation: [
					'api.projects.system-placeholders.getMany'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.system-placeholders.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'placeholders'
				],
				operation: [
					'api.projects.system-placeholders.getMany'
				]
			}
		}
	}
];
