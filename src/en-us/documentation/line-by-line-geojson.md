---
layout: base
tags: documentation
title: Line-by-Line GeoJSON Format
description: The preferred representation of GeoJSON MapRoulette challenges is a
  "line by line" format, wherein each task appears on its own line in the file,
  represented by a standalone FeatureCollection.
eleventyNavigation:
  key: Line-by-Line GeoJSON Format
  parent: Creating and Managing Challenges
  order: 12
---

{% translate "LineByLineGeojson.content1", page.url | getUrlLang %}

```javascript
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-82.9908295,42.435009]},"properties":{"address":"13001 East Seven Mile","latitude":"42.435009","longitude":"-82.9908295","business_name":"Lions Auto Sales"}}]}
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-82.94074,42.42207]},"properties":{"address":"10709 Morang","latitude":"42.42207","longitude":"-82.94074","business_name":"Great Lakes Investment"}}]}
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-83.129097,42.3111]},"properties":{"address":"8118 West Vernor","latitude":"42.3111","longitude":"-83.129097","business_name":"St. Gabriel Church"}}]}
```

{% translate "LineByLineGeojson.content2", page.url | getUrlLang %}