
/**
 * Module dependencies.
 */

var pg = require('pg');
var Pool = require('pg').Pool;
var config = require('../config');
var EventEmitter = require('events');

/**
 * Increase connections.
 */

var emitter = new EventEmitter();
emitter.setMaxListeners(0);

/**
 * Expose `Db`.
 */

module.exports = Db;

/**
 * Initialize `Db`
 */

function Db() {
  if (!(this instanceof Db)) return new Db();
  this.pool = new Pool({
    user: config.pgUser,
    password: config.pgPassword,
    host: config.pgHost,
    database: config.pgName,
    max: 20, // max number of clients in pool
    idleTimeoutMillis: 1000, // close & remove clients which have been idle > 1 second
    ssl: true
  });
}

/**
 * ThunkedQuery.
 */

Db.prototype.thunkedQuery = function(q) {
  return function(fn) {
    Db.pool.connect(function(err, client, done) {
      client.query(q, [], function(err, res) {
        done();
        if (err) console.error(err);
        console.log(res);
        fn();
      });
    });
  }
}
