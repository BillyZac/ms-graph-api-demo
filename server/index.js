const express = require('express')
const bodyParser = require('body-parser')
const users = require('./users')
const events = require('./events')

const app = express()
const PORT = 8888

app.use(bodyParser.json())

app.use('/users', users)
app.use('/events', events)

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
