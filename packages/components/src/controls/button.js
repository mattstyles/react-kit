
import propTypes from 'prop-types'
import styled from 'styled-components'

import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { common, size as sizeProps } from '../system/props'
import { noop } from '../utils'
import { tokens } from '../theme/index'
import {
  sizeVariant,
  roundingVariant,
  typeVariant,
  colourVariant
} from './button.variants.js'

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
