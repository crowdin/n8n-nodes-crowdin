// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const externalQaChecksProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'externalQaChecks'
				]
			}
		},
		options: [
			{
				name: 'List External QA Checks',
				value: 'api.external-qa-checks.getMany',
				action: 'List External QA Checks',
				description: '**Required scopes:** `external-qa-check` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/external-qa-checks'
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
			},
			{
				name: 'Get External QA Check',
				value: 'api.external-qa-checks.get',
				action: 'Get External QA Check',
				description: '**Required scopes:** `external-qa-check` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/external-qa-checks/{{$parameter["externalQaCheckId"]}}'
					}
				}
			}
		],
		default: 'api.external-qa-checks.getMany'
	},
	{
		displayName: 'GET /external-qa-checks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'externalQaChecks'
				],
				operation: [
					'api.external-qa-checks.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /external-qa-checks/{externalQaCheckId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'externalQaChecks'
				],
				operation: [
					'api.external-qa-checks.get'
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
					'externalQaChecks'
				],
				operation: [
					'api.external-qa-checks.getMany'
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
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'externalQaChecks'
				],
				operation: [
					'api.external-qa-checks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'External Qa Check Id',
		name: 'externalQaCheckId',
		required: true,
		description: 'External QA check identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'externalQaChecks'
				],
				operation: [
					'api.external-qa-checks.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getExternalQaChecks'
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
					'externalQaChecks'
				],
				operation: [
					'api.external-qa-checks.getMany'
				]
			}
		}
	}
];
