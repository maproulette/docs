---
title: Rapid Editor
---

Most tasks can be edited without leaving MapRoulette, so you don't have to
bounce out to a separate application and back.

## The built-in iD editor

Once you've locked a task, choose **Edit in iD** at the top of its map to open
the iD editor inline, in place of the task map. The task's OSM features are
pre-selected for you, and the changeset comment is pre-filled from the
challenge, exactly as it would be if you had opened iD in a new tab.

### MapRoulette's controls

A small panel floats over the editor with MapRoulette's own controls. Drag it
by the grip on its left edge to move it anywhere on screen — it starts just
below iD's toolbar, and wherever you put it is remembered for next time. The
chevron beside the grip collapses it down to just the MapRoulette logo.

- **n unsaved changes** — appears once you have edits pending. Click it to see
  exactly what they are: every element created, modified or deleted, with each
  modified element's tags shown against how they looked before you started
- **Re-Center** — reset the view back to the task location
- **Select Tasks** — re-select this task's features in iD, handy after you've
  clicked elsewhere on the map
- **Focus** / **Show All** — hide everything except the task's features, or
  bring the rest of the map back. The editor opens with Focus on. Hidden
  features can't be clicked either, so it's a good way to work on a crowded map
  without selecting a neighbour by accident
- **Close editor** — switch back to the task map. The editor stays loaded in
  the background, so your unsaved edits are kept and are still there when you
  open it again

The task panel on the left also lists your unsaved edits as you work, so you
can see what you're about to submit without opening the editor's own save
dialog.

You still save your work through iD itself, and then set the task status in
MapRoulette as usual.

## Opening an external editor instead

The editor button in the task header opens the task in whichever editor you've
set as your default — **Edit in iD**, **Edit in JOSM**, **Edit in new JOSM
layer**, **Edit just features in JOSM**, **Edit in level0** or **Edit in
Rapid** — in a separate tab or application. The arrow beside it lists the same
editors under **Open this task in:**, each with its keyboard shortcut, and
under **Set Default Editor:** lets you change your default. See [Setting your
default OSM Editor](/documentation/setting-your-default-osm-editor/).

> Earlier versions of MapRoulette embedded the **Rapid** editor in the task
> screen. Rapid is now offered as an external editor only; the embedded editor
> is iD.
{: .legacy}

On [Tag Fix challenges](/documentation/tag-fix-challenges/) the editor button
opens the built-in iD editor whatever your default is, because MapRoulette
applies the challenge's suggested tags there for you. Picking another editor
from the arrow menu still opens it, but without the suggestion applied.
