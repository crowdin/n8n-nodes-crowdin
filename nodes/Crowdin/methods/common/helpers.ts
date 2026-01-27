import type { ILoadOptionsFunctions } from 'n8n-workflow';

/**
 * Parameter helper functions for extracting values from node parameters
 * Returns null if parameter is not set or is 0/empty (indicating dependent field not yet selected)
 */

export function getProjectId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('projectId', 0) as number;
	return value || null;
}

export function getAiProviderId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('aiProviderId', 0) as number;
	return value || null;
}

export function getGlossaryId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('glossaryId', 0) as number;
	return value || null;
}

export function getScreenshotId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('screenshotId', 0) as number;
	return value || null;
}

export function getFileId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('fileId', 0) as number;
	return value || null;
}

export function getCommentId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('commentId', 0) as number;
	return value || null;
}

export function getLanguageId(context: ILoadOptionsFunctions): string | null {
	const value = context.getNodeParameter('languageId', 0) as string;
	return value || null;
}

export function getStringId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('stringId', 0) as number;
	return value || null;
}

export function getTmId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('tmId', 0) as number;
	return value || null;
}

export function getTeamId(context: ILoadOptionsFunctions): number | null {
	const value = context.getNodeParameter('teamId', 0) as number;
	return value || null;
}

export function getApplicationIdentifier(context: ILoadOptionsFunctions): string | null {
	const value = context.getNodeParameter('applicationIdentifier', 0) as string;
	return value || null;
}
