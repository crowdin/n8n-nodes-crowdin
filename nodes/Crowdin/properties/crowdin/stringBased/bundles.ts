// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const bundlesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'bundles'
				]
			}
		},
		options: [
			{
				name: 'Bundle List Branches',
				value: 'api.projects.bundles.branches.getMany',
				action: 'Bundle List Branches',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}/branches'
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
				name: 'List Bundles',
				value: 'api.projects.bundles.getMany',
				action: 'List Bundles',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/bundles'
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
				name: 'Add Bundle',
				value: 'api.projects.bundles.post',
				action: 'Add Bundle',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/bundles'
					}
				}
			},
			{
				name: 'Get Bundle',
				value: 'api.projects.bundles.get',
				action: 'Get Bundle',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}'
					}
				}
			},
			{
				name: 'Delete Bundle',
				value: 'api.projects.bundles.delete',
				action: 'Delete Bundle',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}'
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
				name: 'Edit Bundle',
				value: 'api.projects.bundles.patch',
				action: 'Edit Bundle',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Download Bundle',
				value: 'api.projects.bundles.exports.download.get',
				action: 'Download Bundle',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}/exports/{{$parameter["exportId"]}}/download'
					}
				}
			},
			{
				name: 'Export Bundle',
				value: 'api.projects.bundles.exports.post',
				action: 'Export Bundle',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}/exports'
					}
				}
			},
			{
				name: 'Check Bundle Export Status',
				value: 'api.projects.bundles.exports.get',
				action: 'Check Bundle Export Status',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}/exports/{{$parameter["exportId"]}}'
					}
				}
			}
		],
		default: 'api.projects.bundles.branches.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/bundles/{bundleId}/branches',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.branches.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/bundles',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/bundles',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/bundles/{bundleId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/bundles/{bundleId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/bundles/{bundleId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/bundles/{bundleId}/exports/{exportId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.download.get'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/bundles/{bundleId}/exports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/bundles/{bundleId}/exports/{exportId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.get'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.branches.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.branches.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.branches.getMany'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.getMany'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.getMany'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
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
		description: 'Defines name',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		},
		placeholder: 'Resx bundle'
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'string',
		default: '',
		description: 'Defines export file format. If not provided, files will be exported in their original format.\n\n__Note:__ Required for strings-based projects',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		},
		placeholder: 'crowdin-resx'
	},
	{
		displayName: 'Source Patterns',
		required: true,
		name: 'sourcePatterns',
		type: 'fixedCollection',
		default: {},
		routing: {
			send: {
				property: 'sourcePatterns',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
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
		displayName: 'Ignore Patterns',
		name: 'ignorePatterns',
		type: 'fixedCollection',
		default: {},
		routing: {
			send: {
				property: 'ignorePatterns',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
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
		displayName: 'Export Pattern',
		name: 'exportPattern',
		type: 'string',
		default: '',
		description: 'Bundle export pattern. Defines bundle name in resulting translations bundle. **Required** if `format` is specified. If `format` is not specified, uses default pattern based on file structure\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
		routing: {
			send: {
				property: 'exportPattern',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		},
		placeholder: 'strings-%two_letter_code%.resx'
	},
	{
		displayName: 'Is Multilingual',
		name: 'isMultilingual',
		type: 'boolean',
		default: false,
		description: 'Export translations in multilingual file',
		routing: {
			send: {
				property: 'isMultilingual',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		}
	},
	{
		displayName: 'Include Project Source Language',
		name: 'includeProjectSourceLanguage',
		type: 'boolean',
		default: false,
		description: 'Add project source language to bundle',
		routing: {
			send: {
				property: 'includeProjectSourceLanguage',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		}
	},
	{
		displayName: 'Source Language Export Pattern',
		name: 'sourceLanguageExportPattern',
		type: 'string',
		default: '',
		description: 'Source language export pattern. Works only when `includeProjectSourceLanguage` is enabled.\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
		routing: {
			send: {
				property: 'sourceLanguageExportPattern',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		},
		placeholder: 'strings-%two_letter_code%.resx'
	},
	{
		displayName: 'Include In Context Pseudo Language',
		name: 'includeInContextPseudoLanguage',
		type: 'boolean',
		default: true,
		description: 'Add In-Context pseudo-language to bundle',
		routing: {
			send: {
				property: 'includeInContextPseudoLanguage',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		}
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		type: 'multiOptions',
		default: [],
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)\n\n__Note:__ Can\'t be used when `format` is `null`',
		routing: {
			send: {
				property: 'labelIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
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
		type: 'multiOptions',
		default: [],
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)\n\n__Note:__ Can\'t be used when `format` is `null`',
		routing: {
			send: {
				property: 'excludeLabelIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
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
		displayName: 'Label Match Rule',
		name: 'labelMatchRule',
		type: 'options',
		default: '',
		description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n __Note:__ Can only be used when `labelIds` parameter is provided',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'all',
				value: 'all'
			},
			{
				name: 'any',
				value: 'any'
			}
		],
		routing: {
			send: {
				property: 'labelMatchRule',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		}
	},
	{
		displayName: 'Exclude Label Match Rule',
		name: 'excludeLabelMatchRule',
		type: 'options',
		default: '',
		description: 'Match rule for excluded labels:\n - "all" - all labels must be present in string\n - "any" - any of the labels must be present in string\n\n __Note:__ Can only be used when `excludeLabelIds` parameter is provided',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'all',
				value: 'all'
			},
			{
				name: 'any',
				value: 'any'
			}
		],
		routing: {
			send: {
				property: 'excludeLabelMatchRule',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
				]
			}
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		type: 'multiOptions',
		default: [],
		description: 'Language Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany). If provided, bundle will only export specified languages. If not provided, bundle will export all project target languages.',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.post'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.download.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.download.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export Bundle](#operation/api.projects.bundles.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.download.get'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Bundle Id',
		name: 'bundleId',
		required: true,
		description: 'Bundle Identifier. Get via [List Bundles](#operation/api.projects.bundles.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBundles',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'Export Identifier, consists of 36 characters. Get via [Export Bundle](#operation/api.projects.bundles.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'bundles'
				],
				operation: [
					'api.projects.bundles.exports.get'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Defines name',
				placeholder: 'Resx bundle'
			},
			{
				displayName: 'Format',
				name: 'format',
				type: 'string',
				default: '',
				description: 'Defines export file format. If not provided, files will be exported in their original format.\n\n__Note:__ Required for strings-based projects',
				placeholder: 'crowdin-resx'
			},
			{
				displayName: 'Source Patterns',
				name: 'sourcePatterns',
				type: 'fixedCollection',
				default: {},
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
			},
			{
				displayName: 'Ignore Patterns',
				name: 'ignorePatterns',
				type: 'fixedCollection',
				default: {},
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
			},
			{
				displayName: 'Export Pattern',
				name: 'exportPattern',
				type: 'string',
				default: '',
				description: 'Bundle export pattern. Defines bundle name in resulting translations bundle. **Required** if `format` is specified. If `format` is not specified, uses default pattern based on file structure\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
				placeholder: 'strings-%two_letter_code%.resx'
			},
			{
				displayName: 'Is Multilingual',
				name: 'isMultilingual',
				type: 'boolean',
				default: false,
				description: 'Export translations in multilingual file'
			},
			{
				displayName: 'Include Project Source Language',
				name: 'includeProjectSourceLanguage',
				type: 'boolean',
				default: false,
				description: 'Add project source language to bundle'
			},
			{
				displayName: 'Include In Context Pseudo Language',
				name: 'includeInContextPseudoLanguage',
				type: 'boolean',
				default: true,
				description: 'Add In-Context pseudo-language to bundle'
			},
			{
				displayName: 'Label Ids',
				name: 'labelIds',
				type: 'multiOptions',
				default: [],
				description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)\n\n__Note:__ Can\'t be used when `format` is `null`',
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
				type: 'multiOptions',
				default: [],
				description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)\n\n__Note:__ Can\'t be used when `format` is `null`',
				typeOptions: {
					loadOptionsMethod: 'getProjectLabelsMulti',
					loadOptionsDependsOn: [
						'projectId'
					]
				}
			},
			{
				displayName: 'Label Match Rule',
				name: 'labelMatchRule',
				type: 'options',
				default: '',
				description: 'Match rule for labels:\n- "all" - all labels must be present in string\n- "any" - any of the labels must be present in string\n\n __Note:__ Can only be used when `labelIds` parameter is provided',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'all',
						value: 'all'
					},
					{
						name: 'any',
						value: 'any'
					}
				]
			},
			{
				displayName: 'Exclude Label Match Rule',
				name: 'excludeLabelMatchRule',
				type: 'options',
				default: '',
				description: 'Match rule for excluded labels:\n - "all" - all labels must be present in string\n - "any" - any of the labels must be present in string\n\n __Note:__ Can only be used when `excludeLabelIds` parameter is provided',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'all',
						value: 'all'
					},
					{
						name: 'any',
						value: 'any'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.branches.getMany'
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
					'bundles'
				],
				operation: [
					'api.projects.bundles.getMany'
				]
			}
		}
	}
];
