---
title: The Task Screen
---

The task screen is where mappers do the actual work: task instructions and
history on one side, the map or the editor on the other. Rather than a grid of
widgets you assemble yourself, it is a fixed two-panel layout you can resize
to suit your screen.

### The two panels

- **Left — the task panel.** Everything about the task, in four tabs:
  - **Instructions** — the task's instructions (or the challenge's, if the
    task has none of its own), below a summary of any unsaved edits you have
    pending in the [built-in editor](/documentation/rapid-editor/)
  - **Features (n)** — the task's features and their properties: their OSM
    tags and anything else carried in the challenge's GeoJSON. When you're
    working on several tasks together, this tab lists every task in the bundle
    under **Bundled Tasks (n)**, with the task you started from marked
    **Primary**
  - **Data** — two collapsible sections: **OSM feature** (the OSM element the
    task points at, linked out to OpenStreetMap, plus an **OSM History at
    Location** link to recent edits around the task) and **GeoJSON** (the raw
    geometry, with a button to copy it)
  - **Comments (n)** — the task's comment and status history, and the box to
    add your own comment

  Above the tabs, the task header carries the task's status, the lock button,
  **Skip this task** and the editor button. The bottom of the panel holds
  **Map this task** and, once you've locked the task, the completion buttons.

- **Right — the map, or the editor.** The task map, which the
  [inline iD editor](/documentation/rapid-editor/) replaces while you're
  editing.

### Resizing

Drag the handle between the two panels to give either one more room; the task
panel can take between 20% and 50% of the width.

The map has its own space-saving controls: the control stack collapses out of
the way, task markers can be hidden with <kbd>M</kbd>, and marker clustering
can be toggled. While the [built-in editor](/documentation/rapid-editor/) is
open, MapRoulette's controls float over it in a panel you can drag wherever you
like. The challenge page also has a **Show Map** / **Hide Map**
toggle, for when you'd rather browse without one.

> Saved, named, importable and exportable widget layouts — and the **Edit
> Layout** / **Add Widget** controls that went with them — are not part of the
> rebuilt interface. Layouts you exported from an older version of MapRoulette
> can't be imported here.
{: .legacy}
