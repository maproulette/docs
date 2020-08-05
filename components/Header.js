import { useRef, useEffect } from 'react'
import Link from 'next/link'

import SvgSymbol from 'components/SvgSymbol'
import useKeyPress from 'hooks/useKeyPress'

function Header() {
  const searchInput = useRef(null)
  const searchFocused = useKeyPress('/')

  useEffect(() => {
    if (searchFocused) {
      searchInput.current.focus()
    }
  }, [searchFocused])

  return (
    <header className="p-4 md:py-8">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex items-center space-x-4 sm:space-x-6">
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
          <div className="flex-grow lg:w-3/4 xl:w-4/5">
            <input
              ref={searchInput}
              type="search"
              className="w-full outline-none rounded shadow-inner font-mono leading-6 text-white bg-black-15 placeholder-gray-400 focus:placeholder-white px-3 py-2"
              placeholder="Search the docs... (Press &ldquo;/&rdquo; to focus)"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
