const fs = require('fs-extra')
const path = require('path')

const originalFolder = './src/en-us'

const languages = ['es'] // Add more languages as needed

const buildFolder = 'src'

async function copyOriginalFolderForLanguages() {
  try {
    for (const language of languages) {
      const targetFolder = path.join(buildFolder, language)
      await fs.copy(originalFolder, targetFolder)
      console.log(
        `Copied '${originalFolder}' to '${targetFolder}' for ${language} language.`
      )
    }
    console.log('All folders copied successfully.')
  } catch (error) {
    console.error('Error copying folders:', error)
  }
}

copyOriginalFolderForLanguages()
