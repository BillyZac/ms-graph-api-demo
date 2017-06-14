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

## Cache money
This badboy comes with a very simple cache. When caching mode is on, the Events service will get meetings from a local json file instead of making a request to the MS Graph API, which greatly speeds up the response time.

The `GET events` service is the only thing that uses a cache.

Where does the app switch between using the cache versus the actual Graph API? The switching happens in `services/events/getEvents/index.js`. Not sure if this is the best place to put this switch, but there you go.

Where does the data in this file come from? Glad you asked. A cache refresh script makes the request to the Graph API and writes the response into the file. (See `cache/`.)

The REST layer is unaware of the cache. It simply makes a request to a service, and handles whatever comes back.

The `cache/datastore/timestamp` tells you when the cache was last refreshed.

So, now you're thinking, how can I get me some cache? Put this in the `.env` file:

```
USE_CACHE=true
```

Run the cache refresh script:

```
yarn run cache
```


## Questions & Todos
I am using a `handleResponse` utility in the `users` route. Probably should use this for all routes, but need to redo the services first.

For instance, there are gross token service calls and field mappings happening all over the rest layer. Yuk.

The REST layer should simply receive requests, hand them off to a service, and then send back the response. The nuts and bolts of how the entities are gotten (or created or updated or deleted) is the responsibility of the services themselves. I think this approach would lend itself well to testing. The services could be more easily stubbed out. Also, this approach ensures uniformity of responses.

Need to pull the token operation out of the server routes. This should happen inside the services. Then `handleResponse` doesn't have to know about tokens. And the token service should be a singleton, probably.

See the `GET events` route for an example of where I want to go.


## Resources
This tutorial was really helpful:
https://github.com/microsoftgraph/nodejs-apponlytoken-rest-sample

Graph API exporer:
https://developer.microsoft.com/en-us/graph/graph-explorer

Azure portal for managing the app
https://portal.azure.com/#dashboard/private/8ca101a3-8ddf-45cc-9d97-c30a644e000f
