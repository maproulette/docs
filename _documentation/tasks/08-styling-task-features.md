---
title: Styling Task Features
---

| Property         | Description                     | Supported Geometries
|:-----------------|:--------------------------------|:-----------------------------------
| stroke           | Outline color                   | LineStrings, Polygons
| stroke-width     | Thickness of outline            | LineStrings, Polygons
| stroke-opacity   | Translucency of outline         | LineStrings, Polygons
| fill             | Fill color (inside the outline) | Polygons
| fill-opacity     | Translucency of the fill        | Polygons
| marker-color     | Map marker color                | Points
| marker-size      | Map marker size                 | Points

Some notes and caveats:
* colors need to be expressed as [web hex colors](https://en.wikipedia.org/wiki/Web_colors) or (slightly riskier) [common web color names](https://en.wikipedia.org/wiki/Web_colors#X11_color_names)
* opacities need to be decimal numbers between 0.0 (transparent) and 1.0 (opaque)
* marker-size must be one of `small`, `medium`, or `large` (medium is the normal size)
* fill colors can obscure OSM labels, so be careful about high fill-opacity values
* use of colors used by OSM or MapRoulette to convey special meaning could confuse your mappers


### Example

The following set of properties results in a Way being rendered with a purple stroke (outline) and 50%-opaque fuschia fill, as shown below:


```json
"properties": {
  "@id": "way/258145134",
  "amenity": "community_centre",
  "building": "yes",
  "stroke": "#800080",
  "fill": "#FF00FF",
  "fill-opacity": "0.5"
}
```

