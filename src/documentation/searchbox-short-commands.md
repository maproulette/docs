---
layout: base
title: Searchbox Short-Commands
description: 'When searching for challenges, the search box supports short-commands that can be used to execute alternative searches or alter search behavior'
tags: documentation
eleventyNavigation:
  key: Searchbox Short-Commands
  parent: Advanced Topics
  order: 7
---

When searching for challenges, the search box supports short-commands that can be used to execute alternative searches or alter search behavior. For example, the map can be instantly relocated to a bounding box or centerpoint (perhaps copied and pasted from another source) -- or to a named geographic region -- rather than having to manually pan and zoom to the target area.

## List of Supported Commands:
`m/` Move the map to either a WSEN bounding box or a lon,lat centerpoint

`n/` Perform [nominatum](https://nominatim.openstreetmap.org/) search of geographic name and move map to resulting bounds

`p/` Search by project name


## Details and Examples
`m/` Move the map to either a bounding box (west, south, east, north) or a centerpoint (lon, lat)

> Note: if you wish to also filter challenge results geographically, be sure to change your Location filter to "Intersecting Map Bounds" or "Within Map Bounds" as desired

### Examples:

Move map to WSEN bounding box
```
m/-10.9313964,34.2526761,-0.1977539,40.9467136
```

Move map to lon,lat centerpoint
```
m/2.17,41.34
```
---

`n/` Perform [nominatum](https://nominatim.openstreetmap.org/) search of geographic name and move map to resulting bounds

> Note: if you wish to also filter challenge results geographically, be sure to change your Location filter to "Intersecting Map Bounds" or "Within Map Bounds" as desired

### Examples:
Move map to California
```
n/california
```

Move map to Moscow
```
n/moscow
```
---
`p/` performs a case-insensitive search by project name, presenting challenges that are in a project matching (or partially matching) the searched name

### Examples:
Show challenges in the mvexel project
```
p/mvexel
```

Show challenges in projects with "TIGER" in their name
```
p/tiger
```
