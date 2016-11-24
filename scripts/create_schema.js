
/**
 * Module dependencies.
 */

var db = require('../server/db');

/**
 * Create schema.
 */

create('bluegloves');

/**
 * Create schema.
 */

function create(name) {
  var q = 'CREATE SCHEMA ' + name + ';';
  db.query(q, function(err, res) {
    if (err) throw err;
    console.log(res);

    db.end(function(err) {
      if (err) throw err;
    });
  });
};
