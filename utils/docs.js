import fs from 'fs'
import path from 'path'
import collect from 'collect.js'
import matter from 'gray-matter'

import { getFormattedDate } from 'utils/helpers'

export function getDocs() {
  const docs = {}
  const folderPath = `${process.cwd()}/content/docs/`
  getDirectories(folderPath).map((path) => {
    const files = collect(
      getFiles(folderPath + '/' + path).map((file) => {
        return parseFile(folderPath + path + '/' + file)
      })
    )
      .filter((item, key) => item.slug !== 'index')
      .mapToGroups((item, key) => [item.frontmatter.category, item])
      .all()
    docs[path] = files
  })

  return docs
}

function getDirectories(dir) {
  return fs.readdirSync(dir).filter(function (file) {
    return fs.statSync(dir + '/' + file).isDirectory()
  })
}

function getFiles(dir) {
  return fs.readdirSync(dir).filter(function (file) {
    return fs.statSync(dir + '/' + file).isFile()
  })
}

function parseFile(filePath) {
  const markdownWithMetadata = fs.readFileSync(filePath).toString()

  const { data, excerpt, content } = matter(markdownWithMetadata)

  const frontmatter = {
    ...data,
    date: getFormattedDate(data.date),
  }

  return {
    slug: path.basename(filePath, '.md'),
    frontmatter,
    excerpt,
    content,
  }
}
