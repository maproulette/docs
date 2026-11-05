---
title: 'Challenge Managers: filtering tasks by properties'
---

When analyzing your challenges as a manager, it can sometimes be useful to filter tasks by property values (such as OSM tags). It has been possible since v3.4.4 of MapRoulette to filter tasks by the value of a single task property, but v3.5.3 brings the ability to create compound filtering rules that can AND and OR together multiple properties to achieve fine-grained filtering.

Open the **Filter by property** control above the task table on a challenge's
management page. It opens the same AND/OR rule builder used by [task
prioritization](/documentation/task-priority-rules/).

## Building a rule

For example, if you were looking for motorways, you might choose the `highway` property, the `equals` operator, and then enter `motorway` for the value.

The operators on offer depend on the value type:

| Value type | Operators |
|:-----------|:----------|
| string | `equals`, `does not equal`, `contains`, `exists`, `is missing` |
| number | `equals`, `does not equal`, `greater than`, `less than` |

Tick **Comma-separated values** on a rule to match one property against
several values at once — `highway` `equals` `motorway, trunk` matches either —
rather than building an OR group by hand.

> Note: it's important to choose the correct data types for the properties you're filtering against. However, if you have numeric data represented as strings in your GeoJSON (e.g. `population: "500"`), MapRoulette will attempt to perform numeric comparisons if you choose a Number type for the property despite it technically being a string/text.

Press **Apply** to filter the table and the map down to matching tasks. The
control is highlighted while a filter is active. **Clear** removes it, as does
the **Clear** control that resets all of the table's filters and sorting.

## Combining rules

To filter against several properties at once, add more rules to the group with
**Rule** and choose whether the group ANDs or ORs them together. With AND, every rule in the
group must match for a task to be included; with OR, any one of them is enough.

A group holds as many rules as you need — you are not limited to two at a time —
and **Group** nests a sub-group with its own AND/OR setting when you need
something more involved, such as "this property AND either of those two".

For example, if you wanted motorways with at least 6 lanes, you would choose "compound rule", set the first rule to Text with `highway` `equals` `motorway`, set the second rule to Number with `lanes` `>` `5`, and choose to AND them together.

> Task properties live on the server, so the filter is evaluated there. Very
> large challenges are filtered to the first 10,000 matching tasks.
