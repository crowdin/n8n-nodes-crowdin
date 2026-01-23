import type {
  Icon,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class CrowdinEnterpriseOAuth2Api implements ICredentialType {
  name = 'crowdinEnterpriseOAuth2Api';
  displayName = 'Crowdin Enterprise OAuth2 API';
  icon: Icon = { light: 'file:../icons/crowdin.svg', dark: 'file:../icons/crowdin.dark.svg' };
  documentationUrl = 'https://support.crowdin.com/enterprise/api/';
  extends = ['oAuth2Api'];

  properties: INodeProperties[] = [
    {
      displayName: 'Organization',
      name: 'organization',
      type: 'string',
      default: '',
      required: true,
      placeholder: 'your-organization',
      description:
        'Your Crowdin Enterprise organization name (e.g., "acme" for acme.crowdin.com). This is required for OAuth2 configuration.',
    },
    {
      displayName: 'Grant Type',
      name: 'grantType',
      type: 'hidden',
      default: 'authorizationCode',
    },
    {
      displayName: 'Authorization URL',
      name: 'authUrl',
      type: 'hidden',
      default: '=https://{{$credentials.organization}}.crowdin.com/oauth/authorize',
    },
    {
      displayName: 'Access Token URL',
      name: 'accessTokenUrl',
      type: 'hidden',
      default: '=https://{{$credentials.organization}}.crowdin.com/oauth/token',
    },
    {
      displayName: 'Scope',
      name: 'scope',
      type: 'string',
      default: 'project',
      description:
        'Space-separated list of scopes. Available: project, group, mt, vendor, webhook, tm, glossary, ai, notification. Only request scopes your workflow actually needs.',
    },
    {
      displayName: 'Security Best Practice',
      name: 'securityNotice',
      type: 'notice',
      default: '',
      description:
        '🔐 <strong>Principle of Least Privilege:</strong> Only request the minimum scopes required for your workflow. For example, if you only need to read projects, use just "project". Adding unnecessary scopes increases security risk if the connection is compromised.',
    },
    {
      displayName: 'Auth URI Query Parameters',
      name: 'authQueryParameters',
      type: 'hidden',
      default: '',
    },
    {
      displayName: 'Authentication',
      name: 'authentication',
      type: 'hidden',
      default: 'body',
    },
  ];

  test: ICredentialTestRequest = {
    request: {
      baseURL: '=https://{{$credentials.organization}}.api.crowdin.com',
      url: '/api/v2/user',
    },
  };
}

