// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const dictionariesProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'dictionaries'
				]
			}
		},
		options: [
			{
				name: 'List Dictionaries',
				value: 'api.projects.dictionaries.getMany',
				action: 'List Dictionaries',
				description: '**Required scopes:** `project.dictionary` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter["projectId"]}}/dictionaries'
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
			}
		],
		default: 'api.projects.dictionaries.getMany'
	},
	{
		displayName: 'GET /projects/{projectId}/dictionaries',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'dictionaries'
				],
				operation: [
					'api.projects.dictionaries.getMany'
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
					'dictionaries'
				],
				operation: [
					'api.projects.dictionaries.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Language Ids',
		name: 'languageIds',
		description: 'Filter progress by Language Identifiers. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: [],
		type: 'multiOptions',
		routing: {
			send: {
				type: 'query',
				property: 'languageIds',
				value: '={{ $value.length ? $value.join(\',\') : undefined }}',
				propertyInDotNotation: false
			}
		},
		displayOptions: {
			show: {
				resource: [
					'dictionaries'
				],
				operation: [
					'api.projects.dictionaries.getMany'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguagesMulti'
		}
	}
];
