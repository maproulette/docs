---
title: Moving from MapRoulette 3 to MapRoulette 4
---

MapRoulette 4 is a rebuilt frontend. Your account, projects, challenges and
tasks are unchanged — the server behind both versions is the same one, so
nothing you have created needs migrating. What changed is the interface, and a
number of features that have not been rebuilt yet.

This page lists only what actually differs. Anything you did in MapRoulette 3
that isn't mentioned here works the same way, so if a feature you rely on is
absent from these tables, there is nothing to learn about it.

Where a feature is listed as gone, the [HTTP
API](https://maproulette.org/docs/swagger-ui/index.html?url=/assets/swagger.json&docExpansion=none)
usually still exposes it, because the data model did not change.

## For mappers

| What you did in MR3 | Where it stands in MR4 |
|:--------------------|:-----------------------|
| Picked any imagery from the OSM editor layer index | The base layers are now a fixed set bundled with the frontend. See [Setting your Map Base Layer](/documentation/setting-your-map-base-layer/). |
| Turned on Mapillary, KartaView or OSM data overlays | Not part of the task map. Turn them on inside the iD editor instead, which carries its own photo and OSM data overlays. See [Editing inside MapRoulette](/documentation/rapid-editor/). |
| Edited with the embedded **Rapid** editor | Rapid is now an external editor. The embedded editor is iD. See [Editing inside MapRoulette](/documentation/rapid-editor/). |
| Saved, named, imported or exported widget layouts | Not available, and layouts exported from MR3 cannot be imported. See [Using Layouts](/documentation/using-layouts/). |
| Worked Tag Fix challenges | The editor opens automatically with the proposed tags applied, for you to review and save as your own edit, rather than approved with a Yes/No panel. See [Tag Fix Challenges](/documentation/tag-fix-challenges/). |
| Added MapRoulette Tags (MR Tags) when completing a task | Not available. |
| Followed other users, or set **Allow Following** | Not available. |
| Reviewed tasks | Not part of the frontend. It can only be added by loading a separately built review plugin. See [Runtime Configuration](/documentation/runtime-configuration/#plugins). |
| Browsed the challenge, project or global leaderboards | Not available. A link to a challenge's or project's leaderboard opens that challenge or project instead. |
| Reported a challenge | The report goes to the MapRoulette administrators inside the app. Older MR3 deployments opened a public issue in a GitHub repository instead. See [Filing a Challenge Report](/documentation/challenge-flagging/). |
| Typed `m/`, `n/` or `p/` in the search box | `p/` is now `p:`; the Nominatim search became the location filter on [Explore Challenges](/documentation/discovering-challenges/); there is no bounding-box command. See [Searchbox Short Commands](/documentation/searchbox-short-commands/). |

## For challenge managers

| What you did in MR3 | Where it stands in MR4 |
|:--------------------|:-----------------------|
| Styled task features by property | Not available. Styling features with simplestyle properties in the task GeoJSON still works — see [Styling Task Features](/documentation/styling-task-features/). |
| Set preferred or restricted MR Tags on a challenge | Not available. |
| Created cooperative challenges | There is no form option for them, as before: tasks get their cooperative work from a `cooperativeWork` object in [line-by-line GeoJSON](/documentation/line-by-line-geojson/), which is still read when you upload it. Tag Fix tasks work; change-file (`.osc`) cooperative tasks are not loaded into the editor. |
| Created virtual challenges, or virtual projects | Not surfaced in the frontend. Both still exist in the API. |

## For server administrators

The biggest change is how the frontend is configured.

- Settings are now **runtime**, not build-time. They are prefixed `VITE_`
  rather than `REACT_APP_`, and are written into an `env.json` that the browser
  loads before the app boots — so one built image can be reconfigured per
  deployment without rebuilding. See [Runtime
  Configuration](/documentation/runtime-configuration/).
- Base layers are no longer pulled from the editor layer index at build time.
  `REACT_APP_ADDITIONAL_INDEX_LAYERS`, `REACT_APP_DEFAULT_MAP_LAYERS`,
  `REACT_APP_DEFAULT_MAP_LAYER_ID` and `REACT_APP_MAP_LAYER_API_KEYS` are gone,
  as are `src/customLayers.json` and the generated `src/defaultLayers.json`.
  See [Map Layer Management](/documentation/map-layer-management/).
- The imagery overlay settings — `REACT_APP_IMAGERY_OPENSTREETCAM`,
  `REACT_APP_MAPILLARY_CLIENT_TOKEN` and `REACT_APP_OSM_DATA_OVERLAY` — are
  gone with the overlays themselves.
- `REACT_APP_MAP_ROULETTE_SERVER_WEBSOCKET_URL` has no equivalent. The
  WebSocket address is derived from `VITE_API_BASE_URL`.
- `REACT_APP_EMAIL_ENFORCEMENT` has no equivalent.
- Older MR3 deployments needed `REACT_APP_GITHUB_ISSUES_API_OWNER`,
  `REACT_APP_GITHUB_ISSUES_API_REPO` and `REACT_APP_GITHUB_ISSUES_API_TOKEN` to
  file challenge reports as GitHub issues. MR4 never uses them: reports are
  stored by the backend and triaged by a super user. See [Filing a Challenge
  Report](/documentation/challenge-flagging/).

## Reading the rest of these docs

Pages that describe something MapRoulette 3 did but MapRoulette 4 does not
carry a highlighted note saying so, so you can tell at a glance whether what
you are reading applies today. Every page otherwise describes the current
frontend.
