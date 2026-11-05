---
title: Styling Text with Markdown
---

MapRoulette supports a variant of Markdown for marking up or styling text. Markdown can be used in most places where long-form text can be entered, such as task comments, challenge descriptions, challenge instructions, etc.

## What's supported

MapRoulette renders [CommonMark](https://commonmark.org/), with one
MapRoulette-specific addition: **a single newline is rendered as a line
break**, so text looks the way it did in the box you typed it into rather than
being reflowed into one paragraph. If you want two lines to run together,
remove the line break in your source text.

That covers the everyday things:

- headings (`# Heading`)
- **bold** (`**bold**`) and _italic_ (`_italic_`)
- links (`[text](https://example.com)`) — on the task screen, bare URLs in
  the instructions and in the challenge description are turned into links
  automatically; elsewhere, including the challenge description on the
  challenge's own page, write them as Markdown links
- bulleted and numbered lists
- `inline code` and fenced code blocks
- block quotes
- images

## What isn't

- **Raw HTML.** Unlike GitHub-flavored Markdown, MapRoulette does not render
  HTML embedded in Markdown; it is dropped.
- **GitHub extensions.** Tables, strikethrough, task list checkboxes and
  footnotes are GFM additions rather than CommonMark, and are not rendered. If
  you have older challenge text that relies on a Markdown table, it will appear
  as literal pipes and dashes — reach for a list instead.

## Mentions

Writing `@username` in a comment notifies that user. See [Short-codes in
Comments](/documentation/comment-short-codes/).
