---
title: 'Challenge Managers: filtering tasks by properties'
---

When analyzing your challenges as a manager, it can sometimes be useful to filter tasks by property values (such as OSM tags). It has been possible since v3.4.4 of MapRoulette to filter tasks by the value of a single task property, but v3.5.3 brings the ability to create compound filtering rules that can AND and OR together multiple properties to achieve fine-grained filtering.

For example, if you were looking for motorways, you might choose the `highway` property, the `equals` operator, and then enter `motorway` for the value.

> Note: it's important to choose the correct data types for the properties you're filtering against. However, if you have numeric data represented as strings in your GeoJSON (e.g. `population: "500"`), MapRoulette will attempt to perform numeric comparisons if you choose a Number type for the property despite it technically being a string/text.

For example, if you wanted motorways with at least 6 lanes, you would choose "compound rule", set the first rule to Text with `highway` `equals` `motorway`, set the second rule to Number with `lanes` `>` `5`, and choose to AND them together.

