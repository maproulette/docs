---
title: Projects and Project Managers
---

Projects are how challenges are organised: every challenge belongs to exactly
one project, and permissions on the project decide who can manage the
challenges inside it.

## Managing your projects

**Manage → Projects** (from the user menu) lists the projects you manage. From
there you can:

- **Create Project** — a new project takes a name and a description
- open a project to see its challenges, its statistics, and its **Project
  Playbook** of setup advice
- **Create challenge** inside it
- **Edit project**, **Pin project**, **Archive project**, **Enable** or
  **Disable** it (see [Challenge Visibility and
  Discovery](/documentation/challenge-visibility-and-discovery/)),
  **Export CSV** of its tasks, or **Delete project**

Deleting a project deletes all of its challenges and their tasks, and cannot be
undone.

A challenge can be moved between projects you manage with **Move challenge** in
the challenge's actions menu.

## Project roles

Project permissions are granted per user (or per team) with one of three roles:

**Read** — view the project overview page and the challenges under the project.

**Write** — assist with managing existing challenges and their statuses.

**Admin** — complete access to managing, editing or deleting the project, plus
the ability to add and remove other managers and change their privileges.

A project always requires at least one Admin, so an admin can only be demoted
or removed once another user holds the Admin role.

### Adding and removing managers

The **Project managers** panel on the project's management page lists everyone
with a role on the project, and the teams granted one. From there you can:

- search for a mapper by their OpenStreetMap username, pick the role to give
  them, and add them
- change an existing manager's role from the dropdown beside their name
- remove a manager, or a team, with the bin icon

Granting a [team](/documentation/teams/) a role gives that role to every
member, which is usually easier than adding people one at a time. A grantee who
somehow holds more than one role is shown as the strongest of them.

## Tips

- **Define scope early.** Use a stable naming pattern (region, theme, version)
  and keep each project focused on one clear objective.
- **Publish intentionally.** Keep projects non-discoverable while iterating;
  turn discoverable on only after instructions and QA checks are validated.
- **Share ownership.** Arrange co-managers before launch so triage, support and
  archival responsibilities are covered.
