// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, normalizeFieldBody } from '../../../utils/preSend';

export const projectsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'projects'
				]
			}
		},
		options: [
			{
				name: 'List Projects',
				value: 'api.projects.getMany',
				action: 'List Projects',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects'
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
				name: 'Add Project',
				value: 'api.projects.post',
				action: 'Add Project',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects'
					}
				}
			},
			{
				name: 'Get Project',
				value: 'api.projects.get',
				action: 'Get Project',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}'
					}
				}
			},
			{
				name: 'Delete Project',
				value: 'api.projects.delete',
				action: 'Delete Project',
				description: '**Required scopes:** `project` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}'
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
				name: 'Edit Project',
				value: 'api.projects.patch',
				action: 'Edit Project',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Download Project File Format Settings Custom Segmentation',
				value: 'api.projects.file-format-settings.custom-segmentations.get',
				action: 'Download Project File Format Settings Custom Segmentation',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings/{{$parameter["fileFormatSettingsId"]}}/custom-segmentations'
					}
				}
			},
			{
				name: 'Reset Project File Format Settings Custom Segmentation',
				value: 'api.projects.file-format-settings.custom-segmentations.delete',
				action: 'Reset Project File Format Settings Custom Segmentation',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings/{{$parameter["fileFormatSettingsId"]}}/custom-segmentations'
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
				name: 'List Project File Format Settings',
				value: 'api.projects.file-format-settings.getMany',
				action: 'List Project File Format Settings',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings'
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
				name: 'Add Project File Format Settings',
				value: 'api.projects.file-format-settings.post',
				action: 'Add Project File Format Settings',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings'
					}
				}
			},
			{
				name: 'Get Project File Format Settings',
				value: 'api.projects.file-format-settings.get',
				action: 'Get Project File Format Settings',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings/{{$parameter["fileFormatSettingsId"]}}'
					}
				}
			},
			{
				name: 'Delete Project File Format Settings',
				value: 'api.projects.file-format-settings.delete',
				action: 'Delete Project File Format Settings',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings/{{$parameter["fileFormatSettingsId"]}}'
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
				name: 'Edit Project File Format Settings',
				value: 'api.projects.file-format-settings.patch',
				action: 'Edit Project File Format Settings',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/file-format-settings/{{$parameter["fileFormatSettingsId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Project Strings Exporter Settings',
				value: 'api.projects.strings-exporter-settings.getMany',
				action: 'List Project Strings Exporter Settings',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings-exporter-settings'
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
				name: 'Add Project Strings Exporter Settings',
				value: 'api.projects.strings-exporter-settings.post',
				action: 'Add Project Strings Exporter Settings',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/strings-exporter-settings'
					}
				}
			},
			{
				name: 'Get Project Strings Exporter Settings',
				value: 'api.projects.strings-exporter-settings.get',
				action: 'Get Project Strings Exporter Settings',
				description: '**Required scopes:** `project.settings` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/strings-exporter-settings/{{$parameter["systemStringsExporterSettingsId"]}}'
					}
				}
			},
			{
				name: 'Delete Project Strings Exporter Settings',
				value: 'api.projects.strings-exporter-settings.delete',
				action: 'Delete Project Strings Exporter Settings',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/strings-exporter-settings/{{$parameter["systemStringsExporterSettingsId"]}}'
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
				name: 'Edit Project Strings Exporter Settings',
				value: 'api.projects.strings-exporter-settings.patch',
				action: 'Edit Project Strings Exporter Settings',
				description: '**Required scopes:** `project.settings` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/strings-exporter-settings/{{$parameter["systemStringsExporterSettingsId"]}}'
					}
				}
			}
		],
		default: 'api.projects.getMany'
	},
	{
		displayName: 'GET /projects',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/file-format-settings/{fileFormatSettingsId}/custom-segmentations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.custom-segmentations.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/file-format-settings/{fileFormatSettingsId}/custom-segmentations',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.custom-segmentations.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/file-format-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/file-format-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/file-format-settings/{fileFormatSettingsId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/file-format-settings/{fileFormatSettingsId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/file-format-settings/{fileFormatSettingsId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/strings-exporter-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/strings-exporter-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/strings-exporter-settings/{systemStringsExporterSettingsId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/strings-exporter-settings/{systemStringsExporterSettingsId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/strings-exporter-settings/{systemStringsExporterSettingsId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.patch'
				]
			}
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
					'projects'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,id'
	},
	{
		displayName: 'User Id',
		name: 'userId',
		description: 'User Identifier. Get via [Get Authenticated User](#operation/api.user.get)',
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
					'projects'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers'
		}
	},
	{
		displayName: 'Has Manager Access',
		name: 'hasManagerAccess',
		description: 'Projects with Manager Access\n * 0 - false\n * 1 - true',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '1',
				value: 1
			},
			{
				name: '0',
				value: 0
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'hasManagerAccess',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'Set type to 1 to get all string based projects',
		default: '',
		type: 'options',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: '1',
				value: 1
			},
			{
				name: '0',
				value: 0
			}
		],
		routing: {
			send: {
				type: 'query',
				property: 'type',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.getMany'
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
					'projects'
				],
				operation: [
					'api.projects.getMany'
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
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Project Name',
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: 'Knowledge Base'
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		default: '',
		description: 'Project Identifier',
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: '1f198a4e907688bc65834a6d5a6000c3'
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Defines the project type. To create a string-based project, `type` should be set to 1.',
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
				property: 'type',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Target Language Ids',
		name: 'targetLanguageIds',
		type: 'multiOptions',
		default: [],
		description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Visibility',
		name: 'visibility',
		type: 'options',
		default: '',
		description: 'Defines how users can join the project. Available values:\n * open – anyone can join the project\n * private – only invited users can join the project',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'open',
				value: 'open'
			},
			{
				name: 'private',
				value: 'private'
			}
		],
		routing: {
			send: {
				property: 'visibility',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Language Access Policy',
		name: 'languageAccessPolicy',
		type: 'options',
		default: '',
		description: 'Defines access to project languages. Available values:\n * open – each project user can access all project languages\n * moderate – users should join each project language separately',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'open',
				value: 'open'
			},
			{
				name: 'moderate',
				value: 'moderate'
			}
		],
		routing: {
			send: {
				property: 'languageAccessPolicy',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Cname',
		name: 'cname',
		type: 'string',
		default: '',
		description: 'Custom domain name',
		routing: {
			send: {
				property: 'cname',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: 'my-custom-domain.crowdin.com'
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Project description',
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: 'Articles and tutorials'
	},
	{
		displayName: 'Tags Detection',
		name: 'tagsDetection',
		type: 'options',
		default: '',
		description: 'Values available:\n * 0 - Auto\n * 1 - Count tags\n * 2 - Skip tags',
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
			},
			{
				name: '2',
				value: 2
			}
		],
		routing: {
			send: {
				property: 'tagsDetection',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Is Mt Allowed',
		name: 'isMtAllowed',
		type: 'boolean',
		default: true,
		description: 'Allows machine translations (Microsoft Translator, Google Translate) be visible for translators in the Editor.',
		routing: {
			send: {
				property: 'isMtAllowed',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Task Based Access Control',
		name: 'taskBasedAccessControl',
		type: 'boolean',
		default: false,
		description: 'Allow project members work with tasks they assigned to, even if they do not have full access to the language.',
		routing: {
			send: {
				property: 'taskBasedAccessControl',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Auto Substitution',
		name: 'autoSubstitution',
		type: 'boolean',
		default: true,
		description: 'Allows auto-substitution',
		routing: {
			send: {
				property: 'autoSubstitution',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Auto Translate Dialects',
		name: 'autoTranslateDialects',
		type: 'boolean',
		default: false,
		description: 'Automatically fill in regional dialects.\n\nIf `true`, all untranslated strings in regional dialects (e.g. Argentine Spanish) will automatically include translations completed in the primary language (e.g. Spanish).',
		routing: {
			send: {
				property: 'autoTranslateDialects',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Public Downloads',
		name: 'publicDownloads',
		type: 'boolean',
		default: false,
		description: 'Allows translators to download source files to their machines and upload translations back into the project. Project owner and managers can always download sources and upload translations.',
		routing: {
			send: {
				property: 'publicDownloads',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Hidden Strings Proofreaders Access',
		name: 'hiddenStringsProofreadersAccess',
		type: 'boolean',
		default: true,
		description: 'Allows proofreaders to work with hidden strings. Project owner and managers can always access hidden strings',
		routing: {
			send: {
				property: 'hiddenStringsProofreadersAccess',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Use Global Tm',
		name: 'useGlobalTm',
		type: 'boolean',
		default: false,
		description: 'If `true` - machine translations from connected MT engines (e.g. Microsoft Translator, Google Translate) will appear as suggestions in the Editor.\n\n __Note:__ If your organization plan is free or opensource - default value of this one will be `true`',
		routing: {
			send: {
				property: 'useGlobalTm',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Show Tm Suggestions Dialects',
		name: 'showTmSuggestionsDialects',
		type: 'boolean',
		default: true,
		description: 'If `true` - show primary language TM suggestions for dialects if there are no dialect-specific ones.',
		routing: {
			send: {
				property: 'showTmSuggestionsDialects',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Tm Approved Suggestions Only',
		name: 'tmApprovedSuggestionsOnly',
		type: 'boolean',
		default: false,
		description: 'If `true` - only approved suggestions will be saved to the project default TM.',
		routing: {
			send: {
				property: 'tmApprovedSuggestionsOnly',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Skip Untranslated Strings',
		name: 'skipUntranslatedStrings',
		type: 'boolean',
		default: false,
		description: 'Defines whether to skip untranslated strings',
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Export Approved Only',
		name: 'exportApprovedOnly',
		type: 'boolean',
		default: true,
		description: 'Defines whether to export only approved strings',
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
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Qa Check Is Active',
		name: 'qaCheckIsActive',
		type: 'boolean',
		default: true,
		description: 'If `true` - QA checks are active',
		routing: {
			send: {
				property: 'qaCheckIsActive',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Qa Check Categories',
		name: 'qaCheckCategories',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'qaCheckCategories',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Empty',
						name: 'empty',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Size',
						name: 'size',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Spaces',
						name: 'spaces',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Variables',
						name: 'variables',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Punctuation',
						name: 'punctuation',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Symbol Register',
						name: 'symbolRegister',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Special Symbols',
						name: 'specialSymbols',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Wrong Translation',
						name: 'wrongTranslation',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Spellcheck',
						name: 'spellcheck',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Icu',
						name: 'icu',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Terms',
						name: 'terms',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Duplicate',
						name: 'duplicate',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Ftl',
						name: 'ftl',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Android',
						name: 'android',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Numbers',
						name: 'numbers',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Ai',
						name: 'ai',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Outdated',
						name: 'outdated',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					}
				]
			}
		]
	},
	{
		displayName: 'Qa Checks Ignorable Categories',
		name: 'qaChecksIgnorableCategories',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'qaChecksIgnorableCategories',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Empty',
						name: 'empty',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'false'
					},
					{
						displayName: 'Size',
						name: 'size',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Spaces',
						name: 'spaces',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Variables',
						name: 'variables',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Punctuation',
						name: 'punctuation',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Symbol Register',
						name: 'symbolRegister',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Special Symbols',
						name: 'specialSymbols',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Wrong Translation',
						name: 'wrongTranslation',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Spellcheck',
						name: 'spellcheck',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Icu',
						name: 'icu',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'false'
					},
					{
						displayName: 'Terms',
						name: 'terms',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Duplicate',
						name: 'duplicate',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'false'
					},
					{
						displayName: 'Ftl',
						name: 'ftl',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'false'
					},
					{
						displayName: 'Android',
						name: 'android',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Numbers',
						name: 'numbers',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Ai',
						name: 'ai',
						type: 'boolean',
						default: true,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Outdated',
						name: 'outdated',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					}
				]
			}
		]
	},
	{
		displayName: 'Language Mapping',
		name: 'languageMapping',
		type: 'fixedCollection',
		default: {},
		routing: {
			send: {
				property: 'languageMapping',
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
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Language Mapping \'uk\'',
						name: 'uk',
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
										displayName: 'Name',
										name: 'name',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'Ukranian'
									},
									{
										displayName: 'Two Letters Code',
										name: 'two_letters_code',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'ua'
									},
									{
										displayName: 'Three Letters Code',
										name: 'three_letters_code',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'ukr'
									},
									{
										displayName: 'Locale',
										name: 'locale',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'uk-UA'
									},
									{
										displayName: 'Locale With Underscore',
										name: 'locale_with_underscore',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'uk_UA'
									},
									{
										displayName: 'Android Code',
										name: 'android_code',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'uk-rUA'
									},
									{
										displayName: 'Osx Code',
										name: 'osx_code',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'ua.lproj'
									},
									{
										displayName: 'Osx Locale',
										name: 'osx_locale',
										type: 'string',
										default: '',
										description: undefined,
										placeholder: 'ua'
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
		displayName: 'Glossary Access Option',
		name: 'glossaryAccessOption',
		type: 'options',
		default: '',
		description: 'Defines how project members will manage glossary terms. The project owner and managers always can add and edit terms.',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'readOnly',
				value: 'readOnly'
			},
			{
				name: 'fullAccess',
				value: 'fullAccess'
			},
			{
				name: 'manageDrafts',
				value: 'manageDrafts'
			}
		],
		routing: {
			send: {
				property: 'glossaryAccessOption',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Normalize Placeholder',
		name: 'normalizePlaceholder',
		type: 'boolean',
		default: true,
		description: 'Enable the transformation of the placeholders to the unified format to improve the work with TM suggestions',
		routing: {
			send: {
				property: 'normalizePlaceholder',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Notification Settings',
		name: 'notificationSettings',
		type: 'fixedCollection',
		default: {},
		routing: {
			send: {
				property: 'notificationSettings',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Translator New Strings',
						name: 'translatorNewStrings',
						type: 'boolean',
						default: false,
						description: 'Notify translators about new strings',
						placeholder: 'false'
					},
					{
						displayName: 'Manager New Strings',
						name: 'managerNewStrings',
						type: 'boolean',
						default: false,
						description: 'Notify project managers about new strings',
						placeholder: 'false'
					},
					{
						displayName: 'Manager Language Completed',
						name: 'managerLanguageCompleted',
						type: 'boolean',
						default: false,
						description: 'Notify project managers about language translation/validation completion',
						placeholder: 'false'
					}
				]
			}
		]
	},
	{
		displayName: 'Tm Pre Translate',
		name: 'tmPreTranslate',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'tmPreTranslate',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value.fields || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Enabled',
						name: 'enabled',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Auto Approve Option',
						name: 'autoApproveOption',
						type: 'options',
						default: '',
						description: undefined,
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
								name: 'perfectMatchOnly',
								value: 'perfectMatchOnly'
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
								name: 'none',
								value: 'none'
							}
						],
						placeholder: 'all'
					},
					{
						displayName: 'Minimum Match Ratio',
						name: 'minimumMatchRatio',
						type: 'options',
						default: '',
						description: undefined,
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'perfect',
								value: 'perfect'
							},
							{
								name: '100',
								value: '100'
							}
						],
						placeholder: 'perfect'
					}
				]
			}
		]
	},
	{
		displayName: 'Mt Pre Translate',
		name: 'mtPreTranslate',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'mtPreTranslate',
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
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Enabled',
						name: 'enabled',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Mts',
						name: 'mts',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'Mt PreTranslate Engine Settings',
								name: 'items',
								values: [
									{
										displayName: 'Mt Id',
										name: 'mtId',
										type: 'options',
										default: '',
										description: undefined,
										routing: {
											send: {
												property: 'mtPreTranslate.mts.mtId',
												propertyInDotNotation: false,
												type: 'body',
												value: '={{ $value || undefined }}'
											}
										},
										typeOptions: {
											loadOptionsMethod: 'getMTEngines'
										}
									},
									{
										displayName: 'Language Ids',
										name: 'languageIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getLanguagesMulti'
										},
										default: [],
										description: 'Specify an array of languageIds to use specific languages, or use the string `all` to include all supported languages. Retrieve languageIds via the [List Supported Languages](#operation/api.languages.getMany) endpoint',
										routing: {
											send: {
												property: 'mtPreTranslate.mts.languageIds',
												propertyInDotNotation: false,
												type: 'body',
												value: '={{ $value }}'
											}
										}
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
		displayName: 'Ai Pre Translate',
		name: 'aiPreTranslate',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		routing: {
			send: {
				property: 'aiPreTranslate',
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
					'projects'
				],
				operation: [
					'api.projects.post'
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
						displayName: 'Enabled',
						name: 'enabled',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Ai Prompts',
						name: 'aiPrompts',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: undefined,
						placeholder: 'Add Item',
						options: [
							{
								displayName: 'AI PreTranslate Engine Settings',
								name: 'items',
								values: [
									{
										displayName: 'Ai Prompt Id',
										name: 'aiPromptId',
										type: 'options',
										default: '',
										description: 'AI Prompt Identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
										routing: {
											send: {
												property: 'aiPreTranslate.aiPrompts.aiPromptId',
												propertyInDotNotation: false,
												type: 'body',
												value: '={{ $value || undefined }}'
											}
										},
										typeOptions: {
											loadOptionsMethod: 'getAiPrompts'
										}
									},
									{
										displayName: 'Language Ids',
										name: 'languageIds',
										type: 'multiOptions',
										typeOptions: {
											loadOptionsMethod: 'getLanguagesMulti'
										},
										default: [],
										description: 'Specify an array of languageIds to use specific languages, or use the string `all` to include all supported languages. Retrieve languageIds via the [List Supported Languages](#operation/api.languages.getMany) endpoint',
										routing: {
											send: {
												property: 'aiPreTranslate.aiPrompts.languageIds',
												propertyInDotNotation: false,
												type: 'body',
												value: '={{ $value }}'
											}
										}
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
		displayName: 'Pre Translation Ai Prompt Id',
		name: 'preTranslationAiPromptId',
		type: 'options',
		default: '',
		description: 'AI Prompt ID to be used as prompt for AI pre-translation as default value',
		routing: {
			send: {
				property: 'preTranslationAiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Assist Action Ai Prompt Id',
		name: 'assistActionAiPromptId',
		type: 'options',
		default: '',
		description: 'AI Prompt ID to be used as prompt for AI Assist action in Editor',
		routing: {
			send: {
				property: 'assistActionAiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Editor Suggestion Ai Prompt Id',
		name: 'editorSuggestionAiPromptId',
		type: 'options',
		default: '',
		description: 'AI Prompt ID to be used as prompt for AI Suggestion action in Editor',
		routing: {
			send: {
				property: 'editorSuggestionAiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Qa Check Action Ai Prompt Id',
		name: 'qaCheckActionAiPromptId',
		type: 'options',
		default: '',
		description: 'AI Prompt ID to be used as prompt for QA check action',
		routing: {
			send: {
				property: 'qaCheckActionAiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getAiPrompts'
		}
	},
	{
		displayName: 'Savings Report Settings Template Id',
		name: 'savingsReportSettingsTemplateId',
		type: 'options',
		default: '',
		description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany)',
		routing: {
			send: {
				property: 'savingsReportSettingsTemplateId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'Default Tm Id',
		name: 'defaultTmId',
		type: 'options',
		default: '',
		description: 'Translation Memory ID. If omitted new translation memory will be created. Get via [List TMs](#operation/api.tms.getMany)',
		routing: {
			send: {
				property: 'defaultTmId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Default Glossary Id',
		name: 'defaultGlossaryId',
		type: 'options',
		default: '',
		description: 'Glossary ID. If omitted new Glossary will be created. Get via [List Glossaries](#operation/api.glossaries.getMany)',
		routing: {
			send: {
				property: 'defaultGlossaryId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGlossaries'
		}
	},
	{
		displayName: 'In Context',
		name: 'inContext',
		type: 'boolean',
		default: false,
		description: 'Enable In-Context translations.\n\n__Note:__ Must be used together with `inContextPseudoLanguageId`',
		routing: {
			send: {
				property: 'inContext',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'In Context Process Hidden Strings',
		name: 'inContextProcessHiddenStrings',
		type: 'boolean',
		default: true,
		description: 'Export hidden strings via pseudo-language.\n\n__Note:__ If `true` - hidden strings included in the pseudo-language archive will be translatable via In-Context.',
		routing: {
			send: {
				property: 'inContextProcessHiddenStrings',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'In Context Pseudo Language Id',
		name: 'inContextPseudoLanguageId',
		type: 'options',
		default: '',
		description: 'In-Context pseudo-language id.\n\n__Note:__ Must be different from project source and target languages',
		routing: {
			send: {
				property: 'inContextPseudoLanguageId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.post'
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
					'projects'
				],
				operation: [
					'api.projects.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'projects'
				],
				operation: [
					'api.projects.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'projects'
				],
				operation: [
					'api.projects.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.custom-segmentations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'File Format Settings Id',
		name: 'fileFormatSettingsId',
		required: true,
		description: 'File Format Settings Identifier. Get via [List Project File Format Settings](#operation/api.projects.file-format-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.custom-segmentations.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFileFormatSettings',
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.custom-segmentations.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'File Format Settings Id',
		name: 'fileFormatSettingsId',
		required: true,
		description: 'File Format Settings Identifier. Get via [List Project File Format Settings](#operation/api.projects.file-format-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.custom-segmentations.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFileFormatSettings',
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Format',
		required: true,
		name: 'format',
		type: 'string',
		default: '',
		description: 'Defines file format',
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.post'
				]
			}
		},
		placeholder: 'android'
	},
	{
		displayName: 'Settings',
		name: 'settings',
		required: true,
		description: 'Defines file format settings',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.post'
				]
			}
		},
		options: [
			{
				displayName: 'Android file format settings',
				name: '_androidFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Arb file format settings',
				name: '_arbFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for ARB files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'CSV file format settings',
				name: '_csvFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for CSV files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Json file format settings',
				name: '_jsonFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for JSON files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: '',
						description: 'Values available:\n *            \'i18next_json\' — i18next (*.json)\n *            \'nestjs_i18n\' - NestJS i18n',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'i18next_json',
								value: 'i18next_json'
							},
							{
								name: 'nestjs_i18n',
								value: 'nestjs_i18n'
							}
						],
						placeholder: 'nestjs_i18n'
					}
				]
			},
			{
				displayName: 'MacOSX file format settings',
				name: '_macOsxFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for strings files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Xliff file format settings',
				name: '_xliffFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments.\n\n__Important!__ This option disables the possibility to upload existing translations for xliff files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'xliff 2.0 file format settings',
				name: '_xliff20FileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for xliff 2.0 files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'XLSX file format settings',
				name: '_xlsxFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for XLSX files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'settings',
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'File Format Settings Id',
		name: 'fileFormatSettingsId',
		required: true,
		description: 'File Format Settings Identifier. Get via [List Project File Format Settings](#operation/api.projects.file-format-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFileFormatSettings',
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'File Format Settings Id',
		name: 'fileFormatSettingsId',
		required: true,
		description: 'File Format Settings Identifier. Get via [List Project File Format Settings](#operation/api.projects.file-format-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFileFormatSettings',
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'File Format Settings Id',
		name: 'fileFormatSettingsId',
		required: true,
		description: 'File Format Settings Identifier. Get via [List Project File Format Settings](#operation/api.projects.file-format-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectFileFormatSettings',
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.post'
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.post'
				]
			}
		},
		options: [
			{
				displayName: 'Android Strings Exporter Settings',
				name: '_androidStringsExporterSettings',
				values: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Defines strings exporter format',
						required: true,
						placeholder: 'android'
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Defines strings exporter settings',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Convert Placeholders',
										name: 'convertPlaceholders',
										type: 'boolean',
										default: false,
										description: 'Convert placeholders to Android format.'
									},
									{
										displayName: 'Convert Line Breaks',
										name: 'convertLineBreaks',
										type: 'boolean',
										default: false,
										description: 'Сonvert simple line breaks (Enter) to \\n (e.g. New\\nLine).'
									},
									{
										displayName: 'Use Cdata For Strings With Tags',
										name: 'useCdataForStringsWithTags',
										type: 'boolean',
										default: false,
										description: 'Encloses strings with HTML tags in CDATA sections (e.g., `<b>Name</b>` > `<![CDATA[<b>Name</b>]]>`). Does not apply to strings with only `<xliff:g>` tags.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'MacOSX Strings Exporter Settings',
				name: '_macOsxStringsExporterSettings',
				values: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Defines strings exporter format',
						required: true,
						placeholder: 'macosx'
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Defines strings exporter settings',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Convert Placeholders',
										name: 'convertPlaceholders',
										type: 'boolean',
										default: false,
										description: 'Convert placeholders to MacOSX format.'
									},
									{
										displayName: 'Convert Line Breaks',
										name: 'convertLineBreaks',
										type: 'boolean',
										default: false,
										description: 'Сonvert simple line breaks (Enter) to \\n (e.g. New\\nLine).'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Xliff Strings Exporter Settings',
				name: '_xliffStringsExporterSettings',
				values: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Defines strings exporter format',
						required: true,
						placeholder: 'xliff'
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Defines strings exporter settings',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Language pair mapping',
										name: 'json:languagePairMapping',
										type: 'json',
										default: '{}',
										description: 'Defines language pair mapping',
										placeholder: '{"uk":"es","de":"en"}'
									},
									{
										displayName: 'Copy Source To Empty Target',
										name: 'copySourceToEmptyTarget',
										type: 'boolean',
										default: true
									},
									{
										displayName: 'Export Translators Comment',
										name: 'exportTranslatorsComment',
										type: 'boolean',
										default: true,
										description: 'Export comments added by translators.'
									}
								]
							}
						],
						required: true
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'System Strings Exporter Settings Id',
		name: 'systemStringsExporterSettingsId',
		required: true,
		description: 'System strings exporter Settings Identifier. Get via [List Project Strings Exporter Settings](#operation/api.projects.strings-exporter-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStringsExporterSettings',
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'System Strings Exporter Settings Id',
		name: 'systemStringsExporterSettingsId',
		required: true,
		description: 'System strings exporter Settings Identifier. Get via [List Project Strings Exporter Settings](#operation/api.projects.strings-exporter-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStringsExporterSettings',
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'System Strings Exporter Settings Id',
		name: 'systemStringsExporterSettingsId',
		required: true,
		description: 'System strings exporter Settings Identifier. Get via [List Project Strings Exporter Settings](#operation/api.projects.strings-exporter-settings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStringsExporterSettings',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'projects'
				],
				operation: [
					'api.projects.strings-exporter-settings.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Android Strings Exporter Settings',
				name: '_androidStringsExporterSettings',
				values: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Defines strings exporter format',
						required: true,
						placeholder: 'android'
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Defines strings exporter settings',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Convert Placeholders',
										name: 'convertPlaceholders',
										type: 'boolean',
										default: false,
										description: 'Convert placeholders to Android format.'
									},
									{
										displayName: 'Convert Line Breaks',
										name: 'convertLineBreaks',
										type: 'boolean',
										default: false,
										description: 'Сonvert simple line breaks (Enter) to \\n (e.g. New\\nLine).'
									},
									{
										displayName: 'Use Cdata For Strings With Tags',
										name: 'useCdataForStringsWithTags',
										type: 'boolean',
										default: false,
										description: 'Encloses strings with HTML tags in CDATA sections (e.g., `<b>Name</b>` > `<![CDATA[<b>Name</b>]]>`). Does not apply to strings with only `<xliff:g>` tags.'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'MacOSX Strings Exporter Settings',
				name: '_macOsxStringsExporterSettings',
				values: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Defines strings exporter format',
						required: true,
						placeholder: 'macosx'
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Defines strings exporter settings',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Convert Placeholders',
										name: 'convertPlaceholders',
										type: 'boolean',
										default: false,
										description: 'Convert placeholders to MacOSX format.'
									},
									{
										displayName: 'Convert Line Breaks',
										name: 'convertLineBreaks',
										type: 'boolean',
										default: false,
										description: 'Сonvert simple line breaks (Enter) to \\n (e.g. New\\nLine).'
									}
								]
							}
						],
						required: true
					}
				]
			},
			{
				displayName: 'Xliff Strings Exporter Settings',
				name: '_xliffStringsExporterSettings',
				values: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Defines strings exporter format',
						required: true,
						placeholder: 'xliff'
					},
					{
						displayName: 'Settings',
						name: 'settings',
						type: 'fixedCollection',
						default: {},
						description: 'Defines strings exporter settings',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Language pair mapping',
										name: 'json:languagePairMapping',
										type: 'json',
										default: '{}',
										description: 'Defines language pair mapping',
										placeholder: '{"uk":"es","de":"en"}'
									},
									{
										displayName: 'Copy Source To Empty Target',
										name: 'copySourceToEmptyTarget',
										type: 'boolean',
										default: true
									},
									{
										displayName: 'Export Translators Comment',
										name: 'exportTranslatorsComment',
										type: 'boolean',
										default: true,
										description: 'Export comments added by translators.'
									}
								]
							}
						],
						required: true
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Project Name',
				placeholder: 'Knowledge Base'
			},
			{
				displayName: 'Target Language Ids',
				name: 'targetLanguageIds',
				type: 'multiOptions',
				default: [],
				description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getLanguagesMulti'
				}
			},
			{
				displayName: 'Cname',
				name: 'cname',
				type: 'string',
				default: '',
				description: 'Custom domain name',
				placeholder: 'my-custom-domain.crowdin.com'
			},
			{
				displayName: 'Visibility',
				name: 'visibility',
				type: 'options',
				default: '',
				description: 'Defines how users can join the project. Available values:\n * open – anyone can join the project\n * private – only invited users can join the project',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'open',
						value: 'open'
					},
					{
						name: 'private',
						value: 'private'
					}
				]
			},
			{
				displayName: 'Language Access Policy',
				name: 'languageAccessPolicy',
				type: 'options',
				default: '',
				description: 'Defines access to project languages. Available values:\n * open – each project user can access all project languages\n * moderate – users should join each project language separately',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'open',
						value: 'open'
					},
					{
						name: 'moderate',
						value: 'moderate'
					}
				]
			},
			{
				displayName: 'Glossary Access Option',
				name: 'glossaryAccessOption',
				type: 'options',
				default: '',
				description: 'Defines how project members will manage glossary terms. The project owner and managers always can add and edit terms.',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'readOnly',
						value: 'readOnly'
					},
					{
						name: 'fullAccess',
						value: 'fullAccess'
					},
					{
						name: 'manageDrafts',
						value: 'manageDrafts'
					}
				]
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Project description',
				placeholder: 'Articles and tutorials'
			},
			{
				displayName: 'Is Mt Allowed',
				name: 'isMtAllowed',
				type: 'boolean',
				default: true,
				description: 'Allows machine translations (Microsoft Translator, Google Translate) be visible for translators in the Editor.'
			},
			{
				displayName: 'Task Based Access Control',
				name: 'taskBasedAccessControl',
				type: 'boolean',
				default: false,
				description: 'Allow project members work with tasks they assigned to, even if they do not have full access to the language.'
			},
			{
				displayName: 'Auto Substitution',
				name: 'autoSubstitution',
				type: 'boolean',
				default: true,
				description: 'Allows auto-substitution'
			},
			{
				displayName: 'Skip Untranslated Strings',
				name: 'skipUntranslatedStrings',
				type: 'boolean',
				default: false,
				description: 'Defines whether to skip untranslated strings'
			},
			{
				displayName: 'Export Approved Only',
				name: 'exportApprovedOnly',
				type: 'boolean',
				default: true,
				description: 'Defines whether to export only approved strings'
			},
			{
				displayName: 'Auto Translate Dialects',
				name: 'autoTranslateDialects',
				type: 'boolean',
				default: false,
				description: 'Automatically fill in regional dialects.\n\nIf `true`, all untranslated strings in regional dialects (e.g. Argentine Spanish) will automatically include translations completed in the primary language (e.g. Spanish).'
			},
			{
				displayName: 'Public Downloads',
				name: 'publicDownloads',
				type: 'boolean',
				default: false,
				description: 'Allows translators to download source files to their machines and upload translations back into the project. Project owner and managers can always download sources and upload translations.'
			},
			{
				displayName: 'Hidden Strings Proofreaders Access',
				name: 'hiddenStringsProofreadersAccess',
				type: 'boolean',
				default: true,
				description: 'Allows proofreaders to work with hidden strings. Project owner and managers can always access hidden strings'
			},
			{
				displayName: 'Use Global Tm',
				name: 'useGlobalTm',
				type: 'boolean',
				default: false,
				description: 'If `true` - machine translations from connected MT engines (e.g. Microsoft Translator, Google Translate) will appear as suggestions in the Editor.\n\n __Note:__ If your organization plan is free or opensource - default value of this one will be `true`'
			},
			{
				displayName: 'Show Tm Suggestions Dialects',
				name: 'showTmSuggestionsDialects',
				type: 'boolean',
				default: true,
				description: 'If `true` - show primary language TM suggestions for dialects if there are no dialect-specific ones.'
			},
			{
				displayName: 'Tm Approved Suggestions Only',
				name: 'tmApprovedSuggestionsOnly',
				type: 'boolean',
				default: false,
				description: 'If `true` - only approved suggestions will be saved to the project default TM.'
			},
			{
				displayName: 'In Context',
				name: 'inContext',
				type: 'boolean',
				default: false,
				description: 'Enable In-Context translations.\n\n__Note:__ Must be used together with `inContextPseudoLanguageId`'
			},
			{
				displayName: 'In Context Process Hidden Strings',
				name: 'inContextProcessHiddenStrings',
				type: 'boolean',
				default: true,
				description: 'Export hidden strings via pseudo-language.\n\n__Note:__ If `true` - hidden strings included in the pseudo-language archive will be translatable via In-Context.'
			},
			{
				displayName: 'In Context Pseudo Language Id',
				name: 'inContextPseudoLanguageId',
				type: 'options',
				default: '',
				description: 'In-Context pseudo-language id.\n\n__Note:__ Must be different from project source and target languages',
				typeOptions: {
					loadOptionsMethod: 'getLanguages'
				}
			},
			{
				displayName: 'Qa Check Is Active',
				name: 'qaCheckIsActive',
				type: 'boolean',
				default: true,
				description: 'If `true` - QA checks are active'
			},
			{
				displayName: 'Qa Check Categories',
				name: 'qaCheckCategories',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /qaCheckCategories',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Empty',
								name: 'empty',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Size',
								name: 'size',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Tags',
								name: 'tags',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Spaces',
								name: 'spaces',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Variables',
								name: 'variables',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Punctuation',
								name: 'punctuation',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Symbol Register',
								name: 'symbolRegister',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Special Symbols',
								name: 'specialSymbols',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Wrong Translation',
								name: 'wrongTranslation',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Spellcheck',
								name: 'spellcheck',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Icu',
								name: 'icu',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Terms',
								name: 'terms',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Duplicate',
								name: 'duplicate',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Ftl',
								name: 'ftl',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Android',
								name: 'android',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Numbers',
								name: 'numbers',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Ai',
								name: 'ai',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Outdated',
								name: 'outdated',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							}
						]
					}
				]
			},
			{
				displayName: 'Qa Checks Ignorable Categories',
				name: 'qaChecksIgnorableCategories',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /qaChecksIgnorableCategories',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Empty',
								name: 'empty',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'false'
							},
							{
								displayName: 'Size',
								name: 'size',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Tags',
								name: 'tags',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Spaces',
								name: 'spaces',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Variables',
								name: 'variables',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Punctuation',
								name: 'punctuation',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Symbol Register',
								name: 'symbolRegister',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Special Symbols',
								name: 'specialSymbols',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Wrong Translation',
								name: 'wrongTranslation',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Spellcheck',
								name: 'spellcheck',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Icu',
								name: 'icu',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'false'
							},
							{
								displayName: 'Terms',
								name: 'terms',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Duplicate',
								name: 'duplicate',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'false'
							},
							{
								displayName: 'Ftl',
								name: 'ftl',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'false'
							},
							{
								displayName: 'Android',
								name: 'android',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Numbers',
								name: 'numbers',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Ai',
								name: 'ai',
								type: 'boolean',
								default: true,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Outdated',
								name: 'outdated',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							}
						]
					}
				]
			},
			{
				displayName: 'Normalize Placeholder',
				name: 'normalizePlaceholder',
				type: 'boolean',
				default: true,
				description: 'Enable the transformation of the placeholders to the unified format to improve the work with TM suggestions'
			},
			{
				displayName: 'Language Mapping',
				name: 'languageMapping',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Language Mapping \'uk\'',
								name: 'uk',
								type: 'fixedCollection',
								default: {},
								description: undefined,
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Name',
												name: 'name',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'Ukranian'
											},
											{
												displayName: 'Two Letters Code',
												name: 'two_letters_code',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'ua'
											},
											{
												displayName: 'Three Letters Code',
												name: 'three_letters_code',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'ukr'
											},
											{
												displayName: 'Locale',
												name: 'locale',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'uk-UA'
											},
											{
												displayName: 'Locale With Underscore',
												name: 'locale_with_underscore',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'uk_UA'
											},
											{
												displayName: 'Android Code',
												name: 'android_code',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'uk-rUA'
											},
											{
												displayName: 'Osx Code',
												name: 'osx_code',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'ua.lproj'
											},
											{
												displayName: 'Osx Locale',
												name: 'osx_locale',
												type: 'string',
												default: '',
												description: undefined,
												placeholder: 'ua'
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
				displayName: 'Default Tm Id',
				name: 'defaultTmId',
				type: 'options',
				default: '',
				description: 'Translation Memory ID. If omitted new translation memory will be created. Get via [List TMs](#operation/api.tms.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getTranslationMemories'
				}
			},
			{
				displayName: 'Default Glossary Id',
				name: 'defaultGlossaryId',
				type: 'options',
				default: '',
				description: 'Glossary ID. If omitted new Glossary will be created. Get via [List Glossaries](#operation/api.glossaries.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getGlossaries'
				}
			},
			{
				displayName: 'Tm Pre Translate',
				name: 'tmPreTranslate',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /tmPreTranslate',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Enabled',
								name: 'enabled',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Auto Approve Option',
								name: 'autoApproveOption',
								type: 'options',
								default: '',
								description: undefined,
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
										name: 'perfectMatchOnly',
										value: 'perfectMatchOnly'
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
										name: 'none',
										value: 'none'
									}
								],
								placeholder: 'all'
							},
							{
								displayName: 'Minimum Match Ratio',
								name: 'minimumMatchRatio',
								type: 'options',
								default: '',
								description: undefined,
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'perfect',
										value: 'perfect'
									},
									{
										name: '100',
										value: '100'
									}
								],
								placeholder: 'perfect'
							}
						]
					}
				]
			},
			{
				displayName: 'Mt Pre Translate',
				name: 'mtPreTranslate',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /mtPreTranslate',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Enabled',
								name: 'enabled',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Mts',
								name: 'mts',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: undefined,
								placeholder: 'Add Item',
								options: [
									{
										name: 'items',
										displayName: 'Mt PreTranslate Engine Settings',
										values: [
											{
												displayName: 'Mt Id',
												name: 'mtId',
												type: 'options',
												default: '',
												description: undefined,
												routing: {
													send: {
														property: 'mtPreTranslate.mts.mtId',
														propertyInDotNotation: false,
														type: 'body',
														value: '={{ $value || undefined }}'
													}
												},
												typeOptions: {
													loadOptionsMethod: 'getMTEngines'
												}
											},
											{
												displayName: 'Language Ids',
												name: 'languageIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getLanguagesMulti'
												},
												default: [],
												description: 'Specify an array of languageIds to use specific languages, or use the string `all` to include all supported languages. Retrieve languageIds via the [List Supported Languages](#operation/api.languages.getMany) endpoint',
												routing: {
													send: {
														property: 'mtPreTranslate.mts.languageIds',
														propertyInDotNotation: false,
														type: 'body',
														value: '={{ $value }}'
													}
												}
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
				displayName: 'Ai Pre Translate',
				name: 'aiPreTranslate',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /aiPreTranslate',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'Enabled',
								name: 'enabled',
								type: 'boolean',
								default: false,
								description: undefined,
								placeholder: 'true'
							},
							{
								displayName: 'Ai Prompts',
								name: 'aiPrompts',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: undefined,
								placeholder: 'Add Item',
								options: [
									{
										name: 'items',
										displayName: 'AI PreTranslate Engine Settings',
										values: [
											{
												displayName: 'Ai Prompt Id',
												name: 'aiPromptId',
												type: 'options',
												default: '',
												description: 'AI Prompt Identifier. Get via [List AI Prompts](#operation/api.ai.prompts.getMany)',
												routing: {
													send: {
														property: 'aiPreTranslate.aiPrompts.aiPromptId',
														propertyInDotNotation: false,
														type: 'body',
														value: '={{ $value || undefined }}'
													}
												},
												typeOptions: {
													loadOptionsMethod: 'getAiPrompts'
												}
											},
											{
												displayName: 'Language Ids',
												name: 'languageIds',
												type: 'multiOptions',
												typeOptions: {
													loadOptionsMethod: 'getLanguagesMulti'
												},
												default: [],
												description: 'Specify an array of languageIds to use specific languages, or use the string `all` to include all supported languages. Retrieve languageIds via the [List Supported Languages](#operation/api.languages.getMany) endpoint',
												routing: {
													send: {
														property: 'aiPreTranslate.aiPrompts.languageIds',
														propertyInDotNotation: false,
														type: 'body',
														value: '={{ $value }}'
													}
												}
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
				displayName: 'Pre Translation Ai Prompt Id',
				name: 'preTranslationAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for AI pre-translation as default value',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Assist Action Ai Prompt Id',
				name: 'assistActionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for AI Assist action in Editor',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Editor Suggestion Ai Prompt Id',
				name: 'editorSuggestionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for AI Suggestion action in Editor',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Qa Check Action Ai Prompt Id',
				name: 'qaCheckActionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for QA check action',
				typeOptions: {
					loadOptionsMethod: 'getAiPrompts'
				}
			},
			{
				displayName: 'Savings Report Settings Template Id',
				name: 'savingsReportSettingsTemplateId',
				type: 'options',
				default: '',
				description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.projects.reports.settings-templates.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getReportSettingsTemplates'
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
					'projects'
				],
				operation: [
					'api.projects.file-format-settings.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Format',
				name: 'format',
				type: 'string',
				default: '',
				description: 'Defines file format',
				placeholder: 'android'
			},
			{
				displayName: 'Settings',
				name: 'settings',
				description: 'Defines file format settings',
				default: {},
				type: 'fixedCollection',
				options: [
					{
						name: '_androidFileFormatSettings',
						displayName: 'Android file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							}
						]
					},
					{
						name: '_arbFileFormatSettings',
						displayName: 'Arb file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for ARB files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							}
						]
					},
					{
						name: '_csvFileFormatSettings',
						displayName: 'CSV file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: false,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for CSV files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							}
						]
					},
					{
						name: '_jsonFileFormatSettings',
						displayName: 'Json file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for JSON files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								default: '',
								description: 'Values available:\n *            \'i18next_json\' — i18next (*.json)\n *            \'nestjs_i18n\' - NestJS i18n',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'i18next_json',
										value: 'i18next_json'
									},
									{
										name: 'nestjs_i18n',
										value: 'nestjs_i18n'
									}
								],
								placeholder: 'nestjs_i18n'
							}
						]
					},
					{
						name: '_macOsxFileFormatSettings',
						displayName: 'MacOSX file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for strings files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							}
						]
					},
					{
						name: '_xliffFileFormatSettings',
						displayName: 'Xliff file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: false,
								description: 'Defines whether to split long texts into smaller text segments.\n\n__Important!__ This option disables the possibility to upload existing translations for xliff files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							}
						]
					},
					{
						name: '_xliff20FileFormatSettings',
						displayName: 'xliff 2.0 file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: false,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for xliff 2.0 files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							}
						]
					},
					{
						name: '_xlsxFileFormatSettings',
						displayName: 'XLSX file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: false,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for XLSX files when enabled.'
							},
							{
								displayName: 'Srx Storage Id',
								name: 'srxStorageId',
								type: 'options',
								default: '',
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
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
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'projects'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		}
	}
];
