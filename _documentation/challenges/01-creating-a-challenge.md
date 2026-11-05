---
title: Creating a Challenge
---

Creating a challenge starts with a good challenge idea. Good challenges have tasks that:

- Are easy to solve (typically less than one minute)
- Do not require local knowledge
- Involve only one or two OSM objects

Here's an [example challenge](https://maproulette.org/mr3/browse/challenges/3253) that meets that criteria. We will ask mappers to review `motorway_junction` nodes in the United States that have name `tags`. This is uncommon in the U.S. Often mappers will add a name tag that has the destination information on it, so the information renders on the map:


This [Overpass query](https://overpass-turbo.eu/?Q=area%5Bname%3D%22United%20States%20of%20America%22%5D-%3E.a%3B%0Anode%5B%22highway%22%3D%22motorway_junction%22%5D%5B%22name%22%5D(area.a)%3B%0Aout%20meta%3B%0A&C=40.66202;-111.87756;12) selects all these nodes.

```
area[name="United States of America"]->.a; node["highway"="motorway_junction"]["name"](area.a); out meta;
```

The final two screens let you add rules to prioritize certain tasks over others based on OSM tags, and let you define some view related settings for your challenge. The defaults are sensible but please do review them and tweak as needed. Make sure that the query only returns the nodes or ways that you want mappers to review, and ideally the number of objects returned should be no more than a couple thousand.

