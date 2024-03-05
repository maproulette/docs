require('module-alias/register')
const fs = require('fs')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const filters = require('./utils/filters')
const transforms = require('./utils/transforms')
const shortcodes = require('./utils/shortcodes')
const markdown = require('./utils/markdown')
const { EleventyI18nPlugin } = require('@11ty/eleventy')
const path = require('path')
const { IntlMessageFormat } = require('intl-messageformat')

// You can now require config options using @config
const config = require('@config')

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('translate', async function (key, language) {
    try {
      // Construct the path to the translation file
      let translationFilePath = path.join(
        __dirname,
        `src/translations/${language}.json`
      )

      // Read the translation file
      let translations = fs.readFileSync(translationFilePath, 'utf-8')
      let messages = JSON.parse(translations)

      // if translation message doesn't exist, use default english message
      if (!messages[key]) {
        translationFilePath = path.join(
          __dirname,
          `src/translations/en-us.json`
        )

        translations = fs.readFileSync(translationFilePath, 'utf-8')
        messages = JSON.parse(translations)
      }

      // Format message using intl-messageformat
      const formatter = new IntlMessageFormat(messages[key], language)
      return formatter.format()
    } catch (error) {
      console.error(key, error)
      return key
    }
  })

  function getSection(url) {
    if (typeof url !== 'string') {
      return ''
    }
    url = url.replace(/^\/+|\/+$/g, '')
    const parts = url.split('/')
    return parts[1] || ''
  }

  eleventyConfig.addFilter('getSection', getSection)

  function getUrlLang(url) {
    if (typeof url !== 'string') {
      return 'en-us'
    }
    url = url.replace(/^\/+|\/+$/g, '')
    const parts = url.split('/')
    return parts[0] || 'en-us'
  }

  eleventyConfig.addFilter('getUrlLang', getUrlLang)

  function isCurrentLang(subjectUrl, currentUrl) {
    const subjectLang = getUrlLang(subjectUrl)
    const currentLang = getUrlLang(currentUrl)
    return subjectLang === currentLang
  }

  eleventyConfig.addFilter('isCurrentLang', isCurrentLang)

  function getSupportedLanguages() {
    const translationsDir = 'src/translations'
    const files = fs.readdirSync(translationsDir)
    const languages = files.map((file) => path.parse(file).name)
    console.log('SUPPORTED LANGS', languages)
    return languages
  }

  eleventyConfig.addGlobalData('supportedLanguages', getSupportedLanguages())

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en-us',
  })

  function getUniqueSections(arr) {
    let seen = {}
    let uniqueArrayOfObjects = arr.filter((obj) => {
      if (seen.hasOwnProperty(obj.key)) {
        return false
      } else {
        seen[obj.key] = true
        return true
      }
    })

    return uniqueArrayOfObjects
  }

  eleventyConfig.addFilter('getUniqueSections', getUniqueSections)

  /**
   * Add plugins
   *
   * @link https://www.11ty.dev/docs/plugins/
   */
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginNavigation)
  // eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName])
  })

  /**
   * Add shortcodes
   *
   * @link https://www.11ty.io/docs/shortcodes/
   */
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  /**
   * Add async shortcodes
   */
  eleventyConfig.addNunjucksAsyncShortcode('svgsprite', async () => {
    try {
      const svgsprite = require('./utils/svgsprite')
      const result = await svgsprite()
      return result
    } catch (error) {
      throw new Error(`Error in svgsprite: ${error.message}`)
    }
  })

  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/assets')
  eleventyConfig.addWatchTarget('./src/media')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ 'src/assets/scripts/sw.js': 'sw.js' })
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addPassthroughCopy('src/assets/fonts')
  eleventyConfig.addPassthroughCopy('src/site.webmanifest')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/media')
  eleventyConfig.addPassthroughCopy('src/admin')

  /**
   * Set custom markdown library instance
   *
   * @link https://www.11ty.dev/docs/languages/liquid/#optional-set-your-own-library-instance
   */
  eleventyConfig.setLibrary('md', markdown)

  /**
   * Add layout aliases
   *
   * @link https://www.11ty.dev/docs/layouts/#layout-aliasing
   */
  eleventyConfig.addLayoutAlias('base', 'base.njk')
  eleventyConfig.addLayoutAlias('home', 'home.njk')
  eleventyConfig.addLayoutAlias('index', 'index.njk')

  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   *
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */
  eleventyConfig.setDataDeepMerge(true)

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404/index.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  return {
    dir: config.dir,
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
