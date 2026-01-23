import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

// Format matching auto-generated code
export type ExtensionModule = INodeProperties[];

function matchesResource(a: INodeProperties, b: INodeProperties): boolean {
	const resA = a.displayOptions?.show?.resource;
	const resB = b.displayOptions?.show?.resource;
	return JSON.stringify(resA) === JSON.stringify(resB);
}

/**
 * Calculate path similarity between two operation values
 * e.g., 'api.ai.settings.patch' vs 'api.ai.settings.get' -> 3 matching segments
 */
function getPathSimilarity(value1: string, value2: string): number {
	const parts1 = value1.split('.');
	const parts2 = value2.split('.');
	
	let matches = 0;
	const minLength = Math.min(parts1.length, parts2.length);
	
	for (let i = 0; i < minLength; i++) {
		if (parts1[i] === parts2[i]) {
			matches++;
		} else {
			break; // Stop at first mismatch
		}
	}
	
	return matches;
}

/**
 * Find the best position to insert a new operation based on path similarity
 * Returns the index after the best matching operation
 */
function findBestInsertPosition(
	existingOptions: INodePropertyOptions[],
	newValue: string,
): number {
	let bestIndex = existingOptions.length; // Default: append at end
	let bestSimilarity = 0;
	
	for (let i = 0; i < existingOptions.length; i++) {
		const option = existingOptions[i];
		if (typeof option.value !== 'string') continue;
		
		const similarity = getPathSimilarity(newValue, option.value);
		
		// Update best match if this has more matching segments
		if (similarity > bestSimilarity) {
			bestSimilarity = similarity;
			bestIndex = i + 1; // Insert after this operation
		} else if (similarity === bestSimilarity && similarity > 0) {
			// Same similarity - keep updating to insert after the last match
			bestIndex = i + 1;
		}
	}
	
	return bestIndex;
}

function isOperationDropdown(p: INodeProperties): boolean {
	return p.name === 'operation' && p.type === 'options';
}

export function extendProperties(
	properties: INodeProperties[],
	extensions: ExtensionModule[],
): void {
	for (const ext of extensions) {
		// Find operation dropdown in extension (type: 'options', not notices)
		const extOps = ext.find(isOperationDropdown);
		const extFields = ext.filter((p) => !isOperationDropdown(p));

		if (extOps) {
			// Find existing operation dropdown for this resource
			const existingOps = properties.find(
				(p) => isOperationDropdown(p) && matchesResource(p, extOps),
			);

			if (
				existingOps?.options &&
				Array.isArray(existingOps.options) &&
				Array.isArray(extOps.options)
			) {
				// Smart merge: insert each new operation after its best match
				for (const newOp of extOps.options) {
					if (typeof newOp === 'object' && 'value' in newOp && typeof newOp.value === 'string') {
						const insertIndex = findBestInsertPosition(
							existingOps.options as INodePropertyOptions[],
							newOp.value,
						);
						existingOps.options.splice(insertIndex, 0, newOp);
					} else {
						// Fallback: append at end
						existingOps.options.push(newOp);
					}
				}
				
				// Recalculate default to first option after merge
				// n8n linting rule: n8n-nodes-base/node-param-default-wrong-for-options
				const firstOption = existingOps.options[0];
				if (firstOption && typeof firstOption === 'object' && 'value' in firstOption) {
					existingOps.default = firstOption.value;
				}
			} else {
				// Add new operation property
				properties.push(extOps);
			}
		}

		// Add fields
		properties.push(...extFields);
	}
}
