---
title: Super Admin
---

Users flagged as super users on the server get a **Super Admin** entry in the
user menu, with tools that apply across the whole installation rather than to a
single project or challenge.

Super user status is granted on the server, not from within MapRoulette:
either by listing the account's OSM id in the backend's `MR_SUPER_ACCOUNTS`
setting, or by an existing super user calling the backend's
`PUT /api/v2/superuser/:userId` endpoint with the account's MapRoulette user id.
There is no screen in the app for either.

## User management

Lists every account on the installation, a page at a time, showing each
user's role and when they joined. The search box filters only the page you are
looking at — **Search this page by name or email...** — so use **Previous**
and **Next** to look through the rest. Each row's **View** button opens that
user's MapRoulette profile. Accounts can't be created or edited from here.

## Challenge reports

The queue of [challenge reports](/documentation/challenge-flagging/) — mappers'
reports that a challenge is poorly designed and is causing incorrect edits.

Each report shows the challenge and its project, who reported it and when, the
report text, and the reporter's email address if they volunteered one. That
address is only ever shown here.

Filter the queue by status — **open**, **actioned** or **dismissed** — and,
with **Only challenges that are still active**, hide reports against challenges
that have since been archived or deleted. It opens on the open reports for still-active
challenges, which is the set worth working through.

An open report can be opened in the challenge browser or its management page,
and is closed out as either **Mark actioned** — the concern was valid and
something was done about it — or **Dismiss**. Either decision takes an optional
note, and the report then records who decided it and when.

## Team challenge images

The queue of images teams have requested for their challenges, oldest first.
Each request shows the image, the team, who requested it and when. Images are
reviewed here before they are used, so an installation isn't hosting arbitrary
uploads.

Each request is either **Approve**d or **Reject**ed, with an optional note. A
team carries a single image, so approving a request replaces the one that team
is using, including on challenges already showing it. See
[Teams](/documentation/teams/).

> The overview dashboard links to the three screens above. Its other cards —
> challenge and project administration, plugins, analytics and platform
> settings — lead to placeholder pages that say they are coming soon, and the
> **Database** card's button is disabled and reads **Coming Soon**. They are
> visible but do nothing yet.
{: .legacy}
