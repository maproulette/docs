---
title: Map Layer Management
---

MapRoulette's maps are rendered with [MapLibre GL](https://maplibre.org/), and
the base layers on offer are a fixed set of MapLibre style documents bundled
with the frontend:

| Style | Source |
|:------|:-------|
| OSM Bright | OpenStreetMap vector tiles |
| OSM Carto | OpenStreetMap standard raster tiles |
| Bing Aerial | Bing Maps aerial imagery |
| Esri World Imagery | Esri World Imagery |
| Esri World Imagery (Clarity) | Esri World Imagery (Clarity) |

Mappers switch between them with the **Map style** control on any map; the
choice is remembered in their browser. They can also add their own XYZ or WMS
layer from that control. Like the choice of style, a layer added this way is
saved in that browser only, not on their account, so it does not follow them
to another browser or device. See [Setting your Map Base
Layer](/documentation/setting-your-map-base-layer/).

## Changing the available layers

The layer list is compiled into the frontend rather than configured at
deployment time. Each style lives as a JSON document in the frontend source
(`src/components/Map/`) and is registered in `src/components/Map/mapStyles.ts`:

```ts
export const bundledMapStyles: StyleSpecification[] = [
  asStyle(OsmBright),
  asStyle(OsmCarto),
  asStyle(BingAerial),
  asStyle(EsriWorldImagery),
  asStyle(EsriWorldImageryClarity),
]
```

To add, remove or reorder layers on your own installation, add a
[MapLibre style document](https://maplibre.org/maplibre-style-spec/) to that
directory, import it in `mapStyles.ts`, and rebuild. Any custom layers a
mapper has added are listed after these. A raster style needs no `glyphs` URL
of its own — MapRoulette supplies one so that task and cluster markers can be
labelled.

A map opens on the challenge's basemap if it has one, otherwise on the
mapper's default basemap from their settings, otherwise on the style they last
picked with the control. Only when none of those applies does it fall back to
the first entry in the array.

The `name` in each style document is what mappers see in the control and the
key their choice is stored under, so renaming a style resets everyone's saved
selection. A challenge's basemap is stored as the name of the style it chose,
and a mapper's account default is matched to `OSM Carto`, `Bing Aerial`, `Esri
World Imagery` or `Esri World Imagery (Clarity)` by name, so renaming or
removing a style also stops the challenges and users that chose it from getting
it. Either one can instead give a custom tile URL, which is drawn as a raster
layer of its own and does not depend on the bundled list.

> Note: layers are no longer pulled from the OSM [editor layer
> index](https://github.com/osmlab/editor-layer-index) at build time, and the
> `REACT_APP_ADDITIONAL_INDEX_LAYERS`, `REACT_APP_DEFAULT_MAP_LAYERS`,
> `REACT_APP_DEFAULT_MAP_LAYER_ID` and `REACT_APP_MAP_LAYER_API_KEYS` settings
> no longer exist. Neither does `src/customLayers.json` or the generated
> `src/defaultLayers.json`. If a style needs an API key, put it in the style
> document's tile URL.
{: .legacy}

## Overlays

> The Mapillary, OpenStreetCam/KartaView and OSM data overlays — and the
> `REACT_APP_IMAGERY_OPENSTREETCAM`, `REACT_APP_MAPILLARY_CLIENT_TOKEN` and
> `REACT_APP_OSM_DATA_OVERLAY` settings that controlled them — are not part of
> the current frontend, so there is nothing to configure. Mappers reach these
> overlays through the iD editor's own layer panel instead. See [Editing inside
> MapRoulette](/documentation/rapid-editor/).
{: .legacy}

See also [Runtime Configuration](/documentation/runtime-configuration/)
for the settings that *are* configurable per deployment.
