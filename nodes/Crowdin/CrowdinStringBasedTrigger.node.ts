import type {
	IDataObject,
	IHookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes } from 'n8n-workflow';

import {
	crowdinApiRequest,
	crowdinApiRequestAllItems,
} from './utils/api';
import { loadOptions } from './methods/crowdin';

// Account-level events that don't require a project
const ACCOUNT_EVENTS = ['project.created', 'project.deleted'];

// String-based project events from OpenAPI specification (no file.* events)
const STRING_BASED_EVENTS = [
	// Account-level events
	{
		name: '[Account] Project created',
		value: 'project.created',
		description: 'A project is created',
	},
	{
		name: '[Account] Project deleted',
		value: 'project.deleted',
		description: 'A project is deleted',
	},
	// Project events
	{
		name: 'Project fully translated',
		value: 'project.translated',
		description: 'All files are translated into one of the target languages',
	},
	{
		name: 'Project fully reviewed',
		value: 'project.approved',
		description: 'Translations in all files are approved for one of the target languages',
	},
	{
		name: 'Project successfully built',
		value: 'project.built',
		description: 'A project is built successfully',
	},
	{
		name: 'Project QA check finished',
		value: 'project.qa.finished',
		description: 'QA check for all strings in the project is finished',
	},
	// Source string events
	{
		name: 'Source string added',
		value: 'string.added',
		description: 'A new string is added to the project',
	},
	{
		name: 'Source string updated',
		value: 'string.updated',
		description: 'A string in the project is updated',
	},
	{
		name: 'Source string deleted',
		value: 'string.deleted',
		description: 'A string is deleted',
	},
	// String comment/issue events
	{
		name: 'String comment/issue created',
		value: 'stringComment.created',
		description: 'A comment or issue is added to the string',
	},
	{
		name: 'String comment/issue updated',
		value: 'stringComment.updated',
		description: 'A comment or issue is updated',
	},
	{
		name: 'String comment/issue deleted',
		value: 'stringComment.deleted',
		description: 'A comment or issue is deleted',
	},
	{
		name: 'String comment/issue restored',
		value: 'stringComment.restored',
		description: 'A comment or issue is restored',
	},
	// Suggested translation events
	{
		name: 'Suggested translation added',
		value: 'suggestion.added',
		description: 'A string in the project is translated',
	},
	{
		name: 'Suggested translation updated',
		value: 'suggestion.updated',
		description: 'A translation for a string in the project is updated',
	},
	{
		name: 'Suggested translation deleted',
		value: 'suggestion.deleted',
		description: 'One of the translations is deleted',
	},
	{
		name: 'Suggested translation approved',
		value: 'suggestion.approved',
		description: 'A translation for a string is approved',
	},
	{
		name: 'Suggested translation disapproved',
		value: 'suggestion.disapproved',
		description: 'Approval for a previously added translation is removed',
	},
	// Task events
	{
		name: 'Task added',
		value: 'task.added',
		description: 'A task is added to the project',
	},
	{
		name: 'Task status changed',
		value: 'task.statusChanged',
		description: 'A task status is changed',
	},
	{
		name: 'Task updated',
		value: 'task.updated',
		description: 'A task is updated',
	},
	{
		name: 'Task deleted',
		value: 'task.deleted',
		description: 'A task is deleted',
	},
	// Translation events
	{
		name: 'Exported translation updated',
		value: 'translation.updated',
		description: 'Final translation of a string is updated',
	},
];

export class CrowdinStringBasedTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Crowdin (String-Based) Trigger',
		name: 'crowdinStringBasedTrigger',
		icon: { light: 'file:../../icons/crowdin.svg', dark: 'file:../../icons/crowdin.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Starts the workflow when crowdin.com string-based project events occur',
		defaults: {
			name: 'Crowdin Trigger (String-Based)',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'crowdinOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['oAuth2'],
					},
				},
			},
			{
				name: 'crowdinApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['accessToken'],
					},
				},
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'OAuth2',
						value: 'oAuth2',
						description: 'Connect using OAuth2 (recommended)',
					},
					{
						name: 'Access Token',
						value: 'accessToken',
						description: 'Connect using Personal Access Token',
					},
				],
				default: 'oAuth2',
			},
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				default: 'project.translated',
				description: 'The event to listen for',
				options: STRING_BASED_EVENTS,
			},
			{
				displayName: 'Project Id',
				name: 'projectId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
				},
				required: true,
				displayOptions: {
					hide: {
						event: ACCOUNT_EVENTS,
					},
				},
				default: '',
				description: 'The project to listen for events',
			},
		],
		usableAsTool: true,
	};

	methods = { loadOptions };

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;
				const isAccountEvent = ACCOUNT_EVENTS.includes(event);

				try {
					if (isAccountEvent) {
						const webhooks = await crowdinApiRequestAllItems.call(this, 'GET', '/webhooks');

						for (const webhook of webhooks) {
							if (webhook.url === webhookUrl) {
								const events = webhook.events as string[];
								if (events && events.includes(event)) {
									const webhookData = this.getWorkflowStaticData('node');
									webhookData.webhookId = webhook.id;
									webhookData.isAccountWebhook = true;
									return true;
								}
							}
						}
					} else {
						const projectId = this.getNodeParameter('projectId') as number;

						const webhooks = await crowdinApiRequestAllItems.call(
							this,
							'GET',
							`/projects/${projectId}/webhooks`,
						);

						for (const webhook of webhooks) {
							if (webhook.url === webhookUrl) {
								const events = webhook.events as string[];
								if (events && events.includes(event)) {
									const webhookData = this.getWorkflowStaticData('node');
									webhookData.webhookId = webhook.id;
									webhookData.isAccountWebhook = false;
									webhookData.projectId = projectId;
									return true;
								}
							}
						}
					}

					return false;
				} catch {
					return false;
				}
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;
				const isAccountEvent = ACCOUNT_EVENTS.includes(event);

				try {
					if (isAccountEvent) {
						const response = await crowdinApiRequest.call(this, 'POST', '/webhooks', {
							name: `n8n: ${event}`,
							url: webhookUrl,
							events: [event],
							requestType: 'POST',
							isActive: true,
							batchingEnabled: false,
						});

						const webhookData = this.getWorkflowStaticData('node');
						webhookData.webhookId = (response.data as IDataObject).id;
						webhookData.isAccountWebhook = true;
					} else {
						const projectId = this.getNodeParameter('projectId') as number;

						const response = await crowdinApiRequest.call(
							this,
							'POST',
							`/projects/${projectId}/webhooks`,
							{
								name: `n8n: ${event}`,
								url: webhookUrl,
								events: [event],
								requestType: 'POST',
								isActive: true,
								batchingEnabled: false,
							},
						);

						const webhookData = this.getWorkflowStaticData('node');
						webhookData.webhookId = (response.data as IDataObject).id;
						webhookData.isAccountWebhook = false;
						webhookData.projectId = projectId;
					}

					return true;
				} catch (error) {
					const err = error as { message?: string; error?: { message?: string } };
					const message = err.error?.message || err.message || 'Unknown error';

					throw new NodeApiError(this.getNode(), { error: message } as JsonObject, {
						message: `Failed to create Crowdin webhook: ${message}`,
					});
				}
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookId = webhookData.webhookId as number;
				const isAccountWebhook = webhookData.isAccountWebhook as boolean;

				if (!webhookId) {
					return true;
				}

				try {
					if (isAccountWebhook) {
						await crowdinApiRequest.call(this, 'DELETE', `/webhooks/${webhookId}`);
					} else {
						const projectId = webhookData.projectId as number;
						await crowdinApiRequest.call(
							this,
							'DELETE',
							`/projects/${projectId}/webhooks/${webhookId}`,
						);
					}

					delete webhookData.webhookId;
					delete webhookData.isAccountWebhook;
					delete webhookData.projectId;
					return true;
				} catch {
					return true;
				}
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();

		// Handle batched events
		if (bodyData.events && Array.isArray(bodyData.events)) {
			return {
				workflowData: [
					(bodyData.events as IDataObject[]).map((eventData) => ({
						json: eventData,
					})),
				],
			};
		}

		// Single event - pass through all data from Crowdin
		return {
			workflowData: [[{ json: bodyData }]],
		};
	}
}
