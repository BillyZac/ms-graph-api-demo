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

List rooms
http://localhost:8888/rooms


## Resources
This tutorial was really helpful:
https://github.com/microsoftgraph/nodejs-apponlytoken-rest-sample

Graph API exporer:
https://developer.microsoft.com/en-us/graph/graph-explorer

Azure portal for managing the app
https://portal.azure.com/#dashboard/private/8ca101a3-8ddf-45cc-9d97-c30a644e000f
