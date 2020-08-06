import PropTypes from 'prop-types'
import Link from 'next/link'

import Header from 'components/Header'
import Footer from 'components/Footer'
import SvgSymbol from 'components/SvgSymbol'
import SvgSprites from 'components/SvgSprites'

function MainNavLink({ item, href }) {
  const slug = href ?? `/content/${item.slug}`

  return (
    <Link href={slug}>
      <a className="hover:text-turquoise transition-colors duration-200 flex items-center space-x-2">
        <SvgSymbol
          symbolId={
            {
              documentation: 'icon-book-open',
              screencasts: 'icon-play',
              'release-notes': 'icon-newspaper',
              default: 'icon-link',
            }[item.dirname]
          }
          className="w-5 h-5"
        />
        <span className="text-sm font-mono leading-5">
          {item.frontmatter.title}
        </span>
      </a>
    </Link>
  )
}

function Layout({ mainNav, secondaryNav, children }) {
  return (
    <>
      <div
        tabIndex={-1}
        role="group"
        className="outline-none min-h-screen flex flex-col"
      >
        <Header />
        <div className="px-4 mb-auto">
          <div className="max-w-screen-xl mx-auto lg:flex lg:space-x-6">
            <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/5 overflow-auto space-y-12">
              <nav aria-label="Main">
                <ol className="space-y-2">
                  {mainNav &&
                    mainNav.map((item, index) => (
                      <li key={index}>
                        <MainNavLink item={item} />
                      </li>
                    ))}
                  <li>
                    <MainNavLink
                      item={{
                        dirname: 'release-notes',
                        frontmatter: {
                          title: 'Release Notes',
                        },
                      }}
                      href="release-notes"
                    />
                  </li>
                </ol>
              </nav>
              {secondaryNav && (
                <nav aria-label="Secondary">
                  <ol>
                    {Object.entries(secondaryNav).map(([key, value]) => (
                      <li key={key}>
                        <h5 className="font-mono font-bold italic text-sm leading-6 tracking-wide uppercase">
                          {key}
                        </h5>
                        <ol className="text-sm leading-4 space-y-2">
                          {value.map((item, index) => (
                            <li key={index}>
                              <Link href={item.slug}>
                                <a>{item.frontmatter.title}</a>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
            <main id="content" className="w-full lg:w-2/4 xl:w-3/5">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </div>
      <SvgSprites />
    </>
  )
}

Layout.propTypes = {
  mainNav: PropTypes.array,
  secondaryNav: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Layout
