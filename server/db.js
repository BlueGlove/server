
/**
 * Module dependencies.
 */

var pg = require('pg');
var Pool = require('pg').Pool;
var config = require('../config');

/**
 * Instantiate pool.
 */

module.exports = new Pool({
  user: config.pgUser,
  password: config.pgPassword,
  host: config.pgHost,
  database: config.pgName,
  max: 20, // max number of clients in pool
  idleTimeoutMillis: 1000, // close & remove clients which have been idle > 1 second
  ssl: true
});
