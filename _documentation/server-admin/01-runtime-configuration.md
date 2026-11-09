---
title: Runtime Configuration
---

The MapRoulette frontend is configured with `VITE_*` environment variables. They are read at runtime from an `env.json` file the browser loads before the app starts, so one built image can be reconfigured per deployment without rebuilding. In the Docker image, any `VITE_*` variables set on the container override the defaults from `.env.example` at start-up.

> Everything in `env.json` is downloaded by every visitor's browser, so don't put secrets in these variables.

| Variable | Purpose |
|:---------|:--------|
| `VITE_APP_NAME` | The name shown in the header and page titles |
| `VITE_APP_DESCRIPTION` | Used as the page's `description` meta tag |
| `VITE_API_BASE_URL` | Base URL of the MapRoulette backend. The WebSocket connects to `/ws` on the same host |
| `VITE_SERVER_API_KEY` | An API key sent with every backend request, if your deployment requires one |
| `VITE_OSM_SERVER` | Base URL of the OpenStreetMap website, used for links to OSM elements and profiles. Defaults to `https://www.openstreetmap.org` |
| `VITE_OSM_API_SERVER` | Base URL of the OpenStreetMap API. Defaults to `https://api.openstreetmap.org` |
| `VITE_NOMINATIM_BASE_URL` | Nominatim service used for location search. Defaults to `https://nominatim.openstreetmap.org` |
| `VITE_ID_EDITOR_SERVER_URL` | Where the external iD editor is opened. Defaults to `https://www.openstreetmap.org/edit` |
| `VITE_RAPID_EDITOR_SERVER_URL` | Where the Rapid editor is opened. Defaults to `https://rapideditor.org/edit` |
| `VITE_LEVEL0_EDITOR_SERVER_URL` | Where the Level0 editor is opened. Defaults to `https://level0.osmz.ru/index.php` |
| `VITE_SHORT_URL` | Base URL for short links in OSM changeset comments (e.g. `https://mpr.lt`). Short links are left out if unset |
| `VITE_DOCS_BASE_URL` | Root URL of the documentation site the app links to. Defaults to `https://learn.maproulette.org` |
| `VITE_DEPLOYMENT_PLUGIN_URLS` | Comma-separated URLs of plugin bundles to load for every user |

## Plugins

Plugins are separately built JavaScript bundles that MapRoulette loads at runtime. None ship with the frontend. Use `VITE_DEPLOYMENT_PLUGIN_URLS` to load plugins for everyone on your deployment. Individual users can also add a plugin from **Account Settings → Plugins** by pasting the URL of its bundle.
