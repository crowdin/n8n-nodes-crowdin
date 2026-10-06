// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

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
				name: 'List Custom Placeholders',
				value: 'api.custom-placeholders.getMany',
				action: 'List Custom Placeholders',
				description: '**Required scopes:** `custom-placeholder` (Read only).\n\nReturns a list of the custom placeholders of the organization.',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-placeholders'
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
				name: 'Add Custom Placeholder',
				value: 'api.custom-placeholders.post',
				action: 'Add Custom Placeholder',
				description: '**Required scopes:** `custom-placeholder` (Read and Write).\n\nCreates a custom placeholder for the organization. Assign it to a project with [Add Project Placeholder](#operation/api.projects.placeholders.post).',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-placeholders'
					}
				}
			},
			{
				name: 'Get Custom Placeholder',
				value: 'api.custom-placeholders.get',
				action: 'Get Custom Placeholder',
				description: '**Required scopes:** `custom-placeholder` (Read only).\n\nReturns a custom placeholder of the organization.',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-placeholders/{{$parameter["customPlaceholderId"]}}'
					}
				}
			},
			{
				name: 'Delete Custom Placeholder',
				value: 'api.custom-placeholders.delete',
				action: 'Delete Custom Placeholder',
				description: '**Required scopes:** `custom-placeholder` (Read and Write).\n\nDeletes a custom placeholder of the organization.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/custom-placeholders/{{$parameter["customPlaceholderId"]}}'
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
				name: 'Edit Custom Placeholder',
				value: 'api.custom-placeholders.patch',
				action: 'Edit Custom Placeholder',
				description: '**Required scopes:** `custom-placeholder` (Read and Write).\n\nUpdates a custom placeholder of the organization.',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/custom-placeholders/{{$parameter["customPlaceholderId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Project Placeholders',
				value: 'api.projects.placeholders.getMany',
				action: 'List Project Placeholders',
				description: '**Required scopes:** `project.placeholder` (Read only).\n\nReturns a list of the custom placeholders assigned to the project — the ones an organization defines itself. The placeholders Crowdin ships are listed by [List Project System Placeholders](#operation/api.projects.system-placeholders.getMany).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/placeholders'
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
				name: 'Add Project Placeholder',
				value: 'api.projects.placeholders.post',
				action: 'Add Project Placeholder',
				description: '**Required scopes:** `project.placeholder` (Read and Write).\n\nAssigns a custom placeholder of the organization to the project, so Crowdin starts recognizing it in this project. `type`, `index`, `isBlocking` and `formats` apply to this project only — the placeholder definition they belong to is shared.',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/placeholders'
					}
				}
			},
			{
				name: 'Get Project Placeholder',
				value: 'api.projects.placeholders.get',
				action: 'Get Project Placeholder',
				description: '**Required scopes:** `project.placeholder` (Read only).\n\nReturns one custom placeholder assigned to the project, with the settings it has here.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/placeholders/{{$parameter["projectPlaceholderId"]}}'
					}
				}
			},
			{
				name: 'Delete Project Placeholder',
				value: 'api.projects.placeholders.delete',
				action: 'Delete Project Placeholder',
				description: '**Required scopes:** `project.placeholder` (Read and Write).\n\nUnassigns a custom placeholder from the project, so Crowdin stops recognizing it here. The placeholder itself stays defined for the organization.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/placeholders/{{$parameter["projectPlaceholderId"]}}'
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
				name: 'Edit Project Placeholder',
				value: 'api.projects.placeholders.patch',
				action: 'Edit Project Placeholder',
				description: '**Required scopes:** `project.placeholder` (Read and Write).\n\nUpdates the settings a custom placeholder has in this project. The placeholder definition itself is not edited here, so the change reaches no other project.',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/placeholders/{{$parameter["projectPlaceholderId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
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
		default: 'api.custom-placeholders.getMany'
	},
	{
		displayName: 'GET /custom-placeholders',
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
					'api.custom-placeholders.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /custom-placeholders',
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
					'api.custom-placeholders.post'
				]
			}
		}
	},
	{
		displayName: 'GET /custom-placeholders/{customPlaceholderId}',
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
					'api.custom-placeholders.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /custom-placeholders/{customPlaceholderId}',
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
					'api.custom-placeholders.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /custom-placeholders/{customPlaceholderId}',
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
					'api.custom-placeholders.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/placeholders',
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
					'api.projects.placeholders.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/placeholders',
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
					'api.projects.placeholders.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/placeholders/{projectPlaceholderId}',
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
					'api.projects.placeholders.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/placeholders/{projectPlaceholderId}',
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
					'api.projects.placeholders.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/placeholders/{projectPlaceholderId}',
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
					'api.projects.placeholders.patch'
				]
			}
		}
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
					'api.custom-placeholders.getMany'
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
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: undefined,
		routing: {
			send: {
				property: 'description',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.post'
				]
			}
		},
		placeholder: 'URL validation'
	},
	{
		displayName: 'Definition',
		required: true,
		name: 'definition',
		type: 'string',
		default: '',
		description: undefined,
		routing: {
			send: {
				property: 'definition',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.post'
				]
			}
		},
		placeholder: 'start, then "http", maybe "s", then "://", maybe "www.", anything but " ", end'
	},
	{
		displayName: 'Argument Delimiter',
		name: 'argumentDelimiter',
		type: 'string',
		default: '',
		description: undefined,
		routing: {
			send: {
				property: 'argumentDelimiter',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.post'
				]
			}
		},
		placeholder: '"'
	},
	{
		displayName: 'Custom Placeholder Id',
		name: 'customPlaceholderId',
		required: true,
		description: 'Custom Placeholder identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.get'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Custom Placeholder Id',
		name: 'customPlaceholderId',
		required: true,
		description: 'Custom Placeholder identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.delete'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Custom Placeholder Id',
		name: 'customPlaceholderId',
		required: true,
		description: 'Custom Placeholder identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.patch'
				]
			}
		},
		placeholder: '0'
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
					'api.projects.placeholders.getMany'
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
					'api.projects.placeholders.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'api.projects.placeholders.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Custom Placeholder Id',
		required: true,
		name: 'customPlaceholderId',
		type: 'number',
		default: undefined,
		description: 'ID of the custom placeholder your organization defined',
		routing: {
			send: {
				property: 'customPlaceholderId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.post'
				]
			}
		},
		placeholder: '3'
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Priority the placeholder is matched with. One of: `high`, `low`',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'high',
				value: 'high'
			},
			{
				name: 'low',
				value: 'low'
			}
		],
		routing: {
			send: {
				property: 'type',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.post'
				]
			}
		}
	},
	{
		displayName: 'Index',
		name: 'index',
		type: 'number',
		default: 0,
		description: 'Position of the placeholder among the ones assigned to the project',
		routing: {
			send: {
				property: 'index',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.post'
				]
			}
		},
		placeholder: '1'
	},
	{
		displayName: 'Is Blocking',
		name: 'isBlocking',
		type: 'boolean',
		default: false,
		description: 'If `true`, a mismatch of the placeholder blocks the translation from being saved',
		routing: {
			send: {
				property: 'isBlocking',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.post'
				]
			}
		}
	},
	{
		displayName: 'Formats',
		name: 'formats',
		type: 'fixedCollection',
		default: {},
		description: 'File formats the placeholder is applied to; an empty array means every format',
		routing: {
			send: {
				property: 'formats',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'Value',
						name: '_value',
						type: 'string',
						default: ''
					}
				]
			}
		]
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
					'api.projects.placeholders.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Project Placeholder Id',
		name: 'projectPlaceholderId',
		required: true,
		description: 'Project Placeholder identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.get'
				]
			}
		},
		placeholder: '0'
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
					'api.projects.placeholders.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Project Placeholder Id',
		name: 'projectPlaceholderId',
		required: true,
		description: 'Project Placeholder identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.delete'
				]
			}
		},
		placeholder: '0'
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
					'api.projects.placeholders.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Project Placeholder Id',
		name: 'projectPlaceholderId',
		required: true,
		description: 'Project Placeholder identifier',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.patch'
				]
			}
		},
		placeholder: '0'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Value for /description',
				placeholder: 'URL validation'
			},
			{
				displayName: 'Definition',
				name: 'definition',
				type: 'string',
				default: '',
				description: 'Value for /definition',
				placeholder: 'start, then "http", maybe "s", then "://", maybe "www.", anything but " ", end'
			},
			{
				displayName: 'Argument Delimiter',
				name: 'argumentDelimiter',
				type: 'string',
				default: '',
				description: 'Value for /argumentDelimiter',
				placeholder: '"'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Index',
				name: 'index',
				type: 'number',
				default: 0,
				description: 'Position of the placeholder among the ones assigned to the project',
				placeholder: '1'
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'Priority the placeholder is matched with. One of: `high`, `low`',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'high',
						value: 'high'
					},
					{
						name: 'low',
						value: 'low'
					}
				]
			},
			{
				displayName: 'Is Blocking',
				name: 'isBlocking',
				type: 'boolean',
				default: false,
				description: 'If `true`, a mismatch of the placeholder blocks the translation from being saved'
			},
			{
				displayName: 'Formats',
				name: 'formats',
				type: 'fixedCollection',
				default: {},
				description: 'File formats the placeholder is applied to; an empty array means every format',
				typeOptions: {
					multipleValues: true
				},
				placeholder: 'Add Item',
				options: [
					{
						name: 'items',
						displayName: 'Items',
						values: [
							{
								displayName: 'Value',
								name: '_value',
								type: 'string',
								default: ''
							}
						]
					}
				]
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
					'placeholders'
				],
				operation: [
					'api.custom-placeholders.getMany'
				]
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
					'placeholders'
				],
				operation: [
					'api.projects.placeholders.getMany'
				]
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
					'placeholders'
				],
				operation: [
					'api.projects.system-placeholders.getMany'
				]
			}
		}
	}
];
