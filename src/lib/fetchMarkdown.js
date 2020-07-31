const fetchMarkdown = async (slug) => {
  const contents = await import(`!!gray-matter-loader!../../content/${slug}.md`)
  return contents.default
}

export default fetchMarkdown
