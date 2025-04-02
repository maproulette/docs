---
title: Short-codes in Comments
---

MapRoulette offers a "short-code" mechanism in Task comments for providing enhanced references to things like OpenStreetMap nodes/ways/relations and zoom/lat/lon map viewports. Short-codes are always surrounded by brackets (`[` and `]`).

The following short-codes are currently supported:

## Reference an OpenStreetMap element (node, way, or relation) -- or multiple elements together

To reference a node, way, or relation, use `n`, `w`, or `r` followed by an optional space or slash, followed by the OSM id.

> Note: `node`, `way`, or `relation` can also be fully spelled out, if preferred

**Examples:**

Reference node 12345689: `[n123456789]` (or, equivalently, `[n 123456789]` or `[n/123456789]`)

Reference way 24681012: `[w24681012]` (or, equivalently, `[w 24681012]` or `[w/24681012]`)

Multiple elements can be combined in a single short-code by separating them with commas:
`[n123456789, w24681012]`

**Behavior:**

OSM Element short-codes will be displayed as browser links to an Overpass Turbo page that will render the referenced element(s). However, if the reader has configured JOSM as their current MapRoulette editor, then clicking on the link will instead load the referenced elements into JOSM.

## Reference a map viewport

To reference a map viewport of a specific location, use `v` followed by an optional space or slash, followed by slash-separated zoom, latitude, and longitude.

> Note: `viewport` can also be fully spelled out, if preferred

**Examples:**

Reference location 37.11777, 126.99754 at zoom 17: `[v17/37.11777/126.99754]` (or, equivalently, `[v 17/37.11777/126.99754]` or `[v/17/37.11777/126.99754]`)

For convenience, a complete OSM map url can also be used instead, e.g. `[https://www.openstreetmap.org/#map=17/37.11777/126.99754]` -- notice that it is *not* started with a `v` in that case


**Behavior:**


Viewport short-codes will be displayed as links to OpenStreetMap for the referenced location at the specified zoom. However, if the reader has configured JOSM as their current MapRoulette editor, then clicking on the link will instead zoom JOSM to the referenced viewport.


## Mention other users

To "mention" a user, use `@` followed by their username, e.g. `[@username]`. For simple usernames that don't contain any spaces or punctuation, a simplified `@username` (ommitting the square brackets) can also be used. The user will receive an in-app notification that they've been mentioned in a comment, unless they've chosen to disable those notifications.

**Examples:**

Mention user "abc" (no spaces or punctuation): `Hello [@abc]` or `Hello @abc`

Mention user "example user" (with spaces): `Hello [@example user]`

Mention user "example.user" (with punctuation): `Hello [@example.user]`


**Behavior:**

By default, the mentioned user will receive an in-app notification informing them that they've been mentioned in a comment. Depending on how the user has customized their notification settings, however, they may also receive an email notification (either immediately or rolled up into a daily digest of notifications) or the notification may be ignored completely.


