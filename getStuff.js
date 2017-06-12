const request = require('superagent')
const getToken = require('./getToken')

getToken()
  .then(token => {
    console.log('Getting with token')
    console.log(token)
    const bearerToken = `BEARER_TOKEN=Bearer ${token.access_token}`
    request
      .get('https://graph.microsoft.com/v1.0/users/')
      .set('Authorization', bearerToken)
      .end((error, response) => {
        if (error) {
          throw error
        }
        console.log(response.body)
      })

  })
  .catch(error => console.log(error))
