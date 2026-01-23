// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const translationStatusProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				]
			}
		},
		options: [
			{
				name: 'Get Branch Progress',
				value: 'api.projects.branches.languages.progress.getMany',
				action: 'Get Branch Progress',
				description: '**Required scopes:** `project.status.progress` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/languages/progress'
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
				name: 'Get Directory Progress',
				value: 'api.projects.directories.languages.progress.getMany',
				action: 'Get Directory Progress',
				description: '**Required scopes:** `project.status.progress` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/directories/{{$parameter["directoryId"]}}/languages/progress'
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
				name: 'Get File Progress',
				value: 'api.projects.files.languages.progress.getMany',
				action: 'Get File Progress',
				description: '**Required scopes:** `project.status.progress` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/languages/progress'
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
				name: 'Get Language Progress',
				value: 'api.projects.languages.files.progress.getMany',
				action: 'Get Language Progress',
				description: '**Required scopes:** `project.status.progress` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/languages/{{$parameter["languageId"]}}/progress'
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
				name: 'Get Project Progress',
				value: 'api.projects.languages.progress.getMany',
				action: 'Get Project Progress',
				description: '**Required scopes:** `project.status.progress` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/languages/progress'
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
				name: 'Revalidate QA Checks',
				value: 'api.projects.qa-checks.revalidate.post',
				action: 'Revalidate QA Checks',
				description: '**Required scopes:** `project.status.qa-check` (Read and Write).\n\nTriggers revalidation of all QA checks for the project',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/qa-checks/revalidate'
					}
				}
			},
			{
				name: 'QA Checks Revalidation Status',
				value: 'api.projects.qa-checks.revalidate.get',
				action: 'QA Checks Revalidation Status',
				description: '**Required scopes:** `project.status.qa-check` (Read and Write).\n\nReturns the status of QA checks revalidation job',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/qa-checks/revalidate/{{$parameter["revalidationId"]}}'
					}
				}
			},
			{
				name: 'Cancel QA Checks Revalidation',
				value: 'api.projects.qa-checks.revalidate.delete',
				action: 'Cancel QA Checks Revalidation',
				description: '**Required scopes:** `project.status.qa-check` (Read and Write).\n\nCancels the QA checks revalidation job',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/qa-checks/revalidate/{{$parameter["revalidationId"]}}'
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
				name: 'List QA Check Issues',
				value: 'api.projects.qa-checks.getMany',
				action: 'List QA Check Issues',
				description: '**Required scopes:** `project.status.qa-check` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/qa-checks'
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
		default: 'api.projects.branches.languages.progress.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}/languages/progress',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.branches.languages.progress.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/directories/{directoryId}/languages/progress',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.directories.languages.progress.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/languages/progress',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.files.languages.progress.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/languages/{languageId}/progress',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.languages.files.progress.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/languages/progress',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.languages.progress.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/qa-checks/revalidate',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/qa-checks/revalidate/{revalidationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/qa-checks/revalidate/{revalidationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/qa-checks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.branches.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.branches.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		required: true,
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.branches.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getBranches',
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
					'translationStatus'
				],
				operation: [
					'api.projects.directories.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.directories.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Directory Id',
		name: 'directoryId',
		required: true,
		description: 'Directory Identifier. Get via [List Directories](#operation/api.projects.directories.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.directories.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDirectories',
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
					'translationStatus'
				],
				operation: [
					'api.projects.files.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.files.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'File Id',
		name: 'fileId',
		required: true,
		description: 'File Identifier. Get via [List Files](#operation/api.projects.files.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.files.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFiles',
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
					'translationStatus'
				],
				operation: [
					'api.projects.languages.files.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.languages.files.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		required: true,
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.languages.files.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
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
					'translationStatus'
				],
				operation: [
					'api.projects.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		description: 'Filter progress by Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'languageIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.languages.progress.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
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
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Qa Check Categories',
		name: 'qaCheckCategories',
		type: 'multiOptions',
		default: [],
		description: 'QA check categories to revalidate. If not specified, all active categories will be checked. You can get the list of available QA check categories via [Get Project](#operation/api.projects.get)',
		routing: {
			send: {
				property: 'qaCheckCategories',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.post'
				]
			}
		},
		options: [
			{
				name: 'terms',
				value: 'terms'
			},
			{
				name: 'ai',
				value: 'ai'
			}
		]
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		type: 'multiOptions',
		default: [],
		description: 'Language IDs to revalidate. If not specified, all languages will be checked. Get Project Target Languages via [Get Project](#operation/api.projects.get)',
		routing: {
			send: {
				property: 'languageIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Failed Only',
		name: 'failedOnly',
		type: 'boolean',
		default: false,
		description: 'If true, only languages with failed QA checks will be revalidated',
		routing: {
			send: {
				property: 'failedOnly',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.post'
				]
			}
		}
	},
	{
		displayName: 'External Qa Check Ids',
		name: 'externalQaCheckIds',
		type: 'multiOptions',
		default: [],
		description: 'External QA check IDs to revalidate. Available only for Enterprise. You can get the list of available external QA check IDs via [Get Project](#operation/api.projects.get)',
		routing: {
			send: {
				property: 'externalQaCheckIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getExternalQaChecksMulti'
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
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Revalidation Id',
		name: 'revalidationId',
		required: true,
		description: 'QA Checks Revalidation Identifier, consists of 36 characters. Get via [Revalidate QA Checks](#operation/api.projects.qa-checks.revalidate.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.get'
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
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Revalidation Id',
		name: 'revalidationId',
		required: true,
		description: 'QA Checks Revalidation Identifier, consists of 36 characters. Get via [Revalidate QA Checks](#operation/api.projects.qa-checks.revalidate.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.revalidate.delete'
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
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
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
		displayName: 'Category',
		name: 'category',
		description: 'Defines category of QA check issue. It can be one category or a list of comma-separated ones',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'empty',
				value: 'empty'
			},
			{
				name: 'variables',
				value: 'variables'
			},
			{
				name: 'tags',
				value: 'tags'
			},
			{
				name: 'punctuation',
				value: 'punctuation'
			},
			{
				name: 'symbol_register',
				value: 'symbol_register'
			},
			{
				name: 'spaces',
				value: 'spaces'
			},
			{
				name: 'size',
				value: 'size'
			},
			{
				name: 'special_symbols',
				value: 'special_symbols'
			},
			{
				name: 'wrong_translation',
				value: 'wrong_translation'
			},
			{
				name: 'spellcheck',
				value: 'spellcheck'
			},
			{
				name: 'icu',
				value: 'icu'
			},
			{
				name: 'numbers',
				value: 'numbers'
			},
			{
				name: 'ai',
				value: 'ai'
			},
			{
				name: 'outdated',
				value: 'outdated'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'category',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
				]
			}
		}
	},
	{
		displayName: 'Validation',
		name: 'validation',
		description: 'Defines the QA check issue validation type. It can be one validation type or a list of comma-separated ones',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'empty_string_check',
				value: 'empty_string_check'
			},
			{
				name: 'empty_suggestion_check',
				value: 'empty_suggestion_check'
			},
			{
				name: 'max_length_check',
				value: 'max_length_check'
			},
			{
				name: 'tags_check',
				value: 'tags_check'
			},
			{
				name: 'mismatch_ids_check',
				value: 'mismatch_ids_check'
			},
			{
				name: 'cdata_check',
				value: 'cdata_check'
			},
			{
				name: 'specials_symbols_check',
				value: 'specials_symbols_check'
			},
			{
				name: 'leading_newlines_check',
				value: 'leading_newlines_check'
			},
			{
				name: 'trailing_newlines_check',
				value: 'trailing_newlines_check'
			},
			{
				name: 'leading_spaces_check',
				value: 'leading_spaces_check'
			},
			{
				name: 'trailing_spaces_check',
				value: 'trailing_spaces_check'
			},
			{
				name: 'multiple_spaces_check',
				value: 'multiple_spaces_check'
			},
			{
				name: 'custom_blocked_variables_check',
				value: 'custom_blocked_variables_check'
			},
			{
				name: 'highest_priority_custom_variables_check',
				value: 'highest_priority_custom_variables_check'
			},
			{
				name: 'highest_priority_variables_check',
				value: 'highest_priority_variables_check'
			},
			{
				name: 'c_variables_check',
				value: 'c_variables_check'
			},
			{
				name: 'python_variables_check',
				value: 'python_variables_check'
			},
			{
				name: 'rails_variables_check',
				value: 'rails_variables_check'
			},
			{
				name: 'java_variables_check',
				value: 'java_variables_check'
			},
			{
				name: 'dot_net_variables_check',
				value: 'dot_net_variables_check'
			},
			{
				name: 'twig_variables_check',
				value: 'twig_variables_check'
			},
			{
				name: 'php_variables_check',
				value: 'php_variables_check'
			},
			{
				name: 'freemarker_variables_check',
				value: 'freemarker_variables_check'
			},
			{
				name: 'lowest_priority_variable_check',
				value: 'lowest_priority_variable_check'
			},
			{
				name: 'lowest_priority_custom_variables_check',
				value: 'lowest_priority_custom_variables_check'
			},
			{
				name: 'punctuation_check',
				value: 'punctuation_check'
			},
			{
				name: 'spaces_before_punctuation_check',
				value: 'spaces_before_punctuation_check'
			},
			{
				name: 'spaces_after_punctuation_check',
				value: 'spaces_after_punctuation_check'
			},
			{
				name: 'non_breaking_spaces_check',
				value: 'non_breaking_spaces_check'
			},
			{
				name: 'capitalize_check',
				value: 'capitalize_check'
			},
			{
				name: 'multiple_uppercase_check',
				value: 'multiple_uppercase_check'
			},
			{
				name: 'parentheses_check',
				value: 'parentheses_check'
			},
			{
				name: 'entities_check',
				value: 'entities_check'
			},
			{
				name: 'escaped_quotes_check',
				value: 'escaped_quotes_check'
			},
			{
				name: 'wrong_translation_issue_check',
				value: 'wrong_translation_issue_check'
			},
			{
				name: 'spellcheck',
				value: 'spellcheck'
			},
			{
				name: 'icu_check',
				value: 'icu_check'
			},
			{
				name: 'numbers_check',
				value: 'numbers_check'
			},
			{
				name: 'ai_check',
				value: 'ai_check'
			},
			{
				name: 'outdated_translation_check',
				value: 'outdated_translation_check'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'validation',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
				]
			}
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		description: 'Filter progress by Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'languageIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Task Id',
		name: 'taskId',
		description: 'Filter the collection by the specified task id. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'taskId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectTasks',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'File Id',
		name: 'fileId',
		description: 'Filter the collection by the specified file id. Get via [List Files](#operation/api.projects.files.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'fileId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFiles',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'translationStatus'
				],
				operation: [
					'api.projects.branches.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.directories.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.files.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.languages.files.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.languages.progress.getMany'
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
					'translationStatus'
				],
				operation: [
					'api.projects.qa-checks.getMany'
				]
			}
		}
	}
];
