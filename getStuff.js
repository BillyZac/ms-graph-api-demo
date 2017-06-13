const bruce = {
  id: '7e204238-6f5d-4b6b-afdd-995fb46d12f0',
  businessPhones: [],
  displayName: 'Bruce Springsteen',
  givenName: 'Bruce',
  jobTitle: null,
  mail: 'bruce@designitcontoso.onmicrosoft.com',
  mobilePhone: null,
  officeLocation: null,
  preferredLanguage: 'en-US',
  surname: 'Springsteen',
  userPrincipalName: 'bruce@designitcontoso.onmicrosoft.com'
}

const request = require('superagent')
const getToken = require('./getToken')
const getUsers = require('./getUsers')
const getEvents = require('./getEvents')

const thing = token => {
  getUsers(token)
    .then(console.log)
    .catch(error => console.log(error))
}

const eventsThing = (token, userId = '7e204238-6f5d-4b6b-afdd-995fb46d12f0') => {
  getEvents(token, userId)
    .then(console.log)
    .catch(error => console.log(error))
}

getToken()
  .then(eventsThing)
  .catch(error => console.log(error))
