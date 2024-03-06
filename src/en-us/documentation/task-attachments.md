---
layout: base
title: Task Attachments
description: 'MapRoulette offers the ability to attach data to tasks. That data may simply travel along with the task, perhaps to be consumed by external processes, or -- depending on the kind of data -- it may be utilized during task completion to present mappers with additional information or context'

tags: documentation
eleventyNavigation:
  key: Task Attachments
  parent: Creating and Managing Challenges
  order: 13 
---

{% translate "TaskAttachments.content1", page.url | getUrlLang %}

```json
{
  ...
  "attachments": [
    {
      "id": "d9ae3aae-5377-4cd9-85a5-5c49c0723cdf",
      "kind": "referenceLayer",
      "type": "geojson",
      "name": "Boundary",
      "data": {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [100.0, 0.0],
              [101.0, 0.0],
              [101.0, 1.0],
              [100.0, 1.0],
              [100.0, 0.0]
            ]
          ]
        }      
      }
    }
  ]
}
```

{% translate "TaskAttachments.content2", page.url | getUrlLang %}

```json
"settings": {
  "layerLocked": false,
  "downloadPolicy": ""     // disable the default download policy of "never"
}
```
