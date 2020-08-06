import fs from 'fs'
import path from 'path'
import collect from 'collect.js'
import matter from 'gray-matter'

import { getFormattedDate } from 'utils/helpers'

function docsDir() {
  return `${process.cwd()}/content/docs/`
}

function getDocs() {
  const folderPath = docsDir()
  const docs = {}
  getDirectories(folderPath).map((path) => {
    getFiles(folderPath + '/' + path).map((file) => {
      file = parseFile(folderPath + path + '/' + file)
      docs[file.slug] = file
    })
  })
  return docs
}

export function getDocsIndexes() {
  const folderPath = docsDir()
  return collect(
    getDirectories(folderPath).map((path) => {
      const files = collect(
        getFiles(folderPath + '/' + path).map((file) => {
          return parseFile(folderPath + path + '/' + file)
        })
      )
        .where('name', 'index')
        .first()
      return files
    })
  )
    .sortBy('frontmatter.sort')
    .all()
}

export function getDocsSlugs() {
  return [] // Object.keys(getDocs())
}

export function getDocBySlug(slug) {
  return collect(getDocs()).where('slug', slug).first()
}

export function getSiblingDocsGroupedByCategory(slug) {
  return collect(getDocs())
    .where('dirname', path.dirname(slug))
    .filter((item, key) => item.name !== 'index')
    .mapToGroups((item, key) => [item.frontmatter.category, item])
    .all()
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

  const name = path.basename(filePath, '.md')
  const slug = path.dirname(path.relative(docsDir(), filePath)) + '/' + name

  return {
    name,
    slug,
    dirname: path.dirname(slug),
    frontmatter,
    excerpt,
    content,
  }
}
