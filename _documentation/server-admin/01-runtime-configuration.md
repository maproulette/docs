---
title: Runtime Configuration
---

The MapRoulette frontend is configured with environment variables prefixed
`VITE_`. Unlike the older `REACT_APP_*` build-time variables, these are
**runtime** settings: the build writes them into a `env.json` file that the
browser loads before the app boots, so one built image can be reconfigured per
deployment without rebuilding.

- In development, `env.json` is served from your local `.env` files, except
  that `VITE_API_BASE_URL` is pointed at the dev server itself, which proxies
  `/api`, `/auth` and `/ws` on to the backend you configured.
- In a release build, `env.json` is emitted alongside the app containing the
  `VITE_*` values from the local `.env` files at build time. On a fresh
  checkout these are the defaults from `.env.example`, because installing
  dependencies copies `.env.example` to `.env` when there is no `.env` yet.
  The Docker build never sees a local `.env`, so the image always starts from
  `.env.example`'s defaults.
- In the Docker image, any `VITE_*` variables set on the container are merged
  over those defaults at start-up
  (`docker/90-write-env-to-json.sh`).

> Everything in `env.json` is downloaded by every visitor's browser. Do not put
> a secret in a `VITE_*` variable unless you are content for it to be public.

## Settings

| Variable | Purpose |
|:---------|:--------|
| `VITE_APP_NAME` | The name shown in the header and page titles |
| `VITE_APP_DESCRIPTION` | A description of this deployment, used as the page's `description` meta tag |
| `VITE_API_BASE_URL` | Base URL of the MapRoulette backend. The live task and notification updates connect to the WebSocket at `/ws` on the same host. Defaults to `http://127.0.0.1:9000` |
| `VITE_SERVER_API_KEY` | An API key sent in the `apiKey` header of every backend request, where the deployment requires one |
| `VITE_OSM_SERVER` | Base URL of the OpenStreetMap website, used for links to OSM elements, map locations and area history, and for the OSM profile links that `@mentions` in comments become. Other links to users' OSM profiles always point at `https://www.openstreetmap.org`. Defaults to `https://www.openstreetmap.org` |
| `VITE_OSM_API_SERVER` | Base URL of the OpenStreetMap API, used to fetch OSM element data, history, changesets and user details. The built-in iD editor always saves to `https://api.openstreetmap.org`, and is only handed the mapper's OSM login while this is left at that default. Defaults to `https://api.openstreetmap.org` |
| `VITE_NOMINATIM_BASE_URL` | Base URL of the Nominatim service used for location search and place names. Defaults to `https://nominatim.openstreetmap.org` |
| `VITE_ID_EDITOR_SERVER_URL` | Where the external iD editor is opened. Defaults to `https://www.openstreetmap.org/edit` |
| `VITE_RAPID_EDITOR_SERVER_URL` | Where the Rapid editor is opened. Defaults to `https://rapideditor.org/edit` |
| `VITE_LEVEL0_EDITOR_SERVER_URL` | Where the level0 editor is opened. Defaults to `https://level0.osmz.ru/index.php` |
| `VITE_SHORT_URL` | Base URL for the short links embedded in OSM changeset comments (e.g. `https://mpr.lt`). Short links are omitted if unset |
| `VITE_DOCS_BASE_URL` | Root URL of the documentation site the app's help links point at. Defaults to `https://learn.maproulette.org` |
| `VITE_DEPLOYMENT_PLUGIN_URLS` | Comma-separated URLs of [plugin](#plugins) bundles to load for every user at login |

### Challenge reporting

[Filing a challenge report](/documentation/challenge-flagging/) needs no
configuration. Reports are stored by the backend and triaged in-app by a super
user, so the GitHub repository and token the frontend used to require are gone.

## Plugins

Parts of MapRoulette ship as plugins — separately built JavaScript bundles that
the app loads at runtime and that render using the host app's own UI
components. No plugins ship with the frontend itself. The commented-out
example in `.env.example` points at a task-review plugin, but reviewing is not
part of MapRoulette 4 unless a deployment loads such a plugin.

- `VITE_DEPLOYMENT_PLUGIN_URLS` loads plugins for every user of the deployment.
- Individual users can add a plugin themselves from **Account Settings →
  Plugins**, by pasting the URL of its bundle.
