const request = require('superagent')

const deleteEvent = (token, userId, meetingId) => new Promise(function(resolve, reject) {
  request
    .delete('https://graph.microsoft.com/v1.0/users/' + userId + '/calendar/events/' + meetingId)
    .set('Authorization', `Bearer ${token}`)
    .end((error, response) => {
      if (error) {
        reject(error)
      }
      resolve('Deleted the event')
    })
})

module.exports = deleteEvent
