# @crowdin/n8n-nodes-crowdin

[![npm](https://img.shields.io/npm/v/@crowdin/n8n-nodes-crowdin?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/@crowdin/n8n-nodes-crowdin)
[![npm](https://img.shields.io/npm/dt/@crowdin/n8n-nodes-crowdin?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/@crowdin/n8n-nodes-crowdin)
[![License](https://img.shields.io/github/license/crowdin/n8n-nodes-crowdin?cacheSeconds=3600)](https://github.com/crowdin/n8n-nodes-crowdin/blob/main/LICENSE)

This is an n8n community node. It lets you use [Crowdin](https://crowdin.com/) in your n8n workflows.

Crowdin is an AI-powered localization software designed for teams and businesses. It's a cloud-based solution that streamlines localization management for your product. With 700+ apps and integrations, Crowdin automates the translation process. Its AI translator provides accurate, context-aware translations that continuously improve based on your resources and feedback. Crowdin supports 300+ languages and enables continuous localization for software, mobile apps, websites, marketing content, and help centers.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Nodes](#nodes)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Workflow Templates](#workflow-templates)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Nodes

This package includes the following nodes:

### Action Nodes

| Node | Description |
|------|-------------|
| **Crowdin (File-Based)** | Interact with Crowdin file-based projects on crowdin.com |
| **Crowdin (String-Based)** | Interact with Crowdin string-based projects on crowdin.com |
| **Crowdin Enterprise (File-Based)** | Interact with Crowdin Enterprise file-based projects |
| **Crowdin Enterprise (String-Based)** | Interact with Crowdin Enterprise string-based projects |

### Trigger Nodes

| Node | Description |
|------|-------------|
| **Crowdin (File-Based) Trigger** | Start workflows on file-based project events |
| **Crowdin (String-Based) Trigger** | Start workflows on string-based project events |
| **Crowdin Enterprise (File-Based) Trigger** | Start workflows on Enterprise file-based project events |
| **Crowdin Enterprise (String-Based) Trigger** | Start workflows on Enterprise string-based project events |

## Operations

### Common Resources

| Resource | Description |
|----------|-------------|
| **AI** | AI-powered features for translation assistance |
| **Storage** | Upload files for localization, screenshots, glossaries, and TMs |
| **Languages** | Access 300+ supported languages and their details |
| **Source Files** | Manage source files, folders, and branches |
| **Source Strings** | Manage text units for translation |
| **String/Asset Translations** | Add, remove, and manage translations and approvals |
| **String/Asset Comments** | Manage comments and issues on strings |
| **Screenshots** | Provide visual context for translators |
| **Glossaries** | Maintain terminology consistency |
| **Translation Memory** | Reuse previous translations |
| **Machine Translation Engines** | Configure MT providers (Google, DeepL, etc.) |
| **Translation Status** | Track localization progress |
| **Reports** | Generate cost estimates and translation reports |
| **Users** | Get user profile information |
| **Webhooks** | Configure project-level webhooks |
| **Organization Webhooks** | Configure account-level webhooks |
| **Applications** | Manage Crowdin App integrations |
| **Bundles** | Group files for export |
| **Dictionaries** | Manage spell-checker word lists |
| **Distributions** | Configure content delivery |
| **Labels** | Organize strings with labels |
| **Notifications** | Manage notification settings |
| **Security Logs** | Access audit logs |
| **Tasks** | Create and manage translation tasks |

### Crowdin-Specific Resources

| Resource | Description |
|----------|-------------|
| **Projects** | Manage localization projects |
| **Translations** | Pre-translate and download translations |

### Crowdin Enterprise-Specific Resources

| Resource | Description |
|----------|-------------|
| **Projects and Groups** | Manage projects and organizational groups |
| **Workflows** | Configure translation workflow templates |
| **Teams** | Manage team members and permissions |
| **Vendors** | Manage translation vendor relationships |
| **Clients** | Manage client organizations |
| **Fields** | Configure custom fields |
| **Organization** | Manage organization settings |
| **External QA Checks** | Configure external quality assurance |
| **Custom Spellcheckers** | Manage custom spell-check dictionaries |
| **String Corrections** | Manage string correction suggestions |

### Trigger Events

The trigger nodes support the following webhook events. For detailed payload structures, see the [Crowdin Webhooks Documentation](https://support.crowdin.com/developer/webhooks/#events).

#### Account/Organization Events

| Event | Crowdin | Enterprise | Description |
|-------|:-------:|:----------:|-------------|
| Project created | ✅ | ✅ | A project is created |
| Project deleted | ✅ | ✅ | A project is deleted |
| Group created | — | ✅ | A group is created |
| Group deleted | — | ✅ | A group is deleted |

#### Project Events

| Event | Description |
|-------|-------------|
| Project fully translated | All files are translated into one of the target languages |
| Project fully reviewed | Translations in all files are approved for one of the target languages |
| Project successfully built | A project is built successfully |
| Project QA check finished | QA check for all strings in the project is finished |
| Exported translation updated | Final translation of a string is updated |

#### File Events (File-Based Projects Only)

| Event | Description |
|-------|-------------|
| File added | A new file is added to the project |
| File updated | A file is updated |
| File deleted | A file is deleted |
| File reverted | A file is reverted to the previous revision |
| File fully translated | A file is translated into one of the target languages |
| File fully reviewed | Translations in a file are approved for one of the target languages |
| File QA check finished | QA check for all strings in a file is finished |

#### Source String Events

| Event | Description |
|-------|-------------|
| Source string added | A new string is added to the project |
| Source string updated | A string in the project is updated |
| Source string deleted | A string is deleted |

#### String Comment/Issue Events

| Event | Description |
|-------|-------------|
| String comment/issue created | A comment or issue is added to the string |
| String comment/issue updated | A comment or issue is updated |
| String comment/issue deleted | A comment or issue is deleted |
| String comment/issue restored | A comment or issue is restored |

#### Suggested Translation Events

| Event | Description |
|-------|-------------|
| Suggested translation added | A string in the project is translated |
| Suggested translation updated | A translation for a string in the project is updated |
| Suggested translation deleted | One of the translations is deleted |
| Suggested translation approved | A translation for a string is approved |
| Suggested translation disapproved | Approval for a previously added translation is removed |

#### Task Events

| Event | Description |
|-------|-------------|
| Task added | A task is added to the project |
| Task status changed | A task status is changed |
| Task updated | A task is updated |
| Task deleted | A task is deleted |

## Credentials

This node supports two authentication methods:

### OAuth2 (Recommended)

1. Go to your [Crowdin OAuth Apps](https://crowdin.com/settings#oauth-apps) or [Crowdin Enterprise OAuth Apps](https://{your-organization}.crowdin.com/u/system-settings/oauth-apps)
2. Create a new OAuth application
3. Configure the redirect URI as provided by n8n
4. Use the Client ID and Client Secret in n8n credentials
5. Set the required scopes (e.g., `project`, `tm`, `glossary`)

### Personal Access Token

1. Go to your [Crowdin API Settings](https://crowdin.com/settings#api-key) or [Crowdin Enterprise Access Tokens](https://{your-organization}.crowdin.com/u/user_settings/access-tokens)
2. Create a new Personal Access Token
3. Grant only the minimum required scopes for your workflow
4. Copy the token and paste it into n8n credentials

> 🔐 **Security Best Practice:** Follow the principle of least privilege - grant only the minimum scopes required for your workflow.

## Compatibility

- **Minimum n8n version:** 1.0.0
- **Tested with:** n8n 2.4.4

## Usage

### File-Based vs String-Based Projects

Crowdin supports two types of projects:

- **File-Based Projects:** Traditional localization workflow where you upload source files (JSON, XLIFF, Android XML, etc.) and download translated versions
- **String-Based Projects:** Content is managed as individual strings without file structure, ideal for web applications and dynamic content

Choose the appropriate node based on your project type.

### Crowdin vs Crowdin Enterprise

- **Crowdin (crowdin.com):** For individuals and teams using the standard Crowdin platform
- **Crowdin Enterprise:** For organizations with dedicated Crowdin Enterprise instances (custom domain: `{organization}.crowdin.com`)

### Example Workflow: Sync Translations

1. Add a **Crowdin Trigger** node to listen for `file.translated` events
2. Use the **Crowdin** node to build and download translations
3. Connect to your deployment pipeline or storage

### Using with AI Agents

All nodes in this package have `usableAsTool: true`, making them compatible with n8n's AI Agent nodes. You can use them as tools for AI-powered automation workflows.

## Workflow Templates

This package includes ready-to-use workflow templates:

| Template | Description |
|----------|-------------|
| **Crowdin AI Translation Slack Bot** | AI-powered translation assistant in Slack |
| **Crowdin AI Translation Teams Bot** | AI-powered translation assistant in Microsoft Teams |
| **Crowdin to JIRA** | Sync Crowdin issues to JIRA tickets |
| **Crowdin to Linear** | Sync Crowdin issues to Linear issues |
| **JIRA to Crowdin** | Create Crowdin tasks from JIRA tickets |
| **Linear to Crowdin** | Create Crowdin tasks from Linear issues |

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Crowdin API documentation](https://support.crowdin.com/api/v2/)
- [Crowdin Enterprise API documentation](https://support.crowdin.com/enterprise/api/)
- [Crowdin Developer Portal](https://developer.crowdin.com/)
- [Crowdin Help Center](https://support.crowdin.com/)

## License

[MIT](LICENSE.md)
