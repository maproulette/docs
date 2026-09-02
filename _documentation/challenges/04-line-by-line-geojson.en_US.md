---
title: Line-by-Line GeoJSON Format
---

The preferred representation of GeoJSON for MapRoulette challenges is a streaming-friendly, [RFC 7464](https://tools.ietf.org/html/rfc7464)-compliant "line-by-line" format, wherein each task appears on its own line in the file, represented by a standalone [FeatureCollection](https://tools.ietf.org/html/rfc7946#section-3.3). Some MapRoulette features and capabilities are only available when the line-by-line format is used.

With a line-by-line format, only one line of the file need be pulled into memory and parsed at a time, making it possible to support very large files. And, since each task is represented by a FeatureCollection, it's possible to support multiple individual Features with their own properties (and thus OSM ids and tags) within the task. Traditional GeoJSON files do not confer these advantages.

As of MapRoulette v3.6.5, each line of the file should begin with a [RFC 7464](https://tools.ietf.org/html/rfc7464) record separator (RS) character (1E hex), represented in the JSON example below as `<RS>`

### Example of how to implement a node:

```json
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-83.129097,42.3111]},"properties":{"address":"8118 West Vernor","latitude":"42.3111","longitude":"-83.129097","business_name":"St. Gabriel Church"}}]}
```

### Example of how to implement a way:

```json
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-82.9908295,42.435009],[-82.94074,42.42207]]},"properties":{"address_start":"13001 East Seven Mile","latitude_start":"42.435009","longitude_start":"-82.9908295","business_name_start":"Lions Auto Sales","address_end":"10709 Morang","latitude_end":"42.42207","longitude_end":"-82.94074","business_name_end":"Great Lakes Investment"}}]}
```

### Example of how to implement a relation:

```json
<RS>{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"GeometryCollection","geometries":[{"type":"Point","coordinates":[-82.94074,42.42207]},{"type":"LineString","coordinates":[[-82.94074,42.42207],[-82.9908295,42.435009]]}]},"properties":{"address":"10709 Morang","latitude":"42.42207","longitude":"-82.94074","business_name":"Great Lakes Investment"}}]}
```

> Note: Older versions of MapRoulette did not support the RFC 7464 record separator, which could lead to indeterminate outcomes in some situations. MapRoulette will still accept older line-by-line files that omit the RS, but the mentioned problems will continue to potentially affect processing of those files. It is highly recommended that any new line-by-line GeoJSON files make use of the record separators unless compatibility with an older version of MapRoulette is absolutely required.

MapRoulette automatically detects the line-by-line format when processing GeoJSON files, so there is no need to use a special file extension or otherwise indicate that a file uses line-by-line formatting.

