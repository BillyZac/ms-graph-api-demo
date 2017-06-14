# A brief demo of MS Graph Api

Show how to do some neat stuff with the Microsoft Graph API.

## Usage
Create an [app](https://apps.dev.microsoft.com).

Put it's info in a `.env` file:

```
CLIENT_ID=<client id>
CLIENT_SECRET=<client secret>
TENANT_ID=<tenant id>
```

### Install dependencies:
```
yarn install
```

### Start the server:

```
yarn start
```

### Do some stuff:

List events
http://localhost:8888/events

Create an event (using [httpie](https://httpie.org/))

`http http://localhost:8888/events < sampleEventForTestingPostRoute.json`


Update an event

`http PATCH http://localhost:8888/events\?userId\=aochsner@designitcontoso.onmicrosoft.com\&meetingId\=BloopeeDeeDee subject='Shurg blurgee'`


Delete an event

`http DELETE http://localhost:8888/events\?userId\=bruce@designitcontoso.onmicrosoft.com\&meetingId\=BloopeeDeeDoh`


List users
http://localhost:8888/users

## Questions
I am using a `handleResponse` utility in the `users` route. Probably should use this for all routes, but need to redo the services first. For instance, there is a bunch of work going on the in `GET events` route that could be hidden away in the `events` service. Then the REST layer simply receives requests, hands them off to a service, and then sends back the response. The nuts and bolts of how the entities are gotten (or created or updated or deleted) is the responsibility of the services themselves. I think this approach would lend itself well to testing. The services could be more easily stubbed out. Another thing: this approach ensure uniformity of responses.

## Resources
This tutorial was really helpful:
https://github.com/microsoftgraph/nodejs-apponlytoken-rest-sample

Graph API exporer:
https://developer.microsoft.com/en-us/graph/graph-explorer

Azure portal for managing the app
https://portal.azure.com/#dashboard/private/8ca101a3-8ddf-45cc-9d97-c30a644e000f
