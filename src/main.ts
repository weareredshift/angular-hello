import Amplify from 'aws-amplify';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import amplifyConfig from './aws-exports';

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: amplifyConfig.cognito.REGION,
    userPoolId: amplifyConfig.cognito.USER_POOL_ID,
    identityPoolId: amplifyConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: amplifyConfig.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: amplifyConfig.s3.REGION,
    bucket: amplifyConfig.s3.BUCKET,
    identityPoolId: amplifyConfig.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'transcribble',
        endpoint: amplifyConfig.apiGateway.URL,
        region: amplifyConfig.apiGateway.REGION
      }
    ]
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
