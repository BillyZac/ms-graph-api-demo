const tokenService = require('../../token')
const usersService = require('../../users')
const getASingleUsersEventsFromGraphAPI =
  require('./getASingleUsersEventsFromGraphAPI')

const getAllEventsFromGraphAPI = () => new Promise((resolve, reject) => {
  tokenService.getToken()
    .then(token => {
      usersService.getUsers(token)
        .then(users => {
          Promise.all(users.map(user => (
            getASingleUsersEventsFromGraphAPI(token, user.id)
              .then(response => response)
          )))
          .then(eventsOuterArray => {
            const events = []
            eventsOuterArray.forEach(eventsInnerArray => {
              eventsInnerArray.forEach(event => events.push(event))
            })
            resolve(events)
          })
          .catch(error => {
            reject(error)
          })
      })
  })
})

module.exports = getAllEventsFromGraphAPI
