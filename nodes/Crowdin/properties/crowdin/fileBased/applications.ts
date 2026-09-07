// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, normalizeFieldBody, parseJsonBodyField } from '../../../utils/preSend';

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
				name: 'Upload Application Bundle',
				value: 'api.applications.installations.bundles.post',
				action: 'Upload Application Bundle',
				description: '**Required scopes:** `application.installation` (Read and Write).\n\nUpload a bundle archive for a serverless app installed from manifest content. The bundle must be a ZIP archive that contains a non-empty `app.js` entry point at its root.',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/installations/{{$parameter["identifier"]}}/bundles'
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
				description: '**Required scopes:** `application.installation` (Read and Write).\n\nInstall an application either from a hosted manifest URL or from its manifest content.<br><br>**Note:** Any application - with or without a backend, and regardless of whether it is published to the Crowdin Store - can be installed from a manifest URL (the manifest only needs to be reachable at that URL). Installing from manifest content is supported only for serverless apps - apps that run entirely in the browser with no backend (no `baseUrl`).',
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
				description: '**Required scopes:** `application.installation` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/applications/installations/{{$parameter["identifier"]}}'
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
				name: 'List Application KV Records',
				value: 'api.applications.storage.kv.records.getMany',
				action: 'List Application KV Records',
				description: '**Required scopes:** `application.storage` (Read only).\n\nLists the KV records in the application installation\'s storage that are visible to the current user. Values of `secret` records are returned decrypted. Expired records are not returned.\n\n__Note:__ Requires the application\'s own access token - personal access tokens are not supported',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/storage/kv/records'
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
				name: 'Add Application KV Record',
				value: 'api.applications.storage.kv.records.post',
				action: 'Add Application KV Record',
				description: '**Required scopes:** `application.storage` (Read and Write).\n\nAdds a new KV record to the application installation\'s storage. If the key already exists, the request returns `409` - use [Edit Application KV Record](#operation/api.applications.storage.kv.records.patch) to change an existing record.\n\n__Note:__ Requires the application\'s own access token - personal access tokens are not supported',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/storage/kv/records'
					}
				}
			},
			{
				name: 'Get Application KV Record',
				value: 'api.applications.storage.kv.records.get',
				action: 'Get Application KV Record',
				description: '**Required scopes:** `application.storage` (Read only).\n\nReturns a single KV record. `secret` records are returned decrypted. Expired records and records that are not visible to the current user are reported as not found.\n\n__Note:__ Requires the application\'s own access token - personal access tokens are not supported',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/storage/kv/records/{{$parameter["key"]}}'
					}
				}
			},
			{
				name: 'Delete Application KV Record',
				value: 'api.applications.storage.kv.records.delete',
				action: 'Delete Application KV Record',
				description: '**Required scopes:** `application.storage` (Read and Write).\n\nDeletes a KV record.\n\n__Note:__ Requires the application\'s own access token - personal access tokens are not supported',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/storage/kv/records/{{$parameter["key"]}}'
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
				name: 'Edit Application KV Record',
				value: 'api.applications.storage.kv.records.patch',
				action: 'Edit Application KV Record',
				description: '**Required scopes:** `application.storage` (Read and Write).\n\nReplaces the value, the TTL, or both on an existing KV record. When you set a new TTL, `expiresAt` is calculated from the time the change is applied. Send `"value": null` for the `/ttl` path to remove the TTL and make the record permanent.\n\n__Note:__ Requires the application\'s own access token - personal access tokens are not supported',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/storage/kv/records/{{$parameter["key"]}}'
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
		displayName: 'POST /applications/installations/{identifier}/bundles',
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
					'api.applications.installations.bundles.post'
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
		displayName: 'GET /applications/{applicationIdentifier}/storage/kv/records',
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
					'api.applications.storage.kv.records.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/storage/kv/records',
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
					'api.applications.storage.kv.records.post'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/storage/kv/records/{key}',
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
					'api.applications.storage.kv.records.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /applications/{applicationIdentifier}/storage/kv/records/{key}',
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
					'api.applications.storage.kv.records.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /applications/{applicationIdentifier}/storage/kv/records/{key}',
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
					'api.applications.storage.kv.records.patch'
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
					'api.applications.installations.bundles.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Storage Id',
		required: true,
		name: 'storageId',
		type: 'options',
		default: '',
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).<br><br>Storage file must be a ZIP archive containing the application bundle',
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
					'applications'
				],
				operation: [
					'api.applications.installations.bundles.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
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
										description: 'UI module definitions: an object whose keys are UI module types and whose values are arrays of module definitions.<br><br>`URL` is not allowed (these apps have no `baseUrl`).<br><br>Allowed module types: `editor-right-panel`, `editor-translations-panel`, `editor-asset-panel`, `editor-background-worker`, `project-tools`, `project-menu`, `project-menu-crowdsource`, `project-reports`, `project-integrations`, `profile-resources-menu`, `profile-settings-menu`, `organization-menu`, `organization-settings-menu`, `organization-menu-crowdsource`, `modal`, `chat`, `context-menu`, `navbar-extension`.<br><br>For `context-menu` modules only the `modal` and `redirect` option types are supported (`new_tab` needs a page outside the app bundle, which serverless apps cannot serve).'
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
					'api.applications.storage.kv.records.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Prefix',
		name: 'prefix',
		description: 'Filter results to keys that start with the given prefix',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'prefix',
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
					'api.applications.storage.kv.records.getMany'
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
					'api.applications.storage.kv.records.getMany'
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
					'applications'
				],
				operation: [
					'api.applications.storage.kv.records.getMany'
				]
			}
		},
		placeholder: 'createdAt desc'
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
					'api.applications.storage.kv.records.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Key',
		required: true,
		name: 'key',
		type: 'string',
		default: '',
		description: 'Key of the record. 1-500 characters from `a-z`, `A-Z`, `0-9`, `:`, `.`, `_`, `-`. Unique within the installation, case-sensitive and immutable.\n\nKeys with no reserved prefix are shared with everyone who can access the application. Reserved prefixes narrow visibility:\n * `user:{userId}:` - the user\'s own private records\n * `module:{moduleKey}:` - visible only to users with access to that module (`{moduleKey}` is a module key from the application manifest)',
		routing: {
			send: {
				property: 'key',
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
					'api.applications.storage.kv.records.post'
				]
			}
		},
		placeholder: 'settings.theme'
	},
	{
		displayName: 'Value',
		name: 'value',
		required: true,
		description: 'Any JSON value except `null` - a string, number, boolean, array or object. Up to 245760 bytes (240 KiB) when serialized',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.storage.kv.records.post'
				]
			}
		},
		options: [
			{
				displayName: 'Variant 0',
				name: '_variant0',
				values: [
					{
						displayName: 'JSON Data',
						name: 'json:json',
						type: 'json',
						default: '{}',
						description: 'Enter data as JSON'
					}
				]
			},
			{
				displayName: 'Variant 0',
				name: '_variant0',
				values: [
					{
						displayName: 'JSON Data',
						name: 'json:json',
						type: 'json',
						default: '{}',
						description: 'Enter data as JSON'
					}
				]
			},
			{
				displayName: 'Variant 0',
				name: '_variant0',
				values: [
					{
						displayName: 'JSON Data',
						name: 'json:json',
						type: 'json',
						default: '{}',
						description: 'Enter data as JSON'
					}
				]
			},
			{
				displayName: 'Variant 0',
				name: '_variant0',
				values: [
					{
						displayName: 'JSON Data',
						name: 'json:json',
						type: 'json',
						default: '{}',
						description: 'Enter data as JSON'
					}
				]
			},
			{
				displayName: 'Variant 0',
				name: '_variant0',
				values: [
					{
						displayName: 'JSON Data',
						name: 'json:json',
						type: 'json',
						default: '{}',
						description: 'Enter data as JSON'
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'value',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Secret',
		name: 'secret',
		type: 'boolean',
		default: false,
		description: 'If `true`, the value is encrypted at rest. Immutable - to change it, delete the record and create a new one. Default is `false`',
		routing: {
			send: {
				property: 'secret',
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
					'api.applications.storage.kv.records.post'
				]
			}
		}
	},
	{
		displayName: 'Ttl',
		name: 'ttl',
		type: 'number',
		default: 0,
		description: 'Time to live in seconds (60-31536000, inclusive). Omit for a permanent record',
		routing: {
			send: {
				property: 'ttl',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.storage.kv.records.post'
				]
			}
		},
		placeholder: '0'
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
					'api.applications.storage.kv.records.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Key',
		name: 'key',
		required: true,
		description: 'Key of the record. URL-encode reserved characters (e.g. `:` as `%3A`)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.storage.kv.records.get'
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
					'api.applications.storage.kv.records.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Key',
		name: 'key',
		required: true,
		description: 'Key of the record. URL-encode reserved characters (e.g. `:` as `%3A`)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.storage.kv.records.delete'
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
					'api.applications.storage.kv.records.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Key',
		name: 'key',
		required: true,
		description: 'Key of the record. URL-encode reserved characters (e.g. `:` as `%3A`)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'applications'
				],
				operation: [
					'api.applications.storage.kv.records.patch'
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
					'api.applications.storage.kv.records.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Value',
				name: 'value',
				description: 'Any JSON value except `null` - a string, number, boolean, array or object. Up to 245760 bytes (240 KiB) when serialized',
				default: {},
				type: 'fixedCollection',
				options: [
					{
						name: '_variant0',
						displayName: 'Variant 0',
						values: [
							{
								displayName: 'JSON Data',
								name: 'json:json',
								type: 'json',
								default: '{}',
								description: 'Enter data as JSON'
							}
						]
					},
					{
						name: '_variant0',
						displayName: 'Variant 0',
						values: [
							{
								displayName: 'JSON Data',
								name: 'json:json',
								type: 'json',
								default: '{}',
								description: 'Enter data as JSON'
							}
						]
					},
					{
						name: '_variant0',
						displayName: 'Variant 0',
						values: [
							{
								displayName: 'JSON Data',
								name: 'json:json',
								type: 'json',
								default: '{}',
								description: 'Enter data as JSON'
							}
						]
					},
					{
						name: '_variant0',
						displayName: 'Variant 0',
						values: [
							{
								displayName: 'JSON Data',
								name: 'json:json',
								type: 'json',
								default: '{}',
								description: 'Enter data as JSON'
							}
						]
					},
					{
						name: '_variant0',
						displayName: 'Variant 0',
						values: [
							{
								displayName: 'JSON Data',
								name: 'json:json',
								type: 'json',
								default: '{}',
								description: 'Enter data as JSON'
							}
						]
					}
				]
			},
			{
				displayName: 'Ttl',
				name: 'ttl',
				type: 'number',
				default: 0,
				description: 'Time to live in seconds (60-31536000, inclusive). Omit for a permanent record',
				placeholder: '0'
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
					'api.applications.storage.kv.records.getMany'
				]
			}
		}
	}
];
