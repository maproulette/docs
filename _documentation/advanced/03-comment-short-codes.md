---
title: Short-codes in Comments
---

## Mention other users

To "mention" a user, type `@` followed by their username, e.g. `@username`. As
you type, MapRoulette offers matching users to pick from, and inserts the name
for you. The mention is rendered as a link, and the mentioned user receives an
in-app notification that they've been mentioned in a comment.

**Examples:**

Mention user "abc": `Hello @abc`

Mention user "example_user": `Hello @example_user`

**Behavior:**

By default, the mentioned user will receive an in-app notification informing
them that they've been mentioned in a comment. Depending on their notification
settings, they may also receive an email notification, or the notification may
be ignored completely.

## Reference OSM elements and map viewports

Short-codes were always surrounded by brackets (`[` and `]`).

### Reference an OpenStreetMap element (node, way, or relation)

To reference a node, way, or relation, use `n`, `w`, or `r` followed by an
optional space or slash, followed by the OSM id. `node`, `way`, or `relation`
could also be fully spelled out.

Reference node 123456789: `[n123456789]` (or, equivalently, `[n 123456789]` or
`[n/123456789]`)

Reference way 24681012: `[w24681012]`

Multiple elements could be combined in a single short-code by separating them
with commas: `[n123456789, w24681012]`

These were displayed as links to an Overpass Turbo page rendering the
referenced element(s) — or, for readers with JOSM configured as their editor,
loaded the elements straight into JOSM.

### Reference a map viewport

To reference a specific location, use `v` followed by an optional space or
slash, followed by slash-separated zoom, latitude, and longitude:
`[v17/37.11777/126.99754]`. A complete OSM map URL could be used instead, e.g.
`[https://www.openstreetmap.org/#map=17/37.11777/126.99754]`.

These were displayed as links to OpenStreetMap at the referenced location and
zoom — or zoomed JOSM to that viewport for readers using JOSM.

## In the meantime

A plain Markdown link to
`https://www.openstreetmap.org/node/123456789` or to an OSM map URL works
everywhere and reads clearly. The **OSM** tab in the task panel also links out
to OpenStreetMap, OSMCha and Overpass Turbo for the task at hand.
