---
layout: base
title: Cooperative Challenges
description: "Cooperative Challenges allow in-progress (uncommitted) mapping work to be packaged with tasks so that mappers don't have to do all the work themselves from scratch. When a mapper chooses to edit the task in MapRoulette, the in-progress work will automatically be loaded into the mapper's editor so that they can verify and complete the work as needed."
tags: documentation
eleventyNavigation:
  key: Creating Cooperative Challenges
  parent: Creating and Managing Challenges
  order: 7
---

{% translate "CreatingCooperativeChallanges.content1", page.url | getUrlLang %}

```javascript
{
  "type": "FeatureCollection",
  "features": [ ... ],            // omitted for readability
  "cooperativeWork": {            // special `cooperativeWork` property
    "meta": {
      "version": 2,               // must be format version `2`
      "type": 2                   // `2` for change file type
    },
    "file": {                     // represents the change file with in-progress work
      "type": "xml",              // only `xml` is currently supported
      "format": "osc",            // only `osc` is currently supported
      "encoding": "base64",       // only `base64` is currently supported
      "content": "..."            // the base64-encoded osc file
    }
  }
}
```

{% translate "CreatingCooperativeChallanges.content2", page.url | getUrlLang %}

```javascript
{
  "type": "FeatureCollection",
  "features": [ ... ],            // omitted for readability
  "cooperativeWork": {            // special `cooperativeWork` property
    "meta": {
      "version": 2,               // must be format version `2`
      "type": 1                   // `1` for tag fix type
    },
    "operations": [               // Operations section (see below)
      ...
    ]
  }
}
```

{% translate "CreatingCooperativeChallanges.content3", page.url | getUrlLang %}

```javascript
{
  "operationType": "modifyElement",
  "data": {
    "id": "way/12345678",
    "operations": [{
      "operation": "setTags",
      "data": {
        "building": "yes",
      }
    }]
  }
}
```

{% translate "CreatingCooperativeChallanges.content4", page.url | getUrlLang %}

```javascript
{
  "operation": "setTags",
  "data": {
    "name": "Walgreens",
    "amenity": "pharmacy"
  }
}
```

{% translate "CreatingCooperativeChallanges.content5", page.url | getUrlLang %}

```javascript
{
  "operation": "unsetTags",
  "data": ["sometag", "anothertag"]
}
```

{% translate "CreatingCooperativeChallanges.content6", page.url | getUrlLang %}
