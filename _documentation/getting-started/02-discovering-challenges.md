---
title: Discovering Interesting Tasks and Challenges
---

How do you find things that you are interested in fixing? MapRoulette offers a
number of ways that we'll talk about on this page.

**Explore Challenges** is the front page of MapRoulette and the main place to
browse. It has a filter bar across the top and, below it, your results.

# Choosing how results are displayed

The control at the right end of the filter bar switches between three views:

- **Grid with map view** — challenge cards beside a map of the challenges in
  view. This is the default, and the only view where the map extent narrows the
  results (see *By location* below).
- **Grid view** — challenge cards only, with no map.
- **List view** — a table with a column each for name, author, organisation,
  percent mapped, percent validated, contributors, type, difficulty, status,
  location, last updated and due date. The **Type** column badges a challenge
  as **Featured**, **Tag Fix**, **Cooperative** or **Global** where that
  applies.

# Sorting

Use **Sort by** to order results by **Name** (the default), **Newest**,
**Oldest**, **Popular** or **Difficulty**. "Popular" ranks the challenges that
have seen the most activity recently. **Featured**, **Tag Fix** and
**Cooperative** bring challenges of that kind to the front of the results,
ordered by name.

# Filtering

In the grid view and the list view, the filter bar offers four filters plus a
global switch. You can combine them as you wish, and your selections are
remembered the next time you visit.

In the grid-with-map view only the location box and **Sort by** are shown.
**Work on**, **Difficulty**, **Global** and **Clear filters** are hidden there,
and the topic, difficulty and global settings are not applied, so the results
match the unfiltered markers on the map. Your settings are kept, and apply
again when you switch back to the grid or list view.

## By topic

The creator of a Challenge assigns a topic to it from a pre-defined list. Use
**Work on** to narrow the list to one of them:

- Anything
- Roads / Pedestrian / Cycleways
- Water
- Points / Areas of Interest
- Buildings
- Land Use / Administrative Boundaries
- Transit

For example, a Challenge that looks at fixing coastlines will have the topic
'Water', and a Challenge that looks at fixing the tagging of Burger King
restaurants will fall under 'Points / Areas of Interest'.

## By difficulty

When someone creates a Challenge, they decide if this is an **Easy**,
**Normal** or **Expert** level Challenge. Tasks in an Easy Challenge should be
fixable by mappers with little experience. Working on Expert level Challenges
requires advanced mapping skills and intimate familiarity with OSM tagging
practices. Leave the filter on **Any** to see all of them.

## By location

MapRoulette Challenges cover the entire world. To concentrate on one place,
type into the location box and pick a result — it searches
[Nominatim](https://nominatim.openstreetmap.org/), so countries, states,
cities, roads and many other named features all work. The place boundary is
drawn on the map and results are restricted to challenges that have at least
one task inside it.

In the grid-with-map view, panning and zooming the map narrows the results
further, so the location filter and the map extent combine: a challenge is
listed only if it has a task that is both in view and inside the place. In the
other two views the map extent is ignored.

Challenges flagged as global, which span very large areas, are left out of the
results by default. Turn on **Global** to include them. The selected place
still applies when it is on. The switch is only available in the grid and list
views.

## By text

Free-text search lives in the search box in the header rather than on the
filter bar. Press <kbd>⌘</kbd> <kbd>K</kbd> (or <kbd>Ctrl</kbd> <kbd>K</kbd>)
from anywhere to open it, then search challenges, projects, tasks, comments, or
jump straight to something by its ID. See
[Search prefixes](/documentation/searchbox-short-commands/) for the full
list of what it can do.

## Clearing filters

**Clear filters** resets the location, topic, difficulty and **Global**
filters to their defaults; your sort order and view are kept. Because filters
are remembered between visits, it's worth reaching for when a search
unexpectedly comes back empty.
