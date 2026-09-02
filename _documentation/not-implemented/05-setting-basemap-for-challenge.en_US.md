---
title: Setting The Basemap Layer For Your Challenge
---

> Setting a basemap on your challenge is not possible from the current
> challenge form, and the rebuilt map does not apply a challenge's stored
> basemap. Mappers pick their base layer with the **Map style** control on the
> map instead — see [Setting your Map Base
> Layer](/en-US/documentation/setting-your-map-base-layer/).
{: .legacy}

One of the customizations you can apply to your own Challenges is a custom basemap layer. This basemap layer will override whatever basemap MapRoulette users have defined as their default. This is useful in those cases where you know that a certain basemap is needed to successfully complete the tasks in your Challenge.

All the default global basemap layers from OSM's [editor layer index](https://github.com/osmlab/editor-layer-index), the same ones that you would find in the iD editor, are available as presets. You can also add your own custom XYZ layer using the common pattern: 

`https://some.imagerylayer.com/tile/{z}/{x}/{y}`

