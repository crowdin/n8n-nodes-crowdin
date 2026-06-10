import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

// Hand-written extension: api.projects.advisors.insights.patch
//
// The generator skips this PATCH because it is a JSON Patch operation with no
// corresponding POST (insights are produced by Crowdin's advisor, not created via
// the API) and no reachable response schema, so it cannot infer the field type for
// the only patchable path, `/isDismissed`. See transformPatchOperationsInSpec in
// scripts/generate-properties.mjs. We mirror what the generator would emit: an
// `updateFields` collection plus the transformToJsonPatch preSend.
export const advisorsProperties: INodeProperties[] = [
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
				name: 'Edit Advisor Insight',
				value: 'api.projects.advisors.insights.patch',
				action: 'Edit Advisor Insight',
				description: '**Required scopes:** `project.advisor` (Read and Write).\n\nUser-facing mutation of a single Advisor Insight row. Currently only `/isDismissed` is patchable (dismiss ↔ reactivate). For dispatching a fresh check, see POST `/advisors/checks`. For app-pushed insight updates, see PUT `/applications/.../insight`.',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/advisors/insights/{{$parameter["insightId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			}
		],
		default: 'api.projects.advisors.insights.patch'
	},
	{
		displayName: 'PATCH /projects/{projectId}/advisors/insights/{insightId}',
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
					'api.projects.advisors.insights.patch'
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
					'api.projects.advisors.insights.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Insight Id',
		name: 'insightId',
		required: true,
		description: 'Insight Identifier',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectAdvisorInsights',
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
					'advisor'
				],
				operation: [
					'api.projects.advisors.insights.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Is Dismissed',
				name: 'isDismissed',
				type: 'boolean',
				default: false,
				description: 'Whether the insight is dismissed. Set to true to dismiss the insight, false to reactivate it.'
			}
		]
	}
];
