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

> Note: virtual projects do not affect visibility of their contained challenges. Only a challenge's standard parent project is considered when determining discoverability

