---
title: Moving from MapRoulette 3 to MapRoulette 4
---

MapRoulette 4 is a rebuilt frontend. Your account, projects, challenges and
tasks are unchanged — the server behind both versions is the same one, so
nothing you have created needs migrating. What changed is the interface, and a
number of features that have not been rebuilt yet.

This page is a checklist of what to expect. If a feature you rely on is listed
as gone, the [HTTP
API](https://maproulette.org/docs/swagger-ui/index.html?url=/assets/swagger.json&docExpansion=none)
usually still exposes it, because the data model did not change.

## For mappers

| What you did in MR3 | Where it stands in MR4 |
|:--------------------|:-----------------------|
| Picked any imagery from the OSM editor layer index | The base layers are now a fixed set bundled with the frontend. See [Setting your Map Base Layer](/documentation/setting-your-map-base-layer/). |
| Added your own XYZ or WMS layer from inside the map | Available again, from the **Map style** control. Layers are stored in your browser rather than on the server. See [Setting your Map Base Layer](/documentation/setting-your-map-base-layer/). |
| Turned on Mapillary, KartaView or OSM data overlays | Not available. |
| Edited with the embedded **Rapid** editor | Rapid is now an external editor. The embedded editor is iD. See [Rapid Editor](/documentation/rapid-editor/). |
| Saved, named, imported or exported widget layouts | Not available, and layouts exported from MR3 cannot be imported. See [Using Layouts](/documentation/using-layouts/). |
| Followed other mappers | Available again, from a mapper's profile. The combined activity timeline of everyone you follow is still missing. See [Following](/documentation/following/). |
| Worked Tag Fix / cooperative challenges | The challenge page still badges them, but the proposed tag change is not presented for approval and tasks complete like ordinary ones. See [Tag Fix Challenges](/documentation/tag-fix-challenges/). |
| Reviewed tasks | Not available. |
| Typed `m/`, `n/` or `p/` in the search box | `p/` is now `p:`; the Nominatim search became the location filter on [Explore Challenges](/documentation/discovering-challenges/); there is no bounding-box command. See [Searchbox Short Commands](/documentation/searchbox-short-commands/). |
| Wrote `[@example user]` to mention a name with spaces | Works again. See [Comment Short Codes](/documentation/comment-short-codes/). |
| Set per-notification email preferences | Available again, on their own **Subscriptions** tab in account settings. See [Notifications and Email](/documentation/notifications-and-email/). |

## For challenge managers

| What you did in MR3 | Where it stands in MR4 |
|:--------------------|:-----------------------|
| Set a challenge basemap | Available again, over the bundled base layers or a custom XYZ template. See [Setting The Basemap Layer For Your Challenge](/documentation/setting-basemap-for-challenge/). |
| Filtered the task table by feature property | Available again, with an AND/OR rule builder. See [filtering tasks by properties](/documentation/filtering-the-task-list-by-properties/). |
| Embedded form fields in challenge instructions | Available again. See [Templating in Challenge Instructions](/documentation/challenge-instructions-templating/). |
| Styled task features by property | Not available. |
| Created cooperative (including Tag Fix) challenges | Not available. |
| Created virtual challenges, or virtual projects | Not surfaced in the frontend. Both still exist in the API. |
| Added or removed project managers, or gave a team a project role | Available again, from the project's page. See [Projects and Project Managers](/documentation/projects-and-project-managers/). |
| Set Preferred MR Tags, or restricted tags to that list | Available again, in the challenge form's **Task settings**. See [Using MapRoulette Tags](/documentation/using-maproulette-tags/). |
| Named the OSM/External Id property explicitly | Available again, in the challenge form's **Task settings**. Leave it blank for automatic detection. See [Setting External Task Identifiers](/documentation/setting-external-task-identifiers/). |
| Used `#`-prefixed workspace mustache tags, e.g. {% raw %}`{{#mapZoom}}`{% endraw %} | Substituted again in challenge instructions. See [Mustache Tag Replacement](/documentation/mustache-tag-replacement/). |
| Attached reference layers to tasks | Reference layers are handed to JOSM again when you open a task in it. See [Task Attachments](/documentation/task-attachments/). |
| Exported a single challenge, exported GeoJSON, or chose an export timezone | All available again, from the **Export** control on a challenge's task table. See [Exporting Challenge Data](/documentation/exporting-challenge-data/). |

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
  `REACT_APP_MAPILLARY_API_KEY` and `REACT_APP_OSM_DATA_OVERLAY` — are gone
  with the overlays themselves.
- `REACT_APP_SYSTEM_NOTICES_URL` is gone. System notices are now served by the
  backend, which is where the URL of the notices file is configured. See
  [System-Notice Management](/documentation/system-notice-management/).
- Parts of MapRoulette now ship as plugins, loaded at runtime from a URL.
  Reviewing is the main example. `VITE_DEPLOYMENT_PLUGIN_URLS` loads them for
  every user of a deployment.

## Reading the rest of these docs

Pages that describe something MapRoulette 3 did but MapRoulette 4 does not
carry a highlighted note saying so, so you can tell at a glance whether what
you are reading applies today. Features that are documented only for reference
— because nothing in the current frontend uses them — are collected under
**Not Implemented Yet** at the bottom of the sidebar.
