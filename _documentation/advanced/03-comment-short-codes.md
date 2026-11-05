---
title: Short-codes in Comments
---

## Mention other users

To "mention" a user, type `@` followed by their username, e.g. `@username`.
The mentioned user receives an in-app notification that they've been mentioned
in a comment.

When you reply to a comment thread from your **Notifications**, MapRoulette
offers matching users to pick from as you type, inserts the name for you, and
renders the mention as a link to that user's OpenStreetMap profile. The comment
boxes on the task screen, in the task completion dialog and on a challenge's
comments are plain text boxes: type the name out in full there, and it is
shown as written rather than as a link.

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

## Reference a map viewport

Short-codes are surrounded by brackets (`[` and `]`). They are turned into
links in two places: in challenge instructions, as shown in the **Instructions**
tab on the task screen, and in comment threads opened from your
**Notifications**. Elsewhere — the task's own comments, challenge comments, and
the instructions shown in the task details drawer on a challenge map — they
appear as the bracketed text you typed.

### Reference an OpenStreetMap element (node, way, or relation)

To reference a map viewport of a specific location, use `v` followed by an optional space or slash, followed by slash-separated zoom, latitude, and longitude.

Reference location 37.11777, 126.99754 at zoom 17: `[v17/37.11777/126.99754]` (or, equivalently, `[v 17/37.11777/126.99754]` or `[v/17/37.11777/126.99754]`)

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
