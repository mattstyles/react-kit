
import { themeGet } from '@styled-system/theme-get'
import { map, apply } from '@raid/ui-core'

import { context } from '../theme/context'

const sizeModifiers = {
  small: 20,
  medium: 22,
  large: 30
}

export const variants = {
  sizes: {
    small: (props) => ({
      fontSize: themeGet('tokens.type.baseSize')(props),
      px: props.icon ? 1 : themeGet('tokens.layout.padding')(props),
      py: 1,
      minWidth: themeGet('tokens.layout.padding')(props) * sizeModifiers.small
    }),
    medium: (props) => ({
      fontSize: themeGet('tokens.type.baseSize')(props),
      px: props.icon ? 2 : themeGet('tokens.layout.padding')(props),
      py: 2,
      minWidth: themeGet('tokens.layout.padding')(props) * sizeModifiers.medium
    }),
    large: (props) => ({
      fontSize: map(apply(1))(themeGet('tokens.type.baseSize')(props)),
      px: props.icon ? 3 : map(apply(1))(themeGet('tokens.layout.padding')(props)),
      py: 3,
      minWidth: themeGet('tokens.layout.padding')(props) * sizeModifiers.large
    })
  },
  rounding: {
    square: {
      borderRadius: 0
    },
    rounded: props => ({
      borderRadius: themeGet('tokens.layout.rounding')(props)
    }),
    circular: {
      borderRadius: 'circular'
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
    transparent: props => ({
      bg: 'transparent',
      color: themeGet('tokens.type.body.main')(props),
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
    }),
    outline: props => ({
      bg: 'transparent',
      color: themeGet('tokens.type.body.main')(props),
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
    }),
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
    },
    primary: props => ({
      bg: 'primary',
      color: themeGet('tokens.type.body.inverse')(props),
      '&:disabled': {
        bg: 'background.200',
        color: 'background.500',
        '&:hover': {
          bg: 'background.200'
        }
      }
    })
  },
  colours: {
    critical: props => ({
      bg: 'critical.500',
      color: themeGet('tokens.type.body.inverse')(props),
      fill: themeGet('tokens.type.body.inverse')(props),
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
    }),
    positive: props => ({
      bg: 'positive.500',
      color: themeGet('tokens.type.body.inverse')(props),
      fill: themeGet('tokens.type.body.inverse')(props),
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
    }),
    info: props => ({
      bg: 'info.600',
      color: themeGet('tokens.type.body.inverse')(props),
      fill: themeGet('tokens.type.body.inverse')(props),
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
    }),
    warning: props => ({
      bg: 'warning.500',
      color: themeGet('tokens.type.body.main')(props),
      fill: themeGet('tokens.type.body.main')(props),
      '&:hover': {
        bg: 'warning.600'
      },
      '&:active': {
        bg: 'warning.700'
      },
      '&:focus': {
        boxShadow: t => `${t.colors.warning[400]}88 0px 0px 0px 0.1875rem`
      }
    })
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

// Use British spelling, otherwise the variant prop for colourisation will
// conflict with the color css property
export const colourVariant = context({
  prop: 'colour',
  scale: 'variants.buttonColours',
  variants: variants.colours
})
