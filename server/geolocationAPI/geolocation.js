var request = require('request');
var config;
<<<<<<< HEAD
try {
  config = require('../../config.js');
} catch (e) {
  config = undefined;
=======
if ( process.env.NODE_ENV !== 'production' ) { // if we are not at heroku
  var config = require('../../config.js');
>>>>>>> Fig bug related to require config.js
}

var requestGeolocation = function(location, callback) {
  var key = process.env.GEO_API || config.geolocationAPI;
  var geoUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + key;

  request(geoUrl, function(error, response, body) {
    callback(JSON.parse(body));
  });
}

module.exports.requestGeolocation = requestGeolocation;
