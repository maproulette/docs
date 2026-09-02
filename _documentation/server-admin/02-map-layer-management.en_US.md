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
choice is remembered in their browser. See [Setting your Map Base
Layer](/en-US/documentation/setting-your-map-base-layer/).

## Changing the available layers

The layer list is compiled into the frontend rather than configured at
deployment time. Each style lives as a JSON document in the frontend source
(`src/components/Map/`) and is registered in `src/components/Map/mapStyles.ts`:

```ts
export const mapStyles: StyleSpecification[] = [
  asStyle(OsmBright),
  asStyle(OsmCarto),
  asStyle(BingAerial),
  asStyle(EsriWorldImagery),
  asStyle(EsriWorldImageryClarity),
]
```

To add, remove or reorder layers on your own installation, add a
[MapLibre style document](https://maplibre.org/maplibre-style-spec/) to that
directory, import it in `mapStyles.ts`, and rebuild. The first entry in the
array is the default. A raster style needs no `glyphs` URL of its own —
MapRoulette supplies one so that task and cluster markers can be labelled.

The `name` in each style document is both what mappers see in the control and
the key the choice is stored under, so renaming a style resets everyone's
saved selection.

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
> `REACT_APP_IMAGERY_OPENSTREETCAM`, `REACT_APP_MAPILLARY_API_KEY` and
> `REACT_APP_OSM_DATA_OVERLAY` settings that controlled them — are not part of
> the current frontend, so there is nothing to configure.
{: .legacy}

See also [Runtime Configuration](/en-US/documentation/runtime-configuration/)
for the settings that *are* configurable per deployment.
