
import { extend } from '@raid-ui/core'
import { theme as base } from '@raid-ui/theme'

const extendBase = extend(base)

const background = {
  50: 'hsl(255, 85%, 8%)',
  75: 'hsl(255, 86%, 11%)',
  100: 'hsl(256, 58%, 18%)',
  200: 'hsl(255, 32%, 30%)',
  300: 'hsl(255, 23%, 44%)',
  400: 'hsl(255, 20%, 56%)',
  500: 'hsl(255, 18%, 68%)',
  600: 'hsl(255, 16%, 80%)',
  700: 'hsl(255, 12%, 90%)',
  800: 'hsl(260, 10%, 96%)',
  900: 'hsl(262, 6%, 99%)'
}

const green = {
  400: '#6cdad3',
  500: '#36CDC4',
  600: '#2db4ab',
  700: '#25938c'
}

const pink = {
  400: '#ff5cb0',
  500: '#FF1690',
  600: '#f5007e',
  700: '#cc0069'
}

const yellow = {
  400: '#f7e3a1',
  500: '#F4D676',
  600: '#f0c742',
  700: '#edbc1d'
}

const cyan = {
  400: '#7feef0',
  500: '#5be9ec',
  600: '#2de2e6',
  700: '#1ad8db'
}

export const theme = extendBase({
  colors: {
    background: background,
    positive: green,
    critical: pink,
    warning: yellow,
    info: cyan,
    primary: green['400']
  },
  borders: {
    base: {
      100: `2px solid ${background['100']}`,
      200: `2px solid ${background['200']}`
    }
  },
  tokens: {
    type: {
      body: {
        // ref: colors
        main: 'text.75',
        inverse: 'text.100',
        muted: 'text.400'
      },
      heading: {
        // ref: colors
        main: 'text.100',
        inverse: 'text.100',
        muted: 'text.400'
      }
    }
  }
})
