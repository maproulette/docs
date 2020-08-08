import { getSiteMetaData } from 'utils/helpers'

import SvgSymbol from 'components/SvgSymbol'

function Footer() {
  const siteMetadata = getSiteMetaData()

  return (
    <footer className="px-4 py-8 lg:py-12 bg-blue">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex items-center space-x-6 text-xs leading-4 font-mono">
          <li>
            <a
              href="https://maproulette.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-turquoise transition-colors duration-200"
            >
              <SvgSymbol symbolId="logomark" className="w-4 h-4" />
              <span>MapRoulette.org</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/osmlab/maproulette3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-turquoise transition-colors duration-200"
            >
              <SvgSymbol symbolId="icon-github" className="w-4 h-4" />
              <span>Github</span>
            </a>
          </li>
        </ul>{' '}
      </div>
    </footer>
  )
}

export default Footer
