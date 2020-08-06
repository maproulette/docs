import { getDocsIndexes } from 'utils/docs'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

export default function Home({ mainNav }) {
  return (
    <Layout mainNav={mainNav}>
      <SEO title="Home" />
      <p>Next.js app.</p>
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
