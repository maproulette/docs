import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'
import SvgSprites from 'components/SvgSprites'

function Layout({ docs, children }) {
  const mainNav = Object.keys(docs)

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
            <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/5 overflow-auto">
              <nav aria-label="Main">{JSON.stringify(Object.keys(docs))}</nav>
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
  docs: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
