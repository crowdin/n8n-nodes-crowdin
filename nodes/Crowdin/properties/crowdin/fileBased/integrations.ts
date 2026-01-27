// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeFieldBody } from '../../../utils/preSend';

export const integrationsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'integrations'
				]
			}
		},
		options: [
			{
				name: 'List Crowdin Files',
				value: 'api.applications.integrations.crowdin.files',
				action: 'List Crowdin Files',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/crowdin-files'
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
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
				value: 'api.applications.integrations.file.progress',
				action: 'Get File Progress',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/file-progress'
					}
				}
			},
			{
				name: 'List Integration Files',
				value: 'api.applications.integrations.integration.files',
				action: 'List Integration Files',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/integration-files'
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data'
								}
							}
						]
					}
				}
			},
			{
				name: 'Update Crowdin Files',
				value: 'api.applications.integrations.crowdin.update',
				action: 'Update Crowdin Files',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/crowdin-update'
					}
				}
			},
			{
				name: 'Update Integration Files',
				value: 'api.applications.integrations.integration.update',
				action: 'Update Integration Files',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/integration-update'
					}
				}
			},
			{
				name: 'List Jobs',
				value: 'api.applications.integrations.job.list',
				action: 'List Jobs',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/all-jobs'
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
				name: 'Get Job Info',
				value: 'api.applications.integrations.job.info',
				action: 'Get Job Info',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/job-info'
					}
				}
			},
			{
				name: 'Cancel Job',
				value: 'api.applications.integrations.job.cancel',
				action: 'Cancel Job',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/jobs'
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
				name: 'Get Application Settings',
				value: 'api.applications.integrations.settings.get',
				action: 'Get Application Settings',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/settings'
					}
				}
			},
			{
				name: 'Update Application Settings',
				value: 'api.applications.integrations.settings.update',
				action: 'Update Application Settings',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/settings'
					}
				}
			},
			{
				name: 'Get Sync Settings',
				value: 'api.applications.integrations.sync.settings.get',
				action: 'Get Sync Settings',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/sync-settings'
					}
				}
			},
			{
				name: 'Update Sync Settings',
				value: 'api.applications.integrations.sync.settings.update',
				action: 'Update Sync Settings',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/sync-settings'
					}
				}
			},
			{
				name: 'Integration Login Form Fields',
				value: 'api.applications.integrations.integration.fields',
				action: 'Integration Login Form Fields',
				routing: {
					request: {
						method: 'GET',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/login-fields'
					}
				}
			},
			{
				name: 'Integration Login',
				value: 'api.applications.integrations.integration.login',
				action: 'Integration Login',
				routing: {
					request: {
						method: 'POST',
						url: '=/applications/{{$parameter["applicationIdentifier"]}}/api/login'
					}
				}
			}
		],
		default: 'api.applications.integrations.crowdin.files'
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/crowdin-files',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.files'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/file-progress',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.file.progress'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/integration-files',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.files'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/api/crowdin-update',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.update'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/api/integration-update',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.update'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/all-jobs',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.list'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/job-info',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.info'
				]
			}
		}
	},
	{
		displayName: 'DELETE /applications/{applicationIdentifier}/api/jobs',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.cancel'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.get'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/api/settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.update'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/sync-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.get'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/api/sync-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.update'
				]
			}
		}
	},
	{
		displayName: 'GET /applications/{applicationIdentifier}/api/login-fields',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.fields'
				]
			}
		}
	},
	{
		displayName: 'POST /applications/{applicationIdentifier}/api/login',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.login'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.files'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.files'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.file.progress'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.file.progress'
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
		description: 'Get via [List Crowdin Files](#operation/api.applications.integrations.crowdin.files)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'fileId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.file.progress'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getIntegrationCrowdinFiles',
			loadOptionsDependsOn: [
				'applicationIdentifier',
				'projectId'
			]
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.files'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.files'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		required: true,
		name: 'projectId',
		type: 'options',
		default: '',
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'projectId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Files',
		required: true,
		name: 'flatten:files',
		type: 'fixedCollection',
		default: {},
		description: 'Add Files',
		routing: {
			send: {
				property: 'flatten:files',
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
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.update'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Variant 1',
				name: 'variant1',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Parent Id',
						name: 'parent_id',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Node Type',
						name: 'node_type',
						type: 'string',
						default: '',
						description: undefined
					}
				]
			},
			{
				displayName: 'Variant 2',
				name: 'variant2',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Id',
						name: 'id',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Parent Id',
						name: 'parentId',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description: undefined
					},
					{
						displayName: 'Node Type',
						name: 'node_type',
						type: 'string',
						default: '',
						description: undefined
					}
				]
			}
		]
	},
	{
		displayName: 'Upload Translations',
		name: 'uploadTranslations',
		type: 'boolean',
		default: false,
		description: 'Upload exist translation from integration',
		routing: {
			send: {
				property: 'uploadTranslations',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.crowdin.update'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		required: true,
		name: 'projectId',
		type: 'options',
		default: '',
		description: 'Project Id. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'projectId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Files',
		required: true,
		name: 'files',
		type: 'json',
		default: '{\n  "102": [\n    "de",\n    "fr"\n  ],\n  "999": [\n    "uk"\n  ]\n}',
		description: '- **{fileId}** _(integer)_: Crowdin File Id. Get via [List Crowdin Files](#operation/api.applications.integrations.crowdin.files)\n- **[{languageCode}]** _(array of strings)_: List Of  Language Id. Get via [List Supported Languages](https://support.crowdin.com/developer/api/v2/#tag/Languages/operation/api.languages.getMany)\n\n**Example:**\n  ```json\n  {\n   102: ["de", "fr"],\n   999: ["uk"]\n  }\n  ```\n',
		routing: {
			send: {
				property: 'files',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.update'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.list'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.list'
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
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.list'
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
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.info'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.info'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Job Id',
		name: 'jobId',
		required: true,
		description: undefined,
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'jobId',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.info'
				]
			}
		},
		placeholder: '067da473-fc0b-43e3-b0a2-09d26af130c1'
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.cancel'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.cancel'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Job Id',
		name: 'jobId',
		required: true,
		description: undefined,
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'jobId',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.cancel'
				]
			}
		},
		placeholder: '067da473-fc0b-43e3-b0a2-09d26af130c1'
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		required: true,
		name: 'projectId',
		type: 'options',
		default: '',
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'projectId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Config',
		required: true,
		name: 'config',
		type: 'json',
		default: '{\n  "schedule": 0,\n  "condition": 0\n}',
		description: undefined,
		routing: {
			send: {
				property: 'config',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.settings.update'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'projectId',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Provider',
		name: 'provider',
		required: true,
		description: undefined,
		default: 'crowdin',
		type: 'options',
		options: [
			{
				name: 'crowdin',
				value: 'crowdin'
			},
			{
				name: 'integration',
				value: 'integration'
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'provider',
				value: '={{ $value }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.get'
				]
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		required: true,
		name: 'projectId',
		type: 'options',
		default: '',
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'projectId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.update'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Provider',
		required: true,
		name: 'provider',
		type: 'options',
		default: 'crowdin',
		description: undefined,
		options: [
			{
				name: 'crowdin',
				value: 'crowdin'
			},
			{
				name: 'integration',
				value: 'integration'
			}
		],
		routing: {
			send: {
				property: 'provider',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.update'
				]
			}
		}
	},
	{
		displayName: 'Files',
		name: 'files',
		required: true,
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.sync.settings.update'
				]
			}
		},
		options: [
			{
				displayName: 'Integration Crowdin Sync Settings Response',
				name: '_integrationCrowdinSyncSettingsResponse',
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
				displayName: 'Integration Integration Sync Settings Response',
				name: '_integrationIntegrationSyncSettingsResponse',
				values: [
					{
						displayName: 'Items',
						name: '_items',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Item',
								name: 'items',
								values: [
									{
										displayName: 'Name',
										name: 'name',
										type: 'string',
										default: '',
										description: undefined
									},
									{
										displayName: 'Id',
										name: 'id',
										type: 'string',
										default: '',
										description: undefined
									},
									{
										displayName: 'Parent Id',
										name: 'parentId',
										type: 'string',
										default: '',
										description: undefined
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'string',
										default: '',
										description: undefined
									},
									{
										displayName: 'Node Type',
										name: 'node_type',
										type: 'string',
										default: '',
										description: undefined
									},
									{
										displayName: 'Schedule',
										name: 'schedule',
										type: 'boolean',
										default: false,
										description: undefined
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
				property: 'files',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.fields'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Application Identifier',
		name: 'applicationIdentifier',
		required: true,
		description: 'Identifier of the application.',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.login'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Project Id',
		required: true,
		name: 'projectId',
		type: 'options',
		default: '',
		description: 'Project Identifier. Get via [List Projects](https://developer.crowdin.com/api/v2/#operation/api.projects.getMany)',
		routing: {
			send: {
				property: 'projectId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.login'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Credentials',
		required: true,
		name: 'credentials',
		type: 'json',
		default: '{\n  "email": "user@crowdin.com",\n  "password": "password"\n}',
		description: 'Login Form Fields. Get via [Integration Login Form Fields](#operation/api.applications.integrations.integration.fields)',
		routing: {
			send: {
				property: 'credentials',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'integrations'
				],
				operation: [
					'api.applications.integrations.integration.login'
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
					'integrations'
				],
				operation: [
					'api.applications.integrations.job.list'
				]
			}
		}
	}
];
