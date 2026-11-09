---
title: Editing inside MapRoulette
---

MapRoulette has a built-in iD editor, so you can submit map edits within MapRoulette instead of being directed to a separate application.

The built-in editor is available on most Challenge Task pages. Simply start a task and click **Edit in iD** at the top of the map. You'll now be able to make your edit right in the task screen, without need to go to a separate web page. You still save your work through iD itself, and then set the task status in MapRoulette as usual.

![The built-in iD editor open in the task screen, with the Re-Center, Select Tasks, Show All and Close editor bar](/media/mr4-built-in-editor.png){: .only-light}
![The built-in iD editor open in the task screen, with the Re-Center, Select Tasks, Show All and Close editor bar](/media/mr4-built-in-editor-dark.png){: .only-dark}

**Close editor** switches back to the task map. Your unsaved edits are kept, and are still there when you open the editor again.

If you prefer to use Rapid, JOSM or another external editor, see [Setting your default OSM Editor](/documentation/setting-your-default-osm-editor/).

## Tag Fix tasks

Some challenges suggest a tag change for you to check instead of asking you to find the fix yourself. Let’s look at an example from a [Tag Fix Challenge](https://maproulette.org/browse/challenges/9411) that adds `drive_through=yes` to Wendy’s restaurants. Consider this aerial image of a Wendy’s restaurant:

![](/media/tagfix.png){:width="500"}

You can see from the aerial imagery that this restaurant has a `drive_through`: you can see cars snaking around the structure on a dedicated lane.

However, this restaurant does not have `drive_through=yes` in OSM. A simple fix that MapRoulette Tag Fixes are ideally suited for.

When you start a Tag Fix task, MapRoulette opens the built-in iD editor and applies the suggested tags as unsaved edits. Look them over, correct or undo anything that's wrong, then save through iD and set the task status as usual. The task panel shows what changed, and **Reset** puts the editor back to the original suggestion.

To create one, see [Tag Fix Challenges](/documentation/tag-fix-challenges/).

