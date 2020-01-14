
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

import babelConfig from './babel.config.json'
import babelCompatConfig from './babel.config.compat.json'
import pkg from './package.json'

const project = 'react-basic-kit'

const umdOutput = {
  name: project.replace(/^./, ch => ch.toUpperCase()),
  file: `dist/${project}.min.js`
}

const externals = {
  ...pkg.dependencies || {},
  ...pkg.peerDependencies || {},
  'raid-streams/screen': 'raid-streams/screen'
}

const umd = {
  input: 'src/index.js',
  external: [
    ...Object.keys(externals)
  ],
  output: {
    name: umdOutput.name,
    file: umdOutput.file,
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    babel(babelConfig),
    terser({
      sourcemap: true
    }),
    filesize()
  ]
}

const compatUmd = {
  input: 'src/index.js',
  external: [
    ...Object.keys(externals)
  ],
  output: {
    name: umdOutput.name,
    file: `dist/${project}.compat.min.js`,
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    babel(babelCompatConfig),
    terser({
      sourcemap: true
    }),
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

const compatMod = {
  input: 'src/index.js',
  external: [
    ...Object.keys(externals)
  ],
  output: [
    {
      file: `lib/${project}.compat.mjs`,
      format: 'es'
    }
  ],
  plugins: [
    babel(babelCompatConfig),
    filesize()
  ]
}

export default [
  // umd
  umd,
  compatUmd,
  // cjs/es
  mod,
  compatMod
]
