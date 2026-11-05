# Screenshots to re-shoot

The screenshots in the pages were taken from MapRoulette 4 against a seeded
demo (a "Salt Lake City Transit" project worked by a mapper called
MapperMaya). The files are in `media/` with an `mr4-` prefix, each in a light
version and a dark one (`-dark`); a page shows whichever matches the reader's
theme. A replacement needs both. Screenshots of UI
that no longer exists were removed from the pages rather than left in place;
the old files are still in `media/`.

Pages marked _legacy_ carry a callout saying the feature isn't in the current
frontend. Those keep their old screenshots deliberately — they illustrate how
the feature used to work — and should only change if the feature returns.

These are still missing:

| Page | What a screenshot should show | Why it isn't there yet |
|:-----|:------------------------------|:-----------------------|
| `advanced/02-markdown` | Markdown source beside its rendered output, using only CommonMark features. | No screen in the app shows source and output side by side; needs a composed image. |
| `challenges/02-using-overpass-to-create-challenges` | The task screen's **Features** tab for an Overpass-imported way. | Needs a challenge actually built from an Overpass query. |
| `challenges/07-challenge-comments` | The Challenge Comments dialog with **Show task comments** checked and task comments listed. | Ticking the box currently adds no task comments: the dialog expects them grouped by task, but the backend returns a flat list. |
| `tasks/03-setting-external-task-identifiers` | Nothing — the setting has no UI. Leave imageless. | — |
