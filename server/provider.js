
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Provider = wrap(db.get('provider'));

/**
 * Expose `Provider`.
 */

module.exports = Provider;
