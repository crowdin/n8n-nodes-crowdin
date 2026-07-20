// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';
import { projectsProperties } from './projects';
import { storageProperties } from './storage';
import { branchesProperties } from './branches';
import { sourceStringsProperties } from './sourceStrings';
import { translationsProperties } from './translations';
import { stringTranslationsProperties } from './stringTranslations';
import { translationStatusProperties } from './translationStatus';
import { distributionsProperties } from './distributions';
import { reportsProperties } from './reports';
import { tasksProperties } from './tasks';
import { stringCommentsProperties } from './stringComments';
import { translationMemoryProperties } from './translationMemory';
import { glossariesProperties } from './glossaries';
import { styleGuidesProperties } from './styleGuides';
import { machineTranslationEnginesProperties } from './machineTranslationEngines';
import { screenshotsProperties } from './screenshots';
import { labelsProperties } from './labels';
import { dictionariesProperties } from './dictionaries';
import { usersProperties } from './users';
import { notificationsProperties } from './notifications';
import { aiProperties } from './ai';
import { languagesProperties } from './languages';
import { organizationWebhooksProperties } from './organizationWebhooks';
import { applicationsProperties } from './applications';
import { advisorProperties } from './advisor';
import { sourceFilesProperties } from './sourceFiles';
import { webhooksProperties } from './webhooks';
import { securityLogsProperties } from './securityLogs';

const resourceProperty: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Projects',
			value: 'projects',
			description: '\nUsing projects, you can keep your source strings sorted.\n\nUse API to manage projects, change their settings, or remove them if required.\n'
		},
		{
			name: 'Storage',
			value: 'storage',
			description: '\nStorage is a separate container for each file. You need to use _Add Storage_ method before adding files to your projects via API. Files that should be uploaded into storage include files for localization, screenshots, Glossaries, and Translation Memories.\n\n_Storage id_ is the identifier of the file uploaded to the Storage.\n\n__Note:__ Files uploaded to the storage are kept during the next 24 hours.\n'
		},
		{
			name: 'Branches',
			value: 'branches',
			description: '\nSource branches are resources for translation. Use API to manage project branches.\n\n__Note:__ Make sure your master branch is the first one you integrate with Crowdin.\n'
		},
		{
			name: 'Source Strings',
			value: 'sourceStrings',
			description: '\nSource strings are the text units for translation. Instead of modifying source files, you can manage source strings one by one.\n\nUse API to add, edit, or delete some specific strings in the source-based and file-based projects (available only for the following file formats: CSV, RESX, JSON, Android XML, iOS strings, PROPERTIES, XLIFF).\n'
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
			name: 'Distributions',
			value: 'distributions',
			description: '\nDistributions allow you to deliver translated content to your applications Over-The-Air (OTA).\n\nUse API to manage distributions and release them so that the latest translations become available to your users.\n'
		},
		{
			name: 'Reports',
			value: 'reports',
			description: '\nReports help to estimate costs, calculate translation costs, and identify the top members.\n\nUse API to generate Cost Estimate, Translation Cost, and Top Members reports. You can then export reports in .xlsx or .csv file formats. Report generation is an [asynchronous operation](#section/Introduction/Asynchronous-Operations) and shall be completed with a sequence of API methods.\n'
		},
		{
			name: 'Tasks',
			value: 'tasks',
			description: '\nCreate and assign tasks to get files translated or proofread by specific people. You can set the due dates, split words between people, and receive notifications about the changes and updates on tasks. Tasks are project-specific, so you’ll have to create them within a project.\n\nUse API to create, modify, and delete specific tasks.\n'
		},
		{
			name: 'String Comments',
			value: 'stringComments',
			description: 'Use API to list, add, edit or remove string comments.'
		},
		{
			name: 'Translation Memory',
			value: 'translationMemory',
			description: '\nTranslation Memory (TM) is a vault of translations that were previously made in other projects. Those translations can be reused to speed up the translation process. Every translation made in the project is automatically added to the project Translation Memory.\n\nUse API to create, upload, download, or remove specific TM. Translation Memory export and import are [asynchronous operations](#section/Introduction/Asynchronous-Operations) and shall be completed with sequence of API methods.\n'
		},
		{
			name: 'Glossaries',
			value: 'glossaries',
			description: '\nGlossaries help to explain some specific terms or the ones often used in the project so that they can be properly and consistently translated.\n\nUse API to manage glossaries or specific terms. Glossary export and import are [asynchronous operations](#section/Introduction/Asynchronous-Operations) and shall be completed with sequence of API methods.\n'
		},
		{
			name: 'Style Guides',
			value: 'styleGuides',
			description: '\nStyle Guides help to provide additional context for the translators.\n\nUse API to manage style guides.\n'
		},
		{
			name: 'Machine Translation Engines',
			value: 'machineTranslationEngines',
			description: '\nMachine Translation Engines (MTE) are the sources for pre-translations. You can currently connect Google Translate, Microsoft Translator, Crowdin Translate, DeepL Pro and Amazon Translate engines.\n\nUse API to add, update, and delete specific MTE.\n'
		},
		{
			name: 'Screenshots',
			value: 'screenshots',
			description: '\nScreenshots provide translators with additional context for the source strings. Screenshot tags allow specifying which source strings are displayed on each screenshot.\n\nUse API to manage screenshots and their tags.\n'
		},
		{
			name: 'Labels',
			value: 'labels',
			description: '\nLabels help you organize and group strings in your project.\n\nUse API to manage labels and to assign them to strings and screenshots.\n'
		},
		{
			name: 'Dictionaries',
			value: 'dictionaries',
			description: '\nDictionaries allow you to create a storage of words that should be skipped by the spell checker.\n\nUse API to get the list of organization dictionaries and to edit a specific dictionary.\n'
		},
		{
			name: 'Users',
			value: 'users',
			description: '\nUsers API gives you the possibility to get profile information about the currently authenticated user.\n'
		},
		{
			name: 'Notifications',
			value: 'notifications',
			description: 'Use API to send custom notifications to the authenticated user or project members.'
		},
		{
			name: 'AI',
			value: 'ai',
			description: '\nAI features help you translate content and perform other localization tasks using the configured AI providers.\n\nUse API to manage AI providers, prompts, settings, and custom placeholders, to run AI-powered translations, and to generate AI reports.\n'
		},
		{
			name: 'Languages',
			value: 'languages',
			description: '\nCrowdin supports more than 300 world languages and custom languages created in the system.\n\nUse API to get the list of all supported languages and retrieve additional details (e.g. text direction, internal code) on specific language.\n'
		},
		{
			name: 'Organization Webhooks',
			value: 'organizationWebhooks',
			description: '\nWebhooks allow you to collect information about events that happen in your Crowdin account. You can select the request type, content type, and add a custom payload, which allows you to create integrations with other systems on your own.\n\nYou can configure webhooks for the following events:\n * project is created\n * project is deleted\n\nUse API to create, modify, and delete specific webhooks.\n'
		},
		{
			name: 'Applications',
			value: 'applications',
			description: '\nCrowdin Apps are web applications that can be integrated with Crowdin to extend its functionality.\n\nUse the API to manage the necessary app data.\n'
		},
		{
			name: 'Advisor',
			value: 'advisor',
			description: '\nAdvisor checks your project setup and content and provides insights with recommendations for improving your localization workflow. Installed applications can extend Advisor with their own checks.\n\nUse API to manage advisor insights and to run advisor checks.\n'
		},
		{
			name: 'Source Files',
			value: 'sourceFiles'
		},
		{
			name: 'Webhooks',
			value: 'webhooks',
			description: '\nWebhooks allow you to collect information about events that happen in your Crowdin projects. You can select the request type, content type, and add a custom payload, which allows you to create integrations with other systems on your own.\n\nYou can configure webhooks for the following events:\n * all strings in project are translated\n * all strings in project are reviewed\n * all strings in project QA check are finished\n * final translation of string is updated (using Replace in suggestions feature)\n * source string is added\n * source string is updated\n * source string is deleted\n * source string is translated\n * translation for source string is updated (using Replace in suggestions feature)\n * one of translations is deleted\n * translation for string is approved\n * approval for previously added translation is removed\n\nUse API to create, modify, and delete specific webhooks.\n'
		},
		{
			name: 'Security Logs',
			value: 'securityLogs',
			description: '\nSecurity logs keep track of security-related activities within your account (e.g. login, password change).\n\nUse API to get the list of user security logs and to check the details of a specific security log record.\n'
		}
	],
	default: 'projects'
};

export const properties: INodeProperties[] = [
	resourceProperty,
	...projectsProperties,
	...storageProperties,
	...branchesProperties,
	...sourceStringsProperties,
	...translationsProperties,
	...stringTranslationsProperties,
	...translationStatusProperties,
	...distributionsProperties,
	...reportsProperties,
	...tasksProperties,
	...stringCommentsProperties,
	...translationMemoryProperties,
	...glossariesProperties,
	...styleGuidesProperties,
	...machineTranslationEnginesProperties,
	...screenshotsProperties,
	...labelsProperties,
	...dictionariesProperties,
	...usersProperties,
	...notificationsProperties,
	...aiProperties,
	...languagesProperties,
	...organizationWebhooksProperties,
	...applicationsProperties,
	...advisorProperties,
	...sourceFilesProperties,
	...webhooksProperties,
	...securityLogsProperties,
];
