---
title: Prioritizing Tasks
---

Tasks within a challenge can be prioritized by challenge managers as high,
medium, or low priority. Available higher priority tasks will generally be
served to mappers ahead of lower priority tasks. (See below for details about
how rules are applied.)

Tasks are prioritized using priority rules that match against either task
feature properties (such as OSM tags) or their geographic location.

## The prioritization editor

Priorities are set on their own page: from the challenge's management page,
choose **Configure prioritization**. The page has an editor on the left and a
live preview on the right.

The editor has a tab for each of the three tiers — **High**, **Medium** and
**Low** — plus a **Default priority** selector. Each tab holds that tier's
property rules and its geographic bounds. Beside each tier you'll see:

- a **match count** — how many of the challenge's tasks the tier's rules
  currently match
- warning badges reading **Matches all** or **No matches**, which usually mean a
  rule is broader or narrower than you intended

The preview map re-colours the challenge's tasks by the priority they would
receive, with a legend, so you can check your rules against real tasks before
committing to them. **Discard** throws away your unsaved changes; **Save**
writes them and returns you to the challenge.

Updated rules are reapplied when you save, but it can take several minutes for
that reprioritization process to finish on the server.

## Default priority

MapRoulette offers an editable **default priority** that will be applied to
*any task that does not explicitly match any priority rule group*. That is,
tasks that match neither the configured high, medium, nor low priority rule
groups will receive the default priority. If no priority rules are set up, then
all tasks will receive the default priority.

## Property rules

Each property-based priority rule is set up with a property name, a data type,
a comparison operator, and — for most operators — a value. For example, a rule
of `building` `string` `equals` `yes` would match tasks with a `building` tag
set to `yes`.

The available operators change depending on the type:

| Type       | Operators |
|:-----------|:----------|
| `string`   | equals, does not equal, contains, exists, is missing |
| `number`   | equals, does not equal, greater than, less than, greater than or equal to, less than or equal to |

`exists` and `is missing` test only for the presence of the property, so they
take no value. It's important that the type is set correctly for the kind of
data found on the property — comparing a numeric tag as a `string` will compare
it alphabetically.

Multiple rules can be set up in a group, joined with **AND** (*all* rules in
the group must match) or **OR** (*any* rule in the group must match). Rules can
be nested for greater granularity by adding a **Group** inside a group.

### Matching multiple tag values with a single rule

If you want to match a single tag against multiple possible values (such as
`highway` equal to either `trunk` or `primary`), one option is to set up a
separate rule for each value and OR them together. But MapRoulette also lets
you include multiple values separated by commas (e.g. `highway` `string`
`equals` `trunk,primary`). With "positive" operators like `equals` or
`contains`, the comma-separated values are OR'd together; with "negative"
operators like `does not equal` they are AND'd together.

## Location rules

Each tier can also be given geographic bounds, so a task is prioritized by
where it is. The **draw** control above the preview map offers:

- **Rectangle** — click and drag to draw an axis-aligned box
- **Polygon** — click to drop each vertex, then double-click or press
  <kbd>Enter</kbd> to finish; use this for any non-rectangular area
- **Select** — click a shape to select it, then drag a vertex to reshape it, a
  midpoint to insert a new vertex, or the shape itself to move it. Right-click a
  vertex to delete it
- **Pan** — move the map with no drawing tool active

**Delete selected** removes the selected shape and **Clear all** removes every
shape in the tier. A tier can hold more than one shape.

> Bounds are stored per tier, so switching tabs switches which set of shapes
> you're drawing. The shapes shown on the map belong to the tier whose tab is
> open.

## How rules are applied

Rules run top-down and **the first tier to match wins** — so a task matching
both the high and medium tiers is prioritized high.

In general, higher priority tasks are served to mappers ahead of lower priority
ones. Until there are no high priority tasks left, mappers working on the
challenge will only be served high priority tasks; then normal priority tasks;
and finally low priority ones, until the challenge's tasks are exhausted.

Please note that tasks marked **Can't Complete** with a higher priority will
still be served before any lower priority tasks. The underlying assumption is
that a more experienced mapper may still be able to resolve a task someone else
could not.
