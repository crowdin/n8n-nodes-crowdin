// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, extractBatchItems } from '../../../utils/preSend';

export const screenshotsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				]
			}
		},
		options: [
			{
				name: 'List Screenshots',
				value: 'api.projects.screenshots.getMany',
				action: 'List Screenshots',
				description: '**Required scopes:** `project.screenshot` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots'
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
				name: 'Add Screenshot',
				value: 'api.projects.screenshots.post',
				action: 'Add Screenshot',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots'
					}
				}
			},
			{
				name: 'Get Screenshot',
				value: 'api.projects.screenshots.get',
				action: 'Get Screenshot',
				description: '**Required scopes:** `project.screenshot` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}'
					}
				}
			},
			{
				name: 'Update Screenshot',
				value: 'api.projects.screenshots.put',
				action: 'Update Screenshot',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}'
					}
				}
			},
			{
				name: 'Delete Screenshot',
				value: 'api.projects.screenshots.delete',
				action: 'Delete Screenshot',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}'
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
				name: 'Edit Screenshot',
				value: 'api.projects.screenshots.patch',
				action: 'Edit Screenshot',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Tags',
				value: 'api.projects.screenshots.tags.getMany',
				action: 'List Tags',
				description: '**Required scopes:** `project.screenshot` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags'
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
				name: 'Replace Tags (Auto Tag)',
				value: 'api.projects.screenshots.tags.putMany',
				action: 'Replace Tags (Auto Tag)',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags'
					}
				}
			},
			{
				name: 'Add Tag',
				value: 'api.projects.screenshots.tags.post',
				action: 'Add Tag',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags'
					}
				}
			},
			{
				name: 'Clear Tags',
				value: 'api.projects.screenshots.tags.deleteMany',
				action: 'Clear Tags',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags'
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
				name: 'Get Tag',
				value: 'api.projects.screenshots.tags.get',
				action: 'Get Tag',
				description: '**Required scopes:** `project.screenshot` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags/{{$parameter["tagId"]}}'
					}
				}
			},
			{
				name: 'Delete Tag',
				value: 'api.projects.screenshots.tags.delete',
				action: 'Delete Tag',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags/{{$parameter["tagId"]}}'
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
				name: 'Edit Tag',
				value: 'api.projects.screenshots.tags.patch',
				action: 'Edit Tag',
				description: '**Required scopes:** `project.screenshot` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/screenshots/{{$parameter["screenshotId"]}}/tags/{{$parameter["tagId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.projects.screenshots.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/screenshots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/screenshots',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/screenshots/{screenshotId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /projects/{projectId}/screenshots/{screenshotId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.put'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/screenshots/{screenshotId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/screenshots/{screenshotId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/screenshots/{screenshotId}/tags',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.getMany'
				]
			}
		}
	},
	{
		displayName: 'PUT /projects/{projectId}/screenshots/{screenshotId}/tags',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.putMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/screenshots/{screenshotId}/tags',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.post'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/screenshots/{screenshotId}/tags',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.deleteMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/screenshots/{screenshotId}/tags/{tagId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/screenshots/{screenshotId}/tags/{tagId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/screenshots/{screenshotId}/tags/{tagId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.patch'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Search',
		name: 'search',
		description: 'Search screenshots by name, tagged strings or file names that include screenshots.',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'search',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,tagsCount'
	},
	{
		displayName: 'String Ids',
		name: 'stringIds',
		description: 'String Identifiers. Get via [List Strings](#operation/api.projects.strings.getMany).\n\n__Note:__ Can\'t be used with `stringId` in the same request.',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
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
		description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\nStorage file must be image in one of the following formats:\n * \'jpeg\'\n * \'jpg\'\n * \'png\'\n * \'gif\'',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Screenshot name',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
				]
			}
		},
		placeholder: 'translate_with_siri.jpg'
	},
	{
		displayName: 'Auto Tag',
		name: 'autoTag',
		type: 'boolean',
		default: true,
		description: 'Automatically tags screenshot',
		routing: {
			send: {
				property: 'autoTag',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
				]
			}
		}
	},
	{
		displayName: 'File Id',
		name: 'fileId',
		type: 'options',
		default: '',
		description: 'File Identifier. Get via [List Files](#operation/api.projects.files.getMany)\n\n  __Note:__ Must be used together with `autoTag`. Can\'t be used with `directoryId` or `branchId` in same request',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
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
		displayName: 'Branch Id',
		name: 'branchId',
		type: 'options',
		default: '',
		description: 'Branch identifier. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n __Note:__ Must be used together with `autoTag`. Can\'t be used with `fileId` or `directoryId` in the same request',
		routing: {
			send: {
				property: 'branchId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
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
		displayName: 'Directory Id',
		name: 'directoryId',
		type: 'options',
		default: '',
		description: 'Directory Identifier. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n __Note:__ Must be used together with `autoTag`. Can\'t be used with fileId or branchId in same request',
		routing: {
			send: {
				property: 'directoryId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.post'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getStorages'
		}
	},
	{
		displayName: 'Name',
		required: true,
		name: 'name',
		type: 'string',
		default: '',
		description: 'Screenshot name',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.put'
				]
			}
		}
	},
	{
		displayName: 'Use Previous Tags',
		name: 'usePreviousTags',
		type: 'boolean',
		default: true,
		routing: {
			send: {
				property: 'usePreviousTags',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.put'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.putMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.putMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.putMany'
				]
			}
		},
		options: [
			{
				displayName: 'Replace Tags',
				name: '_replaceTags',
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
										displayName: 'Tag position',
										name: 'position',
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
														displayName: 'X',
														name: 'x',
														type: 'number',
														default: 0,
														description: undefined
													},
													{
														displayName: 'Y',
														name: 'y',
														type: 'number',
														default: 0,
														description: undefined
													},
													{
														displayName: 'Width',
														name: 'width',
														type: 'number',
														default: 0,
														description: undefined
													},
													{
														displayName: 'Height',
														name: 'height',
														type: 'number',
														default: 0,
														description: undefined
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
				displayName: 'Auto Tag',
				name: '_autoTag',
				values: [
					{
						displayName: 'Auto Tag',
						name: 'autoTag',
						type: 'boolean',
						default: false,
						description: 'Automatically tags screenshot and replaces old tags with new ones--',
						required: true
					},
					{
						displayName: 'File Id',
						name: 'fileId',
						type: 'options',
						default: '',
						description: 'File Identifier. Get via [List Files](#operation/api.projects.files.getMany)\n\n__Note:__ Can\'t be used with `directoryId` or `branchId` in same request',
						typeOptions: {
							loadOptionsMethod: 'getProjectFiles',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Branch Id',
						name: 'branchId',
						type: 'options',
						default: '',
						description: 'Branch identifier. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `fileId` or `directoryId` in the same request',
						typeOptions: {
							loadOptionsMethod: 'getBranches',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
					},
					{
						displayName: 'Directory Id',
						name: 'directoryId',
						type: 'options',
						default: '',
						description: 'Directory Identifier. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `fileId` or `branchId` in same request',
						typeOptions: {
							loadOptionsMethod: 'getProjectDirectories',
							loadOptionsDependsOn: [
								'projectId'
							]
						}
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
			loadOptionsDependsOn: [
				'projectId'
			]
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.post'
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
						displayName: 'Tag position',
						name: 'position',
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
										displayName: 'X',
										name: 'x',
										type: 'number',
										default: 0,
										description: undefined
									},
									{
										displayName: 'Y',
										name: 'y',
										type: 'number',
										default: 0,
										description: undefined
									},
									{
										displayName: 'Width',
										name: 'width',
										type: 'number',
										default: 0,
										description: undefined
									},
									{
										displayName: 'Height',
										name: 'height',
										type: 'number',
										default: 0,
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.deleteMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Tag Id',
		name: 'tagId',
		required: true,
		description: 'Tag Identifier. Get via [List Tags](#operation/api.projects.screenshots.tags.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getScreenshotTags',
			loadOptionsDependsOn: [
				'projectId',
				'screenshotId'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Tag Id',
		name: 'tagId',
		required: true,
		description: 'Tag Identifier. Get via [List Tags](#operation/api.projects.screenshots.tags.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getScreenshotTags',
			loadOptionsDependsOn: [
				'projectId',
				'screenshotId'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Screenshot Id',
		name: 'screenshotId',
		required: true,
		description: 'Screenshot Identifier. Get via [List Screenshots](#operation/api.projects.screenshots.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectScreenshots',
			loadOptionsDependsOn: [
				'projectId'
			]
		}
	},
	{
		displayName: 'Tag Id',
		name: 'tagId',
		required: true,
		description: 'Tag Identifier. Get via [List Tags](#operation/api.projects.screenshots.tags.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getScreenshotTags',
			loadOptionsDependsOn: [
				'projectId',
				'screenshotId'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Screenshot name',
				placeholder: 'translate_with_siri.jpg'
			},
			{
				displayName: 'Label Ids',
				name: 'labelIds',
				type: 'multiOptions',
				default: [],
				description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getProjectLabelsMulti',
					loadOptionsDependsOn: [
						'projectId'
					]
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.patch'
				]
			}
		},
		options: [
			{
				displayName: 'String Id',
				name: 'stringId',
				type: 'options',
				default: '',
				description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
				typeOptions: {
					loadOptionsMethod: 'getProjectStrings',
					loadOptionsDependsOn: [
						'projectId'
					]
				}
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'fixedCollection',
				default: {},
				description: 'Value for /position',
				placeholder: 'Add Field',
				options: [
					{
						name: 'fields',
						displayName: 'Fields',
						values: [
							{
								displayName: 'X',
								name: 'x',
								type: 'number',
								default: 0,
								description: undefined
							},
							{
								displayName: 'Y',
								name: 'y',
								type: 'number',
								default: 0,
								description: undefined
							},
							{
								displayName: 'Width',
								name: 'width',
								type: 'number',
								default: 0,
								description: undefined
							},
							{
								displayName: 'Height',
								name: 'height',
								type: 'number',
								default: 0,
								description: undefined
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.getMany'
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
					'screenshots'
				],
				operation: [
					'api.projects.screenshots.tags.getMany'
				]
			}
		}
	}
];
