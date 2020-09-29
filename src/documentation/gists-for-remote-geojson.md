---
layout: base
title: Hosting Remote GeoJSON with Gists
description: "It's possible to use a Github gist to host your challenge GeoJSON remotely, but there are a few things to keep in mind"

tags: documentation
eleventyNavigation:
  key: Hosting Remote GeoJSON with Gists
  parent: Creating and Managing Challenges
  order: 1.25
---

It's possible to use a Github gist to host your challenge GeoJSON remotely. Here are a few tips to help you get started:

* Use a `.json` file extension if you want Github to treat the file as GeoJSON with a nice preview (`.geojson` will not work).
* It's okay to opt for a "secret" gist if you prefer. Anyone with the URL can still view a secret gist.
* When creating your challenge on MapRoulette, you'll need to select the Remote URL option and provide a URL to the **raw** gist content. By default, when you click on the Raw button for your gist, Github gives you a link to that specific version of the gist. To get a link that will always serve up the most recent version, remove the identifier in between `raw/` and the filename in the URL. For example, you would change:
```
https://gist.githubusercontent.com/youruser/abcd123/raw/efgh456/yourTasks.json
                                                        ^^^^^^^^ remove
```
to:
```
https://gist.githubusercontent.com/youruser/abcd123/raw/yourTasks.json
```
* Github caches the latest version of your gist, so you may need to wait 5-10 mins after editing your gist before the cache is updated and the latest raw content is served. If you're planning to [rebuild your challenge tasks](/documentation/rebuilding-challenge-tasks/) from updated data, make sure the latest version is being served before asking MapRoulette to rebuild your challenge.
