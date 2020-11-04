
import mkdirp from 'mkdirp'
import { writeFileSync } from 'fs'

import { theme } from './src/index'

mkdirp.sync('lib')
writeFileSync('lib/index.json', JSON.stringify(theme), {
  encoding: 'utf8'
})

console.log('Build complete.\n')
