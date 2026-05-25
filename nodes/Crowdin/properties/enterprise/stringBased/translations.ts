// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeFieldBody, extractBatchItems } from '../../../utils/preSend';

export const translationsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'translations'
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
			},
			{
				name: 'List Pre-Translations',
				value: 'api.projects.pre-translations.getMany',
				action: 'List Pre-Translations',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations'
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
				name: 'Apply Pre-Translation',
				value: 'api.projects.pre-translations.post',
				action: 'Apply Pre-Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations'
					}
				}
			},
			{
				name: 'Pre-Translation Status',
				value: 'api.projects.pre-translations.get',
				action: 'Pre-Translation Status',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations/{{$parameter["preTranslationId"]}}'
					}
				}
			},
			{
				name: 'Edit Pre-Translation',
				value: 'api.projects.pre-translations.patch',
				action: 'Edit Pre-Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations/{{$parameter["preTranslationId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Pre-Translation Report',
				value: 'api.projects.pre-translations.report.getReport',
				action: 'Pre-Translation Report',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations/{{$parameter["preTranslationId"]}}/report'
					}
				}
			},
			{
				name: 'Validate text by QA Checks',
				value: 'api.projects.translations.validate-qa-checks.post',
				action: 'Validate text by QA Checks',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/validate-qa-checks'
					}
				}
			},
			{
				name: 'Export Project Translation',
				value: 'api.projects.translations.exports.post',
				action: 'Export Project Translation',
				description: '**Required scopes:** `project.translation` (Read only).\n\n__Note:__ For instant translation delivery directly to user devices, please use [OTA](https://support.crowdin.com/enterprise/content-delivery/). Direct API usage will exceed established rate limits, which suspends further content updates.',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/exports'
					}
				}
			},
			{
				name: 'Import Translations',
				value: 'api.projects.translations.enterprise.imports',
				action: 'Import Translations',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/imports'
					}
				}
			},
			{
				name: 'Import Translations Status',
				value: 'api.projects.translations.enterprise.imports.get',
				action: 'Import Translations Status',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/imports/{{$parameter["importTranslationId"]}}'
					}
				}
			},
			{
				name: 'Import Translations Report',
				value: 'api.projects.translations.imports.report.get',
				action: 'Import Translations Report',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/imports/{{$parameter["importTranslationId"]}}/report'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
				],
				operation: [
					'api.projects.bundles.exports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/pre-translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/pre-translations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/pre-translations/{preTranslationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.get'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/pre-translations/{preTranslationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/pre-translations/{preTranslationId}/report',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.report.getReport'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/validate-qa-checks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.validate-qa-checks.post'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/exports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/imports',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/imports/{importTranslationId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/imports/{importTranslationId}/report',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.imports.report.get'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
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
		displayName: 'Target Language Ids',
		name: 'targetLanguageIds',
		type: 'multiOptions',
		default: [],
		description: 'Specify target languages for export. Get via [List Supported Languages](#operation/api.languages.getMany)\n\n * Leave this field empty to export all target languages',
		routing: {
			send: {
				property: 'targetLanguageIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.bundles.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Skip Untranslated Strings',
		name: 'skipUntranslatedStrings',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated strings',
		routing: {
			send: {
				property: 'skipUntranslatedStrings',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.bundles.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Export With Min Approvals Count',
		name: 'exportWithMinApprovalsCount',
		type: 'number',
		default: 0,
		description: 'Defines whether to export only strings with a minimum number of approvals\n\n__Note:__ value greater than `0` can\'t be used with `exportStringsThatPassedWorkflow=true` in same request',
		routing: {
			send: {
				property: 'exportWithMinApprovalsCount',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.bundles.exports.post'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Export Strings That Passed Workflow',
		name: 'exportStringsThatPassedWorkflow',
		type: 'boolean',
		default: true,
		description: 'Defines whether to export only strings that passed workflow\n\n__Note:__ `true` value can\'t be used with `exportWithMinApprovalsCount > 0` in same request or in projects without an assigned workflow',
		routing: {
			send: {
				property: 'exportStringsThatPassedWorkflow',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.bundles.exports.post'
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
					'translations'
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
					'translations'
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
					'translations'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.getMany'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.getMany'
				]
			}
		},
		placeholder: 'priority desc,createdAt'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.getMany'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Language Ids',
		required: true,
		name: 'languageIds',
		type: 'multiOptions',
		default: [],
		description: 'Set of languages to which pre-translation should be applied. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Branch Ids',
		name: 'branchIds',
		type: 'multiOptions',
		default: [],
		description: 'Branches array that should be translated',
		routing: {
			send: {
				property: 'branchIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getBranchesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Method',
		name: 'method',
		type: 'options',
		default: '',
		description: 'Defines pre-translation method. Available values:\n- \'tm\' – pre-translation via Translation Memory\n- \'mt\' – pre-translation via Machine Translation. \'mt\' should be used with `engineId` parameter\n- \'ai\' – pre-translation via AI. \'ai\' should be used with `aiPromptId` parameter',
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
				name: 'mt',
				value: 'mt'
			},
			{
				name: 'ai',
				value: 'ai'
			}
		],
		routing: {
			send: {
				property: 'method',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Priority',
		name: 'priority',
		type: 'options',
		default: '',
		description: undefined,
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'low',
				value: 'low'
			},
			{
				name: 'normal',
				value: 'normal'
			},
			{
				name: 'high',
				value: 'high'
			}
		],
		routing: {
			send: {
				property: 'priority',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Engine Id',
		name: 'engineId',
		type: 'options',
		default: '',
		description: 'Machine Translation engine Identifier. Get via [List MTs](#operation/api.mts.getMany)',
		routing: {
			send: {
				property: 'engineId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getMTEngines'
		}
	},
	{
		displayName: 'Ai Prompt Id',
		name: 'aiPromptId',
		type: 'options',
		default: '',
		description: 'AI Prompt Identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
		routing: {
			send: {
				property: 'aiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Auto Approve Option',
		name: 'autoApproveOption',
		type: 'options',
		default: '',
		description: 'Defines which translations added by TM pre-translation should be auto-approved. Available values:\n- \'all\' – all\n- \'perfectMatchOnly\' – with perfect TM match\n- \'exceptAutoSubstituted\' – all (skip auto-substituted suggestions)\n- \'perfectMatchApprovedOnly\' - with perfect TM match (approved previously)\n- \'none\' – no auto-approve',
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
				name: 'exceptAutoSubstituted',
				value: 'exceptAutoSubstituted'
			},
			{
				name: 'perfectMatchApprovedOnly',
				value: 'perfectMatchApprovedOnly'
			},
			{
				name: 'perfectMatchOnly',
				value: 'perfectMatchOnly'
			},
			{
				name: 'none',
				value: 'none'
			}
		],
		routing: {
			send: {
				property: 'autoApproveOption',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Duplicate Translations',
		name: 'duplicateTranslations',
		type: 'boolean',
		default: false,
		description: 'Adds translations even if the same translation already exists. Default is `false`',
		routing: {
			send: {
				property: 'duplicateTranslations',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Skip Approved Translations',
		name: 'skipApprovedTranslations',
		type: 'boolean',
		default: false,
		description: 'Skip strings that already have approved translations. Default is `false`',
		routing: {
			send: {
				property: 'skipApprovedTranslations',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'options',
		default: '',
		description: 'Which strings to apply pre-translation to. Default is `untranslated`. Available values:\n- \'untranslated\' – strings without an existing translation (default)\n- \'translated\' – strings that already have a translation (re-translation)\n- \'all\' – both untranslated and translated strings\n\n__Note:__ Cannot be used together with the deprecated `translateUntranslatedOnly`.',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'untranslated',
				value: 'untranslated'
			},
			{
				name: 'translated',
				value: 'translated'
			},
			{
				name: 'all',
				value: 'all'
			}
		],
		routing: {
			send: {
				property: 'scope',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Translation Modified Before',
		name: 'dateTime:translationModifiedBefore',
		type: 'dateTime',
		default: '',
		description: 'Re-translates only if a string\'s current translation was modified prior to this date. Useful after modifying contextual resources like screenshots, style guides, or glossaries.\n\n__Note:__ Has effect when `scope` is `translated` or `all`.',
		routing: {
			send: {
				property: 'translationModifiedBefore',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		placeholder: '2026-01-01T00:00:00+00:00'
	},
	{
		displayName: 'Replace Translations Option',
		name: 'replaceTranslationsOption',
		type: 'options',
		default: '',
		description: 'Defines whether to replace existing translations with new pre-translations. Default is `none`. Available values:\n- \'none\' – add the new translation alongside existing ones (default)\n- \'autoTranslated\' – replace auto-generated translations (TM, MT, AI). Human translations are kept\n- \'all\' – replace all existing translations\n\n__Note:__ Has effect when `scope` is `translated` or `all`.',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'none',
				value: 'none'
			},
			{
				name: 'autoTranslated',
				value: 'autoTranslated'
			},
			{
				name: 'all',
				value: 'all'
			}
		],
		routing: {
			send: {
				property: 'replaceTranslationsOption',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Reset Approval Status',
		name: 'resetApprovalStatus',
		type: 'boolean',
		default: false,
		description: 'Removes approval on existing translations when applying pre-translations. Default is `false`.\n\n__Note:__ Cannot be used together with `autoApproveOption`. Has effect when `scope` is `translated` or `all`.',
		routing: {
			send: {
				property: 'resetApprovalStatus',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Minimum Match Ratio',
		name: 'minimumMatchRatio',
		type: 'number',
		default: 0,
		description: 'Add translation when TM match is greater or equal to minimum match ratio. This argument will be ignored if `translateWithPerfectMatchOnly` is set.\n\n__Note:__ Works only with TM pre-translation method',
		routing: {
			send: {
				property: 'minimumMatchRatio',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		},
		placeholder: '100'
	},
	{
		displayName: 'Translate With Perfect Match Only',
		name: 'translateWithPerfectMatchOnly',
		type: 'boolean',
		default: false,
		description: 'Applies pre-translation only for the strings with perfect match (source text and contextual information are identical)\n\n__Note:__ Works only with TM pre-translation method',
		routing: {
			send: {
				property: 'translateWithPerfectMatchOnly',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
				]
			}
		}
	},
	{
		displayName: 'Fallback Languages',
		name: 'fallbackLanguages',
		type: 'fixedCollection',
		default: {},
		description: 'Defines fallback languages mapping. The passed value should be an associative array containing both language id and array of fallback language ids:\n\n - `{languageId}` – Crowdin id for the specified language. Get via [List Supported Languages](#operation/api.languages.getMany)\n - `Array of strings` – an array containing fallback language ids. Get via [List Supported Languages](#operation/api.languages.getMany)\n\n__Note:__ Available only for TM Pre-Translation',
		routing: {
			send: {
				property: 'fallbackLanguages',
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
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
						displayName: 'Language Id',
						name: 'languageId',
						type: 'options',
						typeOptions: {
							loadOptionsMethod: 'getLanguages'
						},
						default: '',
						description: undefined
					}
				]
			}
		]
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		type: 'multiOptions',
		default: [],
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
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
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
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
		displayName: 'Custom Instruction',
		name: 'customInstruction',
		type: 'string',
		default: '',
		description: 'Custom instruction for AI pre-translation. This instruction will be appended to the AI prompt text.\n\n__Note:__ Available only for AI pre-translation method',
		routing: {
			send: {
				property: 'customInstruction',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Pre Translation Id',
		name: 'preTranslationId',
		required: true,
		description: 'Pre-translation Identifier. Get via [Apply Pre-Translation](#operation/api.projects.pre-translations.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.get'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Pre Translation Id',
		name: 'preTranslationId',
		required: true,
		description: 'Pre-translation Identifier. Get via [Apply Pre-Translation](#operation/api.projects.pre-translations.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.patch'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.report.getReport'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Pre Translation Id',
		name: 'preTranslationId',
		required: true,
		description: 'Pre-translation Identifier. Get via [Apply Pre-Translation](#operation/api.projects.pre-translations.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.report.getReport'
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
					'translations'
				],
				operation: [
					'api.projects.translations.validate-qa-checks.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Items',
		name: 'items',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true
		},
		required: true,
		description: 'Items to process',
		default: {},
		placeholder: 'Add Item',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.validate-qa-checks.post'
				]
			}
		},
		options: [
			{
				displayName: 'Item',
				name: 'items',
				values: [
					{
						displayName: 'String Id',
						name: 'stringId',
						type: 'options',
						default: '',
						description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
						required: true,
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
						type: 'options',
						default: '',
						description: 'Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getLanguages'
						}
					},
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						default: '',
						description: 'Translation text',
						placeholder: 'Цю стрічку перекладено',
						required: true
					},
					{
						displayName: 'Plural Category Name',
						name: 'pluralCategoryName',
						type: 'string',
						default: '',
						description: 'Plural form. Acceptable keys are `zero`, `one`, `two`, `few`, `many`, and `other`',
						placeholder: 'few'
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					extractBatchItems
				],
				property: 'items',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
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
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Target Language Id',
		required: true,
		name: 'targetLanguageId',
		type: 'options',
		default: '',
		description: 'Specify target language for export. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'string',
		default: '',
		description: 'Defines export file format. Use API Type feature specified at the corresponding file format from [Crowdin Store](https://store.crowdin.com/tags/string-exporter)\n\n__Note:__ the `format` parameter is required in all cases except when you\'d like to export translations for a single file in its original format',
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
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		},
		placeholder: 'xliff'
	},
	{
		displayName: 'Label Ids',
		name: 'labelIds',
		type: 'multiOptions',
		default: [],
		description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
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
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
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
		displayName: 'Branch Ids',
		name: 'branchIds',
		type: 'multiOptions',
		default: [],
		description: 'Branch Identifiers. Get via [List Branches](#operation/api.projects.branches.getMany)',
		routing: {
			send: {
				property: 'branchIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getBranchesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Skip Untranslated Strings',
		name: 'skipUntranslatedStrings',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated strings',
		routing: {
			send: {
				property: 'skipUntranslatedStrings',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Export With Min Approvals Count',
		name: 'exportWithMinApprovalsCount',
		type: 'number',
		default: 0,
		description: 'Defines whether to export only approved strings\n\n__Note:__ value greater than `0` can\'t be used with `exportStringsThatPassedWorkflow=true` in same request',
		routing: {
			send: {
				property: 'exportWithMinApprovalsCount',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Export Strings That Passed Workflow',
		name: 'exportStringsThatPassedWorkflow',
		type: 'boolean',
		default: true,
		description: 'Defines whether to export only strings that passed workflow\n\n__Note:__ `true` value can\'t be used with `exportWithMinApprovalsCount>0` in same request or in projects without an assigned workflow',
		routing: {
			send: {
				property: 'exportStringsThatPassedWorkflow',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.exports.post'
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
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
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
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Branch Id',
		required: true,
		name: 'branchId',
		type: 'options',
		default: '',
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		routing: {
			send: {
				property: 'branchId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
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
		displayName: 'Language Ids',
		name: 'languageIds',
		type: 'multiOptions',
		default: [],
		description: 'Language Identifiers. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Import Eq Suggestions',
		name: 'importEqSuggestions',
		type: 'boolean',
		default: false,
		description: 'Defines whether to add translation if it\'s the same as the source string',
		routing: {
			send: {
				property: 'importEqSuggestions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		}
	},
	{
		displayName: 'Auto Approve Imported',
		name: 'autoApproveImported',
		type: 'boolean',
		default: false,
		description: 'Mark uploaded translations as approved',
		routing: {
			send: {
				property: 'autoApproveImported',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		}
	},
	{
		displayName: 'Translate Hidden',
		name: 'translateHidden',
		type: 'boolean',
		default: false,
		description: 'Allow translations upload to hidden source strings',
		routing: {
			send: {
				property: 'translateHidden',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		}
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
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
				]
			}
		}
	},
	{
		displayName: 'Import Options',
		name: 'importOptions',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'importOptions',
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
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports'
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
						displayName: 'Spreadsheet File Import Schema for String-Based Projects',
						name: 'scheme',
						type: 'fixedCollection',
						default: {},
						description: 'Defines data columns mapping. The column numbering starts at 0',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'None',
										name: 'none',
										type: 'number',
										default: 0,
										description: 'Defines empty column'
									},
									{
										displayName: 'Identifier',
										name: 'identifier',
										type: 'number',
										default: 0,
										description: 'Defines identifier column number'
									},
									{
										displayName: 'Source Or Translation',
										name: 'sourceOrTranslation',
										type: 'number',
										default: 0,
										description: 'Defines source or translation column number'
									},
									{
										displayName: 'Translation',
										name: 'translation',
										type: 'number',
										default: 0,
										description: 'Defines translation column number'
									},
									{
										displayName: 'Additional Properties',
										name: 'spread:additionalProperties',
										description: 'Defines column number for the specified language. Use language identifier as a key (e.g., `en`, `de`) and column number as a value',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										placeholder: 'Add Property',
										options: [
											{
												displayName: 'Items',
												name: 'items',
												values: [
													{
														displayName: 'Key',
														name: 'key',
														type: 'string',
														default: ''
													},
													{
														displayName: 'Value',
														name: 'value',
														type: 'number',
														default: 0,
														description: 'Defines column number for the specified language. Use language identifier as a key (e.g., `en`, `de`) and column number as a value',
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Import Translation Id',
		name: 'importTranslationId',
		required: true,
		description: 'Import Translation Identifier',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.enterprise.imports.get'
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
					'translations'
				],
				operation: [
					'api.projects.translations.imports.report.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Import Translation Id',
		name: 'importTranslationId',
		required: true,
		description: 'Import Translation Identifier',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.imports.report.get'
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
					'translations'
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.pre-translations.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				description: 'Value for /status',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'created',
						value: 'created'
					},
					{
						name: 'in_progress',
						value: 'in_progress'
					},
					{
						name: 'canceled',
						value: 'canceled'
					},
					{
						name: 'failed',
						value: 'failed'
					},
					{
						name: 'finished',
						value: 'finished'
					}
				]
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				default: '',
				description: 'Value for /priority',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'low',
						value: 'low'
					},
					{
						name: 'normal',
						value: 'normal'
					},
					{
						name: 'high',
						value: 'high'
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
					'translations'
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
					'translations'
				],
				operation: [
					'api.projects.bundles.getMany'
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.getMany'
				]
			}
		}
	}
];
