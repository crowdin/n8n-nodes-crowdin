// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const vendorsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'vendors'
				]
			}
		},
		options: [
			{
				name: 'List Vendors',
				value: 'api.vendors.getMany',
				action: 'List Vendors',
				description: '**Required scopes:** `vendor` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/vendors'
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
		default: 'api.vendors.getMany'
	},
	{
		displayName: 'GET /vendors',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'vendors'
				],
				operation: [
					'api.vendors.getMany'
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
					'vendors'
				],
				operation: [
					'api.vendors.getMany'
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
					'vendors'
				],
				operation: [
					'api.vendors.getMany'
				]
			}
		}
	}
];
