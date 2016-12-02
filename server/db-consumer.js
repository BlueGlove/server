
/**
 * Module dependencies.
 */

var uuid = require('node-uuid');
var db = require('./db');

/**
 * Add row to table.
 */

exports.add = function *add(consumerNickname) {
  var consumerPK = 'cus_' + uuid.v4();
  var q = 'INSERT INTO bluegloves.consumer (consumerPK, consumerNickname) ';
  q += 'VALUES (\'' + consumerPK + '\', \'' + consumerNickname + '\');';
  console.log(q);
  return yield db(q);
};
