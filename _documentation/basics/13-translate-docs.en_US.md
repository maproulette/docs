---
title: Help Us Translate Our Documentation
---

Are you multilingual? Then you can help us make MapRoulette's Documentation available in more languages.

There are two ways you can help us translate this documentation website: using the Transifex website, or using a text editor and submitting your changes on GitHub.

## Using Transifex

You can use the Transifex website to add translations for parts of the MapRoulette documentation. The documentation has its own [Transifex Page](https://explore.transifex.com/maproulette/mr-docs/). You will need to create a Transifex account to submit translations using this method.

![](/media/translate1.png){:width="700"}

### Requesting a new language

Go to the [Languages Page](https://app.transifex.com/maproulette/mr-docs/languages/) and click **Edit Languages**.  Select the language you wish to add and click **Apply**.

![](/media/translate2.png){:width="600"}

### Adding translations

Go to the [Translate Page](https://app.transifex.com/maproulette/mr-docs/translate) and in the header, select the target language you would like to help translate.

![](/media/translate3.png){:width="800"}

Translations added through Transifex don't appear on the website immediately. Once your contributions are submitted and reviewed, the development team will update the documentation site.

## Using GitHub

You can also help translate the MapRoulette Documentation by directly translating the Markdown text files that are used to generate the pages of this website.

The documentation lives in the [maproulette/docs](https://github.com/maproulette/docs) repository. To translate a page, make a copy of the existing page's Markdown source file, and change the ISO language code in the file extension to the language you're translating to. For example, you'd rename `some-page.en_US.md` to `some-page.pt_BR.md` when translating "Some Page" from American English to Brazilian Portuguese.

Next, open the file in a text editor and rewrite the content in the target language. You should translate all prose, including headings, alt text, and page metadata like the `title` and `slug`. But don't translate text in URLs or code examples, as this will probably break them.

When you're done, open a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to submit your changes. Once we've reviewed and merged them, the new translated page will appear here on the website.

