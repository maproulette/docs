---
title: Tag Fix Challenges
---

MapRoulette serves you quick tasks that make it easy for you anyone to find something meaningful to map. The way that worked until now required loading the data related to the Task into JOSM or iD, fixing it there, and returning to MapRoulette to say you fixed it, and then move on.

Now, we’re introducing a new type of Task: the **Tag Fix**. In a Tag Fix Task, MapRoulette will present the suggested fix to you, and all you need to do is click Yes to agree with the fix, and the change will be applied to OSM directly.

Let’s look at an example. Consider this aerial image of a Wendy’s restaurant:

![](/media/tagfix.png){:width="500"}


You can see from the aerial imagery that this restaurant has a `drive_through`: you can see cars snaking around the structure on a dedicated lane.

However, this restaurant does not have `drive_through=yes` in OSM. A simple fix that MapRoulette Tag Fixes are ideally suited for.

As an example, I created a [Tag Fix Challenge](https://maproulette.org/browse/challenges/9411) to add the `drive_through=yes` tag to Wendy’s restaurants that have drive-through lanes but are not tagged as such in OSM yet. When you go to the Challenge and get your first Task, you will see a screen much like this one:

![](/media/tagfix2.png)

At the top is the suggested change to OSM tags. By default you only see what will be changed. In this case there is a blue ➕ indicating that a new tag is proposed. You have the option to see all tags as well.

The Completion options are different. You can click YES to accept the tag change, which will then be applied to OSM. If you click NO, nothing happens and you will be given a new task.

I invite you to try it out and leave feedback here or email at [maproulette@maproulette.org](mailto:maproulette@maproulette.org). Thanks and happy mapping!

For this to work, MapRoulette needs additional permissions from your OSM account, to modify the map on your behalf. You may need to log out and log back in if you have trouble.

## How tag fixes work in MapRoulette

Opening a Tag Fix task takes you straight to the built-in **iD** editor, whatever
editor you normally use — it is the one MapRoulette can drive on your behalf.
The challenge's proposed tags are applied there for you as unsaved edits.

Nothing is submitted on your behalf. The changes sit in iD exactly as though
you had typed them, so you can look them over on the map, correct a value,
undo one you disagree with, or add something the challenge missed, then save
them as your own edit.

Elements the challenge proposes creating or deleting are not applied
automatically — only tag changes to existing elements are.

> There is no longer a supported way to create a Tag Fix challenge from the
> MapRoulette interface. Tag Fix challenges are a kind of Cooperative
> Challenge, and cooperative challenges cannot be created here.
{: .legacy}
