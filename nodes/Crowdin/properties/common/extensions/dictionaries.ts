import type { INodeProperties, IExecuteSingleFunctions, IHttpRequestOptions, PreSendAction } from 'n8n-workflow';

/**
 * PreSend to build JSON Patch body for Edit Dictionary operation
 * Supports multiple operations in a single request
 */
const buildDictionaryPatch: PreSendAction = async function(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const operations = this.getNodeParameter('operations.items', []) as Array<{
		patchOp: string;
		word?: string;
		wordIndex?: number;
	}>;
	
	const patchBody: unknown[] = [];
	
	for (const op of operations) {
		if (op.patchOp === 'add') {
			patchBody.push({
				op: 'add',
				path: '/words/-',
				value: op.word
			});
		} else if (op.patchOp === 'remove') {
			patchBody.push({
				op: 'remove',
				path: `/words/${op.wordIndex}`
			});
		}
	}
	
	requestOptions.body = patchBody;
	return requestOptions;
};

/**
 * Edit Dictionary operation - manually defined because it has add/remove operations for words
 * 
 * Supports multiple operations in a single request
 */
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
				name: 'Edit Dictionary',
				value: 'api.projects.dictionaries.patch',
				action: 'Edit Dictionary',
				description: '**Required scopes:** `project.dictionary` (Read and Write).',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/projects/{{$parameter["projectId"]}}/dictionaries/{{$parameter["languageId"]}}'
					},
					send: {
						preSend: [
							buildDictionaryPatch
						]
					}
				}
			},
		],
		default: 'api.projects.dictionaries.patch'
	},
	{
		displayName: 'PATCH /projects/{projectId}/dictionaries/{languageId}',
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
					'api.projects.dictionaries.patch'
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
					'api.projects.dictionaries.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects'
		}
	},
	{
		displayName: 'Language Id',
		name: 'languageId',
		required: true,
		description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'dictionaries'
				],
				operation: [
					'api.projects.dictionaries.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getLanguages'
		}
	},
	{
		displayName: 'Operations',
		name: 'operations',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		required: true,
		description: 'Patch operations to perform on the dictionary',
		displayOptions: {
			show: {
				resource: [
					'dictionaries'
				],
				operation: [
					'api.projects.dictionaries.patch'
				]
			}
		},
		options: [
			{
				name: 'items',
				displayName: 'Operation',
				values: [
					{
						displayName: 'Operation Type',
						name: 'patchOp',
						type: 'options',
						default: 'add',
						options: [
							{
								name: 'Add',
								value: 'add',
								description: 'Add a word to the dictionary',
							},
							{
								name: 'Remove',
								value: 'remove',
								description: 'Remove a word from the dictionary',
							},
						],
					},
					// Add operation field
					{
						displayName: 'Word',
						name: 'word',
						type: 'string',
						default: '',
						description: 'Word to add to the dictionary',
						displayOptions: {
							show: {
								patchOp: ['add']
							}
						}
					},
					// Remove operation field
					{
						displayName: 'Word Index',
						name: 'wordIndex',
						type: 'number',
						default: 0,
						description: 'Index of the word to remove (0-based). To delete multiple words, specify indexes in reverse order.',
						displayOptions: {
							show: {
								patchOp: ['remove']
							}
						}
					},
				],
			},
		],
	},
];
