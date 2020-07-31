import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import fetchMarkdown from 'lib/fetchMarkdown'
import Error404 from 'components/Error404'

function Page() {
  let location = useLocation()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    fetchMarkdown(location.pathname)
      .then((result) => {
        setData(result)
        document.title = result.data.title
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [location.pathname])

  if (loading) {
    return 'loading...'
  }

  if (!data) {
    return <Error404 />
  }

  const { data: frontmatter, content } = data

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown source={content} />
    </>
  )
}

export default Page
