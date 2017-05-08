# A brief demo of MS Graph Api

A quick experiment to see if the Graph API is exposing things the [microsoft-graph-client](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) JS library is not.

## Usage
Put an authorization bearer in a `.env` file. Something like:

```
#.env

BEARER_TOKEN=Bearer blah-blah-blah
```

Then run the script:

```
yarn install
yarn start
```

This calls the MS Graph API, gets all your events, and throws them in a file called `response`.

`microsoft-graph-client` does not seem to give the correct event `subject`. Let's see if the raw Graph API does better:

```
grep subject response
```
