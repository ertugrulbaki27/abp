import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  hmr: false,
  application: {
    baseUrl,
    name: 'MyProjectName',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44305',
    clientId: 'MyProjectName_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'offline_access MyProjectName',
    // responseType: 'code',
    // redirectUri: baseUrl
  },
  apis: {
    default: {
      url: 'https://localhost:44305',
      rootNamespace: 'MyCompanyName.MyProjectName',
    },
    AbpFeatureManagement: {
      url: 'https://localhost:44305',
      rootNamespace: 'Volo.Abp',
    },
    AbpPermissionManagement: {
      url: 'https://localhost:44305',
      rootNamespace: 'Volo.Abp.PermissionManagement',
    },
    AbpTenantManagement: {
      url: 'https://localhost:44305',
      rootNamespace: 'Volo.Abp.TenantManagement',
    },
    AbpIdentity: {
      url: 'https://localhost:44305',
      rootNamespace: 'Volo.Abp',
    },
    AbpSettingManagement: {
      url: 'https://localhost:44305',
      rootNamespace: 'Volo.Abp.SettingManagement',
    },
  },
} as Environment;
