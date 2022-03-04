'use strict';
const methods = require('./lib/methods.js');
const appsyncApiId = 'na3dkslbljfmbjcob2orjgjlui';

exports.handler = async (event, context, next) => {
  console.log('*** COMMENCE BACKUP:', new Date());
  await methods.backup_graphapi_overview(appsyncApiId);
  await methods.backup_schema(appsyncApiId);
  await methods.backup_types(appsyncApiId);
  await methods.backup_datasources(appsyncApiId);
  await methods.backup_resolvers(appsyncApiId, 'Mutation');
  await methods.backup_resolvers(appsyncApiId, 'Query');
  console.log('*** END BACKUP ***');
  next(null);
};

