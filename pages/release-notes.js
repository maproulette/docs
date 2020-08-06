import { getDocsIndexes } from 'utils/docs'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

export default function ReleaseNotes({ mainNav }) {
  return (
    <Layout mainNav={mainNav}>
      <SEO title="Release Notes" />
      <p>Fetch latest release notes...</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const mainNav = getDocsIndexes()

  return {
    props: {
      mainNav,
    },
  }
}
