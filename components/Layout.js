import PropTypes from 'prop-types'

import Header from 'components/Header'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-r-green-blue">
      <a href="#content" className="sr-only">
        Skip to content
      </a>
      <Header />
      <main id="content" className="px-4">
        <div className="max-w-screen-xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
