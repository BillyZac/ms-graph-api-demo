const request = require('superagent')

const getEvent = (token, userId, meetingId) => new Promise(function(resolve, reject) {
  request
    .get('https://graph.microsoft.com/v1.0/users/' + userId + '/events/' + meetingId)
    .set('Authorization', `Bearer ${token}`)
    .end((error, response) => {
      if (error) {
        reject(error)
      }
      console.log(response.body)
      resolve(response.body)
    })
})

module.exports = getEvent
