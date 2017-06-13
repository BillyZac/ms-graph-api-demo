const express = require('express')
const router = express.Router()
const getToken = require('../getToken')
const getUsers = require('../getUsers')
const getEvents = require('../getEvents')
const createEvent = require('../createEvent')
const updateEvent = require('../updateEvent')
const getEvent = require('../getEvent')
const deleteEvent = require('../deleteEvent')

router.get('/', (req, res) => {
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
})

router.post('/', (req, res) => {
  const event = req.body

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

router.patch('/', (req, res) => {
  console.log('Got a patch request')
  const userEmail = 'aochsner@designitcontoso.onmicrosoft.com'
  const meetingId = 'AAMkADNiMDRmZjI0LWMxMDQtNDlmYS1hMmNjLWQxZjc4ZGIyYmU5MQBGAAAAAACYlYq7b9zCSrzcCa4YqmdkBwCAHmHuRmT5SIjex6MCuGpQAAAAAAENAACAHmHuRmT5SIjex6MCuGpQAAANL6WMAAA='

  const event = {
    id: meetingId,
    subject: 'Hey this event has been updated again.',
    isCancelled: true,
  }

  getToken().then(token => {

    updateEvent(token, userEmail, meetingId, event)
      .then(response => {
        res.send(response)
      })
      .catch(error => {
        console.log(error.message)
        res.send(error.message)
      })
  })
})

router.delete('/', (req, res) => {
  console.log('Got a delete request')
  const userEmail = 'bruce@designitcontoso.onmicrosoft.com'
  const meetingId = 'AAMkADEyZWVmODI5LTQxYmYtNDI0MS1hZWFjLTYxZjc1ZDQ4ZmQwNwBGAAAAAACNcZxZz2UxT6DuSC4yUmLIBwCoURkswYJCTa2oEbGxtmg3AAAAAAENAACoURkswYJCTa2oEbGxtmg3AAAJvpzLAAA='

  getToken().then(token => {

    deleteEvent(token, userEmail, meetingId)
      .then(response => {
        res.send(response)
      })
      .catch(error => {
        console.log(error.message)
        res.send(error.message)
      })
  })
})

module.exports = router
