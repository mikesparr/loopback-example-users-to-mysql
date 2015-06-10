var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var accounts = [
  {
    email: 'foo@bar.com',
    createdAt: new Date(),
    lastModifiedAt: new Date()
  },
  {
    email: 'baz@qux.com',
    createdAt: new Date(),
    lastModifiedAt: new Date()
  }
];
var dataSource = app.dataSources.accountDs;

dataSource.automigrate('Account', function(err) {
  if (err) throw err;

  var Account = app.models.Account;
  var count = accounts.length;

  accounts.forEach(function(account) {
    Account.create(account, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        //dataSource.disconnect();
      }
    });
  });
});

dataSource.automigrate('User', function(err) {
  if (err) throw err;

  console.log('User model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('AccessToken', function(err) {
  if (err) throw err;

  console.log('AccessToken model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('ACL', function(err) {
  if (err) throw err;

  console.log('ACL model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('RoleMapping', function(err) {
  if (err) throw err;

  console.log('RoleMapping model migrated');
  //dataSource.disconnect();
});
dataSource.automigrate('Role', function(err) {
  if (err) throw err;

  console.log('Role model migrated');
  dataSource.disconnect();
});
