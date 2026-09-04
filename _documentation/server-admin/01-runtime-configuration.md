---
title: Runtime Configuration
---

The MapRoulette frontend is configured with environment variables prefixed
`VITE_`. Unlike the older `REACT_APP_*` build-time variables, these are
**runtime** settings: the build writes them into a `env.json` file that the
browser loads before the app boots, so one built image can be reconfigured per
deployment without rebuilding.

- In development, `env.json` is served from your local `.env` file.
- In a release build, `env.json` is emitted alongside the app containing the
  defaults from `.env.example`.
- In the Docker image, any `VITE_*` variables set on the container are merged
  over those defaults at start-up
  (`docker/90-write-env-to-json.sh`).

> Everything in `env.json` is downloaded by every visitor's browser. Do not put
> a secret in a `VITE_*` variable unless you are content for it to be public.

## Settings

| Variable | Purpose |
|:---------|:--------|
| `VITE_APP_NAME` | The name shown in the header and page titles |
| `VITE_APP_DESCRIPTION` | A description of this deployment |
| `VITE_APP_URL` | The public base URL of this deployment, used when building links to challenges and tasks. Falls back to the browser's own origin |
| `VITE_API_BASE_URL` | Base URL of the MapRoulette backend |
| `VITE_MAP_ROULETTE_SERVER_WEBSOCKET_URL` | The backend's WebSocket endpoint, used for live task and notification updates |
| `VITE_SERVER_API_KEY` | An API key sent with backend requests, where the deployment requires one |
| `VITE_OSM_SERVER` | Base URL of the OpenStreetMap website, used for user and changeset links. Defaults to `https://www.openstreetmap.org` |
| `VITE_OSM_API_SERVER` | Base URL of the OpenStreetMap API, used by the built-in iD editor. Defaults to `https://api.openstreetmap.org` |
| `VITE_SHORT_URL` | Base URL for the short links embedded in OSM changeset comments (e.g. `https://mpr.lt`). Short links are omitted if unset |
| `VITE_DOCS_BASE_URL` | Root URL of the documentation site the app's help links point at. Defaults to `https://learn.maproulette.org` |
| `VITE_EMAIL_ENFORCEMENT` | `required`, `encouraged` (the default) or `none`. Whether users must set an email address before performing management actions, or are merely prompted to |
| `VITE_DEPLOYMENT_PLUGIN_URLS` | Comma-separated URLs of [plugin](#plugins) bundles to load for every user at login |

### Challenge reporting

[Filing a challenge report](/documentation/challenge-flagging/) needs no
configuration. Reports are stored by the backend and triaged in-app by a super
user, so the GitHub repository and token the frontend used to require are gone.

## Plugins

Parts of MapRoulette ship as plugins — separately built JavaScript bundles that
the app loads at runtime and that render using the host app's own UI
components. Reviewing is the main example.

- `VITE_DEPLOYMENT_PLUGIN_URLS` loads plugins for every user of the deployment.
- Individual users can add a plugin themselves from **Account Settings →
  Plugins**, by pasting the URL of its bundle.
