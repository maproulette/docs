import Document, { Html, Head, Main, NextScript } from 'next/document'

import Layout from 'components/Layout'
import SvgSprites from 'components/SvgSprites'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="bg-blue antialiased leading-tight">
        <Head />
        <body className="text-white leading-normal">
            <Layout>
          <Main tabindex="-1" class="outline-none" />
          </Layout>
          <SvgSprites />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument