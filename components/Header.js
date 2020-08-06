import Link from 'next/link'

import SvgSymbol from 'components/SvgSymbol'
import LiveSearch from 'components/LiveSearch'

function Header() {
  return (
    <header className="px-4 py-8 lg:py-12">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/">
            <a
              className="flex-shrink-0 lg:w-1/4 xl:w-1/5 text-white"
              rel="home"
            >
              <span className="sr-only">{process.env.REACT_APP_NAME}</span>
              <SvgSymbol
                symbolId="logo"
                viewBox="0 0 174 40"
                className="hidden sm:block w-56 h-auto"
              />
              <SvgSymbol symbolId="logomark" className="sm:hidden w-12 h-12" />
            </a>
          </Link>
          <a href="#content" className="sr-only">
            Skip to content
          </a>
          <div className="w-full lg:w-2/4 xl:w-3/5">
            <LiveSearch />
          </div>
          <ul className="flex-shrink-0 flex-grow justify-end flex items-center space-x-4">
            <li>
              <a
                href="https://github.com/osmlab/maproulette3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-turquoise transition-colors duration-200"
              >
                <SvgSymbol symbolId="icon-github" className="w-5 h-5" />
                <span className="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://maproulette.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-turquoise transition-colors duration-200"
              >
                <SvgSymbol symbolId="logomark" className="w-5 h-5" />
                <span className="sr-only">MapRoulette.org</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
