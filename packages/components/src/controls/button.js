
import propTypes from 'prop-types'
import styled, { css as _css } from 'styled-components'
import { variant } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { common, size as sizeProps } from '../system/props'
import { noop } from '../utils'

const size = {
  prop: 'size',
  scale: 'variants.buttons.size',
  variants: {
    small: {
      fontSize: 2,
      px: 4,
      py: 2,
      minWidth: '80px'
    },
    medium: {
      fontSize: 2,
      px: 4,
      py: 3,
      minWidth: '88px'
    },
    large: {
      fontSize: 3,
      px: 4,
      py: 4,
      minWidth: '120px'
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
      borderRadius: '200px'
    }
  }
}

const variants = {
  prop: 'variant',
  scale: 'variants.buttons.variants',
  variants: {
    solid: {

    },
    transparent: {

    },
    outline: {

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

    },
    green: {

    },
    blue: {

    },
    yellow: {

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
    color: 'white',
    background: 'black',
    border: 'none',
    cursor: props.disabled ? 'default' : 'pointer',
    width: props.fit && 'fit'
  }),
  _css`
    transition: background ease-out ${themeGet('transition.main')}ms;
  `,
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
  variant: 'primary',
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
