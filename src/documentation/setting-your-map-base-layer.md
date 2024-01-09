---
layout: base
title: Setting your Map Base Layer
description: Depending on the type of Task and the geographical area you are working on, you may want to use a different base layer for the Task map.
tags: documentation
eleventyNavigation:
  key: Setting your Map Base Layer
  parent: Basics
  order: 2
---

Depending on the type of Task and the geographical area you are working on, you may want to use a different base layer for the Task map. You can quickly switch between the available layers right in the Map Widget:

![](66154078-4863b200-e60c-11e9-964c-880c362fe122.png =800x)

You can set your default choice for your preferred map base layer in your User Settings:

![](setting-default-baselayer.png)

The list of layers is retrieved from the Editor Layer Index, so the options should always be the same as those available from within JOSM and iD.

## Challenge Default

The creator of the Challenge you work on may set an appropriate base layer for the map, which will be selected by default when you start working on that Challenge. You can still override this in the Map Widget.

## Custom base layers

_Advanced_

If you have a custom TMS tile layer source you want to use, you can select 'Custom' from the list in your User Settings, and add the layer using the same URL pattern used [in QGIS](https://docs.qgis.org/3.22/en/docs/user_manual/managing_data_source/opening_data.html#using-xyz-tile-services) and [Leaflet](https://leafletjs.com/reference.html#tilelayer), for example: `https://tiles.somewhere.com/blabla/{z}/{x}/{y}.png`

![](setting-default-baselayer2.png =600x)
