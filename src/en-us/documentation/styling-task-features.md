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

{% translate "StylingTaskFeatures.content1", page.url | getUrlLang %}

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

{% translate "StylingTaskFeatures.content2", page.url | getUrlLang %}

![](style_legend.png =500x)

{% translate "StylingTaskFeatures.content3", page.url | getUrlLang %}