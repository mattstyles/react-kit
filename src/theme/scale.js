
/**
 * Base scales
 */
export const scale4 = [
  0, 4, 8, 16, 32, 64, 128, 256
]

export const fibonacci = [
  0, 1, 2, 3, 5, 8, 13, 21, 35
]

export const linear10 = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90
]

/**
 * Typography
 */
// @TODO should we use breakpoint versions of these scales, particularly for fonts?
// @TODO typography tokenisation needs plenty of tidying
export const uiFontScale = [
  1.1, 1.2, 1.4, 1.6, 2.0, 2.3, 2.8, 3.5
].map(i => `${i}rem`)

// aligned to 4px grid, matches size scale
// @TODO should be framed to px? or this will become a multiplier scale?
export const lineHeights = [
  4, 8, 12, 16, 20, 24, 28, 32
]

// @TODO scale? or only having an alias object is ok?
export const kerning = {
  condensed: '-1px',
  narrow: '-0.5px',
  standard: '0px',
  expanded: '1px'
}

export const fonts = {
  fallback: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  main: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  monospace: 'Source Code Pro, Consolas, monospace'
}

/**
 * Layout scales
 */

export const borders = {
  light: '1px solid rgba(0, 0, 0, 0.2)'
}

export const shadows = {
  textOnLight: '0 1px rgba(0, 0, 0, 0.2)'
}

export const transitions = {
  main: 150,
  spin: 1250
}

export const breaks = [
  '40em',
  '52em',
  '64em'
]

/**
 * Scale aliases
 */
uiFontScale.xs = uiFontScale[0]
uiFontScale.s = uiFontScale[1]
uiFontScale.m = uiFontScale[2]
uiFontScale.l = uiFontScale[3]
uiFontScale.xl = uiFontScale[4]

lineHeights.s = lineHeights[2]
