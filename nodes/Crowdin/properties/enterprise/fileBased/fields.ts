// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody } from '../../../utils/preSend';

export const fieldsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'fields'
				]
			}
		},
		options: [
			{
				name: 'List Fields',
				value: 'api.fields.getMany',
				action: 'List Fields',
				description: '**Required scopes:** `field` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/fields'
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
				name: 'Add Field',
				value: 'api.fields.post',
				action: 'Add Field',
				description: '**Required scopes:** `field` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/fields'
					}
				}
			},
			{
				name: 'Get Field',
				value: 'api.fields.get',
				action: 'Get Field',
				description: '**Required scopes:** `field` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/fields/{{$parameter["fieldId"]}}'
					}
				}
			},
			{
				name: 'Delete Field',
				value: 'api.fields.delete',
				action: 'Delete Field',
				description: '**Required scopes:** `field` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/fields/{{$parameter["fieldId"]}}'
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
				name: 'Edit Field',
				value: 'api.fields.patch',
				action: 'Edit Field',
				description: '**Required scopes:** `field` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/fields/{{$parameter["fieldId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.fields.getMany'
	},
	{
		displayName: 'GET /fields',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /fields',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		}
	},
	{
		displayName: 'GET /fields/{fieldId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /fields/{fieldId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /fields/{fieldId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.patch'
				]
			}
		}
	},
	{
		displayName: 'Search',
		name: 'search',
		description: 'Search fields by `slug` or `name`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'search',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.getMany'
				]
			}
		}
	},
	{
		displayName: 'Entity',
		name: 'entity',
		description: 'Filter fields by entity',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'project',
				value: 'project'
			},
			{
				name: 'user',
				value: 'user'
			},
			{
				name: 'task',
				value: 'task'
			},
			{
				name: 'file',
				value: 'file'
			},
			{
				name: 'translation',
				value: 'translation'
			},
			{
				name: 'string',
				value: 'string'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'entity',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.getMany'
				]
			}
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'Filter fields by type',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'checkbox',
				value: 'checkbox'
			},
			{
				name: 'radiobuttons',
				value: 'radiobuttons'
			},
			{
				name: 'date',
				value: 'date'
			},
			{
				name: 'datetime',
				value: 'datetime'
			},
			{
				name: 'number',
				value: 'number'
			},
			{
				name: 'labels',
				value: 'labels'
			},
			{
				name: 'select',
				value: 'select'
			},
			{
				name: 'multiselect',
				value: 'multiselect'
			},
			{
				name: 'text',
				value: 'text'
			},
			{
				name: 'textarea',
				value: 'textarea'
			},
			{
				name: 'url',
				value: 'url'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'type',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.getMany'
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
					'fields'
				],
				operation: [
					'api.fields.getMany'
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
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Field name',
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
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		},
		placeholder: 'Client company'
	},
	{
		displayName: 'Slug',
		required: true,
		name: 'slug',
		type: 'string',
		default: '',
		description: 'Field slug',
		routing: {
			send: {
				property: 'slug',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		},
		placeholder: 'client-company'
	},
	{
		displayName: 'Type',
		required: true,
		name: 'type',
		type: 'options',
		default: 'select',
		description: 'Field type',
		options: [
			{
				name: 'checkbox',
				value: 'checkbox'
			},
			{
				name: 'radiobuttons',
				value: 'radiobuttons'
			},
			{
				name: 'date',
				value: 'date'
			},
			{
				name: 'datetime',
				value: 'datetime'
			},
			{
				name: 'number',
				value: 'number'
			},
			{
				name: 'labels',
				value: 'labels'
			},
			{
				name: 'select',
				value: 'select'
			},
			{
				name: 'multiselect',
				value: 'multiselect'
			},
			{
				name: 'text',
				value: 'text'
			},
			{
				name: 'textarea',
				value: 'textarea'
			},
			{
				name: 'url',
				value: 'url'
			}
		],
		routing: {
			send: {
				property: 'type',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		}
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Field description',
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
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		},
		placeholder: 'Client company field is appointed to store info about client company'
	},
	{
		displayName: 'Entities',
		required: true,
		name: 'entities',
		type: 'multiOptions',
		default: [],
		description: 'Entities that will be associated with field',
		routing: {
			send: {
				property: 'entities',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		},
		options: [
			{
				name: 'project',
				value: 'project'
			},
			{
				name: 'user',
				value: 'user'
			},
			{
				name: 'task',
				value: 'task'
			},
			{
				name: 'file',
				value: 'file'
			},
			{
				name: 'translation',
				value: 'translation'
			},
			{
				name: 'string',
				value: 'string'
			}
		]
	},
	{
		displayName: 'Config',
		name: 'config',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.post'
				]
			}
		},
		options: [
			{
				displayName: 'List Field Config',
				name: '_listFieldConfig',
				values: [
					{
						displayName: 'Options',
						name: 'options',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Label',
										name: 'label',
										type: 'string',
										default: '',
										description: undefined
									},
									{
										displayName: 'Value',
										name: 'value',
										type: 'string',
										default: '',
										description: undefined
									}
								]
							}
						]
					},
					{
						displayName: 'Locations',
						name: 'locations',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Place',
										name: 'place',
										type: 'options',
										default: '',
										description: undefined,
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'projectCreateModal',
												value: 'projectCreateModal'
											},
											{
												name: 'projectHeader',
												value: 'projectHeader'
											},
											{
												name: 'projectDetails',
												value: 'projectDetails'
											},
											{
												name: 'projectCrowdsourceDetails',
												value: 'projectCrowdsourceDetails'
											},
											{
												name: 'projectSettings',
												value: 'projectSettings'
											},
											{
												name: 'projectTaskEditCreate',
												value: 'projectTaskEditCreate'
											},
											{
												name: 'projectTaskDetails',
												value: 'projectTaskDetails'
											},
											{
												name: 'projectTaskBoardCard',
												value: 'projectTaskBoardCard'
											},
											{
												name: 'fileDetails',
												value: 'fileDetails'
											},
											{
												name: 'fileSettings',
												value: 'fileSettings'
											},
											{
												name: 'userEditModal',
												value: 'userEditModal'
											},
											{
												name: 'userDetails',
												value: 'userDetails'
											},
											{
												name: 'userPopover',
												value: 'userPopover'
											},
											{
												name: 'stringEditModal',
												value: 'stringEditModal'
											},
											{
												name: 'stringDetails',
												value: 'stringDetails'
											},
											{
												name: 'translationUnderContent',
												value: 'translationUnderContent'
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
				displayName: 'Number Field Config',
				name: '_numberFieldConfig',
				values: [
					{
						displayName: 'Min',
						name: 'min',
						type: 'number',
						default: 0,
						description: 'Minimal value of the field'
					},
					{
						displayName: 'Max',
						name: 'max',
						type: 'number',
						default: 0,
						description: 'Maximum value of the field'
					},
					{
						displayName: 'Units',
						name: 'units',
						type: 'string',
						default: '',
						description: 'Units label that will be display next to input'
					},
					{
						displayName: 'Locations',
						name: 'locations',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Place',
										name: 'place',
										type: 'options',
										default: '',
										description: undefined,
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'projectCreateModal',
												value: 'projectCreateModal'
											},
											{
												name: 'projectHeader',
												value: 'projectHeader'
											},
											{
												name: 'projectDetails',
												value: 'projectDetails'
											},
											{
												name: 'projectCrowdsourceDetails',
												value: 'projectCrowdsourceDetails'
											},
											{
												name: 'projectSettings',
												value: 'projectSettings'
											},
											{
												name: 'projectTaskEditCreate',
												value: 'projectTaskEditCreate'
											},
											{
												name: 'projectTaskDetails',
												value: 'projectTaskDetails'
											},
											{
												name: 'projectTaskBoardCard',
												value: 'projectTaskBoardCard'
											},
											{
												name: 'fileDetails',
												value: 'fileDetails'
											},
											{
												name: 'fileSettings',
												value: 'fileSettings'
											},
											{
												name: 'userEditModal',
												value: 'userEditModal'
											},
											{
												name: 'userDetails',
												value: 'userDetails'
											},
											{
												name: 'userPopover',
												value: 'userPopover'
											},
											{
												name: 'stringEditModal',
												value: 'stringEditModal'
											},
											{
												name: 'stringDetails',
												value: 'stringDetails'
											},
											{
												name: 'translationUnderContent',
												value: 'translationUnderContent'
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
				displayName: 'Other Type Field Config',
				name: '_otherTypeFieldConfig',
				values: [
					{
						displayName: 'Locations',
						name: 'locations',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Place',
										name: 'place',
										type: 'options',
										default: '',
										description: undefined,
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'projectCreateModal',
												value: 'projectCreateModal'
											},
											{
												name: 'projectHeader',
												value: 'projectHeader'
											},
											{
												name: 'projectDetails',
												value: 'projectDetails'
											},
											{
												name: 'projectCrowdsourceDetails',
												value: 'projectCrowdsourceDetails'
											},
											{
												name: 'projectSettings',
												value: 'projectSettings'
											},
											{
												name: 'projectTaskEditCreate',
												value: 'projectTaskEditCreate'
											},
											{
												name: 'projectTaskDetails',
												value: 'projectTaskDetails'
											},
											{
												name: 'projectTaskBoardCard',
												value: 'projectTaskBoardCard'
											},
											{
												name: 'fileDetails',
												value: 'fileDetails'
											},
											{
												name: 'fileSettings',
												value: 'fileSettings'
											},
											{
												name: 'userEditModal',
												value: 'userEditModal'
											},
											{
												name: 'userDetails',
												value: 'userDetails'
											},
											{
												name: 'userPopover',
												value: 'userPopover'
											},
											{
												name: 'stringEditModal',
												value: 'stringEditModal'
											},
											{
												name: 'stringDetails',
												value: 'stringDetails'
											},
											{
												name: 'translationUnderContent',
												value: 'translationUnderContent'
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
				preSend: [
					normalizeFieldBody
				],
				property: 'config',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Field Id',
		name: 'fieldId',
		required: true,
		description: 'Field Identifier. Get via [List Fields](#operation/api.fields.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getFields'
		}
	},
	{
		displayName: 'Field Id',
		name: 'fieldId',
		required: true,
		description: 'Field Identifier. Get via [List Fields](#operation/api.fields.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getFields'
		}
	},
	{
		displayName: 'Field Id',
		name: 'fieldId',
		required: true,
		description: 'Field Identifier. Get via [List Fields](#operation/api.fields.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'fields'
				],
				operation: [
					'api.fields.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getFields'
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
					'fields'
				],
				operation: [
					'api.fields.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Field name',
				placeholder: 'Client company'
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Field description',
				placeholder: 'Client company field is appointed to store info about client company'
			},
			{
				displayName: 'Config',
				name: 'config',
				description: 'Select configuration type',
				default: {},
				type: 'fixedCollection',
				options: [
					{
						name: '_listFieldConfig',
						displayName: 'List Field Config',
						values: [
							{
								displayName: 'Options',
								name: 'options',
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
										displayName: 'Item',
										values: [
											{
												displayName: 'Label',
												name: 'label',
												type: 'string',
												default: '',
												description: undefined
											},
											{
												displayName: 'Value',
												name: 'value',
												type: 'string',
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Locations',
								name: 'locations',
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
										displayName: 'Item',
										values: [
											{
												displayName: 'Place',
												name: 'place',
												type: 'options',
												default: '',
												description: undefined,
												options: [
													{
														name: '-',
														value: ''
													},
													{
														name: 'projectCreateModal',
														value: 'projectCreateModal'
													},
													{
														name: 'projectHeader',
														value: 'projectHeader'
													},
													{
														name: 'projectDetails',
														value: 'projectDetails'
													},
													{
														name: 'projectCrowdsourceDetails',
														value: 'projectCrowdsourceDetails'
													},
													{
														name: 'projectSettings',
														value: 'projectSettings'
													},
													{
														name: 'projectTaskEditCreate',
														value: 'projectTaskEditCreate'
													},
													{
														name: 'projectTaskDetails',
														value: 'projectTaskDetails'
													},
													{
														name: 'projectTaskBoardCard',
														value: 'projectTaskBoardCard'
													},
													{
														name: 'fileDetails',
														value: 'fileDetails'
													},
													{
														name: 'fileSettings',
														value: 'fileSettings'
													},
													{
														name: 'userEditModal',
														value: 'userEditModal'
													},
													{
														name: 'userDetails',
														value: 'userDetails'
													},
													{
														name: 'userPopover',
														value: 'userPopover'
													},
													{
														name: 'stringEditModal',
														value: 'stringEditModal'
													},
													{
														name: 'stringDetails',
														value: 'stringDetails'
													},
													{
														name: 'translationUnderContent',
														value: 'translationUnderContent'
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
						name: '_numberFieldConfig',
						displayName: 'Number Field Config',
						values: [
							{
								displayName: 'Min',
								name: 'min',
								type: 'number',
								default: 0,
								description: 'Minimal value of the field'
							},
							{
								displayName: 'Max',
								name: 'max',
								type: 'number',
								default: 0,
								description: 'Maximum value of the field'
							},
							{
								displayName: 'Units',
								name: 'units',
								type: 'string',
								default: '',
								description: 'Units label that will be display next to input'
							},
							{
								displayName: 'Locations',
								name: 'locations',
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
										displayName: 'Item',
										values: [
											{
												displayName: 'Place',
												name: 'place',
												type: 'options',
												default: '',
												description: undefined,
												options: [
													{
														name: '-',
														value: ''
													},
													{
														name: 'projectCreateModal',
														value: 'projectCreateModal'
													},
													{
														name: 'projectHeader',
														value: 'projectHeader'
													},
													{
														name: 'projectDetails',
														value: 'projectDetails'
													},
													{
														name: 'projectCrowdsourceDetails',
														value: 'projectCrowdsourceDetails'
													},
													{
														name: 'projectSettings',
														value: 'projectSettings'
													},
													{
														name: 'projectTaskEditCreate',
														value: 'projectTaskEditCreate'
													},
													{
														name: 'projectTaskDetails',
														value: 'projectTaskDetails'
													},
													{
														name: 'projectTaskBoardCard',
														value: 'projectTaskBoardCard'
													},
													{
														name: 'fileDetails',
														value: 'fileDetails'
													},
													{
														name: 'fileSettings',
														value: 'fileSettings'
													},
													{
														name: 'userEditModal',
														value: 'userEditModal'
													},
													{
														name: 'userDetails',
														value: 'userDetails'
													},
													{
														name: 'userPopover',
														value: 'userPopover'
													},
													{
														name: 'stringEditModal',
														value: 'stringEditModal'
													},
													{
														name: 'stringDetails',
														value: 'stringDetails'
													},
													{
														name: 'translationUnderContent',
														value: 'translationUnderContent'
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
						name: '_otherTypeFieldConfig',
						displayName: 'Other Type Field Config',
						values: [
							{
								displayName: 'Locations',
								name: 'locations',
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
										displayName: 'Item',
										values: [
											{
												displayName: 'Place',
												name: 'place',
												type: 'options',
												default: '',
												description: undefined,
												options: [
													{
														name: '-',
														value: ''
													},
													{
														name: 'projectCreateModal',
														value: 'projectCreateModal'
													},
													{
														name: 'projectHeader',
														value: 'projectHeader'
													},
													{
														name: 'projectDetails',
														value: 'projectDetails'
													},
													{
														name: 'projectCrowdsourceDetails',
														value: 'projectCrowdsourceDetails'
													},
													{
														name: 'projectSettings',
														value: 'projectSettings'
													},
													{
														name: 'projectTaskEditCreate',
														value: 'projectTaskEditCreate'
													},
													{
														name: 'projectTaskDetails',
														value: 'projectTaskDetails'
													},
													{
														name: 'projectTaskBoardCard',
														value: 'projectTaskBoardCard'
													},
													{
														name: 'fileDetails',
														value: 'fileDetails'
													},
													{
														name: 'fileSettings',
														value: 'fileSettings'
													},
													{
														name: 'userEditModal',
														value: 'userEditModal'
													},
													{
														name: 'userDetails',
														value: 'userDetails'
													},
													{
														name: 'userPopover',
														value: 'userPopover'
													},
													{
														name: 'stringEditModal',
														value: 'stringEditModal'
													},
													{
														name: 'stringDetails',
														value: 'stringDetails'
													},
													{
														name: 'translationUnderContent',
														value: 'translationUnderContent'
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
				displayName: 'Entities',
				name: 'entities',
				type: 'multiOptions',
				default: [],
				description: 'Entities that will be associated with field',
				options: [
					{
						name: 'project',
						value: 'project'
					},
					{
						name: 'user',
						value: 'user'
					},
					{
						name: 'task',
						value: 'task'
					},
					{
						name: 'file',
						value: 'file'
					},
					{
						name: 'translation',
						value: 'translation'
					},
					{
						name: 'string',
						value: 'string'
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
					'fields'
				],
				operation: [
					'api.fields.getMany'
				]
			}
		}
	}
];
