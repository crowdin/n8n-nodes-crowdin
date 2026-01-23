// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const stringTranslationsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				]
			}
		},
		options: [
			{
				name: 'List Translation Approvals',
				value: 'api.projects.approvals.getMany',
				action: 'List Translation Approvals',
				description: '**Required scopes:** `project.translation` (Read only).\n\n__Note:__ Either `translationId` OR `labelIds` OR `excludeLabelIds` with `languageId` OR `stringId` with `languageId` are required',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/approvals'
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
				name: 'Add Approval',
				value: 'api.projects.approvals.post',
				action: 'Add Approval',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/approvals'
					}
				}
			},
			{
				name: 'Remove String Approvals',
				value: 'api.projects.approvals.deleteMany',
				action: 'Remove String Approvals',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/approvals'
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
				name: 'Get Approval',
				value: 'api.projects.approvals.get',
				action: 'Get Approval',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/approvals/{{$parameter["approvalId"]}}'
					}
				}
			},
			{
				name: 'Remove Approval',
				value: 'api.projects.approvals.delete',
				action: 'Remove Approval',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/approvals/{{$parameter["approvalId"]}}'
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
				name: 'List Language Translations',
				value: 'api.projects.languages.translations.getMany',
				action: 'List Language Translations',
				description: '**Required scopes:** `project.translation` (Read only).\n\n__Note:__ For instant translation delivery to your mobile, web, server, or desktop apps, it is recommended to use [OTA](https://support.crowdin.com/content-delivery/).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/languages/{{$parameter["languageId"]}}/translations'
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
				name: 'List Translations',
				value: 'api.projects.translations.getMany',
				action: 'List Translations',
				description: '**Required scopes:** `project.translation` (Read only).\n\n__Note:__ For instant translation delivery to your mobile, web, server, or desktop apps, it is recommended to use [OTA](https://support.crowdin.com/content-delivery/).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations'
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
				name: 'Add Translation',
				value: 'api.projects.translations.post',
				action: 'Add Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations'
					}
				}
			},
			{
				name: 'Delete String Translations',
				value: 'api.projects.translations.deleteMany',
				action: 'Delete String Translations',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/translations'
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
				name: 'Get Translation',
				value: 'api.projects.translations.get',
				action: 'Get Translation',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/{{$parameter["translationId"]}}'
					}
				}
			},
			{
				name: 'Restore Translation',
				value: 'api.projects.translations.put',
				action: 'Restore Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/translations/{{$parameter["translationId"]}}'
					}
				}
			},
			{
				name: 'Delete Translation',
				value: 'api.projects.translations.delete',
				action: 'Delete Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/translations/{{$parameter["translationId"]}}'
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
				name: 'Translation Alignment',
				value: 'api.projects.translations.alignment.post',
				action: 'Translation Alignment',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/alignment'
					}
				}
			},
			{
				name: 'List Translation Votes',
				value: 'api.projects.votes.getMany',
				action: 'List Translation Votes',
				description: '**Required scopes:** `project.translation` (Read only).\n\n__Note:__ Either `translationId` OR `labelIds` OR `excludeLabelIds` with `languageId` OR `stringId` with `languageId` are required',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/votes'
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
				name: 'Add Vote',
				value: 'api.projects.votes.post',
				action: 'Add Vote',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/votes'
					}
				}
			},
			{
				name: 'Get Vote',
				value: 'api.projects.votes.get',
				action: 'Get Vote',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/votes/{{$parameter["voteId"]}}'
					}
				}
			},
			{
				name: 'Cancel Vote',
				value: 'api.projects.votes.delete',
				action: 'Cancel Vote',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/votes/{{$parameter["voteId"]}}'
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
		default: 'api.projects.approvals.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/approvals',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/approvals',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/approvals',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/approvals/{approvalId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/approvals/{approvalId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/languages/{languageId}/translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/{translationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /projects/{projectId}/translations/{translationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.put'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/translations/{translationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.delete'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/alignment',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.alignment.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/votes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/votes',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/votes/{voteId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/votes/{voteId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.delete'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,id'
	},
	{
		displayName: 'String Id',
		name: 'stringId',
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany) <br> **Note:** Must be used together with `languageId`',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'stringId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
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
		displayName: 'Language Id',
		name: 'languageId',
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get) <br> **Note:** Must be used together with `stringId`',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Translation Id',
		name: 'translationId',
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany) <br> **Note:** If specified, `stringId` and `languageId` are ignored',
		default: 0,
		type: 'number',
		routing: {
			send: {
				type: 'query',
				property: 'translationId',
				value: '={{ $value !== 0 ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'labelIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabelsMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Exclude Label Ids',
		name: 'excludeLabelIds',
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'excludeLabelIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabelsMulti',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Translation Id',
		required: true,
		name: 'translationId',
		type: 'number',
		default: undefined,
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany)',
		routing: {
			send: {
				property: 'translationId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.post'
				]
			}
		},
		placeholder: '200'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.deleteMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.deleteMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Approval Id',
		name: 'approvalId',
		required: true,
		description: 'Approval Identifier. Get via [List Translation Approvals](#operation/api.projects.approvals.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectApprovals',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Approval Id',
		name: 'approvalId',
		required: true,
		description: 'Approval Identifier. Get via [List Translation Approvals](#operation/api.projects.approvals.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectApprovals',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,text'
	},
	{
		displayName: 'String Ids',
		name: 'stringIds',
		description: 'Filter translations by `stringIds`. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'stringIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStringsMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		description: 'Filter translations by `labelIds`. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'labelIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabelsMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'branchId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
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
		displayName: 'Approved Only',
		name: 'approvedOnly',
		description: 'Only approved translations',
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
				property: 'approvedOnly',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		}
	},
	{
		displayName: 'Croql',
		name: 'croql',
		description: 'Filter translations by [CroQL](https://developer.crowdin.com/croql/)\n\n__Note:__ Can\'t be used with `stringIds`, `labelIds` or `approvedOnly` in same request',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
				]
			}
		}
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
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
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'stringId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
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
		displayName: 'Language Id',
		name: 'languageId',
		required: true,
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,priority'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
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
		displayName: 'Language Id',
		required: true,
		name: 'languageId',
		type: 'options',
		default: '',
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
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
		description: 'Translation text',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
				]
			}
		},
		placeholder: 'Цю стрічку перекладено'
	},
	{
		displayName: 'Plural Category Name',
		name: 'pluralCategoryName',
		type: 'string',
		default: '',
		description: 'Plural form. Acceptable keys are `zero`, `one`, `two`, `few`, `many`, and `other`\n\n__Note:__ Will be saved only if the source string has plurals and `pluralCategoryName` is equal to the one available for the language you add translations to',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
				]
			}
		},
		placeholder: 'few'
	},
	{
		displayName: 'Add To Tm',
		name: 'addToTm',
		type: 'boolean',
		default: true,
		description: 'Defines whether to add translation to TM',
		routing: {
			send: {
				property: 'addToTm',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
				]
			}
		}
	},
	{
		displayName: 'Provider',
		name: 'provider',
		type: 'options',
		default: '',
		description: 'Translation provider type. Required when providerId or isPreTranslated is specified\n\n\n__Note__: `global_tm` value can\'t be used with `providerId` in same request',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'tm',
				value: 'tm'
			},
			{
				name: 'global_tm',
				value: 'global_tm'
			},
			{
				name: 'google',
				value: 'google'
			},
			{
				name: 'microsoft',
				value: 'microsoft'
			},
			{
				name: 'crowdin',
				value: 'crowdin'
			},
			{
				name: 'deepl',
				value: 'deepl'
			},
			{
				name: 'amazon',
				value: 'amazon'
			},
			{
				name: 'google_automl',
				value: 'google_automl'
			},
			{
				name: 'modernmt',
				value: 'modernmt'
			},
			{
				name: 'custom_mt',
				value: 'custom_mt'
			},
			{
				name: 'ai',
				value: 'ai'
			}
		],
		routing: {
			send: {
				property: 'provider',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
				]
			}
		}
	},
	{
		displayName: 'Provider Id',
		name: 'providerId',
		type: 'number',
		default: 0,
		description: 'Provider specific identifier. Get via:\n * If `provider` is `tm` - [List TMs](#operation/api.tms.getMany)\n * If `provider` is `ai` - [List AI Prompts](#operation/api.ai.prompts.getMany)\n * If `provider` is `google`, `microsoft`, `crowdin`, `deepl`, `amazon`, `google_automl`, `modernmt` or `custom_mt` - [List MTs](#operation/api.mts.getMany)\n\n__Note__: Can\'t be used if `provider` value is `global_tm`',
		routing: {
			send: {
				property: 'providerId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
				]
			}
		},
		placeholder: '123'
	},
	{
		displayName: 'Is Pre Translated',
		name: 'isPreTranslated',
		type: 'boolean',
		default: false,
		description: 'Defines whether this is a pre-translated translation',
		routing: {
			send: {
				property: 'isPreTranslated',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.post'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.deleteMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.deleteMany'
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
		displayName: 'Language Id',
		name: 'languageId',
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Translation Id',
		name: 'translationId',
		required: true,
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.get'
				]
			}
		},
		placeholder: '0'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.get'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Translation Id',
		name: 'translationId',
		required: true,
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.put'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Translation Id',
		name: 'translationId',
		required: true,
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.delete'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.alignment.post'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.alignment.post'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.alignment.post'
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
		description: 'Text for alignment',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.alignment.post'
				]
			}
		},
		placeholder: 'Your password has been reset successfully!'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
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
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany) <br> **Note:** Must be used together with `languageId`',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'stringId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
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
		displayName: 'Language Id',
		name: 'languageId',
		description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get) <br> **Note:** Must be used together with `stringId`',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Translation Id',
		name: 'translationId',
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany) <br> **Note:** If specified, `stringId` and `languageId` are ignored',
		default: 0,
		type: 'number',
		routing: {
			send: {
				type: 'query',
				property: 'translationId',
				value: '={{ $value !== 0 ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'labelIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabelsMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Exclude Label Ids',
		name: 'excludeLabelIds',
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'excludeLabelIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectLabelsMulti',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Mark',
		required: true,
		name: 'mark',
		type: 'options',
		default: 'up',
		description: 'Vote type:\n * \'up\' — upvote translation\n * \'down\' — downvote translation',
		options: [
			{
				name: 'up',
				value: 'up'
			},
			{
				name: 'down',
				value: 'down'
			}
		],
		routing: {
			send: {
				property: 'mark',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.post'
				]
			}
		}
	},
	{
		displayName: 'Translation Id',
		required: true,
		name: 'translationId',
		type: 'number',
		default: undefined,
		description: 'Translation Identifier. Get via [List String Translations](#operation/api.projects.translations.getMany)',
		routing: {
			send: {
				property: 'translationId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.post'
				]
			}
		},
		placeholder: '653412'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Vote Id',
		name: 'voteId',
		required: true,
		description: 'Vote Identifier. Get via [List Translation Votes](#operation/api.projects.votes.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectVotes',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Vote Id',
		name: 'voteId',
		required: true,
		description: 'Vote Identifier. Get via [List Translation Votes](#operation/api.projects.votes.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectVotes',
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
					'stringTranslations'
				],
				operation: [
					'api.projects.approvals.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.languages.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.translations.getMany'
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
					'stringTranslations'
				],
				operation: [
					'api.projects.votes.getMany'
				]
			}
		}
	}
];
