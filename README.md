# A brief demo of MS Graph Api

## Usage
Create an [app](https://apps.dev.microsoft.com).

Put it's info in a `.env` file:

```
#.env

CLIENT_ID=<client id>
CLIENT_SECRET=<client secret>

```

Then run the script:

```
yarn install
yarn start
```

This hits the [MS Graph API](https://developer.microsoft.com/en-us/graph/graph-explorer) and gets some resources and dumps the response into a file called `response`.

## Resources
https://developer.microsoft.com/en-us/graph/docs/concepts/auth_v2_service
https://apps.dev.microsoft.com/#/application/
