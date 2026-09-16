---
title: Solving Multiple Tasks Together
---

Many MapRoulette Challenges have Tasks that are geographically so close
together that it is more efficient to solve several of them as if they were one
Task. MapRoulette calls a group of tasks worked together a **bundle**, and the
tools for building one are built into the task map — there is nothing to add or
configure first.

### Building a bundle

Open a task, then use the **Work on multiple tasks** panel on the map. There
are two ways to add tasks to your selection:

- **Draw to add tasks** (or press <kbd>D</kbd>) and then click and drag a shape
  around the tasks you want. Press <kbd>Esc</kbd> to cancel while drawing.
- Select a nearby task marker on the map and choose **Add to Bundle** in the
  task panel.

The panel keeps a running count — *Working on 4 tasks* — and a task can be
taken back out again with **Remove from Bundle**. A bundle can hold up to 50
tasks; the panel says so and stops accepting more once you reach the limit.

The task you started from is the **primary** task of the bundle, and is marked
as such in the bundled task list on the **Instructions** tab.

### Working the bundle

Once tasks are bundled, completing the primary task completes all of them
together — you set one status, leave one comment, and every task in the bundle
receives it. Locking works the same way: locking the primary task locks the
whole bundle, which is why your Dashboard shows locked bundles as *n tasks*.

A few map controls help while you work:

- **Center to Bundle** fits the map to every task in the bundle rather than
  just the primary one
- <kbd>F</kbd> cycles between showing only the tasks you've selected and
  showing everything nearby
- **Show tasks from other challenges** brings in task markers that don't belong
  to this challenge, so you can see what else is around

If you're editing with the [inline iD editor](/documentation/rapid-editor/),
**Select All** in the bundled task list selects every bundled task's features
in iD at once.

### Undoing a bundle

**Work on only the primary task** (or press <kbd>Delete</kbd>) unbundles
everything and leaves you with the task you started on. **Reset to initial
bundle** restores the bundle as it was when the task loaded, which is useful if
the challenge itself shipped the tasks pre-bundled. Unbundling never deletes
tasks — it only separates them.
