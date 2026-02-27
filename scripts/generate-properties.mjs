#!/usr/bin/env node

/**
 * n8n Properties Generator from OpenAPI Specs
 * 
 * This script generates n8n node properties from Crowdin OpenAPI specifications.
 * It's used during development/build time only.
 * 
 * Run: npm run generate:properties
 */

import { N8NPropertiesBuilder, DefaultOperationParser, OperationsCollector, DefaultResourceParser } from '@devlikeapro/n8n-openapi-node';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import lodash from 'lodash';
import { stringify } from 'javascript-stringify';
import yaml from 'js-yaml';

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nodesDir = path.join(__dirname, '..', 'nodes', 'Crowdin');

const OPENAPI_BASE_URL = 'https://support.crowdin.com/src/assets/api';
const STRINGIFY_OPTIONS = { indent: '\t' };

/** OpenAPI specs configurations for different Crowdin products */
const OPENAPI_CONFIGS = [
	{
		name: 'Crowdin File-Based',
		url: `${OPENAPI_BASE_URL}/crowdin/file-based.yml`,
		outputDir: 'properties/crowdin/fileBased',
	},
	{
		name: 'Crowdin String-Based',
		url: `${OPENAPI_BASE_URL}/crowdin/string-based.yml`,
		outputDir: 'properties/crowdin/stringBased',
	},
	{
		name: 'Crowdin Enterprise File-Based',
		url: `${OPENAPI_BASE_URL}/enterprise/file-based.yml`,
		outputDir: 'properties/enterprise/fileBased',
	},
	{
		name: 'Crowdin Enterprise String-Based',
		url: `${OPENAPI_BASE_URL}/enterprise/string-based.yml`,
		outputDir: 'properties/enterprise/stringBased',
	},
];

/** 
 * Operations to ignore during generation (not supported, complex format, etc.)
 * These are NOT defined in extensions - just skipped entirely.
 * 
 * Note: Operations defined in extensions (common/extensions, crowdin/common/extensions, etc.)
 * are automatically detected and skipped - no need to list them here.
 */
const IGNORED_OPERATIONS = [
	// Enterprise fine-tuning
	'api.ai.prompts.fine-tuning.datasets.post',
	'api.ai.prompts.fine-tuning.datasets.get',
	'api.ai.prompts.fine-tuning.datasets.download.get',
	'api.ai.prompts.fine-tuning.jobs.post',
	'api.ai.prompts.fine-tuning.jobs.get',
	'api.ai.prompts.fine-tuning.jobs.getMany',
	'api.ai.prompts.fine-tuning.jobs.events.getMany',
	// Crowdin fine-tuning
	'api.users.ai.prompts.fine-tuning.datasets.get',
	'api.users.ai.prompts.fine-tuning.datasets.download.get',
	'api.users.ai.prompts.fine-tuning.jobs.get',
	// Enterprise prompt completions
	'api.ai.prompts.completions.post',
	'api.ai.prompts.completions.get',
	'api.ai.prompts.completions.delete',
	'api.ai.prompts.completions.download.download',
	// Crowdin prompt completions
	'api.users.ai.prompts.completions.get',
	'api.users.ai.prompts.completions.delete',
	'api.users.ai.prompts.completions.download.download',
	// AI Proxy Chat Completion (provider-specific payload format)
	'api.ai.providers.chat.completions.post',
	'api.users.ai.providers.chat.completions.post',
	// Batch operations (complex JSON Patch format)
	'api.projects.strings.batchPatch',
	'api.projects.comments.batchPatch',
	'api.projects.approvals.patch',
	'api.projects.translations.patch',
	// Permissions batch operations (complex JSON Patch format)
	'api.users.projects.permissions.patch',
	'api.teams.projects.permissions.patch',
	// AI Providers Gateway operations
	'api.ai.providers.gateway.crowdin.get',
	'api.ai.providers.gateway.crowdin.post',
	'api.ai.providers.gateway.crowdin.put',
	'api.ai.providers.gateway.crowdin.patch',
	'api.ai.providers.gateway.crowdin.delete',
	'api.ai.providers.gateway.enterprise.get',
	'api.ai.providers.gateway.enterprise.post',
	'api.ai.providers.gateway.enterprise.put',
	'api.ai.providers.gateway.enterprise.patch',
	'api.ai.providers.gateway.enterprise.delete',
];


// ============================================================================
// LOAD OPTIONS CONFIGURATION
// Mapping of field names to dynamic dropdown configurations
// ============================================================================

/**
 * Single-select field configurations
 * expectedType: the n8n property type to match ('number' by default, 'string' for language codes etc.)
 * @type {Record<string, {method: string, dependsOn?: string[], matchResource?: string, matchOperation?: string|string[], expectedType?: string}>}
 */
const SINGLE_SELECT_OPTIONS = {
	// Organization/Account level (no dependencies)
	groupId: { method: 'getGroups' },
	projectId: { method: 'getProjects' },
	dialectOf: { method: 'getLanguages', expectedType: 'string' },
	languageId: { method: 'getLanguages', expectedType: 'string' },
	sourceLanguageId: { method: 'getLanguages', expectedType: 'string' },
	targetLanguageId: { method: 'getLanguages', expectedType: 'string' },
	inContextPseudoLanguageId: { method: 'getLanguages', expectedType: 'string' },
	glossaryId: { method: 'getGlossaries' },
	defaultGlossaryId: { method: 'getGlossaries' },
	tmId: { method: 'getTranslationMemories' },
	defaultTmId: { method: 'getTranslationMemories' },
	mtId: { method: 'getMTEngines' },
	engineId: { method: 'getMTEngines' },
	mtEngineId: { method: 'getMTEngines' },
	promptId: { method: 'getAiPrompts' },
	aiPromptId: { method: 'getAiPrompts' },
	preTranslationAiPromptId: { method: 'getAiPrompts' },
	assistActionAiPromptId: { method: 'getAiPrompts' },
	editorSuggestionAiPromptId: { method: 'getAiPrompts' },
	alignmentActionAiPromptId: { method: 'getAiPrompts' },
	qaCheckActionAiPromptId: { method: 'getAiPrompts' },
	aiProviderId: { method: 'getAiProviders' },
	aiSnippetId: { method: 'getAiSnippets' },
	teamId: { method: 'getTeams' },
	teamMemberId: { method: 'getTeamMembers', dependsOn: ['teamId'], matchResource: 'teams', targetField: 'memberId' },
	userId: { method: 'getUsers' },
	authorId: { method: 'getUsers' },
	installedBy: { method: 'getUsers' },
	storageId: { method: 'getStorages' },
	srxStorageId: { method: 'getStorages' },
	customSpellcheckerId: { method: 'getCustomSpellcheckers' },
	externalQaCheckId: { method: 'getExternalQaChecks' },
	fieldId: { method: 'getFields' },
	organizationWebhookId: { method: 'getOrganizationWebhooks' },
	reportSettingsTemplateId: { method: 'getReportSettingsTemplates' },
	identifier: { method: 'getApplicationInstallations', matchResource: 'applications', expectedType: 'string' },
	applicationIdentifier: { method: 'getApplicationInstallations', expectedType: 'string' },
	savingsReportSettingsTemplateId: { method: 'getReportSettingsTemplates' },
	vendorId: { method: 'getVendors' },
	securityLogId: { method: 'getSecurityLogs' },

	// Context-dependent fields (match by resource/operation)
	templateId: { 
		method: 'getWorkflowTemplates', 
		matchOperation: ['api.projects.post', 'api.projects.patch', 'api.workflow-templates.get'] 
	},
	archiveId: { 
		method: 'getReportArchives', 
		matchResource: 'reports' 
	},
	parentId: { 
		method: 'getGroups', 
		matchOperation: ['api.groups.getMany', 'api.groups.post', 'api.groups.patch']
	},
	integrationCrowdinFileId: { 
		method: 'getIntegrationCrowdinFiles', 
		dependsOn: ['applicationIdentifier', 'projectId'], 
		matchResource: 'integrations',
		targetField: 'fileId'
	},

	// AI Provider scoped
	aiModelId: { method: 'getAiProviderModels', dependsOn: ['aiProviderId'], expectedType: 'string' },

	// Project-scoped
	branchId: { method: 'getBranches', dependsOn: ['projectId'] },
	fileId: { method: 'getProjectFiles', dependsOn: ['projectId'] },
	directoryId: { method: 'getProjectDirectories', dependsOn: ['projectId'] },
	labelId: { method: 'getProjectLabels', dependsOn: ['projectId'] },
	memberId: { method: 'getProjectMembers', dependsOn: ['projectId'] },
	workflowStepId: { method: 'getProjectWorkflowSteps', dependsOn: ['projectId'] },
	stepId: { method: 'getProjectWorkflowSteps', dependsOn: ['projectId'] },
	stringId: { method: 'getProjectStrings', dependsOn: ['projectId'] },
	screenshotId: { method: 'getProjectScreenshots', dependsOn: ['projectId'] },
	bundleId: { method: 'getProjectBundles', dependsOn: ['projectId'] },
	hash: { method: 'getProjectDistributions', dependsOn: ['projectId'], matchResource: 'distributions', expectedType: 'string' },
	taskId: { method: 'getProjectTasks', dependsOn: ['projectId'] },
	precedingTaskId: { method: 'getProjectTasks', dependsOn: ['projectId'] },
	fileFormatSettingsId: { method: 'getProjectFileFormatSettings', dependsOn: ['projectId'] },
	buildId: { 
		method: 'getProjectBuilds', 
		dependsOn: ['projectId'],
		matchOperation: [
			'api.projects.translations.builds.get',
			'api.projects.translations.builds.delete',
			'api.projects.translations.builds.download.download'
		]
	},
	reviewedBuildId: { 
		method: 'getProjectReviewedBuilds', 
		dependsOn: ['projectId'],
		matchOperation: [
			'api.projects.strings.reviewed-builds.get',
			'api.projects.strings.reviewed-builds.download.download'
		],
		targetField: 'buildId'
	},
	commentId: { method: 'getProjectComments', dependsOn: ['projectId'] },
	approvalId: { method: 'getProjectApprovals', dependsOn: ['projectId'] },
	voteId: { method: 'getProjectVotes', dependsOn: ['projectId'] },
	taskSettingsTemplateId: { method: 'getProjectTaskSettingsTemplates', dependsOn: ['projectId'] },
	webhookId: { method: 'getProjectWebhooks', dependsOn: ['projectId'] },
	systemStringsExporterSettingsId: { method: 'getProjectStringsExporterSettings', dependsOn: ['projectId'] },

	// Glossary-scoped
	conceptId: { method: 'getGlossaryConcepts', dependsOn: ['glossaryId'] },
	termId: { method: 'getGlossaryTerms', dependsOn: ['glossaryId'] },
	translationOfTermId: { method: 'getGlossaryTerms', dependsOn: ['glossaryId'] },

	// TM-scoped
	segmentId: { method: 'getTmSegments', dependsOn: ['tmId'] },

	// File-scoped
	revisionId: { method: 'getFileRevisions', dependsOn: ['projectId', 'fileId'], matchResource: 'sourceFiles' },
	referenceId: { method: 'getFileReferences', dependsOn: ['projectId', 'fileId'], matchResource: 'sourceFiles' },

	// Comment-scoped
	attachmentId: { 
		method: 'getCommentAttachments', 
		dependsOn: ['projectId', 'commentId'], 
		matchOperation: 'api.projects.comments.attachments.delete'
	},

	// Screenshot-scoped
	tagId: { 
		method: 'getScreenshotTags', 
		dependsOn: ['projectId', 'screenshotId'],
		matchResource: 'screenshots'
	},
};

/**
 * Multi-select field configurations (arrays of IDs)
 * expectedType: the n8n property type to match ('number' by default, 'string' for language codes etc.)
 * @type {Record<string, {method: string, dependsOn?: string[], matchOperation?: string, expectedType?: string}>}
 */
const MULTI_SELECT_OPTIONS = {
	// Organization/Account level (string-type arrays - language codes)
	languageIds: { method: 'getLanguages', expectedType: 'string' },
	targetLanguageIds: { method: 'getLanguages', expectedType: 'string' },
	sourceLanguageIds: { method: 'getLanguages', expectedType: 'string' },
	enabledLanguageIds: { method: 'getLanguages', expectedType: 'string' },
	excludedTargetLanguages: { method: 'getLanguages', expectedType: 'string' },
	
	// Organization/Account level (number-type arrays - IDs)
	projectIds: { method: 'getProjects' },
	enabledProjectIds: { method: 'getProjects' },
	groupIds: { method: 'getGroups' },
	tmIds: { method: 'getTranslationMemories' },
	glossaryIds: { method: 'getGlossaries' },
	teamIds: { method: 'getTeams' },
	userIds: { method: 'getUsers' },
	taskReviewerIds: { method: 'getUsers' },
	assigneeIds: { method: 'getUsers' },
	creatorIds: { method: 'getUsers' },
	externalQaCheckIds: { method: 'getExternalQaChecks' },
	customQaCheckIds: { method: 'getCustomQaChecks' },
	promptIds: { method: 'getAiPrompts' },
	aiPromptIds: { method: 'getAiPrompts' },
	mtIds: { method: 'getMTEngines' },

	// Context-dependent
	attachmentIds: { method: 'getStorages', matchOperation: ['api.users.ai.translate.strings.post', 'api.ai.translate.strings.post'] },
	snippets: { method: 'getAiSnippetsByPlaceholder', expectedType: 'string' },

	// Project-scoped arrays
	fileIds: { method: 'getProjectFiles', dependsOn: ['projectId'] },
	labelIds: { method: 'getProjectLabels', dependsOn: ['projectId'] },
	excludeLabelIds: { method: 'getProjectLabels', dependsOn: ['projectId'] },
	attachLabelIds: { method: 'getProjectLabels', dependsOn: ['projectId'] },
	detachLabelIds: { method: 'getProjectLabels', dependsOn: ['projectId'] },
	branchIds: { method: 'getBranches', dependsOn: ['projectId'] },
	directoryIds: { method: 'getProjectDirectories', dependsOn: ['projectId'] },
	stringIds: { method: 'getProjectStrings', dependsOn: ['projectId'] },
	screenshotIds: { method: 'getProjectScreenshots', dependsOn: ['projectId'] },
	bundleIds: { method: 'getProjectBundles', dependsOn: ['projectId'] },
	taskIds: { method: 'getProjectTasks', dependsOn: ['projectId'] },
	workflowStepIds: { method: 'getProjectWorkflowSteps', dependsOn: ['projectId'] },
};

// ============================================================================
// TRIGGER EVENTS CONFIGURATION
// Output directories for auto-generated trigger events
// ============================================================================

/** Trigger events output configurations (parallel to OPENAPI_CONFIGS) */
const TRIGGER_EVENTS_CONFIGS = {
	'Crowdin File-Based': {
		outputDir: 'triggers/crowdin/fileBased',
		isEnterprise: false,
	},
	'Crowdin String-Based': {
		outputDir: 'triggers/crowdin/stringBased',
		isEnterprise: false,
	},
	'Crowdin Enterprise File-Based': {
		outputDir: 'triggers/enterprise/fileBased',
		isEnterprise: true,
	},
	'Crowdin Enterprise String-Based': {
		outputDir: 'triggers/enterprise/stringBased',
		isEnterprise: true,
	},
};

// ============================================================================
// TRIGGER EVENTS EXTRACTION & GENERATION
// Extract events from webhooks schemas and generate events.ts files
// ============================================================================

/**
 * Parse event descriptions from OpenAPI field description text.
 * Format: "'event.name' — description" or "'event.name' - description"
 * @param {string} descriptionText - Description text from OpenAPI
 * @returns {Map<string, string>} Map of event value to description
 */
function parseEventDescriptions(descriptionText) {
	const descriptions = new Map();
	if (!descriptionText) return descriptions;
	
	// Match patterns like: 'event.name' — description OR 'event.name' - description
	const regex = /['"]([^'"]+)['"]\s*[—\-–]\s*(.+?)(?=\n|$)/g;
	let match;
	
	while ((match = regex.exec(descriptionText)) !== null) {
		const eventValue = match[1].trim();
		let description = match[2].trim();
		// Clean up description - remove leading asterisks and extra whitespace
		description = description.replace(/^\*\s*/, '').trim();
		descriptions.set(eventValue, description);
	}
	
	return descriptions;
}

/**
 * Generate human-readable display name from event value.
 * @param {string} eventValue - Event value like 'file.added' or 'stringComment.created'
 * @param {string} [prefix] - Optional prefix like '[Account]' or '[Organization]'
 * @returns {string} Display name like 'File Added' or '[Account] Project Created'
 */
function generateEventDisplayName(eventValue, prefix = '') {
	// lodash.startCase handles camelCase, dots, etc.: 'stringComment.created' -> 'String Comment Created'
	const displayName = lodash.startCase(eventValue);
	return prefix ? `${prefix} ${displayName}` : displayName;
}

/**
 * Extract events from webhooks schema in OpenAPI document.
 * Looks for POST operation on webhooks endpoints and extracts events enum.
 * @param {object} doc - OpenAPI document
 * @param {string} pathPattern - Path pattern to match (e.g., '/projects/{projectId}/webhooks' or '/webhooks')
 * @returns {{events: string[], descriptions: Map<string, string>}|null}
 */
function extractEventsFromWebhooksSchema(doc, pathPattern) {
	if (!doc.paths) return null;
	
	// Find the matching path
	const matchingPath = Object.keys(doc.paths).find(p => p === pathPattern || p.endsWith(pathPattern));
	if (!matchingPath) return null;
	
	const pathItem = doc.paths[matchingPath];
	const postOp = pathItem?.post;
	if (!postOp) return null;
	
	// Get request body schema
	const requestBody = postOp.requestBody;
	if (!requestBody) return null;
	
	const content = requestBody.content?.['application/json'];
	if (!content?.schema) return null;
	
	let schema = content.schema;
	
	// Resolve $ref if needed
	if (schema.$ref) {
		schema = resolveRef(doc, schema.$ref);
	}
	if (!schema) return null;
	
	// Find events property
	const eventsProperty = schema.properties?.events;
	if (!eventsProperty) return null;
	
	// Get enum values from items
	let eventEnums = [];
	if (eventsProperty.items?.enum) {
		eventEnums = eventsProperty.items.enum;
	} else if (eventsProperty.items?.$ref) {
		const itemsSchema = resolveRef(doc, eventsProperty.items.$ref);
		if (itemsSchema?.enum) {
			eventEnums = itemsSchema.enum;
		}
	}
	
	// Parse descriptions from the events property description
	const descriptions = parseEventDescriptions(eventsProperty.description);
	
	return {
		events: eventEnums,
		descriptions,
	};
}

/**
 * Generate TypeScript content for events.ts file.
 * @param {object} params - Generation parameters
 * @param {string[]} params.projectEvents - Project-level event values
 * @param {Map<string, string>} params.projectDescriptions - Project event descriptions
 * @param {string[]} params.orgEvents - Organization/account-level event values
 * @param {Map<string, string>} params.orgDescriptions - Org event descriptions
 * @param {boolean} params.isEnterprise - Whether this is Enterprise (Organization) or Crowdin (Account)
 * @returns {string} TypeScript file content
 */
function generateEventsFileContent({ projectEvents, projectDescriptions, orgEvents, orgDescriptions, isEnterprise }) {
	const prefix = isEnterprise ? '[Organization]' : '[Account]';
	const levelName = isEnterprise ? 'ORGANIZATION' : 'ACCOUNT';
	
	// Generate org-level events array (string values only - for checking if event is org-level)
	const orgLevelEventsArray = orgEvents.map(e => `'${e}'`).join(', ');
	
	// Generate org events with display names
	const orgEventsWithNames = orgEvents.map(eventValue => {
		const displayName = generateEventDisplayName(eventValue, prefix);
		const description = orgDescriptions.get(eventValue);
		const descLine = description ? `\n\t\tdescription: '${escapeString(lodash.upperFirst(description))}',` : '';
		return `\t{\n\t\tname: '${displayName}',\n\t\tvalue: '${eventValue}',${descLine}\n\t}`;
	});
	
	// Generate project events with display names (excluding org events)
	const projectOnlyEvents = projectEvents.filter(e => !orgEvents.includes(e));
	const projectEventsWithNames = projectOnlyEvents.map(eventValue => {
		const displayName = generateEventDisplayName(eventValue);
		const description = projectDescriptions.get(eventValue);
		const descLine = description ? `\n\t\tdescription: '${escapeString(lodash.upperFirst(description))}',` : '';
		return `\t{\n\t\tname: '${displayName}',\n\t\tvalue: '${eventValue}',${descLine}\n\t}`;
	});
	
	return `// Auto-generated - do not edit manually

export interface WebhookEvent {
\tname: string;
\tvalue: string;
\tdescription?: string;
}

/** ${isEnterprise ? 'Organization' : 'Account'}-level events (no project required) */
export const ${levelName}_LEVEL_EVENTS: string[] = [${orgLevelEventsArray}];

/** ${isEnterprise ? 'Organization' : 'Account'}-level events with display names */
export const ${levelName}_EVENTS: WebhookEvent[] = [
${orgEventsWithNames.join(',\n')}
];

/** Project-level events with display names */
export const PROJECT_EVENTS: WebhookEvent[] = [
${projectEventsWithNames.join(',\n')}
];

/** All events combined for trigger node options */
export const ALL_EVENTS: WebhookEvent[] = [...${levelName}_EVENTS, ...PROJECT_EVENTS];
`;
}

/**
 * Escape string for TypeScript output (handle quotes and special chars).
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeString(str) {
	if (!str) return '';
	return str
		.replace(/\\/g, '\\\\')
		.replace(/'/g, "\\'")
		.replace(/\n/g, '\\n');
}


/**
 * Generate trigger events file for a config.
 * @param {object} doc - OpenAPI document
 * @param {object} config - OpenAPI config (name, url, outputDir)
 */
function generateTriggerEvents(doc, config) {
	const triggerConfig = TRIGGER_EVENTS_CONFIGS[config.name];
	if (!triggerConfig) {
		console.log(`  No trigger config for ${config.name}, skipping events generation`);
		return;
	}
	
	// Extract project webhooks events
	const projectWebhooks = extractEventsFromWebhooksSchema(doc, '/projects/{projectId}/webhooks');
	if (!projectWebhooks || projectWebhooks.events.length === 0) {
		console.log(`  No project webhook events found for ${config.name}`);
		return;
	}
	
	// Extract organization/account webhooks events
	const orgWebhooks = extractEventsFromWebhooksSchema(doc, '/webhooks');
	const orgEvents = orgWebhooks?.events || [];
	const orgDescriptions = orgWebhooks?.descriptions || new Map();
	
	// Generate events file content
	const content = generateEventsFileContent({
		projectEvents: projectWebhooks.events,
		projectDescriptions: projectWebhooks.descriptions,
		orgEvents,
		orgDescriptions,
		isEnterprise: triggerConfig.isEnterprise,
	});
	
	// Write events file
	const outputDir = path.join(nodesDir, triggerConfig.outputDir);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	
	const outputPath = path.join(outputDir, 'events.ts');
	fs.writeFileSync(outputPath, content);
	
	console.log(`  Generated ${triggerConfig.outputDir}/events.ts (${projectWebhooks.events.length} project events, ${orgEvents.length} org events)`);
}

// ============================================================================
// EXTENSION OPERATIONS DETECTION
// Scan extension files to find manually defined operations to skip
// ============================================================================

/**
 * Scan extension files and extract operation IDs that are manually defined.
 * These operations will be skipped during auto-generation.
 * Also checks fileBased/stringBased subdirectories automatically.
 */
function getExtensionOperationIds() {
	const baseExtensionDirs = [
		path.join(nodesDir, 'properties', 'common', 'extensions'),
		path.join(nodesDir, 'properties', 'crowdin', 'common', 'extensions'),
		path.join(nodesDir, 'properties', 'enterprise', 'common', 'extensions'),
	];
	
	// Build full list including fileBased/stringBased subdirectories
	const extensionDirs = [];
	for (const baseDir of baseExtensionDirs) {
		extensionDirs.push(baseDir);
		extensionDirs.push(path.join(baseDir, 'fileBased'));
		extensionDirs.push(path.join(baseDir, 'stringBased'));
	}
	
	const operationIds = new Set();
	
	for (const dir of extensionDirs) {
		if (!fs.existsSync(dir)) continue;
		
		const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
		
		for (const file of files) {
			const content = fs.readFileSync(path.join(dir, file), 'utf-8');
			// Match operation values: value: 'api.xxx.xxx'
			const matches = content.matchAll(/value:\s*['"]([^'"]+)['"]/g);
			for (const match of matches) {
				const value = match[1];
				if (value.startsWith('api.')) {
					operationIds.add(value);
				}
			}
		}
	}
	
	return operationIds;
}

// Combine ignored operations with dynamically detected extension operations
const extensionOperations = getExtensionOperationIds();
const SKIP_OPERATIONS = [...IGNORED_OPERATIONS, ...extensionOperations];

// ============================================================================
// CUSTOM PARSERS
// Override default parsers from n8n-openapi-node
// ============================================================================

class CustomResourceParser extends DefaultResourceParser {
	name(tag) {
		return tag.name;
	}

	value(tag) {
		return lodash.camelCase(tag.name);
	}
}

/** Set of operationIds to skip (built dynamically from oneOf/anyOf detection) */
let dynamicSkipOperations = new Set();

class CustomOperationParser extends DefaultOperationParser {
	shouldSkip(operation, context) {
		if (operation.deprecated) return true;
		if (SKIP_OPERATIONS.includes(operation.operationId)) return true;
		if (dynamicSkipOperations.has(operation.operationId)) return true;
		// PATCH methods are pre-processed to have normal schema, so they're not skipped
		return false;
	}

	name(operation, context) {
		return operation.summary;
	}

	value(operation, context) {
		return operation.operationId;
	}
}

/**
 * Fixed OperationsCollector that uses operation.value instead of operation.name
 * for displayOptions. This fixes the bug in @devlikeapro/n8n-openapi-node
 * where fields don't show up because displayOptions references wrong operation identifier.
 * 
 * @see https://github.com/devlikeapro/n8n-openapi-node/blob/main/src/OperationsCollector.ts#L79
 */
class FixedOperationsCollector extends OperationsCollector {
	_visitOperation(operation, context) {
		if (this.operationParser.shouldSkip(operation, context)) {
			return;
		}

		const { option, fields: operationFields } = this.parseOperation(operation, context);
		const resources = operation.tags.map((tag) => this.resourceParser.value({ name: tag }));

		for (const resourceName of resources) {
			const fields = lodash.cloneDeep(operationFields);
			// FIX: Use option.value instead of option.name for displayOptions
			this.addDisplayOption(fields, resourceName, option.value);
			this.optionsByResource.add(resourceName, option);
			this._fields.push(...fields);
		}
	}

	addDisplayOption(fields, resource, operation) {
		const displayOptions = {
			show: {
				resource: [resource],
				operation: [operation],
			},
		};
		fields.forEach((field) => {
			field.displayOptions = displayOptions;
		});
	}
}

const BUILDER_CONFIG = {
	operation: new CustomOperationParser(),
	resource: new CustomResourceParser(),
	OperationsCollector: FixedOperationsCollector,
};

// ============================================================================
// ONEOF/ANYOF DETECTION
// Find endpoints with unsupported schema constructs
// ============================================================================

/**
 * Resolve $ref in OpenAPI document
 * @param {object} doc - OpenAPI document
 * @param {string} ref - Reference string (e.g., "#/components/schemas/Foo")
 * @returns {object|null} Resolved schema or null
 */
function resolveRef(doc, ref) {
	if (!ref || !ref.startsWith('#/')) return null;
	const path = ref.slice(2).split('/');
	let current = doc;
	for (const segment of path) {
		if (!current || typeof current !== 'object') return null;
		current = current[segment];
	}
	return current;
}

/**
 * Find oneOf/anyOf in a schema recursively
 * @param {object} doc - OpenAPI document (for resolving refs)
 * @param {object} schema - Schema to analyze
 * @param {string} path - Current path for reporting
 * @param {Set} visited - Set of visited refs to avoid cycles
 * @returns {Array<{path: string, type: string, options: number}>}
 */
function findOneOfAnyOfInSchema(doc, schema, path = '', visited = new Set()) {
	if (!schema || typeof schema !== 'object') return [];

	const results = [];

	// Handle $ref
	if (schema.$ref) {
		if (visited.has(schema.$ref)) return results;
		visited.add(schema.$ref);
		const resolved = resolveRef(doc, schema.$ref);
		if (resolved) {
			results.push(...findOneOfAnyOfInSchema(doc, resolved, path, visited));
		}
		return results;
	}

	// Check for oneOf/anyOf at current level
	if (schema.oneOf) {
		results.push({ path: path || 'root', type: 'oneOf', options: schema.oneOf.length });
	}
	if (schema.anyOf) {
		results.push({ path: path || 'root', type: 'anyOf', options: schema.anyOf.length });
	}

	// Recurse into properties
	if (schema.properties) {
		for (const [propName, propSchema] of Object.entries(schema.properties)) {
			const propPath = path ? `${path}.${propName}` : propName;
			results.push(...findOneOfAnyOfInSchema(doc, propSchema, propPath, visited));
		}
	}

	// Recurse into items (arrays)
	if (schema.items) {
		results.push(...findOneOfAnyOfInSchema(doc, schema.items, path ? `${path}[]` : 'items[]', visited));
	}

	// Recurse into allOf
	if (schema.allOf) {
		for (const subSchema of schema.allOf) {
			results.push(...findOneOfAnyOfInSchema(doc, subSchema, path, visited));
		}
	}

	// Recurse into oneOf/anyOf items
	if (schema.oneOf) {
		for (let i = 0; i < schema.oneOf.length; i++) {
			results.push(...findOneOfAnyOfInSchema(doc, schema.oneOf[i], `${path}[oneOf:${i}]`, visited));
		}
	}
	if (schema.anyOf) {
		for (let i = 0; i < schema.anyOf.length; i++) {
			results.push(...findOneOfAnyOfInSchema(doc, schema.anyOf[i], `${path}[anyOf:${i}]`, visited));
		}
	}

	// Recurse into additionalProperties
	if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
		results.push(...findOneOfAnyOfInSchema(doc, schema.additionalProperties, `${path}[*]`, visited));
	}

	return results;
}

/**
 * Get request body schema from an operation
 * @param {object} doc - OpenAPI document
 * @param {object} operation - Operation object
 * @returns {object|null} Request body schema or null
 */
function getRequestBodySchema(doc, operation) {
	const requestBody = operation.requestBody;
	if (!requestBody) return null;

	// Handle $ref in requestBody
	let body = requestBody;
	if (requestBody.$ref) {
		body = resolveRef(doc, requestBody.$ref);
		if (!body) return null;
	}

	const content = body.content;
	if (!content) return null;

	const mediaType = content['application/json'] || content['multipart/form-data'] || Object.values(content)[0];
	return mediaType?.schema || null;
}

// ============================================================================
// JSON PATCH SUPPORT
// Functions for handling PATCH operations that use JSON Patch format (RFC 6902)
// ============================================================================

/**
 * Check if a schema is a JSON Patch schema (array of operations with op/path/value)
 * @param {object} doc - OpenAPI document
 * @param {object} schema - Schema to check
 * @returns {boolean}
 */
function isJsonPatchSchema(doc, schema) {
	if (!schema) return false;
	
	// Resolve ref if needed
	let resolved = schema;
	if (schema.$ref) {
		resolved = resolveRef(doc, schema.$ref);
		if (!resolved) return false;
	}
	
	// JSON Patch is an array of operations
	if (resolved.type !== 'array') return false;
	
	// Check if items have op and path properties
	let itemsSchema = resolved.items;
	if (!itemsSchema) return false;
	
	if (itemsSchema.$ref) {
		itemsSchema = resolveRef(doc, itemsSchema.$ref);
		if (!itemsSchema) return false;
	}
	
	const props = itemsSchema.properties || {};
	return props.op && props.path;
}

/**
 * Extract allowed paths from a JSON Patch operation schema
 * @param {object} doc - OpenAPI document
 * @param {object} schema - JSON Patch schema (array type)
 * @returns {string[]} Array of allowed paths like ['/name', '/title', '/description']
 */
function extractPatchPaths(doc, schema) {
	if (!schema) return [];
	
	// Resolve ref if needed
	let resolved = schema;
	if (schema.$ref) {
		resolved = resolveRef(doc, schema.$ref);
		if (!resolved) return [];
	}
	
	// Get items schema
	let itemsSchema = resolved.items;
	if (!itemsSchema) return [];
	
	if (itemsSchema.$ref) {
		itemsSchema = resolveRef(doc, itemsSchema.$ref);
		if (!itemsSchema) return [];
	}
	
	// Get path property enum
	const pathProp = itemsSchema.properties?.path;
	if (!pathProp) return [];
	
	return pathProp.enum || [];
}

/**
 * Find the corresponding POST operation for a PATCH operation
 * @param {object} doc - OpenAPI document
 * @param {string} patchPath - Path of the PATCH operation (e.g., '/projects/{projectId}/branches/{branchId}')
 * @returns {object|null} POST operation or null
 */
function findCorrespondingPostOperation(doc, patchPath) {
	// PATCH path usually has an ID at the end, POST path doesn't
	// e.g., PATCH /projects/{projectId}/branches/{branchId} -> POST /projects/{projectId}/branches
	
	// Remove the last path segment if it looks like an ID parameter
	const segments = patchPath.split('/');
	const lastSegment = segments[segments.length - 1];
	
	// Check if last segment is a parameter like {branchId}
	if (lastSegment.startsWith('{') && lastSegment.endsWith('}')) {
		const postPath = segments.slice(0, -1).join('/');
		const pathItem = doc.paths?.[postPath];
		if (pathItem?.post) {
			return pathItem.post;
		}
	}
	
	return null;
}

/**
 * Get field info from POST schema for given path
 * @param {object} doc - OpenAPI document
 * @param {object} postSchema - POST request body schema
 * @param {string} patchPath - JSON Pointer path like '/name' or '/settings/enabled'
 * @returns {object|null} Field schema info or null
 */
function getFieldInfoFromPostSchema(doc, postSchema, patchPath) {
	if (!postSchema || !patchPath) return null;
	
	// Convert JSON Pointer to property path
	// '/name' -> 'name'
	// '/settings/enabled' -> 'settings.enabled'
	const propPath = patchPath.substring(1).split('/');
	
	let resolved = postSchema;
	if (resolved.$ref) {
		resolved = resolveRef(doc, resolved.$ref);
		if (!resolved) return null;
	}
	
	// Navigate through allOf if present
	if (resolved.allOf) {
		for (const subSchema of resolved.allOf) {
			const result = getFieldInfoFromPostSchema(doc, subSchema, patchPath);
			if (result) return result;
		}
		return null;
	}
	
	// Handle array schemas - look into items
	if (resolved.type === 'array' && resolved.items) {
		let itemsSchema = resolved.items;
		if (itemsSchema.$ref) {
			itemsSchema = resolveRef(doc, itemsSchema.$ref);
		}
		if (itemsSchema) {
			return getFieldInfoFromPostSchema(doc, itemsSchema, patchPath);
		}
		return null;
	}
	
	// Navigate to the property
	let current = resolved;
	for (const segment of propPath) {
		// Skip dynamic segments like {category}
		if (segment.startsWith('{') && segment.endsWith('}')) {
			return { type: 'string', description: `Dynamic value for ${segment}` };
		}
		
		if (!current.properties) return null;
		
		let propSchema = current.properties[segment];
		if (!propSchema) return null;
		
		if (propSchema.$ref) {
			propSchema = resolveRef(doc, propSchema.$ref);
			if (!propSchema) return null;
		}
		
		current = propSchema;
	}
	
	return current;
}

/**
 * Convert a JSON Pointer path to a valid n8n field name
 * @param {string} path - JSON Pointer like '/name' or '/settings/enabled'
 * @returns {string} Field name like 'name' or 'settings_enabled'
 */
function patchPathToFieldName(path) {
	// Remove leading slash and replace remaining slashes with underscores
	return path.substring(1).replace(/\//g, '_').replace(/[{}]/g, '');
}

/**
 * Convert a JSON Pointer path to a display name
 * @param {string} path - JSON Pointer like '/name' or '/settings/enabled'
 * @returns {string} Display name like 'Name' or 'Settings Enabled'
 */
function patchPathToDisplayName(path) {
	const name = path.substring(1).replace(/\//g, ' ').replace(/[{}]/g, '');
	// Convert camelCase to Title Case
	return name
		.replace(/([A-Z])/g, ' $1')
		.replace(/^./, str => str.toUpperCase())
		.trim();
}


/**
 * Check if an operation is a PATCH operation with JSON Patch format
 * @param {object} doc - OpenAPI document
 * @param {object} operation - Operation object
 * @param {string} method - HTTP method
 * @returns {boolean}
 */
function isPatchOperation(doc, operation, method) {
	if (method !== 'patch') return false;
	const schema = getRequestBodySchema(doc, operation);
	return isJsonPatchSchema(doc, schema);
}

/** Map to store PATCH operation metadata for later processing */
const patchOperationsMap = new Map();

/**
 * Find all operations with oneOf/anyOf in request body
 * @param {object} doc - OpenAPI document
 * @returns {Map<string, {operationId: string, method: string, path: string, summary: string, locations: Array}>}
 */
/**
 * Check if oneOf/anyOf locations are all supportable (nested arrays with variants)
 * vs truly unsupported (deeply nested complex structures)
 * @param {Array} locations - Array of {path, type, options} from findOneOfAnyOfInSchema
 * @returns {boolean} true if all locations can be converted to fixedCollection
 */
function areOneOfLocationsSupported(locations) {
	for (const loc of locations) {
		// Nested array items with oneOf/anyOf are supported (e.g. "steps[]")
		if (loc.path.endsWith('[]')) continue;
		
		// Root-level oneOf at property level is supported (already handled by transformOneOfInSpec)
		// Check if it's a direct property (no nesting indicators like [] or [oneOf:])
		if (!loc.path.includes('[') && loc.path !== 'root') continue;
		
		// Root oneOf/anyOf (whole body is polymorphic) - check if it's a task-like operation
		// These are complex and need manual implementation
		if (loc.path === 'root') {
			return false;
		}
		
		// Nested oneOf inside oneOf variants (e.g. "[oneOf:0]") - too complex
		if (loc.path.includes('[oneOf:') || loc.path.includes('[anyOf:')) {
			return false;
		}
	}
	return true;
}

function findUnsupportedOperations(doc) {
	const unsupported = new Map();

	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			if (dynamicSkipOperations.has(operation.operationId)) continue;

			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;

			const operationId = operation.operationId || `${method.toUpperCase()} ${pathUrl}`;

			// Check for batch operations (array request body that isn't JSON Patch)
			// Skip if already transformed by transformBatchOperationsInSpec
			if (batchOperationIds.has(operationId)) continue;
			
			let resolved = schema;
			if (schema.$ref) {
				resolved = resolveRef(doc, schema.$ref);
			}
			if (resolved?.type === 'array' && !isJsonPatchSchema(doc, schema)) {
				unsupported.set(operationId, {
					operationId,
					method: method.toUpperCase(),
					path: pathUrl,
					summary: operation.summary || '',
					locations: [{ path: 'root', type: 'array (batch operation)' }],
				});
				continue;
			}

			// Check for oneOf/anyOf
			const locations = findOneOfAnyOfInSchema(doc, schema, '', new Set());
			if (locations.length > 0) {
				// Check if all locations are supportable
				if (!areOneOfLocationsSupported(locations)) {
					unsupported.set(operationId, {
						operationId,
						method: method.toUpperCase(),
						path: pathUrl,
						summary: operation.summary || '',
						locations,
					});
				}
				// Otherwise, locations will be handled during property generation
			}
		}
	}

	return unsupported;
}

/** Set of operationIds that are PATCH operations (for preSend tracking) */
let patchOperationIds = new Set();

/** Map of operationId -> Set of dateTime field paths (for preSend tracking) */
let dateTimeFieldPaths = new Map();

/** Map of oneOf metadata: operationId -> { fieldName -> { variants, parentPath } } */
let oneOfMetadata = new Map();

/** Map of enum arrays: "operationId:fieldName" -> enum values array */
let enumArraysMetadata = new Map();

/** Map of single-value enums: "operationId:fieldName" -> { values, description } */
let singleEnumsMetadata = new Map();

/** Set of operationIds that are batch operations (array body transformed) */
let batchOperationIds = new Set();

/** Map of batch operation metadata: operationId -> { itemsSchema, required } */
let batchOperationsMetadata = new Map();

/** Map of array properties with anyOf/oneOf items: "operationId:fieldName" -> { variants } */
let polymorphicArraysMetadata = new Map();

/** Map of object properties that should be converted to fixedCollection: "operationId:fieldName" -> { properties, required } */
let objectPropertiesMetadata = new Map();

/** Map of object arrays (array of plain objects): "operationId:fieldName" -> { itemsSchema, required, description } */
let objectArraysMetadata = new Map();

/** Map of dateTime fields: "operationId:fieldName" -> true */
let dateTimeFieldsMetadata = new Map();

/** Map of boolean field defaults from OpenAPI spec: "operationId:fieldName" -> boolean default value */
let booleanDefaultsMetadata = new Map();

/** Set of operations with empty object request body (no properties defined) */
let emptyObjectBodyOperations = new Map();

/**
 * Check if an array items schema can be supported for batch operations.
 * Supports:
 * - Simple objects (flat properties without nested oneOf/anyOf)
 * - Objects with oneOf/anyOf at root level (converted to variant options)
 * 
 * @param {object} doc - OpenAPI document
 * @param {object} itemsSchema - The items schema of the array
 * @returns {{supported: boolean, type: 'simple'|'polymorphic'|null, resolved: object|null}}
 */
function analyzeBatchItemsSchema(doc, itemsSchema) {
	if (!itemsSchema) return { supported: false, type: null, resolved: null };
	
	let resolved = itemsSchema;
	if (itemsSchema.$ref) {
		resolved = resolveRef(doc, itemsSchema.$ref);
		if (!resolved) return { supported: false, type: null, resolved: null };
	}
	
	// Must be an object type
	if (resolved.type !== 'object') return { supported: false, type: null, resolved: null };
	
	// Check for oneOf/anyOf at root level - this is polymorphic batch
	if (resolved.oneOf || resolved.anyOf) {
		const variants = resolved.oneOf || resolved.anyOf;
		// Check that all variants are simple objects
		for (const variant of variants) {
			let variantResolved = variant;
			if (variant.$ref) {
				variantResolved = resolveRef(doc, variant.$ref);
			}
			if (!variantResolved) return { supported: false, type: null, resolved: null };
			// Variant must be object without nested oneOf/anyOf
			if (variantResolved.type !== 'object' && !variantResolved.properties) {
				return { supported: false, type: null, resolved: null };
			}
			// Check for nested oneOf/anyOf in variant properties
			if (variantResolved.properties) {
				for (const propSchema of Object.values(variantResolved.properties)) {
					let propResolved = propSchema;
					if (propSchema.$ref) {
						propResolved = resolveRef(doc, propSchema.$ref);
					}
					if (propResolved?.oneOf || propResolved?.anyOf) {
						return { supported: false, type: null, resolved: null };
					}
				}
			}
		}
		return { supported: true, type: 'polymorphic', resolved };
	}
	
	// Check for oneOf/anyOf in properties (nested) - not supported
	if (resolved.properties) {
		for (const propSchema of Object.values(resolved.properties)) {
			let propResolved = propSchema;
			if (propSchema.$ref) {
				propResolved = resolveRef(doc, propSchema.$ref);
			}
			if (propResolved?.oneOf || propResolved?.anyOf) {
				return { supported: false, type: null, resolved: null };
			}
		}
	}
	
	return { supported: true, type: 'simple', resolved };
}

/**
 * Transform batch operations (array request body) to a format that can be processed.
 * Creates a wrapper schema with a single 'items' property containing the array.
 * 
 * Only processes POST and PUT methods. PATCH methods with array body are typically
 * batch operations (like JSON Patch or bulk updates) with complex schemas that
 * don't translate well to n8n UI.
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of transformed batch operations
 */
function transformBatchOperationsInSpec(doc) {
	let transformedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		// Only process POST and PUT - PATCH with array body are complex batch operations
		for (const method of ['post', 'put']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			if (dynamicSkipOperations.has(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			// Resolve the schema
			let resolved = schema;
			if (schema.$ref) {
				resolved = resolveRef(doc, schema.$ref);
			}
			
			// Only process array schemas that aren't JSON Patch
			if (resolved?.type !== 'array') continue;
			if (isJsonPatchSchema(doc, schema)) continue;
			
			// Get items schema
			let itemsSchema = resolved.items;
			if (!itemsSchema) continue;
			
			// Analyze if items schema can be supported
			const analysis = analyzeBatchItemsSchema(doc, itemsSchema);
			if (!analysis.supported) {
				continue;
			}
			
			const itemsResolved = analysis.resolved;
			
			// Build metadata based on schema type
			if (analysis.type === 'polymorphic') {
				// Polymorphic: oneOf/anyOf variants
				const variants = itemsResolved.oneOf || itemsResolved.anyOf;
				const resolvedVariants = [];
				
				for (const variant of variants) {
					let variantResolved = variant;
					let variantName = null;
					
					if (variant.$ref) {
						variantResolved = resolveRef(doc, variant.$ref);
						variantName = variant.$ref.split('/').pop();
					}
					
					// Deep resolve properties
					const resolvedProperties = {};
					if (variantResolved.properties) {
						for (const [propName, propSchema] of Object.entries(variantResolved.properties)) {
							let propResolved = propSchema;
							if (propSchema.$ref) {
								propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
							}
							resolvedProperties[propName] = propResolved;
						}
					}
					
					resolvedVariants.push({
						name: variantName || variantResolved.title || `Variant ${resolvedVariants.length + 1}`,
						displayName: variantResolved.title || formatDisplayName(variantName || `Variant ${resolvedVariants.length + 1}`),
						properties: resolvedProperties,
						required: variantResolved.required || [],
					});
				}
				
				batchOperationsMetadata.set(operation.operationId, {
					type: 'polymorphic',
					variants: resolvedVariants,
					description: resolved.description || 'Items to process',
				});
			} else {
				// Simple: flat object
				const resolvedProperties = {};
				if (itemsResolved.properties) {
					for (const [propName, propSchema] of Object.entries(itemsResolved.properties)) {
						let propResolved = propSchema;
						if (propSchema.$ref) {
							propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
						}
						resolvedProperties[propName] = propResolved;
					}
				}
				
				batchOperationsMetadata.set(operation.operationId, {
					type: 'simple',
					itemsSchema: {
						...itemsResolved,
						properties: resolvedProperties,
					},
					required: itemsResolved.required || [],
					description: resolved.description || 'Items to process',
				});
			}
			
			// Create a new wrapper schema with the array as a property
			const schemaName = `${operation.operationId.replace(/\./g, '_')}_BatchBody`;
			
			// Build wrapper schema - use simple object type, we'll convert to fixedCollection in post-processing
			const wrapperSchema = {
				type: 'object',
				properties: {
					items: {
						type: 'object',
						description: resolved.description || `Items to process`,
						'x-n8n-batch-items': true, // Marker for post-processing
					}
				},
				required: ['items'],
			};
			
			// Add the new schema to components
			if (!doc.components) doc.components = {};
			if (!doc.components.schemas) doc.components.schemas = {};
			doc.components.schemas[schemaName] = wrapperSchema;
			
			// Replace the operation's requestBody schema
			if (operation.requestBody?.content?.['application/json']) {
				operation.requestBody.content['application/json'].schema = {
					$ref: `#/components/schemas/${schemaName}`,
				};
			}
			
			// Track this operation for preSend
			batchOperationIds.add(operation.operationId);
			transformedCount++;
		}
	}
	
	return transformedCount;
}

/**
 * Pre-process OpenAPI spec to transform PATCH operations from JSON Patch format
 * to regular schema format. This allows the n8n-openapi-node to generate fields normally.
 * 
 * The transformation:
 * 1. Finds PATCH operations with JSON Patch schema (array of {op, path, value})
 * 2. Extracts allowed paths from the schema
 * 3. Finds corresponding POST operation for field type information
 * 4. Creates a new schema with patchable fields as regular properties
 * 5. Replaces the PATCH operation's requestBody schema
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of transformed PATCH operations
 */
function transformPatchOperationsInSpec(doc) {
	let transformedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		const operation = pathItem.patch;
		if (!operation) continue;
		if (operation.deprecated) continue;
		if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
		
		const schema = getRequestBodySchema(doc, operation);
		if (!schema || !isJsonPatchSchema(doc, schema)) continue;
		
		// Find corresponding POST operation for field types
		const postOp = findCorrespondingPostOperation(doc, pathUrl);
		let postSchema = postOp ? getRequestBodySchema(doc, postOp) : null;
		
		// Skip PATCH if no corresponding POST operation - can't get field types
		if (!postSchema) {
			dynamicSkipOperations.add(operation.operationId);
			continue;
		}
		
		// If POST schema is a batch wrapper (transformed by transformBatchOperationsInSpec),
		// extract the item schema for field type information.
		// Batch wrapper structure: { type: 'object', properties: { items: { type: 'array', items: <actual schema> } } }
		let fieldTypeSchema = postSchema;
		if (postSchema.$ref) {
			fieldTypeSchema = resolveRef(doc, postSchema.$ref);
		}
		if (fieldTypeSchema?.type === 'object' && 
			fieldTypeSchema.properties?.items?.type === 'array' && 
			fieldTypeSchema.properties?.items?.items) {
			let itemSchema = fieldTypeSchema.properties.items.items;
			if (itemSchema.$ref) {
				itemSchema = resolveRef(doc, itemSchema.$ref);
			}
			if (itemSchema) {
				fieldTypeSchema = itemSchema;
			}
		}
		
		// Skip if POST schema has unsupported oneOf/anyOf structures
		const oneOfLocations = findOneOfAnyOfInSchema(doc, fieldTypeSchema, '', new Set());
		if (oneOfLocations.length > 0 && !areOneOfLocationsSupported(oneOfLocations)) {
			// Skip this PATCH - add to dynamicSkipOperations so builder doesn't process it
			dynamicSkipOperations.add(operation.operationId);
			continue;
		}
		
		// Extract allowed paths from JSON Patch schema
		const patchPaths = extractPatchPaths(doc, schema).filter(p => typeof p === 'string');
		if (patchPaths.length === 0) continue;
		
		// Build new schema with patchable fields (use fieldTypeSchema which handles batch wrappers)
		const newSchema = buildPatchFieldsSchema(doc, patchPaths, fieldTypeSchema);
		if (!newSchema || Object.keys(newSchema.properties || {}).length === 0) continue;
		
		// Create a unique schema name for this PATCH operation
		const schemaName = `${operation.operationId.replace(/\./g, '_')}_PatchBody`;
		
		// Add the new schema to components
		if (!doc.components) doc.components = {};
		if (!doc.components.schemas) doc.components.schemas = {};
		doc.components.schemas[schemaName] = newSchema;
		
		// Replace the operation's requestBody schema
		if (operation.requestBody?.content?.['application/json']) {
			operation.requestBody.content['application/json'].schema = {
				$ref: `#/components/schemas/${schemaName}`,
			};
		}
		
		// Copy oneOf metadata from POST to PATCH operation (for fixedCollection conversion)
		if (postOp && oneOfMetadata.has(postOp.operationId)) {
			const postMeta = oneOfMetadata.get(postOp.operationId);
			// Only copy metadata for fields that exist in PATCH schema
			const patchMeta = new Map();
			for (const [fieldName, meta] of postMeta) {
				if (newSchema.properties[fieldName]) {
					patchMeta.set(fieldName, meta);
				}
			}
			if (patchMeta.size > 0) {
				oneOfMetadata.set(operation.operationId, patchMeta);
			}
		}
		
		// Copy object properties metadata from POST to PATCH operation
		if (postOp) {
			for (const [key, meta] of objectPropertiesMetadata) {
				if (key.startsWith(`${postOp.operationId}:`)) {
					const fieldName = key.split(':')[1];
					if (newSchema.properties[fieldName]) {
						objectPropertiesMetadata.set(`${operation.operationId}:${fieldName}`, meta);
					}
				}
			}
		}
		
		// Copy polymorphic arrays metadata from POST to PATCH operation
		if (postOp) {
			for (const [key, meta] of polymorphicArraysMetadata) {
				if (key.startsWith(`${postOp.operationId}:`)) {
					const fieldName = key.split(':')[1];
					if (newSchema.properties[fieldName]) {
						polymorphicArraysMetadata.set(`${operation.operationId}:${fieldName}`, meta);
					}
				}
			}
		}
		
		// Track this operation for preSend
		patchOperationIds.add(operation.operationId);
		transformedCount++;
	}
	
	return transformedCount;
}

/**
 * Build a schema with patchable fields from JSON Patch paths
 * @param {object} doc - OpenAPI document
 * @param {string[]} patchPaths - Array of JSON Pointer paths like ['/name', '/title']
 * @param {object|null} postSchema - POST schema for type information
 * @returns {object} OpenAPI schema object
 */
function buildPatchFieldsSchema(doc, patchPaths, postSchema) {
	const properties = {};
	
	for (const patchPath of patchPaths) {
		// Skip nested paths (e.g. /importOptions/someField) - only process top-level fields
		const segments = patchPath.split('/').filter(s => s.length > 0);
		if (segments.length > 1) continue;
		
		// Get field info from POST schema
		const fieldInfo = getFieldInfoFromPostSchema(doc, postSchema, patchPath);
		
		// Skip if field not found in POST schema (may be deprecated or doesn't exist)
		if (!fieldInfo) continue;
		
		// Convert /name to name, /settings/enabled to settings_enabled
		const fieldName = patchPathToFieldName(patchPath);
		
		// Build property schema
		const propSchema = {
			description: fieldInfo.description || `Value for ${patchPath}`,
		};
		
		// Copy type information from POST schema
		if (fieldInfo.type) propSchema.type = fieldInfo.type;
		if (fieldInfo.enum) propSchema.enum = fieldInfo.enum;
		if (fieldInfo.format) propSchema.format = fieldInfo.format;
		if (fieldInfo.example !== undefined) propSchema.example = fieldInfo.example;
		if (fieldInfo.default !== undefined) propSchema.default = fieldInfo.default;
		if (fieldInfo.minimum !== undefined) propSchema.minimum = fieldInfo.minimum;
		if (fieldInfo.maximum !== undefined) propSchema.maximum = fieldInfo.maximum;
		if (fieldInfo.items) propSchema.items = fieldInfo.items;
		// Copy fixedCollection marker (from oneOf transformation)
		if (fieldInfo['x-n8n-fixedCollection']) {
			propSchema['x-n8n-fixedCollection'] = true;
		}
		
		properties[fieldName] = propSchema;
	}
	
	return {
		type: 'object',
		properties,
		// No required fields - all are optional for PATCH
	};
}

// ============================================================================
// ARRAY TRANSFORMATION
// Mark array fields for later conversion to multiOptions or fixedCollection
// ============================================================================

// Global metadata for simple arrays (arrays of strings/numbers without enum)
const simpleArraysMetadata = new Map();

/**
 * Mark array fields with enum items in the OpenAPI spec.
 * These will be converted to multiOptions in post-processing.
 * Stores enum values in global enumArraysMetadata map.
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of marked fields
 */
function markEnumArraysInSpec(doc) {
	let markedCount = 0;
	
	// Process each operation's request body
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			// Find array properties with enum items
			const visited = new Set();
			function findEnumArrays(currentSchema, fieldName = null, path = '') {
				if (!currentSchema || typeof currentSchema !== 'object') return;
				if (visited.has(currentSchema)) return;
				visited.add(currentSchema);
				
				// Handle $ref
				if (currentSchema.$ref) {
					const resolved = resolveRef(doc, currentSchema.$ref);
					if (resolved) findEnumArrays(resolved, fieldName);
					return;
				}
				
				// Check if this is an array with enum items
				if (currentSchema.type === 'array' && currentSchema.items) {
					let items = currentSchema.items;
					if (items.$ref) {
						items = resolveRef(doc, items.$ref);
					}
					if (items?.enum && Array.isArray(items.enum) && fieldName) {
						// Store in global metadata map
						const key = `${operation.operationId}:${fieldName}`;
						enumArraysMetadata.set(key, items.enum);
						markedCount++;
					}
				}
				
				// Recurse into properties
				if (currentSchema.properties) {
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						findEnumArrays(propSchema, propName, `${path}.${propName}`);
					}
				}
				
				// Recurse into allOf
				if (currentSchema.allOf) {
					for (const subSchema of currentSchema.allOf) {
						findEnumArrays(subSchema, fieldName, `${path}[allOf]`);
					}
				}
				
				// Recurse into oneOf/anyOf variants
				const variants = currentSchema.oneOf || currentSchema.anyOf;
				if (variants) {
					for (let i = 0; i < variants.length; i++) {
						findEnumArrays(variants[i], fieldName, `${path}[oneOf/${i}]`);
					}
				}
				
				// Recurse into array items (for nested objects in arrays)
				if (currentSchema.type === 'array' && currentSchema.items) {
					let items = currentSchema.items;
					if (items.$ref) {
						items = resolveRef(doc, items.$ref);
					}
					if (items && !items.enum) {
						// Only recurse if not an enum array (those are handled above)
						findEnumArrays(items, fieldName, `${path}[items]`);
					}
				}
			}
			
			findEnumArrays(schema, null, 'root');
		}
	}
	
	return markedCount;
}

/**
 * Mark single-value enum fields (non-array) in the OpenAPI spec.
 * These will be converted to options type in post-processing.
 * Handles integer enums that the library doesn't convert automatically.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked fields
 */
function markSingleEnumsInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			const visited = new Set();
			// insideOneOf - don't record enums inside oneOf/anyOf variants to avoid field name conflicts
			// (e.g., 'name' field in different report types having different enums)
			// Fields inside oneOf are properly handled by buildFieldFromSchema which reads enum from schema directly
			function findSingleEnums(currentSchema, fieldName = null, path = '', insideOneOf = false) {
				if (!currentSchema || typeof currentSchema !== 'object') return;
				if (visited.has(currentSchema)) return;
				visited.add(currentSchema);
				
				// Handle $ref
				if (currentSchema.$ref) {
					const resolved = resolveRef(doc, currentSchema.$ref);
					if (resolved) findSingleEnums(resolved, fieldName, path, insideOneOf);
					return;
				}
				
				// Check if this is a single-value enum (not array)
				// Skip if inside oneOf - those are handled by buildFieldFromSchema
				if (!insideOneOf && currentSchema.type !== 'array' && currentSchema.enum && Array.isArray(currentSchema.enum) && fieldName) {
					const key = `${operation.operationId}:${fieldName}`;
					singleEnumsMetadata.set(key, {
						values: currentSchema.enum,
						description: currentSchema.description
					});
					markedCount++;
				}
				
				// Recurse into properties
				if (currentSchema.properties) {
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						findSingleEnums(propSchema, propName, `${path}.${propName}`, insideOneOf);
					}
				}
				
				// Recurse into allOf
				if (currentSchema.allOf) {
					for (const subSchema of currentSchema.allOf) {
						findSingleEnums(subSchema, fieldName, `${path}[allOf]`, insideOneOf);
					}
				}
				
				// Recurse into oneOf/anyOf variants - mark as inside oneOf
				const variants = currentSchema.oneOf || currentSchema.anyOf;
				if (variants) {
					for (let i = 0; i < variants.length; i++) {
						findSingleEnums(variants[i], fieldName, `${path}[oneOf/${i}]`, true);
					}
				}
			}
			
			findSingleEnums(schema, null, 'root', false);
		}
	}
	
	return markedCount;
}

/**
 * Mark array fields with simple items (string, integer, number) in the OpenAPI spec.
 * These will be converted to fixedCollection with multipleValues in post-processing.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked fields
 */
function markSimpleArraysInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			const visited = new Set();
			function findSimpleArrays(currentSchema, fieldName = null) {
				if (!currentSchema || typeof currentSchema !== 'object') return;
				if (visited.has(currentSchema)) return;
				visited.add(currentSchema);
				
				if (currentSchema.$ref) {
					const resolved = resolveRef(doc, currentSchema.$ref);
					if (resolved) findSimpleArrays(resolved, fieldName);
					return;
				}
				
				// Check if this is an array with simple type items (no enum)
				if (currentSchema.type === 'array' && currentSchema.items && fieldName) {
					let items = currentSchema.items;
					if (items.$ref) {
						items = resolveRef(doc, items.$ref);
					}
					// Only mark if items are simple types without enum
					const itemType = items?.type;
					if ((itemType === 'string' || itemType === 'integer' || itemType === 'number') && !items?.enum) {
						const key = `${operation.operationId}:${fieldName}`;
						// Don't mark if already marked as enum array
						if (!enumArraysMetadata.has(key)) {
							simpleArraysMetadata.set(key, itemType === 'string' ? 'string' : 'number');
							markedCount++;
						}
					}
				}
				
				if (currentSchema.properties) {
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						findSimpleArrays(propSchema, propName);
					}
				}
				
				if (currentSchema.allOf) {
					for (const subSchema of currentSchema.allOf) {
						findSimpleArrays(subSchema, fieldName);
					}
				}
			}
			
			findSimpleArrays(schema);
		}
	}
	
	return markedCount;
}

/**
 * Mark array properties with oneOf/anyOf items for later conversion to fixedCollection with variants.
 * This allows fields like `steps` (array of workflow steps with different types) to have proper UI.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked arrays
 */
function markPolymorphicArraysInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			const visited = new Set();
			function findPolymorphicArrays(currentSchema, fieldName = null) {
				if (!currentSchema || typeof currentSchema !== 'object') return;
				if (visited.has(currentSchema)) return;
				visited.add(currentSchema);
				
				if (currentSchema.$ref) {
					const resolved = resolveRef(doc, currentSchema.$ref);
					if (resolved) findPolymorphicArrays(resolved, fieldName);
					return;
				}
				
				// Check if this is an array with oneOf/anyOf items
				if (currentSchema.type === 'array' && currentSchema.items && fieldName) {
					let items = currentSchema.items;
					if (items.$ref) {
						items = resolveRef(doc, items.$ref);
					}
					
					const variants = items?.oneOf || items?.anyOf;
					if (variants && variants.length > 0) {
						// Build variants metadata
						const resolvedVariants = [];
						
						for (const variant of variants) {
							let variantResolved = variant;
							let variantName = null;
							
							if (variant.$ref) {
								variantResolved = resolveRef(doc, variant.$ref);
								variantName = variant.$ref.split('/').pop();
							}
							
							if (!variantResolved) continue;
							
							// Deep resolve properties
							const resolvedProperties = {};
							if (variantResolved.properties) {
								for (const [propName, propSchema] of Object.entries(variantResolved.properties)) {
									let propResolved = propSchema;
									if (propSchema.$ref) {
										propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
									}
									resolvedProperties[propName] = propResolved;
								}
							}
							
							resolvedVariants.push({
								name: variantName || variantResolved.title || `Variant ${resolvedVariants.length + 1}`,
								displayName: variantResolved.title || formatDisplayName(variantName || `Variant ${resolvedVariants.length + 1}`),
								properties: resolvedProperties,
								required: variantResolved.required || [],
							});
						}
						
						if (resolvedVariants.length > 0) {
							const key = `${operation.operationId}:${fieldName}`;
							polymorphicArraysMetadata.set(key, {
								variants: resolvedVariants,
								description: currentSchema.description || `Add ${formatDisplayName(fieldName)}`,
							});
							markedCount++;
						}
					}
				}
				
				if (currentSchema.properties) {
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						findPolymorphicArrays(propSchema, propName);
					}
				}
				
				if (currentSchema.allOf) {
					for (const subSchema of currentSchema.allOf) {
						findPolymorphicArrays(subSchema, fieldName);
					}
				}
			}
			
			findPolymorphicArrays(schema);
		}
	}
	
	return markedCount;
}

/**
 * Mark object properties that should be converted to fixedCollection.
 * Identifies nested objects with properties that the library generates as JSON.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked objects
 */
function markObjectPropertiesInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			const visited = new Set();
			function findObjectProperties(currentSchema, fieldName = null, isNested = false) {
				if (!currentSchema || typeof currentSchema !== 'object') return;
				if (visited.has(currentSchema)) return;
				visited.add(currentSchema);
				
				if (currentSchema.$ref) {
					const resolved = resolveRef(doc, currentSchema.$ref);
					if (resolved) findObjectProperties(resolved, fieldName, isNested);
					return;
				}
				
				// Check if this is a nested object with properties (not root level)
				if (isNested && currentSchema.type === 'object' && currentSchema.properties && fieldName) {
					// Skip if already handled by other metadata
					const key = `${operation.operationId}:${fieldName}`;
					if (enumArraysMetadata.has(key) || simpleArraysMetadata.has(key) || polymorphicArraysMetadata.has(key)) {
						return;
					}
					
					// Deep resolve all property refs
					const resolvedProperties = {};
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						let propResolved = propSchema;
						if (propSchema.$ref) {
							propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
						}
						resolvedProperties[propName] = propResolved;
					}
					
					objectPropertiesMetadata.set(key, {
						properties: resolvedProperties,
						required: currentSchema.required || [],
						description: currentSchema.description,
					});
					markedCount++;
				}
				
				if (currentSchema.properties) {
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						findObjectProperties(propSchema, propName, true);
					}
				}
				
				if (currentSchema.allOf) {
					for (const subSchema of currentSchema.allOf) {
						findObjectProperties(subSchema, fieldName, isNested);
					}
				}
				
				// Recurse into array items ONLY at root level (for batch operations with array body)
				// Don't recurse into nested array fields - those should stay as json or be handled separately
				if (!isNested && currentSchema.type === 'array' && currentSchema.items) {
					let itemsSchema = currentSchema.items;
					if (itemsSchema.$ref) {
						itemsSchema = resolveRef(doc, itemsSchema.$ref);
					}
					if (itemsSchema) {
						findObjectProperties(itemsSchema, fieldName, isNested);
					}
				}
			}
			
			findObjectProperties(schema);
		}
	}
	
	return markedCount;
}

/**
 * Mark array properties where items are plain objects (not oneOf/anyOf, not simple types).
 * These will be converted to fixedCollection with multipleValues in post-processing.
 * Example: languagesDetails (array of {languageId, definition, note})
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked arrays
 */
function markObjectArraysInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			const visited = new Set();
			function findObjectArrays(currentSchema, fieldName = null) {
				if (!currentSchema || typeof currentSchema !== 'object') return;
				if (visited.has(currentSchema)) return;
				visited.add(currentSchema);
				
				if (currentSchema.$ref) {
					const resolved = resolveRef(doc, currentSchema.$ref);
					if (resolved) findObjectArrays(resolved, fieldName);
					return;
				}
				
				// Check if this is an array with object items (not oneOf/anyOf, not simple types)
				if (currentSchema.type === 'array' && currentSchema.items && fieldName) {
					let items = currentSchema.items;
					if (items.$ref) {
						items = resolveRef(doc, items.$ref);
					}
					
					// Skip if already handled by other metadata
					const key = `${operation.operationId}:${fieldName}`;
					if (enumArraysMetadata.has(key) || simpleArraysMetadata.has(key) || polymorphicArraysMetadata.has(key)) {
						return;
					}
					
					// Check if items are plain objects with properties (not oneOf/anyOf)
					if (items?.type === 'object' && items?.properties && !items?.oneOf && !items?.anyOf) {
						// Deep resolve all property refs
						const resolvedProperties = {};
						for (const [propName, propSchema] of Object.entries(items.properties)) {
							let propResolved = propSchema;
							if (propSchema.$ref) {
								propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
							}
							resolvedProperties[propName] = propResolved;
						}
						
						objectArraysMetadata.set(key, {
							itemsSchema: {
								...items,
								properties: resolvedProperties,
							},
							required: items.required || [],
							description: currentSchema.description,
						});
						markedCount++;
					}
				}
				
				if (currentSchema.properties) {
					for (const [propName, propSchema] of Object.entries(currentSchema.properties)) {
						findObjectArrays(propSchema, propName);
					}
				}
				
				if (currentSchema.allOf) {
					for (const subSchema of currentSchema.allOf) {
						findObjectArrays(subSchema, fieldName);
					}
				}
			}
			
			findObjectArrays(schema);
		}
	}
	
	return markedCount;
}

/**
 * Mark fields with format: 'date-time' for conversion to n8n dateTime type.
 * These are string fields in OpenAPI that should become dateTime in n8n for proper UI.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked fields
 */
function markDateTimeFieldsInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			// Check request body schema
			const bodySchema = getRequestBodySchema(doc, operation);
			if (bodySchema) {
				scanForDateTimeFields(doc, bodySchema, operation.operationId, new Set());
			}
			
			// Check query parameters
			if (operation.parameters) {
				for (const param of operation.parameters) {
					let paramSchema = param;
					if (param.$ref) {
						paramSchema = resolveRef(doc, param.$ref) || param;
					}
					if (paramSchema.in === 'query' && paramSchema.schema) {
						let schema = paramSchema.schema;
						if (schema.$ref) {
							schema = resolveRef(doc, schema.$ref) || schema;
						}
						if (schema.type === 'string' && schema.format === 'date-time') {
							const key = `${operation.operationId}:${paramSchema.name}`;
							dateTimeFieldsMetadata.set(key, true);
							markedCount++;
						}
					}
				}
			}
		}
	}
	
	function scanForDateTimeFields(doc, schema, operationId, visited) {
		if (!schema || typeof schema !== 'object') return;
		if (visited.has(schema)) return;
		visited.add(schema);
		
		if (schema.$ref) {
			const resolved = resolveRef(doc, schema.$ref);
			if (resolved) scanForDateTimeFields(doc, resolved, operationId, visited);
			return;
		}
		
		// Check properties
		if (schema.properties) {
			for (const [propName, propSchema] of Object.entries(schema.properties)) {
				let resolved = propSchema;
				if (propSchema.$ref) {
					resolved = resolveRef(doc, propSchema.$ref) || propSchema;
				}
				
				if (resolved.type === 'string' && resolved.format === 'date-time') {
					const key = `${operationId}:${propName}`;
					dateTimeFieldsMetadata.set(key, true);
					markedCount++;
				}
				
				// Recurse into nested schemas
				scanForDateTimeFields(doc, resolved, operationId, visited);
			}
		}
		
		// Handle allOf
		if (schema.allOf) {
			for (const subSchema of schema.allOf) {
				scanForDateTimeFields(doc, subSchema, operationId, visited);
			}
		}
		
		// Handle oneOf
		if (schema.oneOf) {
			for (const subSchema of schema.oneOf) {
				scanForDateTimeFields(doc, subSchema, operationId, visited);
			}
		}
		
		// Handle anyOf
		if (schema.anyOf) {
			for (const subSchema of schema.anyOf) {
				scanForDateTimeFields(doc, subSchema, operationId, visited);
			}
		}
		
		// Handle array items
		if (schema.type === 'array' && schema.items) {
			scanForDateTimeFields(doc, schema.items, operationId, visited);
		}
	}
	
	return markedCount;
}

/**
 * Mark boolean fields with explicit default values in the OpenAPI spec.
 * The n8n-openapi-node library sometimes defaults all booleans to true,
 * so we need to store the original defaults from the schema.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked fields
 */
function markBooleanDefaultsInSpec(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			// Check request body schema
			const bodySchema = getRequestBodySchema(doc, operation);
			if (bodySchema) {
				markedCount += scanForBooleanDefaults(doc, bodySchema, operation.operationId, new Set());
			}
			
			// Check query parameters
			if (operation.parameters) {
				for (const param of operation.parameters) {
					let paramSchema = param;
					if (param.$ref) {
						paramSchema = resolveRef(doc, param.$ref) || param;
					}
					if (paramSchema.in === 'query' && paramSchema.schema) {
						let schema = paramSchema.schema;
						if (schema.$ref) {
							schema = resolveRef(doc, schema.$ref) || schema;
						}
						if (schema.type === 'boolean' && schema.default !== undefined) {
							const key = `${operation.operationId}:${paramSchema.name}`;
							booleanDefaultsMetadata.set(key, schema.default);
							markedCount++;
						}
					}
				}
			}
		}
	}
	
	function scanForBooleanDefaults(doc, schema, operationId, visited) {
		if (!schema || typeof schema !== 'object') return 0;
		if (visited.has(schema)) return 0;
		visited.add(schema);
		
		let count = 0;
		
		if (schema.$ref) {
			const resolved = resolveRef(doc, schema.$ref);
			if (resolved) count += scanForBooleanDefaults(doc, resolved, operationId, visited);
			return count;
		}
		
		// Check properties
		if (schema.properties) {
			for (const [propName, propSchema] of Object.entries(schema.properties)) {
				let resolved = propSchema;
				if (propSchema.$ref) {
					resolved = resolveRef(doc, propSchema.$ref) || propSchema;
				}
				
				if (resolved.type === 'boolean' && resolved.default !== undefined) {
					const key = `${operationId}:${propName}`;
					booleanDefaultsMetadata.set(key, resolved.default);
					count++;
				}
				
				// Recurse into nested schemas
				count += scanForBooleanDefaults(doc, resolved, operationId, visited);
			}
		}
		
		// Handle allOf
		if (schema.allOf) {
			for (const subSchema of schema.allOf) {
				count += scanForBooleanDefaults(doc, subSchema, operationId, visited);
			}
		}
		
		// Handle oneOf
		if (schema.oneOf) {
			for (const subSchema of schema.oneOf) {
				count += scanForBooleanDefaults(doc, subSchema, operationId, visited);
			}
		}
		
		// Handle anyOf
		if (schema.anyOf) {
			for (const subSchema of schema.anyOf) {
				count += scanForBooleanDefaults(doc, subSchema, operationId, visited);
			}
		}
		
		// Handle array items
		if (schema.type === 'array' && schema.items) {
			count += scanForBooleanDefaults(doc, schema.items, operationId, visited);
		}
		
		return count;
	}
	
	return markedCount;
}

/**
 * Mark operations that have an empty object request body (type: object without properties).
 * These need a generic JSON field for the user to provide arbitrary data.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {number} Number of marked operations
 */
function markEmptyObjectBodyOperations(doc) {
	let markedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			// Resolve ref if needed
			let resolved = schema;
			if (schema.$ref) {
				resolved = resolveRef(doc, schema.$ref);
				if (!resolved) continue;
			}
			
			// Check if it's an empty object (type: object without properties)
			if (resolved.type === 'object' && !resolved.properties && !resolved.oneOf && !resolved.anyOf && !resolved.allOf) {
				// Get resource from tags
				const tag = operation.tags?.[0];
				const resource = tag ? lodash.camelCase(tag) : null;
				
				emptyObjectBodyOperations.set(operation.operationId, {
					resource,
					operationId: operation.operationId,
					summary: operation.summary,
				});
				markedCount++;
			}
		}
	}
	
	return markedCount;
}

// ============================================================================
// ONEOF TRANSFORMATION
// Functions for transforming oneOf schemas to fixedCollection format
// ============================================================================

/**
 * Transform oneOf schemas in OpenAPI spec to a format compatible with n8n.
 * Creates equivalent structures that can be processed by n8n-openapi-node.
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of transformed oneOf schemas
 */
function transformOneOfInSpec(doc) {
	let transformedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.deprecated) continue;
			if (SKIP_OPERATIONS.includes(operation.operationId)) continue;
			if (dynamicSkipOperations.has(operation.operationId)) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (!schema) continue;
			
			// Check if schema has oneOf
			const oneOfLocations = findOneOfLocations(doc, schema, '', new Set(), 0, 5);
			if (oneOfLocations.length === 0) continue;
			
			// Transform each oneOf location and store metadata
			let schemaModified = false;
			for (const location of oneOfLocations) {
				const metadata = transformOneOfAtLocation(doc, schema, location, operation.operationId);
				if (metadata) {
					schemaModified = true;
					// Store metadata for post-processing
					if (!oneOfMetadata.has(operation.operationId)) {
						oneOfMetadata.set(operation.operationId, new Map());
					}
					oneOfMetadata.get(operation.operationId).set(metadata.fieldName, metadata);
				}
			}
			
			if (schemaModified) {
				transformedCount++;
			}
		}
	}
	
	return transformedCount;
}

/**
 * Find all oneOf locations in a schema (recursive with depth limit)
 * @param {object} doc - OpenAPI document
 * @param {object} schema - Schema to search
 * @param {string} path - Current property path
 * @param {Set} visited - Visited refs to prevent cycles
 * @param {number} depth - Current depth
 * @param {number} maxDepth - Maximum depth to search
 * @returns {Array<{path: string, schema: object, oneOfOptions: Array}>}
 */
function findOneOfLocations(doc, schema, path, visited, depth, maxDepth) {
	if (!schema || typeof schema !== 'object' || depth > maxDepth) return [];
	
	const results = [];
	
	// Resolve $ref
	if (schema.$ref) {
		if (visited.has(schema.$ref)) return results;
		visited.add(schema.$ref);
		const resolved = resolveRef(doc, schema.$ref);
		if (resolved) {
			return findOneOfLocations(doc, resolved, path, visited, depth, maxDepth);
		}
		return results;
	}
	
	// Handle allOf - merge and continue searching
	if (schema.allOf) {
		for (const subSchema of schema.allOf) {
			results.push(...findOneOfLocations(doc, subSchema, path, visited, depth + 1, maxDepth));
		}
		return results;
	}
	
	// Found oneOf at current level
	if (schema.oneOf && Array.isArray(schema.oneOf)) {
		results.push({
			path: path || 'root',
			schema: schema,
			oneOfOptions: schema.oneOf,
		});
	}
	
	// Recurse into properties
	if (schema.properties) {
		for (const [propName, propSchema] of Object.entries(schema.properties)) {
			const propPath = path ? `${path}.${propName}` : propName;
			results.push(...findOneOfLocations(doc, propSchema, propPath, new Set(visited), depth + 1, maxDepth));
		}
	}
	
	// Recurse into items (for arrays)
	if (schema.items) {
		const itemsPath = path ? `${path}[]` : '[]';
		results.push(...findOneOfLocations(doc, schema.items, itemsPath, new Set(visited), depth + 1, maxDepth));
	}
	
	return results;
}

/**
 * Transform oneOf at a specific location to n8n-compatible format
 * @param {object} doc - OpenAPI document
 * @param {object} rootSchema - Root schema being transformed
 * @param {object} location - Location info {path, schema, oneOfOptions}
 * @param {string} operationId - Operation ID for metadata tracking
 * @returns {object|null} Metadata about the transformation or null if failed
 */
function transformOneOfAtLocation(doc, rootSchema, location, operationId) {
	const { path, schema, oneOfOptions } = location;
	
	// Resolve all oneOf options and build variants metadata
	const variants = [];
	
	/**
	 * Extract properties from a resolved schema
	 * @param {object} resolved - Resolved schema
	 * @returns {{properties: object, required: string[], isArray: boolean}}
	 */
	function extractPropertiesFromSchema(resolved) {
		const properties = {};
		let isArrayVariant = false;
		let arrayItemsSchema = null;
		
		if (resolved.type === 'array' && resolved.items) {
			// Array variant (like Replace Tags - array of tag objects)
			isArrayVariant = true;
			let itemsResolved = resolved.items;
			if (itemsResolved.$ref) {
				itemsResolved = resolveRef(doc, itemsResolved.$ref) || itemsResolved;
			}
			arrayItemsSchema = itemsResolved;
			
			// Extract properties from array items schema
			if (itemsResolved.properties) {
				for (const [propName, propSchema] of Object.entries(itemsResolved.properties)) {
					let propResolved = propSchema;
					if (propSchema.$ref) {
						propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
					}
					
					if (propSchema.deprecated || propResolved.deprecated) continue;
					
					let resolvedItems = propResolved.items;
					if (resolvedItems?.$ref) {
						resolvedItems = resolveRef(doc, resolvedItems.$ref) || resolvedItems;
					}
					
					properties[propName] = {
						...propResolved,
						...(resolvedItems ? { items: resolvedItems } : {}),
						...(itemsResolved.required?.includes(propName) ? { required: true } : {}),
					};
				}
			}
		} else if (resolved.properties) {
			for (const [propName, propSchema] of Object.entries(resolved.properties)) {
				let propResolved = propSchema;
				if (propSchema.$ref) {
					propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
				}
				
				// Skip deprecated fields (check both original and resolved)
				if (propSchema.deprecated || propResolved.deprecated) continue;
				
				// Note: properties with nested oneOf will become json fields in buildFieldFromSchema
				
				// Deep resolve items.$ref for arrays
				let resolvedItems = propResolved.items;
				if (resolvedItems?.$ref) {
					resolvedItems = resolveRef(doc, resolvedItems.$ref) || resolvedItems;
				}
				
				properties[propName] = {
					...propResolved,
					...(resolvedItems ? { items: resolvedItems } : {}),
					...(resolved.required?.includes(propName) ? { required: true } : {}),
				};
			}
		}
		
		return {
			properties,
			required: isArrayVariant ? (arrayItemsSchema?.required || []) : (resolved.required || []),
			isArray: isArrayVariant,
		};
	}
	
	/**
	 * Process a single oneOf option recursively and return variant object.
	 * Handles any level of nested oneOf by creating hierarchical structure.
	 * @param {object} opt - The oneOf option schema
	 * @param {number} depth - Current recursion depth (to prevent infinite loops)
	 * @returns {object|null} Variant object or null if invalid
	 */
	function processOneOfOptionRecursive(opt, depth = 0) {
		// Prevent infinite recursion (max 10 levels should be more than enough)
		if (depth > 10) return null;
		
		let resolved = opt;
		let refName = null;
		
		if (opt.$ref) {
			resolved = resolveRef(doc, opt.$ref);
			refName = opt.$ref.split('/').pop();
		}
		
		if (!resolved) return null;
		
		// Get variant name and display name
		const variantName = resolved.title || refName || `variant_${depth}`;
		const variantDisplayName = resolved.title || formatDisplayName(refName || variantName);
		
		// Handle nested oneOf - recursively process sub-variants
		if (resolved.oneOf && Array.isArray(resolved.oneOf)) {
			const subVariants = [];
			
			for (const subOpt of resolved.oneOf) {
				const subVariant = processOneOfOptionRecursive(subOpt, depth + 1);
				if (subVariant) {
					subVariants.push(subVariant);
				}
			}
			
			if (subVariants.length === 0) return null;
			
			// Create variant with nested sub-variants (hierarchical structure)
			return {
				name: variantName,
				displayName: variantDisplayName,
				properties: {},
				required: [],
				isArray: false,
				nestedOneOf: subVariants, // Recursive hierarchical structure
			};
		}
		
		// Regular variant without nested oneOf (leaf node)
		const { properties, required, isArray } = extractPropertiesFromSchema(resolved);
		
		return {
			name: variantName,
			displayName: variantDisplayName,
			properties,
			required,
			isArray,
		};
	}
	
	// Process all oneOf options recursively (preserves any level of hierarchical structure)
	for (const opt of oneOfOptions) {
		const variant = processOneOfOptionRecursive(opt, 0);
		if (variant) {
			variants.push(variant);
		}
	}
	
	if (variants.length === 0) return null;
	
	// Field name: for root-level use '_body', otherwise last part of path
	const fieldName = path === 'root' ? '_body' : path.split('.').pop().replace('[]', '');
	
	// Build the transformed schema (simple object for n8n-openapi-node to create JSON field)
	const transformedSchema = {
		type: 'object',
		description: schema.description || `Select configuration type`,
		'x-n8n-fixedCollection': true,  // Marker for post-processing
	};
	
	// Replace the oneOf in the original schema
	if (path === 'root') {
		// For root-level oneOf, wrap in a property so n8n-openapi-node generates a field
		Object.keys(schema).forEach(key => delete schema[key]);
		Object.assign(schema, {
			type: 'object',
			properties: {
				[fieldName]: transformedSchema,
			},
		});
	} else {
		// Property-level oneOf
		const pathParts = path.split('.');
		let target = rootSchema;
		
		if (target.$ref) {
			target = resolveRef(doc, target.$ref);
		}
		
		if (target.allOf) {
			for (const subSchema of target.allOf) {
				let resolved = subSchema;
				if (resolved.$ref) {
					resolved = resolveRef(doc, resolved.$ref);
				}
				if (resolved?.properties?.[pathParts[0]]) {
					target = resolved;
					break;
				}
			}
		}
		
		for (let i = 0; i < pathParts.length - 1; i++) {
			const part = pathParts[i].replace('[]', '');
			if (target.properties?.[part]) {
				target = target.properties[part];
				if (target.$ref) {
					target = resolveRef(doc, target.$ref);
				}
			} else if (target.items) {
				target = target.items;
				if (target.$ref) {
					target = resolveRef(doc, target.$ref);
				}
			}
		}
		
		const lastPart = pathParts[pathParts.length - 1].replace('[]', '');
		if (target.properties?.[lastPart]) {
			const originalProp = target.properties[lastPart];
			Object.keys(originalProp).forEach(key => delete originalProp[key]);
			Object.assign(originalProp, transformedSchema);
		}
	}
	
	// Return metadata for post-processing
	return {
		fieldName,
		path,
		variants,
		operationId,
	};
}

/**
 * Format a name as display name using lodash.startCase
 * Handles camelCase, snake_case, etc.
 * @param {string} name - Name like "apiKey" or "basic_mode"
 * @returns {string} Formatted display name like "Api Key" or "Basic Mode"
 */
function formatDisplayName(name) {
	// Remove common prefixes (like schema references)
	const clean = name.replace(/^.*\./, '');
	return lodash.startCase(clean);
}


// ============================================================================
// OPENAPI UTILITIES
// Functions for fetching and pre-processing OpenAPI documents
// ============================================================================

/**
 * Fetch and parse OpenAPI document from URL
 * @param {string} url - URL to fetch YAML spec from
 * @returns {Promise<object>} Parsed OpenAPI document
 */
async function fetchOpenApiDoc(url) {
	console.log(`  Fetching from ${url}...`);
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}

	const content = await response.text();
	return yaml.load(content);
}

/**
 * Remove deprecated properties from all schemas in OpenAPI document.
 * This prevents n8n-openapi-node from generating fields for deprecated properties.
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of removed deprecated properties
 */
function removeDeprecatedProperties(doc) {
	let removedCount = 0;
	
	function processSchema(schema, path = '') {
		if (!schema || typeof schema !== 'object') return;
		
		// Remove deprecated properties
		if (schema.properties) {
			for (const [propName, propSchema] of Object.entries(schema.properties)) {
				if (propSchema.deprecated) {
					delete schema.properties[propName];
					// Also remove from required array if present
					if (schema.required && Array.isArray(schema.required)) {
						schema.required = schema.required.filter(r => r !== propName);
					}
					removedCount++;
				}
			}
		}
		
		// Recurse into nested schemas
		if (schema.properties) {
			for (const propSchema of Object.values(schema.properties)) {
				processSchema(propSchema, path);
			}
		}
		if (schema.items) {
			processSchema(schema.items, path);
		}
		if (schema.allOf) {
			for (const item of schema.allOf) {
				processSchema(item, path);
			}
		}
		if (schema.oneOf) {
			for (const item of schema.oneOf) {
				processSchema(item, path);
			}
		}
		if (schema.anyOf) {
			for (const item of schema.anyOf) {
				processSchema(item, path);
			}
		}
	}
	
	// Process all schemas in components
	for (const schema of Object.values(doc.components?.schemas || {})) {
		processSchema(schema);
	}
	
	return removedCount;
}

/**
 * Remove deprecated parameters from all operations in OpenAPI document.
 * This prevents n8n-openapi-node from generating fields for deprecated query/path parameters.
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of removed deprecated parameters
 */
function removeDeprecatedParameters(doc) {
	let removedCount = 0;
	
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
			const operation = pathItem[method];
			if (!operation?.parameters) continue;
			
			const originalLength = operation.parameters.length;
			operation.parameters = operation.parameters.filter(param => {
				// Handle $ref parameters
				let resolved = param;
				if (param.$ref) {
					resolved = resolveRef(doc, param.$ref);
				}
				return !resolved?.deprecated;
			});
			
			removedCount += originalLength - operation.parameters.length;
		}
	}
	
	return removedCount;
}

/**
 * Remove 'fields' property from root level of request body schemas.
 * The 'fields' property in Crowdin API is for custom fields but has complex/undefined schema
 * that generates useless JSON fields. We skip it at preprocessing stage.
 * 
 * Targets operations like: Add Project, Add Directory, Add File, Add Task
 * 
 * @param {object} doc - OpenAPI document (will be modified in place)
 * @returns {number} Number of removed 'fields' properties
 */
function removeFieldsProperty(doc) {
	let removedCount = 0;
	
	/**
	 * Remove 'fields' from a schema's root properties (and oneOf variant roots)
	 */
	function removeFieldsFromSchema(schema) {
		if (!schema || typeof schema !== 'object') return;
		
		// Handle $ref
		if (schema.$ref) {
			const resolved = resolveRef(doc, schema.$ref);
			if (resolved) removeFieldsFromSchema(resolved);
			return;
		}
		
		// Remove 'fields' from root properties
		if (schema.properties?.fields) {
			delete schema.properties.fields;
			if (schema.required && Array.isArray(schema.required)) {
				schema.required = schema.required.filter(r => r !== 'fields');
			}
			removedCount++;
		}
		
		// Process oneOf/anyOf variants (root level of each variant)
		if (schema.oneOf) {
			for (const variant of schema.oneOf) {
				removeFieldsFromSchema(variant);
			}
		}
		if (schema.anyOf) {
			for (const variant of schema.anyOf) {
				removeFieldsFromSchema(variant);
			}
		}
		
		// Process allOf (merged schemas)
		if (schema.allOf) {
			for (const item of schema.allOf) {
				removeFieldsFromSchema(item);
			}
		}
	}
	
	// Process all operation request bodies
	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['post', 'put', 'patch']) {
			const operation = pathItem[method];
			if (!operation?.requestBody) continue;
			
			const schema = getRequestBodySchema(doc, operation);
			if (schema) {
				removeFieldsFromSchema(schema);
			}
		}
	}
	
	return removedCount;
}

/**
 * Flatten allOf schemas in OpenAPI document.
 * The n8n-openapi-node library doesn't support allOf, so we merge them manually.
 * 
 * @param {object} doc - OpenAPI document
 * @returns {object} Document with flattened allOf schemas
 */
function flattenAllOf(doc) {
	const processed = new Set();

	const resolveRef = (ref) => {
		const path = ref.replace('#/', '').split('/');
		let result = doc;
		for (const key of path) {
			result = result[key];
		}
		return result;
	};

	const mergeAllOf = (schema, depth = 0) => {
		if (!schema || typeof schema !== 'object' || depth > 10) {
			return schema;
		}

		if (!schema.allOf) {
			return schema;
		}

		const merged = { 
			type: schema.type || 'object', 
			properties: {}, 
			required: schema.required ? [...schema.required] : [] 
		};
		
		// Track deprecated properties from base schemas
		const deprecatedProps = new Set();

		for (const item of schema.allOf) {
			let resolved = item;

			if (item.$ref) {
				resolved = resolveRef(item.$ref);
				if (resolved.allOf && !processed.has(item.$ref)) {
					processed.add(item.$ref);
					resolved = mergeAllOf(resolved, depth + 1);
				}
			}

			if (resolved.properties) {
				// Track which properties are deprecated in base schemas
				for (const [propName, propSchema] of Object.entries(resolved.properties)) {
					if (propSchema.deprecated) {
						deprecatedProps.add(propName);
					}
				}
				Object.assign(merged.properties, resolved.properties);
			}
			if (resolved.required) {
				merged.required.push(...resolved.required);
			}
			if (resolved.description && !merged.description) {
				merged.description = resolved.description;
			}
		}
		
		// Mark child properties as deprecated if parent had same property deprecated
		for (const propName of deprecatedProps) {
			if (merged.properties[propName] && !merged.properties[propName].deprecated) {
				merged.properties[propName] = { 
					...merged.properties[propName], 
					deprecated: true 
				};
			}
		}

		if (schema.description) {
			merged.description = schema.description;
		}

		merged.required = [...new Set(merged.required)];
		if (merged.required.length === 0) delete merged.required;
		if (Object.keys(merged.properties).length === 0) delete merged.properties;

		const { allOf, ...rest } = schema;
		return { ...rest, ...merged };
	};

	if (doc.components?.schemas) {
		for (const name in doc.components.schemas) {
			doc.components.schemas[name] = mergeAllOf(doc.components.schemas[name]);
		}
	}

	return doc;
}

// ============================================================================
// PROPERTY TRANSFORMERS
// Functions that modify generated properties
// ============================================================================

/**
 * Check if property matches the required resource and/or operation context
 * @param {object} prop - Property to check
 * @param {object} config - Context configuration with matchResource/matchOperation
 * @returns {boolean}
 */
function matchesContext(prop, config) {
	if (!config) return true;
	
	const { matchResource, matchOperation } = config;
		const resources = prop.displayOptions?.show?.resource;
	const operations = prop.displayOptions?.show?.operation;

	if (matchResource && !resources?.includes(matchResource)) {
		return false;
	}
	
	if (matchOperation) {
		if (!operations) return false;
		const matchOps = Array.isArray(matchOperation) ? matchOperation : [matchOperation];
		if (!matchOps.some(op => operations.includes(op))) return false;
	}
	
	return true;
}

/**
 * Apply load options configuration to a property
 * @param {object} prop - Property to modify
 * @param {object} config - Load options configuration
 * @param {boolean} isMultiSelect - Whether this is a multi-select field
 */
function applyLoadOptionsToProperty(prop, config, isMultiSelect = false) {
	// Check if this is a query parameter (GET method with comma-separated values)
	const isQueryParam = prop.routing?.send?.type === 'query';
	
	prop.type = isMultiSelect ? 'multiOptions' : 'options';
	// Use *Multi method for multiOptions to avoid '-' placeholder option
	const methodName = isMultiSelect ? `${config.method}Multi` : config.method;
	prop.typeOptions = { loadOptionsMethod: methodName };

	if (config.dependsOn) {
		prop.typeOptions.loadOptionsDependsOn = config.dependsOn;
	}

	delete prop.options;
	delete prop.placeholder;  // Remove fixedCollection placeholder
	prop.default = isMultiSelect ? [] : '';

	// For multi-select, update routing value
	if (isMultiSelect && prop.routing?.send?.value) {
		if (isQueryParam) {
			// Query params need comma-separated string
			prop.routing.send.value = "={{ $value.length ? $value.join(',') : undefined }}";
		} else {
			// Body params send array directly
			prop.routing.send.value = '={{ $value }}';
		}
	}
}

/**
 * Convert ID fields to dynamic dropdowns with load options
 * @param {object[]} properties - Properties array
 * @param {object} [parentDisplayOptions] - Parent displayOptions for nested properties
 * @returns {object[]} Modified properties
 */
function applyLoadOptions(properties, parentDisplayOptions = null) {
	for (const prop of properties) {
		// Use parent displayOptions for nested fields that don't have their own
		const contextToCheck = prop.displayOptions ? prop : { displayOptions: parentDisplayOptions };

		// Check single-select fields with targetField first (more specific matches take priority)
		let foundTargetFieldMatch = false;
		for (const [configName, config] of Object.entries(SINGLE_SELECT_OPTIONS)) {
			if (config.targetField === prop.name && matchesContext(contextToCheck, config) && matchesExpectedType(prop, config)) {
				applyLoadOptionsToProperty(prop, config, false);
				foundTargetFieldMatch = true;
				break;
			}
		}
		if (foundTargetFieldMatch) continue;

		// Check single-select fields by direct name match
		let singleConfig = SINGLE_SELECT_OPTIONS[prop.name];
		if (singleConfig && matchesContext(contextToCheck, singleConfig) && matchesExpectedType(prop, singleConfig)) {
			applyLoadOptionsToProperty(prop, singleConfig, false);
			continue;
		}

		// Check multi-select fields
		const multiConfig = MULTI_SELECT_OPTIONS[prop.name];
		if (multiConfig && matchesContext(contextToCheck, multiConfig) && matchesExpectedType(prop, multiConfig, true)) {
			applyLoadOptionsToProperty(prop, multiConfig, true);
			continue;
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			const nestedDisplayOptions = prop.displayOptions || parentDisplayOptions;
			for (const option of prop.options) {
				if (option.values) {
					applyLoadOptions(option.values, nestedDisplayOptions);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			const nestedDisplayOptions = prop.displayOptions || parentDisplayOptions;
			applyLoadOptions(prop.options, nestedDisplayOptions);
		}
	}

	return properties;
}

/**
 * Check if property type matches expected type for load options
 * @param {object} prop - Property to check
 * @param {object} config - Config with expectedType
 * @param {boolean} isMultiSelect - Whether this is a multi-select check
 * @returns {boolean} True if types match
 */
function matchesExpectedType(prop, config, isMultiSelect = false) {
	// Default expected type is 'number' for ID fields
	const expectedType = config.expectedType || 'number';
	
	// Get the actual type of the property
	let actualType = prop.type;
	
	// For fixedCollection/json that will be converted, allow conversion
	if (actualType === 'fixedCollection' || actualType === 'json') {
		return true;
	}
	
	// For multi-select query params, the original type is 'string' (comma-separated)
	// Allow conversion regardless of expectedType since values will be joined back
	if (isMultiSelect && actualType === 'string' && prop.routing?.send?.type === 'query') {
		return true;
	}
	
	// For string/number types, check directly
	if (actualType === 'string' && expectedType === 'string') return true;
	if (actualType === 'number' && expectedType === 'number') return true;
	
	// If already converted to options, allow it
	if (actualType === 'options' || actualType === 'multiOptions') return true;
	
	return false;
}

/**
 * Fix routing values for optional parameters to not send empty values
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixOptionalValues(properties) {
	for (const prop of properties) {
		if (prop.routing?.send?.value !== '={{ $value }}') {
			continue;
		}

		switch (prop.type) {
			case 'string':
				prop.routing.send.value = '={{ $value || undefined }}';
				break;
			case 'number':
				if (!prop.required) {
				prop.routing.send.value = "={{ typeof $value === 'number' ? $value : undefined }}";
			}
				break;
			case 'options':
				if (!prop.required) {
					prop.routing.send.value = '={{ $value || undefined }}';
		}
				break;
	}
	}

	return properties;
}

/**
 * Fix orderBy fields - they should be string fields, not enums.
 * The API supports syntax like "createdAt desc,name,priority"
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixOrderByFields(properties) {
	for (const prop of properties) {
		if (prop.name === 'orderBy' && prop.type === 'options') {
			prop.type = 'string';
			delete prop.options;
		}
	}

	return properties;
}

/**
 * Fix limit fields - n8n linter requires specific description and default.
 * Rule: n8n-nodes-base/node-param-description-wrong-for-limit
 * Rule: n8n-nodes-base/node-param-default-wrong-for-limit
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixLimitFields(properties) {
	for (const prop of properties) {
		if (prop.name === 'limit' && prop.type === 'number') {
			// Set required description for limit fields
			prop.description = 'Max number of results to return';
			// Set required default value (50) and remove placeholder
			prop.default = 50;
			// Add required typeOptions for limit fields
			prop.typeOptions = { minValue: 1 };
		}
	}

	return properties;
}

/**
 * Add "None" option to non-required enum fields.
 * This allows users to skip optional enum fields.
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function addNoneOptionToEnums(properties) {
	for (const prop of properties) {
		// Only process non-required options fields with enum values
		if (prop.type !== 'options' || prop.required) continue;
		if (!prop.options || !Array.isArray(prop.options)) continue;
		
		// Skip operation and resource selectors
		if (prop.name === 'operation' || prop.name === 'resource') continue;
		
		// Skip if already has an empty value option
		if (prop.options.some(opt => opt.value === '')) continue;
		
		// Skip if it has loadOptionsMethod (dynamic options)
		if (prop.typeOptions?.loadOptionsMethod) continue;
		
		// Add "-" option at the beginning with empty value
		prop.options.unshift({
			name: '-',
			value: '',
		});
		
		// Set default to empty string
		prop.default = '';
		
		// Routing already handles empty values with '={{ $value || undefined }}'
	}

	return properties;
}

/**
 * Move default values to placeholder for input fields.
 * OpenAPI examples/defaults should be shown as placeholders, not actual defaults.
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function moveDefaultsToPlaceholder(properties) {
	for (const prop of properties) {
		// Handle string fields
		if (prop.type === 'string' && typeof prop.default === 'string') {
			const defaultVal = prop.default;
			// Skip empty defaults
			if (defaultVal && defaultVal !== '{}' && defaultVal !== '[]') {
				prop.placeholder = defaultVal;
				prop.default = '';
			}
		}
		
		// Handle dateTime fields - same as string
		else if (prop.type === 'dateTime' && typeof prop.default === 'string') {
			const defaultVal = prop.default;
			// Skip empty defaults
			if (defaultVal) {
				prop.placeholder = defaultVal;
				prop.default = '';
			}
		}

		// Handle number fields - move default to placeholder
		// Also handle string defaults that should be numbers (OpenAPI spec inconsistencies)
		// Skip 'limit' fields - they have a required default of 50 per n8n linting rules
		else if (prop.type === 'number' && prop.name !== 'limit' && (typeof prop.default === 'number' || typeof prop.default === 'string')) {
			prop.placeholder = String(prop.default);
			prop.default = undefined;
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					moveDefaultsToPlaceholder(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			moveDefaultsToPlaceholder(prop.options);
		}
	}

	return properties;
}

/**
 * Fix optional number fields that have undefined default.
 * n8n doesn't support default: undefined for number types, throwing "Could not get parameter" error.
 * This function sets default: 0 and updates routing to treat 0 as "not set" (don't send).
 * 
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixOptionalNumberDefaults(properties) {
	for (const prop of properties) {
		// Check if this is an optional number field with undefined default
		// Skip 'limit' fields - they have a required default of 50 per n8n linting rules
		if (prop.type === 'number' && prop.name !== 'limit' && !prop.required && prop.default === undefined) {
			// Set default to 0 (workaround for n8n not supporting undefined default for numbers)
			prop.default = 0;
			
			// Update routing to not send 0 (treat as "not set")
			if (prop.routing?.send) {
				prop.routing.send.value = '={{ $value !== 0 ? $value : undefined }}';
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					fixOptionalNumberDefaults(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			fixOptionalNumberDefaults(prop.options);
		}
	}
	
	return properties;
}

/**
 * Fix boolean defaults - n8n-openapi-node sometimes converts them to strings
 * or sets all booleans to true. Apply the correct defaults from OpenAPI spec.
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixBooleanDefaults(properties) {
	for (const prop of properties) {
		// Recurse into fixedCollection options first
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					fixBooleanDefaults(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			fixBooleanDefaults(prop.options);
		}
		
		// Process options arrays (for nested structures)
		if (prop.options && Array.isArray(prop.options)) {
			for (const option of prop.options) {
				if (option.values && Array.isArray(option.values)) {
					fixBooleanDefaults(option.values);
				}
			}
		}
		
		if (prop.type !== 'boolean') continue;
		
		// Apply correct default from OpenAPI spec if available
		const operations = prop.displayOptions?.show?.operation;
		if (operations && prop.name) {
			for (const operationId of operations) {
				// Try direct lookup first
				let key = `${operationId}:${prop.name}`;
				let defaultValue = booleanDefaultsMetadata.get(key);
				
				// If not found and this is a PATCH operation, try corresponding POST
				// PATCH operations often don't have defaults in spec, but POST does
				if (defaultValue === undefined && operationId.endsWith('.patch')) {
					const postOperationId = operationId.replace(/\.patch$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					defaultValue = booleanDefaultsMetadata.get(key);
				}
				
				if (defaultValue !== undefined) {
					prop.default = defaultValue;
					break;
				}
			}
		}
		
		// Convert string 'true'/'false' to actual booleans (after metadata application)
		if (prop.default === 'true') {
			prop.default = true;
		} else if (prop.default === 'false') {
			prop.default = false;
		}
	}
	
	return properties;
}

/**
 * Convert JSON array fields with enum items to multiOptions.
 * Detects fields like: { type: 'json', default: '[]' } that should be multiOptions with static options.
 * Uses enumArraysMetadata map populated during pre-processing.
 * @param {object[]} properties - Properties array
 * @param {string[]} [operationContext] - Operation IDs inherited from parent for nested fields
 * @returns {object[]} Modified properties
 */
function convertEnumArraysToMultiOptions(properties, operationContext = null) {
	for (const prop of properties) {
		// Determine which operations this field belongs to
		const operations = prop.displayOptions?.show?.operation || operationContext;
		
		// Check if this is a simple array field that has enum metadata
		// Handle both: json fields AND fixedCollection with simple structure (items -> _value)
		const isSimpleArrayFixedCollection = prop.type === 'fixedCollection' && 
			prop.typeOptions?.multipleValues &&
			prop.options?.length === 1 && 
			prop.options[0].name === 'items' &&
			prop.options[0].values?.length === 1 &&
			prop.options[0].values[0].name === '_value';
			
		if ((prop.type === 'json' || isSimpleArrayFixedCollection) && prop.name && operations) {
			for (const operationId of operations) {
				// Try direct lookup first
				let key = `${operationId}:${prop.name}`;
				let enumValues = enumArraysMetadata.get(key);
				
				// If not found and this is a PATCH operation, try corresponding POST
				if (!enumValues && operationId.endsWith('.patch')) {
					const postOperationId = operationId.replace(/\.patch$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					enumValues = enumArraysMetadata.get(key);
				}
				
				if (enumValues && Array.isArray(enumValues)) {
					// Remove fixedCollection-specific properties
					delete prop.typeOptions;
					delete prop.placeholder;
					
					prop.type = 'multiOptions';
					prop.default = [];
					prop.options = enumValues.map(val => ({
						name: String(val),  // Keep original value for enum items (event names, etc)
						value: val
					}));
					
					// Update routing to send array directly
					if (prop.routing?.send) {
						prop.routing.send.value = '={{ $value }}';
					}
					
					break;
				}
			}
		}
		
		// Get operation context for recursion (use current field's operations or inherited context)
		const childContext = prop.displayOptions?.show?.operation || operationContext;
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					convertEnumArraysToMultiOptions(option.values, childContext);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			convertEnumArraysToMultiOptions(prop.options, childContext);
		}
	}
	
	return properties;
}

/**
 * Convert number/string fields with enum values to options type.
 * Handles integer enums that the library doesn't convert automatically.
 * Uses singleEnumsMetadata map populated during pre-processing.
 * @param {object[]} properties - Properties array
 * @param {string[]} [operationContext] - Operation IDs inherited from parent for nested fields
 * @returns {object[]} Modified properties
 */
function convertSingleEnumsToOptions(properties, operationContext = null) {
	for (const prop of properties) {
		// Determine which operations this field belongs to
		const operations = prop.displayOptions?.show?.operation || operationContext;
		
		// Check if this is a number/string field that has enum metadata
		if ((prop.type === 'number' || prop.type === 'string') && prop.name && operations) {
			for (const operationId of operations) {
				// Try direct lookup first
				let key = `${operationId}:${prop.name}`;
				let enumData = singleEnumsMetadata.get(key);
				
				// If not found and this is a PATCH operation, try corresponding POST
				if (!enumData && operationId.endsWith('.patch')) {
					const postOperationId = operationId.replace(/\.patch$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					enumData = singleEnumsMetadata.get(key);
				}
				
				if (enumData && Array.isArray(enumData.values)) {
					prop.type = 'options';
					prop.default = '';
					prop.options = [
						{ name: '-', value: '' },
						...enumData.values.map(val => ({
							name: String(val),
							value: val
						}))
					];
					
					break;
				}
			}
		}
		
		// Get operation context for recursion
		const childContext = prop.displayOptions?.show?.operation || operationContext;
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					convertSingleEnumsToOptions(option.values, childContext);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			convertSingleEnumsToOptions(prop.options, childContext);
		}
	}
	
	return properties;
}

/**
 * Convert JSON array fields with simple items to fixedCollection with multipleValues.
 * Detects fields like: { type: 'json', default: '[]' } that should be fixedCollection.
 * Uses simpleArraysMetadata map populated during pre-processing.
 * Skips fields that already have loadOptionsMethod (those become multiOptions).
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function convertSimpleArraysToFixedCollection(properties) {
	for (const prop of properties) {
		// Skip if already converted by loadOptions
		if (prop.typeOptions?.loadOptionsMethod) continue;
		
		// Check if this is a JSON array field that has simple array metadata
		if (prop.type === 'json' && prop.name && prop.displayOptions?.show?.operation) {
			const operations = prop.displayOptions.show.operation;
			
			for (const operationId of operations) {
				let key = `${operationId}:${prop.name}`;
				let itemType = simpleArraysMetadata.get(key);
				
				// If not found and this is a PATCH operation, try corresponding POST
				if (!itemType && operationId.endsWith('.patch')) {
					const postOperationId = operationId.replace(/\.patch$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					itemType = simpleArraysMetadata.get(key);
				}
				
				if (itemType) {
					const routingPath = prop.routing?.send?.property || prop.name;
					
					prop.type = 'fixedCollection';
					prop.typeOptions = { multipleValues: true };
					prop.default = {};
					prop.placeholder = 'Add Item';
					prop.options = [
						{
							name: 'items',
							displayName: 'Items',
							values: [
								{
									displayName: 'Value',
									// Use '_value' prefix so normalizeRequestBody knows to unwrap it
									name: '_value',
									type: itemType,
									default: itemType === 'string' ? '' : 0,
								}
							]
						}
					];
					
					// Update routing to extract values from fixedCollection structure
					if (prop.routing?.send) {
						prop.routing.send.value = '={{ $value.items?.map(i => i._value) || undefined }}';
					}
					
					break;
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					convertSimpleArraysToFixedCollection(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			convertSimpleArraysToFixedCollection(prop.options);
		}
	}
	
	return properties;
}

/**
 * Convert string fields with format: 'date-time' to n8n dateTime type.
 * Uses dateTimeFieldsMetadata map populated during pre-processing.
 * @param {object[]} properties - Properties array
 * @param {string[]} [parentOperations] - Operations context from parent (for nested fields)
 * @returns {object[]} Modified properties
 */
function convertDateTimeFields(properties, parentOperations = null) {
	for (const prop of properties) {
		// Get operations context - either from this prop or inherited from parent
		const operations = prop.displayOptions?.show?.operation || parentOperations;
		
		// Check if this is a string field that has dateTime metadata
		if (prop.type === 'string' && prop.name && operations) {
			for (const operationId of operations) {
				let key = `${operationId}:${prop.name}`;
				let isDateTime = dateTimeFieldsMetadata.get(key);
				
				// If not found and this is a PATCH operation, try corresponding POST
				if (!isDateTime && operationId.endsWith('.patch')) {
					const postOperationId = operationId.replace(/\.patch$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					isDateTime = dateTimeFieldsMetadata.get(key);
				}
				
				if (isDateTime) {
					const originalName = prop.name;
					// Add dateTime: prefix so normalizeRequestBody knows to format as date
					prop.name = `dateTime:${originalName}`;
					prop.type = 'dateTime';
					
					// Ensure routing uses original name (without prefix)
					if (prop.routing?.send) {
						if (!prop.routing.send.property) {
							prop.routing.send.property = originalName;
						}
					}
					break;
				}
			}
		}
		
		// Recurse into fixedCollection options, passing down operations context
		if (prop.type === 'fixedCollection' && prop.options) {
			const contextOps = prop.displayOptions?.show?.operation || parentOperations;
			for (const option of prop.options) {
				if (option.values) {
					convertDateTimeFields(option.values, contextOps);
				}
			}
		}
		
		// Recurse into collection options, passing down operations context
		if (prop.type === 'collection' && prop.options) {
			const contextOps = prop.displayOptions?.show?.operation || parentOperations;
			convertDateTimeFields(prop.options, contextOps);
		}
	}
	
	return properties;
}

/**
 * Convert JSON array fields with oneOf/anyOf items to fixedCollection with variant options.
 * Detects fields like `steps` (workflow steps) where each item can be one of several types.
 * Uses polymorphicArraysMetadata map populated during pre-processing.
 * @param {object[]} properties - Properties array
 * @param {object} doc - OpenAPI document for building nested fields
 * @returns {object[]} Modified properties
 */
function convertPolymorphicArraysToFixedCollection(properties, doc) {
	for (const prop of properties) {
		// Check if this is a JSON array field that has polymorphic metadata
		if (prop.type === 'json' && prop.name && prop.displayOptions?.show?.operation) {
			const operations = prop.displayOptions.show.operation;
			
			for (const operationId of operations) {
				const key = `${operationId}:${prop.name}`;
				const metadata = polymorphicArraysMetadata.get(key);
				
				if (metadata) {
					const routingPath = prop.routing?.send?.property || prop.name;
					
					// Build options from variants
					const fixedOptions = [];
					
					for (const variant of metadata.variants) {
						const values = [];
						
						for (const [propName, propSchema] of Object.entries(variant.properties)) {
							if (propSchema.deprecated) continue;
							
							const field = buildFieldFromSchema(propName, propSchema, routingPath, doc, 0);
							if (field) {
								// Remove routing from nested fields - parent handles it
								delete field.routing;
								if (variant.required.includes(propName)) {
									field.required = true;
								}
								values.push(field);
							}
						}
						
						if (values.length > 0) {
							fixedOptions.push({
								name: lodash.camelCase(variant.name),
								displayName: variant.displayName,
								values,
							});
						}
					}
					
					if (fixedOptions.length > 0) {
						prop.type = 'fixedCollection';
						prop.typeOptions = { multipleValues: true };
						prop.default = {};
						prop.placeholder = 'Add Item';
						prop.description = metadata.description;
						prop.options = fixedOptions;
						
						// Add flatten: prefix - normalizeValue will flatten all variant arrays
						prop.name = `flatten:${prop.name}`;
						// Update routing - include flatten: prefix so normalizeValue sees it
						if (prop.routing?.send) {
							prop.routing.send.value = '={{ $value }}';
							if (prop.routing.send.property) {
								prop.routing.send.property = `flatten:${prop.routing.send.property}`;
							}
							// Add preSend to process flatten: prefix
							const existingPreSend = prop.routing.send.preSend || [];
							prop.routing.send.preSend = [
								'__PRESEND_NORMALIZE_FIELD__',
								...existingPreSend,
							];
						}
					}
					
					break;
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					convertPolymorphicArraysToFixedCollection(option.values, doc);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			convertPolymorphicArraysToFixedCollection(prop.options, doc);
		}
	}
	
	return properties;
}

/**
 * Convert JSON object fields with properties to fixedCollection.
 * Detects fields like `qaCheckCategories` (objects with many properties) and converts them to proper UI.
 * Uses objectPropertiesMetadata map populated during pre-processing.
 * @param {object[]} properties - Properties array
 * @param {object} doc - OpenAPI document for building nested fields
 * @returns {object[]} Modified properties
 */
function convertObjectsToFixedCollection(properties, doc) {
	for (const prop of properties) {
		// Check if this is a JSON field that has object metadata
		if (prop.type === 'json' && prop.name && prop.displayOptions?.show?.operation) {
			const operations = prop.displayOptions.show.operation;
			
			for (const operationId of operations) {
				const key = `${operationId}:${prop.name}`;
				const metadata = objectPropertiesMetadata.get(key);
				
				if (metadata) {
					const routingPath = prop.routing?.send?.property || prop.name;
					
					// Build fields from properties
					const values = [];
					
					for (const [propName, propSchema] of Object.entries(metadata.properties)) {
						if (propSchema.deprecated) continue;
						
						const field = buildFieldFromSchema(propName, propSchema, routingPath, doc, 0);
						if (field) {
							// Remove routing from nested fields - parent handles it
							delete field.routing;
							if (metadata.required.includes(propName)) {
								field.required = true;
							}
							values.push(field);
						}
					}
					
					if (values.length > 0) {
						prop.type = 'fixedCollection';
						prop.default = {};
						prop.placeholder = 'Add Field';
						if (metadata.description) {
							prop.description = metadata.description;
						}
						prop.options = [
							{
								name: 'fields',
								displayName: 'Fields',
								values,
							}
						];
						
						// Update routing to extract fields from fixedCollection
						if (prop.routing?.send) {
							prop.routing.send.value = '={{ $value.fields || undefined }}';
							// Only add preSend if there are nested fixedCollections that need unwrapping
							const hasNestedFixedCollections = values.some(v => v.type === 'fixedCollection');
							if (hasNestedFixedCollections) {
								const existingPreSend = prop.routing.send.preSend || [];
								prop.routing.send.preSend = [
									'__PRESEND_NORMALIZE_FIELD__',
									...existingPreSend,
								];
							}
						}
					}
					
					break;
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					convertObjectsToFixedCollection(option.values, doc);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			convertObjectsToFixedCollection(prop.options, doc);
		}
	}
	
	return properties;
}

/**
 * Convert JSON array fields where items are plain objects to fixedCollection with multipleValues.
 * Example: languagesDetails (array of {languageId, definition, note})
 * Uses objectArraysMetadata map populated during pre-processing.
 * @param {object[]} properties - Properties array
 * @param {object} doc - OpenAPI document for building nested fields
 * @returns {object[]} Modified properties
 */
function convertObjectArraysToFixedCollection(properties, doc) {
	for (const prop of properties) {
		// Check if this is a JSON field that has object array metadata
		if (prop.type === 'json' && prop.name && prop.displayOptions?.show?.operation) {
			const operations = prop.displayOptions.show.operation;
			
			for (const operationId of operations) {
				// Try direct lookup first
				let key = `${operationId}:${prop.name}`;
				let metadata = objectArraysMetadata.get(key);
				
				// If not found and this is a PATCH operation, try corresponding POST
				if (!metadata && operationId.endsWith('.patch')) {
					const postOperationId = operationId.replace(/\.patch$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					metadata = objectArraysMetadata.get(key);
				}
				
				// Also try corresponding PUT operation (for concepts it's PUT not POST)
				if (!metadata && operationId.endsWith('.put')) {
					const postOperationId = operationId.replace(/\.put$/, '.post');
					key = `${postOperationId}:${prop.name}`;
					metadata = objectArraysMetadata.get(key);
				}
				
				if (metadata) {
					const routingPath = prop.routing?.send?.property || prop.name;
					const { itemsSchema, required, description } = metadata;
					
					// Build fields from item properties
					const values = [];
					
					if (itemsSchema.properties) {
						for (const [propName, propSchema] of Object.entries(itemsSchema.properties)) {
							if (propSchema.deprecated) continue;
							
							const field = buildFieldFromSchema(propName, propSchema, '', doc, 0);
							if (field) {
								// Remove routing from nested fields - parent handles it
								removeNestedRouting(field);
								if (required.includes(propName)) {
									field.required = true;
								}
								values.push(field);
							}
						}
					}
					
					if (values.length > 0) {
						prop.type = 'fixedCollection';
						prop.typeOptions = { multipleValues: true };
						prop.default = {};
						prop.placeholder = 'Add Item';
						if (description) {
							prop.description = description;
						}
						prop.options = [
							{
								name: 'items',
								displayName: itemsSchema.title || 'Item',
								values,
							}
						];
						
						// Update routing to unwrap items from fixedCollection
						if (prop.routing?.send) {
							prop.routing.send.value = '={{ $value }}';
							// Add preSend to unwrap nested fixedCollections
							const existingPreSend = prop.routing.send.preSend || [];
							prop.routing.send.preSend = [
								'__PRESEND_NORMALIZE_FIELD__',
								...existingPreSend,
							];
						}
					}
					
					break;
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					convertObjectArraysToFixedCollection(option.values, doc);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			convertObjectArraysToFixedCollection(prop.options, doc);
		}
	}
	
	return properties;
}

/**
 * Fix options with array values - n8n only supports string | number | boolean.
 * Convert array values to JSON strings and update routing to parse them.
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixArrayOptionValues(properties) {
	for (const prop of properties) {
		if (prop.type !== 'options' || !prop.options) {
			continue;
		}

			let hasArrayValues = false;

			for (const option of prop.options) {
				if (Array.isArray(option.value)) {
					hasArrayValues = true;
					option.value = JSON.stringify(option.value);
				}
			}

		if (hasArrayValues) {
			// Add empty option at the beginning
			prop.options.unshift({ name: '-', value: '' });
			prop.default = '';

			if (prop.routing?.send) {
				prop.routing.send.value = '={{ $value ? JSON.parse($value) : undefined }}';
			}
		}
	}

	return properties;
}

/**
 * Convert JSON fields with oneOf metadata to fixedCollection format.
 * This transforms simple JSON fields into structured fixedCollections where
 * users can select a variant and fill in the appropriate fields.
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties with fixedCollections
 */
function convertOneOfToFixedCollection(properties, doc) {
	const result = [];
	let convertedCount = 0;

	for (const prop of properties) {
		// Check if this is a JSON field that should be converted to fixedCollection
		if (prop.type !== 'json') {
			result.push(prop);
			continue;
		}
		
		// Find the operation(s) this field belongs to
		const operations = prop.displayOptions?.show?.operation || [];
		if (operations.length === 0) {
			result.push(prop);
			continue;
		}
		
		// Check if any of these operations have oneOf metadata for this field
		let metadata = null;
		for (const opId of operations) {
			const opMetadata = oneOfMetadata.get(opId);
			if (opMetadata?.has(prop.name)) {
				metadata = opMetadata.get(prop.name);
				break;
			}
		}
		
		if (!metadata) {
			result.push(prop);
			continue;
		}
		
		// Convert to fixedCollection
		const fixedCollection = buildFixedCollectionFromMetadata(prop, metadata, doc);
		
		// For variants with empty values, add a JSON field as fallback
		for (const opt of fixedCollection.options || []) {
			if (!opt.values || opt.values.length === 0) {
				opt.values = [{
					displayName: 'JSON Data',
					name: 'json',
					type: 'json',
					default: '{}',
					description: 'Enter data as JSON'
				}];
			}
		}
		
		convertedCount++;
		result.push(fixedCollection);
	}
	
	
	return result;
}

/**
 * Convert batch items JSON fields to proper fixedCollection with multipleValues.
 * This transforms the generic JSON field into a structured UI for batch operations.
 * @param {object[]} properties - Properties array
 * @param {object} doc - OpenAPI document for resolving refs
 * @returns {object[]} Modified properties with fixedCollections
 */
function convertBatchItemsToFixedCollection(properties, doc) {
	const result = [];
	
	for (const prop of properties) {
		// Check if this is a JSON "items" field for a batch operation
		if (prop.type !== 'json' || prop.name !== 'items') {
			result.push(prop);
			continue;
		}
		
		// Find the operation(s) this field belongs to
		const operations = prop.displayOptions?.show?.operation || [];
		if (operations.length === 0) {
			result.push(prop);
			continue;
		}
		
		// Check if any of these operations have batch metadata
		let metadata = null;
		let operationId = null;
		for (const opId of operations) {
			if (batchOperationsMetadata.has(opId)) {
				metadata = batchOperationsMetadata.get(opId);
				operationId = opId;
				break;
			}
		}
		
		if (!metadata) {
			result.push(prop);
			continue;
		}
		
		// Build fixedCollection from batch metadata
		const fixedCollection = buildBatchItemsFixedCollection(prop, metadata, doc);
		result.push(fixedCollection);
	}
	
	return result;
}

/**
 * Build a fixedCollection property for batch items
 * @param {object} originalProp - Original JSON property
 * @param {object} metadata - Batch metadata { type, itemsSchema/variants, required, description }
 * @param {object} doc - OpenAPI document for resolving refs
 * @returns {object} FixedCollection property with multipleValues
 */
function buildBatchItemsFixedCollection(originalProp, metadata, doc) {
	const { type, description } = metadata;
	
	let options;
	
	if (type === 'polymorphic') {
		// Polymorphic: each variant becomes an option
		options = metadata.variants.map(variant => {
			const values = [];
			
			for (const [propName, propSchema] of Object.entries(variant.properties)) {
				if (propSchema.deprecated) continue;
				
				const field = buildFieldFromSchema(propName, propSchema, '', doc, 0);
				if (field) {
					removeNestedRouting(field);
					if (variant.required.includes(propName)) {
						field.required = true;
					}
					values.push(field);
				}
			}
			
			return {
				name: lodash.camelCase(variant.name),
				displayName: variant.displayName,
				values,
			};
		});
	} else {
		// Simple: single option with all fields
		const { itemsSchema, required } = metadata;
		const values = [];
		
		if (itemsSchema.properties) {
			for (const [propName, propSchema] of Object.entries(itemsSchema.properties)) {
				if (propSchema.deprecated) continue;
				
				const field = buildFieldFromSchema(propName, propSchema, '', doc, 0);
				if (field) {
					removeNestedRouting(field);
					if (required.includes(propName)) {
						field.required = true;
					}
					values.push(field);
				}
			}
		}
		
		options = [
			{
				name: 'items',
				displayName: 'Item',
				values,
			}
		];
	}
	
	return {
		displayName: 'Items',
		name: 'items',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		...(originalProp.required ? { required: true } : {}),
		description: description,
		default: {},
		placeholder: 'Add Item',
		displayOptions: originalProp.displayOptions,
		options,
		routing: {
			send: {
				preSend: ['__PRESEND_EXTRACT_BATCH_ITEMS__'],
				property: 'items',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	};
}

/**
 * Recursively remove routing from all nested fields
 * This is necessary because parent fixedCollection handles all routing
 * @param {object} field - Field to process
 */
function removeNestedRouting(field) {
	if (!field) return;
	
	// Remove routing from this field
	delete field.routing;
	
	// Process nested options (for collection/fixedCollection)
	if (field.options && Array.isArray(field.options)) {
		for (const opt of field.options) {
			// For fixedCollection options with values
			if (opt.values && Array.isArray(opt.values)) {
				for (const val of opt.values) {
					removeNestedRouting(val);
				}
			} else {
				// For collection options (direct fields)
				removeNestedRouting(opt);
			}
		}
	}
}

/**
 * Build a fixedCollection property from oneOf metadata
 * @param {object} originalProp - Original JSON property
 * @param {object} metadata - OneOf metadata { fieldName, path, variants }
 * @param {object} doc - OpenAPI document for resolving refs
 * @returns {object} FixedCollection property
 */
function buildFixedCollectionFromMetadata(originalProp, metadata, doc) {
	const { fieldName, variants } = metadata;
	const parentPath = metadata.path === 'root' ? '' : fieldName;
	
	/**
	 * Recursively build fixedCollection options from variant structure.
	 * Handles any level of nested oneOf.
	 * @param {object} variant - Variant object with possible nestedOneOf
	 * @param {number} depth - Current recursion depth
	 * @returns {object} fixedCollection option {name, displayName, values}
	 */
	function buildVariantOption(variant, depth = 0) {
		const values = [];
		const requiredProps = variant.required || [];
		
		// Handle nested oneOf recursively - create a nested fixedCollection for sub-variants
		if (variant.nestedOneOf && variant.nestedOneOf.length > 0) {
			// Recursively build nested fixedCollection options from sub-variants
			const nestedOptions = variant.nestedOneOf.map(subVariant => 
				buildVariantOption(subVariant, depth + 1)
			);
			
			// Create the nested fixedCollection for sub-type selection
			values.push({
				displayName: depth === 0 ? 'Form Type' : `Sub-Type (Level ${depth + 1})`,
				name: '_subType',
				type: 'fixedCollection',
				default: {},
				description: 'Select the form type',
				options: nestedOptions
			});
		}
		// For array variants, create a nested fixedCollection with multipleValues
		else if (variant.isArray && Object.keys(variant.properties).length > 0) {
			// Build item fields from array items properties
			const itemValues = [];
			for (const [propName, propSchema] of Object.entries(variant.properties)) {
				const field = buildFieldFromSchema(propName, propSchema, '', doc, 0);
				if (field) {
					removeNestedRouting(field);
					if (requiredProps.includes(propName)) {
						field.required = true;
					}
					itemValues.push(field);
				}
			}
			
			// Create nested fixedCollection for array items
			// Use '_items' prefix so normalizeRequestBody knows to unwrap it to array
			values.push({
				displayName: 'Items',
				name: '_items',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true
				},
				default: {},
				placeholder: 'Add Item',
				options: [
					{
						name: 'items',
						displayName: 'Item',
						values: itemValues
					}
				]
			});
		} else {
			// Regular object variant (leaf node) - add all properties directly
			for (const [propName, propSchema] of Object.entries(variant.properties)) {
				const field = buildFieldFromSchema(propName, propSchema, parentPath, doc, 0);
				if (field) {
					// Remove routing from nested fields - parent handles all routing
					removeNestedRouting(field);
					// Mark required fields
					if (requiredProps.includes(propName)) {
						field.required = true;
					}
					values.push(field);
				}
			}
		}
		
		return {
			// Add '_' prefix to oneOf variant names so normalizeRequestBody knows to unwrap them
			name: '_' + lodash.camelCase(variant.name),
			displayName: variant.displayName,
			values
		};
	}
	
	// Build options for fixedCollection (each variant is an option)
	const options = variants.map(variant => buildVariantOption(variant, 0));
	
	return {
		displayName: originalProp.displayName || formatDisplayName(fieldName),
		name: fieldName,
		...(originalProp.required ? { required: true } : {}),
		description: originalProp.description || `Select ${formatDisplayName(fieldName)} type`,
		default: {},
		type: 'fixedCollection',
		displayOptions: originalProp.displayOptions,
		options,
		routing: {
			send: {
				preSend: [metadata.path === 'root' ? '__PRESEND_NORMALIZE_ROOT__' : '__PRESEND_NORMALIZE_FIELD__'],
				property: fieldName,
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}'
			}
		}
	};
}

/**
 * Build an n8n field from OpenAPI property schema
 * @param {string} name - Property name
 * @param {object} schema - OpenAPI schema
 * @param {string} parentPath - Parent path for routing
 * @returns {object} n8n field definition
 */
function buildFieldFromSchema(name, schema, parentPath, doc = null, depth = 0) {
	// Skip deprecated fields
	if (schema.deprecated) {
		return null;
	}
	
	// Prevent infinite recursion
	const MAX_DEPTH = 5;
	if (depth > MAX_DEPTH) {
		return {
			displayName: schema.title || formatDisplayName(name),
			name,
			type: 'json',
			default: '{}',
			description: schema.description || undefined,
			routing: {
				send: {
					property: parentPath ? `${parentPath}.${name}` : name,
					propertyInDotNotation: false,
					type: 'body',
					value: '={{ JSON.parse($value) }}'
				}
			}
		};
	}
	
	// Resolve $ref at root level
	if (schema.$ref && doc) {
		const resolved = resolveRef(doc, schema.$ref);
		if (resolved) {
			// Merge with original schema to preserve any overrides
			schema = { ...resolved, ...schema, $ref: undefined };
		}
	}
	
	// Resolve allOf by merging schemas
	if (schema.allOf && doc) {
		const merged = { 
			type: schema.type || 'object',
			description: schema.description,
			title: schema.title,
			properties: {},
			required: []
		};
		
		for (const item of schema.allOf) {
			let resolved = item;
			if (item.$ref) {
				resolved = resolveRef(doc, item.$ref);
			}
			if (resolved?.properties) {
				Object.assign(merged.properties, resolved.properties);
			}
			if (resolved?.required) {
				merged.required.push(...resolved.required);
			}
		}
		
		// Continue processing with merged schema
		schema = merged;
	}
	
	const routingPath = parentPath ? `${parentPath}.${name}` : name;
	
	// Handle schemas with oneOf/anyOf - build nested fixedCollection
	if ((schema.oneOf || schema.anyOf) && doc) {
		const variants = schema.oneOf || schema.anyOf;
		const fixedOptions = [];
		
		for (const variant of variants) {
			let resolved = variant;
			let variantName = null;
			
			if (variant.$ref) {
				resolved = resolveRef(doc, variant.$ref);
				variantName = variant.$ref.split('/').pop();
			}
			
			if (!resolved) continue;
			
			// Build values for this variant
			const values = [];
			const requiredProps = resolved.required || [];
			if (resolved.properties) {
				for (const [propName, propSchema] of Object.entries(resolved.properties)) {
					if (propSchema.deprecated) continue;
					
					let propResolved = propSchema;
					if (propSchema.$ref && doc) {
						propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
					}
					
					const field = buildFieldFromSchema(propName, propResolved, routingPath, doc, depth + 1);
					if (field) {
						// Mark as required if in parent's required array
						if (requiredProps.includes(propName)) {
							field.required = true;
						}
						values.push(field);
					}
				}
			}
			
			if (values.length > 0) {
				fixedOptions.push({
					// Add '_' prefix to oneOf variant names so normalizeRequestBody knows to unwrap them
					name: '_' + lodash.camelCase(variantName || resolved.title || `variant${fixedOptions.length}`),
					displayName: resolved.title || formatDisplayName(variantName || `Variant ${fixedOptions.length}`),
					values
				});
			}
		}
		
		if (fixedOptions.length > 0) {
			return {
				displayName: schema.title || formatDisplayName(name),
				name,
				type: 'fixedCollection',
				default: {},
				description: schema.description || undefined,
				options: fixedOptions,
				routing: {
					send: {
						property: routingPath,
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value }}'
					}
				},
				...(schema.required ? { required: true } : {})
			};
		}
		
		// Fallback to json if no valid options
		return {
			displayName: schema.title || formatDisplayName(name),
			name,
			type: 'json',
			default: '{}',
			description: schema.description || undefined,
			routing: {
				send: {
					property: routingPath,
					propertyInDotNotation: false,
					type: 'body',
					value: '={{ JSON.parse($value) }}'
				}
			},
			...(schema.required ? { required: true } : {})
		};
	}
	
	// Handle oneOf/anyOf without doc - fallback to json
	if (schema.oneOf || schema.anyOf) {
		return {
			displayName: schema.title || formatDisplayName(name),
			name,
			type: 'json',
			default: '{}',
			description: schema.description || undefined,
			routing: {
				send: {
					property: routingPath,
					propertyInDotNotation: false,
					type: 'body',
					value: '={{ JSON.parse($value) }}'
				}
			},
			...(schema.required ? { required: true } : {})
		};
	}
	
	// Determine field type
	let type = 'string';
	let options = undefined;
	let defaultValue = schema.default ?? '';
	
	// Check for enum first - applies to any type (string, integer, number)
	if (schema.enum && Array.isArray(schema.enum)) {
		type = 'options';
		// Keep enum values as-is for display names (don't transform)
		options = schema.enum.map(val => ({
			name: String(val),
			value: val
		}));
		// Add empty option for non-required fields
		if (!schema.required) {
			options.unshift({ name: '-', value: '' });
			defaultValue = '';
		} else {
			defaultValue = schema.enum[0];
		}
	} else if (schema.type === 'boolean') {
		type = 'boolean';
		defaultValue = schema.default ?? false;
	} else if (schema.type === 'integer' || schema.type === 'number') {
		type = 'number';
		defaultValue = schema.default;
	} else if (schema.type === 'array') {
		// Check if items are simple types - use fixedCollection with multipleValues
		const itemsSchema = schema.items || {};
		const itemType = itemsSchema.type;
		
		if (itemType === 'string' || itemType === 'integer' || itemType === 'number') {
			// Simple array - use fixedCollection for better UX
			const n8nItemType = itemType === 'string' ? 'string' : 'number';
			return {
				displayName: schema.title || formatDisplayName(name),
				name,
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true
				},
				default: {},
				description: schema.description || undefined,
				placeholder: 'Add Item',
				options: [
					{
						name: 'items',
						displayName: 'Items',
						values: [
							{
								displayName: 'Value',
								// Use '_value' prefix so normalizeRequestBody knows to unwrap it
								name: '_value',
								type: n8nItemType,
								default: n8nItemType === 'string' ? '' : 0,
								description: itemsSchema.description || undefined
							}
						]
					}
				],
				routing: {
					send: {
						property: routingPath,
						propertyInDotNotation: false,
						type: 'body',
						value: '={{ $value.items?.map(i => i._value) || undefined }}'
					}
				}
			};
		}
		
		// Check for array of objects with known properties
		let itemsResolved = itemsSchema;
		if (itemsSchema.$ref && doc) {
			itemsResolved = resolveRef(doc, itemsSchema.$ref) || itemsSchema;
		}
		
		// Handle allOf in items schema
		if (itemsResolved?.allOf && doc) {
			const merged = { 
				type: itemsResolved.type || 'object',
				description: itemsResolved.description,
				title: itemsResolved.title,
				properties: {},
				required: []
			};
			
			for (const item of itemsResolved.allOf) {
				let resolved = item;
				if (item.$ref) {
					resolved = resolveRef(doc, item.$ref);
				}
				if (resolved?.properties) {
					Object.assign(merged.properties, resolved.properties);
				}
				if (resolved?.required) {
					merged.required.push(...resolved.required);
				}
			}
			itemsResolved = merged;
		}
		
		if (itemsResolved?.type === 'object' && itemsResolved?.properties && doc) {
			// Build fields for each property in the items schema
			const itemFields = [];
			const itemRequired = itemsResolved.required || [];
			
			for (const [propName, propSchema] of Object.entries(itemsResolved.properties)) {
				if (propSchema.deprecated) continue;
				
				let propResolved = propSchema;
				if (propSchema.$ref) {
					propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
				}
				
				const field = buildFieldFromSchema(propName, propResolved, routingPath, doc, depth + 1);
				if (field) {
					if (itemRequired.includes(propName)) {
						field.required = true;
					}
					itemFields.push(field);
				}
			}
			
			if (itemFields.length > 0) {
				return {
					displayName: schema.title || formatDisplayName(name),
					name,
					type: 'fixedCollection',
					typeOptions: {
						multipleValues: true
					},
					default: {},
					description: schema.description || undefined,
					placeholder: 'Add Item',
					options: [
						{
							name: 'items',
							displayName: itemsResolved.title || 'Item',
							values: itemFields
						}
					],
					routing: {
						send: {
							property: routingPath,
							propertyInDotNotation: false,
							type: 'body',
							value: '={{ $value.items || undefined }}'
						}
					}
				};
			}
		}
		
		// Handle arrays with oneOf/anyOf items - build fixedCollection with variants
		if ((itemsResolved?.oneOf || itemsResolved?.anyOf) && doc) {
			const variants = itemsResolved.oneOf || itemsResolved.anyOf;
			const fixedOptions = [];
			
			for (const variant of variants) {
				let resolved = variant;
				let variantName = null;
				
				if (variant.$ref) {
					resolved = resolveRef(doc, variant.$ref);
					variantName = variant.$ref.split('/').pop();
				}
				
				if (!resolved) continue;
				
				// Build values for this variant
				const values = [];
				const requiredProps = resolved.required || [];
				if (resolved.properties) {
					for (const [propName, propSchema] of Object.entries(resolved.properties)) {
						if (propSchema.deprecated) continue;
						
						let propResolved = propSchema;
						if (propSchema.$ref && doc) {
							propResolved = resolveRef(doc, propSchema.$ref) || propSchema;
						}
						
						const field = buildFieldFromSchema(propName, propResolved, routingPath, doc, depth + 1);
						if (field) {
							// Remove routing from nested fields - parent handles it
							delete field.routing;
							if (requiredProps.includes(propName)) {
								field.required = true;
							}
							values.push(field);
						}
					}
				}
				
				if (values.length > 0) {
					fixedOptions.push({
						name: lodash.camelCase(variantName || resolved.title || `variant${fixedOptions.length}`),
						displayName: resolved.title || formatDisplayName(variantName || `Variant ${fixedOptions.length}`),
						values
					});
				}
			}
			
			if (fixedOptions.length > 0) {
				const flattenName = `flatten:${name}`;
				return {
					displayName: schema.title || formatDisplayName(name),
					name: flattenName, // Add flatten: prefix - normalizeValue will flatten all variant arrays
					type: 'fixedCollection',
					typeOptions: {
						multipleValues: true
					},
					default: {},
					description: schema.description || `Add ${formatDisplayName(name)}`,
					placeholder: 'Add Item',
					options: fixedOptions,
					routing: {
						send: {
							preSend: ['__PRESEND_NORMALIZE_FIELD__'], // Process flatten: prefix
							property: `flatten:${routingPath}`, // Include prefix so normalizeValue sees it
							propertyInDotNotation: false,
							type: 'body',
							value: '={{ $value }}' // Flattening is handled by normalizeValue
						}
					}
				};
			}
		}
		
		// Complex array items - fall back to json
		type = 'json';
		defaultValue = '[]';
	} else if (schema.type === 'object') {
		// Check if object has known properties - expand to fixedCollection
		if (schema.properties && Object.keys(schema.properties).length > 0) {
			const nestedFields = [];
			const requiredProps = Array.isArray(schema.required) ? schema.required : [];
			
			for (const [propName, propSchema] of Object.entries(schema.properties)) {
				const nestedField = buildFieldFromSchema(propName, propSchema, routingPath, doc, depth + 1);
				if (nestedField) {
					// Remove routing from nested fields - fixedCollection handles it
					delete nestedField.routing;
					// Mark required fields
					if (requiredProps.includes(propName)) {
						nestedField.required = true;
					}
					nestedFields.push(nestedField);
				}
			}
			
			// Handle additionalProperties with a simple value type (integer/string/boolean).
			// Rendered as a multipleValues fixedCollection where each entry is {key, value}.
			// The 'spread:' prefix tells normalizeValue to spread entries into the parent object.
			if (schema.additionalProperties && typeof schema.additionalProperties === 'object'
					&& schema.additionalProperties !== true) {
				let addlSchema = schema.additionalProperties;
				if (addlSchema.$ref && doc) {
					addlSchema = resolveRef(doc, addlSchema.$ref) || addlSchema;
				}
				const addlType = (addlSchema.type === 'integer' || addlSchema.type === 'number') ? 'number'
					: addlSchema.type === 'string' ? 'string'
					: addlSchema.type === 'boolean' ? 'boolean'
					: null;
				if (addlType !== null) {
					nestedFields.push({
						displayName: 'Additional Properties',
						name: 'spread:additionalProperties',
						description: addlSchema.description,
						type: 'fixedCollection',
						typeOptions: { multipleValues: true },
						default: {},
						placeholder: 'Add Property',
						options: [
							{
								name: 'items',
								displayName: 'Items',
								values: [
									{
										displayName: 'Key',
										name: 'key',
										type: 'string',
										default: '',
									},
									{
										displayName: 'Value',
										name: 'value',
										type: addlType,
										default: addlType === 'string' ? '' : 0,
										description: addlSchema.description,
									},
								],
							},
						],
					});
				}
			}
			
			if (nestedFields.length > 0) {
				// Use fixedCollection with single option containing all fields
				return {
					displayName: schema.title || formatDisplayName(name),
					name,
					type: 'fixedCollection',
					default: {},
					description: schema.description || undefined,
					placeholder: 'Add Field',
					options: [
						{
							name: 'fields',
							displayName: 'Fields',
							values: nestedFields
						}
					],
					routing: {
						send: {
							property: routingPath,
							propertyInDotNotation: false,
							type: 'body',
							value: '={{ $value.fields || undefined }}'
						}
					}
				};
			}
		}
		// Fallback to JSON for complex objects
		type = 'json';
		defaultValue = '{}';
	}
	
	const field = {
		displayName: schema.title || formatDisplayName(name),
		name,
		type,
		default: defaultValue,
		description: schema.description || undefined,
		routing: {
			send: {
				property: routingPath,
				propertyInDotNotation: false,
				type: 'body',
				value: type === 'json' ? '={{ JSON.parse($value) }}' : '={{ $value || undefined }}'
			}
		}
	};
	
	// Set required if specified in schema
	if (schema.required) {
		field.required = true;
	}
	
	if (options) {
		field.options = options;
	}
	
	if (schema.example !== undefined) {
		// For objects/arrays, use JSON.stringify; for primitives, use String()
		field.placeholder = typeof schema.example === 'object' 
			? JSON.stringify(schema.example) 
			: String(schema.example);
	}
	
	return field;
}

// ============================================================================
// PAGINATION SUPPORT
// Add returnAll/limit pattern to operations with limit+offset
// ============================================================================

/**
 * Find operations that support pagination (have both limit AND offset)
 * @param {object[]} properties - Properties array
 * @returns {Map<string, {resource: string, operation: string}>} Map of "resource:operation" to metadata
 */
function findPaginatedOperations(properties) {
	const opsWithLimit = new Map();
	const opsWithOffset = new Set();

	for (const prop of properties) {
		const isLimitOrOffset = prop.name === 'limit' || prop.name === 'offset';
		if (!isLimitOrOffset || !prop.displayOptions?.show?.operation) {
			continue;
		}

			const resource = prop.displayOptions.show.resource?.[0];
			const operations = prop.displayOptions.show.operation;
			
			for (const op of operations) {
				const key = `${resource}:${op}`;
				if (prop.name === 'limit') {
					opsWithLimit.set(key, { resource, operation: op });
				} else {
					opsWithOffset.add(key);
			}
		}
	}

	// Return only operations that have BOTH limit AND offset
	const paginatedOps = new Map();
	for (const [key, value] of opsWithLimit) {
		if (opsWithOffset.has(key)) {
			paginatedOps.set(key, value);
		}
	}

	return paginatedOps;
}

/**
 * Add pagination routing to operation definitions
 * @param {object[]} properties - Properties array
 * @param {Map} paginatedOps - Map of paginated operations
 */
function addPaginationRouting(properties, paginatedOps) {
	for (const prop of properties) {
		if (prop.name !== 'operation' || !prop.options) {
			continue;
		}

			const resource = prop.displayOptions?.show?.resource?.[0];

			for (const option of prop.options) {
				const key = `${resource}:${option.value}`;

				if (paginatedOps.has(key) && option.routing) {
					option.routing.send = {
						...option.routing.send,
						paginate: '={{$parameter["returnAll"]}}'
					};
					option.routing.output = {
						postReceive: [
							{
								type: 'rootProperty',
								enabled: '={{!$parameter["returnAll"]}}',
							properties: { property: 'data' }
							}
						]
					};
				}
			}
		}
	}

/**
 * Add preSend to PATCH operation options to transform data to JSON Patch format
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
/**
 * Add preSend to PATCH operations and wrap body fields in a collection.
 * Path parameters (in URL) remain as required fields, body parameters go into "Update Fields" collection.
 * 
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function addPatchPreSend(properties) {
	// Add preSend to PATCH operation options
	for (const prop of properties) {
		if (prop.name !== 'operation' || !prop.options) continue;
		
		for (const option of prop.options) {
			if (!patchOperationIds.has(option.value)) continue;
			
			if (!option.routing) option.routing = {};
			if (!option.routing.send) option.routing.send = {};
			option.routing.send.preSend = ['__PRESEND_TRANSFORM_TO_JSON_PATCH__'];
		}
	}
	
	// Group body fields by operation for collection wrapping
	const patchBodyFields = new Map(); // operationId -> { resource, fieldIndices[] }
	
	for (let i = 0; i < properties.length; i++) {
		const prop = properties[i];
		
		// Skip if not a body field
		if (prop.routing?.send?.type !== 'body') continue;
		
		// Get operations this field belongs to
		const operations = prop.displayOptions?.show?.operation;
		if (!operations || !Array.isArray(operations)) continue;
		
		// Check if any operation is a PATCH operation we transformed
		for (const opId of operations) {
			if (!patchOperationIds.has(opId)) continue;
			
			const resource = prop.displayOptions?.show?.resource?.[0];
			if (!resource) continue;
			
			if (!patchBodyFields.has(opId)) {
				patchBodyFields.set(opId, { resource, fieldIndices: [] });
			}
			patchBodyFields.get(opId).fieldIndices.push(i);
		}
	}
	
	// Collect indices of fields to remove
	const fieldsToRemove = new Set();
	const collectionsToAdd = [];
	
	for (const [opId, { resource, fieldIndices }] of patchBodyFields) {
		if (fieldIndices.length === 0) continue;
		
		// Build collection options from fields
		const options = fieldIndices.map(idx => {
			fieldsToRemove.add(idx);
			const prop = properties[idx];
			
			// Clone field without displayOptions, required, and routing
			const option = { ...prop };
			delete option.displayOptions;
			delete option.required;
			delete option.routing;
			
			return option;
		});
		
		collectionsToAdd.push({
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions: {
				show: {
					resource: [resource],
					operation: [opId]
				}
			},
			options,
			routing: {
				send: {
					type: 'body',
					value: '={{ $value }}'
				}
			}
		});
	}
	
	// Filter out removed fields and add collections
	const newProperties = properties.filter((_, i) => !fieldsToRemove.has(i));
	newProperties.push(...collectionsToAdd);
	
	return newProperties;
}

/**
 * Add preSend to batch operation options to extract array from wrapper object
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
/**
 * addBatchPreSend is no longer needed - preSend is now added directly to the items field
 * in buildBatchItemsFixedCollection. Operation-level preSend was causing issues because
 * it executed before the body was assembled.
 */
function addBatchPreSend(properties) {
	// No-op - preSend is handled by the items field routing
	return properties;
}

/**
 * Add json: prefix to JSON fields inside fixedCollections/collections so normalizeRequestBody
 * knows to parse them. Only processes fields without their own routing (nested fields).
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function addJsonFieldPrefix(properties) {
	for (const prop of properties) {
		// Process fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (!option.values) continue;
				
				for (const field of option.values) {
					// Add json: prefix to JSON fields that don't have their own routing
					if (field.type === 'json' && !field.routing?.send?.value?.includes('JSON.parse')) {
						field.name = `json:${field.name}`;
					}
					
					// Recurse into nested fixedCollections/collections
					if ((field.type === 'fixedCollection' || field.type === 'collection') && field.options) {
						addJsonFieldPrefix([field]);
					}
				}
			}
		}
		
		// Process collection options (like updateFields)
		if (prop.type === 'collection' && prop.options) {
			for (const field of prop.options) {
				// Add json: prefix to JSON fields that don't have their own routing
				if (field.type === 'json' && !field.routing?.send?.value?.includes('JSON.parse')) {
					field.name = `json:${field.name}`;
				}
				
				// Recurse into nested fixedCollections/collections
				if ((field.type === 'fixedCollection' || field.type === 'collection') && field.options) {
					addJsonFieldPrefix([field]);
				}
			}
		}
	}
	
	return properties;
}

/**
 * Add postReceive to DELETE operations to return meaningful response
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function addDeletePostReceive(properties) {
	for (const prop of properties) {
		// Find operation properties with options
		if (prop.name !== 'operation' || !prop.options) continue;
		
		for (const option of prop.options) {
			// Check if this is a DELETE operation
			if (option.routing?.request?.method !== 'DELETE') continue;
			
			// Add postReceive to the operation's routing
			if (!option.routing.output) option.routing.output = {};
			
			// Add postReceive that returns a success message
			option.routing.output.postReceive = [
				{
					type: 'set',
					properties: {
						value: '={{ { "success": true } }}'
					}
				}
			];
		}
	}
	
	return properties;
}

/**
 * Add postReceive to non-paginated GET list operations to extract items from data.
 * This handles operations that return { data: [...] } but don't have limit/offset parameters.
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function addNonPaginatedListPostReceive(properties) {
	for (const prop of properties) {
		// Find operation properties with options
		if (prop.name !== 'operation' || !prop.options) continue;
		
		for (const option of prop.options) {
			// Check if this is a GET list operation (ends with .getMany or name starts with "List")
			const isGetMethod = option.routing?.request?.method === 'GET';
			const isListOperation = option.value?.endsWith('.getMany') || option.name?.startsWith('List');
			
			if (!isGetMethod || !isListOperation) continue;
			
			// Skip if already has postReceive (e.g., paginated operations)
			if (option.routing?.output?.postReceive) continue;
			
			// Add postReceive to extract items from data
			if (!option.routing.output) option.routing.output = {};
			option.routing.output.postReceive = [
				{
					type: 'rootProperty',
					properties: { property: 'data' }
				}
			];
		}
	}
	
	return properties;
}

/**
 * Add JSON body field for operations with empty object request body.
 * These operations have {type: object} without properties, so we need a generic JSON field.
 * 
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties with JSON body fields added
 */
function addEmptyObjectBodyFields(properties) {
	if (emptyObjectBodyOperations.size === 0) return properties;
	
	const newProperties = [...properties];
	
	for (const [operationId, metadata] of emptyObjectBodyOperations) {
		// Create JSON body field
		const jsonField = {
			displayName: 'Request Body (JSON)',
			name: 'body',
			type: 'json',
			default: '{}',
			required: true,
			description: 'The request body as JSON. The structure depends on the specific application.',
			displayOptions: {
				show: {
					resource: [metadata.resource],
					operation: [operationId],
				},
			},
		};
		
		newProperties.push(jsonField);
		
		// Add preSend to operation
		for (const prop of properties) {
			if (prop.name !== 'operation') continue;
			if (!prop.options) continue;
			
			for (const opt of prop.options) {
				if (opt.value === operationId) {
					if (!opt.routing) opt.routing = {};
					if (!opt.routing.send) opt.routing.send = {};
					if (!opt.routing.send.preSend) opt.routing.send.preSend = [];
					opt.routing.send.preSend.push('__PRESEND_JSON_BODY_FIELD__');
				}
			}
		}
	}
	
	return newProperties;
}

/**
 * Set operation default to the first option's value.
 * n8n linting rule: n8n-nodes-base/node-param-default-wrong-for-options
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function setOperationDefaults(properties) {
	for (const prop of properties) {
		if (prop.name === 'operation' && prop.type === 'options' && Array.isArray(prop.options) && prop.options.length > 0) {
			// Set default to first operation value
			const firstOption = prop.options[0];
			if (firstOption && typeof firstOption.value === 'string') {
				prop.default = firstOption.value;
			}
		}
	}
	
	return properties;
}

/**
 * Remove option descriptions that are identical to the option name.
 * n8n linting rule: n8n-nodes-base/node-param-option-description-identical-to-name
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function removeIdenticalDescriptions(properties) {
	// Normalize string for comparison: lowercase, remove trailing punctuation
	const normalize = (str) => str.toLowerCase().replace(/[.\s]+$/, '');
	
	for (const prop of properties) {
		// Check if property has description identical to displayName (normalized)
		if (prop.description && prop.displayName && normalize(prop.description) === normalize(prop.displayName)) {
			delete prop.description;
		}
		
		// Process options arrays
		if (prop.options && Array.isArray(prop.options)) {
			for (const option of prop.options) {
				// Check if option has description identical to name (normalized)
				if (option.description && option.name && normalize(option.description) === normalize(option.name)) {
					delete option.description;
				}
				// Recurse into fixedCollection option values
				if (option.values && Array.isArray(option.values)) {
					removeIdenticalDescriptions(option.values);
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					removeIdenticalDescriptions(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			removeIdenticalDescriptions(prop.options);
		}
	}
	
	return properties;
}

/**
 * Remove required: false from properties (it's the default value).
 * n8n linting rule: n8n-nodes-base/node-param-required-false
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function removeRequiredFalse(properties) {
	for (const prop of properties) {
		if (prop.required === false) {
			delete prop.required;
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					removeRequiredFalse(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			removeRequiredFalse(prop.options);
		}
	}
	
	return properties;
}

/**
 * Fix miscased words in descriptions (url -> URL, api -> API, id -> ID, etc.)
 * n8n linting rule: n8n-nodes-base/node-param-description-miscased-url
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function fixDescriptionCasing(properties) {
	// Word replacements (case-insensitive match, specific replacement)
	const replacements = [
		[/\burl\b/gi, 'URL'],
	];
	
	function fixText(text) {
		if (!text || typeof text !== 'string') return text;
		for (const [pattern, replacement] of replacements) {
			text = text.replace(pattern, replacement);
		}
		return text;
	}
	
	for (const prop of properties) {
		if (prop.description) {
			prop.description = fixText(prop.description);
		}
		
		// Process options arrays
		if (prop.options && Array.isArray(prop.options)) {
			for (const option of prop.options) {
				if (option.description) {
					option.description = fixText(option.description);
				}
				// Recurse into fixedCollection option values
				if (option.values && Array.isArray(option.values)) {
					fixDescriptionCasing(option.values);
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					fixDescriptionCasing(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			fixDescriptionCasing(prop.options);
		}
	}
	
	return properties;
}

/**
 * Add typeOptions.password = true to sensitive fields (apiKey, secret, password, token).
 * n8n linting rule: n8n-nodes-base/cred-class-field-type-options-password-missing
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function addPasswordTypeOptions(properties) {
	const sensitiveNames = ['apikey', 'secret', 'password', 'token', 'apitoken', 'accesstoken', 'secretkey', 'accesskey', 'privatekey', 'clientsecret'];
	
	for (const prop of properties) {
		// Check if this is a sensitive string field
		if (prop.type === 'string' && prop.name && sensitiveNames.includes(prop.name.toLowerCase())) {
			prop.typeOptions = { ...prop.typeOptions, password: true };
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					addPasswordTypeOptions(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			addPasswordTypeOptions(prop.options);
		}
	}
	
	return properties;
}

/**
 * Reorder property keys so displayName is first.
 * n8n linting rule: n8n-nodes-base/node-param-display-name-not-first-position
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties with reordered keys
 */
function reorderPropertyKeys(properties) {
	function reorderObject(obj) {
		if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj;
		
		// If object has displayName, put it first
		if ('displayName' in obj) {
			const { displayName, ...rest } = obj;
			const reordered = { displayName, ...rest };
			// Copy back to original object
			Object.keys(obj).forEach(key => delete obj[key]);
			Object.assign(obj, reordered);
		}
		
		return obj;
	}
	
	for (const prop of properties) {
		// Reorder the property itself
		reorderObject(prop);
		
		// Reorder options
		if (prop.options && Array.isArray(prop.options)) {
			for (const option of prop.options) {
				reorderObject(option);
				// Reorder values in fixedCollection options
				if (option.values && Array.isArray(option.values)) {
					for (const val of option.values) {
						reorderObject(val);
					}
					// Recursively process nested properties
					reorderPropertyKeys(option.values);
				}
			}
		}
	}
	
	return properties;
}

/**
 * Normalize enum options so that name === value
 * This unifies the format from the library (which capitalizes names) with our post-processing
 * Only applies to form field enums, not to resource/operation selectors
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties
 */
function normalizeEnumOptions(properties) {
	for (const prop of properties) {
		// Skip resource and operation selectors - they should keep human-readable names
		if (prop.name === 'resource' || prop.name === 'operation') continue;
		
		// Handle options arrays (for 'options' type fields)
		if (prop.options && Array.isArray(prop.options)) {
			for (const option of prop.options) {
				// Skip operation options (they have routing)
				if (option.routing) continue;
				
				// Skip placeholder options
				if (option.value === '' || option.name === '-') continue;
				
				// Skip if option has nested values (fixedCollection)
				if (option.values) {
					normalizeEnumOptions(option.values);
					continue;
				}
				
				// Make name equal to value (keep original API value)
				if (option.value !== undefined && option.name !== option.value) {
					option.name = String(option.value);
				}
			}
		}
		
		// Recurse into fixedCollection options
		if (prop.type === 'fixedCollection' && prop.options) {
			for (const option of prop.options) {
				if (option.values) {
					normalizeEnumOptions(option.values);
				}
			}
		}
		
		// Recurse into collection options
		if (prop.type === 'collection' && prop.options) {
			normalizeEnumOptions(prop.options);
		}
	}
	
	return properties;
}

/**
 * Create returnAll property for a paginated operation
 * @param {string} resource - Resource name
 * @param {string} operation - Operation name
 * @returns {object} returnAll property
 */
function createReturnAllProperty(resource, operation) {
	return {
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: true,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions: {
				show: {
					resource: [resource],
					operation: [operation]
				}
			}
	};
}

/**
 * Add routing to _body fixedCollections (generated by library for root-level oneOf)
 * The routing extracts the selected variant's data and unwraps nested fixedCollection wrappers
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties with routing added
 */
function addRoutingToBodyFixedCollections(properties) {
	let addedCount = 0;
	for (const prop of properties) {
		// Find _body fixedCollections (generated by library for root-level oneOf)
		if (prop.name === '_body' && prop.type === 'fixedCollection' && !prop.routing) {
			addedCount++;
			// Add routing that extracts variant data and unwraps nested wrappers
			prop.routing = {
				send: {
					type: 'body',
					value: `={{ (() => {
						const variant = Object.values($value)[0];
						if (!variant) return undefined;
						const unwrap = (obj) => {
							if (typeof obj !== 'object' || obj === null) return obj;
							if (Array.isArray(obj)) return obj.map(unwrap);
							const result = {};
							for (const [k, v] of Object.entries(obj)) {
								if (v && typeof v === 'object' && !Array.isArray(v) && v.items && Array.isArray(v.items) && Object.keys(v).length === 1) {
									result[k] = v.items.map(unwrap);
								} else {
									result[k] = unwrap(v);
								}
							}
							return result;
						};
						return unwrap(variant);
					})() }}`
				}
			};
			
			// Remove routing from all nested fields - parent handles everything
			if (prop.options) {
				for (const opt of prop.options) {
					if (opt.values) {
						for (const val of opt.values) {
							removeNestedRouting(val);
						}
					}
				}
			}
		}
	}
	
	
	return properties;
}

/**
 * Add pagination support to operations that have both limit and offset parameters
 * @param {object[]} properties - Properties array
 * @returns {object[]} Modified properties with pagination support
 */
function addPaginationToOperations(properties) {
	const paginatedOps = findPaginatedOperations(properties);

	// Add pagination routing to operation definitions
	addPaginationRouting(properties, paginatedOps);

	// Filter and modify properties
	const newProperties = [];

	for (const prop of properties) {
		const propOperations = prop.displayOptions?.show?.operation;
		const propResource = prop.displayOptions?.show?.resource?.[0];

		const isForPaginatedOp = propOperations?.some(op => {
			return paginatedOps.has(`${propResource}:${op}`);
		});

		// Skip offset for paginated operations
		if (prop.name === 'offset' && isForPaginatedOp) {
			continue;
		}

		// Add returnAll condition to limit
		if (prop.name === 'limit' && isForPaginatedOp) {
			prop.displayOptions = JSON.parse(JSON.stringify(prop.displayOptions));
			prop.displayOptions.show.returnAll = [false];
		}

		newProperties.push(prop);
	}

	// Add returnAll parameters
	const addedReturnAll = new Set();
	for (const [key, { resource, operation }] of paginatedOps) {
		if (addedReturnAll.has(key)) continue;
		addedReturnAll.add(key);
		newProperties.push(createReturnAllProperty(resource, operation));
	}

	return newProperties;
}

// ============================================================================
// FILE GENERATION
// Split properties by resource and write TypeScript files
// ============================================================================

/**
 * Split properties array by resource
 * @param {object[]} properties - Properties array
 * @returns {{resourceProp: object, resourcesByValue: object}}
 */
function splitByResource(properties) {
	const resourceProp = properties.find(p => p.name === 'resource');
	if (!resourceProp) {
		throw new Error('No resource property found');
	}

	// Filter out empty resource values
	const resources = resourceProp.options.map(opt => opt.value).filter(v => v);
	const resourcesByValue = {};

	for (const resource of resources) {
		const isForResource = (p) => p.displayOptions?.show?.resource?.includes(resource);

		resourcesByValue[resource] = {
			operations: properties.filter(p => p.name === 'operation' && isForResource(p)),
			fields: properties.filter(p => 
				p.name !== 'resource' && 
				p.name !== 'operation' &&
				p.name !== 'returnAll' &&
				isForResource(p)
			),
			returnAll: properties.filter(p => p.name === 'returnAll' && isForResource(p))
		};
	}

	return { resourceProp, resourcesByValue };
}

/**
 * Stringify properties for TypeScript output
 * @param {object} value - Value to stringify
 * @returns {string} TypeScript-compatible string
 */
function stringifyForTs(value) {
	return stringify(value, null, STRINGIFY_OPTIONS.indent)
		.replace(/'default':/g, 'default:'); // 'default' is reserved word
}

/**
 * Generate TypeScript content for a resource file
 * @param {string} resourceValue - Resource identifier
 * @param {object[]} properties - Properties for this resource
 * @returns {string} TypeScript file content
 */
function generateResourceFileContent(resourceValue, properties) {
	let propertiesStr = stringifyForTs(properties);
	
	// Check for preSend placeholders
	const hasPatchOperations = propertiesStr.includes('__PRESEND_TRANSFORM_TO_JSON_PATCH__');
	const hasNormalizeRoot = propertiesStr.includes('__PRESEND_NORMALIZE_ROOT__');
	const hasNormalizeField = propertiesStr.includes('__PRESEND_NORMALIZE_FIELD__');
	const hasBatchOperations = propertiesStr.includes('__PRESEND_EXTRACT_BATCH_ITEMS__');
	
	// Check for JSON body field placeholder
	const hasParseJsonBody = propertiesStr.includes('__PRESEND_JSON_BODY_FIELD__');
	
	// Replace placeholders with actual function references
	if (hasPatchOperations) {
		propertiesStr = propertiesStr.replace(
			/'__PRESEND_TRANSFORM_TO_JSON_PATCH__'/g,
			'transformToJsonPatch'
		);
	}
	if (hasNormalizeRoot) {
		propertiesStr = propertiesStr.replace(
			/'__PRESEND_NORMALIZE_ROOT__'/g,
			'normalizeRootBody'
		);
	}
	if (hasNormalizeField) {
		propertiesStr = propertiesStr.replace(
			/'__PRESEND_NORMALIZE_FIELD__'/g,
			'normalizeFieldBody'
		);
	}
	if (hasBatchOperations) {
		propertiesStr = propertiesStr.replace(
			/'__PRESEND_EXTRACT_BATCH_ITEMS__'/g,
			'extractBatchItems'
		);
	}
	// Replace JSON body field placeholder
	if (hasParseJsonBody) {
		propertiesStr = propertiesStr.replace(
			/'__PRESEND_JSON_BODY_FIELD__'/g,
			'parseJsonBodyField()'
		);
	}
	// Build imports
	const imports = [`import type { INodeProperties } from 'n8n-workflow';`];
	const preSendImports = [];
	if (hasPatchOperations) preSendImports.push('transformToJsonPatch');
	if (hasNormalizeRoot) preSendImports.push('normalizeRootBody');
	if (hasNormalizeField) preSendImports.push('normalizeFieldBody');
	if (hasBatchOperations) preSendImports.push('extractBatchItems');
	if (hasParseJsonBody) preSendImports.push('parseJsonBodyField');
	
	if (preSendImports.length > 0) {
		imports.push(`import { ${preSendImports.join(', ')} } from '../../../utils/preSend';`);
	}

	return `// Auto-generated - do not edit manually

${imports.join('\n')}

export const ${resourceValue}Properties: INodeProperties[] = ${propertiesStr};
`;
}

/**
 * Generate TypeScript content for index file
 * @param {object} resourceProp - Resource selector property
 * @param {string[]} resourceNames - List of resource names
 * @returns {string} TypeScript file content
 */
function generateIndexFileContent(resourceProp, resourceNames) {
	const imports = resourceNames
		.map(r => `import { ${r}Properties } from './${r}';`)
		.join('\n');

	const spreads = resourceNames
		.map(r => `\t...${r}Properties,`)
		.join('\n');

	const resourcePropStr = stringifyForTs(resourceProp);

	return `// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
${imports}

const resourceProperty: INodeProperties = ${resourcePropStr};

export const properties: INodeProperties[] = [
	resourceProperty,
${spreads}
];
`;
}

/**
 * Write generated files to disk
 * @param {string} outputDir - Output directory path
 * @param {object} resourceProp - Resource selector property
 * @param {object} resourcesByValue - Properties grouped by resource
 */
function writeGeneratedFiles(outputDir, resourceProp, resourcesByValue) {
	// Prepare output directory
		if (fs.existsSync(outputDir)) {
			fs.rmSync(outputDir, { recursive: true });
		}
		fs.mkdirSync(outputDir, { recursive: true });

		const allResourceNames = Object.keys(resourcesByValue);
		const resourceNames = [];

	// Write individual resource files (skip resources with 0 operations)
		for (const resourceValue of allResourceNames) {
			const resourceData = resourcesByValue[resourceValue];
			
			// Skip resources with no operations
			if (resourceData.operations.length === 0) {
				continue;
			}
			
			resourceNames.push(resourceValue);
		const properties = [
				...resourceData.operations,
				...resourceData.fields,
				...resourceData.returnAll
			];

		const content = generateResourceFileContent(resourceValue, properties);
		fs.writeFileSync(path.join(outputDir, `${resourceValue}.ts`), content);
	}

	// Filter resourceProp options to only include resources with operations
	// Also remove empty descriptions
	const filteredOptions = resourceProp.options
		.filter(opt => resourceNames.includes(opt.value))
		.map(opt => {
			if (opt.description === '' || opt.description === undefined) {
				const { description, ...rest } = opt;
				return rest;
			}
			return opt;
		});
	
	const filteredResourceProp = {
		...resourceProp,
		options: filteredOptions,
		// Set default to first option value
		default: filteredOptions.length > 0 ? filteredOptions[0].value : '',
	};

	// Write index file
	const indexContent = generateIndexFileContent(filteredResourceProp, resourceNames);
	fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);

	return resourceNames.length;
}

// ============================================================================
// MAIN PROCESSING PIPELINE
// ============================================================================

/** Collected unsupported endpoints (with oneOf/anyOf in request body) */
const unsupportedEndpoints = new Map();

/**
 * Process a single OpenAPI config and generate properties
 * @param {object} config - OpenAPI configuration
 */
async function processConfig(config) {
	const outputDir = path.join(nodesDir, config.outputDir);
	console.log(`Processing ${config.name}...`);

	// Clear tracking sets for this config
	patchOperationIds = new Set();
	batchOperationIds = new Set();
	dateTimeFieldPaths = new Map();
	batchOperationsMetadata = new Map();
	dynamicSkipOperations = new Set();
	oneOfMetadata = new Map();
	enumArraysMetadata = new Map();
	singleEnumsMetadata = new Map();
	polymorphicArraysMetadata = new Map();
	objectPropertiesMetadata = new Map();
	objectArraysMetadata = new Map();
	dateTimeFieldsMetadata = new Map();
	booleanDefaultsMetadata = new Map();
	emptyObjectBodyOperations = new Map();

	// Fetch and preprocess OpenAPI document
	let doc = await fetchOpenApiDoc(config.url);

	// Flatten allOf schemas first (this propagates deprecated flags from parent to child)
	doc = flattenAllOf(doc);
	
	// Remove deprecated properties after flattening (so inherited deprecated flags are processed)
	removeDeprecatedProperties(doc);
	
	// Remove deprecated parameters from operations (query/path parameters)
	removeDeprecatedParameters(doc);
	
	// Remove 'fields' property from root of request bodies (custom fields with undefined schema)
	removeFieldsProperty(doc);

	// Mark enum arrays for conversion to multiOptions
	markEnumArraysInSpec(doc);
	
	// Mark single-value enums for conversion to options
	markSingleEnumsInSpec(doc);
	
	// Mark simple arrays for conversion to fixedCollection
	markSimpleArraysInSpec(doc);
	
	// Mark polymorphic arrays for conversion to fixedCollection with variants
	markPolymorphicArraysInSpec(doc);
	
	// Mark objects with properties for conversion to fixedCollection
	markObjectPropertiesInSpec(doc);
	
	// Mark object arrays (array of plain objects) for conversion to fixedCollection
	markObjectArraysInSpec(doc);
	
	// Mark dateTime fields for conversion from string to dateTime
	markDateTimeFieldsInSpec(doc);
	
	// Mark boolean fields with explicit defaults from OpenAPI spec
	markBooleanDefaultsInSpec(doc);
	
	// Mark operations with empty object request body (need generic JSON field)
	markEmptyObjectBodyOperations(doc);

	// Pre-process oneOf schemas: transform to flat structures
	const oneOfCount = transformOneOfInSpec(doc);

	// Pre-process PATCH operations: transform JSON Patch schema to regular schema
	const patchCount = transformPatchOperationsInSpec(doc);

	// Pre-process batch operations: transform array body to wrapper object
	const batchCount = transformBatchOperationsInSpec(doc);

	// Find remaining unsupported operations (those we couldn't transform)
	const configUnsupported = findUnsupportedOperations(doc);
	
	// Add to dynamic skip list
	for (const opId of configUnsupported.keys()) {
		dynamicSkipOperations.add(opId);
	}
	
	// Collect for final report
	for (const [opId, info] of configUnsupported) {
		if (!unsupportedEndpoints.has(opId)) {
			unsupportedEndpoints.set(opId, { ...info, configs: [config.name] });
		} else {
			unsupportedEndpoints.get(opId).configs.push(config.name);
		}
	}

	// Generate base properties
	const parser = new N8NPropertiesBuilder(doc, BUILDER_CONFIG);
	let properties = parser.build();

	// Apply transformations pipeline
	properties = fixOrderByFields(properties);
	properties = fixLimitFields(properties);  // Fix limit fields with correct description and default
	properties = fixOptionalValues(properties);
	properties = fixArrayOptionValues(properties);
	properties = fixBooleanDefaults(properties);
	properties = addNoneOptionToEnums(properties);
	properties = convertOneOfToFixedCollection(properties, doc);
	properties = convertBatchItemsToFixedCollection(properties, doc);  // Convert batch items to fixedCollection
	properties = addRoutingToBodyFixedCollections(properties);  // Add routing to _body fixedCollections
	properties = convertEnumArraysToMultiOptions(properties);  // Convert array[enum] to multiOptions
	properties = convertSingleEnumsToOptions(properties);  // Convert single-value enums to options
	properties = convertSimpleArraysToFixedCollection(properties);  // Convert array[string/number] to fixedCollection
	properties = convertDateTimeFields(properties);  // Convert string fields with format: date-time to dateTime type
	properties = convertPolymorphicArraysToFixedCollection(properties, doc);  // Convert array[anyOf/oneOf] to fixedCollection
	properties = convertObjectsToFixedCollection(properties, doc);  // Convert nested objects to fixedCollection
	properties = convertObjectArraysToFixedCollection(properties, doc);  // Convert array[object] to fixedCollection with multipleValues
	properties = applyLoadOptions(properties);  // After convertOneOfToFixedCollection to process nested fields
	properties = moveDefaultsToPlaceholder(properties);
	properties = fixOptionalNumberDefaults(properties);  // Fix undefined defaults for optional number fields
	properties = addPaginationToOperations(properties);
	properties = addPatchPreSend(properties); // Add preSend to PATCH operations and wrap body fields in collection
	properties = addBatchPreSend(properties); // Add preSend to batch operations
	properties = addDeletePostReceive(properties); // Add postReceive to DELETE operations
	properties = addNonPaginatedListPostReceive(properties); // Add postReceive to non-paginated GET list operations
	properties = addJsonFieldPrefix(properties); // Add json: prefix to JSON fields for unwrap
	properties = addEmptyObjectBodyFields(properties); // Add JSON body field for empty object operations
	properties = normalizeEnumOptions(properties); // Make name === value for enums
	properties = setOperationDefaults(properties); // Set operation default to first option
	properties = removeIdenticalDescriptions(properties); // Remove descriptions identical to name/displayName
	properties = removeRequiredFalse(properties); // Remove required: false (it's the default)
	properties = fixDescriptionCasing(properties); // Fix miscased words in descriptions (url -> URL, etc.)
	properties = addPasswordTypeOptions(properties); // Add password: true to sensitive fields
	properties = fixBooleanDefaults(properties); // Fix string booleans in nested structures (second pass)
	properties = reorderPropertyKeys(properties); // Ensure displayName is first property

	// Split by resource and write files
	const { resourceProp, resourcesByValue } = splitByResource(properties);
	const resourceCount = writeGeneratedFiles(outputDir, resourceProp, resourcesByValue);

	console.log(`  Generated ${config.outputDir}/ with ${resourceCount} resource files`);
	console.log(`  Transformed ${oneOfCount} oneOf schemas, ${patchCount} PATCH operations, ${batchCount} batch operations`);
	console.log(`  Skipped ${configUnsupported.size} endpoints with oneOf/anyOf`);

	// Generate trigger events from webhooks schemas
	generateTriggerEvents(doc, config);
	console.log();
}

/**
 * Print unsupported endpoints report
 */
function printUnsupportedEndpoints() {
	if (unsupportedEndpoints.size === 0) {
		return;
	}

	console.log('='.repeat(70));
	console.log(`UNSUPPORTED ENDPOINTS (oneOf/anyOf in request body): ${unsupportedEndpoints.size}`);
	console.log('='.repeat(70));
	console.log();

	// Sort by operationId
	const sorted = [...unsupportedEndpoints.entries()].sort((a, b) => a[0].localeCompare(b[0]));

	for (const [opId, info] of sorted) {
		console.log(`${info.method} ${info.path}`);
		console.log(`  operationId: ${opId}`);
		if (info.summary) console.log(`  summary: ${info.summary}`);
		console.log(`  oneOf/anyOf locations:`);
		for (const loc of info.locations) {
			console.log(`    - ${loc.path}: ${loc.type} (${loc.options} options)`);
		}
		console.log();
	}
}

/**
 * Main entry point
 */
async function main() {
	console.log('Fetching OpenAPI specs from Crowdin documentation...\n');

	for (const config of OPENAPI_CONFIGS) {
		await processConfig(config);
	}

	// Print unsupported endpoints report
	printUnsupportedEndpoints();

	console.log('Done!');
}

// Run
main().catch(err => {
	console.error('Error:', err.message);
	process.exit(1);
});
