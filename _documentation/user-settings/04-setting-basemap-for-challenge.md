---
title: Setting The Basemap Layer For Your Challenge
---

One of the customizations you can apply to your own Challenges is a custom
basemap layer. This basemap layer will override whatever basemap MapRoulette
users have defined as their default. This is useful in those cases where you
know that a certain basemap is needed to successfully complete the tasks in
your Challenge.

## Choosing the basemap

When creating or editing a challenge, the **Basemap** section offers:

- **Don't override — mappers use their own.** The default. Each mapper sees
  their own preferred base layer.
- One of the base layers bundled with MapRoulette — the same list offered by
  the **Map style** control on any map. See [Map Layer
  Management](/documentation/map-layer-management/) for that list and how a
  server administrator changes it.
- **Custom tile layer…**, which reveals a **Custom basemap URL** field for your
  own XYZ layer using the common pattern:

  `https://some.imagerylayer.com/tile/{z}/{x}/{y}`

Leaving the custom URL blank is treated the same as not overriding the basemap
at all.

## Which basemap a mapper actually sees

When a map opens, MapRoulette picks the first of these that is set:

1. The challenge's basemap, if its owner set one.
2. The mapper's own default basemap, from [their account
   settings](/documentation/setting-your-map-base-layer/).
3. Whichever base layer they last picked with the **Map style** control.

A mapper can still switch layers with the **Map style** control after the map
opens — the challenge basemap decides where they start, not where they must
stay.

> Challenges created in older versions of MapRoulette stored their basemap as
> one of a small set of numbered layers. Those still work: they resolve to the
> closest bundled base layer. OpenCycleMap has no bundled equivalent, so a
> challenge that asked for it falls back to the mapper's own preference.
