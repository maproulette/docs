import { getDocs } from 'utils/docs'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

export default function Home({ docs }) {
  return (
    <Layout docs={docs}>
      <SEO title="Home" />
      <p>Next.js app.</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const docs = getDocs()

  return {
    props: {
      docs,
    },
  }
}
