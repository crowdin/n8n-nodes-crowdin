import type { INodeProperties } from 'n8n-workflow';
import { transformToJsonPatch } from '../../../utils/preSend';

/**
 * Edit String operation - manually defined because the 'text' field can be
 * either a string (regular) or an object (plural forms like {"one": "string", "other": "strings"})
 */
export const sourceStringsProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				]
			}
		},
		options: [
			{
				name: 'Edit String',
				value: 'api.projects.strings.patch',
				action: 'Edit String',
				description: '**Required scopes:** `project.source.string` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/strings/{{$parameter["stringId"]}}'
					},
					send: {
						preSend: [
							transformToJsonPatch
						]
					}
				}
			},
		],
		default: 'api.projects.strings.patch'
	},
	{
		displayName: 'PATCH /projects/{projectId}/strings/{stringId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.patch'
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'String Id',
		name: 'stringId',
		required: true,
		description: 'String Identifier. Get via [List Strings](#operation/api.projects.strings.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjectStrings',
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
					'sourceStrings'
				],
				operation: [
					'api.projects.strings.patch'
				]
			}
		},
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'fixedCollection',
				default: {},
				description: 'Text for translation. Choose between regular string or plural forms.',
				options: [
					{
						name: '_regularText',
						displayName: 'Regular Text',
						values: [
							{
								displayName: 'Text',
								name: '_value',
								type: 'string',
								default: '',
								description: 'Text for translation',
								placeholder: 'Not all videos are shown to users. See more'
							}
						]
					},
					{
						name: '_pluralText',
						displayName: 'Plural Text',
						values: [
							{
								displayName: 'Text (JSON)',
								name: 'json:_value',
								type: 'json',
								default: '{}',
								description: 'Text for translation with plural forms',
								placeholder: '{"one":"string","other":"strings"}'
							}
						]
					}
				]
			},
			{
				displayName: 'Identifier',
				name: 'identifier',
				type: 'string',
				default: '',
				description: 'Defines unique string identifier. Max. length is 512 characters',
				placeholder: '6a1821e6499ebae94de4b880fd93b985'
			},
			{
				displayName: 'Context',
				name: 'context',
				type: 'string',
				default: '',
				description: 'Use to provide additional information for better source text understanding',
				placeholder: 'shown on main page'
			},
			{
				displayName: 'Is Hidden',
				name: 'isHidden',
				type: 'boolean',
				default: false,
				description: 'Defines whether to make string unavailable for translation'
			},
			{
				displayName: 'Max Length',
				name: 'maxLength',
				type: 'number',
				default: 0,
				description: 'Max. length of translated text (0 – unlimited)',
				placeholder: '35'
			},
			{
				displayName: 'Label Ids',
				name: 'labelIds',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getProjectLabelsMulti',
					loadOptionsDependsOn: [
						'projectId'
					]
				},
				default: [],
				description: 'Label Identifiers. Get via [List Labels](#operation/api.projects.labels.getMany)'
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
