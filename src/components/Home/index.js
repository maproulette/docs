import React from 'react'
import ReactMarkdown from 'react-markdown'

const title = 'Home'

function Home() {
  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown source="This is the homepage." />
    </>
  )
}

export default Home
