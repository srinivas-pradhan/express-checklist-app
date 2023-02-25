const config = require('../config/config')
const {
    AdminInitiateAuthCommand,
    AuthFlowType,
    CognitoIdentityProviderClient,
  } = requiire('@aws-sdk/client-cognito-identity-provider')
const { createClientForDefaultRegion } = require('../../libs/utils/util-aws-sdk.js')

  const adminInitiateAuth = async ({
    clientId=config.APP_CLIENT_ID,
    userPoolId=config.COGNITO_POOL_ID,
    username,
    password,
  }) => {
    const client = createClientForDefaultRegion(CognitoIdentityProviderClient);
  
    const command = new AdminInitiateAuthCommand({
      ClientId: clientId,
      UserPoolId: userPoolId,
      AuthFlow: AuthFlowType.ADMIN_USER_PASSWORD_AUTH,
      AuthParameters: { USERNAME: username, PASSWORD: password },
    });
  
    return client.send(command)
  }
  
  export { adminInitiateAuth }
  