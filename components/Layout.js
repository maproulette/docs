import PropTypes from 'prop-types'

import Header from 'components/Header'

function Layout({ children }) {
  return (
    <div tabIndex={-1} role="group" className="min-h-screen outline-none">
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
