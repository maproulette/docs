---
title: Reviewing
---

As you fix things via MapRoulette, you can ask for someone else to review your
work; and if you are a more experienced mapper, you can volunteer to review the
tasks that your fellow mappers have submitted.

> In the current MapRoulette frontend, the reviewing workflow is provided by
> the **MapRoulette Review plugin** rather than being built into the core
> interface. Some deployments load it for everyone; otherwise you add it
> yourself from **Account Settings → Plugins**. Without it, the review queue
> and the review controls on a task are not shown.
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
[notifications](/en-US/documentation/notifications-and-email/) in the
**Reviews** category:

- **Task Approved** — the work was accepted
- **Revision Requested** — the reviewer asked for the work to be revised
- **Review Requested** — a review has been requested of you
- **Review Revised** — the work was accepted, but the reviewer made some edits
- **Meta-Review** — a review has itself been reviewed

### Seeing your review history

Your [public profile](/en-US/documentation/your-dashboard/) has two blocks that
summarise reviewing, over a time range you choose:

- **Reviews Received** — the outcomes of reviews of your own work
- **Reviews Performed** — the outcomes of reviews you carried out

### Adding tags during review

Challenge managers can nominate a separate set of
[MR Tags](/en-US/documentation/using-maproulette-tags/) for reviewers, distinct
from the ones suggested to mappers.

### Tools that come in handy

The **OSM** tab in the task panel links out to the task's changeset on
OpenStreetMap, to [OSMCha](https://osmcha.org/) for detailed changeset
analysis, and to Overpass Turbo to query the changeset's data — plus the
history of the task's own OSM element and recent edits in the surrounding area.
