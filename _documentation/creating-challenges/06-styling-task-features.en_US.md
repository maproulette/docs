---
title: Styling Task Features
---

> Custom task-feature styling is not applied by the current MapRoulette
> frontend. Task geometries are drawn in MapRoulette's own colours, simplestyle
> properties in your GeoJSON are ignored, there is no style-rule editor on the
> challenge form, and the Feature Style Legend is not shown. This page
> documents the data format, which challenges still carry, for when styling
> returns.
{: .legacy}

MapRoulette offers two different approaches to styling tasks:

1. A subset of the [simplestyle](https://github.com/mapbox/simplestyle-spec/blob/master/1.1.0/README.md) specification can be used to customize the appearance of features within a Task by including special feature properties in your task's GeoJSON

2. Styling rules can be setup in your challenge that style task features based on the values of task properties, such as OSM tags

## Styling tasks directly with GeoJSON properties

To style tasks via GeoJSON, simply include the simplestyle properties directly on your feature. This provides you with complete flexibility in determining which tasks are to be styled, and how.

The following simplestyle properties can be used on task features:

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

![](/media/simplestyled_way.png){:width="500"}


## Customizing task styling during challenge setup

Challenges could also carry styling rules of their own, set up on the
"Configure property-based behavior" step when creating or editing a challenge. 

![](/media/configure_custom_styles.png){:width="544"}


You'll be presented with the ability to specify one or more task styles that should be applied when a property filter/search matches on a task. In the screenshot below, roads with more than 2 lanes are being setup to be rendered as thick purple lines. You can setup multiple filters with their own styles to capture various scenarios. 

![](/media/custom_task_styling.png){:width="1024"}


Note that if a task matches multiple filters -- or if the task also contains simplestyle GeoJSON properties (see above) -- all of the matching styles will be merged and applied.

A Feature Style Legend was available alongside the map as a reminder of what the custom styles indicate.

![](/media/style_legend.png){:width="500"}


## Video

HOT has produced [a video](https://youtu.be/gj8MRgiIV-I?t=849) that goes into styling features in MapRoulette. Check it out!

