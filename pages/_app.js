import 'typeface-roboto'
import 'typeface-ibm-plex-mono'

import 'styles/index.css'
import Layout from 'components/Layout'
import SvgSprites from 'components/SvgSprites'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SvgSprites />
    </>
  )
}

export default MyApp
