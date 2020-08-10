import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown/with-html'
import Link from 'next/link'
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

  const { frontmatter, content, nextDoc, prevDoc } = data

  const { title, headline, description, draft } = frontmatter

  return (
    <>
      <SEO title={headline || title} description={description} />
      <div className="mb-24">
        <header className="mb-4">
          <h1 className="text-4xl md:text-5xl font-light text-yellow leading-none font-display">
            {frontmatter.postUrl && '📕'} {headline || title}
          </h1>
          {draft && (
            <p className="mt-2 text-sm leading-4 font-mono opacity-50">
              <sup>*</sup> Note: This page is a draft.
            </p>
          )}
        </header>
        <div className="prose max-w-none">
          {frontmatter.postUrl ? (
            <a href={frontmatter.postUrl} target="_blank" rel="noopener">
              {frontmatter.postUrl}
            </a>
          ) : (
            <ReactMarkdown
              escapeHtml={false}
              source={content}
              renderers={{ code: CodeBlock }}
            />
          )}
        </div>
        {(nextDoc || prevDoc) && (
          <nav className="mt-24" role="navigation" aria-label="Pagination">
            <ol className="flex justify-between space-x-16 leading-tight">
              {prevDoc.slug && (
                <li>
                  <Link href={prevDoc.slug}>
                    <a className="button" aria-label="Goto previous doc">
                      Prev: {prevDoc.frontmatter.title}
                    </a>
                  </Link>
                </li>
              )}
              {nextDoc.slug && (
                <li className={!prevDoc && 'flex-grow flex justify-center'}>
                  <Link href={nextDoc.slug}>
                    <a className="button" aria-label="Goto next doc">
                      Next: {nextDoc.frontmatter.title}
                    </a>
                  </Link>
                </li>
              )}
            </ol>
          </nav>
        )}
      </div>
    </>
  )
}

Page.propTypes = {
  data: PropTypes.object,
}

export default Page
