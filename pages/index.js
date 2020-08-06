import { getDocBySlug, getDocsIndexes } from 'utils/docs'

import Layout from 'components/Layout'
import Page from 'components/Page'

export default function Home({ content, mainNav }) {
  return (
    <Layout mainNav={mainNav}>
      <Page data={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const content = getDocBySlug('introduction/index')
  const mainNav = getDocsIndexes()

  return {
    props: {
      content,
      mainNav,
    },
  }
}
