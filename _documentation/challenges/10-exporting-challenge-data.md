---
title: Exporting Challenge Data
---

MapRoulette lets managers download task data, either for a single challenge or
for a whole project.

## Exporting one challenge

Open the challenge's management page and choose **Export** above the task
table. You can pick:

- **Format** — CSV, one row per task, or GeoJSON, carrying the task geometries
  and their properties
- **Timestamp timezone** — the offset that timestamp columns are rendered in.
  It starts on your own browser's timezone; choose UTC±00:00 for GMT

Then choose **Download**.

The filters currently applied to the task table — status, priority and any
[property filter](/documentation/filtering-the-task-list-by-properties/) —
are applied to the export as well, so what you see in the table is what you
get in the file.

## Exporting a whole project

Go to **Manage → Projects** (from the user menu), find the project, and choose
**Export CSV** from its actions menu. The export covers the tasks of every
challenge in that project, and downloads as `project-<name>-tasks.csv`.

CSV exports still include a **Tags** column, and GeoJSON exports an `mr_tags`
property. MapRoulette no longer asks mappers to tag tasks, so these only hold
tags that were added to tasks in earlier versions of MapRoulette.

