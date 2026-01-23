// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const storageProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'storage'
				]
			}
		},
		options: [
			{
				name: 'List Storages',
				value: 'api.storages.getMany',
				action: 'List Storages',
				routing: {
					request: {
						method: 'GET',
						url: '=/storages'
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
				name: 'Get Storage',
				value: 'api.storages.get',
				action: 'Get Storage',
				routing: {
					request: {
						method: 'GET',
						url: '=/storages/{{$parameter["storageId"]}}'
					}
				}
			},
			{
				name: 'Delete Storage',
				value: 'api.storages.delete',
				action: 'Delete Storage',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/storages/{{$parameter["storageId"]}}'
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "success": true } }}'
								}
							}
						]
					}
				}
			}
		],
		default: 'api.storages.getMany'
	},
	{
		displayName: 'GET /storages',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /storages/{storageId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /storages/{storageId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.delete'
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
					'storage'
				],
				operation: [
					'api.storages.getMany'
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
		displayName: 'Storage Id',
		name: 'storageId',
		required: true,
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Storage Id',
		name: 'storageId',
		required: true,
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'storage'
				],
				operation: [
					'api.storages.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
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
					'storage'
				],
				operation: [
					'api.storages.getMany'
				]
			}
		}
	}
];
