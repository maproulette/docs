---
layout: base
title: 'Setting external task IDs (e.g. OSM IDs)'
description: "When possible, MapRoulette will assign your tasks unique external identifiers based on the fields or properties of their GeoJSON feature. It's common to use OSM ids for this purpose for features that have one. Among other things, using an OSM id allows MapRoulette to pass the id to editors like iD and JOSM so that they can preselect the feature during editing."
tags: documentation
eleventyNavigation:
  key: Setting external Task IDs
  parent: Creating and Managing Challenges
  order: 10
---

When possible, MapRoulette will assign your tasks unique external identifiers based on the fields or properties of their GeoJSON feature. It's common to use OSM ids for this purpose for features that have one. Among other things, using an OSM id allows MapRoulette to pass the id to editors like iD and JOSM so that they can preselect the feature during editing.

The name of the feature field or property to be used for this purpose can be specified during challenge creation. If you choose to specify a field or property, **be sure that it has a unique value for each feature in your data**. It is your responsibility as the challenge creator to ensure this. Task features _missing_ the specified field will be assigned a [random UUID](<https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)>) as an external identifier.

> Note: MapRoulette always inspects external identifiers to determine if they match the format of OSM ids before treating them as such, so a UUID will not get treated as an OSM id during task editing or other processes

If you do not specify which field or property to use during challenge creation (or on MapRoulette versions prior to v3.5.4), MapRoulette will automatically scan your task features looking for certain special fields and properties to use as a unique external identifier.

MapRoulette looks for external identifiers first on the feature fields and then within the feature's properties. It stops as soon as it finds a matching field or property. It looks for the following, in this order:

```
id
@id
osmid
osm_id
name
```

If none of those are found on either the feature fields or its properties, then a [random UUID](<https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)>) is generated and assigned as an external identifier.

> Note: if you subsequently edit your challenge and set (or change) which feature field or property to treat as the OSM id, you must [rebuild your tasks](/documentation/rebuilding-challenge-tasks/) for that change to take effect. As mentioned above, you must be very careful to ensure that each feature will have a unique value for the field/property
