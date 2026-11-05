---
title: Cooperative Challenges
---

Cooperative Challenges allow in-progress (uncommitted) mapping work to be packaged with tasks so that mappers don't have to do all the work themselves from scratch. When a mapper chooses to edit the task in MapRoulette, the in-progress work will automatically be loaded into the mapper's editor so that they can verify and complete the work as needed.

> Note: JOSM is currently the only supported editor for Cooperative Challenges, but integration with additional editors is under way

Aside from the initial editing work being automatically loaded into the mapper's editor, the mapping workflow for Cooperative tasks is otherwise identical to normal tasks: the mapper still chooses to Edit the task, they still perform the editing work in their editor, they still upload and commit their work to OSM through their editor, and they still mark the task as Finished or another appropriate status in MapRoulette when complete.

### Creating Cooperative Challenges

#### With the `mr-cli` utility (recommended)

The simplest way to create cooperative challenges is with the [mr-cli](https://www.npmjs.com/package/@maproulette/mr-cli) command-line utility, which can generate challenges from saved JOSM (.osm) or OSM Change (.osc) files. See the tool's documentation for details and examples of use.

#### With GeoJSON

Cooperative challenges can also be created by including additional data with each task in the GeoJSON, including an [OSMChange (.osc)](https://wiki.openstreetmap.org/wiki/OsmChange) file that represents the in-progress work that is to be loaded into the mapper's editor for the task. The additional data should be included in a `cooperativeWork` object associated with each task's `FeatureCollection` in the challenge's [line-by-line GeoJSON](/en-US/documentation/line-by-line-geojson/) file.

> :warning: Only [line-by-line GeoJSON](/en-US/documentation/line-by-line-geojson/) is supported for cooperative challenges. If you use a traditional GeoJSON format, your cooperativeWork section will simply be ignored and you will end up with normal tasks instead of cooperative tasks

The structure of the `cooperativeWork` object is designed to be flexible to support various options, formats, and encodings in the future, but at the moment only a very specific combination of values is supported.

The following example demonstrates the structure, shown here over multiple lines for readability.

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
<a id='creating-tag-fix-challenges'></a>
> Note: the file contents must be Base64-encoded using the Base 64 Alphabet as specified in table 1 of [RFC 4648](https://www.ietf.org/rfc/rfc4648.txt) (sometimes referred to as "basic" Base64 encoding)

The `features` for each task are used for all the usual things by MapRoulette (rendering the task on maps, geographical indexing, task prioritization, searching for tasks by feature properties, etc.) but are _not_ incorporated into editing -- only the osc file is sent to the editor.

### Creating [Tag Fix Challenges](/en-US/documentation/tag-fix-challenges)

If your changes consist purely of tag fixes, an alternative _Tag Fix_ (formerly quick fix) style cooperative challenge can be created instead. MapRoulette will present the proposed tag changes to mappers during task completion and allow them to approve or reject the changes within MapRoulette, as well as modify the tags if needed. Approved changes are submitted directly to OSM by MapRoulette itself, removing the need for external editors.

#### With the `mr-cli` utility (recommended)

As with standard cooperative challenges, the easiest way to create a Tag Fix challenge is with the [mr-cli](https://www.npmjs.com/package/@maproulette/mr-cli) command-line utility. See the tool's documentation for details and examples of use.

See also [this post on the MapRoulette blog](https://blog.maproulette.org/2022/11/07/tutorial-tagging-parkingsurface-efficiently-with-a-maproulette-tag-fix-challenge/) for a complete example of how to make a tag-fix challenge using the `mr-cli` tool.

#### With GeoJSON

To aid with backwards compatibility, the GeoJSON structure of Tag Fix tasks is extremely similar to that of the old quick fix tasks, with only a few minor changes to the data envelope being required.

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

#### Supported GeoJSON Operations

A Tag Fix consists of one _independent_ (or parent) operation which includes one or more embedded _dependent_ (or child) operations.

> Note: For ease of backward compatibility, the Tag Fix operations are taken from a subset of the old quick fix operations and work (and are structured) identically

#### Independent Operations

> Note: Any OSM ids referenced in an operation must be of the form of `elementType/numericId`, e.g. `node/123456789`

**modifyElement**

Updates an existing OSM element with a series of dependent operations on tags that will be applied in the order they appear. `data` should consist of an `id` and `operations` array with dependent operations to be performed.

Example:

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

#### Dependent Operations

**setTags**

Sets the value of one or more tags on the enclosing OSM element. This operation will add the tag if it does not yet exist on the element, or update the value of an existing tag if it does exist. `data` should be an object with tag names as keys.

> Unlike an OSM changeset, which often requires a complete snapshot of the element data to be provided, a tag fix is intended to capture only the actual changes required to complete the task

Example:

```javascript
{
  "operation": "setTags",
  "data": {
    "name": "Walgreens",
    "amenity": "pharmacy"
  }
}
```

**unsetTags**

Removes one or more tags from the enclosing OSM element. This operation will
delete the tag from the OSM element if it exists, or silently do nothing if it
does not. `data` should be an array of tag names to remove.

Example:

```javascript
{
  "operation": "unsetTags",
  "data": ["sometag", "anothertag"]
}
```

### See also

* [Adding Microsoft Building Footprints To OSM With MapRoulette: Why And How](https://www.openstreetmap.org/user/mvexel/diary/399229) walks you through an example of creating a Cooperative Challenge

### Full example

This is a full example of a valid GeoJSON that uses `setTags` for two features.

```javascript
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "point/123",
        "otherkeys": "othervalues"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.4050, 52.5200]
      }
    }
  ],
  "cooperativeWork": {
    "meta": {
      "version": 2,
      "type": 1
    },
    "operations": [
      {
        "operationType": "modifyElement",
        "data": {
          "id": "point/123", // same id as `feature[0].properties.id` above
          "operations": [
            {
              "operation": "setTags",
              "data": {
                "nice": "place"
              }
            }
          ]
        }
      }
    ]
  }
}
```

