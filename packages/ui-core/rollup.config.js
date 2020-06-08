
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

import babelConfig from './babel.config.json'
import pkg from './package.json'

const project = 'raiduicore'

const umdOutput = {
  name: project.replace(/^./, ch => ch.toUpperCase()),
  file: `dist/${project}.min.js`
}

const externals = {
  ...pkg.dependencies || {},
  ...pkg.peerDependencies || {}
}

const umd = {
  input: 'src/index.js',
  external: [
    ...Object.keys(externals)
  ],
  output: {
    name: umdOutput.name,
    file: umdOutput.file,
    format: 'umd'
  },
  plugins: [
    babel(babelConfig),
    terser(),
    filesize()
  ]
}

// cjs/es
const mod = {
  input: 'src/index.js',
  external: [
    ...Object.keys(externals)
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    babel(babelConfig),
    filesize()
  ]
}

export default [
  // umd
  umd,
  // cjs/es
  mod
]
