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
  Discovery](/en-US/documentation/challenge-visibility-and-discovery/)),
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

> Adding and removing project managers is not available in the current
> MapRoulette frontend — there is no Project Managers panel on the project
> page, and teams cannot be granted project roles. The roles themselves still
> govern what you can do, and can be granted through the [HTTP
> API](https://maproulette.org/docs/swagger-ui/index.html?url=/assets/swagger.json&docExpansion=none).
{: .legacy}

## Tips

- **Define scope early.** Use a stable naming pattern (region, theme, version)
  and keep each project focused on one clear objective.
- **Publish intentionally.** Keep projects non-discoverable while iterating;
  turn discoverable on only after instructions and QA checks are validated.
- **Share ownership.** Arrange co-managers before launch so triage, support and
  archival responsibilities are covered.
