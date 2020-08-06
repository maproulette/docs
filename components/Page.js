import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import SEO from 'components/Seo'
import SvgSymbol from 'components/SvgSymbol'

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {value}
    </SyntaxHighlighter>
  )
}

function Page({ data }) {
  if (!data) {
    return (
      <SvgSymbol
        title="Loading..."
        symbolId="icon-spinner"
        className="w-8 h-8 text-turquoise"
      />
    )
  }

  const { frontmatter, content } = data

  const { title, headline, description } = frontmatter

  return (
    <div>
      <SEO title={headline || title} description={description} />
      <div className="space-y-8 mb-16">
        <h1 className="mb-2 text-4xl md:text-5xl font-bold leading-none font-display">
          {headline || title}
        </h1>
        <ReactMarkdown
          className="prose-sm prose sm:prose lg:prose-lg"
          escapeHtml={false}
          source={content}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </div>
  )
}

Page.propTypes = {
  data: PropTypes.object,
}

export default Page
