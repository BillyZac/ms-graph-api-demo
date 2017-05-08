const request = require('superagent')
require('dotenv').config()

request
  .get('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location')
  .set('Authorization', process.env.BEARER_TOKEN)
  .end((error, ressponse) => {
    if (error) {
      console.log(error)
    }
    console.log(ressponse)
  })
