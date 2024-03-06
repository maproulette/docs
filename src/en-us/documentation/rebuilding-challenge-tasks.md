---
layout: base
title: Rebuilding (Updating) Task Data
description: 'MapRoulette allows you to rebuild the tasks in your challenge with more recent data to add new tasks, update existing ones, and clear out untouched stale ones that no longer need to be addressed'
tags: documentation
eleventyNavigation:
  key: Rebuilding (Updating) Task Data
  parent: Creating and Managing Challenges
  order: 11
---

{% translate "RebuildingChallengeTasks.content1", page.url | getUrlLang %}

```json
 {
   "type": "Feature",
   "properties": {
     "@id": "relation/1553447",                        <------- This is fine
     "addr:city": "Detroit",
     "addr:housenumber": "5200",
     "addr:postcode": "48202",
     "addr:street": "Woodward Avenue",
     "building": "yes",
     "name": "Detroit Institute of Arts",
     "opening_hours": "Tu-Th 09:00-16:00, Fr 09:00-22:00, Sa,Su 10:00-17:00",
     "tourism": "museum",
     "type": "multipolygon",
     "website": "http://www.dia.org/",
     "wikidata": "Q1201549",
     "wikipedia": "en:Detroit Institute of Arts"
   },
   "geometry": {
     ...
   },
   "id": "relation/1553447"                            <------- This is fine
}
```

{% translate "RebuildingChallengeTasks.content2", page.url | getUrlLang %}
