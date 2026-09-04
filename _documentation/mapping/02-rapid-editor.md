---
title: Editing inside MapRoulette
---

Most tasks can be edited without leaving MapRoulette, so you don't have to
bounce out to a separate application and back.

## The built-in iD editor

On a task's map, choose **Edit in iD** to open the iD editor inline, in place
of the task map. The task's OSM features are pre-selected for you, and the
changeset comment is pre-filled from the challenge, exactly as it would be if
you had opened iD in a new tab.

### MapRoulette's controls

A small panel floats over the editor with MapRoulette's own controls. Drag it
by the grip on its left edge to move it anywhere on screen — it starts just
below iD's toolbar, and wherever you put it is remembered for next time. The
chevron beside the grip collapses it down to just the MapRoulette logo.

- **Unsaved changes** — how many elements you have pending. Click it to see
  exactly what they are: every element created, modified or deleted, with each
  modified element's tags shown against how they looked before you started
- **Re-Center** — reset the view back to the task location
- **Select Tasks** — re-select this task's features in iD, handy after you've
  clicked elsewhere on the map
- **Focus** / **Show All** — hide everything except the task's features, or
  bring the rest of the map back. Hidden features can't be clicked either, so
  it's a good way to work on a crowded map without selecting a neighbour by
  accident
- **Close editor** — return to the task map. If you have unsaved edits you'll
  be asked to confirm

The task panel on the left also lists your unsaved edits as you work, so you
can see what you're about to submit without opening the editor's own save
dialog.

You still save your work through iD itself, and then set the task status in
MapRoulette as usual.

## Opening an external editor instead

The editor button in the task actions opens the task in whichever editor you've
set as your default — iD, JOSM, level0 or Rapid — in a separate tab or
application. See [Setting your default OSM
Editor](/documentation/setting-your-default-osm-editor/).

> Earlier versions of MapRoulette embedded the **Rapid** editor in the task
> screen. Rapid is now offered as an external editor only; the embedded editor
> is iD.
{: .legacy}

[Tag Fix challenges](/documentation/tag-fix-challenges/) always use the
built-in iD editor, whatever your default is, because MapRoulette applies the
challenge's suggested tags there for you.
