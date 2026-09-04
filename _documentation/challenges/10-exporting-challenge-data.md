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
  It starts on your own browser's timezone; leave it on UTC±00:00 for GMT

The filters currently applied to the task table — status, priority and any
[property filter](/documentation/filtering-the-task-list-by-properties/) —
are applied to the export as well, so what you see in the table is what you
get in the file.

> Very large challenges export the first 10,000 matching tasks.

## Exporting a whole project

Go to **Manage → Projects** (from the user menu), find the project, and choose
**Export CSV** from its actions menu — it's also on the project's own
management page. The export covers the tasks of every challenge in that
project, and downloads as `project-<name>-tasks.csv`.

Among other things the export carries each task's
[MR Tags](/documentation/using-maproulette-tags/), which is what makes
asking mappers for tags worthwhile in the first place.

