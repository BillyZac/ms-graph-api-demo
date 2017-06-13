const request = require('superagent')

const createEvent = (token, userId, event) => new Promise(function(resolve, reject) {
  request
    .post('https://graph.microsoft.com/v1.0/users/' + userId + '/events')
    .set('Authorization', `Bearer ${token}`)
    .send(event)
    .end((error, response) => {
      console.log('Created an event with id:', response.body.id)
      if (error) {
        throw error
      }
      resolve(response.body.id)
    })
})

module.exports = createEvent
