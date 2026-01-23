import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

/**
 * Edit String/Asset Comment operation - manually defined because:
 * - The auto-generated version uses raw JSON body for JSON Patch
 * - We want user-friendly form with proper fields (text, issueStatus)
 * - Uses transformToJsonPatch preSend to convert form data to JSON Patch format
 */
export const stringAssetCommentsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'stringAssetComments'
				]
			}
		},
		options: [
			{
				name: 'Edit String/Asset Comment',
				value: 'api.projects.comments.patch',
				action: 'Edit String/Asset Comment',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/comments/{{$parameter["commentId"]}}'
					},
					send: {
						preSend: [transformToJsonPatch]
					}
				}
			},
		],
		default: 'api.projects.comments.patch'
	},
	{
		displayName: 'PATCH /projects/{projectId}/comments/{commentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'stringAssetComments'
				],
				operation: [
					'api.projects.comments.patch'
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
					'stringAssetComments'
				],
				operation: [
					'api.projects.comments.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Comment Id',
		name: 'commentId',
		required: true,
		description: 'String/Asset Comment Identifier. Get via [List String/Asset Comments](#operation/api.projects.comments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stringAssetComments'
				],
				operation: [
					'api.projects.comments.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectComments',
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
					'stringAssetComments'
				],
				operation: [
					'api.projects.comments.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'Comment text'
			},
			{
				displayName: 'Issue Status',
				name: 'issueStatus',
				type: 'options',
				default: '',
				description: 'Defines issue resolution status. Only applicable for comments with type "issue".',
				options: [
					{
						name: '-',
						value: ''
					},
					{
						name: 'resolved',
						value: 'resolved'
					},
					{
						name: 'unresolved',
						value: 'unresolved'
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
];
