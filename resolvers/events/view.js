'use strict';

import AWS from'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default (id) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: { id }
    };
    return dynamoDb.get(params).promise()
        .then(r => r.Item);
};