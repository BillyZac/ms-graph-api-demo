const express = require('express')
const router = express.Router()
const tokenService = require('../services/token')
const usersService = require('../services/users')
const handleResponse = require('./utils/handleResponse')

const getToken = tokenService.getToken
const getUsers = usersService.getUsers

router.get('/', (req, res) => {
  getToken().then(token => handleResponse(getUsers, res, token))
})

module.exports = router
