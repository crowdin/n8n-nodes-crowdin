// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { aiProperties } from './ai';
import { storageProperties } from './storage';
import { languagesProperties } from './languages';
import { workflowsProperties } from './workflows';
import { branchesProperties } from './branches';
import { sourceStringsProperties } from './sourceStrings';
import { stringCorrectionsProperties } from './stringCorrections';
import { stringCommentsProperties } from './stringComments';
import { screenshotsProperties } from './screenshots';
import { glossariesProperties } from './glossaries';
import { clientsProperties } from './clients';
import { applicationsProperties } from './applications';
import { bundlesProperties } from './bundles';
import { customSpellcheckersProperties } from './customSpellcheckers';
import { translationMemoryProperties } from './translationMemory';
import { dictionariesProperties } from './dictionaries';
import { distributionsProperties } from './distributions';
import { machineTranslationEnginesProperties } from './machineTranslationEngines';
import { usersProperties } from './users';
import { teamsProperties } from './teams';
import { externalQaChecksProperties } from './externalQaChecks';
import { fieldsProperties } from './fields';
import { projectsAndGroupsProperties } from './projectsAndGroups';
import { labelsProperties } from './labels';
import { notificationsProperties } from './notifications';
import { organizationProperties } from './organization';
import { translationsProperties } from './translations';
import { stringTranslationsProperties } from './stringTranslations';
import { translationStatusProperties } from './translationStatus';
import { reportsProperties } from './reports';
import { tasksProperties } from './tasks';
import { vendorsProperties } from './vendors';
import { webhooksProperties } from './webhooks';
import { organizationWebhooksProperties } from './organizationWebhooks';
import { securityLogsProperties } from './securityLogs';

const resourceProperty: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'AI',
			value: 'ai'
		},
		{
			name: 'Storage',
			value: 'storage',
			description: '\nStorage is a separate container for each file. You need to use _Add Storage_ method before adding files to your projects via API. Files that should be uploaded into storage include files for localization, screenshots, Glossaries, and Translation Memories.\n\n_Storage id_ is the identifier of the file uploaded to the Storage.\n\n__Note:__ Files uploaded to the storage are kept during the next 24 hours.\n'
		},
		{
			name: 'Languages',
			value: 'languages',
			description: '\nCrowdin Enterprise supports more than 300 world languages and custom languages created in the system.\n\nUse API to get the list of all supported languages and retrieve additional details (e.g. text direction, internal code) on specific language.\n'
		},
		{
			name: 'Workflows',
			value: 'workflows',
			description: '\nWorkflows are the sequences of steps that content in your project should go through (e.g. pre-translation, translation, proofreading). You can use a default template or create the one that works best for you and assign it to the needed projects.\n\nUse API to get the list of workflow templates available in your organization and to check the details of a specific template.\n'
		},
		{
			name: 'Branches',
			value: 'branches',
			description: '\nSource branches are resources for translation. Use API to manage project branches.\n\n__Note:__ Make sure your master branch is the first one you integrate with Crowdin.'
		},
		{
			name: 'Source Strings',
			value: 'sourceStrings',
			description: '\nSource strings are the text units for translation. Instead of modifying source files, you can manage source strings one by one.\n\nUse API to add, edit, or delete some specific strings  in the source-based and files-based projects (available only for the following file formats: CSV, RESX, JSON, Android XML, iOS strings, PROPERTIES, XLIFF).\n'
		},
		{
			name: 'String Corrections',
			value: 'stringCorrections',
			description: 'Use API to add or remove strings correction'
		},
		{
			name: 'String Comments',
			value: 'stringComments',
			description: 'Use API to list, add, edit or remove string comments.'
		},
		{
			name: 'Screenshots',
			value: 'screenshots',
			description: '\nScreenshots provide translators with additional context for the source strings.  Screenshot tags allow specifying  which source strings are displayed on each screenshot.\n\nUse API to manage screenshots and their tags.\n'
		},
		{
			name: 'Glossaries',
			value: 'glossaries',
			description: '\nGlossaries help to explain some specific terms or the ones often used in the project so that they can be properly and consistently translated.\n\nUse API to manage glossaries or specific terms. Glossary export and import are [asynchronous operations](#section/Introduction/Asynchronous-Operations) and shall be completed with sequence of API methods.\n'
		},
		{
			name: 'Clients',
			value: 'clients',
			description: '\nClients are the organizations that order professional translation services from Vendors. Clients can invite an existing organization to become a Vendor for them.\n\nUse the API to get a list of the Clients you already cooperate with as a Vendor.\n'
		},
		{
			name: 'Applications',
			value: 'applications',
			description: '\nCrowdin Apps are web applications that can be integrated with Crowdin to extend its functionality.\n\nUse the API to manage the necessary app data.'
		},
		{
			name: 'Bundles',
			value: 'bundles'
		},
		{
			name: 'Custom Spellcheckers',
			value: 'customSpellcheckers'
		},
		{
			name: 'Translation Memory',
			value: 'translationMemory',
			description: '\nTranslation Memory (TM) is a vault of translations that were previously made in other projects. Those translations can be reused to speed up the translation process. Every translation made in the project is automatically added to the project Translation Memory.\n\nUse API to create, upload, download, or remove specific TM. Translation Memory export and import are [asynchronous operations](#section/Introduction/Asynchronous-Operations) and shall be completed with sequence of API methods.\n'
		},
		{
			name: 'Dictionaries',
			value: 'dictionaries',
			description: '\nDictionaries allow you to create a storage of words that should be skipped by the spell checker.\n\nUse API to get the list of organization dictionaries and to edit a specific dictionary.\n'
		},
		{
			name: 'Distributions',
			value: 'distributions'
		},
		{
			name: 'Machine Translation Engines',
			value: 'machineTranslationEngines',
			description: '\nMachine Translation Engines (MTE) are the sources for pre-translations. You can currently connect Google Translate, Microsoft Translator, Crowdin Translate, DeepL Pro and Amazon Translate engines.\n\nUse API to add, update, and delete specific MTE.\n'
		},
		{
			name: 'Users',
			value: 'users',
			description: '\nUsers are the members of your organization with the defined access levels (e.g. manager, admin, contributor).\n\nUse API to get the list of organization users and to check the information on a specific user.\n'
		},
		{
			name: 'Teams',
			value: 'teams',
			description: 'Organization teams'
		},
		{
			name: 'External QA Checks',
			value: 'externalQaChecks',
			description: '\nExternal QA Checks are the tools that help to ensure the quality of the translations.\n\nYou can install an applicastion with External QA Check module to your organization and extend basic functionality with additional checks.\n'
		},
		{
			name: 'Fields',
			value: 'fields'
		},
		{
			name: 'Projects and Groups',
			value: 'projectsAndGroups',
			description: '\nGroups allow you to organize your projects based on specific characteristics. Using projects, you can keep your source files sorted.\n\nUse API to manage projects and groups, change their settings, or remove them from organization if required.\n'
		},
		{
			name: 'Labels',
			value: 'labels'
		},
		{
			name: 'Notifications',
			value: 'notifications'
		},
		{
			name: 'Organization',
			value: 'organization'
		},
		{
			name: 'Translations',
			value: 'translations',
			description: '\nTranslators can work with entirely untranslated project or you can pre-translate the files to ease the translations process.\n\nUse API to pre-translate files via Machine Translation (MT) or Translation Memory (TM), upload your existing translations, and download translations correspondingly. Pre-translate and build are [asynchronous operations](#section/Introduction/Asynchronous-Operations) and shall be completed with sequence of API methods.\n\n__Note:__ If there are no new translations or changes in build parameters, Crowdin will return the current build for such requests.\n'
		},
		{
			name: 'String Translations',
			value: 'stringTranslations',
			description: 'Use API to add or remove strings translations, approvals, and votes.'
		},
		{
			name: 'Translation Status',
			value: 'translationStatus',
			description: '\nStatus represents the general localization progress on both translations and proofreading.\n\nUse API to check translation and proofreading progress on different levels: file, language, branch, directory.\n'
		},
		{
			name: 'Reports',
			value: 'reports',
			description: '\nReports help to estimate costs, calculate translation costs, and identify the top members.\n\nUse API to generate Cost Estimate, Translation Cost, and Top Members reports. You can then export reports in .xlsx or .csv file formats. Report generation is an [asynchronous operation](#section/Introduction/Asynchronous-Operations) and shall be completed with a sequence of API methods.'
		},
		{
			name: 'Tasks',
			value: 'tasks',
			description: '\nCreate and assign tasks to get files translated or proofread by specific people. You can set the due dates, split words between people, and receive notifications about the changes and updates on tasks. Tasks are project-specific, so you’ll have to create them within a project.\n\nUse API to create, modify, and delete specific tasks.\n'
		},
		{
			name: 'Vendors',
			value: 'vendors',
			description: '\nVendors are the organizations that provide professional translation services. To assign a Vendor to a project workflow you should invite an existing Organization to be a Vendor for you.\n\nUse API to get the list of the Vendors you already invited to your organization.\n'
		},
		{
			name: 'Webhooks',
			value: 'webhooks',
			description: '\nWebhooks allow you to collect information about events that happen in your Crowdin Enterprise projects. You can select the request type, content type, and add a custom payload, which allows you to create integrations with other systems on your own.\n\nYou can configure webhooks for the following events:\n * all strings in project are translated\n * all strings in project are reviewed\n * all strings in project QA check are finished\n * final translation of string is updated (using Replace in suggestions feature)\n * source string is added\n * source string is updated\n * source string is deleted\n * source string is translated\n * translation for source string is updated (using Replace in suggestions feature)\n * one of translations is deleted\n * translation for string is approved\n * approval for previously added translation is removed\n\nUse API to create, modify, and delete specific webhooks.\n'
		},
		{
			name: 'Organization Webhooks',
			value: 'organizationWebhooks',
			description: '\nWebhooks allow you to collect information about events that happen in your Crowdin Enterprise organization. You can select the request type, content type, and add a custom payload, which allows you to create integrations with other systems on your own.\n\nYou can configure webhooks for the following events:\n * group is created\n * group is deleted\n * project is created\n * project is deleted\n\nUse API to create, modify, and delete specific webhooks.\n'
		},
		{
			name: 'Security Logs',
			value: 'securityLogs'
		}
	],
	default: 'ai'
};

export const properties: INodeProperties[] = [
	resourceProperty,
	...aiProperties,
	...storageProperties,
	...languagesProperties,
	...workflowsProperties,
	...branchesProperties,
	...sourceStringsProperties,
	...stringCorrectionsProperties,
	...stringCommentsProperties,
	...screenshotsProperties,
	...glossariesProperties,
	...clientsProperties,
	...applicationsProperties,
	...bundlesProperties,
	...customSpellcheckersProperties,
	...translationMemoryProperties,
	...dictionariesProperties,
	...distributionsProperties,
	...machineTranslationEnginesProperties,
	...usersProperties,
	...teamsProperties,
	...externalQaChecksProperties,
	...fieldsProperties,
	...projectsAndGroupsProperties,
	...labelsProperties,
	...notificationsProperties,
	...organizationProperties,
	...translationsProperties,
	...stringTranslationsProperties,
	...translationStatusProperties,
	...reportsProperties,
	...tasksProperties,
	...vendorsProperties,
	...webhooksProperties,
	...organizationWebhooksProperties,
	...securityLogsProperties,
];
