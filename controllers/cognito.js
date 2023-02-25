const { CognitoJwtVerifier } = require('aws-jwt-verify')
const config = require('./../config/config')
var { CognitoIDP } = require('@aws-sdk/client-cognito-identity-provider');
//var cognitoidentityserviceprovider = new CognitoIDP.CognitoIdentityServiceProvider();

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminInitiateAuth-property
const init_auth = CognitoIDP.InitiateAuthRequest(params={}, function(err, data) {
    try {
        console.log(data)
    }
    catch(err) {
        console.log(err, err.stack)
    }
  })

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#getUser-property
const getUser = CognitoIDP.getUser(params = {}, function(err, data) {
    try {
        console.log(data)
    }
    catch(err) {
        console.log(err, err.stack)
    }
  })

// https://github.com/awslabs/aws-jwt-verify
// Needs dotenv passed here

// validate_user_id
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
// is_token_expired

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#changePassword-property
const change_passwd = CognitoIDP.changePassword(params, function(err, data) {
    try {
        console.log(data)
    }
    catch(err) {
        console.log(err, err.stack)
    }
  })

module.exports = {
    init_auth,
    getUser,
    is_token_valid,
    change_passwd
  }
  