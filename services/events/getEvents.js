const request = require('superagent')

const getEvents = (token, userId) => new Promise((resolve, reject) => {
  request
    .get('https://graph.microsoft.com/v1.0/users/' + userId + '/events')
    .set('Authorization', `Bearer ${token}`)
    .end((error, response) => {
      if (error) {
        reject(error)
      }
      const events = response.body.value.map(event => {
        return ({
          id: event.id,
          subject: event.subject,
          start: event.start,
          end: event.end,
          isCancelled: event.isCancelled,
          location: event.location,
          attendees: event.attendees,
          organizer: event.organizer,
        })
      })
      resolve(events)
    })
})

module.exports = getEvents
