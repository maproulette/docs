---
layout: base
title: 'Challenge Managers: filtering tasks by properties'
description: 'When analyzing your challenges as a manager, it can sometimes be useful to filter tasks by property values (such as OSM tags). It has been possible since v3.4.4 of MapRoulette to filter tasks by the value of a single task property, but v3.5.3 brings the ability to create compound filtering rules that can AND and OR together multiple properties to achieve fine-grained filtering.'
tags: documentation
eleventyNavigation:
  key: Filtering the Task list by properties
  parent: Creating and Managing Challenges
  order: 9
---

When analyzing your challenges as a manager, it can sometimes be useful to filter tasks by property values (such as OSM tags). It has been possible since v3.4.4 of MapRoulette to filter tasks by the value of a single task property, but v3.5.3 brings the ability to create compound filtering rules that can AND and OR together multiple properties to achieve fine-grained filtering.

When managing a challenge, you can get started by clicking the "Filter by Property" control on the tasks table. You'll be asked to select the data type of the property: text, number, or a special "compound rule" if you wish to do a compound search involving multiple properties.

If you chose text or number, you'll then be asked to choose the property name, a comparison operator, and a value to compare against.

> Note: To help with choosing a property name, MapRoulette offers a dropdown of all property names it discovered on tasks in the challenge. It does **not** restrict the offered properties based on the data type you chose.

For example, if you were looking for motorways, you might choose the `highway` property, the `equals` operator, and then enter `motorway` for the value.

The comparison operators on offer depend on the data type you choose. Text properties can use textual operators like `equals` and `contains` while numeric properties can use operators like `=` and `>` or `<` for comparison.

> Note: it's important to choose the correct data types for the properties you're filtering against. However, if you have numeric data represented as strings in your GeoJSON (e.g. `population: "500"`), MapRoulette will attempt to perform numeric comparisons if you choose a Number type for the property despite it technically being a string/text.

If you wish to filter against multiple properties simultaneously, choose "compound rule" for the type. This will present you with boxes for two properties along with an option to AND or OR them together. If you choose AND then _both_ property comparisons must match on a task for the task to be included in your filter results. If you choose OR then the task will be included if _either_ of the property comparisons match.

> As of v3.5.7, MapRoulette offers an option for including multiple, comma-separated filter values for a single property so that compound rules can be avoided for the common case of matching any one of multiple values. These values will be OR'ed together.

For example, if you wanted motorways with at least 6 lanes, you would choose "compound rule", set the first rule to Text with `highway` `equals` `motorway`, set the second rule to Number with `lanes` `>` `5`, and choose to AND them together.

If you wish to filter against more than 2 properties, then you'll need to nest multiple compound rules.

As of v3.5.5, you no longer need to setup a compound rule if you simply wish to compare a property against multiple values (e.g. `highway` `equals` `motorway` or `trunk`). You can click the "Add Value" control to add multiple values to include in the comparison.

The screenshow below shows the setup of a compound search for tasks with a `name` property of `TransCanada Highway` and the `highway` property set to either `motorway` or `trunk`.

![compound property rule](compound_property_rule.png)
