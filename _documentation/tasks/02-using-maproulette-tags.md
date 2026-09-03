---
title: MapRoulette Tags
---

MapRoulette Tags, often called **MR Tags**, are used for custom filtering and
grouping of tasks within a challenge. MR Tags are exclusive to MapRoulette and
are not used or visible in other editors. If MR Tags are needed, the challenge
manager will typically say so in the challenge or task instructions.

### How the data is used, with an example

If you have a challenge in an area where there may not be enough high-quality
imagery for mappers to complete all the tasks successfully, you can ask mappers
to add a tag like `bad-imagery` when they encounter that situation. Later, when
you download the [tasks export](/documentation/exporting-challenge-data/),
you can analyse the tags to find out which areas lacked good imagery, and
potentially use that information to start something like an OpenDroneMap +
OpenAerialMap project 🙂.

<div class="figure-row">
    <img src="/media/bad-imagery.png" alt="A task where imagery is too poor to map from">
    <img src="/media/mr-tags-11.png" alt="Tags being added to a task">
    <img src="/media/mr-tags-10.png" alt="Tags in the task export">
</div>

### Adding MR Tags

Mappers and reviewers add MR Tags in two places:

- On the task panel's **Task** tab, the task's tags are listed with an **Edit
  tags** control (or **No tags** if it has none yet). That opens the **Edit
  task tags** dialog, where you type a tag and press <kbd>Enter</kbd> or
  <kbd>,</kbd> to add it, and <kbd>Backspace</kbd> to remove the last one. As
  you type, MapRoulette suggests tags already in use.
- In the completion dialog, the **Tags (Optional)** field takes several tags
  separated by commas, so you can tag and complete a task in one go.

Tags can be edited while a task is still open (created, skipped or can't
complete), and while its review is still in play.

### Preferred MR Tags

A challenge can nominate the tags it would rather mappers used. Set them in
**Task settings** when creating or editing the challenge: **Preferred MR Tags
(task completion)** and **Preferred MR Tags (review)**, each a comma-separated
list, with a checkbox beside it to accept only those tags. Those appear
above the tag box as **Popular in this challenge:**, as chips you can click to
add rather than typing. There are two sets: one recommended during task
completion, and one recommended during review.

### Restricting MR Tags

A challenge can also be set to accept *only* its preferred tags. When it is,
anything you type that isn't in the challenge's list is refused, so the tags
that come back in the export stay consistent.

