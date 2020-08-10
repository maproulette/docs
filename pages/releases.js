import ReactMarkdown from 'react-markdown/with-html'

import { getDocsIndexes } from 'utils/docs'
import { getFormattedDate } from 'utils/helpers'

import Layout from 'components/Layout'
import SEO from 'components/Seo'

const title = 'Releases'

const Releases = function ({ items }) {
  if (!items) {
    return 'Loading...'
  }

  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <li key={item.id}>
          <details className="space-y-4">
            <summary className="inline-block text-xl lg:text-2xl outline-none cursor-pointer">
              <span className="sr-only">Release:</span>
              {item.tag_name}
            </summary>
            <dl className="p-4 bg-gray-900 text-white rounded">
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
  )
}

export default function ReleaseNotes({
  mainNav,
  backEndReleases,
  frontEndReleases,
}) {
  return (
    <Layout mainNav={mainNav}>
      <div className="mb-24">
        <SEO title={title} />
        <h1 className="text-4xl md:text-5xl font-light text-yellow leading-none font-display mb-8">
          {title}
        </h1>
        <div className="md:grid grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-3xl">Front-end</h2>
            <Releases items={frontEndReleases} />
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl">Back-end</h2>
            <Releases items={backEndReleases} />
          </section>
        </div>
      </div>
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const mainNav = getDocsIndexes()
  const backEndReleasesResponse = await fetch(
    'https://api.github.com/repos/maproulette/maproulette2/releases'
  )
  const frontEndReleasesResponse = await fetch(
    'https://api.github.com/repos/osmlab/maproulette3/releases'
  )

  return {
    props: {
      mainNav,
      backEndReleases: await backEndReleasesResponse.json(),
      frontEndReleases: await frontEndReleasesResponse.json(),
    },
  }
}
