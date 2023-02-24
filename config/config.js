const dotenv = require('dotenv')

const config = {
    PORT: process.env.PORT,
    COGNITO_POOL_ID: process.env.COGNITO_POOL_ID,
    APP_CLIENT_ID: process.env.APP_CLIENT_ID,
    // AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    // AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    // REGION_NAME: process.env.REGION_NAME
}
  
module.exports = config;
