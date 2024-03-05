---
layout: base
title: Mustache Tag Replacement
description: 'MapRoulette makes it easy to embed the value of task feature properties (or workspace properties) using "mustache tags" in allowed places, such as in challenge instructions or custom URLs.'
tags: documentation
eleventyNavigation:
  key: Mustache Tag Replacement
  parent: Creating and Managing Challenges
  order: 7
---

{% translate "MustacheTagReplacement.content1", page.url | getUrlLang %}

`{{ '{{' }}` {% translate "MustacheTagReplacement.content2", page.url | getUrlLang %} `{{ '}}' }}`

{% translate "MustacheTagReplacement.content3", page.url | getUrlLang %}

`{{ '{{highway}}' }}`

{% translate "MustacheTagReplacement.content4", page.url | getUrlLang %}

**{{ '#mapBBox' }}**: {% translate "MustacheTagReplacement.content5", page.url | getUrlLang %}

**{{ '#mapWest' }}**: {% translate "MustacheTagReplacement.content5.1", page.url | getUrlLang %}

**{{ '#mapSouth' }}**: {% translate "MustacheTagReplacement.content6", page.url | getUrlLang %}

**{{ '#mapEast' }}**: {% translate "MustacheTagReplacement.content7", page.url | getUrlLang %}

**{{ '#mapNorth' }}**: {% translate "MustacheTagReplacement.content8", page.url | getUrlLang %}

**{{ '#mapZoom' }}**: {% translate "MustacheTagReplacement.content9", page.url | getUrlLang %}

**{{ '#mapLat' }}**: {% translate "MustacheTagReplacement.content10", page.url | getUrlLang %}

**{{ '#mapLon' }}**: {% translate "MustacheTagReplacement.content11", page.url | getUrlLang %}

**{{ '#osmType' }}**: {% translate "MustacheTagReplacement.content12", page.url | getUrlLang %}

**{{ '#osmId' }}**: {% translate "MustacheTagReplacement.content13", page.url | getUrlLang %}

**{{ '#mrTaskId' }}**: {% translate "MustacheTagReplacement.content14", page.url | getUrlLang %}

