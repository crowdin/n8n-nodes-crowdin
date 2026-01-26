// Auto-generated - do not edit manually

export interface WebhookEvent {
	name: string;
	value: string;
	description?: string;
}

/** Account-level events (no project required) */
export const ACCOUNT_LEVEL_EVENTS: string[] = ['project.created', 'project.deleted'];

/** Account-level events with display names */
export const ACCOUNT_EVENTS: WebhookEvent[] = [
	{
		name: '[Account] Project Created',
		value: 'project.created',
	},
	{
		name: '[Account] Project Deleted',
		value: 'project.deleted',
	}
];

/** Project-level events with display names */
export const PROJECT_EVENTS: WebhookEvent[] = [
	{
		name: 'Project Translated',
		value: 'project.translated',
		description: 'All strings in project are translated',
	},
	{
		name: 'Project Approved',
		value: 'project.approved',
		description: 'All strings in project are approved',
	},
	{
		name: 'Project Qa Finished',
		value: 'project.qa.finished',
		description: 'All strings in project QA check are finished',
	},
	{
		name: 'Project Built',
		value: 'project.built',
		description: 'Project are successfully built',
	},
	{
		name: 'Translation Updated',
		value: 'translation.updated',
		description: 'Final translation of string is updated (using Replace in suggestions feature)',
	},
	{
		name: 'String Added',
		value: 'string.added',
		description: 'Source string is added',
	},
	{
		name: 'String Updated',
		value: 'string.updated',
		description: 'Source string is updated',
	},
	{
		name: 'String Deleted',
		value: 'string.deleted',
		description: 'Source string is deleted',
	},
	{
		name: 'String Comment Created',
		value: 'stringComment.created',
		description: 'String comment/issue is added',
	},
	{
		name: 'String Comment Updated',
		value: 'stringComment.updated',
		description: 'String comment/issue is updated',
	},
	{
		name: 'String Comment Deleted',
		value: 'stringComment.deleted',
		description: 'String comment/issue is deleted',
	},
	{
		name: 'String Comment Restored',
		value: 'stringComment.restored',
		description: 'String comment/issue is restored',
	},
	{
		name: 'Suggestion Added',
		value: 'suggestion.added',
		description: 'One of source strings is translated',
	},
	{
		name: 'Suggestion Updated',
		value: 'suggestion.updated',
		description: 'Translation for source string is updated (using Replace in suggestions feature)',
	},
	{
		name: 'Suggestion Deleted',
		value: 'suggestion.deleted',
		description: 'One of translations is deleted',
	},
	{
		name: 'Suggestion Approved',
		value: 'suggestion.approved',
		description: 'Translation for string is approved',
	},
	{
		name: 'Suggestion Disapproved',
		value: 'suggestion.disapproved',
		description: 'Approval for previously added translation is removed',
	},
	{
		name: 'Task Added',
		value: 'task.added',
		description: 'Task is added',
	},
	{
		name: 'Task Status Changed',
		value: 'task.statusChanged',
		description: 'Task status was changed',
	},
	{
		name: 'Task Updated',
		value: 'task.updated',
		description: 'Task is updated',
	},
	{
		name: 'Task Deleted',
		value: 'task.deleted',
		description: 'Task is deleted',
	}
];

/** All events combined for trigger node options */
export const ALL_EVENTS: WebhookEvent[] = [...ACCOUNT_EVENTS, ...PROJECT_EVENTS];
