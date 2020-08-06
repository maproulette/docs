import { useRef, useEffect } from 'react'

import useKeyPress from 'hooks/useKeyPress'

function LiveSearch() {
  const searchInput = useRef(null)
  const searchFocused = useKeyPress('/')

  useEffect(() => {
    if (searchFocused) {
      searchInput.current.focus()
    }
  }, [searchFocused])

  return (
    <input
      ref={searchInput}
      type="search"
      className="w-full outline-none rounded shadow-inner font-mono leading-6 text-white bg-black-15 placeholder-gray-400 focus:placeholder-white px-3 py-2"
      placeholder="Search the docs... (Press &ldquo;/&rdquo; to focus)"
    />
  )
}

export default LiveSearch
