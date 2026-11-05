---
title: Styling Task Features
---

You can change how a task's features are drawn on the map by adding
[simplestyle](https://github.com/mapbox/simplestyle-spec/blob/master/1.1.0/README.md)
properties to the features in your challenge's GeoJSON. This is useful when a
task is made of several features and mappers need to tell them apart, or when
one feature in a task needs to stand out.

## Supported properties

| Property         | Description                     | Supported geometries  |
|:-----------------|:--------------------------------|:----------------------|
| `stroke`         | Outline color                   | LineStrings, Polygons |
| `stroke-width`   | Thickness of the outline        | LineStrings, Polygons |
| `stroke-opacity` | Translucency of the outline     | LineStrings, Polygons |
| `fill`           | Fill color inside the outline   | Polygons              |
| `fill-opacity`   | Translucency of the fill        | Polygons              |
| `marker-color`   | Color of the point marker       | Points                |

Some notes and caveats:

- Colors can be [web hex colors](https://en.wikipedia.org/wiki/Web_colors)
  such as `#800080`, `rgb()`/`hsl()` values, or
  [color names](https://en.wikipedia.org/wiki/Web_colors#X11_color_names).
  A value that isn't a valid color is ignored.
- Opacities are decimal numbers from `0` (transparent) to `1` (opaque).
- `stroke-width` must be between `0.5` and `40`; values outside that range are
  ignored.
- A point without a `marker-color` uses its `stroke` color instead.
- `marker-size` is not supported; markers are always drawn at the same size.
- Fill colors can hide the map underneath, so keep `fill-opacity` low.
- Colors MapRoulette already uses to mean something, such as task status
  colors, may confuse your mappers.

A feature that has a stroke, marker or fill color also shows a small swatch of
that color next to it in the task's **Features** tab, so mappers can match
each entry in the list to what they see on the map.

## Example

These properties draw a way with a purple outline and a half-transparent
fuchsia fill:

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
