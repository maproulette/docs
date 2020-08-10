import { getSiteMetaData } from 'utils/helpers'

import SvgSymbol from 'components/SvgSymbol'

function Footer() {
  const siteMetadata = getSiteMetaData()

  return (
    <footer className="p-4 md:py-8 bg-blue">
      <div className="max-w-screen-xl mx-auto space-y-4 md:space-y-0 md:flex justify-between text-xs leading-4 font-mono">
        <ul className="flex items-center justify-center md:justify-start space-x-6 md:space-x-8">
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
          <li>
            <a
              href="https://github.com/osmlab/maproulette3/issues/1359"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-turquoise transition-colors duration-200"
            >
              Code of Conduct
            </a>
          </li>
        </ul>
        <p className="text-center md:text-left">
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener noreferrer"
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
