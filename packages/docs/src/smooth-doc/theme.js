
import { theme as base } from 'smooth-doc/src/theme'
import { theme as core } from '@raid-ui/theme'
import deepmerge from 'deepmerge'

// For some reason adding breakpoints conflicts with smooth-doc theme and affects general layout of the site
const { breakpoints, ...rest } = core

export const theme = deepmerge.all([
  rest,
  base,
  {
    fonts: {
      base: 'Source Sans Pro',
      heading: 'Barlow Semi Condensed'
    }
  }
])
