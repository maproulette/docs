---
title: Setting your Map Base Layer
---

Depending on the type of Task and the geographical area you are working on, you
may want to use a different base layer for the map. Every map in MapRoulette —
the explore map, a challenge's map, and the task map — carries the same set of
controls in its corner:

- **Map style** — switch the base layer
- **Reset view** — return the map to where it started
- **Zoom in** / **Zoom out**
- a toggle to collapse the control stack out of the way

The **Map style** control offers these base layers:

- OSM Bright
- OSM Carto
- Bing Aerial
- Esri World Imagery
- Esri World Imagery (Clarity)

Your choice is remembered in your browser and re-applied the next time a map
loads, so you only have to pick your preferred imagery once.

Individual maps add their own buttons alongside these — the task map, for
example, adds controls for task markers and for
[working several tasks together](/en-US/documentation/solving-multiple-tasks-together/).

## Your default basemap

You can record a preferred basemap on your account from the user menu →
**Account Settings** → **General** → **Default Basemap**, with a **Custom
Basemap URL** field below it for your own tile template. Remember to press
**Submit** to save.

![](/media/setting-default-baselayer.png)

> The rebuilt map does not read this preference yet: it always opens on the map
> style you last picked in the **Map style** control. The same is true of the
> [basemap a challenge owner sets on their
> challenge](/en-US/documentation/setting-basemap-for-challenge/) — the setting
> is stored, but the map does not apply it.
{: .legacy}

> Choosing arbitrary layers from the OSM [editor layer
> index](https://github.com/osmlab/editor-layer-index), adding your own custom
> XYZ or WMS layer from within the map, and the Mapillary / KartaView / OSM
> data overlays are all absent from the current frontend. The base layers
> listed above are the full set.
{: .legacy}
