---
title: Challenge Visibility and Discovery
---

Challenges are publicly discoverable (e.g. through search results) only if both the challenge *and* its parent project are set to visible. If either is not visible, the challenge will not be discoverable and will not appear in search results.

Visibility only affects discoverability: mappers can still access a challenge directly if they have the public URL to that challenge. This makes it possible to share challenges that are not otherwise discoverable.

| Project-visible Setting | Challenge-visible Setting | Challenge is Discoverable? |                                                
|:------------------------|:--------------------------|:---------------------------|
| Yes                     | Yes                       | Yes                        |
| Yes                     | No                        | No                         |
| No                      | Yes                       | No                         |
| No                      | No                        | No                         |

In challenge lists and on project cards, an eye button beside each item's menu
toggles this: **Make discoverable** / **Make not discoverable**. (The project
list's table view shows the status but has no toggle.) On a challenge's
management page the same setting is the **Enabled** switch, and on a project's
management page it's the **Enable project** / **Disable project** button. A
challenge's menu on its project's page also offers **Enable challenge** /
**Disable challenge**.

A challenge or project that isn't discoverable shows a crossed-out eye icon
(**Not discoverable** on hover) in your project's challenge table and on the
management pages, so it's easy to see at a glance which of your challenges the
public can find.

Archiving is a separate thing: an archived challenge is hidden from your own
active lists and from public search results, but its discoverable setting is
left alone, and it can be unarchived at any time.

