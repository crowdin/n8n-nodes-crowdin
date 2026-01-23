import type {
  IAuthenticateGeneric,
  Icon,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class CrowdinEnterpriseApi implements ICredentialType {
  name = 'crowdinEnterpriseApi';
  displayName = 'Crowdin Enterprise API';
  icon: Icon = { light: 'file:../icons/crowdin.svg', dark: 'file:../icons/crowdin.dark.svg' };
  documentationUrl = 'https://support.crowdin.com/enterprise/api/';

  properties: INodeProperties[] = [
    {
      displayName: 'Organization',
      name: 'organization',
      type: 'string',
      default: '',
      required: true,
      placeholder: 'your-organization',
      description:
        'Your Crowdin Enterprise organization name (e.g., "acme" for acme.crowdin.com)',
    },
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
        'Your Crowdin Enterprise Personal Access Token. Get it from Account Settings → API → Personal Access Tokens.',
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
      baseURL: '=https://{{$credentials.organization}}.api.crowdin.com',
      url: '/api/v2/user',
    },
  };
}

