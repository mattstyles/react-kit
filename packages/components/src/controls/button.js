
import propTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { common, size as sizeProps } from '../system/props'
import { noop } from '../utils'
import { tokens, theme } from '../theme/index'

// @TODO add a naked button variant (useful for blank styling, or attaching as
// to Links from router libs)
export const variants = {
  size: ({
    icon
  }) => ({
    small: {
      fontSize: tokens.type.baseSize,
      px: icon ? 1 : tokens.layout.padding,
      py: 1,
      minWidth: tokens.layout.padding * 20
    },
    medium: {
      fontSize: tokens.type.baseSize,
      px: icon ? 2 : tokens.layout.padding,
      py: 2,
      minWidth: tokens.layout.padding * 22
    },
    large: {
      fontSize: tokens.type.baseSize + 1,
      px: icon ? 3 : tokens.layout.padding,
      py: 3,
      minWidth: tokens.layout.padding * 30
    }
  }),
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
    solid: {
      bg: 'gray.200',
      '&:hover': {
        bg: 'gray.300'
      },
      '&:active': {
        bg: 'gray.400'
      },
      '&:disabled': {
        color: 'gray.500',
        '&:hover': {
          bg: 'gray.200'
        }
      }
    },
    transparent: {
      bg: 'transparent',
      color: tokens.type.body.dark,
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
      color: tokens.type.body.dark,
      borderColor: 'gray.300',
      '&:hover': {
        bg: 'gray.300'
      },
      '&:active': {
        bg: 'gray.300'
      },
      '&:disabled': {
        bg: 'gray.200',
        color: 'gray.500',
        borderColor: 'gray.200',
        '&:hover': {
          bg: 'gray.200'
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
    }
  },
  colours: {
    red: {
      bg: 'red.500',
      color: tokens.type.body.light,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'red.600',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'red.700'
      },
      '&:focus': {
        boxShadow: `${theme.colors.red[400]} 0px 0px 0px 0.1875rem`
      }
    },
    green: {
      bg: 'green.500',
      color: tokens.type.body.light,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'green.600',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'green.700'
      },
      '&:focus': {
        boxShadow: `${theme.colors.green[400]} 0px 0px 0px 0.1875rem`
      }
    },
    blue: {
      bg: 'blue.600',
      color: tokens.type.body.light,
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        bg: 'blue.700',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
      '&:active': {
        bg: 'blue.700'
      },
      '&:focus': {
        boxShadow: `${theme.colors.blue[400]} 0px 0px 0px 0.1875rem`
      }
    },
    yellow: {
      bg: 'yellow.500',
      color: tokens.type.body.dark,
      '&:hover': {
        bg: 'yellow.600'
      },
      '&:active': {
        bg: 'yellow.700'
      },
      '&:focus': {
        boxShadow: `${theme.colors.yellow[400]}88 0px 0px 0px 0.1875rem`
      }
    }
  }
}

const sizeVariant = ({
  icon
}) => variant({
  prop: 'size',
  scale: 'buttonSizes',
  variants: variants.size({ icon })
})

const roundingVariant = variant({
  prop: 'rounding',
  scale: 'buttonRounding',
  variants: variants.rounding
})

const typeVariant = variant({
  prop: 'variant',
  scale: 'buttons',
  variants: variants.buttons
})

const colourVariant = variant({
  prop: 'colour',
  scale: 'buttonColours',
  variants: variants.colours
})

const base = css({
  apperance: 'none',
  display: 'inline-flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  verticalAlign: 'middle',
  textDecoration: 'none',

  // Horizontal fix for alignment of anchors
  textAlign: 'center',

  // Firefox and Safari margin fix
  margin: 0
})

export const Button = styled('button').attrs(({
  disabled,
  onClick
}) => ({
  onClick: disabled ? noop : onClick
}))(
  base,
  props => css({
    fontFamily: 'main',
    lineHeight: 4,
    fontWeight: '600',
    letterSpacing: -0.25,
    color: tokens.type.heading.dark,
    border: 'none',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    cursor: props.disabled ? 'default' : 'pointer',
    transition: `background ease-out ${themeGet('transition.main')(props)}ms, text-shadow ease-out ${themeGet('transition.main')(props)}ms, box-shadow ease-out ${themeGet('transition.main')(props)}ms`,
    '&:focus': {
      outline: 'none',
      boxShadow: 'focusRing',
      zIndex: 1
    },
    '&:disabled': {
      color: 'gray.500',
      cursor: 'not-allowed',
      boxShadow: 'none'
    }
  }),
  sizeVariant,
  roundingVariant,
  typeVariant,
  colourVariant,
  props => css({
    width: props.fit && 'fit',
    minWidth: props.tight && 'auto'
  }),
  props => props.align && css({
    '> *': {
      verticalAlign: 'middle'
    },
    '> * + svg': {
      ml: 2
    },
    '> svg + *': {
      ml: 2
    }
  }),
  common,
  sizeProps,
  props => css(props.sx)
)

Button.propTypes = {
  ...common.propTypes,
  ...sizeProps.propTypes,
  // size: propTypes.oneOf(Object.keys(variants.size)),
  // rounding: propTypes.oneOf(Object.keys(variants.rounding)),
  // variant: propTypes.oneOf(Object.keys(variants.buttons)),
  // colour: propTypes.oneOf(Object.keys(variants.colours)),
  fit: propTypes.bool,
  tight: propTypes.bool
}
Button.defaultProps = {
  size: 'medium',
  rounding: 'rounded',
  variant: 'solid',
  fit: false,
  tight: false
}

Button.displayName = 'ChesneyHawkesFTW'
