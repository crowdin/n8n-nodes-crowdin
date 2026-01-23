// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

export const branchesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'branches'
				]
			}
		},
		options: [
			{
				name: 'Get Cloned Branch',
				value: 'api.projects.branches.clones.branch.get',
				action: 'Get Cloned Branch',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/clones/{{$parameter["cloneId"]}}/branch'
					}
				}
			},
			{
				name: 'Clone Branch',
				value: 'api.projects.branches.clones.post',
				action: 'Clone Branch',
				description: '**Required scopes:** `project.source.file` (Read and Write).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/clones'
					}
				}
			},
			{
				name: 'Check Branch Clone Status',
				value: 'api.projects.branches.clones.get',
				action: 'Check Branch Clone Status',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/clones/{{$parameter["cloneId"]}}'
					}
				}
			},
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
				name: 'Merge Branch',
				value: 'api.projects.branches.merges.post',
				action: 'Merge Branch',
				description: '**Required scopes:** `project.source.string` (Read and Write).\n\n__NOTE:__ By default, during merge: strings will be added from the source branch, deleted strings will be removed, changed strings will be updated. Conflicted strings will remain unchanged unless `acceptSourceChanges` is enabled.',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/merges'
					}
				}
			},
			{
				name: 'Check Branch Merge Status',
				value: 'api.projects.branches.merges.get',
				action: 'Check Branch Merge Status',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/merges/{{$parameter["mergeId"]}}'
					}
				}
			},
			{
				name: 'Get Branch Merge Summary',
				value: 'api.projects.branches.merges.summary.get',
				action: 'Get Branch Merge Summary',
				description: '**Required scopes:** `project.source.string` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/branches/{{$parameter["branchId"]}}/merges/{{$parameter["mergeId"]}}/summary'
					}
				}
			}
		],
		default: 'api.projects.branches.clones.branch.get'
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}/clones/{cloneId}/branch',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.branch.get'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/branches/{branchId}/clones',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}/clones/{cloneId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.get'
				]
			}
		}
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
				],
				operation: [
					'api.projects.branches.patch'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/branches/{branchId}/merges',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}/merges/{mergeId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/branches/{branchId}/merges/{mergeId}/summary',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.summary.get'
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
					'branches'
				],
				operation: [
					'api.projects.branches.clones.branch.get'
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
		description: 'Source Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.branch.get'
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
		displayName: 'Clone Id',
		name: 'cloneId',
		required: true,
		description: 'Clone Branch Identifier, consists of 36 characters. Get via [Clone Branch](#operation/api.projects.branches.clones.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.branch.get'
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
					'branches'
				],
				operation: [
					'api.projects.branches.clones.post'
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
		description: 'Source Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany).',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.post'
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
					'branches'
				],
				operation: [
					'api.projects.branches.clones.post'
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
					'branches'
				],
				operation: [
					'api.projects.branches.clones.post'
				]
			}
		},
		placeholder: 'Master branch'
	},
	{
		displayName: 'Is Protected',
		name: 'isProtected',
		type: 'boolean',
		default: false,
		description: 'If true, the branch is protected from some actions (for example, delete or force-push operations may be restricted)',
		routing: {
			send: {
				property: 'isProtected',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.post'
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
					'branches'
				],
				operation: [
					'api.projects.branches.clones.get'
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
		description: 'Source Branch Identifier. Get via [List Branches](#operation/api.projects.branches.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.get'
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
		displayName: 'Clone Id',
		name: 'cloneId',
		required: true,
		description: 'Clone Branch Identifier, consists of 36 characters. Get via [Clone Branch](#operation/api.projects.branches.clones.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.clones.get'
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
					'branches'
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
					'branches'
				],
				operation: [
					'api.projects.branches.getMany'
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
					'branches'
				],
				operation: [
					'api.projects.branches.getMany'
				]
			}
		},
		placeholder: 'createdAt desc,name,priority'
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
				],
				operation: [
					'api.projects.branches.post'
				]
			}
		},
		placeholder: 'Master branch'
	},
	{
		displayName: 'Is Protected',
		name: 'isProtected',
		type: 'boolean',
		default: false,
		description: 'If true, the branch is protected from some actions (for example, delete or force-push operations may be restricted)',
		routing: {
			send: {
				property: 'isProtected',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
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
		displayName: 'Delete After Merge',
		name: 'deleteAfterMerge',
		type: 'boolean',
		default: false,
		description: 'Whether to delete branch after merge',
		routing: {
			send: {
				property: 'deleteAfterMerge',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
				]
			}
		}
	},
	{
		displayName: 'Source Branch Id',
		required: true,
		name: 'sourceBranchId',
		type: 'number',
		default: undefined,
		description: 'Branch that will be merged',
		routing: {
			send: {
				property: 'sourceBranchId',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
				]
			}
		},
		placeholder: '8'
	},
	{
		displayName: 'Dry Run',
		name: 'dryRun',
		type: 'boolean',
		default: false,
		description: 'Simulate merging without making any real changes.',
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
				]
			}
		}
	},
	{
		displayName: 'Accept Source Changes',
		name: 'acceptSourceChanges',
		type: 'boolean',
		default: false,
		description: 'When enabled, conflicted strings will be resolved by accepting changes from the source branch.',
		routing: {
			send: {
				property: 'acceptSourceChanges',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.post'
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.get'
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.get'
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
		displayName: 'Merge Id',
		name: 'mergeId',
		required: true,
		description: 'Merge Branch Identifier, consists of 36 characters. Get via [Merge Branch](#operation/api.projects.branches.merges.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.get'
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.summary.get'
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
					'branches'
				],
				operation: [
					'api.projects.branches.merges.summary.get'
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
		displayName: 'Merge Id',
		name: 'mergeId',
		required: true,
		description: 'Merge Branch Identifier, consists of 36 characters. Get via [Merge Branch](#operation/api.projects.branches.merges.post)',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'branches'
				],
				operation: [
					'api.projects.branches.merges.summary.get'
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
					'branches'
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
				displayName: 'Is Protected',
				name: 'isProtected',
				type: 'boolean',
				default: false,
				description: 'If true, the branch is protected from some actions (for example, delete or force-push operations may be restricted)'
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
					'branches'
				],
				operation: [
					'api.projects.branches.getMany'
				]
			}
		}
	}
];
