
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import { writeFileSync } from 'fs'

import { theme } from './src/index'

const outputPath = './theme.json'

rimraf.sync(outputPath)
mkdirp.sync('lib')
writeFileSync(outputPath, JSON.stringify(theme), {
  encoding: 'utf8'
})

console.log('Build complete.\n')
