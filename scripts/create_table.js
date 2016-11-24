
/**
 * Module dependencies.
 */

var db = require('../server/db');

// Create tables
// - consumer
//   - consumerPK (U)
//   - consumerNickname
// - visit
//   - beaconID (FK)
//   - iosID (FK)
//   - visitEndTime
//   - visitBeginTime
// - provider
//   - providerPK (U)
//   - providerOrgName
//   - providerEmail

var consumerModel = [{
  name: 'consumerPK',
  datatype: 'text'
}, {
  name: 'consumerNickname',
  datatype: 'text'
}];

var visitModel = [{
  name: 'beaconID',
  datatype: 'text'
}, {
  name: 'iosID',
  datatype: 'text'
}, {
  name: 'visitEndTime',
  datatype: 'timestamp with time zone'
}, {
  name: 'visitBeginTime',
  datatype: 'timestamp with time zone'
}];

var providerModel = [{
  name: 'providerPK',
  datatype: 'text'
}, {
  name: 'providerOrgName',
  datatype: 'text'
}, {
  name: 'providerEmail',
  datatype: 'text'
}];

/**
 * Create databases.
 */

create('bluegloves.consumer', consumerModel);
create('bluegloves.visit', visitModel);
create('bluegloves.provider', providerModel);

/**
 * Create table.
 *
 * @name 'consumer'
 * @columns [{ name: '', datatype: '' }]
 */

function create(name, columns) {
  var q = 'CREATE TABLE ' + name + ' (';
  for (var i = 0; i < columns.length; i++) {
    q += columns[i].name + ' ' + columns[i].datatype;
    if (i < columns.length - 1) q += ', ';
  }
  q += ');';

  console.log(q);

  db.query(q, function(err, res) {
    if (err) throw err;
    console.log(res);

    db.end(function(err) {
      if (err) throw err;
    });
  });
};
