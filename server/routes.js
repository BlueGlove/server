
/**
 * Module dependencies.
 */

var render = require('../lib/render');

/**
 * Render index html page.
 */

module.exports.index = function *() {
  this.body = yield render('index');
};

/**
 * API routes, get search results.
 */

module.exports.search = function *() {
};
