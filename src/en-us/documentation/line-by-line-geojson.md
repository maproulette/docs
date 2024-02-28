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
The preferred representation of GeoJSON for MapRoulette challenges is a streaming-friendly, [RFC 7464](https://tools.ietf.org/html/rfc7464)-compliant "line-by-line" format, wherein each task appears on its own line in the file, represented by a standalone [FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3). Some MapRoulette features and capabilities are only available when the line-by-line format is used.

With a line-by-line format, only one line of the file need be pulled into memory and parsed at a time, making it possible to support very large files. And, since each task is represented by a FeatureCollection, it's possible to support multiple individual Features with their own properties (and thus OSM ids and tags) within the task. Traditional GeoJSON files do not confer these advantages.

As of MapRoulette v3.6.5, each line of the file should begin with a [RFC 7464](https://tools.ietf.org/html/rfc7464) record separator (RS) character (1E hex), represented in the JSON example below as `<RS>`.

As a simple example, a line-by-line GeoJSON file with three tasks might look like this:

```javascript
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-82.9908295,42.435009]},"properties":{"address":"13001 East Seven Mile","latitude":"42.435009","longitude":"-82.9908295","business_name":"Lions Auto Sales"}}]}
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-82.94074,42.42207]},"properties":{"address":"10709 Morang","latitude":"42.42207","longitude":"-82.94074","business_name":"Great Lakes Investment"}}]}
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-83.129097,42.3111]},"properties":{"address":"8118 West Vernor","latitude":"42.3111","longitude":"-83.129097","business_name":"St. Gabriel Church"}}]}
```

> Note: Older versions of MapRoulette did not support the RFC 7464 record separator, which could lead to indeterminate outcomes in some situations. MapRoulette will still accept older line-by-line files that omit the RS, but the mentioned problems will continue to potentially affect processing of those files. It is highly recommended that any new line-by-line GeoJSON files make use of the record separators unless compatibility with an older version of MapRoulette is absolutely required.

MapRoulette automatically detects the line-by-line format when processing GeoJSON files, so there is no need to use a special file extension or otherwise indicate that a file uses line-by-line formatting.