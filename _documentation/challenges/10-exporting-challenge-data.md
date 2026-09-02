---
title: Exporting Challenge Data
---

MapRoulette lets managers download the task data for a whole project as a CSV
file, suitable for spreadsheet applications.

Go to **Manage → Projects** (from the user menu), find the project, and choose
**Export CSV** from its actions menu — it's also on the project's own
management page. The export covers the tasks of every challenge in that
project, and downloads as `project-<name>-tasks.csv`.

Among other things the export carries each task's
[MR Tags](/documentation/using-maproulette-tags/), which is what makes
asking mappers for tags worthwhile in the first place.

> Per-challenge exports, GeoJSON exports and the per-export timezone selector
> are not part of the current frontend. Timestamps in the CSV are in UTC. For
> anything more specific, the [HTTP
> API](https://maproulette.org/docs/swagger-ui/index.html?url=/assets/swagger.json&docExpansion=none)
> exposes the same task data — as do the
> [Python](https://github.com/osmlab/maproulette-python-client) and
> [Java](https://github.com/osmlab/maproulette-java-client) clients.
{: .legacy}
