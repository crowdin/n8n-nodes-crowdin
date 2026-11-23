// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, parseJsonBodyField } from '../../../utils/preSend';

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
				name: 'List Application Consent Decisions',
				value: 'api.applications.consents.getMany',
				action: 'List Application Consent Decisions',
				description: '**Required scopes:** `application.consent` (Read only).\n\nList the current user\'s consent decisions - which applications the user allowed (`granted`) or refused (`denied`) to call the Crowdin API on their behalf.',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/consents'
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
				name: 'Create Application Consent Decision',
				value: 'api.applications.consents.post',
				action: 'Create Application Consent Decision',
				description: '**Required scopes:** `application.consent` (Read and Write).\n\nRecord the current user\'s consent decision (`granted` or `denied`) for an application installed by another user. In the normal flow Crowdin records the decision itself when the user responds to the consent prompt shown for the application - use this endpoint to record a decision programmatically. A user has at most one decision per installation - creating a second one returns `409`; use [Edit Application Consent Decision](#operation/api.applications.consents.patch) to change an existing decision.',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/consents'
					}
				}
			},
			{
				name: 'Delete Application Consent Decision',
				value: 'api.applications.consents.delete',
				action: 'Delete Application Consent Decision',
				description: '**Required scopes:** `application.consent` (Read and Write).\n\nForget the current user\'s consent decision for an application. The next call from that application will prompt for consent again.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/applications/consents/{{$parameter["consentId"]}}'
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
				name: 'Edit Application Consent Decision',
				value: 'api.applications.consents.patch',
				action: 'Edit Application Consent Decision',
				description: '**Required scopes:** `application.consent` (Read and Write).\n\nChange an existing consent decision: switch its `status` between `granted` and `denied`, or update the `scopes` snapshot.',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/applications/consents/{{$parameter["consentId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Application Installations',
				value: 'api.applications.installations.getMany',
				action: 'List Application Installations',
				description: '**Required scopes:** `application.installation` (Read only).',
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
				description: '**Required scopes:** `application.installation` (Read and Write).\n\nInstalls an application from a hosted manifest URL or from its app file (`.crowdinapp`). Installing from manifest content is deprecated: use an app file, which carries the manifest together with the build.\n\n__Note:__ Any application - with or without a backend, and regardless of whether it is published to the Crowdin Store - can be installed from a manifest URL (the manifest only needs to be reachable at that URL). Installing from an app file or from manifest content is supported only for serverless apps - apps that run entirely in the browser with no backend (no `baseUrl`).',
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
				description: '**Required scopes:** `application.installation` (Read only).',
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
				description: '**Required scopes:** `application.installation` (Read and Write).',
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
				description: '**Required scopes:** `application.installation` (Read and Write).\n\nChanges the permissions of an installed application and of its modules. For a serverless app installed from an app file or from manifest content, it also replaces the app file and switches development mode.',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/applications/installations/{{$parameter["identifier"]}}'
					}
				}
			},
			{
				name: 'Download Application File',
				value: 'api.applications.installations.download.get',
				action: 'Download Application File',
				description: '**Required scopes:** `application.installation` (Read only).\n\nDownload a serverless app installed from manifest content or an app file as an app file (`.crowdinapp`): a ZIP archive with the app\'s current `manifest.json` and its uploaded build. Install the file in another organization with [Install Application](#operation/api.applications.installations.post). The manifest leaves out `identifier` and `bundle`, because every installation gets its own.<br><br>Not available for apps installed from a manifest URL, apps with a backend (`baseUrl`), and apps whose build was never uploaded.',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/installations/{{$parameter["identifier"]}}/download'
					}
				}
			},
			{
				name: 'Get Application Installation Update',
				value: 'api.applications.installations.update.get',
				action: 'Get Application Installation Update',
				description: '**Required scopes:** `application.installation` (Read only).\n\nReturns the diff between the currently installed application and the latest cached manifest, tagged with `manifestHash` for optimistic-locking on apply.',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/installations/{{$parameter["identifier"]}}/update'
					}
				}
			},
			{
				name: 'Apply Application Installation Update',
				value: 'api.applications.installations.update.post',
				action: 'Apply Application Installation Update',
				description: '**Required scopes:** `application.installation` (Read and Write).\n\nApply the latest cached manifest to an installed application. Requires `manifestHash` from a recent GET /update call as an optimistic-locking token. If the cached manifest has changed since, returns 409 with the fresh diff in the response body.',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/installations/{{$parameter["identifier"]}}/update'
					}
				}
			},
			{
				name: 'Get Application Data',
				value: 'api.applications.api.get',
				action: 'Get Application Data',
				description: '**Required scopes:** `application.proxy` (Read only).\n\nRetrieves data from the specified application.\n\n__Note__: Query parameters are application-specific and vary depending on the application being accessed.',
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
				description: '**Required scopes:** `application.proxy` (Read and Write).\n\nUpdates or restores data in the specified application.\n\n__Note__: Both the query parameters and request body are application-specific and vary depending on the application being accessed.',
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
				description: '**Required scopes:** `application.proxy` (Read and Write).\n\nAdds new data to the specified application.\n\n__Note__: Both the query parameters and request body are application-specific and vary depending on the application being accessed.',
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
				description: '**Required scopes:** `application.proxy` (Read and Write).\n\nDeletes data from the specified application.\n\n__Note__: Query parameters are application-specific and vary depending on the application being accessed.',
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
				description: '**Required scopes:** `application.proxy` (Read and Write).\n\nEdits existing data in the specified application.\n\n__Note__: Both the query parameters and request body are application-specific and vary depending on the application being accessed.',
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
			},
			{
				name: 'Get Application Credit Settings',
				value: 'api.applications.credits.settings.get',
				action: 'Get Application Credit Settings',
				description: '**Required scopes:** `application.credits` (Read only).\n\nSpending limits for paid actions of installed applications: the overall limits, the default limits of each user and per-user overrides. `null` means no limit, `0` blocks spending. Until the overall limits are set, both are `0`, so applications cannot spend',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/settings'
					}
				}
			},
			{
				name: 'List Application Credit Transactions',
				value: 'api.applications.credits.transactions.getMany',
				action: 'List Application Credit Transactions',
				description: '**Required scopes:** `application.transaction` (Read only).\n\nCrowdin Credits transactions of installed applications, newest first. An access token of an installed application sees only the transactions of that application',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/transactions'
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
				name: 'Get Application Credit Transaction',
				value: 'api.applications.credits.transactions.get',
				action: 'Get Application Credit Transaction',
				description: '**Required scopes:** `application.transaction` (Read only).\n\nAn access token of an installed application sees only the transactions of that application',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/transactions/{{$parameter["transactionId"]}}'
					}
				}
			},
			{
				name: 'Export Application Credit Transactions',
				value: 'api.applications.credits.transactions.exports.post',
				action: 'Export Application Credit Transactions',
				description: '**Required scopes:** `application.transaction` (Read only).\n\nStarts building a file with the transactions that match the filters, newest first. Poll the export status and download the file when it is `finished`. An access token of an installed application sees only the transactions of that application',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/credits/transactions/exports'
					}
				}
			},
			{
				name: 'Check Application Credit Transactions Export Status',
				value: 'api.applications.credits.transactions.exports.get',
				action: 'Check Application Credit Transactions Export Status',
				description: '**Required scopes:** `application.transaction` (Read only).\n\nReturns the status of an export. The file can be downloaded once `status` is `finished`',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/transactions/exports/{{$parameter["exportId"]}}'
					}
				}
			},
			{
				name: 'Download Application Credit Transactions Export',
				value: 'api.applications.credits.transactions.exports.download.download',
				action: 'Download Application Credit Transactions Export',
				description: '**Required scopes:** `application.transaction` (Read only).\n\nReturns a link to the exported file, which expires one hour after this call. The export has to be `finished`; until it is, this operation answers 404',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/transactions/exports/{{$parameter["exportId"]}}/download'
					}
				}
			},
			{
				name: 'Get Application Credit Usage',
				value: 'api.applications.credits.usage.get',
				action: 'Get Application Credit Usage',
				description: '**Required scopes:** `application.credits` (Read only).\n\nWhat installed applications spent in the current calendar day and month against the limits. `effectiveDailyCostLimit` and `effectiveMonthlyCostLimit` are the limits that actually apply to the user',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/usage'
					}
				}
			},
			{
				name: 'List Application Credit Usage Members',
				value: 'api.applications.credits.usage.members.getMany',
				action: 'List Application Credit Usage Members',
				description: '**Required scopes:** `application.credits` (Read only).\n\nMembers with the limits that apply to them and what installed applications spent for them in the current calendar day and month',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/usage/members'
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
				name: 'Get Application Credit Usage Member',
				value: 'api.applications.credits.usage.members.get',
				action: 'Get Application Credit Usage Member',
				description: '**Required scopes:** `application.credits` (Read only).\n\nLimits that apply to the member and what installed applications spent for them in the current calendar day and month. Check it before a paid action: a withdrawal that does not fit the limits or the balance is rejected',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/credits/usage/members/{{$parameter["memberId"]}}'
					}
				}
			}
		],
		default: 'api.applications.consents.getMany'
	},
	{
		displayName: 'GET /applications/consents',
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
					'api.applications.consents.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/consents',
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
					'api.applications.consents.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /applications/consents/{consentId}',
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
					'api.applications.consents.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /applications/consents/{consentId}',
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
					'api.applications.consents.patch'
				]
			}
		}
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
		displayName: 'GET /applications/installations/{identifier}/download',
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
					'api.applications.installations.download.get'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/installations/{identifier}/update',
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
					'api.applications.installations.update.get'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/installations/{identifier}/update',
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
					'api.applications.installations.update.post'
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
		displayName: 'GET /applications/credits/settings',
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
					'api.applications.credits.settings.get'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/transactions',
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
					'api.applications.credits.transactions.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/transactions/{transactionId}',
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
					'api.applications.credits.transactions.get'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/credits/transactions/exports',
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
					'api.applications.credits.transactions.exports.post'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/transactions/exports/{exportId}',
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
					'api.applications.credits.transactions.exports.get'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/transactions/exports/{exportId}/download',
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
					'api.applications.credits.transactions.exports.download.download'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/usage',
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
					'api.applications.credits.usage.get'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/usage/members',
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
					'api.applications.credits.usage.members.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/credits/usage/members/{memberId}',
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
					'api.applications.credits.usage.members.get'
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
					'api.applications.consents.getMany'
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
		displayName: 'Identifier',
		name: 'identifier',
		description: 'Filter by application identifier',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'identifier',
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
					'api.applications.consents.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
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
					'api.applications.consents.getMany'
				]
			}
		},
		placeholder: 'createdAt desc'
	},
	{
		displayName: 'Identifier',
		required: true,
		name: 'identifier',
		type: 'options',
		default: '',
		description: 'Application identifier the decision applies to - the same `identifier` as in [List Application Installations](#operation/api.applications.installations.getMany)',
		routing: {
			send: {
				property: 'identifier',
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
					'api.applications.consents.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Installed By',
		required: true,
		name: 'installedBy',
		type: 'options',
		default: '',
		description: 'Identifier of the user who installed the application - the same as `installedBy.id` in [List Application Installations](#operation/api.applications.installations.getMany). Together with `identifier` it pins the decision to a specific installation',
		routing: {
			send: {
				property: 'installedBy',
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
					'api.applications.consents.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Status',
		required: true,
		name: 'status',
		type: 'options',
		default: 'granted',
		description: 'The decision: whether the application may act on behalf of the current user',
		options: [
			{
				name: 'granted',
				value: 'granted'
			},
			{
				name: 'denied',
				value: 'denied'
			}
		],
		routing: {
			send: {
				property: 'status',
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
					'api.applications.consents.post'
				]
			}
		}
	},
	{
		displayName: 'Scopes',
		name: 'scopes',
		type: 'fixedCollection',
		default: {},
		description: 'Scopes the decision was made for - a snapshot of the application scopes at decision time.<br><br>Available scopes: `*`, `language`, `user`, `team`, `notification`, `custom_language`, `group`, `tm`, `glossary`, `style-guide`, `mt`, `ai`, `ai.provider`, `ai.prompt`, `ai.proxy`, `ai.translate`, `automation`, `automation.rule`, `automation.rule.execution`, `webhook`, `project`, `project.settings`, `project.member`, `project.status`, `project.status.issue`, `project.status.progress`, `project.status.qa-check`, `project.source`, `project.source.file`, `project.source.string`, `project.translation`, `project.screenshot`, `project.webhook`, `project.task`, `project.dictionary`, `project.report`, `project.advisor`, `client`, `vendor`, `field`, `security-log`, `application`, `application.installation`, `application.proxy`, `application.consent`, `application.storage`, `organization`, `custom-spellchecker`, `external-qa-check`.<br><br>Each scope supports `:read` and `:write` modifiers (e.g. `project:read`, `project:write`); without a modifier the scope grants both',
		routing: {
			send: {
				property: 'scopes',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.items?.map(i => i._value) || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.consents.post'
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
		displayName: 'Consent Id',
		name: 'consentId',
		required: true,
		description: 'Consent Decision Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.consents.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationConsents'
		}
	},
	{
		displayName: 'Consent Id',
		name: 'consentId',
		required: true,
		description: 'Consent Decision Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.consents.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationConsents'
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
		displayName: 'Body',
		name: '_body',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
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
		options: [
			{
				displayName: 'Install an application from a manifest URL',
				name: '_installAnApplicationFromAManifestUrl',
				values: [
					{
						displayName: 'Url',
						name: 'url',
						type: 'string',
						default: '',
						description: 'Manifest URL',
						required: true,
						placeholder: 'https://localhost.dev/crowdin.json'
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
										description: 'Use modules permissions instead',
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
														description: 'Ids is available only for restricted value',
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
									},
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
						description: 'Assign Agent as a manager to all existing projects'
					},
					{
						displayName: 'Manifest Hash',
						name: 'manifestHash',
						type: 'string',
						default: '',
						description: 'Hash of the app manifest as it was loaded for review before installation. If provided and the manifest currently served at `URL` differs, the installation is rejected with 409 and nothing is installed',
						placeholder: '5536b952d54e0846b6fd69217f6eb7cfdcfba41774732926e1f0c1a158a6e405'
					}
				]
			},
			{
				displayName: 'Install an application from manifest content',
				name: '_installAnApplicationFromManifestContent',
				values: [
					{
						displayName: 'Application manifest content',
						name: 'manifest',
						type: 'fixedCollection',
						default: {},
						description: 'The inline manifest that declares the app - the same document install-from-URL fetches from `URL`. Supported only for serverless apps - apps that run entirely in the browser with no backend (no `baseUrl`).',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Name',
										name: 'name',
										type: 'string',
										default: '',
										description: 'Display name of the application',
										placeholder: 'My App'
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Short description of what the application does'
									},
									{
										displayName: 'Logo',
										name: 'logo',
										type: 'string',
										default: '',
										description: 'Relative URL (within the application bundle) of the application logo'
									},
									{
										displayName: 'Scopes',
										name: 'scopes',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: true
										},
										default: {},
										description: 'OAuth scopes granted to the app for host-proxied Crowdin API calls.<br><br>Available scopes: `*`, `language`, `user`, `team`, `notification`, `custom_language`, `group`, `tm`, `glossary`, `style-guide`, `mt`, `ai`, `ai.provider`, `ai.prompt`, `ai.proxy`, `ai.translate`, `automation`, `automation.rule`, `automation.rule.execution`, `webhook`, `project`, `project.settings`, `project.member`, `project.status`, `project.status.issue`, `project.status.progress`, `project.status.qa-check`, `project.source`, `project.source.file`, `project.source.string`, `project.translation`, `project.screenshot`, `project.webhook`, `project.task`, `project.dictionary`, `project.report`, `project.advisor`, `client`, `vendor`, `field`, `security-log`, `application`, `application.installation`, `application.proxy`, `application.consent`, `application.storage`, `organization`, `custom-spellchecker`, `external-qa-check`.<br><br>Each scope supports `:read` and `:write` modifiers (e.g. `project:read`, `project:write`); without a modifier the scope grants both.',
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
														default: '',
														description: undefined
													}
												]
											}
										]
									},
									{
										displayName: 'String Based Available',
										name: 'stringBasedAvailable',
										type: 'boolean',
										default: false,
										description: 'Whether the app is offered in string-based projects (in addition to file-based projects).'
									},
									{
										displayName: 'Modules',
										name: 'json:modules',
										type: 'json',
										default: '{}',
										description: 'UI module definitions: an object whose keys are UI module types and whose values are arrays of module definitions.<br><br>`URL` is not allowed (these apps have no `baseUrl`).<br><br>Allowed module types: `editor-right-panel`, `editor-translations-panel`, `editor-asset-panel`, `editor-background-worker`, `editor-button`, `project-tools`, `project-menu`, `project-menu-crowdsource`, `project-reports`, `group-reports`, `project-integrations`, `profile-resources-menu`, `profile-settings-menu`, `organization-menu`, `organization-settings-menu`, `organization-menu-crowdsource`, `modal`, `chat`, `context-menu`, `navbar-extension`.<br><br>For `context-menu` modules only the `modal` and `redirect` option types are supported (`new_tab` needs a page outside the app bundle, which serverless apps cannot serve).<br><br>An `editor-button` must point (`options.module`) at an existing module of the type its `options.type` opens: `panel` opens `editor-right-panel`, `modal` opens `modal`, `event` opens `editor-right-panel` or `editor-background-worker`. Its key must not reuse a key of those module types, and it must share at least one `environments` entry with its target.'
									},
									{
										displayName: 'Application default permissions',
										name: 'default_permissions',
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
														type: 'options',
														default: '',
														description: 'Which users the app is available to by default',
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
															}
														],
														placeholder: 'owner'
													},
													{
														displayName: 'Project',
														name: 'project',
														type: 'options',
														default: '',
														description: 'Which projects the app is available in by default',
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
														placeholder: 'own'
													}
												]
											}
										]
									},
									{
										displayName: 'Application bundle',
										name: 'bundle',
										type: 'fixedCollection',
										default: {},
										description: 'Where the app is loaded from. Either Crowdin hosts the app in its own storage (`internal`) or the app is served from an external URL such as a local dev server (`external`).',
										options: [
											{
												displayName: 'Internal application bundle',
												name: '_applicationBundleInternal',
												values: [
													{
														displayName: 'Mode',
														name: 'mode',
														type: 'options',
														default: '',
														description: 'The app is hosted by Crowdin in its own storage (no external URL).',
														options: [
															{
																name: '-',
																value: ''
															},
															{
																name: 'internal',
																value: 'internal'
															}
														],
														placeholder: 'internal',
														required: true
													}
												]
											},
											{
												displayName: 'External application bundle',
												name: '_applicationBundleExternal',
												values: [
													{
														displayName: 'Mode',
														name: 'mode',
														type: 'options',
														default: '',
														description: 'The app is served from an external URL (e.g. a local dev server).',
														options: [
															{
																name: '-',
																value: ''
															},
															{
																name: 'external',
																value: 'external'
															}
														],
														placeholder: 'external',
														required: true
													},
													{
														displayName: 'Url',
														name: 'url',
														type: 'string',
														default: '',
														description: 'URL the app is served from; for local development this is your dev server, e.g. `http://localhost:8080/`.',
														required: true
													}
												]
											}
										]
									}
								]
							}
						],
						required: true
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
										description: 'Use modules permissions instead',
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
														description: 'Ids is available only for restricted value',
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
									},
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
					}
				]
			},
			{
				displayName: 'Install an application from an app file',
				name: '_installAnApplicationFromAnAppFile',
				values: [
					{
						displayName: 'Storage Id',
						name: 'storageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier of the app file. Get via [List Storages](#operation/api.storages.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					},
					{
						displayName: 'Application bundle',
						name: 'bundle',
						type: 'fixedCollection',
						default: {},
						description: 'Where the app is loaded from. Either Crowdin hosts the app in its own storage (`internal`) or the app is served from an external URL such as a local dev server (`external`).',
						options: [
							{
								displayName: 'Internal application bundle',
								name: '_applicationBundleInternal',
								values: [
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: 'The app is hosted by Crowdin in its own storage (no external URL).',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'internal',
												value: 'internal'
											}
										],
										placeholder: 'internal',
										required: true
									}
								]
							},
							{
								displayName: 'External application bundle',
								name: '_applicationBundleExternal',
								values: [
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: 'The app is served from an external URL (e.g. a local dev server).',
										options: [
											{
												name: '-',
												value: ''
											},
											{
												name: 'external',
												value: 'external'
											}
										],
										placeholder: 'external',
										required: true
									},
									{
										displayName: 'Url',
										name: 'url',
										type: 'string',
										default: '',
										description: 'URL the app is served from; for local development this is your dev server, e.g. `http://localhost:8080/`.',
										required: true
									}
								]
							}
						]
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
										description: 'Use modules permissions instead',
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
														description: 'Ids is available only for restricted value',
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
									},
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
					'applications'
				],
				operation: [
					'api.applications.installations.patch'
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
					'api.applications.installations.download.get'
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
					'api.applications.installations.update.get'
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
					'api.applications.installations.update.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Manifest Hash',
		required: true,
		name: 'manifestHash',
		type: 'string',
		default: '',
		description: 'Hash of the manifest version the admin reviewed (from GET /update response). Must match the currently cached version, otherwise the apply request fails with 409.',
		routing: {
			send: {
				property: 'manifestHash',
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
					'api.applications.installations.update.post'
				]
			}
		},
		placeholder: '5536b952d54e0846b6fd69217f6eb7cfdcfba41774732926e1f0c1a158a6e405'
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
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		description: 'Only transactions of this application. Required with an access token of an installed application, where it must name the calling application',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'applicationIdentifier',
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
					'api.applications.credits.transactions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'Only transactions charged for this user',
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
					'applications'
				],
				operation: [
					'api.applications.credits.transactions.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Created After',
		name: 'dateTime:createdAfter',
		description: 'Only transactions created at or after this date, in ISO 8601 format',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'createdAfter',
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
					'api.applications.credits.transactions.getMany'
				]
			}
		},
		placeholder: '2026-09-01T00:00:00+00:00'
	},
	{
		displayName: 'Created Before',
		name: 'dateTime:createdBefore',
		description: 'Only transactions created at or before this date, in ISO 8601 format',
		default: '',
		type: 'dateTime',
		routing: {
			send: {
				type: 'query',
				property: 'createdBefore',
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
					'api.applications.credits.transactions.getMany'
				]
			}
		},
		placeholder: '2026-09-30T23:59:59+00:00'
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
					'api.applications.credits.transactions.getMany'
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
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		description: 'Identifier of the calling application. Required with an access token of an installed application, where it must name the calling application',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'applicationIdentifier',
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
					'api.applications.credits.transactions.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Transaction Id',
		name: 'transactionId',
		required: true,
		description: 'ID of the transaction. Get via [List Application Credit Transactions](#operation/api.applications.credits.transactions.getMany)',
		default: undefined,
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.credits.transactions.get'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		default: '',
		description: 'Format of the exported file. Default is `csv`',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'json',
				value: 'json'
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
					'applications'
				],
				operation: [
					'api.applications.credits.transactions.exports.post'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		type: 'options',
		default: '',
		description: 'Only transactions of this application. Required with an access token of an installed application, where it must name the calling application',
		routing: {
			send: {
				property: 'applicationIdentifier',
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
					'api.applications.credits.transactions.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'User Id',
		name: 'userId',
		type: 'options',
		default: '',
		description: 'Only transactions charged for this user',
		routing: {
			send: {
				property: 'userId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.credits.transactions.exports.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Created After',
		name: 'dateTime:createdAfter',
		type: 'dateTime',
		default: '',
		description: 'Only transactions created at or after this date, in ISO 8601 format',
		routing: {
			send: {
				property: 'createdAfter',
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
					'api.applications.credits.transactions.exports.post'
				]
			}
		},
		placeholder: '2026-09-01T00:00:00+00:00'
	},
	{
		displayName: 'Created Before',
		name: 'dateTime:createdBefore',
		type: 'dateTime',
		default: '',
		description: 'Only transactions created at or before this date, in ISO 8601 format',
		routing: {
			send: {
				property: 'createdBefore',
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
					'api.applications.credits.transactions.exports.post'
				]
			}
		},
		placeholder: '2026-09-30T23:59:59+00:00'
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		description: 'Identifier of the calling application. Required with an access token of an installed application, where it must name the calling application',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'applicationIdentifier',
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
					'api.applications.credits.transactions.exports.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'ID of the export. Get via [Export Application Credit Transactions](#operation/api.applications.credits.transactions.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.credits.transactions.exports.get'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		description: 'Identifier of the calling application. Required with an access token of an installed application, where it must name the calling application',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'applicationIdentifier',
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
					'api.applications.credits.transactions.exports.download.download'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Export Id',
		name: 'exportId',
		required: true,
		description: 'ID of the export. Get via [Export Application Credit Transactions](#operation/api.applications.credits.transactions.exports.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.credits.transactions.exports.download.download'
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
					'api.applications.credits.usage.members.getMany'
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
		displayName: 'User Ids',
		name: 'userIds',
		description: 'Filter by user identifier, comma-separated',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'userIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.credits.usage.members.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
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
					'api.applications.credits.usage.members.getMany'
				]
			}
		},
		placeholder: 'dailyCostSpent desc'
	},
	{
		displayName: 'Member Id',
		name: 'memberId',
		required: true,
		description: 'Member Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.credits.usage.members.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectMembers',
			loadOptionsDependsOn: [
				'projectId'
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
					'applications'
				],
				operation: [
					'api.applications.consents.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				description: 'The decision: whether the application may act on behalf of the current user',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'granted',
						value: 'granted'
					},
					{
						name: 'denied',
						value: 'denied'
					}
				]
			},
			{
				displayName: 'Scopes',
				name: 'scopes',
				type: 'fixedCollection',
				default: {},
				description: 'Scopes the decision was made for - a snapshot of the application scopes at decision time.<br><br>Available scopes: `*`, `language`, `user`, `team`, `notification`, `custom_language`, `group`, `tm`, `glossary`, `style-guide`, `mt`, `ai`, `ai.provider`, `ai.prompt`, `ai.proxy`, `ai.translate`, `automation`, `automation.rule`, `automation.rule.execution`, `webhook`, `project`, `project.settings`, `project.member`, `project.status`, `project.status.issue`, `project.status.progress`, `project.status.qa-check`, `project.source`, `project.source.file`, `project.source.string`, `project.translation`, `project.screenshot`, `project.webhook`, `project.task`, `project.dictionary`, `project.report`, `project.advisor`, `client`, `vendor`, `field`, `security-log`, `application`, `application.installation`, `application.proxy`, `application.consent`, `application.storage`, `organization`, `custom-spellchecker`, `external-qa-check`.<br><br>Each scope supports `:read` and `:write` modifiers (e.g. `project:read`, `project:write`); without a modifier the scope grants both',
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
					'api.applications.consents.getMany'
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
					'api.applications.credits.transactions.getMany'
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
					'api.applications.credits.usage.members.getMany'
				]
			}
		}
	}
];
