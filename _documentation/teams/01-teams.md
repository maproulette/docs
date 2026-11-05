---
title: Managing Teams
---

MapRoulette offers a basic implementation of Teams that makes it possible to group together affiliated users, such as users in a local a mapping club or attendees at a mapathon. Anyone can start a new team and invite other users to join their team.

Teams live in the **Teams** block on your
[Dashboard](/documentation/your-dashboard/), which lists the teams you
belong to and any pending invitations. Selecting a team opens its own page.

> Note: Teams and their membership are public. Private teams are not supported.

### Starting a New Team

Use the **+** control in the dashboard's Teams block to create a team, and give
it:

- a **name**, which must be unique
- a **description**
- optionally an **avatar** — upload a PNG, JPEG, WebP or GIF, or link to an
  image URL instead. Square images look best

Admins and owners can change any of these later with **Edit** on the team's
page.

### Team Roles

A team member holds one of four roles. Each one can do everything the role
below it can:

**Owner** — deletes the team, and makes other members owners. Everything an
Admin can do.

**Admin** — edits the team's details, invites and removes members, and sets
their roles. Everything a Manager can do.

**Manager** — runs the team's work: creating, editing and deleting the projects
and challenges the team is responsible for.

**Member** — belongs to the team, sees it listed, and can request the team's
image (see below).

Admins and owners change a member's role from the dropdown beside their name on
the team page. Your own row has no role dropdown or remove button, so another
admin or owner has to change your role or remove you. There's no control for
leaving a team yourself.

Teams must always have at least one Owner, so the last one cannot be demoted or
removed. Handing out the Owner role is reserved to owners — admins run the
membership, but not the keys to the team itself.

> A member's role decides what they can do **to the team** and what they can do
> **with the team's work**. When a team is given a project or a challenge, the
> people who can act on it are its owners, admins and managers; plain members
> get nothing. See [Projects and Project
> Managers](/documentation/projects-and-project-managers/).

### Inviting members

**Invite** opens a dialog where you search for a mapper by OSM username and
pick the role to give them. They receive an invitation, which shows on their
dashboard until they act on it. In the meantime admins and owners see them
listed as **Invited** on the team page; other visitors see only members who
have joined.

### Accepting or Declining an Invitation

Been invited to join a team? Your pending invitations appear in the Teams block
on your Dashboard, each with **Accept** and **Decline**.

### The team's image

A team has one image, which the team's page lists under **Challenge image**.
It's shown on the cards of the projects and challenges the team owns. Anyone on
the team can **Request image** from the team's page — the button reads
**Request replacement** once the team already has an approved image. A super
admin reviews the request, and once **Approved** it replaces whatever the team
had before. An image awaiting review shows as **Awaiting review**, and can be
withdrawn by whoever requested it or by a team admin.

A team has only one image slot, so it can have only one request outstanding at
a time — withdraw the pending one to request a different image.

Until an image is approved, work owned by the team shows no picture. A card
with no image usually means the team's image is still awaiting review rather
than that something is broken.

### Giving a team your work

A project or a challenge can be owned by a team. Pick the team in the project or
challenge form; only teams whose work you run — where you are an owner, admin or
manager — are offered, so belonging to a team is not enough to publish under its
name.

Handing work to a team does two things: everyone who runs that team can manage
it, and the team's approved image becomes the picture on its card.

