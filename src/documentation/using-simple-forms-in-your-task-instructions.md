---
layout: base
title: Task Completion Forms Templates
description: 'It may occasionally be useful to allow mappers to provide to Challenge owners some additional information as they work through tasks. MapRoulette now supports the ability to embed a very basic form in the Challenge Instructions, which mappers can optionally complete for each task. Responses are included in CSV and GeoJSON exports of the challenge.'
tags: documentation
eleventyNavigation:
  key: 🆕 Using simple forms in your Task instructions
  parent: Creating and Managing Challenges
  order: 8
---

It may occasionally be useful to allow mappers to provide to Challenge owners some additional information as they work through tasks. MapRoulette now supports the ability to embed a very basic form in the Challenge Instructions, which mappers can optionally complete for each task. Responses are included in CSV and GeoJSON exports of the challenge.

![](basic_template.gif =500x)

To add form fields, simply setup one or more of the following templates in your Challenge Instructions:

> Note that template fields use _three_ curly braces instead of the usual two used for traditional mustache tags

### Checkbox field:

```js
{{ '{{{' | escape }}checkbox "Your checkbox label" name="myCheckbox"{{ '}}}' | escape }}
```

This will create a checkbox field named myCheckbox

> Note that field labels can also include basic markdown, including traditional mustache tags (with the normal two curly braces) referencing task properties

### Select (multiple-choice) field:

```js
{{ '{{{' | escape }}select "Your select label" name="myDropdown" values="foo,bar,baz"{{ '}}}' | escape }}
```

Creates a select field named my_dropdown with three choices (foo or bar or baz) plus an empty choice

> Note: the name you give to each field will be used as the column name in an exported CSV or property name in exported GeoJSON.
