---
title: Tag Fix Challenges
---

If your changes consist purely of tag fixes, you should make a _Tag Fix_ style challenge. MapRoulette will present the proposed tag changes to mappers during task completion and allow them to approve or reject the changes within MapRoulette, as well as modify the tags if needed. Approved changes are saved to OSM through MapRoulette's built-in editor (id editor at the time of writing this), removing the need for external editors. See [Editing inside MapRoulette](/documentation/rapid-editor/) for what mappers see.

#### With the `mr-cli` utility (recommended)

The easiest way to create a Tag Fix challenge is with the [mr-cli](https://www.npmjs.com/package/@maproulette/mr-cli) command-line utility. See the tool's documentation for details and examples of use.

See also [this post on the MapRoulette blog](https://blog.maproulette.org/2022/11/07/tutorial-tagging-parkingsurface-efficiently-with-a-maproulette-tag-fix-challenge/) for a complete example of how to make a tag-fix challenge using the `mr-cli` tool.

#### With GeoJSON

The proposed changes should be included in a `cooperativeWork` object associated with each task's `FeatureCollection` in the challenge's [line-by-line GeoJSON](/documentation/line-by-line-geojson/) file.

> :warning: Only [line-by-line GeoJSON](/documentation/line-by-line-geojson/) is supported for Tag Fix challenges. If you use a traditional GeoJSON format, your `cooperativeWork` section will simply be ignored and you will end up with normal tasks instead.

```javascript
{
  "type": "FeatureCollection",
  "features": [ ... ],            // omitted for readability
  "cooperativeWork": {            // special `cooperativeWork` property
    "meta": {
      "version": 2,               // must be format version `2`
      "type": 1                   // `1` for tag fix type
    },
    "operations": [               // Operations section (see below)
      ...
    ]
  }
}
```

The `features` for each task are used for all the usual things by MapRoulette (rendering the task on maps, geographical indexing, task prioritization, searching for tasks by feature properties, etc.) but are _not_ incorporated into editing -- only the `operations` are applied in the editor.

#### Supported GeoJSON Operations

A Tag Fix consists of one _independent_ (or parent) operation which includes one or more embedded _dependent_ (or child) operations.

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

Removes one or more tags from the enclosing OSM element. This operation will delete the tag from the OSM element if it exists, or silently do nothing if it does not. `data` should be an array of tag names to remove.

Example:

```javascript
{
  "operation": "unsetTags",
  "data": ["sometag", "anothertag"]
}
```

{% comment %} LEGACY (removed for now unless we decide to add it back):
### See also

* [Adding Microsoft Building Footprints To OSM With MapRoulette: Why And How](https://www.openstreetmap.org/user/mvexel/diary/399229) walks you through an example of creating a Cooperative Challenge
{% endcomment %}

### Full example

This is a full example of a valid task line, shown over multiple lines for readability, that adds a `building` tag and removes `fixme` on a single way.

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
