// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch, normalizeRootBody, normalizeFieldBody } from '../../../utils/preSend';

export const sourceFilesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				]
			}
		},
		options: [
			{
				name: 'List Branches',
				value: 'api.projects.branches.getMany',
				action: 'List Branches',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches'
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
				name: 'Add Branch',
				value: 'api.projects.branches.post',
				action: 'Add Branch',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/branches'
					}
				}
			},
			{
				name: 'Get Branch',
				value: 'api.projects.branches.get',
				action: 'Get Branch',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}'
					}
				}
			},
			{
				name: 'Delete Branch',
				value: 'api.projects.branches.delete',
				action: 'Delete Branch',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}'
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
				name: 'Edit Branch',
				value: 'api.projects.branches.patch',
				action: 'Edit Branch',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Directories',
				value: 'api.projects.directories.getMany',
				action: 'List Directories',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/directories'
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
				name: 'Add Directory',
				value: 'api.projects.directories.post',
				action: 'Add Directory',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/directories'
					}
				}
			},
			{
				name: 'Get Directory',
				value: 'api.projects.directories.get',
				action: 'Get Directory',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/directories/{{$parameter["directoryId"]}}'
					}
				}
			},
			{
				name: 'Delete Directory',
				value: 'api.projects.directories.delete',
				action: 'Delete Directory',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/directories/{{$parameter["directoryId"]}}'
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
				name: 'Edit Directory',
				value: 'api.projects.directories.patch',
				action: 'Edit Directory',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/directories/{{$parameter["directoryId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'List Files',
				value: 'api.projects.files.getMany',
				action: 'List Files',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files'
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
				name: 'Add File',
				value: 'api.projects.files.post',
				action: 'Add File',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/files'
					}
				}
			},
			{
				name: 'Get File',
				value: 'api.projects.files.get',
				action: 'Get File',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}'
					}
				}
			},
			{
				name: 'Update or Restore File',
				value: 'api.projects.files.put',
				action: 'Update or Restore File',
				description: '**Required scopes:** `project.source.file` (Read and Write).\n\nUpdate your current file with a new one or restore it to one of the previous revisions',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}'
					}
				}
			},
			{
				name: 'Delete File',
				value: 'api.projects.files.delete',
				action: 'Delete File',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}'
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
				name: 'Edit File',
				value: 'api.projects.files.patch',
				action: 'Edit File',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
			{
				name: 'Download File Preview',
				value: 'api.projects.files.preview.get',
				action: 'Download File Preview',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/preview'
					}
				}
			},
			{
				name: 'Download File',
				value: 'api.projects.files.download.get',
				action: 'Download File',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/download'
					}
				}
			},
			{
				name: 'List Asset References',
				value: 'api.projects.files.references.getMany',
				action: 'List Asset References',
				description: '**Required scopes:** `project.source.file` (Read only).\n\nList all reference files for an asset',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/references'
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
				name: 'Add Asset Reference',
				value: 'api.projects.files.references.post',
				action: 'Add Asset Reference',
				description: '**Required scopes:** `project.source.file` (Read and Write).\n\nUpload a reference file for an asset',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/references'
					}
				}
			},
			{
				name: 'Get Asset Reference',
				value: 'api.projects.files.references.get',
				action: 'Get Asset Reference',
				description: '**Required scopes:** `project.source.file` (Read only).\n\nGet information about a specific asset reference',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/references/{{$parameter["referenceId"]}}'
					}
				}
			},
			{
				name: 'Delete Asset Reference',
				value: 'api.projects.files.references.delete',
				action: 'Delete Asset Reference',
				description: '**Required scopes:** `project.source.file` (Read and Write).\n\nDelete a reference file for an asset',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/references/{{$parameter["referenceId"]}}'
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
				name: 'List File Revisions',
				value: 'api.projects.files.revisions.getMany',
				action: 'List File Revisions',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/revisions'
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
				name: 'Get File Revision',
				value: 'api.projects.files.revisions.get',
				action: 'Get File Revision',
				description: '**Required scopes:** `project.source.file` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/files/{{$parameter["fileId"]}}/revisions/{{$parameter["revisionId"]}}'
					}
				}
			}
		],
		default: 'api.projects.branches.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/branches',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/branches',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/branches/{branchId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/branches/{branchId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/directories',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/directories',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/directories/{directoryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/directories/{directoryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/directories/{directoryId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/files',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.get'
				]
			}
		}
	},
	{
		displayName: 'PUT /projects/{projectId}/files/{fileId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.put'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/files/{fileId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.delete'
				]
			}
		}
	},
	{
		displayName: 'PATCH /projects/{projectId}/files/{fileId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.patch'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/preview',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.preview.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.download.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/references',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.getMany'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/files/{fileId}/references',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/references/{referenceId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.get'
				]
			}
		}
	},
	{
		displayName: 'DELETE /projects/{projectId}/files/{fileId}/references/{referenceId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.delete'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/revisions',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.getMany'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/files/{fileId}/revisions/{revisionId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,priority'
	},
	{
		displayName: 'Name',
		name: 'name',
		description: 'Filter branch by name',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'name',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.post'
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
		description: 'Branch name\n\n__Note:__ Can\'t contain `\\ / : * ? " < > |` symbols',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.post'
				]
			}
		},
		placeholder: 'develop-master'
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'Use to provide more details for translators. Title is available in UI only',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.post'
				]
			}
		},
		placeholder: 'Master branch'
	},
	{
		displayName: 'Export Pattern',
		name: 'exportPattern',
		type: 'string',
		default: '',
		description: 'Branch export pattern. Defines branch name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.post'
				]
			}
		},
		placeholder: '%three_letters_code%'
	},
	{
		displayName: 'Priority',
		name: 'priority',
		type: 'options',
		default: '',
		description: 'Defines priority level for each branch',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.post'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.get'
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
		required: true,
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.get'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.delete'
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
		required: true,
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.delete'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.patch'
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
		required: true,
		description: 'Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.patch'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,priority'
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		description: 'Filter directories by `branchId`\n\n__Note:__ Can\'t be used with `directoryId` in the same request.\n\nTo list the directories from all the nested levels within the branch, ensure to use the `recursion` parameter with the `branchId` parameter.',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
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
		description: 'Filter directories by `directoryId`\n\n__Note:__ Can\'t be used with `branchId` in the same request.\n\nTo list the directories from all the nested levels within the directory, ensure to use the `recursion` parameter with the `directoryId` parameter.',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'directoryId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
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
		displayName: 'Filter',
		name: 'filter',
		description: 'Filter directories by `name`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'filter',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
				]
			}
		}
	},
	{
		displayName: 'Recursion',
		name: 'recursion',
		description: 'Use to list directories recursively\n\n__Note:__ Works only when `directoryId` or `branchId` parameter is specified',
		default: '',
		type: 'options',
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
				type: 'query',
				property: 'recursion',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
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
		description: 'Directory name\n\n__Note:__ Can\'t contain `\\ / : * ? " < > |` symbols',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
				]
			}
		},
		placeholder: 'main'
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		type: 'options',
		default: '',
		description: 'Branch identifier. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `directoryId` in same request',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
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
		description: 'Parent Directory Identifier. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `branchId` in same request',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'Use to provide more details for translators. Title is available in UI only',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
				]
			}
		},
		placeholder: '<Description materials>'
	},
	{
		displayName: 'Export Pattern',
		name: 'exportPattern',
		type: 'string',
		default: '',
		description: 'Directory export pattern. Defines directory name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
				]
			}
		},
		placeholder: '/localization/%locale%/%file_name%'
	},
	{
		displayName: 'Priority',
		name: 'priority',
		type: 'options',
		default: '',
		description: 'Defines priority level for each branch',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.post'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.get'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.delete'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.delete'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.patch'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.patch'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,priority'
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		description: 'List branch files\n\n__Note:__ Can\'t be used with `directoryId` in the same request.\n\nTo list the files from all the nested levels within the branch, ensure to use the `recursion` parameter with the `branchId` parameter.',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
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
		description: 'List directory files\n\n__Note:__ Can\'t be used with `branchId` in the same request.\n\nTo list the files from all the nested levels within the directory, ensure to use the `recursion` parameter with the `directoryId` parameter.',
		default: '',
		type: 'options',
		routing: {
			send: {
				type: 'query',
				property: 'directoryId',
				value: '={{ typeof $value === \'number\' ? $value : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
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
		displayName: 'Filter',
		name: 'filter',
		description: 'Filter files by `name`',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'filter',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
				]
			}
		}
	},
	{
		displayName: 'Recursion',
		name: 'recursion',
		description: 'Use to list files recursively\n\n__Note:__ Works only when `directoryId` or `branchId` parameter is specified',
		default: '',
		type: 'options',
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
				type: 'query',
				property: 'recursion',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
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
		description: 'File name\n\n__Note:__ Can\'t contain `\\ / : * ? " < > |` symbols.\n\n  `ZIP` files are not allowed.',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		placeholder: 'umbrella_app.xliff'
	},
	{
		displayName: 'Branch Id',
		name: 'branchId',
		type: 'options',
		default: '',
		description: 'Branch Identifier — defines branch to which file will be added. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `directoryId` in same request',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
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
		description: 'Directory Identifier — defines directory to which file will be added. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `branchId` in same request',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'Use to provide more details for translators. Title is available in UI only',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		placeholder: 'source_app_info'
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'string',
		default: '',
		description: 'Use to provide context about whole file',
		routing: {
			send: {
				property: 'context',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		placeholder: 'Additional context valuable for translators'
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'Values available:\n- empty value or \'auto\' — Try to detect file type by extension or MIME type\n- \'android\' — Android (*.xml)\n- \'macosx\' — Mac OS X / iOS (*.strings)\n- \'resx\' — .NET, Windows Phone (*.resx)\n- \'properties\' — Java (*.properties)\n- \'gettext\' — GNU GetText (*.po, *.pot)\n- \'yaml\' — Ruby On Rails (*.yaml, *.yml)\n- \'php\' — Hypertext Preprocessor (*.php)\n- \'json\' — Generic JSON (*.json)\n- \'xml\' — Generic XML (*.xml)\n- \'ini\' — Generic INI (*.ini)\n- \'rc\' — Windows Resources (*.rc)\n- \'resw\' — Windows 8 Metro (*.resw)\n- \'resjson\' — Windows 8 Metro (*.resjson)\n- \'qtts\' — Nokia Qt (*.ts)\n- \'joomla\' — Joomla localizable resources (*.ini)\n- \'chrome\' — Google Chrome Extension (*.json)\n- \'dtd\' — Mozilla DTD (*.dtd)\n- \'dklang\' — Delphi DKLang (*.dklang)\n- \'flex\' — Flex (*.properties)\n- \'nsh\' — NSIS Installer Resources (*.nsh)\n- \'wxl\' — WiX Installer (*.wxl)\n- \'xliff\' — XLIFF (*.xliff, *.xlf)\n- \'xliff_two\' — XLIFF 2.0 (*.xliff, *.xlf)\n- \'html\' — HTML (*.html, *.htm, *.xhtml, *.xhtm, *.xht, *.hbs, *.liquid)\n- \'haml\' — Haml (*.haml)\n- \'txt\' — Plain Text (*.txt)\n- \'csv\' — Comma Separated Values (*.csv)\n- \'md\' — Markdown (*.md, *.text, *.markdown...)\n- \'flsnp\' — MadCap Flare (*.flnsp, .flpgpl .fltoc)\n- \'fm_html\' — Jekyll HTML (*.html)\n- \'fm_md\' — Jekyll Markdown (*.md)\n- \'mediawiki\' — MediaWiki (*.wiki, *.wikitext, *.mediawiki)\n- \'docx\' — Microsoft Office, OpenOffice.org Documents, Adobe InDesign, Adobe FrameMaker(*.docx, *.dotx, *.docm, *.dotm, *.xlsx, *.xltx, *.xlsm, *.xltm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm, *.odt, *.ods, *.odg, *.odp, *.imdl, *.mif)\n- \'xlsx\' — Microsoft Excel (*.xlsx)\n- \'sbv\' — Youtube .sbv (*.sbv)\n- \'properties_play\' — Play Framework\n- \'properties_xml\' — Java Application (*.xml)\n- \'maxthon\' — Maxthon Browser (*.ini)\n- \'go_json\' — Go (*.gotext.json)\n- \'dita\' — DITA Document (*.dita, *.ditamap)\n- \'mif\' — Adobe FrameMaker (*.mif)\n- \'idml\' — Adobe InDesign (*.idml)\n- \'stringsdict\' — iOS (*.stringsdict)\n- \'plist\' — Mac OS property list (*.plist)\n- \'vtt\' — Video Subtitling and WebVTT (*.vtt)\n- \'vdf\' — Steamworks Localization Valve Data File (*.vdf)\n- \'srt\' — SubRip .srt (*.srt)\n- \'stf\' — Salesforce (*.stf)\n- \'toml\' — Toml (*.toml)\n- \'contentful_rt\' — Contentful (*.json)\n- \'svg\' — SVG (*.svg)\n- \'js\' — JavaScript (*.js)\n- \'coffee\' — CoffeeScript (*.coffee)\n- \'nestjs_i18n\' - NestJS i18n\n- \'loc\' — LOC (*.loc)\n\n__Note__: Use `docx` type to import each cell as a separate source string for XLSX file',
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
				name: 'android',
				value: 'android'
			},
			{
				name: 'macosx',
				value: 'macosx'
			},
			{
				name: 'resx',
				value: 'resx'
			},
			{
				name: 'properties',
				value: 'properties'
			},
			{
				name: 'gettext',
				value: 'gettext'
			},
			{
				name: 'yaml',
				value: 'yaml'
			},
			{
				name: 'php',
				value: 'php'
			},
			{
				name: 'json',
				value: 'json'
			},
			{
				name: 'xml',
				value: 'xml'
			},
			{
				name: 'ini',
				value: 'ini'
			},
			{
				name: 'rc',
				value: 'rc'
			},
			{
				name: 'resw',
				value: 'resw'
			},
			{
				name: 'resjson',
				value: 'resjson'
			},
			{
				name: 'qtts',
				value: 'qtts'
			},
			{
				name: 'joomla',
				value: 'joomla'
			},
			{
				name: 'chrome',
				value: 'chrome'
			},
			{
				name: 'dtd',
				value: 'dtd'
			},
			{
				name: 'dklang',
				value: 'dklang'
			},
			{
				name: 'flex',
				value: 'flex'
			},
			{
				name: 'nsh',
				value: 'nsh'
			},
			{
				name: 'wxl',
				value: 'wxl'
			},
			{
				name: 'xliff',
				value: 'xliff'
			},
			{
				name: 'xliff_two',
				value: 'xliff_two'
			},
			{
				name: 'html',
				value: 'html'
			},
			{
				name: 'haml',
				value: 'haml'
			},
			{
				name: 'txt',
				value: 'txt'
			},
			{
				name: 'csv',
				value: 'csv'
			},
			{
				name: 'md',
				value: 'md'
			},
			{
				name: 'mdx_v1',
				value: 'mdx_v1'
			},
			{
				name: 'mdx_v2',
				value: 'mdx_v2'
			},
			{
				name: 'flsnp',
				value: 'flsnp'
			},
			{
				name: 'fm_html',
				value: 'fm_html'
			},
			{
				name: 'fm_md',
				value: 'fm_md'
			},
			{
				name: 'mediawiki',
				value: 'mediawiki'
			},
			{
				name: 'docx',
				value: 'docx'
			},
			{
				name: 'xlsx',
				value: 'xlsx'
			},
			{
				name: 'sbv',
				value: 'sbv'
			},
			{
				name: 'properties_play',
				value: 'properties_play'
			},
			{
				name: 'properties_xml',
				value: 'properties_xml'
			},
			{
				name: 'maxthon',
				value: 'maxthon'
			},
			{
				name: 'go_json',
				value: 'go_json'
			},
			{
				name: 'dita',
				value: 'dita'
			},
			{
				name: 'idml',
				value: 'idml'
			},
			{
				name: 'mif',
				value: 'mif'
			},
			{
				name: 'stringsdict',
				value: 'stringsdict'
			},
			{
				name: 'plist',
				value: 'plist'
			},
			{
				name: 'vtt',
				value: 'vtt'
			},
			{
				name: 'vdf',
				value: 'vdf'
			},
			{
				name: 'srt',
				value: 'srt'
			},
			{
				name: 'stf',
				value: 'stf'
			},
			{
				name: 'toml',
				value: 'toml'
			},
			{
				name: 'contentful_rt',
				value: 'contentful_rt'
			},
			{
				name: 'svg',
				value: 'svg'
			},
			{
				name: 'js',
				value: 'js'
			},
			{
				name: 'coffee',
				value: 'coffee'
			},
			{
				name: 'ts',
				value: 'ts'
			},
			{
				name: 'i18next_json',
				value: 'i18next_json'
			},
			{
				name: 'xaml',
				value: 'xaml'
			},
			{
				name: 'arb',
				value: 'arb'
			},
			{
				name: 'adoc',
				value: 'adoc'
			},
			{
				name: 'fbt',
				value: 'fbt'
			},
			{
				name: 'webxml',
				value: 'webxml'
			},
			{
				name: 'nestjs_i18n',
				value: 'nestjs_i18n'
			},
			{
				name: 'loc',
				value: 'loc'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		}
	},
	{
		displayName: 'Parser Version',
		name: 'parserVersion',
		type: 'number',
		default: 0,
		description: 'Using latest parser version by default.\n\n__Note:__ Must be used together with `type`',
		routing: {
			send: {
				property: 'parserVersion',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value !== 0 ? $value : undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		placeholder: '1'
	},
	{
		displayName: 'Import Options',
		name: 'importOptions',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		options: [
			{
				displayName: 'Spreadsheet File Import Options',
				name: '_spreadsheetFileImportOptions',
				values: [
					{
						displayName: 'First Line Contains Header',
						name: 'firstLineContainsHeader',
						type: 'boolean',
						default: false,
						description: 'Defines whether the file includes a first-row header that should not be imported',
						placeholder: 'false'
					},
					{
						displayName: 'Import Hidden Sheets',
						name: 'importHiddenSheets',
						type: 'boolean',
						default: true,
						description: 'Defines whether hidden sheets that should be imported',
						placeholder: 'false'
					},
					{
						displayName: 'Import Hidden Rows',
						name: 'importHiddenRows',
						type: 'boolean',
						default: true,
						description: 'Defines whether hidden rows that should be imported',
						placeholder: 'false'
					},
					{
						displayName: 'Import Eq Suggestions',
						name: 'importEqSuggestions',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import translations identical to sources',
						placeholder: 'true'
					},
					{
						displayName: 'Auto Approve Imported',
						name: 'autoApproveImported',
						type: 'boolean',
						default: false,
						description: 'Defines whether to auto-approve imported translations',
						placeholder: 'true'
					},
					{
						displayName: 'Translate Hidden',
						name: 'translateHidden',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import translations for hidden strings',
						placeholder: 'false'
					},
					{
						displayName: 'Add To Tm',
						name: 'addToTm',
						type: 'boolean',
						default: true,
						description: 'Defines whether to add imported translations to TM',
						placeholder: 'true'
					},
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments.\n\n  __Important!__ This option disables the possibility to upload existing translations for Spreadsheet files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					},
					{
						displayName: 'Import Translations',
						name: 'importTranslations',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import translations from the file',
						placeholder: 'true'
					},
					{
						displayName: 'Spreadsheet File Import Schema',
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
										displayName: 'Source Phrase',
										name: 'sourcePhrase',
										type: 'number',
										default: 0,
										description: 'Defines source phrase column number'
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
										displayName: 'Context',
										name: 'context',
										type: 'number',
										default: 0,
										description: 'Defines context column number'
									},
									{
										displayName: 'Max Length',
										name: 'maxLength',
										type: 'number',
										default: 0,
										description: 'Defines max length column number'
									},
									{
										displayName: 'Translatable',
										name: 'translatable',
										type: 'number',
										default: 0,
										description: 'Defines visible status `yes` as show and `no` as hidden'
									},
									{
										displayName: 'Labels',
										name: 'labels',
										type: 'number',
										default: 0,
										description: 'Defines labels column number'
									}
								]
							}
						]
					}
				]
			},
			{
				displayName: 'Xml File Import Options',
				name: '_xmlFileImportOptions',
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
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n  __Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
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
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'WebXml File Import Options',
				name: '_webXmlFileImportOptions',
				values: [
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
						displayName: 'Hide Attribute Values',
						name: 'hideAttributeValues',
						type: 'boolean',
						default: false,
						description: 'HTML attributes (e.g., src, href, data) will be imported as hidden strings.'
					},
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n   Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Docx File Import Options',
				name: '_docxFileImportOptions',
				values: [
					{
						displayName: 'Clean Tags Aggressively',
						name: 'cleanTagsAggressively',
						type: 'boolean',
						default: false,
						description: 'When checked, strips additional formatting tags related to text spacing.\n\n__Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.xlsx, *.xltx, *.xlsm, *.xltm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Translate Hidden Text',
						name: 'translateHiddenText',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden text for translation.\n\n__Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm'
					},
					{
						displayName: 'Translate Hyperlink Urls',
						name: 'translateHyperlinkUrls',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden hyperlinks for translation.\n\n__Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Translate Hidden Rows And Columns',
						name: 'translateHiddenRowsAndColumns',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden rows and columns for translation.\n\n__Note:__ Works only for files with the following extensions: *.xlsx, *.xltx, *.xlsm, *.xltm'
					},
					{
						displayName: 'Import Notes',
						name: 'importNotes',
						type: 'boolean',
						default: true,
						description: 'When checked, expose slide notes for translation.\n\n__Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Import Hidden Slides',
						name: 'importHiddenSlides',
						type: 'boolean',
						default: false,
						description: 'When checked, exposes hidden slides for translation.\n\n__Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
					},
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.\n\n  __Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Html File Import Options',
				name: '_htmlFileImportOptions',
				values: [
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
						displayName: 'Hide Attribute Values',
						name: 'hideAttributeValues',
						type: 'boolean',
						default: false,
						description: 'HTML attributes (e.g., src, href, data) will be imported as hidden strings.'
					},
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Html with Front Matter File Import Options',
				name: '_htmlWithFrontMatterFileImportOptions',
				values: [
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
						displayName: 'Hide Attribute Values',
						name: 'hideAttributeValues',
						type: 'boolean',
						default: false,
						description: 'HTML attributes (e.g., src, href, data) will be imported as hidden strings.'
					},
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Mdx v1 File Import Options',
				name: '_mdxV1FileImportOptions',
				values: [
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
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Mdx v2 File Import Options',
				name: '_mdxV2FileImportOptions',
				values: [
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
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'Md File Import Options',
				name: '_mdFileImportOptions',
				values: [
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
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: true,
						description: 'Defines whether to split long texts into smaller text segments.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n   Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					}
				]
			},
			{
				displayName: 'StringCatalog File Import Options',
				name: '_stringCatalogFileImportOptions',
				values: [
					{
						displayName: 'Import Key As Source',
						name: 'importKeyAsSource',
						type: 'boolean',
						default: true,
						description: 'Determines whether to import the key as source string if it does not exist.'
					},
					{
						displayName: 'Import Translations',
						name: 'importTranslations',
						type: 'boolean',
						default: false,
						description: 'Defines whether to import translations from the file'
					}
				]
			},
			{
				displayName: 'Adoc File Import Options',
				name: '_adocFileImportOptions',
				values: [
					{
						displayName: 'Exclude Include Directives',
						name: 'excludeIncludeDirectives',
						type: 'boolean',
						default: false,
						description: 'Skip Include Directives'
					}
				]
			},
			{
				displayName: 'Other Files Import Options',
				name: '_otherFilesImportOptions',
				values: [
					{
						displayName: 'Content Segmentation',
						name: 'contentSegmentation',
						type: 'boolean',
						default: false,
						description: 'Defines whether to split long texts into smaller text segments. Only for __xml__, __flsnp__, __docx__, __mif__, __idml__, __dita__, __android8__, __xliff13__, __xliff_two4__ files.\n\n__Note:__ When Content segmentation is enabled, the translation upload is handled by an experimental machine learning technology. To achieve the best results, we recommend uploading translation files with the same or as close as possible file structure as in source files.'
					},
					{
						displayName: 'Srx Storage Id',
						name: 'srxStorageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
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
				property: 'importOptions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Export Options',
		name: 'exportOptions',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		options: [
			{
				displayName: 'General File Export Options',
				name: '_generalFileExportOptions',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
					}
				]
			},
			{
				displayName: 'Property File Export Options',
				name: '_propertyFileExportOptions',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
					},
					{
						displayName: 'Escape Quotes',
						name: 'escapeQuotes',
						type: 'options',
						default: '',
						description: 'Values available:\n- 0 - Do not escape single quote\n- 1 - Escape single quote by another single quote\n- 2 - Escape single quote by a backslash\n- 3 - Escape single quote by another single quote only in strings containing variables (`{0}`)',
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
						description: 'Defines whether any special characters (=, :, ! and #) should be escaped by backslash in exported translations. You can add escape_special_characters per-file option.\n\nAcceptable values are: 0, 1. Default is 0.\n- 0 - Do not escape special characters\n- 1 - Escape special characters by a backslash',
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
				displayName: 'JavaScript File Export Options',
				name: '_javaScriptFileExportOptions',
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
						description: 'Acceptable values are: \'single\', \'double\'. Default is \'single\'.\n- \'single\' - Output will be enclosed in single quotes\n- \'double\' - Output will be enclosed in double quotes',
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
				displayName: 'Md File Export Options',
				name: '_mdFileExportOptions',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
				displayName: 'Mdx v1 File Export Options',
				name: '_mdxV1FileExportOptions',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
				displayName: 'Mdx v2 File Export Options',
				name: '_mdxV2FileExportOptions',
				values: [
					{
						displayName: 'Export Pattern',
						name: 'exportPattern',
						type: 'string',
						default: '',
						description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
			}
		],
		routing: {
			send: {
				preSend: [
					normalizeFieldBody
				],
				property: 'exportOptions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	},
	{
		displayName: 'Excluded Target Languages',
		name: 'excludedTargetLanguages',
		type: 'multiOptions',
		default: [],
		description: 'Set Target Languages the file should not be translated into. Do not use this option if the file should be available for all project languages.',
		routing: {
			send: {
				property: 'excludedTargetLanguages',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	},
	{
		displayName: 'Attach Label Ids',
		name: 'attachLabelIds',
		type: 'multiOptions',
		default: [],
		description: 'Attach labels to strings. Get via [List Labels](#operation/api.projects.labels.getMany)',
		routing: {
			send: {
				property: 'attachLabelIds',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.post'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.get'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.put'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.put'
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
		displayName: 'Body',
		name: '_body',
		description: 'Select configuration type',
		default: {},
		type: 'fixedCollection',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.put'
				]
			}
		},
		options: [
			{
				displayName: 'Replace File From Storage',
				name: '_replaceFileFromStorage',
				values: [
					{
						displayName: 'Storage Id',
						name: 'storageId',
						type: 'options',
						default: '',
						description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getStorages'
						}
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'File name\n\n __Note:__ Can\'t contain `\\ / : * ? " < > |` symbols.',
						placeholder: 'umbrella_app.xliff'
					},
					{
						displayName: 'Update Option',
						name: 'updateOption',
						type: 'options',
						default: '',
						description: 'Defines whether to keep existing translations and approvals for updated strings',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'clear_translations_and_approvals',
								value: 'clear_translations_and_approvals'
							},
							{
								name: 'keep_translations',
								value: 'keep_translations'
							},
							{
								name: 'keep_translations_and_approvals',
								value: 'keep_translations_and_approvals'
							}
						]
					},
					{
						displayName: 'File Import Options',
						name: 'importOptions',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						options: [
							{
								displayName: 'Spreadsheet File Import Options',
								name: '_spreadsheetFileImportOptions',
								values: [
									{
										displayName: 'First Line Contains Header',
										name: 'firstLineContainsHeader',
										type: 'boolean',
										default: false,
										description: 'Defines whether the file includes a first-row header that should not be imported',
										placeholder: 'false'
									},
									{
										displayName: 'Import Hidden Sheets',
										name: 'importHiddenSheets',
										type: 'boolean',
										default: true,
										description: 'Defines whether hidden sheets that should be imported',
										placeholder: 'false'
									},
									{
										displayName: 'Import Hidden Rows',
										name: 'importHiddenRows',
										type: 'boolean',
										default: true,
										description: 'Defines whether hidden rows that should be imported',
										placeholder: 'false'
									},
									{
										displayName: 'Import Eq Suggestions',
										name: 'importEqSuggestions',
										type: 'boolean',
										default: false,
										description: 'Defines whether to import translations identical to sources',
										placeholder: 'true'
									},
									{
										displayName: 'Auto Approve Imported',
										name: 'autoApproveImported',
										type: 'boolean',
										default: false,
										description: 'Defines whether to auto-approve imported translations',
										placeholder: 'true'
									},
									{
										displayName: 'Translate Hidden',
										name: 'translateHidden',
										type: 'boolean',
										default: false,
										description: 'Defines whether to import translations for hidden strings',
										placeholder: 'false'
									},
									{
										displayName: 'Add To Tm',
										name: 'addToTm',
										type: 'boolean',
										default: true,
										description: 'Defines whether to add imported translations to TM',
										placeholder: 'true'
									},
									{
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: false,
										description: 'Defines whether to split long texts into smaller text segments.\n\n  __Important!__ This option disables the possibility to upload existing translations for Spreadsheet files when enabled.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									},
									{
										displayName: 'Import Translations',
										name: 'importTranslations',
										type: 'boolean',
										default: false,
										description: 'Defines whether to import translations from the file',
										placeholder: 'true'
									},
									{
										displayName: 'Spreadsheet File Import Schema',
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
														displayName: 'Source Phrase',
														name: 'sourcePhrase',
														type: 'number',
														default: 0,
														description: 'Defines source phrase column number'
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
														displayName: 'Context',
														name: 'context',
														type: 'number',
														default: 0,
														description: 'Defines context column number'
													},
													{
														displayName: 'Max Length',
														name: 'maxLength',
														type: 'number',
														default: 0,
														description: 'Defines max length column number'
													},
													{
														displayName: 'Translatable',
														name: 'translatable',
														type: 'number',
														default: 0,
														description: 'Defines visible status `yes` as show and `no` as hidden'
													},
													{
														displayName: 'Labels',
														name: 'labels',
														type: 'number',
														default: 0,
														description: 'Defines labels column number'
													}
												]
											}
										]
									}
								]
							},
							{
								displayName: 'Xml File Import Options',
								name: '_xmlFileUpdateOptions',
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
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.\n\n  __Important!__ This option disables the possibility to upload existing translations for XML files when enabled.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'WebXml File Import Options',
								name: '_webXmlFileImportOptions',
								values: [
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
										displayName: 'Hide Attribute Values',
										name: 'hideAttributeValues',
										type: 'boolean',
										default: false,
										description: 'HTML attributes (e.g., src, href, data) will be imported as hidden strings.'
									},
									{
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n   Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Docx File Import Options',
								name: '_docxFileUpdateOptions',
								values: [
									{
										displayName: 'Clean Tags Aggressively',
										name: 'cleanTagsAggressively',
										type: 'boolean',
										default: false,
										description: 'When checked, strips additional formatting tags related to text spacing.\n\n__Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.xlsx, *.xltx, *.xlsm, *.xltm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
									},
									{
										displayName: 'Translate Hidden Text',
										name: 'translateHiddenText',
										type: 'boolean',
										default: false,
										description: 'When checked, exposes hidden text for translation.\n\n__Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm'
									},
									{
										displayName: 'Translate Hyperlink Urls',
										name: 'translateHyperlinkUrls',
										type: 'boolean',
										default: false,
										description: 'When checked, exposes hidden hyperlinks for translation.\n\n__Note:__ Works only for files with the following extensions: *.docx, *.dotx, *.docm, *.dotm, *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
									},
									{
										displayName: 'Translate Hidden Rows And Columns',
										name: 'translateHiddenRowsAndColumns',
										type: 'boolean',
										default: false,
										description: 'When checked, exposes hidden rows and columns for translation.\n\n__Note:__ Works only for files with the following extensions: *.xlsx, *.xltx, *.xlsm, *.xltm'
									},
									{
										displayName: 'Import Notes',
										name: 'importNotes',
										type: 'boolean',
										default: true,
										description: 'When checked, expose slide notes for translation.\n\n__Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
									},
									{
										displayName: 'Import Hidden Slides',
										name: 'importHiddenSlides',
										type: 'boolean',
										default: false,
										description: 'When checked, exposes hidden slides for translation.\n\n__Note:__ Works only for files with the following extensions: *.pptx, *.potx, *.ppsx, *.pptm, *.potm, *.ppsm'
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
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Html File Import Options',
								name: '_htmlFileUpdateOptions',
								values: [
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
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.'
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
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Html with Front Matter File Import Options',
								name: '_fmHtmlFileUpdateOptions',
								values: [
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
									},
									{
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.'
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
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Md File Import Options',
								name: '_mdFileImportOptions',
								values: [
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
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n   Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Mdx v1 File Import Options',
								name: '_mdxV1FileUpdateOptions',
								values: [
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
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Mdx v2 File Import Options',
								name: '_mdxV2FileUpdateOptions',
								values: [
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
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: true,
										description: 'Defines whether to split long texts into smaller text segments.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							},
							{
								displayName: 'Other Files Import Options',
								name: '_otherFilesImportOptions',
								values: [
									{
										displayName: 'Content Segmentation',
										name: 'contentSegmentation',
										type: 'boolean',
										default: false,
										description: 'Defines whether to split long texts into smaller text segments. Only for __xml__, __flsnp__, __docx__, __mif__, __idml__, __dita__, __android8__, __xliff13__, __xliff_two4__ files.\n\n__Note:__ When Content segmentation is enabled, the translation upload is handled by an experimental machine learning technology. To achieve the best results, we recommend uploading translation files with the same or as close as possible file structure as in source files.'
									},
									{
										displayName: 'Srx Storage Id',
										name: 'srxStorageId',
										type: 'options',
										default: '',
										description: 'Storage Identifier. Get via [List Storages](#operation/api.storages.getMany).\n\n  Storage identifier of the SRX segmentation rules file. Read more about [Custom Segmentation](https://support.crowdin.com/custom-segmentation/#segmentation-examples).',
										typeOptions: {
											loadOptionsMethod: 'getStorages'
										}
									}
								]
							}
						]
					},
					{
						displayName: 'File Export Options',
						name: 'exportOptions',
						type: 'fixedCollection',
						default: {},
						description: undefined,
						options: [
							{
								displayName: 'General File Export Options',
								name: '_generalFileExportOptions',
								values: [
									{
										displayName: 'Export Pattern',
										name: 'exportPattern',
										type: 'string',
										default: '',
										description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
									}
								]
							},
							{
								displayName: 'Property File Export Options',
								name: '_propertyFileExportOptions',
								values: [
									{
										displayName: 'Export Pattern',
										name: 'exportPattern',
										type: 'string',
										default: '',
										description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
									},
									{
										displayName: 'Escape Quotes',
										name: 'escapeQuotes',
										type: 'options',
										default: '',
										description: 'Values available:\n- 0 - Do not escape single quote\n- 1 - Escape single quote by another single quote\n- 2 - Escape single quote by a backslash\n- 3 - Escape single quote by another single quote only in strings containing variables (`{0}`)',
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
										description: 'Defines whether any special characters (=, :, ! and #) should be escaped by backslash in exported translations. You can add escape_special_characters per-file option.\n\nAcceptable values are: 0, 1. Default is 0.\n- 0 - Do not escape special characters\n- 1 - Escape special characters by a backslash',
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
								displayName: 'JavaScript File Export Options',
								name: '_javaScriptFileExportOptions',
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
										description: 'Acceptable values are: \'single\', \'double\'. Default is \'single\'.\n- \'single\' - Output will be enclosed in single quotes\n- \'double\' - Output will be enclosed in double quotes',
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
								displayName: 'Md File Export Options',
								name: '_mdFileExportOptions',
								values: [
									{
										displayName: 'Export Pattern',
										name: 'exportPattern',
										type: 'string',
										default: '',
										description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
								displayName: 'Mdx v1 File Export Options',
								name: '_mdxV1FileExportOptions',
								values: [
									{
										displayName: 'Export Pattern',
										name: 'exportPattern',
										type: 'string',
										default: '',
										description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
								displayName: 'Mdx v2 File Export Options',
								name: '_mdxV2FileExportOptions',
								values: [
									{
										displayName: 'Export Pattern',
										name: 'exportPattern',
										type: 'string',
										default: '',
										description: 'File export pattern. Defines file name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols'
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
							}
						]
					},
					{
						displayName: 'Attach Label Ids',
						name: 'attachLabelIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectLabelsMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Attach labels to updated strings. Get via [List Labels](#operation/api.projects.labels.getMany)'
					},
					{
						displayName: 'Detach Label Ids',
						name: 'detachLabelIds',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getProjectLabelsMulti',
							loadOptionsDependsOn: [
								'projectId'
							]
						},
						default: [],
						description: 'Detach labels from updated strings. Get via [List Labels](#operation/api.projects.labels.getMany)'
					},
					{
						displayName: 'Replace Modified Context',
						name: 'replaceModifiedContext',
						type: 'boolean',
						default: false,
						description: 'Enable to replace context, that have been modified in Crowdin.',
						placeholder: 'false'
					}
				]
			},
			{
				displayName: 'Restore File',
				name: '_restoreFile',
				values: [
					{
						displayName: 'Revision Id',
						name: 'revisionId',
						type: 'options',
						default: '',
						description: 'Revision Identifier. Get via [List File Revisions](#operation/api.projects.files.revisions.getMany)',
						required: true,
						typeOptions: {
							loadOptionsMethod: 'getFileRevisions',
							loadOptionsDependsOn: [
								'projectId',
								'fileId'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.delete'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.delete'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.patch'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.patch'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.preview.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.preview.get'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.download.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.download.get'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.post'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.post'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.post'
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
		description: 'Reference file name',
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.post'
				]
			}
		},
		placeholder: 'design_reference.png'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.get'
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
		displayName: 'Reference Id',
		name: 'referenceId',
		required: true,
		description: 'Reference Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getFileReferences',
			loadOptionsDependsOn: [
				'projectId',
				'fileId'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.delete'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.delete'
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
		displayName: 'Reference Id',
		name: 'referenceId',
		required: true,
		description: 'Reference Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.delete'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getFileReferences',
			loadOptionsDependsOn: [
				'projectId',
				'fileId'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.get'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.get'
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
		displayName: 'Revision Id',
		name: 'revisionId',
		required: true,
		description: 'Revision Identifier. Get via [List File Revisions](#operation/api.projects.files.revisions.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getFileRevisions',
			loadOptionsDependsOn: [
				'projectId',
				'fileId'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Branch name\n\n__Note:__ Can\'t contain `\\ / : * ? " < > |` symbols',
				placeholder: 'develop-master'
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Use to provide more details for translators. Title is available in UI only',
				placeholder: 'Master branch'
			},
			{
				displayName: 'Export Pattern',
				name: 'exportPattern',
				type: 'string',
				default: '',
				description: 'Branch export pattern. Defines branch name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
				placeholder: '%three_letters_code%'
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				default: '',
				description: 'Defines priority level for each branch',
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Branch Id',
				name: 'branchId',
				type: 'options',
				default: '',
				description: 'Branch identifier. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `directoryId` in same request',
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
				description: 'Parent Directory Identifier. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `branchId` in same request',
				typeOptions: {
					loadOptionsMethod: 'getProjectDirectories',
					loadOptionsDependsOn: [
						'projectId'
					]
				}
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Directory name\n\n__Note:__ Can\'t contain `\\ / : * ? " < > |` symbols',
				placeholder: 'main'
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Use to provide more details for translators. Title is available in UI only',
				placeholder: '<Description materials>'
			},
			{
				displayName: 'Export Pattern',
				name: 'exportPattern',
				type: 'string',
				default: '',
				description: 'Directory export pattern. Defines directory name and path in resulting translations bundle\n\n__Note:__ Can\'t contain `: * ? " < > |` symbols',
				placeholder: '/localization/%locale%/%file_name%'
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				default: '',
				description: 'Defines priority level for each branch',
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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.files.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Branch Id',
				name: 'branchId',
				type: 'options',
				default: '',
				description: 'Branch Identifier — defines branch to which file will be added. Get via [List Branches](#operation/api.projects.branches.getMany)\n\n__Note:__ Can\'t be used with `directoryId` in same request',
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
				description: 'Directory Identifier — defines directory to which file will be added. Get via [List Directories](#operation/api.projects.directories.getMany)\n\n__Note:__ Can\'t be used with `branchId` in same request',
				typeOptions: {
					loadOptionsMethod: 'getProjectDirectories',
					loadOptionsDependsOn: [
						'projectId'
					]
				}
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'File name\n\n__Note:__ Can\'t contain `\\ / : * ? " < > |` symbols.\n\n  `ZIP` files are not allowed.',
				placeholder: 'umbrella_app.xliff'
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Use to provide more details for translators. Title is available in UI only',
				placeholder: 'source_app_info'
			},
			{
				displayName: 'Context',
				name: 'context',
				type: 'string',
				default: '',
				description: 'Use to provide context about whole file',
				placeholder: 'Additional context valuable for translators'
			},
			{
				displayName: 'Excluded Target Languages',
				name: 'excludedTargetLanguages',
				type: 'multiOptions',
				default: [],
				description: 'Set Target Languages the file should not be translated into. Do not use this option if the file should be available for all project languages.',
				typeOptions: {
					loadOptionsMethod: 'getLanguagesMulti'
				}
			},
			{
				displayName: 'Attach Label Ids',
				name: 'attachLabelIds',
				type: 'multiOptions',
				default: [],
				description: 'Attach labels to strings. Get via [List Labels](#operation/api.projects.labels.getMany)',
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
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'sourceFiles'
				],
				operation: [
					'api.projects.branches.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.directories.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.references.getMany'
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
					'sourceFiles'
				],
				operation: [
					'api.projects.files.revisions.getMany'
				]
			}
		}
	}
];
