require('dotenv').config()
const getAllEventsFromGraphAPI = require('./getAllEventsFromGraphAPI')
const getCachedEvents = require('./getCachedEvents')

if (process.env.USE_CACHE) {
  console.log('💸  💸  💸');
  console.log('Cache is on for `GET meetings` requests.');
  console.log('💸  💸  💸');
  module.exports = getCachedEvents
} else {
  console.log('💸  💸  💸');
  console.log('Cache is turned off. Getting meetings directly from Graph API.');
  console.log('💸  💸  💸');
  module.exports = getAllEventsFromGraphAPI
}
