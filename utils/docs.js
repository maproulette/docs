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
  return docs.sortBy('frontmatter.sort')
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
  const docs = getDocs().values().all()
  const docIndex = docs.findIndex(({ slug: docSlug }) => docSlug === slug)

  const doc = docs[docIndex]
  const prevDoc = docs[docIndex - 2] ?? null
  const nextDoc = docs[docIndex + 1] ?? null

  return {
    ...doc,
    prevDoc,
    nextDoc,
  }
}

export function getSiblingDocsGroupedByCategory(slug) {
  return getDocs()
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
