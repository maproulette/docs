import ReactMarkdown from 'react-markdown/with-html'

import { getDocsIndexes } from 'utils/docs'
import { getFormattedDate } from 'utils/helpers'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

const title = 'Front-end Releases'

export default function ReleaseNotes({ mainNav, releases }) {
  return (
    <Layout mainNav={mainNav}>
      <div className="mb-24">
        <SEO title={title} />
        <h1 className="text-4xl md:text-5xl font-light text-yellow leading-none font-display mb-8">
          {title}
        </h1>
        <ol className="space-y-4">
          {releases.map((item) => (
            <li key={item.id}>
              <details className="space-y-4">
                <summary className="inline-block text-xl lg:text-2xl outline-none cursor-pointer">
                  {item.name ? (
                    `${item.name} (${item.tag_name})`
                  ) : (
                    <>
                      <span className="sr-only">Release:</span>
                      {item.tag_name}
                    </>
                  )}
                </summary>
                <dl className="ml-6">
                  <div className="flex space-x-2">
                    <dt className="font-bold flex-shrink-0">Release Date:</dt>
                    <dd className="flex-grow">
                      <time dateTime={item.published_at}>
                        {getFormattedDate(new Date(item.published_at))}
                      </time>
                    </dd>
                  </div>
                  <dt className="font-bold">Notes:</dt>
                  <dd className="prose prose-sm max-w-none">
                    <ReactMarkdown escapeHtml={false} source={item.body} />
                  </dd>
                </dl>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const mainNav = getDocsIndexes()
  const res = await fetch(
    'https://api.github.com/repos/osmlab/maproulette3/releases'
  )
  const releases = await res.json()

  return {
    props: {
      mainNav,
      releases,
    },
  }
}
