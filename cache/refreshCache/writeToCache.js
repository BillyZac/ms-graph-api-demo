const fs = require('fs')
const datastorePath = './cache/datastore/'
const cacheFileName = `${datastorePath}events.json`
const timestampFileName = `${datastorePath}timestamp`
const handleError = require('./handleError')

const writeToCache = events => {
  const stringifiedEvents = JSON.stringify(events)
  const timestamp = (new Date()).toString()

  fs.writeFile(cacheFileName, stringifiedEvents, handleError)
  fs.writeFile(timestampFileName, timestamp, handleError)

  console.log(`Wrote ${events ? events.length : 'no'} events to ${cacheFileName} at ${timestamp}`);
}

module.exports = writeToCache
