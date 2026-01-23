// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, normalizeFieldBody } from '../../../utils/preSend';

export const projectsAndGroupsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				]
			}
		},
		options: [
			{
				name: 'List Groups',
				value: 'api.groups.getMany',
				action: 'List Groups',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups'
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
				name: 'Add Group',
				value: 'api.groups.post',
				action: 'Add Group',
				description: '**Required scopes:** `group` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/groups'
					}
				}
			},
			{
				name: 'Get Group',
				value: 'api.groups.get',
				action: 'Get Group',
				description: '**Required scopes:** `group` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}'
					}
				}
			},
			{
				name: 'Delete Group',
				value: 'api.groups.delete',
				action: 'Delete Group',
				description: '**Required scopes:** `group` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/groups/{{$parameter["groupId"]}}'
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
				name: 'Edit Group',
				value: 'api.groups.patch',
				action: 'Edit Group',
				description: '**Required scopes:** `group` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/groups/{{$parameter["groupId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
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
		default: 'api.groups.getMany'
	},
	{
		displayName: 'GET /groups',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /groups',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.post'
				]
			}
		}
	},
	{
		displayName: 'GET /groups/{groupId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /groups/{groupId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /groups/{groupId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.patch'
				]
			}
		}
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name'
	},
	{
		displayName: 'Parent Id',
		name: 'parentId',
		description: 'Parent Group Identifier. Get via [List Groups](#operation/api.groups.getMany)\n\n __Note__: Set 0 to see groups of root group',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'parentId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.getMany'
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
		description: 'Group Name',
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.post'
				]
			}
		},
		placeholder: 'KB materials'
	},
	{
		displayName: 'Parent Id',
		name: 'parentId',
		type: 'options',
		default: '',
		description: 'Parent Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		routing: {
			send: {
				property: 'parentId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Group description',
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.post'
				]
			}
		},
		placeholder: 'KB localization materials'
	},
	{
		displayName: 'Savings Report Settings Template Id',
		name: 'savingsReportSettingsTemplateId',
		type: 'options',
		default: '',
		description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany)',
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getReportSettingsTemplates'
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
		}
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		required: true,
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.groups.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,id'
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)\n\n __Note__: Set 0 to see items of root group',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'groupId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
		description: 'Project name',
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: 'Knowledge Base'
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
					'projectsAndGroups'
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
		displayName: 'Template Id',
		name: 'templateId',
		type: 'options',
		default: '',
		description: 'Workflow Template Identifier. Get via [List Workflow Templates](#operation/api.workflow-templates.getMany)',
		routing: {
			send: {
				property: 'templateId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getWorkflowTemplates'
		}
	},
	{
		displayName: 'Steps',
		name: 'flatten:steps',
		type: 'fixedCollection',
		default: {},
		description: 'Workflow Template Steps Configuration.\n\n__Note:__ Must be used together with `templateId`\n\n__Note:__ Can\'t be used with `vendorId`, `mtEngineId` in same request',
		routing: {
			send: {
				property: 'flatten:steps',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Workflow Template Step Config Translate Proofread',
				name: 'workflowTemplateStepConfigTranslateProofread',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'number',
						default: undefined,
						description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
						placeholder: '3',
						required: true
					},
					{
						displayName: 'Languages',
						name: 'languages',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
						displayName: 'Config',
						name: 'config',
						type: 'fixedCollection',
						default: {},
						description: '__Note:__ Use only with `Translation` and `Proofreading` step types',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Assignees',
										name: 'json:assignees',
										type: 'json',
										default: '{}',
										description: 'Keys are the Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany), Values are the User Identifiers. Get via [List Users](#operation/api.users.getMany)',
										placeholder: '{"it":[20,21],"fr":[20],"zh-CN":[11]}'
									},
									{
										displayName: 'Assigned Teams',
										name: 'json:assignedTeams',
										type: 'json',
										default: '{}',
										description: 'Keys are the Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany), Values are the Team Identifiers. Get via [List Teams](#operation/api.teams.getMany)',
										placeholder: '{"it":[5,7],"fr":[5],"zh-CN":[3]}'
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Workflow Template Step Config Vendor',
				name: 'workflowTemplateStepConfigVendor',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'number',
						default: undefined,
						description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
						placeholder: '3',
						required: true
					},
					{
						displayName: 'Languages',
						name: 'languages',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
						displayName: 'Vendor Id',
						name: 'vendorId',
						type: 'options',
						default: '',
						description: 'Vendor Identifier. Get via [List Vendors](#operation/api.vendors.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getVendors'
						}
					}
				]
			},
			{
				displayName: 'Workflow Template Step Config TM Pre Translate',
				name: 'workflowTemplateStepConfigTmPreTranslate',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'number',
						default: undefined,
						description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
						placeholder: '3',
						required: true
					},
					{
						displayName: 'Languages',
						name: 'languages',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
						displayName: 'Config',
						name: 'config',
						type: 'fixedCollection',
						default: {},
						description: '__Note:__ Use only if TM Pre-translation is part of your Workflow Template\n\n__Note:__ If `autoSubstitution` is not set, the value from the project settings will be used',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Min Relevant',
										name: 'minRelevant',
										type: 'number',
										default: 0,
										description: 'Minimum match for TM suggestions',
										placeholder: '60'
									},
									{
										displayName: 'Auto Substitution',
										name: 'autoSubstitution',
										type: 'boolean',
										default: false,
										description: 'Improves TM suggestions',
										placeholder: 'true'
									},
									{
										displayName: 'Auto Approve Option',
										name: 'autoApproveOption',
										type: 'options',
										default: '',
										description: 'Approve added translations',
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
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Workflow Template Step Config MT Pre Translate',
				name: 'workflowTemplateStepConfigMtPreTranslate',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'number',
						default: undefined,
						description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
						placeholder: '3',
						required: true
					},
					{
						displayName: 'Languages',
						name: 'languages',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
						displayName: 'Mt Id',
						name: 'mtId',
						type: 'options',
						default: '',
						description: 'MT Engine Identifier. Get via [List MTs](#operation/api.mts.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getMTEngines'
						}
					}
				]
			},
			{
				displayName: 'Workflow Template Step Config AI Pre Translate',
				name: 'workflowTemplateStepConfigAiPreTranslate',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'number',
						default: undefined,
						description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
						placeholder: '3',
						required: true
					},
					{
						displayName: 'Languages',
						name: 'languages',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
						displayName: 'Prompt Id',
						name: 'promptId',
						type: 'options',
						default: '',
						description: 'Prompt Pre Translate Identifier. Get via [List Prompts](#operation/api.ai.prompts.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getAiPrompts'
						}
					}
				]
			}
		]
	},
	{
		displayName: 'Group Id',
		name: 'groupId',
		type: 'options',
		default: '',
		description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
		routing: {
			send: {
				property: 'groupId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getGroups'
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
					'projectsAndGroups'
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
		displayName: 'Vendor Id',
		name: 'vendorId',
		type: 'options',
		default: '',
		description: 'Specify Vendor Identifier, if no Vendor is assigned to Workflow step yet. Get via [List Vendors](#operation/api.vendors.getMany)\n\n__Note:__ Use only if Vendor is part of your Workflow Template\n\n__Note:__ Can\'t be used with `steps` in same request',
		routing: {
			send: {
				property: 'vendorId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getVendors'
		}
	},
	{
		displayName: 'Mt Engine Id',
		name: 'mtEngineId',
		type: 'options',
		default: '',
		description: 'Specify Machine Translation engine Identifier, if no MT engine is assigned to Workflow step yet. Get via [List MTs](#operation/api.mts.getMany)\n\n__Note:__ Use only if MT is part of your Workflow Template\n\n__Note:__ Can\'t be used with `steps` in same request',
		routing: {
			send: {
				property: 'mtEngineId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getMTEngines'
		}
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Project description is visible to project members',
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: 'Vault of all terms and their explanation'
	},
	{
		displayName: 'Translate Duplicates',
		name: 'translateDuplicates',
		type: 'options',
		default: '',
		description: 'Values available:\n * 0 - Show – translators will translate each instance separately,\n * 1 - Hide (regular detection) – all duplicates will share the same translation\n * 2 - Show, but auto-translate them,\n * 3 - Show within a version branch (regular detection) - duplicates will be hidden only between versions branches\n * 4 - Hide (strict detection) – all duplicates will share the same translation\n * 5 - Show within a version branch (strict detection) - duplicates will be hidden only between versions branches',
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
			},
			{
				name: '3',
				value: 3
			},
			{
				name: '4',
				value: 4
			},
			{
				name: '5',
				value: 5
			}
		],
		routing: {
			send: {
				property: 'translateDuplicates',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Task Reviewer Ids',
		name: 'taskReviewerIds',
		type: 'multiOptions',
		default: [],
		description: 'Array of manager user ids.',
		routing: {
			send: {
				property: 'taskReviewerIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getUsersMulti'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
		description: 'Automatically fill in regional dialects.\n\n If `true`, all untranslated strings in regional dialects (e.g. Argentine Spanish) will automatically include translations completed in the primary language (e.g. Spanish).',
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Delayed Workflow Start',
		name: 'delayedWorkflowStart',
		type: 'boolean',
		default: false,
		description: 'Delay workflow start after project creation',
		routing: {
			send: {
				property: 'delayedWorkflowStart',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: '0'
	},
	{
		displayName: 'Export Strings That Passed Workflow',
		name: 'exportStringsThatPassedWorkflow',
		type: 'boolean',
		default: false,
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
					'projectsAndGroups'
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
		default: false,
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
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Qa Approvals Count',
		name: 'qaApprovalsCount',
		type: 'number',
		default: 0,
		description: 'Clear QA checks for translations with specific number of approvals',
		routing: {
			send: {
				property: 'qaApprovalsCount',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		placeholder: '1'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
		displayName: 'Custom Qa Check Ids',
		name: 'customQaCheckIds',
		type: 'multiOptions',
		default: [],
		description: undefined,
		routing: {
			send: {
				property: 'customQaCheckIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getCustomQaChecksMulti'
		}
	},
	{
		displayName: 'External Qa Check Ids',
		name: 'externalQaCheckIds',
		type: 'multiOptions',
		default: [],
		description: undefined,
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getExternalQaChecksMulti'
		}
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
		displayName: 'Savings Report Settings Template Id',
		name: 'savingsReportSettingsTemplateId',
		type: 'options',
		default: '',
		description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany)',
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
		displayName: 'Alignment Action Ai Prompt Id',
		name: 'alignmentActionAiPromptId',
		type: 'options',
		default: '',
		description: 'AI Prompt ID to be used as prompt for Alignment action\n\n__Note:__ Available for the business plan only',
		routing: {
			send: {
				property: 'alignmentActionAiPromptId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
		displayName: 'Save Meta Info In Source',
		name: 'saveMetaInfoInSource',
		type: 'boolean',
		default: true,
		description: 'Context and max.length added in Crowdin will be visible in the downloaded files',
		routing: {
			send: {
				property: 'saveMetaInfoInSource',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Defines the project type. To create a file-based project, `type` should be set to 0.',
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Skip Untranslated Files',
		name: 'skipUntranslatedFiles',
		type: 'boolean',
		default: false,
		description: 'Defines whether to export only translated file',
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
				]
			}
		}
	},
	{
		displayName: 'Tm Context Type',
		name: 'tmContextType',
		type: 'options',
		default: '',
		description: 'TM perfect match searching mode. Available values:\n * segmentContext - searching by context\n * auto - context search for key-value formats and segment search for others\n * prevAndNextSegment - search by previous and next segment',
		options: [
			{
				name: '-',
				value: ''
			},
			{
				name: 'segmentContext',
				value: 'segmentContext'
			},
			{
				name: 'auto',
				value: 'auto'
			},
			{
				name: 'prevAndNextSegment',
				value: 'prevAndNextSegment'
			}
		],
		routing: {
			send: {
				property: 'tmContextType',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'projectsAndGroups'
				],
				operation: [
					'api.projects.post'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.file-format-settings.post'
				]
			}
		},
		options: [
			{
				displayName: 'Property file format settings',
				name: '_propertyFileFormatSettings',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Escape Quotes',
						name: 'escapeQuotes',
						type: 'options',
						default: '',
						description: 'Values available:\n - 0 - Do not escape single quote\n - 1 - Escape single quote by another single quote\n - 2 - Escape single quote by a backslash\n - 3 - Escape single quote by another single quote only in strings containing variables (`{0}`)',
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
							},
							{
								name: '3',
								value: 3
							}
						]
					},
					{
						displayName: 'Escape Special Characters',
						name: 'escapeSpecialCharacters',
						type: 'options',
						default: '',
						description: 'Defines whether any special characters (=, :, ! and #) should be escaped by backslash in exported translations. You can add escape_special_characters per-file option.\n\nAcceptable values are: 0, 1. Default is 0.\n - 0 - Do not escape special characters\n - 1 - Escape special characters by a backslash',
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
						]
					}
				]
			},
			{
				displayName: 'Xml file format settings',
				name: '_xmlFileFormatSettings',
				values: [
					{
						displayName: 'Translate Content',
						name: 'translateContent',
						type: 'boolean',
						default: true,
						description: 'Defines whether to translate texts placed inside the tags'
					},
					{
						displayName: 'Translate Attributes',
						name: 'translateAttributes',
						type: 'boolean',
						default: true,
						description: 'Defines whether to translate tags attributes'
					},
					{
						displayName: 'Translatable Elements',
						name: 'translatableElements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'This is an array of strings, where each item is the XPaths to DOM element that should be imported.\n\nSupported XPath patterns:\n- `/path/to/node` — Absolute path to a specific node\n- `/path/to/attribute[@attr]` — Absolute path to an attribute\n- `//node` — All nodes with the specified name\n- `//[@attr]` — All elements with the specified attribute\n- `nodeone/nodetwo` — Relative path\n- `/nodeone//nodetwo` — Mixed absolute and descendant path\n- `//node[@attr]` — All nodes with the specified name and attribute',
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
					},
					{
						displayName: 'Inline Tags',
						name: 'inlineTags',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify tags that should be considered inline',
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'WebXml file format settings',
				name: '_webXmlFileFormatSettings',
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
					},
					{
						displayName: 'Inline Tags',
						name: 'inlineTags',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify tags that should be considered inline',
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Html file format settings',
				name: '_htmlFileFormatSettings',
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
					},
					{
						displayName: 'Inline Tags',
						name: 'inlineTags',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify tags that should be considered inline',
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Excluded Elements',
						name: 'excludedElements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify CSS selectors for elements that should not be imported',
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
					}
				]
			},
			{
				displayName: 'Adoc file format settings',
				name: '_adocFileFormatSettings',
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
					},
					{
						displayName: 'Exclude Include Directives',
						name: 'excludeIncludeDirectives',
						type: 'boolean',
						default: false,
						description: 'Skip Include Directives'
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Md file format settings',
				name: '_mdFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n__Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Inline Tags',
						name: 'inlineTags',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify tags that should be considered inline',
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
						displayName: 'Strong Marker',
						name: 'strongMarker',
						type: 'options',
						default: '',
						description: 'Marker to use for strong.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisk',
								value: 'asterisk'
							},
							{
								name: 'underscore',
								value: 'underscore'
							}
						]
					},
					{
						displayName: 'Emphasis Marker',
						name: 'emphasisMarker',
						type: 'options',
						default: '',
						description: 'Marker to use for emphasis.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisk',
								value: 'asterisk'
							},
							{
								name: 'underscore',
								value: 'underscore'
							}
						]
					},
					{
						displayName: 'Unordered List Bullet',
						name: 'unorderedListBullet',
						type: 'options',
						default: '',
						description: 'Marker to use for unordered list bullet.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisks',
								value: 'asterisks'
							},
							{
								name: 'plus',
								value: 'plus'
							},
							{
								name: 'dash',
								value: 'dash'
							}
						]
					},
					{
						displayName: 'Table Column Width',
						name: 'tableColumnWidth',
						type: 'options',
						default: '',
						description: 'Table formatting.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'consolidate',
								value: 'consolidate'
							},
							{
								name: 'evenly_distribute_cells',
								value: 'evenly_distribute_cells'
							}
						]
					},
					{
						displayName: 'Front Matter Quotes',
						name: 'frontMatterQuotes',
						type: 'options',
						default: '',
						description: 'Export front matter values in quotes.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'auto',
								value: 'auto'
							},
							{
								name: 'single',
								value: 'single'
							},
							{
								name: 'double',
								value: 'double'
							}
						]
					}
				]
			},
			{
				displayName: 'Mdx v1 file format settings',
				name: '_mdxV1FileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n__Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: '',
						description: 'Values available:\n - \'mdx_v1\' — MDX (v1)\n * - \'mdx_v2\' - MDX (v2)',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'mdx_v1',
								value: 'mdx_v1'
							},
							{
								name: 'mdx_v2',
								value: 'mdx_v2'
							}
						]
					},
					{
						displayName: 'Excluded Front Matter Elements',
						name: 'excludedFrontMatterElements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify elements that should not be imported',
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
						displayName: 'Exclude Code Blocks',
						name: 'excludeCodeBlocks',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import code blocks.'
					},
					{
						displayName: 'Strong Marker',
						name: 'strongMarker',
						type: 'options',
						default: '',
						description: 'Marker to use for strong.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisk',
								value: 'asterisk'
							},
							{
								name: 'underscore',
								value: 'underscore'
							}
						]
					},
					{
						displayName: 'Emphasis Marker',
						name: 'emphasisMarker',
						type: 'options',
						default: '',
						description: 'Marker to use for emphasis.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisk',
								value: 'asterisk'
							},
							{
								name: 'underscore',
								value: 'underscore'
							}
						]
					},
					{
						displayName: 'Unordered List Bullet',
						name: 'unorderedListBullet',
						type: 'options',
						default: '',
						description: 'Marker to use for unordered list bullet.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisks',
								value: 'asterisks'
							},
							{
								name: 'plus',
								value: 'plus'
							},
							{
								name: 'dash',
								value: 'dash'
							}
						]
					},
					{
						displayName: 'Table Column Width',
						name: 'tableColumnWidth',
						type: 'options',
						default: '',
						description: 'Table formatting.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'consolidate',
								value: 'consolidate'
							},
							{
								name: 'evenly_distribute_cells',
								value: 'evenly_distribute_cells'
							}
						]
					}
				]
			},
			{
				displayName: 'Mdx v2 file format settings',
				name: '_mdxV2FileFormatSettings',
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
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Excluded Front Matter Elements',
						name: 'excludedFrontMatterElements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify elements that should not be imported',
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
						displayName: 'Exclude Code Blocks',
						name: 'excludeCodeBlocks',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import code blocks.'
					},
					{
						displayName: 'Strong Marker',
						name: 'strongMarker',
						type: 'options',
						default: '',
						description: 'Marker to use for strong.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisk',
								value: 'asterisk'
							},
							{
								name: 'underscore',
								value: 'underscore'
							}
						]
					},
					{
						displayName: 'Emphasis Marker',
						name: 'emphasisMarker',
						type: 'options',
						default: '',
						description: 'Marker to use for emphasis.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisk',
								value: 'asterisk'
							},
							{
								name: 'underscore',
								value: 'underscore'
							}
						]
					},
					{
						displayName: 'Unordered List Bullet',
						name: 'unorderedListBullet',
						type: 'options',
						default: '',
						description: 'Marker to use for unordered list bullet.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'asterisks',
								value: 'asterisks'
							},
							{
								name: 'plus',
								value: 'plus'
							},
							{
								name: 'dash',
								value: 'dash'
							}
						]
					},
					{
						displayName: 'Table Column Width',
						name: 'tableColumnWidth',
						type: 'options',
						default: '',
						description: 'Table formatting.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'consolidate',
								value: 'consolidate'
							},
							{
								name: 'evenly_distribute_cells',
								value: 'evenly_distribute_cells'
							}
						]
					}
				]
			},
			{
				displayName: 'FmMd file format settings',
				name: '_fmMdFileFormatSettings',
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'FmHtml file format settings',
				name: '_fmHtmlFileFormatSettings',
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
					},
					{
						displayName: 'Inline Tags',
						name: 'inlineTags',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify tags that should be considered inline',
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Excluded Elements',
						name: 'excludedElements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify CSS selectors for elements that should not be imported',
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
						displayName: 'Excluded Front Matter Elements',
						name: 'excludedFrontMatterElements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true
						},
						default: {},
						description: 'Specify elements that should not be imported',
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
					}
				]
			},
			{
				displayName: 'MadcapFlsnp file format settings',
				name: '_madcapFlsnpFileFormatSettings',
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Docx file format settings',
				name: '_docxFileFormatSettings',
				values: [
					{
						displayName: 'Clean Tags Aggressively',
						name: 'cleanTagsAggressively',
						type: 'boolean',
						default: false,
						description: 'When checked, strips additional formatting tags related to text spacing.\n\n __Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.xlsx, *.xltx, *.xlsm, *.xltm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Translate Hidden Text',
						name: 'translateHiddenText',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden text for translation.\n\n __Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm'
					},
					{
						displayName: 'Translate Hyperlink Urls',
						name: 'translateHyperlinkUrls',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden hyperlinks for translation.\n\n __Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Translate Hidden Rows And Columns',
						name: 'translateHiddenRowsAndColumns',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden rows and columns for translation.\n\n __Note:__ Works only for files with the following extensions: *.xlsx, *.xltx, *.xlsm, *.xltm'
					},
					{
						displayName: 'Import Notes',
						name: 'importNotes',
						type: 'boolean',
						default: true,
						description: 'When checked, expose slide notes for translation.\n\n __Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Import Hidden Slides',
						name: 'importHiddenSlides',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden slides for translation.\n\n __Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Idml file format settings',
				name: '_idmlFileFormatSettings',
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Mif file format settings',
				name: '_mifFileFormatSettings',
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Dita file format settings',
				name: '_ditaFileFormatSettings',
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'MediaWiki file format settings',
				name: '_mediaWikiFileFormatSettings',
				values: [
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
				displayName: 'Fjs file format settings',
				name: '_fjsFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for FJS files when enabled.'
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Chrome file format settings',
				name: '_chromeFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for Chrome files when enabled.'
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'React intl file format settings',
				name: '_reactIntlFileFormatSettings',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for React intl files when enabled.'
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Txt file format settings',
				name: '_txtFileFormatSettings',
				values: [
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
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'JavaScript File Format Settings',
				name: '_javaScriptFileFormatSettings',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Export Quotes',
						name: 'exportQuotes',
						type: 'options',
						default: '',
						description: 'Acceptable values are: \'single\', \'double\'. Default is \'single\'.\n - \'single\' - Output will be enclosed in single quotes\n - \'double\' - Output will be enclosed in double quotes',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'single',
								value: 'single'
							},
							{
								name: 'double',
								value: 'double'
							}
						]
					}
				]
			},
			{
				displayName: 'String Catalog file format settings',
				name: '_stringCatalogFileFormatSettings',
				values: [
					{
						displayName: 'Import Key As Source',
						name: 'importKeyAsSource',
						type: 'boolean',
						default: true,
						description: 'Determines whether to import the key as source string if it does not exist.',
						placeholder: 'true'
					},
					{
						displayName: 'Import Translations',
						name: 'importTranslations',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import translations from the file'
					},
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Other file format settings',
				name: '_otherFileFormatSettings',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Group Name',
				placeholder: 'KB materials'
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Group description',
				placeholder: 'KB localization materials'
			},
			{
				displayName: 'Parent Id',
				name: 'parentId',
				type: 'options',
				default: '',
				description: 'Parent Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getGroups'
				}
			},
			{
				displayName: 'Savings Report Settings Template Id',
				name: 'savingsReportSettingsTemplateId',
				type: 'options',
				default: '',
				description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany)',
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Group Id',
				name: 'groupId',
				type: 'options',
				default: '',
				description: 'Group Identifier. Get via [List Groups](#operation/api.groups.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getGroups'
				}
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Project name',
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
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Project description is visible to project members',
				placeholder: 'Vault of all terms and their explanation'
			},
			{
				displayName: 'Translate Duplicates',
				name: 'translateDuplicates',
				type: 'options',
				default: '',
				description: 'Values available:\n * 0 - Show – translators will translate each instance separately,\n * 1 - Hide (regular detection) – all duplicates will share the same translation\n * 2 - Show, but auto-translate them,\n * 3 - Show within a version branch (regular detection) - duplicates will be hidden only between versions branches\n * 4 - Hide (strict detection) – all duplicates will share the same translation\n * 5 - Show within a version branch (strict detection) - duplicates will be hidden only between versions branches',
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
					},
					{
						name: '3',
						value: 3
					},
					{
						name: '4',
						value: 4
					},
					{
						name: '5',
						value: 5
					}
				]
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
				displayName: 'Task Reviewer Ids',
				name: 'taskReviewerIds',
				type: 'multiOptions',
				default: [],
				description: 'Array of manager user ids.',
				typeOptions: {
					loadOptionsMethod: 'getUsersMulti'
				}
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
				displayName: 'Skip Untranslated Files',
				name: 'skipUntranslatedFiles',
				type: 'boolean',
				default: false,
				description: 'Defines whether to export only translated file'
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
				description: 'Defines whether to export only strings that passed workflow\n\n__Note:__ `true` value can\'t be used with `exportWithMinApprovalsCount>0` in same request or in projects without an assigned workflow'
			},
			{
				displayName: 'Auto Translate Dialects',
				name: 'autoTranslateDialects',
				type: 'boolean',
				default: false,
				description: 'Automatically fill in regional dialects.\n\n If `true`, all untranslated strings in regional dialects (e.g. Argentine Spanish) will automatically include translations completed in the primary language (e.g. Spanish).'
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
				displayName: 'Normalize Placeholder',
				name: 'normalizePlaceholder',
				type: 'boolean',
				default: false,
				description: 'Enable the transformation of the placeholders to the unified format to improve the work with TM suggestions'
			},
			{
				displayName: 'Save Meta Info In Source',
				name: 'saveMetaInfoInSource',
				type: 'boolean',
				default: true,
				description: 'Context and max.length added in Crowdin will be visible in the downloaded files'
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
				displayName: 'Qa Approvals Count',
				name: 'qaApprovalsCount',
				type: 'number',
				default: 0,
				description: 'Clear QA checks for translations with specific number of approvals',
				placeholder: '1'
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
				displayName: 'Tm Context Type',
				name: 'tmContextType',
				type: 'options',
				default: '',
				description: 'TM perfect match searching mode. Available values:\n * segmentContext - searching by context\n * auto - context search for key-value formats and segment search for others\n * prevAndNextSegment - search by previous and next segment',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'segmentContext',
						value: 'segmentContext'
					},
					{
						name: 'auto',
						value: 'auto'
					},
					{
						name: 'prevAndNextSegment',
						value: 'prevAndNextSegment'
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
				displayName: 'Alignment Action Ai Prompt Id',
				name: 'alignmentActionAiPromptId',
				type: 'options',
				default: '',
				description: 'AI Prompt ID to be used as prompt for Alignment action\n\n__Note:__ Available for the business plan only',
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
				description: 'Report Settings Templates Identifier. Get via [List Report Settings Templates](#operation/api.reports.settings-templates.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getReportSettingsTemplates'
				}
			},
			{
				displayName: 'Template Id',
				name: 'templateId',
				type: 'options',
				default: '',
				description: 'Workflow Template Identifier. Get via [List Workflow Templates](#operation/api.workflow-templates.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getWorkflowTemplates'
				}
			},
			{
				displayName: 'Steps',
				name: 'flatten:steps',
				type: 'fixedCollection',
				default: {},
				description: 'Workflow Template Steps Configuration.\n\n__Note:__ Must be used together with `templateId`\n\n__Note:__ Can\'t be used with `vendorId`, `mtEngineId` in same request',
				typeOptions: {
					multipleValues: true
				},
				placeholder: 'Add Item',
				options: [
					{
						name: 'workflowTemplateStepConfigTranslateProofread',
						displayName: 'Workflow Template Step Config Translate Proofread',
						values: [
							{
								displayName: 'Id',
								name: 'id',
								type: 'number',
								default: undefined,
								description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
								placeholder: '3',
								required: true
							},
							{
								displayName: 'Languages',
								name: 'languages',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Config',
								name: 'config',
								type: 'fixedCollection',
								default: {},
								description: '__Note:__ Use only with `Translation` and `Proofreading` step types',
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Assignees',
												name: 'json:assignees',
												type: 'json',
												default: '{}',
												description: 'Keys are the Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany), Values are the User Identifiers. Get via [List Users](#operation/api.users.getMany)',
												placeholder: '{"it":[20,21],"fr":[20],"zh-CN":[11]}'
											},
											{
												displayName: 'Assigned Teams',
												name: 'json:assignedTeams',
												type: 'json',
												default: '{}',
												description: 'Keys are the Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany), Values are the Team Identifiers. Get via [List Teams](#operation/api.teams.getMany)',
												placeholder: '{"it":[5,7],"fr":[5],"zh-CN":[3]}'
											}
										]
									}
								]
							}
						]
					},
					{
						name: 'workflowTemplateStepConfigVendor',
						displayName: 'Workflow Template Step Config Vendor',
						values: [
							{
								displayName: 'Id',
								name: 'id',
								type: 'number',
								default: undefined,
								description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
								placeholder: '3',
								required: true
							},
							{
								displayName: 'Languages',
								name: 'languages',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Vendor Id',
								name: 'vendorId',
								type: 'options',
								default: '',
								description: 'Vendor Identifier. Get via [List Vendors](#operation/api.vendors.getMany)',
								typeOptions: {
									loadOptionsMethod: 'getVendors'
								}
							}
						]
					},
					{
						name: 'workflowTemplateStepConfigTmPreTranslate',
						displayName: 'Workflow Template Step Config TM Pre Translate',
						values: [
							{
								displayName: 'Id',
								name: 'id',
								type: 'number',
								default: undefined,
								description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
								placeholder: '3',
								required: true
							},
							{
								displayName: 'Languages',
								name: 'languages',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Config',
								name: 'config',
								type: 'fixedCollection',
								default: {},
								description: '__Note:__ Use only if TM Pre-translation is part of your Workflow Template\n\n__Note:__ If `autoSubstitution` is not set, the value from the project settings will be used',
								placeholder: 'Add Field',
								options: [
									{
										name: 'fields',
										displayName: 'Fields',
										values: [
											{
												displayName: 'Min Relevant',
												name: 'minRelevant',
												type: 'number',
												default: 0,
												description: 'Minimum match for TM suggestions',
												placeholder: '60'
											},
											{
												displayName: 'Auto Substitution',
												name: 'autoSubstitution',
												type: 'boolean',
												default: false,
												description: 'Improves TM suggestions',
												placeholder: 'true'
											},
											{
												displayName: 'Auto Approve Option',
												name: 'autoApproveOption',
												type: 'options',
												default: '',
												description: 'Approve added translations',
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
											}
										]
									}
								]
							}
						]
					},
					{
						name: 'workflowTemplateStepConfigMtPreTranslate',
						displayName: 'Workflow Template Step Config MT Pre Translate',
						values: [
							{
								displayName: 'Id',
								name: 'id',
								type: 'number',
								default: undefined,
								description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
								placeholder: '3',
								required: true
							},
							{
								displayName: 'Languages',
								name: 'languages',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Mt Id',
								name: 'mtId',
								type: 'options',
								default: '',
								description: 'MT Engine Identifier. Get via [List MTs](#operation/api.mts.getMany)',
								typeOptions: {
									loadOptionsMethod: 'getMTEngines'
								}
							}
						]
					},
					{
						name: 'workflowTemplateStepConfigAiPreTranslate',
						displayName: 'Workflow Template Step Config AI Pre Translate',
						values: [
							{
								displayName: 'Id',
								name: 'id',
								type: 'number',
								default: undefined,
								description: 'Workflow Template Step Identifier. Get via [Get Workflow Template](#operation/api.workflow-templates.get)',
								placeholder: '3',
								required: true
							},
							{
								displayName: 'Languages',
								name: 'languages',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Target Languages Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Prompt Id',
								name: 'promptId',
								type: 'options',
								default: '',
								description: 'Prompt Pre Translate Identifier. Get via [List Prompts](#operation/api.ai.prompts.getMany)',
								typeOptions: {
									loadOptionsMethod: 'getAiPrompts'
								}
							}
						]
					}
				]
			},
			{
				displayName: 'Vendor Id',
				name: 'vendorId',
				type: 'options',
				default: '',
				description: 'Specify Vendor Identifier, if no Vendor is assigned to Workflow step yet. Get via [List Vendors](#operation/api.vendors.getMany)\n\n__Note:__ Use only if Vendor is part of your Workflow Template\n\n__Note:__ Can\'t be used with `steps` in same request',
				typeOptions: {
					loadOptionsMethod: 'getVendors'
				}
			},
			{
				displayName: 'Mt Engine Id',
				name: 'mtEngineId',
				type: 'options',
				default: '',
				description: 'Specify Machine Translation engine Identifier, if no MT engine is assigned to Workflow step yet. Get via [List MTs](#operation/api.mts.getMany)\n\n__Note:__ Use only if MT is part of your Workflow Template\n\n__Note:__ Can\'t be used with `steps` in same request',
				typeOptions: {
					loadOptionsMethod: 'getMTEngines'
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
					'projectsAndGroups'
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
						name: '_propertyFileFormatSettings',
						displayName: 'Property file format settings',
						values: [
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Escape Quotes',
								name: 'escapeQuotes',
								type: 'options',
								default: '',
								description: 'Values available:\n - 0 - Do not escape single quote\n - 1 - Escape single quote by another single quote\n - 2 - Escape single quote by a backslash\n - 3 - Escape single quote by another single quote only in strings containing variables (`{0}`)',
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
									},
									{
										name: '3',
										value: 3
									}
								]
							},
							{
								displayName: 'Escape Special Characters',
								name: 'escapeSpecialCharacters',
								type: 'options',
								default: '',
								description: 'Defines whether any special characters (=, :, ! and #) should be escaped by backslash in exported translations. You can add escape_special_characters per-file option.\n\nAcceptable values are: 0, 1. Default is 0.\n - 0 - Do not escape special characters\n - 1 - Escape special characters by a backslash',
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
								]
							}
						]
					},
					{
						name: '_xmlFileFormatSettings',
						displayName: 'Xml file format settings',
						values: [
							{
								displayName: 'Translate Content',
								name: 'translateContent',
								type: 'boolean',
								default: true,
								description: 'Defines whether to translate texts placed inside the tags'
							},
							{
								displayName: 'Translate Attributes',
								name: 'translateAttributes',
								type: 'boolean',
								default: true,
								description: 'Defines whether to translate tags attributes'
							},
							{
								displayName: 'Translatable Elements',
								name: 'translatableElements',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'This is an array of strings, where each item is the XPaths to DOM element that should be imported.\n\nSupported XPath patterns:\n- `/path/to/node` — Absolute path to a specific node\n- `/path/to/attribute[@attr]` — Absolute path to an attribute\n- `//node` — All nodes with the specified name\n- `//[@attr]` — All elements with the specified attribute\n- `nodeone/nodetwo` — Relative path\n- `/nodeone//nodetwo` — Mixed absolute and descendant path\n- `//node[@attr]` — All nodes with the specified name and attribute',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
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
							},
							{
								displayName: 'Inline Tags',
								name: 'inlineTags',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify tags that should be considered inline',
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
												default: '',
												description: undefined
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
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_webXmlFileFormatSettings',
						displayName: 'WebXml file format settings',
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
							},
							{
								displayName: 'Inline Tags',
								name: 'inlineTags',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify tags that should be considered inline',
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
												default: '',
												description: undefined
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
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_htmlFileFormatSettings',
						displayName: 'Html file format settings',
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
							},
							{
								displayName: 'Inline Tags',
								name: 'inlineTags',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify tags that should be considered inline',
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
												default: '',
												description: undefined
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
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Excluded Elements',
								name: 'excludedElements',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify CSS selectors for elements that should not be imported',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							}
						]
					},
					{
						name: '_adocFileFormatSettings',
						displayName: 'Adoc file format settings',
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
							},
							{
								displayName: 'Exclude Include Directives',
								name: 'excludeIncludeDirectives',
								type: 'boolean',
								default: false,
								description: 'Skip Include Directives'
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_mdFileFormatSettings',
						displayName: 'Md file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n__Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Inline Tags',
								name: 'inlineTags',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify tags that should be considered inline',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Strong Marker',
								name: 'strongMarker',
								type: 'options',
								default: '',
								description: 'Marker to use for strong.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisk',
										value: 'asterisk'
									},
									{
										name: 'underscore',
										value: 'underscore'
									}
								]
							},
							{
								displayName: 'Emphasis Marker',
								name: 'emphasisMarker',
								type: 'options',
								default: '',
								description: 'Marker to use for emphasis.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisk',
										value: 'asterisk'
									},
									{
										name: 'underscore',
										value: 'underscore'
									}
								]
							},
							{
								displayName: 'Unordered List Bullet',
								name: 'unorderedListBullet',
								type: 'options',
								default: '',
								description: 'Marker to use for unordered list bullet.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisks',
										value: 'asterisks'
									},
									{
										name: 'plus',
										value: 'plus'
									},
									{
										name: 'dash',
										value: 'dash'
									}
								]
							},
							{
								displayName: 'Table Column Width',
								name: 'tableColumnWidth',
								type: 'options',
								default: '',
								description: 'Table formatting.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'consolidate',
										value: 'consolidate'
									},
									{
										name: 'evenly_distribute_cells',
										value: 'evenly_distribute_cells'
									}
								]
							},
							{
								displayName: 'Front Matter Quotes',
								name: 'frontMatterQuotes',
								type: 'options',
								default: '',
								description: 'Export front matter values in quotes.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'auto',
										value: 'auto'
									},
									{
										name: 'single',
										value: 'single'
									},
									{
										name: 'double',
										value: 'double'
									}
								]
							}
						]
					},
					{
						name: '_mdxV1FileFormatSettings',
						displayName: 'Mdx v1 file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n__Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								default: '',
								description: 'Values available:\n - \'mdx_v1\' — MDX (v1)\n * - \'mdx_v2\' - MDX (v2)',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'mdx_v1',
										value: 'mdx_v1'
									},
									{
										name: 'mdx_v2',
										value: 'mdx_v2'
									}
								]
							},
							{
								displayName: 'Excluded Front Matter Elements',
								name: 'excludedFrontMatterElements',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify elements that should not be imported',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Exclude Code Blocks',
								name: 'excludeCodeBlocks',
								type: 'boolean',
								default: false,
								description: 'Defines whether to import code blocks.'
							},
							{
								displayName: 'Strong Marker',
								name: 'strongMarker',
								type: 'options',
								default: '',
								description: 'Marker to use for strong.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisk',
										value: 'asterisk'
									},
									{
										name: 'underscore',
										value: 'underscore'
									}
								]
							},
							{
								displayName: 'Emphasis Marker',
								name: 'emphasisMarker',
								type: 'options',
								default: '',
								description: 'Marker to use for emphasis.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisk',
										value: 'asterisk'
									},
									{
										name: 'underscore',
										value: 'underscore'
									}
								]
							},
							{
								displayName: 'Unordered List Bullet',
								name: 'unorderedListBullet',
								type: 'options',
								default: '',
								description: 'Marker to use for unordered list bullet.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisks',
										value: 'asterisks'
									},
									{
										name: 'plus',
										value: 'plus'
									},
									{
										name: 'dash',
										value: 'dash'
									}
								]
							},
							{
								displayName: 'Table Column Width',
								name: 'tableColumnWidth',
								type: 'options',
								default: '',
								description: 'Table formatting.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'consolidate',
										value: 'consolidate'
									},
									{
										name: 'evenly_distribute_cells',
										value: 'evenly_distribute_cells'
									}
								]
							}
						]
					},
					{
						name: '_mdxV2FileFormatSettings',
						displayName: 'Mdx v2 file format settings',
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
								description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
								typeOptions: {
									loadOptionsMethod: 'getStorages'
								}
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Excluded Front Matter Elements',
								name: 'excludedFrontMatterElements',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify elements that should not be imported',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Exclude Code Blocks',
								name: 'excludeCodeBlocks',
								type: 'boolean',
								default: false,
								description: 'Defines whether to import code blocks.'
							},
							{
								displayName: 'Strong Marker',
								name: 'strongMarker',
								type: 'options',
								default: '',
								description: 'Marker to use for strong.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisk',
										value: 'asterisk'
									},
									{
										name: 'underscore',
										value: 'underscore'
									}
								]
							},
							{
								displayName: 'Emphasis Marker',
								name: 'emphasisMarker',
								type: 'options',
								default: '',
								description: 'Marker to use for emphasis.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisk',
										value: 'asterisk'
									},
									{
										name: 'underscore',
										value: 'underscore'
									}
								]
							},
							{
								displayName: 'Unordered List Bullet',
								name: 'unorderedListBullet',
								type: 'options',
								default: '',
								description: 'Marker to use for unordered list bullet.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'asterisks',
										value: 'asterisks'
									},
									{
										name: 'plus',
										value: 'plus'
									},
									{
										name: 'dash',
										value: 'dash'
									}
								]
							},
							{
								displayName: 'Table Column Width',
								name: 'tableColumnWidth',
								type: 'options',
								default: '',
								description: 'Table formatting.',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'consolidate',
										value: 'consolidate'
									},
									{
										name: 'evenly_distribute_cells',
										value: 'evenly_distribute_cells'
									}
								]
							}
						]
					},
					{
						name: '_fmMdFileFormatSettings',
						displayName: 'FmMd file format settings',
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_fmHtmlFileFormatSettings',
						displayName: 'FmHtml file format settings',
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
							},
							{
								displayName: 'Inline Tags',
								name: 'inlineTags',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify tags that should be considered inline',
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
												default: '',
												description: undefined
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
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Excluded Elements',
								name: 'excludedElements',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify CSS selectors for elements that should not be imported',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							},
							{
								displayName: 'Excluded Front Matter Elements',
								name: 'excludedFrontMatterElements',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true
								},
								default: {},
								description: 'Specify elements that should not be imported',
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
												default: '',
												description: undefined
											}
										]
									}
								]
							}
						]
					},
					{
						name: '_madcapFlsnpFileFormatSettings',
						displayName: 'MadcapFlsnp file format settings',
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_docxFileFormatSettings',
						displayName: 'Docx file format settings',
						values: [
							{
								displayName: 'Clean Tags Aggressively',
								name: 'cleanTagsAggressively',
								type: 'boolean',
								default: false,
								description: 'When checked, strips additional formatting tags related to text spacing.\n\n __Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.xlsx, *.xltx, *.xlsm, *.xltm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
							},
							{
								displayName: 'Translate Hidden Text',
								name: 'translateHiddenText',
								type: 'boolean',
								default: false,
								description: 'When checked, exposes hidden text for translation.\n\n __Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm'
							},
							{
								displayName: 'Translate Hyperlink Urls',
								name: 'translateHyperlinkUrls',
								type: 'boolean',
								default: false,
								description: 'When checked, exposes hidden hyperlinks for translation.\n\n __Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
							},
							{
								displayName: 'Translate Hidden Rows And Columns',
								name: 'translateHiddenRowsAndColumns',
								type: 'boolean',
								default: false,
								description: 'When checked, exposes hidden rows and columns for translation.\n\n __Note:__ Works only for files with the following extensions: *.xlsx, *.xltx, *.xlsm, *.xltm'
							},
							{
								displayName: 'Import Notes',
								name: 'importNotes',
								type: 'boolean',
								default: true,
								description: 'When checked, expose slide notes for translation.\n\n __Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
							},
							{
								displayName: 'Import Hidden Slides',
								name: 'importHiddenSlides',
								type: 'boolean',
								default: false,
								description: 'When checked, exposes hidden slides for translation.\n\n __Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
							},
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_idmlFileFormatSettings',
						displayName: 'Idml file format settings',
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_mifFileFormatSettings',
						displayName: 'Mif file format settings',
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_ditaFileFormatSettings',
						displayName: 'Dita file format settings',
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_mediaWikiFileFormatSettings',
						displayName: 'MediaWiki file format settings',
						values: [
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
						name: '_fjsFileFormatSettings',
						displayName: 'Fjs file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for FJS files when enabled.'
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_chromeFileFormatSettings',
						displayName: 'Chrome file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for Chrome files when enabled.'
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_reactIntlFileFormatSettings',
						displayName: 'React intl file format settings',
						values: [
							{
								displayName: 'Content Segmentation',
								name: 'contentSegmentation',
								type: 'boolean',
								default: true,
								description: 'Defines whether to split long texts into smaller text segments.\n\n __Important!__ This option disables the possibility to upload existing translations for React intl files when enabled.'
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_txtFileFormatSettings',
						displayName: 'Txt file format settings',
						values: [
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
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_javaScriptFileFormatSettings',
						displayName: 'JavaScript File Format Settings',
						values: [
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
							},
							{
								displayName: 'Export Quotes',
								name: 'exportQuotes',
								type: 'options',
								default: '',
								description: 'Acceptable values are: \'single\', \'double\'. Default is \'single\'.\n - \'single\' - Output will be enclosed in single quotes\n - \'double\' - Output will be enclosed in double quotes',
								options: [
									{
										name: '-',
										value: ''
									},
									{
										name: 'single',
										value: 'single'
									},
									{
										name: 'double',
										value: 'double'
									}
								]
							}
						]
					},
					{
						name: '_stringCatalogFileFormatSettings',
						displayName: 'String Catalog file format settings',
						values: [
							{
								displayName: 'Import Key As Source',
								name: 'importKeyAsSource',
								type: 'boolean',
								default: true,
								description: 'Determines whether to import the key as source string if it does not exist.',
								placeholder: 'true'
							},
							{
								displayName: 'Import Translations',
								name: 'importTranslations',
								type: 'boolean',
								default: false,
								description: 'Defines whether to import translations from the file'
							},
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
							}
						]
					},
					{
						name: '_otherFileFormatSettings',
						displayName: 'Other file format settings',
						values: [
							{
								displayName: 'Export Pattern',
								name: 'exportPattern',
								type: 'string',
								default: '',
								description: 'File format export pattern. Defines file name and path in resulting translations bundle\n\n __Note:__ Can\'t contain `: * ? " < > |` symbols'
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
					'projectsAndGroups'
				],
				operation: [
					'api.groups.getMany'
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
					'projectsAndGroups'
				],
				operation: [
					'api.projects.getMany'
				]
			}
		}
	}
];
