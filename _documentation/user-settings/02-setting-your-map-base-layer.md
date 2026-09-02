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
[working several tasks together](/documentation/solving-multiple-tasks-together/).

## Your default basemap

You can record a preferred basemap on your account from the user menu →
**Account Settings** → **General** → **Default Basemap**, with a **Custom
Basemap URL** field below it for your own tile template. Remember to press
**Submit** to save.

![](/media/setting-default-baselayer.png)

Maps open on this layer unless the challenge you are working on sets [a basemap
of its own](/documentation/setting-basemap-for-challenge/), which takes
precedence. If neither is set, the map opens on whichever layer you last picked
with the **Map style** control.

## Adding your own layer

The **Map style** control also offers **Add your own layer**, for imagery
MapRoulette doesn't bundle. Choose **XYZ tiles** and give a tile template like
`https://example.org/tile/{z}/{x}/{y}.png`, or choose **WMS** and give the
endpoint URL plus the layer names to request.

Layers you add are stored in your browser, so they follow you between
challenges but not between devices, and nobody else sees them. Remove one with
the bin icon beside it in the list.
