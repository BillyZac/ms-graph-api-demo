const express = require('express')
const router = express.Router()
const getToken = require('../getToken')
const getUsers = require('../getUsers')
const getEvents = require('../getEvents')
const createEvent = require('../createEvent')

const handleGetEvents = (req, res) => {
  getToken().then(token => {
    getUsers(token)
      .then(response => {
        const humanUsers = response.value.filter(user => user.givenName != null)
        return humanUsers
      })
      .then(users => {
        Promise.all(users.map(user => (
          getEvents(token, user.id).then(response => response)
        ))).then(eventsOuterArray => {
          const events = []
          eventsOuterArray.forEach(eventsInnerArray => {
            eventsInnerArray.forEach(event => events.push(event))
          })
          res.json(events)
        })
      })
  })
}

router.get('/', handleGetEvents)

router.post('/', (req, res) => {
  const event = req.body
  console.log(event)

  getToken().then(token => {
    const BruceId = '7e204238-6f5d-4b6b-afdd-995fb46d12f0'
    createEvent(token, BruceId, event)
      .then(eventId => {
        res.json({
          id: eventId
        })
      })
      .catch(error => {
        console.log(error.message)
        res.send(error.message)
      })
  })
})

module.exports = router
