import SiteConfig from '../site.config'

export function getSiteMetaData() {
  return SiteConfig.siteMetadata
}

export function getFormattedDate(date) {
  if (!date) {
    return
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const lang = getSiteMetaData().lang
  return date.toLocaleDateString(lang, options)
}
