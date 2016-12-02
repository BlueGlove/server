
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

  return yield thunkedQuery(q);

  // thunkedQuery(q)(function(err, res) {
  //   console.log(err);
  //   console.log(res);
  // });

  // return res;
};

function thunkedQuery(q) {
  return function(fn) {
    db.connect(function(err, client, done) {
      client.query(q, [], function(err, res) {
        done();
        if (err) console.error(err);
        console.log(res);
      });
    });
  }
}
