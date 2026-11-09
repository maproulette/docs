---
title: Moving from MapRoulette 3 to MapRoulette 4
---

MapRoulette 4 is a new frontend on the same server, so your account, projects, challenges and tasks carry over unchanged. Anything not listed here works the same way as before.

## For mappers

| In MR3 | In MR4 |
|:-------|:-------|
| Imagery from the OSM editor layer index | A fixed set of base layers, plus your own XYZ or WMS layers. See [Setting your Map Base Layer](/documentation/setting-your-map-base-layer/) |
| Mapillary, KartaView and OSM data overlays | Not on the task map. Use the overlays in the iD editor instead |
| Embedded Rapid editor | The embedded editor is iD. Rapid opens externally. See [Editing inside MapRoulette](/documentation/id-editor/) |
| Saving, importing and exporting widget layouts | Not available |
| Tag Fix tasks approved with a Yes/No panel | The suggested tags are applied in iD for you to review and save. See [Editing inside MapRoulette](/documentation/id-editor/) |
| MapRoulette Tags | Not available |
| Following other users | Not available |
| Reviewing tasks | Only available if your deployment loads a review plugin |
| Leaderboards | Not available |
| `m/`, `n/` and `p/` search commands | `p/` is now `p:`. `n/` place search moved to [Explore Challenges](/documentation/discovering-challenges/). `m/` coordinate jumps are gone. See [Searchbox Short Commands](/documentation/searchbox-short-commands/) |

## For challenge managers

| In MR3 | In MR4 |
|:-------|:-------|
| Styling task features by property | Not available. Simplestyle properties in the GeoJSON still work. See [Styling Task Features](/documentation/styling-task-features/) |
| Preferred and restricted MR Tags | Not available |
| Change-file (`.osc`) cooperative tasks | Not loaded into the editor. Tag Fix tasks still work |
| Virtual challenges and virtual projects | Not available in the app, but still in the API |

## For server administrators

- Settings are renamed from `REACT_APP_*` to `VITE_*`, for example `REACT_APP_MAP_ROULETTE_SERVER_URL` is now `VITE_API_BASE_URL` and `REACT_APP_TITLE` is now `VITE_APP_NAME`. See [Runtime Configuration](/documentation/runtime-configuration/).
- Base layers are bundled with the frontend instead of coming from the editor layer index. `REACT_APP_ADDITIONAL_INDEX_LAYERS`, `REACT_APP_DEFAULT_MAP_LAYERS`, `REACT_APP_DEFAULT_MAP_LAYER_ID`, `REACT_APP_MAP_LAYER_API_KEYS` and `src/customLayers.json` are gone. See [Map Layer Management](/documentation/map-layer-management/).
- `REACT_APP_IMAGERY_OPENSTREETCAM`, `REACT_APP_MAPILLARY_CLIENT_TOKEN` and `REACT_APP_OSM_DATA_OVERLAY` are gone along with the overlays.
- `REACT_APP_MAP_ROULETTE_SERVER_WEBSOCKET_URL` is gone. The WebSocket address comes from `VITE_API_BASE_URL`.
- `REACT_APP_EMAIL_ENFORCEMENT` is gone, so challenge owners are no longer required to give an email address.
