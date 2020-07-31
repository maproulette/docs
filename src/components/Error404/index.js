import React, { useEffect } from 'react'

const title = '404 Not Found'

function Error404() {
  useEffect(() => {
    document.title = title
  })

  return (
    <div className="text-center">
      <h1>{title}</h1>
      <p className="leading-5 text-gray-500">
        The resource you are looking for cannot be found.
      </p>
    </div>
  )
}

export default Error404
