const refreshCache = require('./refreshCache')
const CACHE_REFRESH_RATE = 10000 // In milliseconds

setInterval(refreshCache, CACHE_REFRESH_RATE)
