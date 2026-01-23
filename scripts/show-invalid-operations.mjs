#!/usr/bin/env node

/**
 * Script to find operations that are implemented but don't exist in the OpenAPI spec.
 * This helps catch cases where an enterprise-only operation was accidentally added to crowdin.
 * 
 * Usage: node scripts/show-invalid-operations.mjs [config-name]
 * 
 * Examples:
 *   node scripts/show-invalid-operations.mjs                    # all configs
 *   node scripts/show-invalid-operations.mjs crowdin            # crowdin configs only
 *   node scripts/show-invalid-operations.mjs enterprise-file    # specific config
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
		platform: 'crowdin',
	},
	{
		name: 'crowdin-string',
		url: `${OPENAPI_BASE_URL}/crowdin/string-based.yml`,
		propertiesDir: 'properties/crowdin/stringBased',
		platform: 'crowdin',
	},
	{
		name: 'enterprise-file',
		url: `${OPENAPI_BASE_URL}/enterprise/file-based.yml`,
		propertiesDir: 'properties/enterprise/fileBased',
		platform: 'enterprise',
	},
	{
		name: 'enterprise-string',
		url: `${OPENAPI_BASE_URL}/enterprise/string-based.yml`,
		propertiesDir: 'properties/enterprise/stringBased',
		platform: 'enterprise',
	},
];

// ============================================================================
// OPENAPI ANALYSIS
// ============================================================================

async function fetchSpec(url) {
	const response = await fetch(url);
	const text = await response.text();
	return yaml.load(text);
}

function getAllOperationIds(doc) {
	const operationIds = new Set();

	for (const [pathUrl, pathItem] of Object.entries(doc.paths || {})) {
		for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
			const operation = pathItem[method];
			if (!operation) continue;
			if (operation.operationId) {
				operationIds.add(operation.operationId);
			}
		}
	}

	return operationIds;
}

// ============================================================================
// GENERATED CODE ANALYSIS
// ============================================================================

/**
 * Extract operation IDs from a directory with file source information
 */
function extractOperationIdsWithSource(dirPath, sourcePrefix = '') {
	const operations = [];
	if (!fs.existsSync(dirPath)) return operations;

	const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts');

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const content = fs.readFileSync(filePath, 'utf-8');
		const matches = content.matchAll(/value:\s*['"]([^'"]+)['"]/g);
		for (const match of matches) {
			const value = match[1];
			if (value.startsWith('api.')) {
				operations.push({
					operationId: value,
					source: sourcePrefix ? `${sourcePrefix}/${file}` : file,
				});
			}
		}
	}

	return operations;
}

/**
 * Get all implemented operations for a config with their source files
 */
function getImplementedOperationsWithSource(propertiesDir, platform) {
	const operations = [];

	// Main properties directory (fileBased/stringBased)
	const mainPath = path.join(nodesDir, propertiesDir);
	operations.push(...extractOperationIdsWithSource(mainPath, propertiesDir));

	// Common extensions (shared across ALL platforms)
	const commonExtPath = path.join(nodesDir, 'properties', 'common', 'extensions');
	operations.push(...extractOperationIdsWithSource(commonExtPath, 'common/extensions'));

	// Platform-specific common extensions
	const platformExtPath = path.join(nodesDir, 'properties', platform, 'common', 'extensions');
	operations.push(...extractOperationIdsWithSource(platformExtPath, `${platform}/common/extensions`));

	return operations;
}

// ============================================================================
// ANALYSIS
// ============================================================================

async function analyzeConfig(config) {
	const doc = await fetchSpec(config.url);
	const specOperationIds = getAllOperationIds(doc);
	const implementedOps = getImplementedOperationsWithSource(config.propertiesDir, config.platform);

	const invalid = [];

	for (const op of implementedOps) {
		if (!specOperationIds.has(op.operationId)) {
			invalid.push(op);
		}
	}

	// Deduplicate by operationId (same operation might be found multiple times)
	const uniqueInvalid = [];
	const seenIds = new Set();
	for (const op of invalid) {
		if (!seenIds.has(op.operationId)) {
			seenIds.add(op.operationId);
			uniqueInvalid.push(op);
		}
	}

	return {
		config,
		totalImplemented: new Set(implementedOps.map(o => o.operationId)).size,
		totalInSpec: specOperationIds.size,
		invalid: uniqueInvalid,
	};
}

// ============================================================================
// REPORTING
// ============================================================================

function printStatsTable(results) {
	const table = new Table({
		head: ['Config', 'In Spec', 'Implemented', 'Invalid'],
		style: { head: ['cyan'] },
	});

	for (const r of results) {
		const invalidCount = r.invalid.length;
		const invalidStr = invalidCount > 0 ? `⚠️  ${invalidCount}` : '✅ 0';
		table.push([r.config.name, r.totalInSpec, r.totalImplemented, invalidStr]);
	}

	console.log(table.toString());
}

function printInvalidTable(rows, configName) {
	if (rows.length === 0) return;

	console.log(`\n⚠️  ${configName.toUpperCase()} - Operations NOT in OpenAPI spec\n`);
	console.log('These operations are implemented but don\'t exist in the specification.');
	console.log('This might indicate an enterprise-only operation added to crowdin by mistake.\n');

	const table = new Table({
		head: ['Operation ID', 'Source File'],
		style: { head: ['red'] },
	});

	for (const row of rows) {
		table.push([row.operationId, row.source]);
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

	console.log('\n🔍 Checking for operations that don\'t exist in OpenAPI specs...\n');

	// Collect all results
	const results = [];
	for (const config of configsToAnalyze) {
		results.push(await analyzeConfig(config));
	}

	// Print statistics table
	console.log('📊 Statistics\n');
	printStatsTable(results);

	// Print invalid operations for each config
	let hasInvalid = false;
	for (const result of results) {
		if (result.invalid.length > 0) {
			hasInvalid = true;
			printInvalidTable(result.invalid, result.config.name);
		}
	}

	if (!hasInvalid) {
		console.log('\n✅ All implemented operations exist in their respective OpenAPI specs!\n');
	} else {
		console.log('\n💡 Tip: If these are intentionally in common/extensions, make sure they exist in ALL specs.\n');
		process.exit(1);
	}
}

main().catch(console.error);
