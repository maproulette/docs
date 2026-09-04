---
title: Creating a Challenge
---

Creating a challenge starts with a good challenge idea. Good challenges have
tasks that:

- Are easy to solve (typically less than one minute)
- Do not require local knowledge
- Involve only one or two OSM objects

Let's work through an example. We will ask mappers to review `motorway_junction`
nodes in the United States that have `name` tags. This is uncommon in the U.S.
Often mappers will add a name tag that has the destination information on it, so
the information renders on the map.

This [Overpass query](https://overpass-turbo.eu/?Q=area%5Bname%3D%22United%20States%20of%20America%22%5D-%3E.a%3B%0Anode%5B%22highway%22%3D%22motorway_junction%22%5D%5B%22name%22%5D(area.a)%3B%0Aout%20meta%3B%0A&C=40.66202;-111.87756;12)
selects all these nodes.

```
area[name="United States of America"]->.a; node["highway"="motorway_junction"]["name"](area.a); out meta;
```

## Getting to the form

Challenges live inside projects, so you need a project first. Open the user
menu and choose **Manage**, then **Projects**. If you don't have one yet,
**Create Project** makes one; otherwise open the project that should hold your
new challenge and choose **Create challenge**.

You can also go straight to **Manage → Challenges → Create New Challenge** and
pick the project from the form's project picker.

## Filling in the form

The challenge form is a single page, in four sections.

### Project

Which project the challenge belongs to. You can only pick projects you manage.
(This is only asked when creating; to move an existing challenge later, use
**Move challenge** in its actions menu.)

### Basic information

- **Name** — a descriptive name. I used *Review named motorway junctions in
  USA*. A good title describes what the challenge is about in a few words. At
  least 3 characters.
- **Description** — some text describing in more words what the challenge is
  about. This field supports [Markdown](/documentation/markdown/) and
  appears on the challenge page when mappers browse for interesting challenges.
  I used *Motorway junction nodes are not commonly tagged with name. This
  challenge asks mappers to review those nodes, removing the name where it's not
  applicable.*
- **Instructions** — perhaps the most important text. Here you tell mappers
  exactly what task you want them to perform. Be specific and use links (this
  field supports Markdown as well) to the OSM wiki or other external sources
  where needed. This text is shown beside the map of the task location.
- **Difficulty** — **Easy**, **Normal** or **Expert**. Leave this at Normal
  unless your tasks are particularly easy or hard.

Description and Instructions are both required.

### Task data

Choose one of three sources for the challenge's tasks:

- **I want to provide an Overpass query** — Overpass QL that generates the
  tasks. See [Using Overpass to create
  Challenges](/documentation/using-overpass-to-create-challenges/) for
  important details and common pitfalls; in particular, don't use Overpass
  Turbo-specific syntax such as `{% raw %}{{geocodeArea:...}}{% endraw %}`, and test your query in
  Overpass Turbo first.
- **I want to upload a GeoJSON file** — a GeoJSON file from your computer.
  Standard GeoJSON and [line-by-line
  GeoJSON](/documentation/line-by-line-geojson/) are both supported.
- **I have a URL to the GeoJSON data** — a URL pointing directly at the raw
  GeoJSON file, not at a page linking to it. See [Hosting Remote GeoJSON with
  Gists](/documentation/gists-for-remote-geojson/).

You can also record the [date the data was
sourced](/documentation/defining-task-sourced-date/) here.

Make sure that your query or file only returns the features that you want
mappers to review, and ideally the number of objects should be no more than a
couple of thousand.

> The data source is fixed once the challenge is created. Editing a challenge
> shows the source read-only; to regenerate tasks from updated data, use
> [Rebuild Tasks](/documentation/rebuilding-challenge-tasks/).

### Challenge image

An optional image shown on this challenge's card. The images available to you
are the ones your [teams](/documentation/teams/) have had approved: any
team member can request an image from the team's page, and a super admin
reviews it before it can be used here.

### Basemap

Optionally force a base layer for this challenge's maps, overriding whatever
each mapper has chosen for themselves — useful when the tasks can only be
judged against particular imagery. See [Setting The Basemap Layer For Your
Challenge](/documentation/setting-basemap-for-challenge/).

### Task settings

- **OSM/External Id Property** — the feature property holding each task's
  identifier. Leave it blank to let MapRoulette detect it. See [Setting
  External Task Identifiers](/documentation/setting-external-task-identifiers/).
- **Preferred MR Tags (task completion)** — the tags the challenge suggests to
  mappers, with an option to accept only those tags. See [Using MapRoulette
  Tags](/documentation/using-maproulette-tags/).

### Automated Edits code of conduct

Before creating a challenge you must confirm that you have read and understand
OpenStreetMap's [Automated Edits code of
conduct](https://wiki.openstreetmap.org/wiki/Automated_Edits_code_of_conduct).
Make sure that your Challenge is designed to encourage careful human attention
to each task, in that spirit.

## After you submit

**Create Challenge** saves the challenge and starts building its tasks. If you
used an Overpass query, MapRoulette runs it in the background; depending on how
heavy the query is, this can take a few seconds to a couple of minutes. The
challenge page shows **Tasks Building…** with an elapsed timer and refreshes
itself as it progresses, then shows your tasks on a map with a task table and
challenge statistics.

From there you can:

- **Start challenge** to try it out yourself
- **Configure prioritization** to decide which tasks get served first — see
  [Prioritizing Tasks](/documentation/task-priority-rules/)
- Use **Make discoverable** in the challenge's actions menu when you're ready
  for it to appear in search results — a challenge is discoverable only when
  both it and its project are. See [Challenge Visibility and
  Discovery](/documentation/challenge-visibility-and-discovery/)
