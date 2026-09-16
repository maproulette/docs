---
title: Bulk Actions
---

When you're managing a challenge, most changes you need to make across many
tasks at once can be made from the challenge's task table rather than one task
at a time.

## Selecting tasks

Open **Manage** for your challenge to reach the tasks explorer. Narrow the
table with the **Status** and **Priority** filters and the sort control, then
use the checkbox on each row —
or the checkbox in the header, which selects every task currently visible — to
build a selection. A toolbar appears showing **_n_ selected**.

> The header checkbox selects the *visible* tasks, which is the current page of
> the filtered table, not every task in the challenge. Narrow with the filters
> first if you want to be sure of what you're acting on.

## Available actions

| Action            | What it does |
| ----------------- | ------------ |
| **Change status** | Sets every selected task to a status you pick (Created, Fixed, False Positive, Skipped, Already Fixed, Can't Complete, Disabled) |
| **Tag**           | Applies the [MR Tags](/documentation/using-maproulette-tags/) you enter to every selected task |
| **Archive** / **Unarchive** | Archives the selected tasks, or brings them back |
| **Reassign**      | Reassigns the selected tasks' reviews to a reviewer you search for. Only tasks whose reviews are still open are updated |
| **Clear lock**    | Releases any active locks. Mappers currently working on those tasks may lose their in-progress session |
| **Delete**        | Permanently removes the tasks along with their comments, reviews and tags |

Each action confirms before it runs, and reports how many tasks it actually
changed — a bulk action can partially succeed if you lack permission on some of
the selected tasks.

**Delete cannot be undone.** Neither can clearing locks, though mappers can
simply lock the task again.

## Changing several challenges at once

Editing a batch of challenges through a single form is not part of the current
frontend. Instead, each challenge row — on **Manage → Challenges** and on a
project's page — has an actions menu with the per-challenge operations:
pause/resume, archive/unarchive, pin, make discoverable, edit, move, clone,
[rebuild tasks](/documentation/rebuilding-challenge-tasks/), enable or
disable, and delete.
