
import mkdirp from 'mkdirp'
import { writeFileSync } from 'fs'

import { theme } from './src/index'

console.log('Note that this process is destructive, you will lose scale aliases from the library due to JS being permissive about hash maps.')

mkdirp.sync('lib')
writeFileSync('lib/index.json', JSON.stringify(theme), {
  encoding: 'utf8'
})

console.log('Build complete.')
