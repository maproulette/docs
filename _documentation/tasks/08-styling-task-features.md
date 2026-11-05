---
title: Styling Task Features
---

You can change how a task's features are drawn on the map by adding
[simplestyle](https://github.com/mapbox/simplestyle-spec/blob/master/1.1.0/README.md)
properties to the features in your challenge's GeoJSON. This is useful when a
task is made of several features and mappers need to tell them apart, or when
one feature in a task needs to stand out.

## Supported properties

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

Some notes and caveats:
* colors need to be expressed as [web hex colors](https://en.wikipedia.org/wiki/Web_colors) or (slightly riskier) [common web color names](https://en.wikipedia.org/wiki/Web_colors#X11_color_names)
* opacities need to be decimal numbers between 0.0 (transparent) and 1.0 (opaque)
* marker-size must be one of `small`, `medium`, or `large` (medium is the normal size)
* fill colors can obscure OSM labels, so be careful about high fill-opacity values
* use of colors used by OSM or MapRoulette to convey special meaning could confuse your mappers


A feature that has a stroke, marker or fill color also shows a small swatch of
that color next to it in the task's **Features** tab, so mappers can match
each entry in the list to what they see on the map.

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

> Earlier versions of MapRoulette could also style features through rules set
> up in the challenge form, based on the values of task properties. Those
> style rules, and the Feature Style Legend that went with them, are not part
> of the current interface; only the simplestyle properties above are used.
{: .legacy}
