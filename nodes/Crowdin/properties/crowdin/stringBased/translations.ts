// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeFieldBody, extractBatchItems } from '../../../utils/preSend';

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
				description: '**Required scopes:** `project.translation` (Read only).\n\n__Note:__ For instant translation delivery to your mobile, web, server, or desktop apps, it is recommended to use [OTA](https://support.crowdin.com/content-delivery/).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/exports'
					}
				}
			},
			{
				name: 'Import Translations',
				value: 'api.projects.translations.imports',
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
				value: 'api.projects.translations.imports.get',
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
		default: 'api.projects.pre-translations.getMany'
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports.get'
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
					'api.projects.pre-translations.getMany'
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
		displayName: 'Engine Id',
		name: 'engineId',
		type: 'options',
		default: '',
		description: 'Machine Translation engine Identifier. Read more about how to get the [MT engine identifier](https://support.crowdin.com/configuring-machine-translation-engines#mt-engine-ids).',
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
		description: 'Skip approved translations. Default is `false`\n\n__Note:__ Works only with TM pre-translation method',
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
		displayName: 'Translate Untranslated Only',
		name: 'translateUntranslatedOnly',
		type: 'boolean',
		default: true,
		description: 'Applies pre-translation for untranslated strings only. Default is `true`',
		routing: {
			send: {
				property: 'translateUntranslatedOnly',
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
		displayName: 'Source Language Id',
		name: 'sourceLanguageId',
		type: 'options',
		default: '',
		description: 'Source language identifier. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'translations'
				],
				operation: [
					'api.projects.pre-translations.post'
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
		displayName: 'Body',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'A JSON Patch operation as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902#section-4)',
		routing: {
			request: {
				body: '={{ JSON.parse($value) }}'
			}
		},
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
		required: true,
		name: 'format',
		type: 'string',
		default: '',
		description: 'Defines export file format. Use API Type feature specified at the corresponding file format from [Crowdin Store](https://store.crowdin.com/tags/string-exporter)',
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
		description: 'Defines whether to export only translated strings\n\n [More info](https://support.crowdin.com/project-settings/export/)',
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
		displayName: 'Export Approved Only',
		name: 'exportApprovedOnly',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only approved strings\n\n [More info](https://support.crowdin.com/project-settings/export/)',
		routing: {
			send: {
				property: 'exportApprovedOnly',
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
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
					'api.projects.translations.imports'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Branch Id',
		required: true,
		name: 'branchId',
		type: 'options',
		default: '',
		description: 'Branch Identifier for import. Get via [List Branches](#operation/api.projects.branches.getMany)',
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports'
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
					'api.projects.translations.imports.get'
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
					'api.projects.translations.imports.get'
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
