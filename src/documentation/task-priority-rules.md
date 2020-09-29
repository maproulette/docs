---
layout: base
title: Prioritizing Tasks
description: 'Tasks within a challenge can be prioritized by challenge managers as high, medium, or low priority by way of priority rules'
tags: documentation
eleventyNavigation:
  key: Prioritizing Tasks
  parent: Creating and Managing Challenges
  order: 10.5
---

Tasks within a challenge can be prioritized by challenge managers as high, medium, or low priority. Available higher priority tasks will generally be served to mappers ahead of lower priority tasks.

Tasks are prioritized using priority rules that match against either task feature properties (such as OSM tags) or their geographic location. The rules are setup during challenge creation, and can be updated by editing the challenge. Updated rules are immediately reapplied when the edited challenge is saved, but it can take several minutes for that reprioritization process to finish on the server.

In addition, MapRoulette offers an editable "default" priority that will be applied to *any task that does not explicitly match any priority rule group*. That is, tasks that match neither the configured high, medium, nor low priority rule groups will receive the default priority. If no priority rules are setup, then all tasks will receive the default priority.

Each property-based priority rule is setup with a data type, the name of the property to check, a comparison operator, and a desired property value. For example, a rule setup using `string` `building` `equals` `yes` would match tasks with a `building` tag set to `yes`. The available comparison operators will change depending on the type. For example, an `integer` type will have numeric operators like `>` and `<` whereas a `string` type will have textual operators like `equals` and `contains`.

It is important that the data type on the rule is set correctly for the type of data found on the property.

| Choose    | For                                    |
|:----------|:---------------------------------------|
| String    | Text                                   |
| Integer   | Whole numbers                          |
| Double    | Decimal numbers                        |
| Long      | Really big whole numbers (> 4 billion) |

Multiple rules can be setup as a group for a given priority. Those rules are then either ANDed together (*all* rules in the group must positively match a task's properties for the task to be considered a match) or ORed together (*any* rule in the group must positively match a task's properties for the task to be considered a match). Furthermore, rules can be nested for greater granularity by choosing the "nested rule" type for a rule.

> Note that if a task matches multiple priority groups, it will be assigned the *highest* matching priority. For example, if it matches both the high-priority and medium-priority rules, it will be assigned high priority

##### Matching Multiple Tag Values with a Single Rule
If you want to match a single tag against multiple possible values (such as `highway` equal to either `trunk` or `primary`), one option is to setup a separate rule for each value and then OR them together. But MapRoulette offers a shortcut whereby you can include multiple values separated by commas (e.g. `string` `highway` `equals` `trunk,primary`). When using "positive" operators like `equals` or `contains`, the comma-separated values will be OR'd together; when using "negative" operators like `doesn't equal` or `doesn't contain` they will be AND'd together (if you require different behavior, then you'll need to fall back to manually setting up separate rules for each value).

##### Location Rules
MapRoulette v3.6.3 introduces support for location rules, whereby a task can be prioritized based on whether it falls inside or outside of a bounding box/rectangle. Simply choose `location rule` for the type, either `inside` or `outside`, and then either provide the bounding box explicitly as West,South,East,North or else click the Map button and draw the desired rectangle.
