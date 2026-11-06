---
title: Tag Fix Challenges
---

The challenge form has no Tag Fix option. A challenge becomes a Tag Fix
challenge when its tasks carry the proposed changes: upload the tasks as
[line-by-line GeoJSON](/documentation/line-by-line-geojson/) and give each
task's `FeatureCollection` a `cooperativeWork` object. In an ordinary
GeoJSON file, a `cooperativeWork` object alongside the file's single
`features` list is ignored, and you get normal tasks instead.

## With mr-cli

The easiest way to build these files is the
[mr-cli](https://www.npmjs.com/package/@maproulette/mr-cli) command-line tool.
See its documentation for details, and
[this post on the MapRoulette blog](https://blog.maproulette.org/2022/11/07/tutorial-tagging-parkingsurface-efficiently-with-a-maproulette-tag-fix-challenge/)
for a complete worked example.

## By hand

Each task's line in the file is a `FeatureCollection` with a
`cooperativeWork` object alongside its `features`:

```javascript
{
  "type": "FeatureCollection",
  "features": [ ... ],            // the task's features, as usual
  "cooperativeWork": {
    "meta": {
      "version": 2,               // must be format version 2
      "type": 1                   // 1 for a tag fix
    },
    "operations": [ ... ]         // see below
  }
}
```

The `features` are used for everything a task's features are normally used
for — drawing the task on the map, locating it, prioritizing and searching it —
but the proposed changes come only from `operations`.

### Operations

`operations` is a list of `modifyElement` operations, one per OSM element you
want to change. Each names an existing element and lists the changes to make
to its tags:

```javascript
{
  "operationType": "modifyElement",
  "data": {
    "id": "way/12345678",
    "operations": [ ... ]         // setTags and unsetTags, in order
  }
}
```

The `id` must be the element type and number, written as `node/123`,
`way/123` or `relation/123`. An operation with any other form of id is
skipped.

Inside it, two operations change the element's tags:

- **`setTags`** adds tags, or changes the value of tags the element already
  has. `data` is an object of tag names and values. List only the tags you
  want to change, not every tag on the element.

  ```javascript
  { "operation": "setTags", "data": { "name": "Walgreens", "amenity": "pharmacy" } }
  ```

- **`unsetTags`** removes tags. `data` is a list of tag names; a tag the
  element doesn't have is ignored.

  ```javascript
  { "operation": "unsetTags", "data": ["fixme", "note"] }
  ```

### Full example

One task's line, shown over several lines for readability, proposing a new
`building` tag and the removal of `fixme` on a single way:

```javascript
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "@id": "way/12345678" },
      "geometry": {
        "type": "Point",
        "coordinates": [13.4050, 52.5200]
      }
    }
  ],
  "cooperativeWork": {
    "meta": { "version": 2, "type": 1 },
    "operations": [
      {
        "operationType": "modifyElement",
        "data": {
          "id": "way/12345678",
          "operations": [
            { "operation": "setTags", "data": { "building": "yes" } },
            { "operation": "unsetTags", "data": ["fixme"] }
          ]
        }
      }
    ]
  }
}
```

> Earlier versions of MapRoulette also supported a second kind of cooperative
> challenge, whose tasks carried an OSMChange (`.osc`) file to be loaded into
> the mapper's editor (`"type": 2`). The current interface does not load those
> files, so only tag fixes work.
{: .legacy}
