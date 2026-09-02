---
title: Search Prefixes and Shortcuts
---

The search box in the MapRoulette header searches everything: challenges,
projects, tasks, comments, and named map features. Press <kbd>Ctrl</kbd> +
<kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on a Mac) from anywhere in
MapRoulette to open it.

By default it searches across all of these at once. To search only one kind of
thing, start your query with its prefix — or pick the search type from the list
the box offers before you start typing.

## List of supported prefixes

| Prefix | Searches for                                                     |
| :----- | :--------------------------------------------------------------- |
| `c:`   | **Challenges**, by name                                           |
| `p:`   | **Projects**, by name                                             |
| `t:`   | **Tasks**, by ID                                                  |
| `id:`  | **Any resource by MapRoulette ID** — project, challenge or task   |
| `f:`   | **Everything at once** — projects, challenges and tasks in one list |
| `tc:`  | **Task comments**                                                 |
| `cc:`  | **Challenge comments**                                            |

## Details and examples

### `c:` — find a challenge

Show challenges whose name matches your text.

```
c:tiger
```

### `p:` — find a project

Show projects whose name matches your text. Case-insensitive, and partial names
work.

```
p:mvexel
```

Selecting a result takes you to that project, from where you can see all of its
challenges.

### `t:` and `id:` — jump straight to something

`t:` looks up a single task by its numeric ID and shows its current status.

```
t:1234567
```

`id:` is the same idea but broader: give it a number and it reports every
project, challenge and task that carries that ID, so you can pick the one you
meant.

```
id:40609
```

### `f:` — search everything together

Returns matching projects, challenges and tasks in a single list, so you don't
have to guess which kind of thing you're looking for.

```
f:bus stops
```

With no search text it shows a starting point instead: a few challenges to
explore and the featured projects.

> This mode is labelled **Find a Feature by Name** in the search box, and
> described there as a search for geographic features. It currently searches
> MapRoulette's own projects, challenges and tasks rather than OSM features.
{: .legacy}

### `tc:` and `cc:` — search comments

Search the text of comments left on tasks (`tc:`) or on challenges (`cc:`),
which is the quickest way back to a discussion you half-remember. Results show
who wrote each comment.

```
tc:bad imagery
```

> Older versions of MapRoulette used `m/`, `n/` and `p/` in the challenge
> search box to move the map to a bounding box, run a Nominatim search, or
> filter by project. `p/` is now `p:`, the Nominatim search has become the
> location filter on
> [Explore Challenges](/en-US/documentation/discovering-challenges/), and there
> is no longer a command for moving the map to a raw bounding box.
{: .legacy}
