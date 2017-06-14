const writeToCache = require('./writeToCache')
const handleError = require('./handleError')

const getEventsFromGraphAPI = require('../../services/events/getEvents/getAllEventsFromGraphAPI')

const refreshCache = () => {
  getEventsFromGraphAPI()
    .then(writeToCache)
    .catch(handleError)
}

module.exports = refreshCache
