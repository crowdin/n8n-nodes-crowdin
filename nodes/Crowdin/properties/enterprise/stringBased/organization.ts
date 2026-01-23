// Auto-generated - do not edit manually

import type { INodeProperties } from 'n8n-workflow';

export const organizationProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'organization'
				]
			}
		},
		options: [
			{
				name: 'Get Organization Authentication Settings',
				value: 'api.organization.auth-settings.get',
				action: 'Get Organization Authentication Settings',
				description: '**Required scopes:** `organization` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/organization/auth-settings'
					}
				}
			},
			{
				name: 'Get Organization Info',
				value: 'api.organization.get',
				action: 'Get Organization Info',
				description: '**Required scopes:** `organization` (Read only).',
				routing: {
					request: {
						method: 'GET',
						url: '=/organization'
					}
				}
			}
		],
		default: 'api.organization.auth-settings.get'
	},
	{
		displayName: 'GET /organization/auth-settings',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organization'
				],
				operation: [
					'api.organization.auth-settings.get'
				]
			}
		}
	},
	{
		displayName: 'GET /organization',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info'
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'organization'
				],
				operation: [
					'api.organization.get'
				]
			}
		}
	}
];
