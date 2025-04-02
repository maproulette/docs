---
title: Using Overpass to create Challenges
---

Overpass is a powerful query language for OSM. You can ask it things like "Show me all water fountains in Rome" or "Show me banks that are more than 1km away from a police station".

You can use Overpass queries directly in MapRoulette to generate tasks when you create a new Challenge. This page is here to help you do this, and avoid common mistakes.

### A simple example

Imagine that you want to create a Challenge to have mappers look at bus stop nodes in a certain area. [This Overpass query](http://overpass-turbo.eu/s/Wh4) will give you all `highway=bus_stop` nodes in Salt Lake City:

```
area[name="Salt Lake City"]->.a;
node[highway=bus_stop](area.a);
out meta;
```

Explaining the full syntax of Overpass QL (the language this query is written in) is outside the scope of this article. Please look at the [language reference](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL), [examples](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example) and other Overpass related pages on the OSM wiki. OSM user Binette also has some [MapRoulette specific query examples](https://wiki.openstreetmap.org/wiki/User:Binnette/OverpassQueries) on their user page.

You can plug this query right into MapRoulette when you create a Challenge:

![](/media/87983753-1f76b580-ca96-11ea-89d0-c6373a54031e.png)

After completing the Challenge wizard, your Tasks will reflect the result of the Overpass Query:

![](/media/87983923-606eca00-ca96-11ea-8ba4-c06bdf0ff1df.png)

## Common Pitfalls

### `out center` returns both relations and ways as nodes; use `out geom` instead

`out center` returns the correct coordinates, but instead of relations and ways, nodes are returned. This causes issues with editors because instead of searching for a `way` with `id = 9817324213`, we search for a `node` with `id = 9817324213`. This also causes problems with the MapRoulette maps as a single point will be displayed instead of a linestring.

- ` [out:json];` (space at the front) breaks, resulting in `[out:json][timeout:Y]; [out:json];`
- ` [out:json][timeout:X];` (whitespace) is broken, resulting in `[out:json][timeout:Y]; [out:json][timeout:X];`
- Conflicting timeout: X is from the user and timeout Y is from the MapRoulette settings
- `[timeout:X][out:json];` is technically broken with the result being `[out:json][timeout:X][out:json];`
- `[out:xml];` breaks, resulting in `[out:json][timeout:Y];[out:xml];`

<pre>`&#123;&#123;bbox&#125;&#125;`</pre>

This indicates the currently visible map extent. Overpass Turbo replaces this with the actual longitude / latitude bounds before sending the query to Overpass. If you want to use a query that contains `bbox`, you need to select `Export` > `Query` > `Copy as standalone query` before pasting into MapRoulette.

### Beware of Recursions

Overpass lets you use recursion (`>`) to select all nodes belonging to a way, or all nodes and ways belonging to a relation. If you use recursion in a query to create Tasks in MapRoulette, you will often get more results than you expected. This is because MapRoulette will interpret each separate node as a Task, as well as the Way itself. To avoid this, use `out geom`. So instead of...

```
way["highway"="path"](40.76,-111.90,40.81,-111.85);
out body;
>;
out skel qt;
```

... do this:

```
way["highway"="path"](40.76,-111.90,40.81,-111.85);
out geom;
```

### Timeouts

Complex queries or queries that span a large area can take a long time to complete. MapRoulette uses a default query timeout of 180 seconds (3 minutes). This should be enough for most scenarios. If you really need MapRoulette to tell Overpass to wait longer, you can use [Overpass's native `[timeout]` setting](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL#timeout:) to override this.

### A word on `out meta`

Strictly speaking, you don't need all OSM metadata to build the tasks. You can just use the `out` statement with no parameters which, according to the documentation, gives you "all information necessary to use the data". By using `out meta` you get "everything output by body for each OSM element, as well as the version, changeset id, timestamp, and the user data of the user that last touched".

![](/media/88001168-b8202c00-cabc-11ea-9d47-db983ce4d11b.png)

_An OSM way imported as a Task using Overpass with full metadata_

