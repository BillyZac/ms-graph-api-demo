const request = require('superagent')
require('dotenv').config()

const tokenEndpoint = `https://login.windows.net/${process.env.TENANT_ID}/oauth2/token`

const params = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  resource: 'https://graph.microsoft.com',
  grant_type: 'client_credentials',
}

const getToken = () => new Promise(function(resolve, reject) {
  request
    .post(tokenEndpoint)
    .type('form')
    .send(params)
    .end((error, response) => {
      if (error) {
        throw error
      }
      const token = response.body
      resolve(token.access_token)
    })
})

module.exports = getToken
