const request = require('superagent')

const getUsers = token => new Promise((resolve, reject) => {
  request
    .get('https://graph.microsoft.com/v1.0/users')
    .set('Authorization', `Bearer ${token}`)
    .end((error, response) => {
      if (error) {
        reject(error)
      }
      const users = response.body
      resolve(users)
    })
})

module.exports = getUsers
