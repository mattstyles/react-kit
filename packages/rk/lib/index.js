
const path = require('path')
const fs = require('fs').promises

const rollup = require('rollup')
const rimraf = require('rimraf')

const { options } = require('./options')
const { getPackage, debug } = require('./utils')
const { input, output } = require('./rollup')

exports.build = async function build ({
  entry,
  type
} = options) {
  const cwd = process.cwd()
  debug('Process cwd', cwd)

  let pkg
  try {
    pkg = await getPackage({ dir: cwd })
  } catch (err) {
    console.error(err)
    console.log(`Can not find package.json for ${path.basename(cwd)}`)
    return
  }

  const inputPath = path.join(cwd, entry)
  debug('Entry path', inputPath)

  const bundle = await rollup.rollup({
    ...input({ pkg, type, isProduction: true }),
    input: inputPath
  })

  const outputPaths = {
    esm: path.join(cwd, pkg.module),
    cjs: path.join(cwd, pkg.main)
  }

  debug('Output paths', outputPaths)

  Object.keys(outputPaths).forEach(output => {
    rimraf.sync(path.dirname(outputPaths[output]))
  })

  // ESM build
  await bundle.write({
    ...output(),
    file: outputPaths.esm,
    format: 'esm'
  })

  // CJS build
  await bundle.write({
    ...output(),
    file: outputPaths.cjs,
    format: 'cjs'
  })
}

exports.watch = async function watch ({
  entry,
  type
} = options) {
  const cwd = process.cwd()

  let pkg
  try {
    pkg = await getPackage({ dir: cwd })
  } catch (err) {
    console.error(err)
    console.log(`Can not find package.json for ${path.basename(cwd)}`)
    return
  }

  const watcher = rollup.watch({
    ...input({ pkg, type, isProduction: false }),
    input: path.join(cwd, entry),
    output: [
      // esm only for a watch
      {
        ...output(),
        file: path.join(cwd, pkg.module),
        format: 'esm'
      }
    ]
  })
}
