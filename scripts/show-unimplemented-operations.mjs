#!/usr/bin/env node

/**
 * Script to show which API endpoints are not implemented
 * 
 * Usage: node scripts/show-unimplemented.mjs [config-name]
 * 
 * Examples:
 *   node scripts/show-unimplemented.mjs                    # all configs
 *   node scripts/show-unimplemented.mjs enterprise-file    # specific config
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import Table from 'cli-table3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nodesDir = path.join(__dirname, '..', 'nodes', 'Crowdin');

const OPENAPI_BASE_URL = 'https://support.crowdin.com/src/assets/api';

const CONFIGS = [
	{
		name: 'crowdin-file',
		url: `${OPENAPI_BASE_URL}/crowdin/file-based.yml`,
		propertiesDir: 'properties/crowdin/fileBased',
	},
	{
		name: 'crowdin-string',
		url: `${OPENAPI_BASE_URL}/crowdin/string-based.yml`,
		propertiesDir: 'properties/crowdin/stringBased',
	},
	{
		name: 'enterprise-file',
		url: `${OPENAPI_BASE_URL}/enterprise/file-based.yml`,
		propertiesDir: 'properties/enterprise/fileBased',
	},
	{
		name: 'enterprise-string',
		url: `${OPENAPI_BASE_URL}/enterprise/string-based.yml`,
		propertiesDir: 'properties/enterprise/stringBased',
	},
];

/** Operations to skip (deprecated, manually skipped, etc.) */
const SKIP_OPERATIONS = [
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
];

// ============================================================================
// OPENAPI ANALYSIS
// ============================================================================

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

function findOneOfAnyOfInSchema(doc, schema, visited = new Set()) {
	if (!schema || typeof schema !== 'object') return false;

	if (schema.$ref) {
		if (visited.has(schema.$ref)) return false;
		visited.add(schema.$ref);
		const resolved = resolveRef(doc, schema.$ref);
		return resolved ? findOneOfAnyOfInSchema(doc, resolved, visited) : false;
	}

	if (schema.oneOf || schema.anyOf) return true;

	if (schema.properties) {
		for (const propSchema of Object.values(schema.properties)) {
			if (findOneOfAnyOfInSchema(doc, propSchema, visited)) return true;
		}
	}

	if (schema.items && findOneOfAnyOfInSchema(doc, schema.items, visited)) return true;

	if (schema.allOf) {
		for (const sub of schema.allOf) {
			if (findOneOfAnyOfInSchema(doc, sub, visited)) return true;
		}
	}

	return false;
}

function getRequestBodySchema(doc, operation) {
	const requestBody = operation.requestBody;
	if (!requestBody) return null;

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

function hasOneOfAnyOf(doc, operation) {
	const schema = getRequestBodySchema(doc, operation);
	if (!schema) return false;
	return findOneOfAnyOfInSchema(doc, schema, new Set());
}

async function fetchSpec(url) {
	const response = await fetch(url);
	const text = await response.text();
	return yaml.load(text);
}

function getAllOperations(doc) {
	const operations = [];

	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
			const operation = pathItem[method];
			if (!operation) continue;

			operations.push({
				operationId: operation.operationId,
				method: method.toUpperCase(),
				path: pathUrl,
				summary: operation.summary || '',
				deprecated: !!operation.deprecated,
			});
		}
	}

	return operations;
}

// ============================================================================
// GENERATED CODE ANALYSIS
// ============================================================================

function extractOperationIds(dirPath) {
	const ids = new Set();
	if (!fs.existsSync(dirPath)) return ids;

	const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts');

	for (const file of files) {
		const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
		const matches = content.matchAll(/value:\s*['"]([^'"]+)['"]/g);
		for (const match of matches) {
			const value = match[1];
			if (value.startsWith('api.')) {
				ids.add(value);
			}
		}
	}

	return ids;
}

function getImplementedOperations(propertiesDir) {
	const implemented = new Set();

	// Search in the specific properties directory (fileBased/stringBased)
	const mainPath = path.join(nodesDir, propertiesDir);
	for (const id of extractOperationIds(mainPath)) {
		implemented.add(id);
	}

	// Search in common/extensions (shared across ALL platforms)
	const commonExtPath = path.join(nodesDir, 'properties', 'common', 'extensions');
	for (const id of extractOperationIds(commonExtPath)) {
		implemented.add(id);
	}

	// propertiesDir is like 'properties/crowdin/fileBased' or 'properties/enterprise/stringBased'
	const parts = propertiesDir.split('/');
	const projectType = parts.length >= 3 ? parts[2] : null; // 'fileBased' or 'stringBased'

	// Search in common/extensions/fileBased or common/extensions/stringBased
	if (projectType) {
		const commonTypeExtPath = path.join(nodesDir, 'properties', 'common', 'extensions', projectType);
		for (const id of extractOperationIds(commonTypeExtPath)) {
			implemented.add(id);
		}
	}

	// Search in platform-specific common/extensions
	if (parts.length >= 2) {
		const platform = parts[1]; // 'crowdin' or 'enterprise'
		const platformExtPath = path.join(nodesDir, 'properties', platform, 'common', 'extensions');
		for (const id of extractOperationIds(platformExtPath)) {
			implemented.add(id);
		}

		// Search in platform-specific common/extensions/fileBased or stringBased
		if (projectType) {
			const platformTypeExtPath = path.join(nodesDir, 'properties', platform, 'common', 'extensions', projectType);
			for (const id of extractOperationIds(platformTypeExtPath)) {
				implemented.add(id);
			}
		}
	}

	return implemented;
}

// ============================================================================
// REPORTING
// ============================================================================

async function analyzeConfig(config) {
	const doc = await fetchSpec(config.url);
	const allOperations = getAllOperations(doc);
	const implemented = getImplementedOperations(config.propertiesDir);

	const unimplemented = [];
	let ignored = 0;
	let deprecated = 0;

	for (const op of allOperations) {
		// Skip implemented
		if (implemented.has(op.operationId)) continue;
		// Skip deprecated
		if (op.deprecated) {
			deprecated++;
			continue;
		}
		// Skip manually excluded
		if (SKIP_OPERATIONS.includes(op.operationId)) {
			ignored++;
			continue;
		}

		unimplemented.push(op);
	}

	return { config, total: allOperations.length, implemented: implemented.size, ignored, deprecated, unimplemented };
}

function printStatsTable(results) {
	const table = new Table({
		head: ['Config', 'Total', 'Implemented', '%', 'Ignored', 'Deprecated', 'Unimplemented'],
		style: { head: ['cyan'] },
	});

	for (const r of results) {
		const percent = ((r.implemented / r.total) * 100).toFixed(1);
		table.push([r.config.name, r.total, r.implemented, `${percent}%`, r.ignored, r.deprecated, r.unimplemented.length]);
	}

	// Add totals row if multiple configs
	if (results.length > 1) {
		const totals = results.reduce(
			(acc, r) => ({
				total: acc.total + r.total,
				implemented: acc.implemented + r.implemented,
				ignored: acc.ignored + r.ignored,
				deprecated: acc.deprecated + r.deprecated,
				unimplemented: acc.unimplemented + r.unimplemented.length,
			}),
			{ total: 0, implemented: 0, ignored: 0, deprecated: 0, unimplemented: 0 }
		);
		const percent = ((totals.implemented / totals.total) * 100).toFixed(1);
		table.push(['TOTAL', totals.total, totals.implemented, `${percent}%`, totals.ignored, totals.deprecated, totals.unimplemented]);
	}

	console.log(table.toString());
}

function printEndpointsTable(rows) {
	if (rows.length === 0) return;

	const table = new Table({
		head: ['Method', 'Endpoint', 'Title', 'Operation ID'],
		style: { head: ['cyan'] },
	});

	for (const row of rows) {
		table.push([row.method, row.path, row.summary, row.operationId]);
	}

	console.log(table.toString());
}

async function main() {
	const arg = process.argv[2];

	const configsToAnalyze = arg
		? CONFIGS.filter(c => c.name.includes(arg))
		: CONFIGS;

	if (configsToAnalyze.length === 0) {
		console.error(`No config found matching: ${arg}`);
		console.error(`Available: ${CONFIGS.map(c => c.name).join(', ')}`);
		process.exit(1);
	}

	// Collect all results
	const results = [];
	for (const config of configsToAnalyze) {
		results.push(await analyzeConfig(config));
	}

	// Print statistics table
	console.log('\n📊 Statistics\n');
	printStatsTable(results);

	// Print unimplemented endpoints for each config
	for (const result of results) {
		if (result.unimplemented.length > 0) {
			console.log(`\n📋 ${result.config.name.toUpperCase()} - Unimplemented endpoints\n`);
			printEndpointsTable(result.unimplemented);
		}
	}
}

main().catch(console.error);
