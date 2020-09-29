---
layout: base
title: Styling Task Features
description: 'MapRoulette supports custom styling of task features through either embedded GeoJSON SimpleStyle properties or by setting up styling rules on your challenge'
tags: documentation
eleventyNavigation:
  key: Styling Task Features
  parent: Creating and Managing Challenges
  order: 3.5
---
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


![](simplestyled_way.png =500x)


## Customizing task styling during challenge setup

On the "Configure property-based behavior" step when creating/editing a challenge, you can choose to customize task property styles. 

![](configure_custom_styles.png =544x)

You'll be presented with the ability to specify one or more task styles that should be applied when a property filter/search matches on a task. In the screenshot below, roads with more than 2 lanes are being setup to be rendered as thick purple lines. You can setup multiple filters with their own styles to capture various scenarios. 

![](custom_task_styling.png =1024x)

Note that if a task matches multiple filters -- or if the task also contains simplestyle GeoJSON properties (see above) -- all of the matching styles will be merged and applied.

When working on a challenge that has custom styles applied, it may be useful to add the new Feature Style Legend widget to your workspace to serve as a basic reminder of what the custom styles indicate.

![](style_legend.png =500x)


## Video

HOT has produced [a video](https://www.youtube.com/watch?v=gj8MRgiIV-I&t=1s) that goes into styling features in MapRoulette. Check it out!
