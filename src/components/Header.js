import React from 'react'
import { Link } from 'react-router-dom'

import SvgSymbol from 'components/SvgSymbol'

function Header() {
  return (
    <header className="p-4 md:py-8">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link
            to="/"
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
          </Link>
          <div className="flex-grow lg:w-3/4 xl:w-4/5">
            <input
              type="search"
              className="w-full outline-none rounded shadow-inner font-mono text-white bg-black-15 placeholder-gray-400 focus:placeholder-white p-2"
              placeholder="Search the docs... (Press &ldquo;/&rdquo; to focus)"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
