#!/usr/bin/env node

const { build } = require('../lib')
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

build({
  entry: argv.entry,
  type: argv.type
})
