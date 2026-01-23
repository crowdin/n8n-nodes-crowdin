// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody } from '../../../utils/preSend';

export const glossariesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				]
			}
		},
		options: [
			{
				name: 'List Concepts',
				value: 'api.glossaries.concepts.getMany',
				action: 'List Concepts',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/concepts'
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
				name: 'Get concept',
				value: 'api.glossaries.concepts.get',
				action: 'Get concept',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/concepts/{{$parameter["conceptId"]}}'
					}
				}
			},
			{
				name: 'Update concept',
				value: 'api.glossaries.concepts.put',
				action: 'Update concept',
				description: '**Required scopes:** `glossary` (Read and Write).\n\n__Note:__ There is no separate method for concept creation. Concepts are automatically created when adding a term without specifying a `conceptId`.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/concepts/{{$parameter["conceptId"]}}'
					}
				}
			},
			{
				name: 'Delete Concept',
				value: 'api.glossaries.concepts.delete',
				action: 'Delete Concept',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/concepts/{{$parameter["conceptId"]}}'
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
				name: 'List Glossaries',
				value: 'api.glossaries.getMany',
				action: 'List Glossaries',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries'
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
				name: 'Add Glossary',
				value: 'api.glossaries.post',
				action: 'Add Glossary',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/glossaries'
					}
				}
			},
			{
				name: 'Get Glossary',
				value: 'api.glossaries.get',
				action: 'Get Glossary',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}'
					}
				}
			},
			{
				name: 'Delete Glossary',
				value: 'api.glossaries.delete',
				action: 'Delete Glossary',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/glossaries/{{$parameter["glossaryId"]}}'
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
				name: 'Edit Glossary',
				value: 'api.glossaries.patch',
				action: 'Edit Glossary',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/glossaries/{{$parameter["glossaryId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Export Glossary',
				value: 'api.glossaries.exports.post',
				action: 'Export Glossary',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/exports'
					}
				}
			},
			{
				name: 'Check Glossary Export Status',
				value: 'api.glossaries.exports.get',
				action: 'Check Glossary Export Status',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/exports/{{$parameter["exportId"]}}'
					}
				}
			},
			{
				name: 'Download Glossary',
				value: 'api.glossaries.exports.download.download',
				action: 'Download Glossary',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/exports/{{$parameter["exportId"]}}/download'
					}
				}
			},
			{
				name: 'Import Glossary',
				value: 'api.glossaries.imports.post',
				action: 'Import Glossary',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/imports'
					}
				}
			},
			{
				name: 'Check Glossary Import Status',
				value: 'api.glossaries.imports.get',
				action: 'Check Glossary Import Status',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/imports/{{$parameter["importId"]}}'
					}
				}
			},
			{
				name: 'Concordance search in Glossaries',
				value: 'api.projects.glossaries.concordance.post',
				action: 'Concordance search in Glossaries',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/glossaries/concordance'
					}
				}
			},
			{
				name: 'List Terms',
				value: 'api.glossaries.terms.getMany',
				action: 'List Terms',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/terms'
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
				name: 'Add Term',
				value: 'api.glossaries.terms.post',
				action: 'Add Term',
				description: '**Required scopes:** `glossary` (Read and Write).\n\n__Note:__ If `conceptId` is not specified, a new concept will be automatically created for the term.',
				routing: {
					request: {
						method: 'POST',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/terms'
					}
				}
			},
			{
				name: 'Clear Glossary',
				value: 'api.glossaries.terms.deleteMany',
				action: 'Clear Glossary',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/terms'
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
				name: 'Get Term',
				value: 'api.glossaries.terms.get',
				action: 'Get Term',
				description: '**Required scopes:** `glossary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/terms/{{$parameter["termId"]}}'
					}
				}
			},
			{
				name: 'Delete Term',
				value: 'api.glossaries.terms.delete',
				action: 'Delete Term',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/terms/{{$parameter["termId"]}}'
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
				name: 'Edit Term',
				value: 'api.glossaries.terms.patch',
				action: 'Edit Term',
				description: '**Required scopes:** `glossary` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/glossaries/{{$parameter["glossaryId"]}}/terms/{{$parameter["termId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.glossaries.concepts.getMany'
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/concepts',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/concepts/{conceptId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /glossaries/{glossaryId}/concepts/{conceptId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		}
	},
	{
		displayName: 'DELETE /glossaries/{glossaryId}/concepts/{conceptId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /glossaries',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.post'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /glossaries/{glossaryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /glossaries/{glossaryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.patch'
				]
			}
		}
	},
	{
		displayName: 'POST /glossaries/{glossaryId}/exports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/exports/{exportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/exports/{exportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.download.download'
				]
			}
		}
	},
	{
		displayName: 'POST /glossaries/{glossaryId}/imports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/imports/{importId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.get'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/glossaries/concordance',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.projects.glossaries.concordance.post'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/terms',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /glossaries/{glossaryId}/terms',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /glossaries/{glossaryId}/terms',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'GET /glossaries/{glossaryId}/terms/{termId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /glossaries/{glossaryId}/terms/{termId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /glossaries/{glossaryId}/terms/{termId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.patch'
				]
			}
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,priority'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.getMany'
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
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Concept Id',
		name: 'conceptId',
		required: true,
		description: 'Concept Identifier. Get via [List Concepts](#operation/api.glossaries.concepts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryConcepts',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Concept Id',
		name: 'conceptId',
		required: true,
		description: 'Concept Identifier. Get via [List Concepts](#operation/api.glossaries.concepts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryConcepts',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'subject',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		placeholder: 'general'
	},
	{
		displayName: 'Definition',
		name: 'definition',
		type: 'string',
		default: '',
		description: 'This is a sample definition.',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		placeholder: 'This is a sample definition.'
	},
	{
		displayName: 'Translatable',
		name: 'translatable',
		type: 'boolean',
		default: true,
		description: undefined,
		routing: {
			send: {
				property: 'translatable',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		}
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		default: '',
		description: 'Any kind of note, such as a usage note, explanation, or instruction',
		routing: {
			send: {
				property: 'note',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		placeholder: 'Any concept-level note information'
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'Base URL',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		placeholder: 'www.example.com'
	},
	{
		displayName: 'Figure',
		name: 'figure',
		type: 'string',
		default: '',
		description: 'Used for an external cross-reference, such as a URL, or to point to an external graphic file',
		routing: {
			send: {
				property: 'figure',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		placeholder: 'www.example.com/image.png'
	},
	{
		displayName: 'Languages Details',
		name: 'languagesDetails',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'languagesDetails',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.put'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Concept Languages Details',
				name: 'items',
				values: [
					{
						displayName: 'Language Id',
						name: 'languageId',
						type: 'options',
						default: '',
						description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getLanguages'
						}
					},
					{
						displayName: 'Definition',
						name: 'definition',
						type: 'string',
						default: '',
						description: 'Some definition',
						placeholder: 'This is a sample definition.',
						required: true
					},
					{
						displayName: 'Note',
						name: 'note',
						type: 'string',
						default: '',
						description: 'Any kind of note, such as a usage note, explanation, or instruction.',
						placeholder: 'Any kind of note, such as a usage note, explanation, or instruction.'
					}
				]
			}
		]
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Concept Id',
		name: 'conceptId',
		required: true,
		description: 'Concept Identifier. Get via [List Concepts](#operation/api.glossaries.concepts.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryConcepts',
			loadOptionsDependsOn: [
				'glossaryId'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.getMany'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'List user glossaries',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'userId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Glossary name',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.post'
				]
			}
		},
		placeholder: 'Be My Eyes iOS\'s Glossary'
	},
	{
		displayName: 'Language Id',
		required: true,
		name: 'languageId',
		type: 'options',
		default: '',
		description: 'Glossary Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'languageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		default: '',
		description: 'Supported formats:\n * \'tbx\'\n * \'tbx_v3\'\n * \'csv\'\n * \'xlsx\'',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'tbx',
				value: 'tbx'
			},
			{
				name: 'tbx_v3',
				value: 'tbx_v3'
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'xlsx',
				value: 'xlsx'
			}
		],
		routing: {
			send: {
				property: 'format',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Export Fields',
		name: 'exportFields',
		type: 'multiOptions',
		default: [],
		description: 'Array fields for export.\n\n__Note:__ Used for export CSV or XLSX format only',
		routing: {
			send: {
				property: 'exportFields',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		},
		options: [
			{
				name: 'term',
				value: 'term'
			},
			{
				name: 'description',
				value: 'description'
			},
			{
				name: 'partOfSpeech',
				value: 'partOfSpeech'
			},
			{
				name: 'type',
				value: 'type'
			},
			{
				name: 'status',
				value: 'status'
			},
			{
				name: 'gender',
				value: 'gender'
			},
			{
				name: 'note',
				value: 'note'
			},
			{
				name: 'url',
				value: 'url'
			},
			{
				name: 'conceptDefinition',
				value: 'conceptDefinition'
			},
			{
				name: 'conceptSubject',
				value: 'conceptSubject'
			},
			{
				name: 'conceptNote',
				value: 'conceptNote'
			},
			{
				name: 'conceptUrl',
				value: 'conceptUrl'
			},
			{
				name: 'conceptFigure',
				value: 'conceptFigure'
			}
		]
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		description: undefined,
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
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		},
		placeholder: 'value'
	},
	{
		displayName: 'Case Sensitive',
		name: 'caseSensitive',
		type: 'boolean',
		default: false,
		description: '__Note:__ Must be used together with `text`',
		routing: {
			send: {
				property: 'caseSensitive',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Search Strict',
		name: 'searchStrict',
		type: 'boolean',
		default: false,
		description: '__Note:__ Must be used together with `text`',
		routing: {
			send: {
				property: 'searchStrict',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Search Full Match',
		name: 'searchFullMatch',
		type: 'boolean',
		default: false,
		description: '__Note:__ Must be used together with `text`',
		routing: {
			send: {
				property: 'searchFullMatch',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: '',
		description: undefined,
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'PREFERRED',
				value: 'PREFERRED'
			},
			{
				name: 'ADMITTED',
				value: 'ADMITTED'
			},
			{
				name: 'NOT_RECOMMENDED',
				value: 'NOT_RECOMMENDED'
			},
			{
				name: 'OBSOLETE',
				value: 'OBSOLETE'
			},
			{
				name: 'DRAFT',
				value: 'DRAFT'
			}
		],
		routing: {
			send: {
				property: 'status',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Part Of Speech',
		name: 'partOfSpeech',
		type: 'options',
		default: '',
		description: undefined,
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'NOUN',
				value: 'NOUN'
			},
			{
				name: 'VERB',
				value: 'VERB'
			},
			{
				name: 'ADJ',
				value: 'ADJ'
			},
			{
				name: 'PRON',
				value: 'PRON'
			},
			{
				name: 'PROPN',
				value: 'PROPN'
			},
			{
				name: 'DET',
				value: 'DET'
			},
			{
				name: 'ADV',
				value: 'ADV'
			},
			{
				name: 'ADP',
				value: 'ADP'
			},
			{
				name: 'CCONJ',
				value: 'CCONJ'
			},
			{
				name: 'SCONJ',
				value: 'SCONJ'
			},
			{
				name: 'NUM',
				value: 'NUM'
			},
			{
				name: 'INTJ',
				value: 'INTJ'
			},
			{
				name: 'AUX',
				value: 'AUX'
			},
			{
				name: 'PRT',
				value: 'PRT'
			},
			{
				name: 'SYM',
				value: 'SYM'
			},
			{
				name: 'X',
				value: 'X'
			}
		],
		routing: {
			send: {
				property: 'partOfSpeech',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: undefined,
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'FULL_FORM',
				value: 'FULL_FORM'
			},
			{
				name: 'ACRONYM',
				value: 'ACRONYM'
			},
			{
				name: 'ABBREVIATION',
				value: 'ABBREVIATION'
			},
			{
				name: 'SHORT_FORM',
				value: 'SHORT_FORM'
			},
			{
				name: 'PHRASE',
				value: 'PHRASE'
			},
			{
				name: 'VARIANT',
				value: 'VARIANT'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options',
		default: '',
		description: undefined,
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'MASCULINE',
				value: 'MASCULINE'
			},
			{
				name: 'FEMININE',
				value: 'FEMININE'
			},
			{
				name: 'NEUTER',
				value: 'NEUTER'
			},
			{
				name: 'COMMON',
				value: 'COMMON'
			},
			{
				name: 'OTHER',
				value: 'OTHER'
			}
		],
		routing: {
			send: {
				property: 'gender',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Author Id',
		name: 'authorId',
		type: 'options',
		default: '',
		description: undefined,
		routing: {
			send: {
				property: 'authorId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Date From',
		name: 'dateTime:dateFrom',
		type: 'dateTime',
		default: '',
		description: 'Export date from in UTC, ISO 8601',
		routing: {
			send: {
				property: 'dateFrom',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		},
		placeholder: '2024-01-23T07:00:14+00:00'
	},
	{
		displayName: 'Date To',
		name: 'dateTime:dateTo',
		type: 'dateTime',
		default: '',
		description: 'Export date to in UTC, ISO 8601',
		routing: {
			send: {
				property: 'dateTo',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.post'
				]
			}
		},
		placeholder: '2024-09-27T07:00:14+00:00'
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export Glossary](#operation/api.glossaries.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.get'
				]
			}
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export Glossary](#operation/api.glossaries.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.exports.download.download'
				]
			}
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)\n\n Supported file formats:\n * TBX\n * CSV\n * XLS/XLSX',
		routing: {
			send: {
				property: 'storageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Scheme',
		name: 'scheme',
		type: 'json',
		default: '{\n  "term_en": 0,\n  "description_en": 1\n}',
		description: 'Defines data columns mapping. Acceptable value is combination of following constants:\n * `term_{%language_code%}` – column with terms\n * `description_{%language_code%}` – column with terms description\n * `partOfSpeech_{%language_code%}` – column with terms part of speech\n * `status_{%language_code%}` – column with terms status\n * `type_{%language_code%}` – column with terms type\n * `gender_{%language_code%}` – column with terms gender\n * `url_{%language_code%}` – column with terms URL\n * `note_{%language_code%}` – column with terms note where `%language_code%` – placeholder for your language code\n * `conceptDefinition` – column with concepts definition\n * `conceptSubject` – column with concepts subject\n * `conceptNote` – column with concepts note\n * `conceptUrl` – column with concepts URL\n * `conceptFigure` – column with concepts figure\n\n__Note:__ Used for upload of CSV or XLS/XLSX files only',
		routing: {
			send: {
				property: 'scheme',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.post'
				]
			}
		}
	},
	{
		displayName: 'First Line Contains Header',
		name: 'firstLineContainsHeader',
		type: 'boolean',
		default: false,
		description: 'Defines whether file includes first row header that should not be imported\n\n__Note:__  Used for upload of CSV or XLS/XLSX files only',
		routing: {
			send: {
				property: 'firstLineContainsHeader',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.post'
				]
			}
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Import Id',
		name: 'importId',
		required: true,
		description: 'Import Identifier, consists of 36 characters. Get via [Import Glossary](#operation/api.glossaries.imports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.imports.get'
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
					'glossaries'
				],
				operation: [
					'api.projects.glossaries.concordance.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Source Language Id',
		required: true,
		name: 'sourceLanguageId',
		type: 'options',
		default: '',
		description: 'Source Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'sourceLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.projects.glossaries.concordance.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Target Language Id',
		required: true,
		name: 'targetLanguageId',
		type: 'options',
		default: '',
		description: 'Target Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'targetLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.projects.glossaries.concordance.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Expressions',
		required: true,
		name: 'expressions',
		type: 'fixedCollection',
		default: {},
		description: 'Expressions to search\n\n__Note:__ Can\'t be used with `expression` in same request',
		routing: {
			send: {
				property: 'expressions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.projects.glossaries.concordance.post'
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
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,text'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'Project Member Identifier. Get via [List Project Members](#operation/api.projects.members.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'userId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		description: 'Term Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'languageId',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Concept Id',
		name: 'conceptId',
		description: 'Filter terms by `conceptId`\n\n__Note:__ Use for terms that have translations. Get via [List Concepts](#operation/api.glossaries.concepts.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'conceptId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryConcepts',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Croql',
		name: 'croql',
		description: 'Filter strings by [CroQL](https://developer.crowdin.com/croql/)\n\n__Note:__ Can be used only with `orderBy`, `offset` and `limit` in same request',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'croql',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
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
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Language Id',
		required: true,
		name: 'languageId',
		type: 'options',
		default: '',
		description: 'Term Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		routing: {
			send: {
				property: 'languageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: 'Term',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		},
		placeholder: 'Voir'
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Term description',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		},
		placeholder: 'use for pages only (check screenshots)'
	},
	{
		displayName: 'Part Of Speech',
		name: 'partOfSpeech',
		type: 'options',
		default: '',
		description: 'Term part of speech',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'adjective',
				value: 'adjective'
			},
			{
				name: 'adposition',
				value: 'adposition'
			},
			{
				name: 'adverb',
				value: 'adverb'
			},
			{
				name: 'auxiliary',
				value: 'auxiliary'
			},
			{
				name: 'coordinating conjunction',
				value: 'coordinating conjunction'
			},
			{
				name: 'determiner',
				value: 'determiner'
			},
			{
				name: 'interjection',
				value: 'interjection'
			},
			{
				name: 'noun',
				value: 'noun'
			},
			{
				name: 'numeral',
				value: 'numeral'
			},
			{
				name: 'particle',
				value: 'particle'
			},
			{
				name: 'pronoun',
				value: 'pronoun'
			},
			{
				name: 'proper noun',
				value: 'proper noun'
			},
			{
				name: 'subordinating conjunction',
				value: 'subordinating conjunction'
			},
			{
				name: 'verb',
				value: 'verb'
			},
			{
				name: 'other',
				value: 'other'
			}
		],
		routing: {
			send: {
				property: 'partOfSpeech',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: '',
		description: 'Term status',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'preferred',
				value: 'preferred'
			},
			{
				name: 'admitted',
				value: 'admitted'
			},
			{
				name: 'not recommended',
				value: 'not recommended'
			},
			{
				name: 'obsolete',
				value: 'obsolete'
			},
			{
				name: 'draft',
				value: 'draft'
			}
		],
		routing: {
			send: {
				property: 'status',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Term type',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'full form',
				value: 'full form'
			},
			{
				name: 'acronym',
				value: 'acronym'
			},
			{
				name: 'abbreviation',
				value: 'abbreviation'
			},
			{
				name: 'short form',
				value: 'short form'
			},
			{
				name: 'phrase',
				value: 'phrase'
			},
			{
				name: 'variant',
				value: 'variant'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options',
		default: '',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'masculine',
				value: 'masculine'
			},
			{
				name: 'feminine',
				value: 'feminine'
			},
			{
				name: 'neuter',
				value: 'neuter'
			},
			{
				name: 'other',
				value: 'other'
			}
		],
		routing: {
			send: {
				property: 'gender',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		default: '',
		description: 'Any kind of note, such as a usage note, explanation, or instruction',
		routing: {
			send: {
				property: 'note',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'Base URL',
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		}
	},
	{
		displayName: 'Concept Id',
		name: 'conceptId',
		type: 'options',
		default: '',
		description: 'Defines whether to add translation to the existing term. Get `concept_id` via [List Terms](#operation/api.glossaries.terms.getMany) or via [List Concepts](#operation/api.glossaries.concepts.getMany)',
		routing: {
			send: {
				property: 'conceptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryConcepts',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'languageId',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Concept Id',
		name: 'conceptId',
		description: 'Defines whether to delete specific term along with its translations. Get `conceptId` via [List Terms](#operation/api.glossaries.terms.getMany) or via [List Concepts](#operation/api.glossaries.concepts.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'conceptId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryConcepts',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Term Id',
		name: 'termId',
		required: true,
		description: 'Term Identifier. Get via [List Terms](#operation/api.glossaries.terms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryTerms',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Term Id',
		name: 'termId',
		required: true,
		description: 'Term Identifier. Get via [List Terms](#operation/api.glossaries.terms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryTerms',
			loadOptionsDependsOn: [
				'glossaryId'
			]
		}
	},
	{
		displayName: 'Glossary Id',
		name: 'glossaryId',
		required: true,
		description: 'Glossary Identifier. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'Term Id',
		name: 'termId',
		required: true,
		description: 'Term Identifier. Get via [List Terms](#operation/api.glossaries.terms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaryTerms',
			loadOptionsDependsOn: [
				'glossaryId'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Glossary name',
				placeholder: 'Be My Eyes iOS\'s Glossary'
			},
			{
				displayName: 'Language Id',
				name: 'languageId',
				type: 'options',
				default: '',
				description: 'Glossary Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getLanguages'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Term',
				placeholder: 'Voir'
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Term description',
				placeholder: 'use for pages only (check screenshots)'
			},
			{
				displayName: 'Part Of Speech',
				name: 'partOfSpeech',
				type: 'options',
				default: '',
				description: 'Term part of speech',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'adjective',
						value: 'adjective'
					},
					{
						name: 'adposition',
						value: 'adposition'
					},
					{
						name: 'adverb',
						value: 'adverb'
					},
					{
						name: 'auxiliary',
						value: 'auxiliary'
					},
					{
						name: 'coordinating conjunction',
						value: 'coordinating conjunction'
					},
					{
						name: 'determiner',
						value: 'determiner'
					},
					{
						name: 'interjection',
						value: 'interjection'
					},
					{
						name: 'noun',
						value: 'noun'
					},
					{
						name: 'numeral',
						value: 'numeral'
					},
					{
						name: 'particle',
						value: 'particle'
					},
					{
						name: 'pronoun',
						value: 'pronoun'
					},
					{
						name: 'proper noun',
						value: 'proper noun'
					},
					{
						name: 'subordinating conjunction',
						value: 'subordinating conjunction'
					},
					{
						name: 'verb',
						value: 'verb'
					},
					{
						name: 'other',
						value: 'other'
					}
				]
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				description: 'Term status',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'preferred',
						value: 'preferred'
					},
					{
						name: 'admitted',
						value: 'admitted'
					},
					{
						name: 'not recommended',
						value: 'not recommended'
					},
					{
						name: 'obsolete',
						value: 'obsolete'
					},
					{
						name: 'draft',
						value: 'draft'
					}
				]
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'Term type',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'full form',
						value: 'full form'
					},
					{
						name: 'acronym',
						value: 'acronym'
					},
					{
						name: 'abbreviation',
						value: 'abbreviation'
					},
					{
						name: 'short form',
						value: 'short form'
					},
					{
						name: 'phrase',
						value: 'phrase'
					},
					{
						name: 'variant',
						value: 'variant'
					}
				]
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				default: '',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'masculine',
						value: 'masculine'
					},
					{
						name: 'feminine',
						value: 'feminine'
					},
					{
						name: 'neuter',
						value: 'neuter'
					},
					{
						name: 'other',
						value: 'other'
					}
				]
			},
			{
				displayName: 'Url',
				name: 'url',
				type: 'string',
				default: '',
				description: 'Base URL'
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Any kind of note, such as a usage note, explanation, or instruction'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.concepts.getMany'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.getMany'
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
					'glossaries'
				],
				operation: [
					'api.glossaries.terms.getMany'
				]
			}
		}
	}
];
