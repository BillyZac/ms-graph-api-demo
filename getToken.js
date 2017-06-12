const request = require('superagent')
require('dotenv').config()

const params = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_url: 'http://localhost/8888', // Why is this needed?
  scope: 'https://graph.microsoft.com/.default',
  grant_type: 'client_credentials',
}

const getToken = () => new Promise(function(resolve, reject) {
  request
    .post(`https://login.microsoftonline.com/common/oauth2/v2.0/token/`)
    .type('form')
    .send(params)
    .end((error, response) => {
      if (error) {
        throw error
      }
      const token = response.body
      resolve(token)
    })
})

module.exports = getToken
