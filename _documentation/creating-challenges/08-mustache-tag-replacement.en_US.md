---
title: Mustache Tag Replacement
---

MapRoulette makes it easy to embed the value of task feature properties (or workspace properties) in allowed places, such as challenge instructions or the Custom URLs widget, using Mustache template syntax.

{% raw %}

To reference a property, surround its name with double curly braces or "mustaches" (`{{` and `}}`). Any task feature property can be referenced in a mustache tag by the property name, e.g. `{{highway}}` to display the value of the `highway` property. If the property doesn't exist on the task, then the mustache tag will be replaced with empty text.

> Note: when working with Markdown content (such as challenge instructions), the mustache tags get replaced *before* the final content is interpreted as Markdown. That means, for example, that feature property values will be interpreted as Markdown, allowing things like URLs to be converted into clickable links. If you instead wish to see the raw property value, you can surround the whole mustache tag (including the curly braces of the "mustache" itself) with single backticks

## Workspace Properties
Some workspaces, notably Task Completion, make additional properties available for substitution that are specific to the workspace state rather than the task itself. These "workspace" properties always begin with a hash (`#`), e.g. `#mapZoom`, to avoid confusion with task feature properties. Workspace properties are always case-sensitive. The following workspace properties may be available (as with task feature properties, mustache tags referencing missing workspace properties will be replaced with empty text):

`{{ #mapBBox }}`: a WSEN comma-separated bounding box of the current map bounds

`{{ #mapWest }}`: the longitude of the west side of the current map bounds

`{{ #mapSouth }}`: the latitude of the south side of the current map bounds

`{{ #mapEast }}`: the longitude of the east side of the current map bounds

`{{ #mapNorth }}`: the latitude of the north side of the current map bounds

`{{ #mapZoom }}`: the current zoom of the map

`{{ #mapLat }}`: The latitude of the map’s current centerpoint

`{{ #mapLon }}`: The longitude of the map’s current centerpoint

`{{ #osmType }}`: The type (node/way/relation) of the current task feature if it can be determined

`{{ #osmId }}`: The numerical OSM id of the current task feature if it can be determined

`{{ #mrTaskId }}`: the internal MapRoulette id of the current task (not the OSM id)

{% endraw %}
