const express = require('express')
const router = express.Router()
const tokenService = require('../services/token')
const usersService = require('../services/users')

const getToken = tokenService.getToken
const getUsers = usersService.getUsers

const handleGetRooms = (req, res) => {
  getToken().then(token => {
    getUsers(token)
      .then(response => {
        const rooms = response.value.filter(user => user.givenName === null)
        res.json(rooms)
      })
      .catch(error => {
        console.log(error)
        res.send('Error getting users:', error.message)
      })
  })
}

router.get('/', handleGetRooms)

module.exports = router
