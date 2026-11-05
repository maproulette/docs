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
property rules and its geographic bounds. At the top of each tab you'll see:

- a **match count** — how many of the challenge's tasks would receive that
  priority under your current rules. Tasks already claimed by a higher tier
  aren't counted again, and tasks that match no tier are counted under the
  default priority
- warning badges reading **Matches all** or **No matches**, shown when a tier
  has rules or bounds but every task, or no task, ends up with its priority.
  These usually mean a rule is broader or narrower than you intended

The preview map re-colours the challenge's tasks by the priority they would
receive, with a legend, so you can check your rules against real tasks before
committing to them. **Discard** throws away your unsaved changes; **Save**
writes them and returns you to the challenge.

Updated rules are reapplied to every task in the challenge as part of the
save, so the new priorities are in place by the time the save finishes.

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

`exists` and `is missing` take no value. Both only look at tasks that have the
property at all: `exists` matches when the property has a non-empty value, and
`is missing` matches when the property is present but empty. A task that
doesn't have the property never matches either operator.

It's important that the type is set correctly for the kind of data found on the
property. A `string` rule compares text exactly, so `equals` `5` won't match a
value of `5.0`, and there are no greater-than or less-than comparisons for
strings. A `number` rule only matches values that read as numbers; tasks where
the property holds anything else never match it.

Multiple rules can be set up in a group, joined with **AND** (*all* rules in
the group must match) or **OR** (*any* rule in the group must match). Rules can
be nested for greater granularity by adding a **Group** inside a group.

### Matching multiple tag values with a single rule

If you want to match a single tag against multiple possible values (such as
`highway` equal to either `trunk` or `primary`), set up a separate rule for
each value and OR them together.

Priority rules don't split comma-separated values. The rule editor shows a
**Comma-separated values** checkbox, but it has no effect here: a rule of
`highway` `string` `equals` `trunk,primary` only matches tasks whose `highway`
tag is literally `trunk,primary`.

## Location rules

Each tier can also be given geographic bounds, so a task is prioritized by
where it is. A task inside a tier's bounds matches that tier whether or not it
matches the tier's property rules — bounds and rules are alternatives, not
both required. The draw control sits in the top-left corner of the preview map
and offers:

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
challenge will only be served high priority tasks; then medium priority tasks;
and finally low priority ones, until the challenge's tasks are exhausted. A
mapper who picks **Nearby Task** as their next task instead gets the closest
available task, whatever its priority.

Please note that tasks marked **Can't Complete** with a higher priority will
still be served before any lower priority tasks. The underlying assumption is
that a more experienced mapper may still be able to resolve a task someone else
could not.
