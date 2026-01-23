import type {
  Icon,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class CrowdinOAuth2Api implements ICredentialType {
  name = 'crowdinOAuth2Api';
  displayName = 'Crowdin OAuth2 API';
  icon: Icon = { light: 'file:../icons/crowdin.svg', dark: 'file:../icons/crowdin.dark.svg' };
  documentationUrl = 'https://support.crowdin.com/api/v2/';
  extends = ['oAuth2Api'];

  properties: INodeProperties[] = [
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
      default: 'https://accounts.crowdin.com/oauth/authorize',
    },
    {
      displayName: 'Access Token URL',
      name: 'accessTokenUrl',
      type: 'hidden',
      default: 'https://accounts.crowdin.com/oauth/token',
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

  // Note: Organization domain is automatically extracted from the JWT access token
  // for Crowdin Enterprise users. No manual configuration needed.

  // Test credential by fetching current user
  // The baseURL will be determined dynamically based on JWT payload
  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://api.crowdin.com',
      url: '/api/v2/user',
    },
  };
}
