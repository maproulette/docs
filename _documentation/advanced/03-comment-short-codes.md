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

A username containing spaces or punctuation can't be matched that way, so wrap
it in brackets instead: `Hello [@example user]`

**Behavior:**

By default, the mentioned user will receive an in-app notification informing
them that they've been mentioned in a comment. Depending on their notification
settings, they may also receive an email notification, or the notification may
be ignored completely.

## Reference OSM elements and map viewports

Short-codes are surrounded by brackets (`[` and `]`). They work in comments and
in challenge instructions alike.

### Reference an OpenStreetMap element (node, way, or relation)

To reference a node, way, or relation, use `n`, `w`, or `r` followed by an
optional space or slash, followed by the OSM id. `node`, `way`, or `relation`
can also be fully spelled out.

Reference node 123456789: `[n123456789]` (or, equivalently, `[n 123456789]` or
`[n/123456789]`)

Reference way 24681012: `[w24681012]`

Multiple elements can be combined in a single short-code by separating them
with commas: `[n123456789, w24681012]`

Each is rendered as a link to the element on OpenStreetMap.

### Reference a map viewport

To reference a specific location, use `v` followed by an optional space or
slash, followed by slash-separated zoom, latitude, and longitude:
`[v17/37.11777/126.99754]`. A complete OSM map URL can be used instead, e.g.
`[https://www.openstreetmap.org/#map=17/37.11777/126.99754]`.

These are rendered as links to OpenStreetMap at the referenced location and
zoom.

> Ordinary Markdown links are left alone: `[the wiki](https://wiki.osm.org)` is
> still a link, not a short-code. So is bracketed prose that doesn't match one
> of the forms above.

> Earlier versions of MapRoulette could load a referenced element straight into
> JOSM, or zoom a running JOSM to a referenced viewport, for readers who had it
> configured as their editor. References now always open OpenStreetMap.
{: .legacy}
