---
title: Reviewing
---

As you fix things via MapRoulette, you can ask for someone else to review your
work; and if you are a more experienced mapper, you can volunteer to review the
tasks that your fellow mappers have submitted.

> Reviewing is not available in the current MapRoulette frontend. There is no
> review queue, no way to ask for your own work to be reviewed, and no
> approve/reject controls on a task. This page describes how reviewing works
> for when it returns.
>
> Some review *data* still surfaces, which is why you'll see the word around
> the app: review outcomes arrive as
> [notifications](/documentation/notifications-and-email/), a mapper's
> profile shows **Reviews Received** and **Reviews Performed** counts, and
> challenge managers can reassign open task reviews in bulk from the task
> table. None of those let you actually review a task.
{: .legacy}

### What reviewing is for

When you review a task, your job is to determine whether the mapper solved the
task the way they said they would. If it is marked fixed, check that the
problem described in the task was indeed fixed. If the mapper marked it as
**Not an Issue** or **Already Fixed**, verify that there was in fact nothing to
do in OSM.

If the original mapper's work looks fine, you can **Approve** the task. You can
also make additional edits to complete or fix their work and mark the task
approved with fixes. Finally, if you want to give the task back to the original
mapper, you can **Reject** it. Whatever you choose, you can leave a comment
that will be visible to the original mapper.

Especially when you reject a task, a comment telling the original mapper what
they need to improve is very important. If they didn't fix the task in the
first place, chances are that they won't be able to fix it a second time
without some help.

### Review outcomes and notifications

Review results reach the mapper as
[notifications](/documentation/notifications-and-email/) in the
**Reviews** category:

- **Task Approved** — the work was accepted
- **Revision Requested** — the reviewer asked for the work to be revised
- **Review Requested** — a review has been requested of you
- **Review Revised** — the work was accepted, but the reviewer made some edits
- **Meta-Review** — a review has itself been reviewed

### Seeing your review history

A mapper's public profile has two blocks that summarise reviewing over a time
range you choose — **Reviews Received** (the outcomes of reviews of their own
work) and **Reviews Performed** (the outcomes of reviews they carried out).
These are the one part of reviewing that is present today, populated from
review history recorded earlier.

### Adding tags during review

Challenge managers can nominate a separate set of
[MR Tags](/documentation/using-maproulette-tags/) for reviewers, distinct
from the ones suggested to mappers.

### Tools that come in handy

The **OSM** tab in the task panel links out to the task's changeset on
OpenStreetMap, to [OSMCha](https://osmcha.org/) for detailed changeset
analysis, and to Overpass Turbo to query the changeset's data — plus the
history of the task's own OSM element and recent edits in the surrounding area.
