import fs from 'fs'
import path from 'path'
import collect from 'collect.js'
import matter from 'gray-matter'

import { getFormattedDate } from 'utils/helpers'

function docsDir() {
  return `${process.cwd()}/content/`
}

function getDocs() {
  const folderPath = docsDir()
  const docs = collect([])
  getDirectories(folderPath).map((path) => {
    getFiles(folderPath + '/' + path).map((file) => {
      file = parseFile(folderPath + path + '/' + file)
      docs.push(file.slug, file)
    })
  })
  return docs
}

export function getDocsIndexes() {
  return getDocs()
    .where('name', 'index')
    .where('frontmatter.hideFromIndex', '!==', true)
    .sortBy('frontmatter.sort')
    .all()
}

export function getDocsSlugs() {
  return [] // getDocs().keys()
}

export function getDocBySlug(slug) {
  const docs = getDocs()
  const doc = docs.where('slug', slug).first()

  if (!doc) {
    return null
  }

  const siblingDocs = docs
    .where('frontmatter.draft', '!==', true)
    .where('name', '!==', 'index')
    .where('dirname', doc.dirname)
    .sortBy('frontmatter.sort')
    .all()

  const docIndex = siblingDocs.findIndex(
    ({ slug: docSlug }) => docSlug === slug
  )

  return {
    ...doc,
    prevDoc: siblingDocs[docIndex - 1] ?? false,
    nextDoc: siblingDocs[docIndex + 1] ?? false,
  }
}

export function getSiblingDocsGroupedByCategory(slug) {
  return getDocs()
    .where('dirname', path.dirname(slug))
    .filter((item, key) => item.name !== 'index')
    .sortBy('frontmatter.sort')
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
  const dirname = path.dirname(slug)

  return {
    name,
    slug,
    dirname,
    frontmatter,
    excerpt,
    content,
  }
}
