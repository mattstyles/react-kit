
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'

export const variants = {
  sizes: {
    small: ({ icon }) => ({
      fontSize: tokens.type.baseSize,
      px: icon ? 1 : tokens.layout.padding,
      py: 1,
      minWidth: tokens.layout.padding * 20
    }),
    medium: ({ icon }) => ({
      fontSize: tokens.type.baseSize,
      px: icon ? 2 : tokens.layout.padding,
      py: 2,
      minWidth: tokens.layout.padding * 22
    }),
    large: ({ icon }) => ({
      fontSize: tokens.type.baseSize + 1,
      px: icon ? 3 : tokens.layout.padding + 1,
      py: 3,
      minWidth: tokens.layout.padding * 30
    })
  },
  rounding: {
    square: {
      borderRadius: 0
    },
    rounded: {
      borderRadius: tokens.layout.rounding
    },
    pill: {
      borderRadius: '2000px'
    }
  },
  buttons: {
    solid: props => {
      if (props.colour) {
        return {
          '&:disabled': {
            color: 'background.500',
            bg: 'background.200',
            '&:hover': {
              bg: 'background.200'
            }
          }
        }
      }
      return {
        bg: 'background.200',
        '&:hover': {
          bg: 'background.300'
        },
        '&:active': {
          bg: 'background.400'
        },
        '&:disabled': {
          color: 'background.500',
          '&:hover': {
            bg: 'background.200'
          }
        }
      }
    },
    transparent: {
      bg: 'transparent',
      color: tokens.type.body.main,
      '&:hover': {
        bg: 'rgba(0, 0, 0, 0.05)'
      },
      '&:active': {
        bg: 'rgba(0, 0, 0, 0.1)'
      },
      '&:disabled': {
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent'
        }
      }
    },
    outline: {
      bg: 'transparent',
      color: tokens.type.body.main,
      borderColor: 'background.300',
      '&:hover': {
        bg: 'background.300'
      },
      '&:active': {
        bg: 'background.300'
      },
      '&:disabled': {
        bg: 'background.200',
        color: 'background.500',
        borderColor: 'background.200',
        '&:hover': {
          bg: 'background.200'
        }
      }
    },
    link: {
      bg: 'transparent',
      color: 'inherit',
      lineHeight: 'inherit',
      minWidth: 'auto',
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:disabled': {
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent',
          textDecoration: 'none'
        }
      }
    },
    naked: {
      bg: 'transparent',
      color: 'inherit',
      lineHeight: 'inherit',
      minWidth: 'auto',
      p: 0,
      verticalAlign: 'baseline',
      fontWeight: 'inherit',
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:disabled': {
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent',
          textDecoration: 'none'
        }
      }
    }
  },
  colours: {
    red: {
      bg: 'critical.500',
      color: tokens.type.body.inverse,
      fill: tokens.type.body.inverse,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'critical.600',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'critical.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.critical[400]} 0px 0px 0px 0.1875rem`
      }
    },
    green: {
      bg: 'positive.500',
      color: tokens.type.body.inverse,
      fill: tokens.type.body.inverse,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'positive.600',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'positive.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.positive[400]} 0px 0px 0px 0.1875rem`
      }
    },
    blue: {
      bg: 'info.600',
      color: tokens.type.body.inverse,
      fill: tokens.type.body.inverse,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'info.700',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'info.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.info[400]} 0px 0px 0px 0.1875rem`
      }
    },
    yellow: {
      bg: 'warning.500',
      color: tokens.type.body.main,
      fill: tokens.type.body.main,
      '&:hover': {
        bg: 'warning.600'
      },
      '&:active': {
        bg: 'warning.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.warning[400]}88 0px 0px 0px 0.1875rem`
      }
    }
  }
}

export const sizeVariant = props => context({
  prop: 'size',
  scale: 'variants.buttonSizes',
  variants: variants.size
})

export const roundingVariant = context({
  prop: 'rounding',
  scale: 'variants.rounding',
  variants: variants.rounding
})

export const typeVariant = context({
  prop: 'variant',
  scale: 'variants.buttons',
  variants: variants.buttons
})

export const colourVariant = context({
  prop: 'colour',
  scale: 'variants.buttonColours',
  variants: variants.colours
})
