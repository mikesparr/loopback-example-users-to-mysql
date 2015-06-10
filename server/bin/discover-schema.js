var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.accountDs;

dataSource.discoverSchema('Account', {schema: 'loopback_test'},
    function(err, schema) {
  if (err) throw err;

  console.log(JSON.stringify(schema, null, '  '));

  dataSource.disconnect();
});
