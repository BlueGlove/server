
/**
 * Module dependencies.
 */

var Provider = require('./provider');
var Consumer = require('./consumer');
var render = require('./render');

/**
 * Render index html page.
 */

module.exports.index = function *() {
  this.body = yield render('index');
};

/**
 * Get provider by ID.
 *
 * /provider/:id
 */

module.exports.getProvider = function *(id) {
  // get provider by ID
  var provider = yield Provider.findOne({ id: id });
  if (!provider) provider = 'No provider found.';
  this.body = provider;
};

/**
 * Get consumers by provider ID.
 *
 * /provider/:id/consumers
 */

module.exports.getConsumers = function *(id) {
  // Get all consumers who have ever "checked in" to the provider.
};

/**
 * Get consumer by ID.
 *
 * /consumer/:id
 */

module.exports.getConsumer = function *(id) {
  var consumer = yield Consumer.findOne({ id: id });
  if (!consumer) consumer = 'No consumer found.';
  this.body = consumer;
};

/**
 * Check a consumer into a provider.
 *
 * /consumer/:id
 */

module.exports.setConsumer = function *(id) {
  // Get the consumer, get the provider, and then add that consumer into the list of providers.
  // Save that list under the provider.
};
