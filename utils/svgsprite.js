const fs = require('fs').promises
const path = require('path')
const util = require('util')
const glob = require('glob')

const File = require('vinyl')
const SVGSpriter = require('svg-sprite')

const cwd = path.resolve('src/assets/svg')
const spriteConfig = {
  mode: {
    inline: true,
    symbol: {
      sprite: 'sprite.svg',
      example: false,
    },
  },
  shape: {
    transform: ['svgo'],
    id: {
      generator: 'symbol-%s',
    },
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
  },
}

module.exports = async () => {
  const spriter = new SVGSpriter(spriteConfig)

  try {
    const files = await fs.readdir(cwd)

    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.svg') {
        const filePath = path.join(cwd, file)
        const contents = await fs.readFile(filePath)
        spriter.add(new File({ path: filePath, base: cwd, contents }))
      }
    }

    const compile = util.promisify(spriter.compile.bind(spriter))
    const result = await compile(spriteConfig.mode)
    return result.symbol.sprite.contents.toString('utf8')
  } catch (error) {
    console.error('Error in svgsprite:', error)
    throw new Error(`Error in svgsprite: ${error.message}`)
  }
}
