// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody, parseJsonBodyField } from '../../../utils/preSend';

export const applicationsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'applications'
				]
			}
		},
		options: [
			{
				name: 'List Application Installations',
				value: 'api.applications.installations.getMany',
				action: 'List Application Installations',
				description: '**Required scopes:** `application` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/installations'
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
				name: 'Install Application',
				value: 'api.applications.installations.post',
				action: 'Install Application',
				description: '**Required scopes:** `application` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/installations'
					}
				}
			},
			{
				name: 'Get Application Installation',
				value: 'api.applications.installations.get',
				action: 'Get Application Installation',
				description: '**Required scopes:** `application` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/installations/{{$parameter["identifier"]}}'
					}
				}
			},
			{
				name: 'Delete Application Installation',
				value: 'api.applications.installations.delete',
				action: 'Delete Application Installation',
				description: '**Required scopes:** `application` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/applications/installations/{{$parameter["identifier"]}}'
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
				name: 'Edit Application Installation',
				value: 'api.applications.installations.patch',
				action: 'Edit Application Installation',
				description: '**Required scopes:** `application` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/applications/installations/{{$parameter["identifier"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Get Application Data',
				value: 'api.applications.api.get',
				action: 'Get Application Data',
				description: '**Required scopes:** `application` (Read only).\n\nRetrieves data from the specified application.\n\n__Note__: Query parameters are application-specific and vary depending on the application being accessed.',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/{{$parameter["path"]}}'
					}
				}
			},
			{
				name: 'Update or Restore Application Data',
				value: 'api.applications.api.put',
				action: 'Update or Restore Application Data',
				description: '**Required scopes:** `application` (Read and Write).\n\nUpdates or restores data in the specified application.\n\n__Note__: Both the query parameters and request body are application-specific and vary depending on the application being accessed.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/{{$parameter["path"]}}'
					},
					send: {
						preSend: [
							parseJsonBodyField()
						]
					}
				}
			},
			{
				name: 'Add Application Data',
				value: 'api.applications.api.post',
				action: 'Add Application Data',
				description: '**Required scopes:** `application` (Read and Write).\n\nAdds new data to the specified application.\n\n__Note__: Both the query parameters and request body are application-specific and vary depending on the application being accessed.',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/{{$parameter["path"]}}'
					},
					send: {
						preSend: [
							parseJsonBodyField()
						]
					}
				}
			},
			{
				name: 'Delete Application Data',
				value: 'api.applications.api.delete',
				action: 'Delete Application Data',
				description: '**Required scopes:** `application` (Read and Write).\n\nDeletes data from the specified application.\n\n__Note__: Query parameters are application-specific and vary depending on the application being accessed.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/{{$parameter["path"]}}'
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
				name: 'Edit Application Data',
				value: 'api.applications.api.patch',
				action: 'Edit Application Data',
				description: '**Required scopes:** `application` (Read and Write).\n\nEdits existing data in the specified application.\n\n__Note__: Both the query parameters and request body are application-specific and vary depending on the application being accessed.',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/{{$parameter["path"]}}'
					},
					send: {
						preSend: [
							parseJsonBodyField()
						]
					}
				}
			}
		],
		default: 'api.applications.installations.getMany'
	},
	{
		displayName: 'GET /applications/installations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/installations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.post'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/installations/{identifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /applications/installations/{identifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /applications/installations/{identifier}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /applications/{applicationIdentifier}/api/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.put'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/api/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /applications/{applicationIdentifier}/api/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /applications/{applicationIdentifier}/api/{path}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.patch'
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
					'applications'
				],
				operation: [
					'api.applications.installations.getMany'
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
		displayName: 'Installed By',
		name: 'installedBy',
		description: 'User Identifier',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'installedBy',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		description: 'Read more about [sorting rules](#section/Introduction/Sorting)',
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
					'applications'
				],
				operation: [
					'api.applications.installations.getMany'
				]
			}
		},
		placeholder: 'createdAt desc'
	},
	{
		displayName: 'Url',
		required: true,
		name: 'url',
		type: 'string',
		default: '',
		description: 'Manifest URL',
		routing: {
			send: {
				property: 'url',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.post'
				]
			}
		},
		placeholder: 'https://localhost.dev/crowdin.json'
	},
	{
		displayName: 'Permissions',
		name: 'permissions',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'permissions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}',
				preSend: [
					normalizeFieldBody
				]
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.post'
				]
			}
		},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				values: [
					{
						displayName: 'Project',
						name: 'project',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Value',
										name: 'value',
										type: 'options',
										default: '',
										description: undefined,
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'own',
												value: 'own'
											},
											{
												name: 'restricted',
												value: 'restricted'
											}
										],
										placeholder: 'restricted'
									},
									{
										displayName: 'Ids',
										name: 'ids',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: undefined,
										placeholder: 'Add Item',
										options: [
											{
												displayName: 'Items',
												name: 'items',
												values: [
													{
														displayName: 'Value',
														name: '_value',
														type: 'number',
														default: 0,
														description: undefined,
														placeholder: '0'
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		displayName: 'Modules',
		name: 'modules',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'modules',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
				preSend: [
					normalizeFieldBody
				]
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Item',
				name: 'items',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: undefined,
						placeholder: 'some-module-key'
					},
					{
						displayName: 'Permissions',
						name: 'permissions',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'User',
										name: 'user',
										type: 'fixedCollection',
										default: {},
										description: undefined,
										placeholder: 'Add Field',
										options: [
											{
												displayName: 'Fields',
												name: 'fields',
												values: [
													{
														displayName: 'Value',
														name: 'value',
														type: 'options',
														default: '',
														description: '\n\n __Note__: For exporters, the `all` value will be set',
														options: [
															{
																name: '-',
																value: ''
															},
															{
																name: 'owner',
																value: 'owner'
															},
															{
																name: 'managers',
																value: 'managers'
															},
															{
																name: 'all',
																value: 'all'
															},
															{
																name: 'guests',
																value: 'guests'
															},
															{
																name: 'restricted',
																value: 'restricted'
															}
														],
														placeholder: 'restricted'
													},
													{
														displayName: 'Ids',
														name: 'ids',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: true
														},
														default: {},
														description: 'Ids is only available for restricted value',
														placeholder: 'Add Item',
														options: [
															{
																displayName: 'Items',
																name: 'items',
																values: [
																	{
																		displayName: 'Value',
																		name: '_value',
																		type: 'number',
																		default: 0,
																		description: undefined,
																		placeholder: '0'
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		displayName: 'Assign Agent',
		name: 'assignAgent',
		type: 'boolean',
		default: false,
		description: 'Assign Agent as a manager to all existing projects',
		routing: {
			send: {
				property: 'assignAgent',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.post'
				]
			}
		}
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		required: true,
		description: 'Application Identifier. Get via [List Applications](#operation/api.applications.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		required: true,
		description: 'Application Identifier. Get via [List Applications](#operation/api.applications.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Force',
		name: 'force',
		description: 'Force to delete application installation',
		default: true,
		type: 'boolean',
		routing: {
			send: {
				type: 'query',
				property: 'force',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.delete'
				]
			}
		}
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		required: true,
		description: 'Application Identifier. Get via [List Applications](#operation/api.applications.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.installations.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application. Get via [List Application Installations](#operation/api.applications.installations.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'The path is implemented by the application.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.get'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application. Get via [List Application Installations](#operation/api.applications.installations.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'The path is implemented by the application.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.put'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application. Get via [List Application Installations](#operation/api.applications.installations.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'The path is implemented by the application.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.post'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application. Get via [List Application Installations](#operation/api.applications.installations.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'The path is implemented by the application.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.delete'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application. Get via [List Application Installations](#operation/api.applications.installations.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Path',
		name: 'path',
		required: true,
		description: 'The path is implemented by the application.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.patch'
				]
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
					'applications'
				],
				operation: [
					'api.applications.installations.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Permissions',
				name: 'permissions',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /permissions',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Project',
								name: 'project',
								type: 'fixedCollection',
								default: {},
								description: undefined,
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Value',
												name: 'value',
												type: 'options',
												default: '',
												description: undefined,
												options: [
													{
														name: '-',
														value: ''
													},
													{
														name: 'own',
														value: 'own'
													},
													{
														name: 'restricted',
														value: 'restricted'
													}
												],
												placeholder: 'restricted'
											},
											{
												displayName: 'Ids',
												name: 'ids',
												type: 'fixedCollection',
												typeOptions: {
													multipleValues: true
												},
												default: {},
												description: undefined,
												placeholder: 'Add Item',
												options: [
													{
														name: 'items',
														displayName: 'Items',
														values: [
															{
																displayName: 'Value',
																name: '_value',
																type: 'number',
																default: 0,
																description: undefined,
																placeholder: '0'
															}
														]
													}
												]
											}
										]
									}
								]
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
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'The request body as JSON. The structure depends on the specific application.',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.post'
				]
			}
		}
	},
	{
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'The request body as JSON. The structure depends on the specific application.',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.put'
				]
			}
		}
	},
	{
		displayName: 'Request Body (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'The request body as JSON. The structure depends on the specific application.',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.api.patch'
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
					'applications'
				],
				operation: [
					'api.applications.installations.getMany'
				]
			}
		}
	}
];
