import {
  getDocsSlugs,
  getDocBySlug,
  getDocsIndexes,
  getSiblingDocsGroupedByCategory,
} from 'utils/docs'

import Layout from 'components/Layout'
import Page from 'components/Page'

export default function Content({ content, mainNav, secondaryNav }) {
  return (
    <Layout mainNav={mainNav} secondaryNav={secondaryNav}>
      <Page data={content} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getDocsSlugs()

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  const slugPath = slug.join('/')
  const content = getDocBySlug(slugPath)
  const mainNav = getDocsIndexes()
  const secondaryNav = getSiblingDocsGroupedByCategory(slugPath)

  return {
    props: {
      content,
      mainNav,
      secondaryNav,
    },
  }
}
