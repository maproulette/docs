---
title: System-Notice Management
---

MapRoulette supports the display of system notices -- such as notice of upcoming maintenance -- through a simple external JSON file that can be hosted anywhere (including a GitHub repo). You simply need to specify the URL to the file in the `REACT_APP_SYSTEM_NOTICES_URL` .env configuration variable.

The JSON file should represent a single object with a top-level `notices` array of notice objects. Any other top-level fields are ignored.

Each notice object should contain a `message` field, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted `expirationTimestamp` field in UTC, and a `uuid` field that uniquely identifies the notice.

Example JSON:

```json
{
  "notices": [
    {
      "message": "A first notice. Maintenance is planned.",
      "expirationTimestamp": "2019-08-01T17:00:00Z",
      "uuid": "b98da355-a5e9-44b4-8a20-a5034d704de5"
    },
    {
      "message": "A second notice. Important things are happening",
      "expirationTimestamp": "2019-08-04T15:00:00Z",
      "uuid": "94aef98e-bf9f-46a6-a860-85e62498ae3d"
    }
  ]
}
```

Only notices that have not yet passed their `expirationTimestamp` are shown. A
notice missing any of the three fields, or whose timestamp cannot be parsed, is
skipped rather than displayed indefinitely.

Signed-in users can dismiss each notice, and it will not be shown to them
again — the acknowledgement is stored on their MapRoulette account, so it
follows them between browsers and devices. Signed-out visitors see notices too,
but dismissing one only hides it until the page is reloaded.

The message may contain markdown.

If you are creating a notice by hand, you may wish to take advantage of an online UUID generator such as https://www.guidgenerator.com/online-guid-generator.aspx

Removing the hosted file (or leaving none configured) simply means no banners
are shown — the frontend treats an empty or unavailable response as "no
notices" rather than an error.
