---
title: What changed in these docs
---

These docs were reorganised and rewritten alongside MapRoulette 4. If you have
read them before, or have links saved, this page summarises what moved and what
went away.

At a glance: **46 English pages became 42**, arranged in **10 sections instead
of 6**, and every page was reviewed against the current frontend.

## URLs changed

Pages used to live under a locale segment:

```
old:  /en-US/documentation/your-dashboard/
new:  /documentation/your-dashboard/
```

Old links still work — anything under `/en-US/` is redirected to the flat
address — so bookmarks and links from elsewhere are safe. A page's slug is
unchanged by which section it sits in, so pages that moved between sections
kept their address.

## Sections were reorganised

The old grouping put beginner and expert material for the same topic in
different places. The new one is organised by what you are doing.

| Old section | Became |
|:------------|:-------|
| Basics | Getting Started, User Settings, Mapping Tasks, Challenges, Advanced |
| Advanced Topics | Mapping Tasks, Getting Started, Advanced |
| Creating and Managing Challenges | Challenges, Tasks, User Settings |
| New Topics/Features | Getting Started, Challenges, Mapping Tasks, Tasks |
| Working as a Team | Teams, Projects |
| Server Admin | Server Admin |
| — | Migrating from MR3 (new) |

The sections now are Getting Started, Migrating from MR3, Mapping Tasks, User
Settings, Projects, Challenges, Tasks, Teams, Advanced and Server Admin.

## Pages that went away

Eight pages were removed. None of them have redirects, so a saved link to one
will 404.

| Removed page | Why |
|:-------------|:----|
| Reviewing | Not available in the current frontend |
| Using Mapillary Images | The Mapillary overlay is not part of the current frontend |
| Cooperative Challenges | Its change-file (`.osc`) cooperative tasks are not loaded into the editor by the current frontend; Tag Fix tasks are covered by [Tag Fix Challenges](/documentation/tag-fix-challenges/) |
| Virtual Challenges | Not surfaced in the frontend |
| Virtual Projects | Not surfaced in the frontend |
| Following other Users | Following users was removed from the current frontend |
| MapRoulette Tags | Adding tags to tasks was removed from the current frontend |
| Help Us Translate Our Documentation | The docs are English-only for now — see below |

Four pages were added: **Runtime Configuration**, describing the `VITE_*`
settings that replaced MapRoulette 3's `REACT_APP_*` ones; **Super Admin**,
describing the installation-wide tools available to super users; and the two
pages of this Migrating from MR3 section.

## Translations were removed

The docs used to carry partial translations into German, Spanish, French, Dutch
and Russian, plus a Portuguese home page. Those files covered a small and uneven fraction of the site, and
had drifted badly out of date against the English pages — which were themselves
being rewritten. Rather than ship translations describing a version of
MapRoulette that no longer exists, they were removed along with the Transifex
setup and the page explaining how to contribute one.

## Every page was checked against the app

The largest change is not structural. Every page was re-read against the current
frontend, and anything that no longer matched was either corrected or marked.

Where MapRoulette 3 did something MapRoulette 4 does not, the page now says so
in a highlighted note rather than quietly describing behaviour you cannot find.
If you want the whole picture in one place instead of page by page, see
[Moving from MapRoulette 3 to MapRoulette
4](/documentation/maproulette-3-to-4/).
