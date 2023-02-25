const { CognitoJwtVerifier } = require('aws-jwt-verify')

const is_token_valid = async (jwt_token) => {
    const verifier = CognitoJwtVerifier.create({
        userPoolId: config.COGNITO_POOL_ID,
        tokenUse: "access",
        clientId: config.APP_CLIENT_ID
      });
    try {
        const payload = await verifier.verify(jwt_token)
        console.log("Token is valid. Payload:", payload)
    } 
    catch(err) {
        console.log("Token not valid!")
      }
}
