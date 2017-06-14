const express = require('express')
const bodyParser = require('body-parser')
const users = require('./users')
const events = require('./events')
const logger = require('./utils/logger')
const app = express()
const PORT = 8888

app.use(bodyParser.json())
app.use(logger)

app.use('/users', users)
app.use('/events', events)

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
