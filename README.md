# MapRoulette Docs

Documentation site for MapRoulette.org based on [Eleventy Starter](https://github.com/eastslopestudio/eleventy-starter).

This site is hosted on Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/57d02f79-250b-4b4b-aabc-8a099ad22202/deploy-status)](https://app.netlify.com/sites/learn-maproulette/deploys)

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)
- [Netlify CLI](https://www.npmjs.com/package/netlify-cli) _optional_

## Running locally

```bash
# install the project dependencies
npm install

# run the build and server locally
npm run start

# run the production build
npm run build

# run netlify cms proxy server (for local CMS access)
npx netlify-cms-proxy-server
```

## Netlify Dev

```bash
# Install the Netlify CLI globally
npm install -g netlify-cli
netlify dev
```

Serverless functions are located in `src/functions`

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello

### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello
