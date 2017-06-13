# A brief demo of MS Graph Api

Gets a token from Azure AD v2.0 and then (attempts) to do stuff to MS Graph API v1.

## Usage
Create an [app](https://apps.dev.microsoft.com).

Put it's info in a `.env` file:

```
#.env

CLIENT_ID=<client id>
CLIENT_SECRET=<client secret>
TENANT_ID=<tenant id>
```

Start the server:

```
yarn install
yarn start
```

List events
http://localhost:8888/events

Create an event (using [httpie](https://httpie.org/))
http http://localhost:8888/events < sampleEventToCreate.json

List users
http://localhost:8888/users

List rooms
http://localhost:8888/rooms


## Resources
https://developer.microsoft.com/en-us/graph/docs/concepts/auth_v2_service
https://apps.dev.microsoft.com/#/application/

This tutorial works:
https://github.com/microsoftgraph/nodejs-apponlytoken-rest-sample

Graph API exporer:
https://developer.microsoft.com/en-us/graph/graph-explorer

https://portal.azure.com/#dashboard/private/8ca101a3-8ddf-45cc-9d97-c30a644e000f
