---
title: Tag Fix Challenges
---

Most MapRoulette tasks ask you to go and fix something yourself. A **Tag Fix**
task is different: the challenge already knows what it thinks the change should
be, and hands it to you ready-made. Your job is to judge whether it's right.

Consider this aerial image of a Wendy's restaurant:

![](/media/tagfix.png){:width="500"}

You can see from the aerial imagery that this restaurant has a `drive_through`:
cars snake around the structure on a dedicated lane. But the restaurant does not
have `drive_through=yes` in OSM. That is exactly the kind of small, verifiable
change a Tag Fix challenge is built for.

## Working a Tag Fix task

When you lock a Tag Fix task, MapRoulette opens the built-in **iD** editor for
you automatically and applies the challenge's suggested tags there as unsaved
edits. It uses iD whatever editor you normally prefer, because iD is the one
MapRoulette can drive on your behalf.

Nothing is submitted for you. The changes sit in iD exactly as though you had
typed them, so you can:

- look them over on the map, with the affected element already selected
- correct a value the challenge got slightly wrong
- undo one you disagree with
- add something the challenge missed

and then save them as your own edit, through iD, and set the task status as
usual.

## Seeing what changed

The task panel on the left shows the change in two stages.

**Before the editor opens** it lists what the challenge suggests, compared
against the element's current tags in OpenStreetMap — so a suggestion the
element already satisfies is shown as such rather than as a change.

**Once the editor is open** it switches to your unsaved edits: everything
currently pending, whether the challenge suggested it or you did it yourself.
Each modified element's tags are shown against how they looked before you
started.

### Reset

While a Tag Fix task is open in the editor, the panel offers a **Reset**. It
restores the challenge's suggestion exactly: the element's original tags with
the suggested change applied, discarding anything else you did to that element.

The panel tells you which state you're in — whether the elements still match
what the challenge suggests, or how many have drifted from it because you undid
something, mistyped a value, or edited further.

Reset only touches the elements the challenge names. Edits you made to other
elements are yours and are left alone.

## Working several at once

If you [bundle tasks together](/documentation/solving-multiple-tasks-together/),
every bundled Tag Fix task's suggestion is applied. Adding a task to the bundle
applies its suggestion; removing one takes its suggestion back out again,
leaving any editing you did to that element yourself in place.

## Limits

Only tag changes to existing elements are applied for you. A challenge can also
describe creating or deleting elements, and those are deliberately left for you
to do by hand — applying them automatically would be a much larger claim than
"these tags look wrong".

> There is no longer a supported way to create a Tag Fix challenge from the
> MapRoulette interface. Tag Fix challenges are a kind of Cooperative
> Challenge, and cooperative challenges cannot be created here.
{: .legacy}
