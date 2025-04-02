---
title: Rebuilding (Updating) Task Data
---

As a challenge owner, you may wish to occasionally rebuild the tasks in your challenge with more recent data to add new tasks, update existing ones, and clear out untouched stale ones that no longer need to be addressed.

**In order for your challenge to rebuild successfully, each task feature must contain a supported id field with a unique id (within the challenge) so that existing tasks can be matched up with updated feature data. If tasks aren't matched up properly they will likely be duplicated.**

You can either explicitly [specify an id property](/documentation/setting-external-task-identifiers) on your challenge, or rely on a supported field/property that will be automatically detected. Automatically supported id fields are: `id`, `@id`, `osmid`, `osm_id`, and `name` (checked in that order). If your features contain one of those automatically-supported fields and you do *not* wish to use it (or the order of detection would pick up the wrong field first), then you must explicitly [specify](/documentation/setting-external-task-identifiers) on the challenge which field/property is to be used.

Challenge tasks generated from Overpass queries automatically contain ids (including exported GeoJSON files from Overpass Turbo), so nothing more is required. But for challenges with tasks generated from other local or remote GeoJSON data, you will need to ensure these ids are included if you wish your challenge to rebuild successfully. Id fields can be on the features themselves (preferable) or the feature properties.

For example, the following feature representing a museum contains both a field named `id` on the feature and a property named `@id`, either of which will work:

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

**It's important that the same features in your original GeoJSON file and updated GeoJSON file use the same id values so they can be matched up, or you will likely end up with duplicated tasks.**

For example, if an updated GeoJSON file contained new opening hours for the museum above, the feature in the updated GeoJSON file should contain an id property with the value of `relation/1553447` so that it will be successfully matched with the existing task for the museum and not result in a duplicated task.

## Optionally removing incomplete tasks first

When you initiate a Rebuild, you will be presented with a dialog that offers some details about the process along with an option (off by default) to first remove incomplete tasks. This can be useful if your GeoJSON represents the full list of features that still need to be addressed, and you wish to clear out old incomplete tasks that are no longer needed (perhaps they were attended to outside of MapRoulette).

If you check this option, then incomplete tasks (either untouched or skipped) will first be deleted from the challenge and then recreated as needed based from the latest source data. Tasks in other statuses will not be removed.

If you leave the option unchecked (the default), then all tasks will simply be left as-is.

