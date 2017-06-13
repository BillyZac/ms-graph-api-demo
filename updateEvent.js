const request = require('superagent')

const updateEvent = (token, userId, meetingId, event) => new Promise(function(resolve, reject) {
  request
    .patch('https://graph.microsoft.com/v1.0/users/' + userId + '/calendar/events/' + meetingId)
    .set('Authorization', `Bearer ${token}`)
    .send(event)
    .end((error, response) => {
      if (error) {
        throw error
      }
      resolve('Updated the event')
    })
})

module.exports = updateEvent
