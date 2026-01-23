import type {
  IAuthenticateGeneric,
  Icon,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class CrowdinApi implements ICredentialType {
  name = 'crowdinApi';
  displayName = 'Crowdin API';
  icon: Icon = { light: 'file:../icons/crowdin.svg', dark: 'file:../icons/crowdin.dark.svg' };
  documentationUrl = 'https://support.crowdin.com/api/v2/';

  properties: INodeProperties[] = [
    {
      displayName: 'Personal Access Token',
      name: 'accessToken',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
      description:
        'Your Crowdin Personal Access Token. Get it from Account Settings → API → Personal Access Tokens.',
    },
    {
      displayName: 'Security Best Practice',
      name: 'securityNotice',
      type: 'notice',
      default: '',
      description:
        '🔐 <strong>Principle of Least Privilege:</strong> When creating your Personal Access Token, grant only the minimum scopes required for your workflow. Avoid selecting all scopes unless absolutely necessary. This limits potential exposure if the token is compromised.',
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '=Bearer {{$credentials.accessToken}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://api.crowdin.com',
      url: '/api/v2/user',
    },
  };
}

