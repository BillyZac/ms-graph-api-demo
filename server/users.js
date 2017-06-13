const express = require('express')
const router = express.Router()
const getToken = require('../getToken')
const getUsers = require('../getUsers')

const handleGetUsers = (req, res) => {
  getToken().then(token => {
    getUsers(token)
      .then(response => {
        const humanUsers = response.value.filter(user => user.givenName != null)
        res.json(humanUsers)
      })
      .catch(error => {
        console.log(error)
        res.send('Error getting users:', error.message)
      })
  })
}

router.get('/', handleGetUsers)

module.exports = router
