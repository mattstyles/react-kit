
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
const filesize = require('rollup-plugin-filesize')

const { ui, core } = require('./babel')

const babelConfigMap = {
  ui: ui,
  core: core
}
const getBabelConfig = type => {
  if (!type) {
    return babelConfigMap.core
  }

  return babelConfigMap[type]
}

exports.input = ({ pkg, type, isProduction }) => {
  const babelConfig = getBabelConfig(type)
  return {
    external: [
      ...Object.keys({
        ...pkg.dependencies || {},
        ...pkg.peerDependencies || {}
      })
    ],
    plugins: [
      babel({
        ...babelConfig(),
        babelHelpers: 'bundled'
      }),
      isProduction && terser(),
      filesize()
    ]
  }
}

exports.output = () => {
  return {
    format: 'esm'
  }
}
