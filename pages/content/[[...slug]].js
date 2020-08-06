import {
  getDocsSlugs,
  getDocBySlug,
  getSiblingDocsGroupedByCategory,
  getDocsIndexes,
} from 'utils/docs'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

export default function Doc({ mainNav, secondaryNav, doc }) {
  return (
    <Layout mainNav={mainNav} secondaryNav={secondaryNav}>
      <SEO title="Doc" />
      <pre>
        <code>{JSON.stringify(doc, true, true)}</code>
      </pre>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getDocsSlugs()

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  const slugPath = slug.join('/')
  const doc = getDocBySlug(slugPath)
  const secondaryNav = getSiblingDocsGroupedByCategory(slugPath)
  const mainNav = getDocsIndexes()

  return {
    props: {
      mainNav,
      secondaryNav,
      doc,
    },
  }
}
