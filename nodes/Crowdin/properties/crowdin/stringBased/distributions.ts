// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const distributionsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'distributions'
				]
			}
		},
		options: [
			{
				name: 'List Distributions',
				value: 'api.projects.distributions.getMany',
				action: 'List Distributions',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/distributions'
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
				name: 'Add Distribution',
				value: 'api.projects.distributions.post',
				action: 'Add Distribution',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/distributions'
					}
				}
			},
			{
				name: 'Get Distribution',
				value: 'api.projects.distributions.get',
				action: 'Get Distribution',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/distributions/{{$parameter["hash"]}}'
					}
				}
			},
			{
				name: 'Delete Distribution',
				value: 'api.projects.distributions.delete',
				action: 'Delete Distribution',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/distributions/{{$parameter["hash"]}}'
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
			},
			{
				name: 'Edit Distribution',
				value: 'api.projects.distributions.patch',
				action: 'Edit Distribution',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/distributions/{{$parameter["hash"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Get Distribution Release',
				value: 'api.projects.distributions.release.get',
				action: 'Get Distribution Release',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/distributions/{{$parameter["hash"]}}/release'
					}
				}
			},
			{
				name: 'Release Distribution',
				value: 'api.projects.distributions.release.post',
				action: 'Release Distribution',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/distributions/{{$parameter["hash"]}}/release'
					}
				}
			}
		],
		default: 'api.projects.distributions.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/distributions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/distributions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/distributions/{hash}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/distributions/{hash}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/distributions/{hash}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/distributions/{hash}/release',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.release.get'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/distributions/{hash}/release',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.release.post'
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.getMany'
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Distribution name',
		routing: {
			send: {
				property: 'name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.post'
				]
			}
		},
		placeholder: 'distribution 1'
	},
	{
		displayName: 'Bundle Ids',
		required: true,
		name: 'bundleIds',
		type: 'multiOptions',
		default: [],
		description: 'Bundles ids. Get via [List Bundles](#operation/api.projects.bundles.getMany)\n\n__Note:__ Sting Based projects use only `bundle` export mode',
		routing: {
			send: {
				property: 'bundleIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundlesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Hash',
		name: 'hash',
		required: true,
		description: 'Hash. Get via [List Distributions](#operation/api.distributions.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDistributions',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Hash',
		name: 'hash',
		required: true,
		description: 'Hash. Get via [List Distributions](#operation/api.distributions.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDistributions',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Hash',
		name: 'hash',
		required: true,
		description: 'Hash. Get via [List Distributions](#operation/api.distributions.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDistributions',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.release.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Hash',
		name: 'hash',
		required: true,
		description: 'Hash. Get via [List Distributions](#operation/api.distributions.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.release.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDistributions',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.release.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Hash',
		name: 'hash',
		required: true,
		description: 'Hash. Get via [List Distributions](#operation/api.distributions.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.release.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDistributions',
			loadOptionsDependsOn: [
				'projectId'
			]
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
				resource: [
					'distributions'
				],
				operation: [
					'api.projects.distributions.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Distribution name',
				placeholder: 'distribution 1'
			},
			{
				displayName: 'Bundle Ids',
				name: 'bundleIds',
				type: 'multiOptions',
				default: [],
				description: 'Bundles ids. Get via [List Bundles](#operation/api.projects.bundles.getMany)\n\n__Note:__ Sting Based projects use only `bundle` export mode',
				typeOptions: {
					loadOptionsMethod: 'getProjectBundlesMulti',
					loadOptionsDependsOn: [
						'projectId'
					]
				}
			}
		],
		routing: {
			send: {
				type: 'body',
				value: '={{ $value }}'
			}
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
					'distributions'
				],
				operation: [
					'api.projects.distributions.getMany'
				]
			}
		}
	}
];
