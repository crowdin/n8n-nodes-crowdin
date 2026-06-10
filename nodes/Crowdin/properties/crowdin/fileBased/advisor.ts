// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { normalizeFieldBody } from '../../../utils/preSend';

export const advisorProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'advisor'
				]
			}
		},
		options: [
			{
				name: 'Create or Update Application Advisor Insight',
				value: 'api.projects.applications.modules.advisors.insights.put',
				action: 'Create or Update Application Advisor Insight',
				description: '**Required scopes:** `project.advisor` (Read and Write).\n\nCalled by an installed application\'s `advisor-inspector` module to publish the result of its own check against a string. Subsequent calls for the same string overwrite the previous insight from this module.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/projects/{{$parameter["projectId"]}}/applications/{{$parameter["applicationIdentifier"]}}/modules/{{$parameter["moduleKey"]}}/advisors/insights'
					}
				}
			},
			{
				name: 'Create Advisor Check',
				value: 'api.projects.advisors.checks.post',
				action: 'Create Advisor Check',
				description: '**Required scopes:** `project.advisor` (Read and Write).\n\nTriggers an asynchronous re-check of advisor inspectors for the project. At most one of `category` or `inspectors` may be present; if neither is supplied, every inspector is re-checked. Supplying `category` re-checks all inspectors in that category. Supplying `inspectors` re-checks only the listed inspectors; pass `options` on an entry to opt into AI validation for that inspector. Returns a job-progress descriptor — distinct from PATCH `/insights/{insightId}` (user-facing Insight mutation) and PUT `/applications/.../insight` (app-pushed upsert).',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects/{{$parameter["projectId"]}}/advisors/checks'
					}
				}
			},
			{
				name: 'Get Advisor Check Status',
				value: 'api.projects.advisors.checks.get',
				action: 'Get Advisor Check Status',
				description: '**Required scopes:** `project.advisor` (Read only).\n\nReturns the status of an advisor check job',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/advisors/checks/{{$parameter["checkId"]}}'
					}
				}
			},
			{
				name: 'List Advisor Insights',
				value: 'api.projects.advisors.insights.getMany',
				action: 'List Advisor Insights',
				description: '**Required scopes:** `project.advisor` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/advisors/insights'
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
			}
		],
		default: 'api.projects.applications.modules.advisors.insights.put'
	},
	{
		displayName: 'PUT /projects/{projectId}/applications/{applicationIdentifier}/modules/{moduleKey}/advisors/insights',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		}
	},
	{
		displayName: 'POST /projects/{projectId}/advisors/checks',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.post'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/advisors/checks/{checkId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.get'
				]
			}
		}
	},
	{
		displayName: 'GET /projects/{projectId}/advisors/insights',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
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
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
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
		description: undefined,
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getApplicationInstallations'
		}
	},
	{
		displayName: 'Module Key',
		name: 'moduleKey',
		required: true,
		description: undefined,
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		}
	},
	{
		displayName: 'Outcome',
		required: true,
		name: 'outcome',
		type: 'options',
		default: 'flagged',
		description: 'Result of the app\'s check. `flagged` — issue detected; `clear` — on target; `not_applicable` — inspector does not apply to this project.',
		options: [
			{
				name: 'flagged',
				value: 'flagged'
			},
			{
				name: 'clear',
				value: 'clear'
			},
			{
				name: 'not_applicable',
				value: 'not_applicable'
			}
		],
		routing: {
			send: {
				property: 'outcome',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		}
	},
	{
		displayName: 'Checked At',
		required: true,
		name: 'dateTime:checkedAt',
		type: 'dateTime',
		default: '',
		description: 'Date when the app performed this check (ISO 8601)',
		routing: {
			send: {
				property: 'checkedAt',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		},
		placeholder: '2026-05-21T14:30:00+00:00'
	},
	{
		displayName: 'Metrics',
		name: 'metrics',
		type: 'fixedCollection',
		default: {},
		description: 'Structured metrics produced by the app for this insight.',
		routing: {
			send: {
				property: 'metrics',
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
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Advisor Insight Metric',
				name: 'items',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: undefined,
						placeholder: 'quality_score'
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'number',
						default: 0,
						description: undefined,
						placeholder: '12'
					},
					{
						displayName: 'Unit',
						name: 'unit',
						type: 'options',
						default: '',
						description: undefined,
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'percent',
								value: 'percent'
							},
							{
								name: 'count',
								value: 'count'
							}
						],
						placeholder: 'percent'
					},
					{
						displayName: 'Threshold',
						name: 'threshold',
						type: 'number',
						default: 0,
						description: undefined,
						placeholder: '50'
					},
					{
						displayName: 'Tone',
						name: 'tone',
						type: 'options',
						default: '',
						description: undefined,
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'default',
								value: 'default'
							},
							{
								name: 'success',
								value: 'success'
							},
							{
								name: 'danger',
								value: 'danger'
							}
						],
						placeholder: 'danger'
					},
					{
						displayName: 'Source',
						name: 'source',
						type: 'options',
						default: '',
						description: 'What produced the metric. Omitted for metrics recorded before sources were tracked.',
						options: [
							{
								name: '-',
								value: ''
							},
							{
								name: 'deterministic',
								value: 'deterministic'
							},
							{
								name: 'ai',
								value: 'ai'
							},
							{
								name: 'app',
								value: 'app'
							}
						],
						placeholder: 'deterministic'
					},
					{
						displayName: 'Checked At',
						name: 'checkedAt',
						type: 'string',
						default: '',
						description: 'Date when the metric was measured (ISO 8601). Omitted for metrics measured at the insight\'s top-level `checkedAt`.',
						placeholder: '2026-04-06T10:30:00+00:00'
					}
				]
			}
		]
	},
	{
		displayName: 'Recommendations',
		name: 'recommendations',
		type: 'fixedCollection',
		default: {},
		description: 'Actionable recommendations the app wants to surface for this insight.',
		routing: {
			send: {
				property: 'recommendations',
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
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
		placeholder: 'Add Item',
		options: [
			{
				displayName: 'Advisor Insight Recommendation',
				name: 'items',
				values: [
					{
						displayName: 'Id',
						name: 'id',
						type: 'string',
						default: '',
						description: undefined,
						placeholder: 'run_ai_context_validation'
					},
					{
						displayName: 'Primary',
						name: 'primary',
						type: 'boolean',
						default: false,
						description: undefined,
						placeholder: 'true'
					},
					{
						displayName: 'Params',
						name: 'json:params',
						type: 'json',
						default: '{}',
						description: 'Parameters provided alongside the recommendation (e.g., `projectId`). Typically used to construct the recommendation\'s target URL.'
					}
				]
			}
		]
	},
	{
		displayName: 'Payload',
		name: 'payload',
		type: 'json',
		default: '{}',
		description: 'Free-form data the app wants to keep attached to this insight. Stored as-is — the backend does not interpret its contents.',
		routing: {
			send: {
				property: 'payload',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.applications.modules.advisors.insights.put'
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
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.post'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'string',
		default: '',
		description: 'Optional category to scope the check to. Mutually exclusive with `inspectors`.',
		routing: {
			send: {
				property: 'category',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value || undefined }}'
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.post'
				]
			}
		},
		placeholder: 'context'
	},
	{
		displayName: 'Inspectors',
		name: 'inspectors',
		type: 'fixedCollection',
		default: {},
		description: 'Optional list of inspectors to re-check. Mutually exclusive with `category`.',
		routing: {
			send: {
				property: 'inspectors',
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
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.post'
				]
			}
		},
		typeOptions: {
			multipleValues: true
		},
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
						placeholder: 'string_context_relevance',
						required: true
					},
					{
						displayName: 'Options',
						name: 'options',
						type: 'fixedCollection',
						default: {},
						description: 'Per-inspector options. Currently only `string_context_relevance` supports AI options.',
						placeholder: 'Add Field',
						options: [
							{
								displayName: 'Fields',
								name: 'fields',
								values: [
									{
										displayName: 'Mode',
										name: 'mode',
										type: 'options',
										default: '',
										description: undefined,
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
												name: 'all',
												value: 'all'
											}
										],
										placeholder: 'auto'
									},
									{
										displayName: 'Prompt Id',
										name: 'promptId',
										type: 'options',
										default: '',
										description: undefined,
										typeOptions: {
											loadOptionsMethod: 'getAiPrompts'
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
		displayName: 'Project Id',
		name: 'projectId',
		required: true,
		description: 'Project Identifier. Get via [List Projects](#operation/api.projects.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.get'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Check Id',
		name: 'checkId',
		required: true,
		description: 'Advisor Check Identifier, consists of 36 characters',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.checks.get'
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
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
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
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
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
		displayName: 'Is Dismissed',
		name: 'isDismissed',
		description: 'Filter insights by dismissal flag. Omit to return both dismissed and active insights.',
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
				property: 'isDismissed',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
				]
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		description: 'Filter insights by status (comma-separated)',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'status',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
				]
			}
		},
		placeholder: 'pending,checking,outdated,done'
	},
	{
		displayName: 'Outcome',
		name: 'outcome',
		description: 'Filter insights by outcome (comma-separated). `flagged` — issue detected; `clear` — on target; `not_applicable` — does not apply. Omit to return all checked insights (never-checked ones are excluded).',
		default: '',
		type: 'string',
		routing: {
			send: {
				type: 'query',
				property: 'outcome',
				value: '={{ $value || undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
				]
			}
		},
		placeholder: 'flagged,clear'
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
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.getMany'
				]
			}
		}
	}
];
