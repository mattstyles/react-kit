#!/usr/bin/env node

const { build, watch } = require('../lib')
const { options } = require('../lib/options')

const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    e: 'entry',
    t: 'type'
  },
  default: {
    entry: options.entry,
    type: options.type
  }
})

const modes = {
  build: build,
  watch: watch
}

const getModeFunction = mode => {
  if (!mode || !modes[mode]) {
    console.error('Can not run rk without a mode specified')
    process.exit(1)
  }

  return modes[mode]
}

const run = getModeFunction(argv._[0])

run({
  entry: argv.entry,
  type: argv.type
})
