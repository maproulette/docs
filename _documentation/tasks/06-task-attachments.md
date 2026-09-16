---
title: Task Attachments
---

MapRoulette offers the ability to attach data to tasks. That data may simply travel along with the task, perhaps to be consumed by external processes, or -- depending on the kind of data -- it may be utilized during task completion to present mappers with additional information or context.

The initial implementation allows various kinds of data to be attached, but only reference layers (to be shown in JOSM) are specially supported during task completion. Special handling of other kinds of data, such as automatic display of attached street-level imagery, will be coming in future releases.

> Note: the [mr-cli](https://www.npmjs.com/package/@maproulette/mr-cli) command-line utility now provides basic tooling for adding task attachments to your line-by-line GeoJSON files. See its [README](https://www.npmjs.com/package/@maproulette/mr-cli#attaching-data-to-tasks) for usage and examples.

## Adding Attachments

Each GeoJSON Feature (or FeatureCollection) representing a task can have an embedded `attachments` object containing an array of supplemental data attachments. These can include things such as reference layers to display in editors, useful street-level imagery to show to the mapper, or even arbitrary data blobs intended for consumption by external processes.

```json
{
  ...
  "attachments": [
    {
      "id": "d9ae3aae-5377-4cd9-85a5-5c49c0723cdf",
      "kind": "referenceLayer",
      "type": "geojson",
      "name": "Boundary",
      "data": {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [100.0, 0.0],
              [101.0, 0.0],
              [101.0, 1.0],
              [100.0, 1.0],
              [100.0, 0.0]
            ]
          ]
        }      
      }
    }
  ]
}
```


Each attachment in the `attachments` array is a JSON object with a set of fields. The exact fields are flexible and depend on the kind of attachment, but the following fields are always supported (and some required).

### Fields
**Required Top-Level Fields**

These fields are always required, regardless of the kind of attachment.

`id`: String containing a unique identifier for the attachment, consisting entirely of [unreserved characters](https://tools.ietf.org/html/rfc3986#section-2.3) from [RFC 3986](https://tools.ietf.org/html/rfc3986). Version 4 [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) meet these criteria and are highly recommended.

`kind`: String indicating the kind of attachment (reference layer, photo, etc.) The kind tells MR what sort of attachment it's dealing with and determines which other fields are supported and/or required.

`data`: Contains the attachment data, which must be represented as valid JSON, but can be in a different format that has been encoded (e.g. base64). The structure is dependent on the `kind`.

**Other Universal Top-Level Fields**

These fields are always allowed regardless of the kind of attachment. Some may be required depending on the specified `kind`.

`type`: Specify the type of the data, e.g. `geojson`, `osm`, `gpx`, etc.

`format`: Specify the format of the data, e.g. `xml`.

`encoding`: Specify how the data was encoded, e.g. `base64`.

`name`: A displayable name for this attachment (layer name, file name, etc.)

`settings`: A JSON object with kind-dependent settings that may be used to control how MapRoulette interacts with the attachment.

`purpose`: Optionally indicate how the attachment is intended to be used. This can provide hints to automated and external processes trying to determine if a particular attachment is relevant to them.

`meta`: Reserved for tracking meta information about the attachment, such as data-format version used, timestamps, etc.


### Supported Kinds

> Note: some kinds below are shown as "planned". They technically can still be used as attachments, but special handling has not yet been implemented (i.e. they will not be made available to the mapper during task completion) and the details are subject to change.

`referenceLayer` *(v3.6.5)*: A reference layer to be shown in editors (depending on editor support) during task completion. GeoJSON, OSM, and GPX layers are supported. `type` should be set to `geojson`, `osm`, or `gpx`. OSM and GPX data must be base64-encoded and should have `format` set to `xml` and encoding set to `base64`. No additional fields are required for GeoJSON. The `data` field should be set to the GeoJSON object or, for OSM and GPX, a string containing the base64-encoded XML data. By default, reference layers are locked in JOSM with no OpenStreetMap upload/download allowed. This behavior can be changed by including a `settings` object on the attachment with `layerLocked`, `uploadPolicy`, and `downloadPolicy` fields set as desired (see JOSM docs for appropriate values).

`referencePhoto` *(planned)*: A photo (or sequence of photos) to be shown in MR during task completion. `type` should be set to either `mapillary` or `openstreetcam`. For Mapillary, `format` should be either `image` or `sequence` and the `data` field should be a string containing the unique Mapillary image or sequence key. For OpenStreetCam the `format` should be `name` and the data should be a string containing the appropriate lth_name (or th_name) for the image.

`referenceData` *(planned)*: A set of key/value pairs to be made available to the mapper in MR during task completion. `format` should be `keyValue` and the data should be JSON representing a flat set of key/value pairs (i.e. no object values).

`blob` *(v3.6.5)*: An arbitrary data attachment that will be ignored by MapRoulette. This can be useful for attaching meta-data to each task that is to be consumed by an external process, perhaps during analysis after a challenge is completed. The data must be embeddable in JSON, so encode if needed. Use of `type`, `format` and `encoding` fields is highly encouraged as needed to identify and process the attached data. Furthermore, a `purpose` field should be used to indicate the intent of the data so that, for example, external processes can identify which blob(s) are relevant to their processing requirements. Even if only one blob of data is attached at challenge creation, it should not be assumed that other blobs won't be attached by other processes later during the task's lifetime.

### Supported Types

`geojson`: GeoJSON data.

`osm`: a JOSM OSM file (must be base64-encoded). `format` should be `xml` and encoding should be `base64`

`gpx`: GPX data (must be base64-encoded). `format` should be `xml` and `encoding` should be `base64`.

`keyValue`: a flat JSON object consisting of key/value pairs (values may not be objects).


### Settings
A kind-specific `settings` object can be provided that controls the interaction between MapRoulette and the attachment. The following settings are supported for each `kind`:

**referenceLayer**

`layerLocked` (boolean) and `downloadPolicy` (string) can be provided to explicitly control how the layer is treated in JOSM (see the [JOSM docs](https://josm.openstreetmap.de/wiki/Help/RemoteControlCommands#import) for details). By default, all reference layers are locked with upload and download policies both set to "never", so usually no special settings are needed. The upload policy cannot currently be changed.

Example:

```json
"settings": {
  "layerLocked": false,
  "downloadPolicy": ""     // disable the default download policy of "never"
}
```

