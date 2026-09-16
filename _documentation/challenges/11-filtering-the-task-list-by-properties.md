---
title: 'Challenge Managers: filtering tasks by properties'
---

When analyzing your challenges as a manager, it can be useful to filter tasks by
property values (such as OSM tags) rather than only by status and priority.

Open the **Filter by property** control above the task table on a challenge's
management page. It opens the same AND/OR rule builder used by [task
prioritization](/documentation/task-priority-rules/).

## Building a rule

Each rule is a property name, a value type (text or number), a comparison
operator, and a value to compare against. For example, to find motorways you
would enter the `highway` property, leave the type as Text, choose the `equals`
operator, and enter `motorway` as the value.

The operators on offer depend on the value type:

| Value type | Operators |
|:-----------|:----------|
| Text | `equals`, `does not equal`, `contains`, `exists`, `is missing` |
| Number | `equals`, `does not equal`, `greater than`, `less than` |

Tick **Comma-separated values** on a rule to match one property against
several values at once — `highway` `equals` `motorway, trunk` matches either —
rather than building an OR group by hand.

> Note: it's important to choose the correct value type for the properties
> you're filtering against. If you have numeric data represented as strings in
> your GeoJSON (e.g. `population: "500"`), choosing Number will still compare
> numerically.

Press **Apply** to filter the table and the map down to matching tasks. The
control is highlighted while a filter is active. **Clear** removes it, as does
the **Clear** control that resets all of the table's filters and sorting.

## Combining rules

To filter against several properties at once, add more rules to the group and
choose whether the group ANDs or ORs them together. With AND, every rule in the
group must match for a task to be included; with OR, any one of them is enough.

A group holds as many rules as you need — you are not limited to two at a time —
and **Add group** nests a sub-group with its own AND/OR setting when you need
something more involved, such as "this property AND either of those two".

For example, to find motorways with at least 6 lanes, add a Text rule with
`highway` `equals` `motorway` and a Number rule with `lanes` `greater than` `5`,
and leave the group set to AND.

> Task properties live on the server, so the filter is evaluated there. Very
> large challenges are filtered to the first 10,000 matching tasks.
