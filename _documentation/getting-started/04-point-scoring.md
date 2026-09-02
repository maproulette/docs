---
title: Earning Points and Levelling Up
---

## Points

Points are awarded for each task that is completed as follows:

| Completion Status         | Points Awarded |
| ------------------------- | :------------: |
| Fixed                     |       5        |
| Not an Issue[^1]          |       3        |
| Already Fixed             |       3        |
| Can't Complete[^2]        |       1        |
| Skipped                   |       0        |

[^1]: Recorded as "False Positive" in exports, task tables and the API.
[^2]: Previously called "Too Hard".

## Levels

Your points also determine your **mapper level**. Level is derived from your
score with:

```
level = floor(sqrt(score / 10))
```

so the score needed to reach a level is `level² × 10` — each level takes
progressively more points than the last. Level 5 needs 250 points, level 10
needs 1,000, and level 50 needs 25,000.

Your current level, the points you've earned within it, and how many are left
until the next one, are shown in the middle column of your
[Dashboard](/documentation/your-dashboard/). Selecting it opens the
**Mapper Level System** dialog, which lists every milestone level and its title
— from *New Recruit* at level 1 through *Rising Scout*, *Dedicated Mapper*,
*Master Navigator* and *Legendary Cartographer* up to *Transcendent
Cartographer* at level 316 (a million points).
