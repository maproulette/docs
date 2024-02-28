---
layout: base
title: Setting The Basemap Layer For Your Challenge
description: 'As a Challenge creator, you can choose from the standard OSM aerial and satellite basemap layers, or define your own'
tags: documentation
eleventyNavigation:
  key: Setting The Basemap Layer For Your Challenge
  parent: Creating and Managing Challenges
  order: 2
---

One of the customizations you can apply to your own Challenges is a custom basemap layer. This basemap layer will override whatever basemap MapRoulette users have defined as their default. This is useful in those cases where you know that a certain basemap is needed to successfully complete the tasks in your Challenge.

All the default global basemap layers from OSM's [editor layer index](https://github.com/osmlab/editor-layer-index), the same ones that you would find in the iD editor, are available as presets. You can also add your own custom XYZ layer using the common pattern `https://some.imagerylayer.com/tile/{z}/{x}/{y}`.