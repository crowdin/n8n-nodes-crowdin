// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const customSpellcheckersProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'customSpellcheckers'
				]
			}
		},
		options: [
			{
				name: 'List Custom Spellcheckers',
				value: 'api.custom-spellcheckers.getMany',
				action: 'List Custom Spellcheckers',
				description: '**Required scopes:** `custom-spellchecker` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-spellcheckers'
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
				name: 'Get Custom Spellchecker',
				value: 'api.custom-spellcheckers.get',
				action: 'Get Custom Spellchecker',
				description: '**Required scopes:** `custom-spellchecker` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-spellcheckers/{{$parameter["customSpellcheckerId"]}}'
					}
				}
			}
		],
		default: 'api.custom-spellcheckers.getMany'
	},
	{
		displayName: 'GET /custom-spellcheckers',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'customSpellcheckers'
				],
				operation: [
					'api.custom-spellcheckers.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /custom-spellcheckers/{customSpellcheckerId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'customSpellcheckers'
				],
				operation: [
					'api.custom-spellcheckers.get'
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
					'customSpellcheckers'
				],
				operation: [
					'api.custom-spellcheckers.getMany'
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
		displayName: 'Custom Spellchecker Id',
		name: 'customSpellcheckerId',
		required: true,
		description: 'Custom Spellchecker Identifier. Get via [List Custom Spellcheckers](#operation/api.front.custom-spellcheckers.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'customSpellcheckers'
				],
				operation: [
					'api.custom-spellcheckers.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getCustomSpellcheckers'
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
					'customSpellcheckers'
				],
				operation: [
					'api.custom-spellcheckers.getMany'
				]
			}
		}
	}
];
