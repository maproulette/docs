const fs = require('fs-extra')
const path = require('path')

// Define the original folder to be copied
const originalFolder = './src/en-us' // Change 'original' to the name of your original folder

// Define the list of languages you want to support
const languages = ['es'] // Add more languages as needed

// Define the build (dist) folder
const buildFolder = 'src' // Change 'dist' to match your build folder name

// Function to copy the original folder for each language in the build folder
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

// Call the function to copy original folder for each language during build
copyOriginalFolderForLanguages()
