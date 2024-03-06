---
layout: base
title: Map Layer Management
tags: documentation
eleventyNavigation:
  key: Map Layer Management
  parent: Server Administration
  order: 0
---

{% translate "MapLayerManagement.content1", page.url | getUrlLang %}

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

{% translate "MapLayerManagement.content2", page.url | getUrlLang %}
