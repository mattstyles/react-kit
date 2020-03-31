
import { themeGet } from '@styled-system/theme-get'

import { context } from '../theme/context'
import { backgroundColour } from './common'

/**
 * Classnames are used internally to allow styling of states.
 * `.selected` controls when the checkbox is selected. Generally you do not need to set an icon colour here as it is invisible when not selected, this behaviour can not currently be controlled, although see the styled example in the story file.
 * `color` controls icon fill colour.
 * `bg` controls the background fill colour.
 * Custom variants can be added to the theme under `variants.checkboxes`
 */

const checkboxes = {
  standard: props => ({
    bg: backgroundColour,
    border: 'none',
    boxShadow: 'insetControl',
    color: themeGet('tokens.type.body.main')(props),
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    }
  }),
  flat: props => ({
    bg: 'white',
    color: themeGet('tokens.type.body.main')(props),
    border: 'control',
    '&.disabled': {
      bg: 'dark.100',
      border: `2px solid ${props.theme.colors.dark[100]}`,
      cursor: 'not-allowed'
    }
  }),
  primary: {
    bg: 'white',
    color: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'primary',
    '&.disabled': {
      bg: 'dark.100',
      border: theme => `2px solid ${theme.colors.dark[100]}`,
      cursor: 'not-allowed'
    },
    '&.selected': {
      bg: 'primary'
    }
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.checkboxes',
  variants: checkboxes
})
