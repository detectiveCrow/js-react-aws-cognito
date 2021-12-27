import { CognitoUserPool } from "amazon-cognito-identity-js";

console.log(process.env);
console.log(process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID);
console.log(process.env.REACT_APP_AWS_COGNITO_CLIENT_ID);

const poolData = {
    UserPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
}

export default new CognitoUserPool(poolData);