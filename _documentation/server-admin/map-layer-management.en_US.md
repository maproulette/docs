---
title: Map Layer Management
---

MapRoulette retrieves its map layer data from the [OSM Editor Layer Index](https://github.com/osmlab/editor-layer-index) at build time and, by default, makes available all global layers marked as "default" layers in the index (including overlays). OpenCycleMap, which is not currently a default in the index, is also configured to be included for backwards compatibility.

It's possible, on a given server installation, to both choose additional layers from the OSM Editor Index and to add custom map layers that aren't present in the index. It's also possible to separately set (or override) API keys for both custom and indexed layers.

## Including Additional Layers from the OSM Editor Layer Index

To include additional layers already found in the OSM Editor Layer Index, simply add the desired layer ids to the `REACT_APP_ADDITIONAL_INDEX_LAYERS` configuration variable in the `.env` file. See the .env file for additional documentation. If any of those layers require API keys, then see below for how to specify keys.

## Adding Custom Layers

Custom layers can be added by defining them in the `src/customLayers.json` file. The contents of the file should be structured similarly to the `src/defaultLayers.json` file.

> Note that `src/defaultLayers.json` is freshly generated and overwritten during each build, so it should not be modified directly

Here's an example that adds the Mapbox Satellite Streets layer:

```json
[
  {
    "geometry": null,
    "properties": {
      "default": true,
      "description": "Mapbox Satellite Streets.",
      "i18n": true,
      "id": "MapboxSatellite",
      "max_zoom": 22,
      "name": "Mapbox Satellite Streets",
      "type": "tms",
      "url": "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}{r}?access_token={access_token}",
      "attribution": {
        "required": true,
        "text": "Terms & Feedback",
        "url": "https://www.mapbox.com/about/maps"
      }
    }
  }
]
```

## Adding API Keys for Indexed or Custom Layers

API Keys can be provided for both custom layers and layers from the OSM Editor Index by specifying them in the `REACT_APP_MAP_LAYER_API_KEYS` configuration variable in the `.env` file. You'll need to supply the layer id, the name of the substitution variable in the URL that is to be replaced with the key, and the key itself. See the .env file for additional documentation.

## Disabling Stock Layers

If you want full control over exactly which map layers are displayed, you can disable the stock layers by setting `REACT_APP_DEFAULT_MAP_LAYERS='disabled'` in your `.env` file. Then you can add exactly the layers you want (either from the editor index or custom, as discussed above).

Note that this does not affect the overlays, such as Mapillary or OpenStreetCam, which can be enabled or disabled individually (discussed below).

## Specifying a Default Map Layer

MapRoulette comes configured to use the OpenStreetMap Standard layer as the default map layer, but you can override that by setting the `REACT_APP_DEFAULT_MAP_LAYER_ID` configuration variable in the `.env` file. See the .env file for additional documentation.

## Controlling the Overlay Layers

The following overlays can be individually enabled or disabled via `.env` file configuration variables.

* OpenStreetCam imagery is enabled by default, but can be disabled by setting `REACT_APP_IMAGERY_OPENSTREETCAM='disabled'`

* Mapillary is disabled by default, but can be enabled with a Mapillary client/api key by setting `REACT_APP_MAPILLARY_API_KEY='your-client-key'`

* The OSM Data layer is enabled by default, but can be disabled by setting `REACT_APP_OSM_DATA_OVERLAY='disabled'`

