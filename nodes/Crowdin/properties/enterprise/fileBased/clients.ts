// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const clientsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'clients'
				]
			}
		},
		options: [
			{
				name: 'List Clients',
				value: 'api.clients.getMany',
				action: 'List Clients',
				description: '**Required scopes:** `client` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/clients'
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
		default: 'api.clients.getMany'
	},
	{
		displayName: 'GET /clients',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'clients'
				],
				operation: [
					'api.clients.getMany'
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
					'clients'
				],
				operation: [
					'api.clients.getMany'
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
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'clients'
				],
				operation: [
					'api.clients.getMany'
				]
			}
		}
	}
];
