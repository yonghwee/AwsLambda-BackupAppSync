'use strict';

// Setup AWS SDK.
const aws = require('aws-sdk');
aws.config.update({
  region: 'us-east-1'
});

const appsync = new aws.AppSync();


const backup_graphapi_overview = async (appsyncApiId) => {
  const params = {
    apiId: appsyncApiId
  };
  
  const result = await appsync.getGraphqlApi(params).promise().catch((err) => {
    console.log(err);
    return false;
  });
  
  console.log('API OVERVIEW');
  console.log(result);
};

const backup_datasources = async (appsyncApiId) => {
  const params = {
    apiId: appsyncApiId
  };
  
  const result = await appsync.listDataSources(params).promise().catch((err) => {
    console.log(err);
    return false;
  });
  
  console.log('DATA SOURCES');
  if (result && result.dataSources) {
    for (let i = 0; i < result.dataSources.length; i++) {
      console.log(result.dataSources[i]);
    }
  }
};

const backup_resolvers = async (appsyncApiId, typeName) => {
  let params = {
    apiId: appsyncApiId,
    typeName: typeName
  };
  
  const result = await appsync.listResolvers(params).promise().catch((err) => {
    console.log(err);
    return false;
  });
  
  console.log('RESOLVERS:', typeName);
  console.log(result);
};

const backup_types = async (appsyncApiId) => {
  let params = {
    apiId: appsyncApiId,
    format: 'JSON'
  };
  
  const result = await appsync.listTypes(params).promise().catch((err) => {
    console.log(err);
    return false;
  });
  
  console.log('TYPES');
  console.log(result);
};

const backup_schema = async (appsyncApiId) => {
  let params = {
    apiId: appsyncApiId,
    format: 'JSON'
  };
  
  const result = await appsync.getIntrospectionSchema(params).promise().catch((err) => {
    console.log(err);
    return false;
  });
  
  console.log('SCHEMA');
  console.log(result.schema.toString());
};


exports.backup_graphapi_overview = backup_graphapi_overview;
exports.backup_datasources = backup_datasources;
exports.backup_resolvers = backup_resolvers;
exports.backup_types = backup_types;
exports.backup_schema = backup_schema;