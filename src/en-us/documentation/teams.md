---
layout: base
title: Managing Teams
description: "MapRoulette offers a basic implementation of Teams that makes it possible to group together affiliated users, such as users in a local a mapping club or attendees at a mapathon."
tags: documentation
eleventyNavigation:
  key: Managing Teams
  parent: Working as a Team
  order: 0
---

MapRoulette offers a basic implementation of Teams that makes it possible to group together affiliated users, such as users in a local a mapping club or attendees at a mapathon. Anyone can start a new team and invite other users to join their team.

Teams will likely be enhanced with various features over time, but in v3.6.2 the primary purpose is to make it easier to grant project permissions to groups of users. When permissions are granted to a Team, each member of the team will also be conferred those permissions for as long as they are members of the team.

### Starting a New Team
To start a team, go to the Dashboard page and add the Teams widget if you haven't already. Then click the cog icon and choose Start a New Team. Once you've provided a team name and description, and saved your new team, you can click on it and start inviting users to join your team.

> Note: Teams and their membership are public. Private teams are not supported.

### Team Roles
Members of teams have roles on the team itself: Admin, Write, or Read. Administrators have full management access to the team: inviting and removing members, editing the team name and description, and even deleting the team. The Read role can be thought of as a "standard" member who can see the team and all team members, and is able to leave the team, but otherwise has no management capability. In v3.6.2 the Write role does not confer any additional privilege over the Read role, but it may in future.

> Note that a team member's role only affects their ability to manage the team itself and has no bearing on project permissions conferred to them when a Team is added to a project. All team members are granted the same project permissions through their team regardless of their role on the team.

Teams must have at least one Administrator. If you wish to leave a team you created, you will first need to grant another team member the Admin role if you haven't already.

### Adding a Team to a Project
The *Project Managers* widget on the Manage Project page has been enhanced in v3.6.2 to allow Teams to be added to projects. You do not have to be a member of a Team to add it to your project.

> :warning: When you add a Team to a project, you are conferring the chosen project role to every member of the Team, including any future members who may be invited later.

As before, projects must have at least one user with an Admin role. A Team cannot be the sole administrator of a project.

### Accepting or Declining an Invitation
Have you been invited to a join a team? Go to your Dashboard, add the Teams widget if you haven't already, and then click the "..." control next to the team name to see options for joining the team or declining the invitation. 
