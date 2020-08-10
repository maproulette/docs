import { getSiteMetaData } from 'utils/helpers'

import SvgSymbol from 'components/SvgSymbol'

function Footer() {
  const siteMetadata = getSiteMetaData()

  return (
    <footer className="px-4 py-8 bg-blue">
      <div className="max-w-screen-xl mx-auto flex justify-between text-xs leading-4 font-mono">
        <ul className="flex items-center space-x-6">
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
        </ul>
        <p>
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-turquoise transition-colors duration-200"
          >
            This site is powered by Netlify
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
