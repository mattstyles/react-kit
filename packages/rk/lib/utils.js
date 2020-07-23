
const path = require('path')
const fs = require('fs').promises

const bug = require('debug')

const cwd = process.cwd()

const debug = bug('rk')

module.exports = {
  getFile,
  getPackage,
  debug
}

/**
 * Gets a file at dir + file
 * @param {Object} options - function options
 * @param {string} options.dir - directory path
 * @param {string} options.filename - file name
 * @throws file system error on reading the file
 * @returns {string} utf8 encoded file contents
 */
async function getFile ({ dir, filename }) {
  if (!filename) {
    throw new Error('No file specified')
  }

  const filepath = path.join(cwd, filename)
  const file = await fs.readFile(filepath, { encoding: 'utf8' })

  return file
}

/**
 * Gets local package.json at dir and parses it into an object
 * @param {Object} options - function options
 * @param {string} options.dir - directory path
 * @throws file system error on reading the file
 * @throws parse error on parsing the package.json
 * @returns {Object} parsed from package.json
 */
async function getPackage ({ dir: cwd }) {
  const file = await getFile({ cwd, filename: './package.json' })
  const pkg = JSON.parse(file)
  return pkg
}
