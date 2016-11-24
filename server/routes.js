
/**
 * Module dependencies.
 */

var Provider = require('./db-provider');
var Consumer = require('./db-consumer');
var Visit = require('./db-visit');
var render = require('./render');

/**
 * Render index html page.
 */

module.exports.index = function *() {
  this.body = yield render('index');
};

/**
 * Create new consumer.
 *
 * POST
 * /consumer/new
 */

module.exports.setConsumer = function *() {
  var name = this.request.body.name || '';
  this.body = yield Consumer.add(name);
};

/**
 * Create new provider.
 *
 * POST
 * /provider/new
 */

module.exports.setProvider = function *() {
  if (!this.request.body.email) return this.body = 'No email provided.';
  var name = this.request.body.name || '';
  var email = this.request.body.email;
  this.body = yield Provider.add(name, email);
};

/**
 * Create new visit.
 *
 * POST
 * /visit/new
 */

module.exports.setVisit = function *() {
  var beaconId = this.request.body.beaconId;
  var iosId = this.request.body.iosId;
  var visitBeginTime = this.request.body.visitBeginTime;
  var visitEndTime = this.request.body.visitEndTime;
  this.body = yield Visit.add(beaconId, iosId, visitBeginTime, visitEndTime);
};

// when a new visitor downloads the app
// add to consumer table
// add to visit table

// when a new vendor comes online
// add to provider table

// when an existing visitor enters a place
// add to visit table


