const cachedEvents = require('../../../cache/datastore/events.json')

const getCachedEvents = () => Promise.resolve(cachedEvents)

module.exports = getCachedEvents
