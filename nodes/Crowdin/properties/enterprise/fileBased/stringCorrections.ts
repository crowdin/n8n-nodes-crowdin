// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const stringCorrectionsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				]
			}
		},
		options: [
			{
				name: 'List Corrections',
				value: 'api.projects.corrections.getMany',
				action: 'List Corrections',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/corrections'
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
				name: 'Add Correction',
				value: 'api.projects.corrections.post',
				action: 'Add Correction',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/corrections'
					}
				}
			},
			{
				name: 'Delete Corrections',
				value: 'api.projects.corrections.deleteMany',
				action: 'Delete Corrections',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/corrections'
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
				name: 'Get Correction',
				value: 'api.projects.corrections.get',
				action: 'Get Correction',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/corrections/{{$parameter["correctionId"]}}'
					}
				}
			},
			{
				name: 'Restore Correction',
				value: 'api.projects.corrections.put',
				action: 'Restore Correction',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/corrections/{{$parameter["correctionId"]}}'
					}
				}
			},
			{
				name: 'Delete Correction',
				value: 'api.projects.corrections.delete',
				action: 'Delete Correction',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/corrections/{{$parameter["correctionId"]}}'
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
		default: 'api.projects.corrections.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/corrections',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/corrections',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/corrections',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/corrections/{correctionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /projects/{projectId}/corrections/{correctionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.put'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/corrections/{correctionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.delete'
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		name: 'stringId',
		required: true,
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'stringId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
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
		displayName: 'Order By',
		name: 'orderBy',
		description: 'Sort corrections by',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'orderBy',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,id'
	},
	{
		displayName: 'Denormalize Placeholders',
		name: 'denormalizePlaceholders',
		description: 'Enable denormalize placeholders',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '0',
				value: 0
			},
			{
				name: '1',
				value: 1
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'denormalizePlaceholders',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		required: true,
		name: 'stringId',
		type: 'options',
		default: '',
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		routing: {
			send: {
				property: 'stringId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: 'Correction text',
		routing: {
			send: {
				property: 'text',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.post'
				]
			}
		},
		placeholder: 'This string has been corrected'
	},
	{
		displayName: 'Plural Category Name',
		name: 'pluralCategoryName',
		type: 'string',
		default: '',
		description: 'Plural form. Acceptable keys are `zero`, `one`, `two`, `few`, `many`, and `other`\n\n_Note:_ This field becomes required for strings with plural forms',
		routing: {
			send: {
				property: 'pluralCategoryName',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.post'
				]
			}
		},
		placeholder: 'few'
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		name: 'stringId',
		required: true,
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'stringId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Correction Id',
		name: 'correctionId',
		required: true,
		description: 'Correction Identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.get'
				]
			}
		},
		placeholder: '35'
	},
	{
		displayName: 'Denormalize Placeholders',
		name: 'denormalizePlaceholders',
		description: 'Enable denormalize placeholders',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '0',
				value: 0
			},
			{
				name: '1',
				value: 1
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'denormalizePlaceholders',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.get'
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Correction Id',
		name: 'correctionId',
		required: true,
		description: 'Correction Identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.put'
				]
			}
		},
		placeholder: '35'
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Correction Id',
		name: 'correctionId',
		required: true,
		description: 'Correction Identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.delete'
				]
			}
		},
		placeholder: '35'
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
					'stringCorrections'
				],
				operation: [
					'api.projects.corrections.getMany'
				]
			}
		}
	}
];
