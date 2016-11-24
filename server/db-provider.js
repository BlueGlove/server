
/**
 * Module dependencies.
 */

var uuid = require('node-uuid');
var db = require('./db');

//   - providerPK (U)
//   - providerOrgName
//   - providerEmail

/**
 * Add row to table.
 */

exports.add = function *add(providerOrgName, providerEmail) {
  var providerOrgName = providerOrgName || '';
  var providerPK = 'pro_' + uuid.v4();
  var q = 'INSERT INTO bluegloves.provider (providerPK, providerOrgName, providerEmail) ';
  q += 'VALUES (\'' + providerPK + '\', \'' + providerOrgName + '\', \'' + providerEmail + '\');';

  console.log(q);

  var res = yield thunkedQuery(q);
  return res;
};

function thunkedQuery(q) {
  return function(fn) {
    db.query(q, function(err, res) {
      db.end(fn);
    });
  }
}
