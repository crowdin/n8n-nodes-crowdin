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
import { ALL_EVENTS, ACCOUNT_LEVEL_EVENTS } from './triggers/crowdin/stringBased/events';

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
				options: ALL_EVENTS,
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
						event: ACCOUNT_LEVEL_EVENTS,
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
				const isAccountEvent = ACCOUNT_LEVEL_EVENTS.includes(event);

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
				const isAccountEvent = ACCOUNT_LEVEL_EVENTS.includes(event);

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
