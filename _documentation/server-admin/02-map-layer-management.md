---
title: Map Layer Management
---

MapRoulette's maps are rendered with [MapLibre GL](https://maplibre.org/), and the base layers on offer are a fixed set of MapLibre style documents bundled with the frontend:

- OSM Bright
- OSM Carto
- Bing Aerial
- Esri World Imagery
- Esri World Imagery (Clarity)

Mappers can also add their own XYZ or WMS layers from the map's style control. See [Setting your Map Base Layer](/documentation/setting-your-map-base-layer/).

It's possible, on a given server installation, to both remove bundled layers and to add custom map layers.

It's also possible to set API keys for custom layers.

## Adding Custom Layers

Custom layers can be added by defining them in a [MapLibre style document](https://maplibre.org/maplibre-style-spec/) in `src/components/Map/`. The contents of the file should be structured similarly to the existing style documents in that directory. Tile URLs for many imagery sources can be found in the [OSM Editor Layer Index](https://github.com/osmlab/editor-layer-index).

Then import it in `src/components/Map/mapStyles.ts`, add it to the `bundledMapStyles` array, and rebuild:

```ts
export const bundledMapStyles: StyleSpecification[] = [
  asStyle(OsmBright),
  asStyle(OsmCarto),
  asStyle(BingAerial),
  asStyle(EsriWorldImagery),
  asStyle(EsriWorldImageryClarity),
]
```

> The `name` in each style document is how users' and challenges' basemap choices are stored, so renaming or removing a style resets the choice for anyone who picked it.

## Adding API Keys for Custom Layers

API Keys can be provided for custom layers by putting them in the tile URL in the layer's style document.

## Disabling Stock Layers

If you want full control over exactly which map layers are displayed, you can remove stock layers from the `bundledMapStyles` array. Then you can add exactly the layers you want, as discussed above.

## Specifying a Default Map Layer

MapRoulette comes configured to use the OSM Bright layer as the default map layer, but you can override that by moving a different style to the top of the `bundledMapStyles` array.

