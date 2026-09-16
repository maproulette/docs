# Screenshots to re-shoot

The prose in `_documentation/` has been brought in line with the current
MapRoulette frontend, but **no images were replaced**. Screenshots of UI that no
longer exists were removed from the pages rather than left in place, since a
picture of a screen the reader can't find is worse than no picture. Everything
removed is listed here so it can be re-shot and dropped back in; the files
themselves are all still in `media/`.

Pages marked _legacy_ carry a callout saying the feature isn't in the current
frontend. Those keep their old screenshots deliberately — they illustrate how
the feature used to work — and should only change if the feature returns.

| Page | Removed | What a replacement should show |
|:-----|:--------|:-------------------------------|
| `getting-started/02-discovering-challenges` | `sorting-1`…`sorting-8` | The Explore Challenges filter bar: location search, Sort by, Work on, Difficulty, Global, Clear filters, and the three view-mode buttons. Plus the grid-with-map result view. |
| `advanced/02-markdown` | `markdown_preview.jpg` | Markdown source beside its rendered output, using only CommonMark features (the old shot used a GFM table, which no longer renders). |
| `user-settings/02-setting-your-map-base-layer` | `66154078-…`, `setting-default-baselayer2` | The **Map style** control open on a task map, showing the five bundled base layers. |
| `challenges/08-reporting-a-challenge` | `screen-shot-2021-03-02-…` ×2 | The challenge header's **Comments** button, and the "by _username_" link through to the owner's OSM profile. |
| `mapping/03-solving-multiple-tasks-together` | `66520790-…`, `66521253-…`, `66521347-…`, `66521469-…` | The **Work on multiple tasks** panel with a few tasks selected, and the bundled task list on the Task tab. |
| `challenges/01-creating-a-challenge` | `create-challenge-1`…`create-challenge-4` | The challenge form (project picker, basic info, challenge image, task data, code-of-conduct agreement), and the challenge page after tasks finish building. |
| `tasks/03-setting-external-task-identifiers` | `setting_external_id_field` | Nothing — the setting has no UI. Leave imageless. |
| `challenges/10-exporting-challenge-data` | `export_challenge_data` | **Export CSV** on a project's actions menu under Manage → Projects. |
| `tasks/07-bulk-editing-challenges` | `bulk-edit-1`…`bulk-edit-4` | Task rows selected in a challenge's task table with the bulk actions toolbar showing, and one of its confirmation dialogs. |
| `challenges/07-challenge-comments` | `challenge-comments-2` | The **Comments** button in the challenge header and the Challenge Comments dialog, with **Show task comments** checked. |
| `challenges/09-challenge-flagging` | `challenge-flagging-1`…`challenge-flagging-5` | The **Challenge actions** menu with **Report Challenge**, the report dialog, the **Challenge Reported** state afterwards, and the Super Admin → Challenge Reports queue. |
| `mapping/02-rapid-editor` | `rapid-editor-1` | The built-in iD editor open in the task screen, with its Re-Center / Select Tasks / Focus / Close editor bar. |
| `getting-started/01-your-dashboard` | `dashboard-1`…`dashboard-7` | The three-column dashboard: Saved Challenges, profile and level, Contributions + Locked Tasks + Teams. Plus the Mapper Level System dialog. |
| `projects/01-projects-and-project-managers` | `projects-project-managers-1`, `-2` | Manage → Projects, and a project's page with its challenge list and Project Playbook. |
| `not-implemented/02-reviewing` | `reviewing-1`…`reviewing-6` | Nothing to re-shoot while reviewing is unavailable, beyond the Reviews Received / Reviews Performed blocks on a profile. |
| `tasks/02-using-maproulette-tags` | `mr-tags-1`…`mr-tags-13` (kept `bad-imagery`, `mr-tags-10`, `mr-tags-11`) | The **Edit task tags** dialog with "Popular in this challenge" chips, and the **Tags (Optional)** field in the completion dialog. |
| `mapping/01-using-layouts` _(legacy)_ | `all_the_widgets`, `edit_layout_control`, `export_layout`, `import_layout`, `laying_out_workspace.gif`, `layout_dropdown` | The page is now about the task screen's two resizable panels and its four tabs. Needs one shot of that. |

## Pages that could use a screenshot but never had one

- `advanced/01-using-keyboard-shortcuts` — the **Keyboard Shortcuts** dialog (<kbd>?</kbd>).
- `user-settings/03-notifications-and-email` — the Notifications page with its filters, saved views and thread pane.
- `getting-started/04-point-scoring` — the Mapper Level System dialog.
- `tasks/01-task-priority-rules` — the prioritization editor with its tier tabs, match counts and preview map.
- `teams/01-teams` — the Teams page with a pending invitation, and a team's page with its members and challenge images.

## Elsewhere

- `index.md` (the landing page) still uses `welcome-index.png`, which
  shows the previous interface. Replace with a shot of the current Explore
  Challenges page.
