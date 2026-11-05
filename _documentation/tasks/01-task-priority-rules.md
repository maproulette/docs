---
title: Prioritizing Tasks
---

Tasks within a challenge can be prioritized by challenge managers as high, medium, or low priority. Available higher priority tasks will generally be served to mappers ahead of lower priority tasks. (See below for details about how rules are applied.)

Tasks are prioritized using priority rules that match against either task feature properties (such as OSM tags) or their geographic location. The rules are setup during challenge creation, and can be updated by editing the challenge. Updated rules are immediately reapplied when the edited challenge is saved, but it can take several minutes for that reprioritization process to finish on the server.

In addition, MapRoulette offers an editable "default" priority that will be applied to *any task that does not explicitly match any priority rule group*. That is, tasks that match neither the configured high, medium, nor low priority rule groups will receive the default priority. If no priority rules are setup, then all tasks will receive the default priority.

Each property-based priority rule is setup with a data type, the name of the property to check, a comparison operator, and a desired property value. For example, a rule setup using `string` `building` `equals` `yes` would match tasks with a `building` tag set to `yes`. The available comparison operators will change depending on the type. For example, an `integer` type will have numeric operators like `>` and `<` whereas a `string` type will have textual operators like `equals` and `contains`.

Multiple rules can be setup as a group for a given priority. Those rules are then either ANDed together (*all* rules in the group must positively match a task's properties for the task to be considered a match) or ORed together (*any* rule in the group must positively match a task's properties for the task to be considered a match). Furthermore, rules can be nested for greater granularity by choosing the "nested rule" type for a rule.

#### How Rules Are Applied
In general, higher priority tasks will be served to mappers ahead of lower priority tasks. So, until there are no high priority tasks left, mappers working on this challenge will only be served high priority tasks. Then, until there are no normal priority tasks left, mappers will only be served normal priority tasks. Finally, mappers will be served the low priority tasks, until the Challenge's tasks are exhausted.

Please note that tasks that are marked "Too Hard" with higher priority will still be served before any lower priority tasks. The underlying assumption is that a more experienced mapper will still be able to resolve a task that is marked by someone else as "Too Hard". We are [revisiting this assumption and considering implementing a feature](https://github.com/osmlab/maproulette3/issues/217) that lets the Challenge author set the number of times a task that is marked "Too Hard" is recycled.

