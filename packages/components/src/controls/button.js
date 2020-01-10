
import propTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { common, size as sizeProps } from '../system/props'
import { noop } from '../utils'
import { tokens } from '../theme'

const size = {
  prop: 'size',
  scale: 'variants.buttons.size',
  variants: {
    small: {
      fontSize: tokens.type.baseSize,
      px: tokens.space.padding,
      py: 1,
      minWidth: tokens.space.padding * 20
    },
    medium: {
      fontSize: tokens.type.baseSize,
      px: tokens.space.padding,
      py: 2,
      minWidth: tokens.space.padding * 22
    },
    large: {
      fontSize: tokens.type.baseSize + 1,
      px: tokens.space.padding,
      py: 3,
      minWidth: tokens.space.padding * 30
    }
  }
}

const rounding = {
  prop: 'rounding',
  scale: 'variants.buttons.rounding',
  variants: {
    square: {
      borderRadius: 0
    },
    rounded: {
      borderRadius: 3
    },
    pill: {
      borderRadius: '2000px'
    }
  }
}

const variants = {
  prop: 'variant',
  scale: 'variants.buttons.variants',
  variants: {
    solid: {
      bg: 'gray.200',
      '&:hover': {
        bg: 'gray.300'
      },
      '&:active': {
        bg: 'gray.400'
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
      }
    },
    link: {

    }
  }
}

const colours = {
  prop: 'colour',
  scale: 'variants.buttons.color',
  variants: {
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
        // boxShadow: `${'red'} 0px 0px 0px 0.125rem`
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
      }
    }
  }
}

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
    lineHeight: 3,
    fontWeight: '600',
    letterSpacing: -0.25,
    color: tokens.type.heading.dark,
    bg: 'gray.500',
    border: 'none',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    cursor: props.disabled ? 'default' : 'pointer',
    width: props.fit && 'fit',
    transition: `background ease-out ${themeGet('transition.main')(props)}ms, text-shadow ease-out ${themeGet('transition.main')(props)}ms`,
    '&:focus': {
      outline: 'none',
      boxShadow: themeGet('shadows.focusRing')(props),
      zIndex: 1
    }
  }),
  variant(size),
  variant(rounding),
  variant(variants),
  variant(colours),
  common,
  sizeProps
)

Button.propTypes = {
  ...common.propTypes,
  ...sizeProps.propTypes,
  size: propTypes.oneOf(Object.keys(size.variants)),
  rounding: propTypes.oneOf(Object.keys(rounding.variants)),
  variant: propTypes.oneOf(Object.keys(variants.variants)),
  colour: propTypes.oneOf(Object.keys(colours.variants)),
  fit: propTypes.bool
}
Button.defaultProps = {
  size: 'medium',
  rounding: 'rounded',
  variant: 'solid',
  fit: false
}

Button.displayName = 'ChesneyHawkesFTW'

// export const Button = styled('button').attrs(({
//   disabled,
//   onClick
// }) => ({
//   onClick: disabled ? noop : onClick
// }))`
//   position: relative;
//   font-family: ${themeGet('type.main')};
//   background: rgba(0, 0, 0, 1);
//   color: ${themeGet('palette.white')};
//   padding: ${themeGet('space.2')};
//   font-size: ${themeGet('fontSizes.2')};
//   line-height: ${props => props.icon ? 0 : 3};
//   border: none;
//   border-radius: ${props => props.isCircular ? '200px' : props.theme.borderRadius + 'px'};
//   cursor: pointer;
//   transition: background ease-out ${themeGet('transition.main')}ms, text-shadow ${themeGet('transition.main')}ms;
//   text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
//   text-transform: ${props => props.shouty && 'uppercase'};
//   letter-spacing: ${props => props.shouty && '0.5px'};
//   width: ${props => props.fit && '100%'};
//   text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
//   ${common}
//   ${size}
//   ${rounding}
// `
