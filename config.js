
/**
 * Module dependencies.
 */

var dotenv = require('dotenv');
var cfg = {};

// Set env variables.
dotenv.config({path: '.env'});

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// PG variables need to be set.
cfg.pgUser = process.env.PG_USER;
cfg.pgPassword = process.env.PG_PASSWORD;
cfg.pgHost = process.env.PG_HOST;
cfg.pgName = process.env.PG_NAME;

// Ensure all required configuration is set
var configured = [
  cfg.pgUser,
  cfg.pgPassword,
  cfg.pgHost,
  cfg.pgName
].every(function(configValue) {
  if (configValue) {
    return true;
  }
});

// Show error message if not configured.
if (!configured) {
  var s = 'Postgres configuration variables must be set';
  throw new Error(s);
}

// Export configuration object
module.exports = cfg;
