// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, extractBatchItems } from '../../../utils/preSend';

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
				name: 'Bundle List Files',
				value: 'api.projects.bundles.files.getMany',
				action: 'Bundle List Files',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/bundles/{{$parameter["bundleId"]}}/files'
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
				name: 'List Auto-Translations',
				value: 'api.projects.pre-translations.getMany',
				action: 'List Auto-Translations',
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
				name: 'Apply Auto-Translation',
				value: 'api.projects.pre-translations.post',
				action: 'Apply Auto-Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations'
					}
				}
			},
			{
				name: 'Auto-Translation Status',
				value: 'api.projects.pre-translations.get',
				action: 'Auto-Translation Status',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations/{{$parameter["jobIdentifier"]}}'
					}
				}
			},
			{
				name: 'Edit Auto-Translation',
				value: 'api.projects.pre-translations.patch',
				action: 'Edit Auto-Translation',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations/{{$parameter["jobIdentifier"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Auto-Translation Report',
				value: 'api.projects.pre-translations.report.getReport',
				action: 'Auto-Translation Report',
				description: '**Required scopes:** `project.translation` (Read and Write).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/pre-translations/{{$parameter["jobIdentifier"]}}/report'
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
				name: 'Build Project Directory Translation',
				value: 'api.projects.translations.builds.directories.post',
				action: 'Build Project Directory Translation',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds/directories/{{$parameter["directoryId"]}}'
					}
				}
			},
			{
				name: 'Build Project File Translation',
				value: 'api.projects.translations.builds.files.post',
				action: 'Build Project File Translation',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds/files/{{$parameter["fileId"]}}'
					}
				}
			},
			{
				name: 'List Project Builds',
				value: 'api.projects.translations.builds.getMany',
				action: 'List Project Builds',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds'
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
				name: 'Build Project Translation',
				value: 'api.projects.translations.builds.post',
				action: 'Build Project Translation',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds'
					}
				}
			},
			{
				name: 'Download Project Translations',
				value: 'api.projects.translations.builds.download.download',
				action: 'Download Project Translations',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds/{{$parameter["buildId"]}}/download'
					}
				}
			},
			{
				name: 'Check Project Build Status',
				value: 'api.projects.translations.builds.get',
				action: 'Check Project Build Status',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds/{{$parameter["buildId"]}}'
					}
				}
			},
			{
				name: 'Cancel Build',
				value: 'api.projects.translations.builds.delete',
				action: 'Cancel Build',
				description: '**Required scopes:** `project.translation` (Read only).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/translations/builds/{{$parameter["buildId"]}}'
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
				description: '**Required scopes:** `project.translation` (Read and Write).\n\nStarts an [asynchronous operation](#section/Introduction/Asynchronous-Operations) that imports translations from a file uploaded to storage, and returns its `identifier`. Poll [Import Translations Status](#operation/api.projects.translations.enterprise.imports.get) for its `status`.\n\n__Note:__ Up to 10 imports can run at once in a project, and up to 20 across all projects of the organization. A request over the limit returns `429`; wait at least the number of seconds in the `Retry-After` header before retrying.',
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
			},
			{
				name: 'Replace Text in Translations',
				value: 'api.projects.translations.replacements.post',
				action: 'Replace Text in Translations',
				description: '**Required scopes:** `project.translation` (Read and Write).\n\nFinds a text in the project translations and replaces it, as an [asynchronous operation](#section/Introduction/Asynchronous-Operations). Start with `dryRun` set to `true`, review the result via [Get Translation Replacement Summary](#operation/api.projects.translations.replacements.summary.get) and [List Translation Replacement Matches](#operation/api.projects.translations.replacements.matches.getMany), then run the replacement for real, optionally passing the chosen `translationIds`. A finished replacement can be undone via [Revert Translation Replacement](#operation/api.projects.translations.replacements.reverts.post). In the languages you proofread, any translation is replaced, approved ones included. In the languages you only translate, only your own translations without approvals are replaced. Translations of protected strings are skipped and counted in the summary.\n\n__Note:__ Only one translation replacement that is not a dry run, or one revert, can run in a project at a time, and a replacement can match up to 10000 translations',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements'
					}
				}
			},
			{
				name: 'Get Translation Replacement Status',
				value: 'api.projects.translations.replacements.get',
				action: 'Get Translation Replacement Status',
				description: '**Required scopes:** `project.translation` (Read only).\n\nReturns the status and progress of a translation replacement started via [Replace Text in Translations](#operation/api.projects.translations.replacements.post). Only the user who started the replacement can get it.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}'
					}
				}
			},
			{
				name: 'List Translation Replacement Matches',
				value: 'api.projects.translations.replacements.matches.getMany',
				action: 'List Translation Replacement Matches',
				description: '**Required scopes:** `project.translation` (Read only).\n\nReturns the translations of a translation replacement, sorted by translation ID. For a dry run, lists the translations a real run would change, each with its current text and the text the replacement would produce from it. For a real run, lists the translations that were changed, each with its text before the replacement and its current text. Skipped translations are not listed, and neither are translations deleted since the replacement, so a page can hold fewer items than `limit`.\n\n__Note:__ Matches are available as long as the replacement exists',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}/matches'
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
				name: 'List Translation Replacement Reverts',
				value: 'api.projects.translations.replacements.reverts.getMany',
				action: 'List Translation Replacement Reverts',
				description: '**Required scopes:** `project.translation` (Read only).\n\nReturns the reverts of a translation replacement, oldest first. A revert that failed or was canceled can be started again, so the list holds every attempt. Only the user who started the replacement can list its reverts.',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}/reverts'
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
				name: 'Revert Translation Replacement',
				value: 'api.projects.translations.replacements.reverts.post',
				action: 'Revert Translation Replacement',
				description: '**Required scopes:** `project.translation` (Read and Write).\n\nRestores the translations a finished replacement changed to their text before the replacement, as an [asynchronous operation](#section/Introduction/Asynchronous-Operations). Exactly the translations the replacement changed are restored. Translations changed or deleted after the replacement, for example by an undo, are left as they are and counted as skipped in [Get Translation Replacement Revert Summary](#operation/api.projects.translations.replacements.reverts.summary.get). The request body can be omitted or empty.\n\n__Note:__ A replacement can be reverted within 7 days after it finished. A revert that failed or was canceled can be started again',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}/reverts'
					}
				}
			},
			{
				name: 'Get Translation Replacement Revert Status',
				value: 'api.projects.translations.replacements.reverts.get',
				action: 'Get Translation Replacement Revert Status',
				description: '**Required scopes:** `project.translation` (Read only).\n\nReturns the status and progress of a translation replacement revert started via [Revert Translation Replacement](#operation/api.projects.translations.replacements.reverts.post). The counters of the revert are returned by [Get Translation Replacement Revert Summary](#operation/api.projects.translations.replacements.reverts.summary.get).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}/reverts/{{$parameter["revertId"]}}'
					}
				}
			},
			{
				name: 'Get Translation Replacement Revert Summary',
				value: 'api.projects.translations.replacements.reverts.summary.get',
				action: 'Get Translation Replacement Revert Summary',
				description: '**Required scopes:** `project.translation` (Read only).\n\nReturns the counters of a translation replacement revert: how many translations were restored and how many were left as they are. Every translation the replacement changed is either restored or skipped.\n\n__Note:__ The counters are final once the revert status is `finished`',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}/reverts/{{$parameter["revertId"]}}/summary'
					}
				}
			},
			{
				name: 'Get Translation Replacement Summary',
				value: 'api.projects.translations.replacements.summary.get',
				action: 'Get Translation Replacement Summary',
				description: '**Required scopes:** `project.translation` (Read only).\n\nReturns the counters of a translation replacement: how many translations matched, how many were changed and how many were skipped, and why. Every matched translation is either changed or skipped.\n\n__Note:__ The counters are final once the replacement status is `finished`',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/translations/replacements/{{$parameter["replacementId"]}}/summary'
					}
				}
			}
		],
		default: 'api.projects.bundles.getMany'
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
		displayName: 'GET /projects/{projectId}/bundles/{bundleId}/files',
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
					'api.projects.bundles.files.getMany'
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
		displayName: 'GET /projects/{projectId}/pre-translations/{jobIdentifier}',
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
		displayName: 'PATCH /projects/{projectId}/pre-translations/{jobIdentifier}',
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
		displayName: 'GET /projects/{projectId}/pre-translations/{jobIdentifier}/report',
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
		displayName: 'POST /projects/{projectId}/translations/builds/directories/{directoryId}',
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
					'api.projects.translations.builds.directories.post'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/builds/files/{fileId}',
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
					'api.projects.translations.builds.files.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/builds',
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
					'api.projects.translations.builds.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/builds',
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
					'api.projects.translations.builds.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/builds/{buildId}/download',
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
					'api.projects.translations.builds.download.download'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/builds/{buildId}',
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
					'api.projects.translations.builds.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/translations/builds/{buildId}',
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
					'api.projects.translations.builds.delete'
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
		displayName: 'POST /projects/{projectId}/translations/replacements',
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
					'api.projects.translations.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/replacements/{replacementId}',
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
					'api.projects.translations.replacements.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/replacements/{replacementId}/matches',
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
					'api.projects.translations.replacements.matches.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/replacements/{replacementId}/reverts',
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
					'api.projects.translations.replacements.reverts.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/translations/replacements/{replacementId}/reverts',
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
					'api.projects.translations.replacements.reverts.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/replacements/{replacementId}/reverts/{revertId}',
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
					'api.projects.translations.replacements.reverts.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/replacements/{replacementId}/reverts/{revertId}/summary',
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
					'api.projects.translations.replacements.reverts.summary.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/translations/replacements/{replacementId}/summary',
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
					'api.projects.translations.replacements.summary.get'
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
		description: 'Defines whether to export only translated strings\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedFiles=true` in same request',
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
		displayName: 'Skip Untranslated Files',
		name: 'skipUntranslatedFiles',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated files\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedStrings=true` in same request',
		routing: {
			send: {
				property: 'skipUntranslatedFiles',
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
					'api.projects.bundles.files.getMany'
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
					'api.projects.bundles.files.getMany'
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
					'api.projects.bundles.files.getMany'
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
		displayName: 'Body',
		name: '_body',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
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
		options: [
			{
				displayName: 'By Files',
				name: '_byFiles',
				values: [
					{
						displayName: 'Language Ids',
						name: 'languageIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getLanguagesMulti'
						},
						default: [],
						description: 'Set of languages to which auto-translation should be applied. Get via [List Supported Languages](#operation/api.languages.getMany)',
						required: true
					},
					{
						displayName: 'File Ids',
						name: 'fileIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectFilesMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Files array that should be translated\n\n__Note:__ Required unless `directoryIds` or `branchIds` is set'
					},
					{
						displayName: 'Directory Ids',
						name: 'directoryIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectDirectoriesMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Directories array that should be translated. Includes all nested files'
					},
					{
						displayName: 'Branch Ids',
						name: 'branchIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getBranchesMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Branches array that should be translated. Includes all nested files'
					},
					{
						displayName: 'Label Ids',
						name: 'labelIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectLabelsMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
					},
					{
						displayName: 'Exclude Label Ids',
						name: 'excludeLabelIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectLabelsMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
					},
					{
						displayName: 'Label Match Rule',
						name: 'labelMatchRule',
						type: 'options',
						default: '',
						description: 'How a string is matched against `labelIds`. One of: `all` — the string carries every one of the labels, `any` — at least one of them. Default is `all`\n\n__Note:__ Must be used together with `labelIds`',
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
						description: 'How a string is matched against `excludeLabelIds`. One of: `all` — only a string carrying every one of the labels is skipped, `any` — a string carrying at least one of them is skipped. Default is `all`\n\n__Note:__ Must be used together with `excludeLabelIds`',
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
						displayName: 'Method',
						name: 'method',
						type: 'options',
						default: '',
						description: 'Defines auto-translation method. Available values:\n- \'tm\' – auto-translation via Translation Memory\n- \'mt\' – auto-translation via Machine Translation. \'mt\' should be used with `engineId` parameter\n- \'ai\' – auto-translation via AI. \'ai\' should be used with `aiPromptId` parameter',
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
						placeholder: 'mt'
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
						]
					},
					{
						displayName: 'Engine Id',
						name: 'engineId',
						type: 'options',
						default: '',
						description: 'Machine Translation engine Identifier. Get via [List MTs](#operation/api.mts.getMany)',
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
						typeOptions: {
							loadOptionsMethod: 'getAiPrompts'
						}
					},
					{
						displayName: 'Auto Approve Option',
						name: 'autoApproveOption',
						type: 'options',
						default: '',
						description: 'Defines which translations added by TM auto-translation should be auto-approved. Available values:\n- \'all\' – all\n- \'perfectMatchOnly\' – with perfect TM match\n- \'exceptAutoSubstituted\' – all (skip auto-substituted suggestions)\n- \'perfectMatchApprovedOnly\' - with perfect TM match (approved previously)\n- \'none\' – no auto-approve',
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
						]
					},
					{
						displayName: 'Duplicate Translations',
						name: 'duplicateTranslations',
						type: 'boolean',
						default: false,
						description: 'Adds translations even if the same translation already exists. Default is `false`.\n\n__Note:__ Cannot be used when `replaceTranslationsOption` is `all` (replacing all translations already overrides duplicate handling).'
					},
					{
						displayName: 'Skip Approved Translations',
						name: 'skipApprovedTranslations',
						type: 'boolean',
						default: false,
						description: 'Skip strings that already have approved translations. Default is `false`.\n\n__Note:__ Cannot be used together with `resetApprovalStatus`.'
					},
					{
						displayName: 'Scope',
						name: 'scope',
						type: 'options',
						default: '',
						description: 'Which strings to apply auto-translation to. Default is `untranslated`. Available values:\n- \'untranslated\' – strings without an existing translation (default)\n- \'translated\' – strings that already have a translation (re-translation)\n- \'all\' – both untranslated and translated strings\n\n__Note:__ Cannot be used together with the deprecated `translateUntranslatedOnly`.',
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
						]
					},
					{
						displayName: 'Translation Modified Before',
						name: 'dateTime:translationModifiedBefore',
						type: 'dateTime',
						default: '',
						description: 'Re-translates only if a string\'s current translation was modified prior to this date. Useful after modifying contextual resources like screenshots, style guides, or glossaries.\n\n__Note:__ Requires `scope` to be `translated` or `all`. Cannot be used with `scope: "untranslated"` or `translateUntranslatedOnly: true`.',
						placeholder: '2026-01-01T00:00:00+00:00'
					},
					{
						displayName: 'Translation Modified After',
						name: 'dateTime:translationModifiedAfter',
						type: 'dateTime',
						default: '',
						description: 'Re-translates only if a string\'s current translation was modified after this date. Can be combined with `translationModifiedBefore` to define a date range.\n\n__Note:__ Cannot be later than `translationModifiedBefore`. Requires `scope` to be `translated` or `all`. Cannot be used with `scope: "untranslated"` or `translateUntranslatedOnly: true`.',
						placeholder: '2026-01-01T00:00:00+00:00'
					},
					{
						displayName: 'Replace Translations Option',
						name: 'replaceTranslationsOption',
						type: 'options',
						default: '',
						description: 'Defines whether to replace existing translations with new auto-translations. Default is `none`. Available values:\n- \'none\' – add the new translation alongside existing ones (default)\n- \'autoTranslated\' – replace auto-generated translations (TM, MT, AI). Human translations are kept\n- \'all\' – replace all existing translations\n\n__Note:__ Values other than `none` require `scope` to be `translated` or `all` (cannot be combined with `scope: "untranslated"` or `translateUntranslatedOnly: true`).',
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
						]
					},
					{
						displayName: 'Reset Approval Status',
						name: 'resetApprovalStatus',
						type: 'boolean',
						default: false,
						description: 'Removes approval on existing translations when applying auto-translations. Default is `false`.\n\n__Note:__ Requires `scope` to be `translated` or `all`. Cannot be used together with `skipApprovedTranslations`, `autoApproveOption` (any value other than `none`), or when `replaceTranslationsOption` is `all` (replaced translations lose approval automatically). Cannot be used with `scope: "untranslated"` or `translateUntranslatedOnly: true`.'
					},
					{
						displayName: 'Notify On Completion',
						name: 'notifyOnCompletion',
						type: 'boolean',
						default: false,
						description: 'If `true`, the user who started the Auto-Translation is notified when it finishes, fails or is canceled.\n\n__Note:__ The notification is sent only via the channels the user enabled for the Auto-Translation notification group',
						placeholder: 'true'
					},
					{
						displayName: 'Minimum Match Ratio',
						name: 'minimumMatchRatio',
						type: 'number',
						default: 0,
						description: 'Add translation when TM match is greater or equal to minimum match ratio. This argument will be ignored if `translateWithPerfectMatchOnly` is set.\n\n__Note:__ Works only with TM auto-translation method',
						placeholder: '100'
					},
					{
						displayName: 'Translate With Perfect Match Only',
						name: 'translateWithPerfectMatchOnly',
						type: 'boolean',
						default: false,
						description: 'Applies auto-translation only for the strings with perfect match (source text and contextual information are identical)\n\n__Note:__ Works only with TM auto-translation method'
					},
					{
						displayName: 'Fallback Languages',
						name: 'fallbackLanguages',
						type: 'fixedCollection',
						default: {},
						description: 'Defines fallback languages mapping. The passed value should be an associative array containing both language id and array of fallback language ids:\n\n - `{languageId}` – Crowdin id for the specified language. Get via [List Supported Languages](#operation/api.languages.getMany)\n - `Array of strings` – an array containing fallback language ids. Get via [List Supported Languages](#operation/api.languages.getMany)\n\n__Note:__ Available only for TM Auto-Translation',
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
						displayName: 'Custom Instruction',
						name: 'customInstruction',
						type: 'string',
						default: '',
						description: 'Custom instruction for AI auto-translation. This instruction will be appended to the AI prompt text.\n\n__Note:__ Available only for AI auto-translation method'
					}
				]
			},
			{
				displayName: 'By Task',
				name: '_byTask',
				values: [
					{
						displayName: 'Task Id',
						name: 'taskId',
						type: 'options',
						default: '',
						description: 'Task Identifier. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getProjectTasks',
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
						description: 'Defines auto-translation method. Available values:\n- \'tm\' – auto-translation via Translation Memory\n- \'mt\' – auto-translation via Machine Translation. \'mt\' should be used with `engineId` parameter\n- \'ai\' – auto-translation via AI. \'ai\' should be used with `aiPromptId` parameter',
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
						placeholder: 'mt'
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
						]
					},
					{
						displayName: 'Engine Id',
						name: 'engineId',
						type: 'options',
						default: '',
						description: 'Machine Translation engine Identifier. Get via [List MTs](#operation/api.mts.getMany)',
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
						typeOptions: {
							loadOptionsMethod: 'getAiPrompts'
						}
					},
					{
						displayName: 'Auto Approve Option',
						name: 'autoApproveOption',
						type: 'options',
						default: '',
						description: 'Defines which translations added by TM auto-translation should be auto-approved. Available values:\n- \'all\' – all\n- \'perfectMatchOnly\' – with perfect TM match\n- \'exceptAutoSubstituted\' – all (skip auto-substituted suggestions)\n- \'perfectMatchApprovedOnly\' - with perfect TM match (approved previously)\n- \'none\' – no auto-approve',
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
						]
					},
					{
						displayName: 'Duplicate Translations',
						name: 'duplicateTranslations',
						type: 'boolean',
						default: false,
						description: 'Adds translations even if the same translation already exists. Default is `false`.\n\n__Note:__ Cannot be used when `replaceTranslationsOption` is `all` (replacing all translations already overrides duplicate handling).'
					},
					{
						displayName: 'Skip Approved Translations',
						name: 'skipApprovedTranslations',
						type: 'boolean',
						default: false,
						description: 'Skip strings that already have approved translations. Default is `false`.\n\n__Note:__ Cannot be used together with `resetApprovalStatus`.'
					},
					{
						displayName: 'Scope',
						name: 'scope',
						type: 'options',
						default: '',
						description: 'Which strings to apply auto-translation to. Default is `untranslated`. Available values:\n- \'untranslated\' – strings without an existing translation (default)\n- \'translated\' – strings that already have a translation (re-translation)\n- \'all\' – both untranslated and translated strings\n\n__Note:__ Cannot be used together with the deprecated `translateUntranslatedOnly`.',
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
						]
					},
					{
						displayName: 'Translation Modified Before',
						name: 'dateTime:translationModifiedBefore',
						type: 'dateTime',
						default: '',
						description: 'Re-translates only if a string\'s current translation was modified prior to this date. Useful after modifying contextual resources like screenshots, style guides, or glossaries.\n\n__Note:__ Requires `scope` to be `translated` or `all`. Cannot be used with `scope: "untranslated"` or `translateUntranslatedOnly: true`.',
						placeholder: '2026-01-01T00:00:00+00:00'
					},
					{
						displayName: 'Translation Modified After',
						name: 'dateTime:translationModifiedAfter',
						type: 'dateTime',
						default: '',
						description: 'Re-translates only if a string\'s current translation was modified after this date. Can be combined with `translationModifiedBefore` to define a date range.\n\n__Note:__ Cannot be later than `translationModifiedBefore`. Requires `scope` to be `translated` or `all`. Cannot be used with `scope: "untranslated"` or `translateUntranslatedOnly: true`.',
						placeholder: '2026-01-01T00:00:00+00:00'
					},
					{
						displayName: 'Replace Translations Option',
						name: 'replaceTranslationsOption',
						type: 'options',
						default: '',
						description: 'Defines whether to replace existing translations with new auto-translations. Default is `none`. Available values:\n- \'none\' – add the new translation alongside existing ones (default)\n- \'autoTranslated\' – replace auto-generated translations (TM, MT, AI). Human translations are kept\n- \'all\' – replace all existing translations\n\n__Note:__ Values other than `none` require `scope` to be `translated` or `all` (cannot be combined with `scope: "untranslated"` or `translateUntranslatedOnly: true`).',
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
						]
					},
					{
						displayName: 'Reset Approval Status',
						name: 'resetApprovalStatus',
						type: 'boolean',
						default: false,
						description: 'Removes approval on existing translations when applying auto-translations. Default is `false`.\n\n__Note:__ Requires `scope` to be `translated` or `all`. Cannot be used together with `skipApprovedTranslations`, `autoApproveOption` (any value other than `none`), or when `replaceTranslationsOption` is `all` (replaced translations lose approval automatically). Cannot be used with `scope: "untranslated"` or `translateUntranslatedOnly: true`.'
					},
					{
						displayName: 'Notify On Completion',
						name: 'notifyOnCompletion',
						type: 'boolean',
						default: false,
						description: 'If `true`, the user who started the Auto-Translation is notified when it finishes, fails or is canceled.\n\n__Note:__ The notification is sent only via the channels the user enabled for the Auto-Translation notification group',
						placeholder: 'true'
					},
					{
						displayName: 'Minimum Match Ratio',
						name: 'minimumMatchRatio',
						type: 'number',
						default: 0,
						description: 'Add translation when TM match is greater or equal to minimum match ratio. This argument will be ignored if `translateWithPerfectMatchOnly` is set.\n\n__Note:__ Works only with TM auto-translation method',
						placeholder: '100'
					},
					{
						displayName: 'Translate With Perfect Match Only',
						name: 'translateWithPerfectMatchOnly',
						type: 'boolean',
						default: false,
						description: 'Applies auto-translation only for the strings with perfect match (source text and contextual information are identical)\n\n__Note:__ Works only with TM auto-translation method'
					},
					{
						displayName: 'Fallback Languages',
						name: 'fallbackLanguages',
						type: 'fixedCollection',
						default: {},
						description: 'Defines fallback languages mapping. The passed value should be an associative array containing both language id and array of fallback language ids:\n\n - `{languageId}` – Crowdin id for the specified language. Get via [List Supported Languages](#operation/api.languages.getMany)\n - `Array of strings` – an array containing fallback language ids. Get via [List Supported Languages](#operation/api.languages.getMany)\n\n__Note:__ Available only for TM Auto-Translation',
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
						displayName: 'Custom Instruction',
						name: 'customInstruction',
						type: 'string',
						default: '',
						description: 'Custom instruction for AI auto-translation. This instruction will be appended to the AI prompt text.\n\n__Note:__ Available only for AI auto-translation method'
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeRootBody
				],
				property: '_body',
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
					'api.projects.pre-translations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'Auto-translation Identifier. Get via [Apply Auto-Translation](#operation/api.projects.pre-translations.post)',
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
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'Auto-translation Identifier. Get via [Apply Auto-Translation](#operation/api.projects.pre-translations.post)',
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
		displayName: 'Job Identifier',
		name: 'jobIdentifier',
		required: true,
		description: 'Auto-translation Identifier. Get via [Apply Auto-Translation](#operation/api.projects.pre-translations.post)',
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
					'api.projects.translations.builds.directories.post'
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
					'translations'
				],
				operation: [
					'api.projects.translations.builds.directories.post'
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
		displayName: 'Target Language Ids',
		name: 'targetLanguageIds',
		type: 'multiOptions',
		default: [],
		description: 'Specify target languages for build. Get via [List Supported Languages](#operation/api.languages.getMany)\n\n * Leave this field empty to build all target languages',
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
					'api.projects.translations.builds.directories.post'
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
		description: 'Defines whether to export only translated strings\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedFiles=true` in same request',
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
					'api.projects.translations.builds.directories.post'
				]
			}
		}
	},
	{
		displayName: 'Skip Untranslated Files',
		name: 'skipUntranslatedFiles',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated files\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedStrings=true` in same request',
		routing: {
			send: {
				property: 'skipUntranslatedFiles',
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
					'api.projects.translations.builds.directories.post'
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
					'api.projects.translations.builds.directories.post'
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
					'api.projects.translations.builds.directories.post'
				]
			}
		}
	},
	{
		displayName: 'Preserve Folder Hierarchy',
		name: 'preserveFolderHierarchy',
		type: 'boolean',
		default: false,
		routing: {
			send: {
				property: 'preserveFolderHierarchy',
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
					'api.projects.translations.builds.directories.post'
				]
			}
		}
	},
	{
		displayName: 'If None Match',
		name: 'If-None-Match',
		description: 'Add **Etag** identifier to the **If-None-Match** request header to see whether any changes were applied to the file. In case the file was changed it would be built. If not you\'ll receive a 304 (Not Modified) status code.',
		default: '',
		type: 'string',
		routing: {
			request: {
				headers: {
					'If-None-Match': '={{ $value }}'
				}
			}
		},
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.builds.files.post'
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
					'api.projects.translations.builds.files.post'
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
					'translations'
				],
				operation: [
					'api.projects.translations.builds.files.post'
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
		displayName: 'Target Language Id',
		required: true,
		name: 'targetLanguageId',
		type: 'options',
		default: '',
		description: 'Target Language Identifier. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'api.projects.translations.builds.files.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Skip Untranslated Strings',
		name: 'skipUntranslatedStrings',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated strings\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedFiles=true` in same request',
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
					'api.projects.translations.builds.files.post'
				]
			}
		}
	},
	{
		displayName: 'Skip Untranslated Files',
		name: 'skipUntranslatedFiles',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated files\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedStrings=true` in same request',
		routing: {
			send: {
				property: 'skipUntranslatedFiles',
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
					'api.projects.translations.builds.files.post'
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
					'api.projects.translations.builds.files.post'
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
					'api.projects.translations.builds.files.post'
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
					'api.projects.translations.builds.getMany'
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
		description: 'Filter builds by `branchId`',
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
					'translations'
				],
				operation: [
					'api.projects.translations.builds.getMany'
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
					'translations'
				],
				operation: [
					'api.projects.translations.builds.getMany'
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
					'api.projects.translations.builds.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Body',
		name: '_body',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.builds.post'
				]
			}
		},
		options: [
			{
				displayName: 'Enterprise Translation Create Project Build Form',
				name: '_enterpriseTranslationCreateProjectBuildForm',
				values: [
					{
						displayName: 'Branch Id',
						name: 'branchId',
						type: 'options',
						default: '',
						description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getBranches',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Target Language Ids',
						name: 'targetLanguageIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getLanguagesMulti'
						},
						default: [],
						description: 'Specify target languages for build. Get via [List Supported Languages](#operation/api.languages.getMany)\n\n * Leave this field empty to build all target languages'
					},
					{
						displayName: 'Skip Untranslated Strings',
						name: 'skipUntranslatedStrings',
						type: 'boolean',
						default: false,
						description: 'Defines whether to export only translated strings\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedFiles=true` in same request',
						placeholder: 'false'
					},
					{
						displayName: 'Skip Untranslated Files',
						name: 'skipUntranslatedFiles',
						type: 'boolean',
						default: false,
						description: 'Defines whether to export only translated files\n\n__Note:__ `true` value can\'t be used with `skipUntranslatedStrings=true` in same request',
						placeholder: 'false'
					},
					{
						displayName: 'Export With Min Approvals Count',
						name: 'exportWithMinApprovalsCount',
						type: 'number',
						default: 0,
						description: 'Defines whether to export only approved strings\n\n__Note:__ value greater than `0` can\'t be used with `exportStringsThatPassedWorkflow=true` in same request',
						placeholder: '0'
					},
					{
						displayName: 'Export Strings That Passed Workflow',
						name: 'exportStringsThatPassedWorkflow',
						type: 'boolean',
						default: false,
						description: 'Defines whether to export only strings that passed workflow\n\n__Note:__ `true` value can\'t be used with `exportWithMinApprovalsCount>0` in same request or in projects without an assigned workflow',
						placeholder: 'true'
					}
				]
			},
			{
				displayName: 'Translation Create Project Pseudo Build Form',
				name: '_translationCreateProjectPseudoBuildForm',
				values: [
					{
						displayName: 'Pseudo',
						name: 'pseudo',
						type: 'boolean',
						default: false,
						description: 'Flag for detecting pseudo translation',
						required: true
					},
					{
						displayName: 'Branch Id',
						name: 'branchId',
						type: 'options',
						default: '',
						description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getBranches',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Prefix',
						name: 'prefix',
						type: 'string',
						default: '',
						description: 'Add special characters at the beginning of each string to show where messages have been concatenated together.'
					},
					{
						displayName: 'Suffix',
						name: 'suffix',
						type: 'string',
						default: '',
						description: 'Add special characters at the end of each string to show where messages have been concatenated together.'
					},
					{
						displayName: 'Length Transformation',
						name: 'lengthTransformation',
						type: 'number',
						default: 0,
						description: 'Make string larger or shorter. Acceptable values must be from -50 to 100. Default is 0.'
					},
					{
						displayName: 'Char Transformation',
						name: 'charTransformation',
						type: 'options',
						default: '',
						description: 'Transforms characters to other languages. Acceptable values are: asian, cyrillic, european, arabic.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asian',
								value: 'asian'
							},
							{
								name: 'cyrillic',
								value: 'cyrillic'
							},
							{
								name: 'european',
								value: 'european'
							},
							{
								name: 'arabic',
								value: 'arabic'
							}
						]
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeRootBody
				],
				property: '_body',
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
					'api.projects.translations.builds.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Build Id',
		name: 'buildId',
		required: true,
		description: 'Project Build Identifier. Get via [List Project Builds](#operation/api.projects.translations.builds.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.builds.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBuilds',
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
					'api.projects.translations.builds.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Build Id',
		name: 'buildId',
		required: true,
		description: 'Project Build Identifier. Get via [List Project Builds](#operation/api.projects.translations.builds.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.builds.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBuilds',
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
					'api.projects.translations.builds.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Build Id',
		name: 'buildId',
		required: true,
		description: 'Project Build Identifier. Get via [List Project Builds](#operation/api.projects.translations.builds.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.builds.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectBuilds',
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
		description: 'Branch Identifiers. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `directoryIds` or `fileIds` in same request',
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
		displayName: 'Directory Ids',
		name: 'directoryIds',
		type: 'multiOptions',
		default: [],
		description: 'Directory Identifiers. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `branchIds` or `fileIds` in same request',
		routing: {
			send: {
				property: 'directoryIds',
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
			loadOptionsMethod: 'getProjectDirectoriesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'File Ids',
		name: 'fileIds',
		type: 'multiOptions',
		default: [],
		description: 'File Identifiers. Get via [List Files](#operation/api.projects.files.getMany)\n\n__Note:__ Can\'t be used with `branchIds` or `directoryIds` in same request',
		routing: {
			send: {
				property: 'fileIds',
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
			loadOptionsMethod: 'getProjectFilesMulti',
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
		description: 'Defines whether to export only translated strings\n\n__Note:__ Can\'t be used with `skipUntranslatedFiles` in same request',
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
		displayName: 'Skip Untranslated Files',
		name: 'skipUntranslatedFiles',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated file\n\n__Note:__ Can\'t be used with `skipUntranslatedStrings` in same request',
		routing: {
			send: {
				property: 'skipUntranslatedFiles',
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
		displayName: 'File Id',
		name: 'fileId',
		type: 'options',
		default: '',
		description: 'File Identifier for import. Get via [List Files](#operation/api.projects.files.getMany) <br> **Note:** Required for content in all formats except XLIFF',
		routing: {
			send: {
				property: 'fileId',
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
					'api.projects.translations.enterprise.imports'
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
					'api.projects.translations.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Text',
		required: true,
		name: 'text',
		type: 'string',
		default: '',
		description: 'Text to find in the translations, 1 to 128 characters. Matched literally, without regular expressions',
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
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.post'
				]
			}
		},
		placeholder: 'Робочий простір'
	},
	{
		displayName: 'Replace With',
		required: true,
		name: 'replaceWith',
		type: 'string',
		default: '',
		description: 'Text that replaces every match, up to 10000 characters. Inserted literally: `$1` or `\\0` stay as typed. A translation that would become empty is skipped',
		routing: {
			send: {
				property: 'replaceWith',
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
					'api.projects.translations.replacements.post'
				]
			}
		},
		placeholder: 'Простір'
	},
	{
		displayName: 'Match Mode',
		name: 'matchMode',
		type: 'options',
		default: '',
		description: 'How `text` is matched. One of: `phrase` finds the whole phrase anywhere in a translation, `allWords` finds translations that contain every word of `text` and replaces each of these words, `entireText` finds translations whose whole text equals `text`. Default is `phrase`',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'phrase',
				value: 'phrase'
			},
			{
				name: 'allWords',
				value: 'allWords'
			},
			{
				name: 'entireText',
				value: 'entireText'
			}
		],
		routing: {
			send: {
				property: 'matchMode',
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
					'api.projects.translations.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'Case Sensitive',
		name: 'caseSensitive',
		type: 'boolean',
		default: false,
		description: 'If `true`, the letter case of `text` must match. Default is `false`',
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
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'Language Ids',
		required: true,
		name: 'languageIds',
		type: 'multiOptions',
		default: [],
		description: 'Target languages to replace the translations in. Get via [Project Target Languages](#operation/api.projects.get)',
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
					'api.projects.translations.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'File Ids',
		name: 'fileIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the translations of the given files. Get via [List Files](#operation/api.projects.files.getMany). All project files by default\n\n__Note:__ Can\'t be used with `directoryIds` or `branchIds` in the same request',
		routing: {
			send: {
				property: 'fileIds',
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
					'api.projects.translations.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFilesMulti',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Directory Ids',
		name: 'directoryIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the translations of the files in the given directories, nested directories included. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `fileIds` or `branchIds` in the same request',
		routing: {
			send: {
				property: 'directoryIds',
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
					'api.projects.translations.replacements.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectDirectoriesMulti',
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
		description: 'Limit the replacement to the translations of the files in the given branches. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `fileIds` or `directoryIds` in the same request',
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
					'api.projects.translations.replacements.post'
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
		displayName: 'Task Id',
		name: 'taskId',
		type: 'options',
		default: '',
		description: 'Limit the replacement to the strings of the given task. Get via [List Tasks](#operation/api.projects.tasks.getMany)',
		routing: {
			send: {
				property: 'taskId',
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
					'api.projects.translations.replacements.post'
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
		displayName: 'Label Ids',
		name: 'labelIds',
		type: 'multiOptions',
		default: [],
		description: 'Limit the replacement to the translations of the strings with the given labels, matched as `labelMatchRule` sets. Get via [List Labels](#operation/api.projects.labels.getMany)',
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
					'api.projects.translations.replacements.post'
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
		description: 'How a string is matched against `labelIds`. One of: `all` — the string carries every one of the labels, `any` — at least one of them. Default is `all`\n\n__Note:__ Must be used together with `labelIds`',
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
					'api.projects.translations.replacements.post'
				]
			}
		}
	},
	{
		displayName: 'Translation Ids',
		name: 'translationIds',
		type: 'fixedCollection',
		default: {},
		description: 'Limit the replacement to the given translations, for example to the matches of a dry run that should really be replaced. Get via [List Translation Replacement Matches](#operation/api.projects.translations.replacements.matches.getMany) or [List Language Translations](#operation/api.projects.languages.translations.getMany). Up to 10000 IDs',
		routing: {
			send: {
				property: 'translationIds',
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
					'api.projects.translations.replacements.post'
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
						type: 'number',
						default: 0,
						placeholder: '0'
					}
				]
			}
		]
	},
	{
		displayName: 'Dry Run',
		name: 'dryRun',
		type: 'boolean',
		default: false,
		description: 'If `true`, the matches are found and listed, but no translation is changed. Default is `false`',
		routing: {
			send: {
				property: 'dryRun',
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
					'api.projects.translations.replacements.post'
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
					'api.projects.translations.replacements.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.get'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
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
					'api.projects.translations.replacements.matches.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.matches.getMany'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
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
					'api.projects.translations.replacements.matches.getMany'
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
					'api.projects.translations.replacements.reverts.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.reverts.getMany'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
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
					'api.projects.translations.replacements.reverts.getMany'
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
					'api.projects.translations.replacements.reverts.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.reverts.post'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
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
					'api.projects.translations.replacements.reverts.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.reverts.get'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
	},
	{
		displayName: 'Revert Id',
		name: 'revertId',
		required: true,
		description: 'ID of the translation replacement revert. Get via [List Translation Replacement Reverts](#operation/api.projects.translations.replacements.reverts.getMany)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.reverts.get'
				]
			}
		},
		placeholder: '0f3b8f14-9c1a-4b1e-8e3a-5d2f7c9a6b40'
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
					'api.projects.translations.replacements.reverts.summary.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.reverts.summary.get'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
	},
	{
		displayName: 'Revert Id',
		name: 'revertId',
		required: true,
		description: 'ID of the translation replacement revert. Get via [List Translation Replacement Reverts](#operation/api.projects.translations.replacements.reverts.getMany)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.reverts.summary.get'
				]
			}
		},
		placeholder: '0f3b8f14-9c1a-4b1e-8e3a-5d2f7c9a6b40'
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
					'api.projects.translations.replacements.summary.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Replacement Id',
		name: 'replacementId',
		required: true,
		description: 'ID of the translation replacement. Get via [Replace Text in Translations](#operation/api.projects.translations.replacements.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'translations'
				],
				operation: [
					'api.projects.translations.replacements.summary.get'
				]
			}
		},
		placeholder: '6c1e5d0a-2b47-4f06-9d0e-3c8d1f6b2a11'
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
				displayName: 'Source Language Export Pattern',
				name: 'sourceLanguageExportPattern',
				type: 'string',
				default: '',
				description: 'Source language export pattern. Works only when `includeProjectSourceLanguage` is enabled.\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
				placeholder: 'strings-%two_letter_code%.resx'
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
					'api.projects.bundles.files.getMany'
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
					'api.projects.translations.builds.getMany'
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
					'api.projects.translations.replacements.matches.getMany'
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
					'api.projects.translations.replacements.reverts.getMany'
				]
			}
		}
	}
];
