
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Consumer = wrap(db.get('consumer'));

/**
 * Expose `Consumer`.
 */

module.exports = Consumer;
