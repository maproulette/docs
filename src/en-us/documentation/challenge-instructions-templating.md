---
layout: base
tags: documentation
title: Templating in Challenge Instructions
description: MapRoulette supports mustache-tag replacement in Challenge
  Instructions, as well as short codes that can be used to embed basic form
  fields, make data easily copyable to the user clipboard, etc.
eleventyNavigation:
  key: Templating in Challenge Instructions
  parent: Creating and Managing Challenges
  order: 8
---

{% translate "ChallengeInstructionsTemplating.content1", page.url | getUrlLang %}

![](basic_template.gif =500x)

{% translate "ChallengeInstructionsTemplating.content2", page.url | getUrlLang %}

```
[checkbox "Your checkbox label" name="myCheckbox"]
```

{% translate "ChallengeInstructionsTemplating.content3", page.url | getUrlLang %}

```
[select "Your select label" name="myDropdown" values="foo,bar,baz"]
```

{% translate "ChallengeInstructionsTemplating.content4", page.url | getUrlLang %}

```
[copyable "some useful text"]
```

{% translate "ChallengeInstructionsTemplating.content5", page.url | getUrlLang %}
