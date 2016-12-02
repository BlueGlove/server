
/**
 * Module dependencies.
 */

var db = require('./db');

// beaconID
// iosID
// visitEndTime
// visitBeginTime

/**
 * Add row to a table.
 */

exports.add = function *add(beaconId, iosId, visitBeginTime, visitEndTime) {
  var q = 'INSERT INTO bluegloves.visit (beaconID, iosID, visitBeginTime, visitEndTime) ';
  q += 'VALUES (\'' + beaconId + '\', \'' + iosId + '\', \'' + visitBeginTime + '\', \'' + visitEndTime + '\');';
  console.log(q);
  return yield db(q);
};
