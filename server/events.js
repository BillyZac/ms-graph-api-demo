const express = require('express')
const router = express.Router()
const handleResponse = require('./utils/handleResponse')

const tokenService = require('../services/token')
const usersService = require('../services/users')
const eventsService = require('../services/events')

const getToken = tokenService.getToken
const getUsers = usersService.getUsers
const getEvents = eventsService.getEvents
const createEvent = eventsService.createEvent
const updateEvent = eventsService.updateEvent
const getEvent = eventsService.getEvent
const deleteEvent = eventsService.deleteEvent

router.get('/', (req, res) => {
  handleResponse(getEvents, res)
})

router.post('/', (req, res) => {
  const userId = req.query.userId
  const meetingId = req.query.meetingId
  const event = req.body

  getToken().then(token => {
    createEvent(token, userId, event)
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
  const userId = req.query.userId
  const meetingId = req.query.meetingId
  const event = req.body

  getToken().then(token => {
    updateEvent(token, userId, meetingId, event)
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
  const userId = req.query.userId
  const meetingId = req.query.meetingId

  getToken().then(token => {
    deleteEvent(token, userId, meetingId)
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
