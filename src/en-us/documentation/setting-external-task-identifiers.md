---
layout: base
title: 'Setting external task IDs (e.g. OSM IDs)'
description: "When possible, MapRoulette will assign your tasks unique external identifiers based on the fields or properties of their GeoJSON feature. It's common to use OSM ids for this purpose for features that have one. Among other things, using an OSM id allows MapRoulette to pass the id to editors like iD and JOSM so that they can preselect the feature during editing."
tags: documentation
eleventyNavigation:
  key: Setting external Task IDs
  parent: Creating and Managing Challenges
  order: 10
---

{% translate "SettingExternalTaskIdentifiers.content1", page.url | getUrlLang %}

![](setting_external_id_field.png =800x)

{% translate "SettingExternalTaskIdentifiers.content2", page.url | getUrlLang %}

```
id
@id
osmid
osm_id
name
```

{% translate "SettingExternalTaskIdentifiers.content4", page.url | getUrlLang %}

{% translate "SettingExternalTaskIdentifiers.content5", page.url | getUrlLang %}

{% translate "SettingExternalTaskIdentifiers.content3", page.url | getUrlLang %}
