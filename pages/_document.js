import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getSiteMetaData } from 'utils/helpers'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const siteMetadata = getSiteMetaData()

    return (
      <Html
        lang={siteMetadata.language}
        className="bg-blue antialiased leading-tight"
      >
        <Head />
        <body className="text-white leading-normal bg-gradient-r-green-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
