import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import fetchMarkdown from 'lib/fetchMarkdown'
import Error404 from 'components/Error404'

function Page() {
  let { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    fetchMarkdown(slug)
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
  }, [slug])

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
