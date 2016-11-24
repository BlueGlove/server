
/**
 * Module dependencies.
 */

var db = require('../server/db');

/**
 * Drop tables.
 */

drop('bluegloves.consumer');
drop('bluegloves.provider');
drop('bluegloves.visit');

/**
 * Drop table.
 */

function drop(name) {
  var q = 'DROP TABLE ' + name + ';';

  console.log(q);

  pool.query(q, function(err, res) {
    if (err) throw err;
    pool.end(function(err) {
      if (err) throw err;
    });
  });
}
