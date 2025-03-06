---
title: 'Setting external task IDs (e.g. OSM IDs)'
---

When possible, MapRoulette will assign your tasks unique external identifiers based on the fields or properties of their GeoJSON feature. It's common to use OSM ids for this purpose for features that have one. Among other things, using an OSM id allows MapRoulette to pass the id to editors like iD and JOSM so that they can preselect the feature during editing.

> Note: id fields in MapRoulette must always be represented as strings in GeoJSON, even if they are purely numerical

The name of the feature field or property to be used for this purpose can be specified during challenge creation on the "OSM/External Id Property" setting (found in the "Configure property-based behavior" section).

![](/media/setting_external_id_field.png){:width="800"}


Be sure that your external ids are **unique for each feature in your data**. It is your responsibility as the challenge creator to ensure this. Task features _missing_ the specified field will be assigned a [random UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) as an external identifier.

> Note: MapRoulette always inspects external identifiers to determine if they match the format of OSM ids before treating them as such, so a UUID will not get treated as an OSM id during task editing or other processes

If you do not specify which field or property to use during challenge creation, MapRoulette will automatically scan your task features looking for certain special fields and properties to use as a unique external identifier.

MapRoulette looks for external identifiers first on the feature fields and then within the feature's properties. It stops as soon as it finds a matching field or property. It looks for the following, in this order:

```
id
@id
osmid
osm_id
name
```

If none of those are found on either the feature fields or its properties, then a [random UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) is generated and assigned as an external identifier.

> Note: if you subsequently edit your challenge and set (or change) which feature field or property to treat as the OSM id, you must [rebuild your tasks](/documentation/rebuilding-challenge-tasks/) for that change to take effect. As mentioned above, you must be very careful to ensure that each feature will have a unique value for the field/property

> Note: A Tag Fix consists of one independent (or parent) operation which includes one or more embedded dependent (or child) operations. Any OSM ids referenced in an operation must be of the form of `elementType/numericId`, e.g. `node/123456789`

## Tips for using Non-OSM External Ids

While most MapRoulette tasks use OSM ids when specifying external ids, it's possible to provide your own (non-OSM) unique ids instead. Here are some recommendations if you do so:

* Make sure your ids don't look like OSM ids. MapRoulette does not provide a way to distinguish OSM ids from non-OSM ids except by their formatting. For example, MapRoulette itself uses UUIDs if it needs to generate ids. If your ids look like OSM ids, then they may be treated as OSM ids in some situations.
* Make sure your ids are represented as strings in your GeoJSON. External task ids must be strings in MapRoulette.
* Do not reuse one of the traditional osm id fields mentioned above (such as `id`). Instead, give your external id field a different name, like `externalId`.
* Provide the name of your id field on the "OSM/External Id Property" setting when setting up your challenge (found in the "Configure property-based behavior" section)
* If you want your external id to show up in the task properties when someone clicks on a task feature, then put your id field inside the feature properties in your GeoJSON. If you do *not* want your id to be displayed in the task properties, then put it on the feature itself in your GeoJSON

