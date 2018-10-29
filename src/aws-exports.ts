import env from './environments/environment';

const config = {
  s3: {
    REGION: 'us-west-2',
    BUCKET: env.REACT_APP_S3_BUCKET_NAME
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: `${env.REACT_APP_API_GATEWAY_URL}/development`
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: env.REACT_APP_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: env.REACT_APP_COGNITO_APP_CLIENT_ID,
    IDENTITY_POOL_ID: env.REACT_APP_COGNITO_IDENTITY_POOL_ID
  }
};

export default config;
