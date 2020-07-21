#!/usr/bin/env node

import parse from 'minimist'

import { build } from '../lib/index.js'
import { options } from '../lib/options.js'

const argv = parse(process.argv.slice(2), {
  alias: {
    e: 'entry'
  },
  default: {
    entry: options.entry
  }
})

build({
  entry: argv.entry
})
