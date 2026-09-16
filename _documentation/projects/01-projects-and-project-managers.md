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

Project permissions are granted per user with one of three roles. A team brings
its own roles instead — see [Attaching a team](#attaching-a-team):

**Read** — view the project overview page and the challenges under the project.

**Write** — assist with managing existing challenges and their statuses.

**Admin** — complete access to managing, editing or deleting the project, plus
the ability to add and remove other managers and change their privileges.

A project always requires at least one Admin, so an admin can only be demoted
or removed once another user holds the Admin role.

### Adding and removing managers

**Managers and teams**, in the project's actions, lists everyone with a role on
the project and every team attached to it. From there you can:

- search for a mapper by their OpenStreetMap username, pick the role to give
  them, and add them
- change an existing manager's role from the dropdown beside their name
- search for a [team](/documentation/teams/) by name and attach it
- remove a manager, or detach a team, with the bin icon

### Attaching a team

Attaching a team is usually easier than adding people one at a time, and it
keeps up with the team as its membership changes.

There is no role to pick for a team, because a team already has roles of its
own. What each person can do on the project follows the role they hold **in the
team**:

| Their role in the team | What they get on the project |
| --- | --- |
| Owner | Admin |
| Admin | Admin |
| Manager | Write |
| Member | nothing |

Belonging to a team is not the same as running its work, so plain members get
no access to a project their team is attached to.

A grantee who somehow holds more than one role is shown as the strongest of
them.

### Teams that own a project

Attaching a team is different from giving a project **to** a team. A project can
have one owning team, chosen in the project form, and that team's image becomes
the picture on the project's card. Ownership is about whose project it is;
attachment is about who is helping run it. Both give access by the same rule
above.

## Tips

- **Define scope early.** Use a stable naming pattern (region, theme, version)
  and keep each project focused on one clear objective.
- **Publish intentionally.** Keep projects non-discoverable while iterating;
  turn discoverable on only after instructions and QA checks are validated.
- **Share ownership.** Arrange co-managers before launch so triage, support and
  archival responsibilities are covered.
