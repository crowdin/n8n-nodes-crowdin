# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

n8n community node package (`@crowdin/n8n-nodes-crowdin`) that provides Crowdin and Crowdin Enterprise integration nodes for the n8n workflow automation platform. Includes action nodes and trigger (webhook) nodes for both file-based and string-based project types.

## Commands

```bash
npm run build          # Build with n8n-node CLI (compiles TS → dist/)
npm run lint           # Lint with n8n-specific ESLint rules
npm run lint:fix       # Lint and auto-fix
npm run dev            # Development mode with n8n-node CLI
npm run build:watch    # TypeScript watch mode

# Code generation
npm run generate:properties   # Regenerate node properties from Crowdin OpenAPI specs
npm run operations:invalid    # Show operations with issues
npm run operations:unimplemented  # Show API operations not yet implemented
```

## Architecture

### Node Variants (2x2 Matrix)

There are 4 action nodes and 4 trigger nodes, organized by two dimensions:
- **Platform**: Crowdin (crowdin.com) vs Enterprise (custom domain)
- **Project type**: File-Based vs String-Based

Each action node (e.g., `CrowdinFileBased.node.ts`) assembles its properties from:
1. **Auto-generated properties** from OpenAPI specs (`properties/{platform}/{variant}/`)
2. **Hand-written extensions** that override or supplement generated code

### Properties Generation Pipeline

`scripts/generate-properties.mjs` fetches Crowdin OpenAPI YAML specs and generates TypeScript property files using `@devlikeapro/n8n-openapi-node`. Generated files are marked `// Auto-generated - do not edit manually`. A GitHub Actions workflow (`update-properties.yml`) runs this weekly and creates a PR with changes.

### Extension System

Extensions add operations that can't be auto-generated (binary uploads, complex request formatting, etc.). They are merged into auto-generated properties at module load time via `extendProperties()`.

Extension layers (applied in order):
- `properties/common/extensions/` — shared across all 4 node variants
- `properties/{crowdin,enterprise}/common/extensions/` — platform-specific (Crowdin vs Enterprise)
- `properties/{crowdin,enterprise}/common/extensions/{fileBased,stringBased}/` — variant-specific

The generator automatically detects operations defined in extensions and skips them during generation.

### Key Modules

- `nodes/Crowdin/utils/api.ts` — `crowdinApiRequest()` and `crowdinApiRequestAllItems()` for direct API calls (used by triggers and extensions)
- `nodes/Crowdin/utils/preSend.ts` — PreSend hooks that transform request data before API calls (binary upload, date formatting, etc.)
- `nodes/Crowdin/utils/extendProperties.ts` — Merges extension operations into auto-generated property arrays
- `nodes/Crowdin/methods/common/index.ts` — Shared `loadOptions` methods (dropdown population) with factory pattern (`createMethodPair`, `createDynamicMethodPair`)
- `nodes/Crowdin/methods/{crowdin,enterprise}/index.ts` — Platform-specific load options with API config (base URL, credential name)
- `nodes/Crowdin/triggers/` — Webhook event definitions per variant

### n8n Declarative Node Pattern

Action nodes use n8n's **declarative style** — operations define routing rules (`request.method`, `request.url`) directly in property definitions rather than in an `execute()` method. The `requestDefaults` on the node class sets base URL and headers. Pagination is handled by n8n's built-in offset-based paginator.

Trigger nodes use the **programmatic style** with `webhookMethods` (checkExists/create/delete) and a `webhook()` handler.

### Source Layout

- `credentials/` — 4 credential classes (API token + OAuth2 × Crowdin + Enterprise)
- `nodes/Crowdin/` — All node implementations
- `templates/` — Pre-built n8n workflow JSON templates
- `icons/` — SVG icons (light/dark variants)

## Linting

Uses `@n8n/node-cli` ESLint config with extensive n8n-specific rules (`n8n-nodes-base/*`). Many description-related rules are intentionally turned `off` because properties are auto-generated. The `scripts/` directory is excluded from linting.

## CI

CI runs lint then build on Node.js 22. There are no unit tests in this project.
