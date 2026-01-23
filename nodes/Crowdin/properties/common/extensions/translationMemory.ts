import type { INodeProperties, IExecuteSingleFunctions, IHttpRequestOptions, PreSendAction } from 'n8n-workflow';

/**
 * PreSend to build JSON Patch body for Edit TM Segment operation
 * Supports multiple operations in a single request
 */
const buildTmSegmentPatch: PreSendAction = async function(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const operations = this.getNodeParameter('operations.items', []) as Array<{
		patchOp: string;
		text?: string;
		languageId?: string;
		recordId?: number;
	}>;
	
	const patchBody: unknown[] = [];
	
	for (const op of operations) {
		if (op.patchOp === 'add') {
			patchBody.push({
				op: 'add',
				path: '/records/-',
				value: { text: op.text, languageId: op.languageId }
			});
		} else if (op.patchOp === 'replace') {
			patchBody.push({
				op: 'replace',
				path: `/records/${op.recordId}/text`,
				value: op.text
			});
		} else if (op.patchOp === 'remove') {
			patchBody.push({
				op: 'remove',
				path: `/records/${op.recordId}`
			});
		}
	}
	
	requestOptions.body = patchBody;
	return requestOptions;
};

/**
 * Edit TM Segment operation - manually defined because it has complex anyOf operations:
 * - add: Add a new record to the segment
 * - replace: Replace text of an existing record
 * - remove: Remove a record from the segment
 * 
 * Supports multiple operations in a single request
 */
export const translationMemoryProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				]
			}
		},
		options: [
			{
				name: 'Edit TM Segment',
				value: 'api.tms.segments.patch',
				action: 'Edit TM Segment',
				description: '**Required scopes:** `tm` (Read and Write).\n\nEdit segment of translation unit',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/tms/{{$parameter["tmId"]}}/segments/{{$parameter["segmentId"]}}'
					},
					send: {
						preSend: [
							buildTmSegmentPatch
						]
					}
				}
			},
		],
		default: 'api.tms.segments.patch'
	},
	{
		displayName: 'PATCH /tms/{tmId}/segments/{segmentId}',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.patch'
				]
			}
		}
	},
	{
		displayName: 'TM Id',
		name: 'tmId',
		required: true,
		description: 'TM Identifier. Get via [List TMs](#operation/api.tms.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTranslationMemories'
		}
	},
	{
		displayName: 'Segment Id',
		name: 'segmentId',
		required: true,
		description: 'TM Segment Identifier. Get via [List TM Segments](#operation/api.tms.segments.getMany)',
		default: '',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.patch'
				]
			}
		},
		typeOptions: {
			loadOptionsMethod: 'getTmSegments'
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
		description: 'Patch operations to perform on the segment',
		displayOptions: {
			show: {
				resource: [
					'translationMemory'
				],
				operation: [
					'api.tms.segments.patch'
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
								description: 'Add a new record to the segment',
							},
							{
								name: 'Replace',
								value: 'replace',
								description: 'Replace text of an existing record',
							},
							{
								name: 'Remove',
								value: 'remove',
								description: 'Remove a record from the segment',
							},
						],
					},
					// Add/Replace operation fields
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						default: '',
						description: 'Record text',
						displayOptions: {
							show: {
								patchOp: ['add', 'replace']
							}
						}
					},
					{
						displayName: 'Language Id',
						name: 'languageId',
						type: 'options',
						default: '',
						description: 'Language Identifier. Get via [List Supported Languages](#operation/api.languages.getMany)',
						typeOptions: {
							loadOptionsMethod: 'getLanguages'
						},
						displayOptions: {
							show: {
								patchOp: ['add']
							}
						}
					},
					// Replace/Remove operation fields
					{
						displayName: 'Record Id',
						name: 'recordId',
						type: 'number',
						default: 0,
						description: 'TM Segment Record Identifier',
						displayOptions: {
							show: {
								patchOp: ['replace', 'remove']
							}
						}
					},
				],
			},
		],
	},
];
