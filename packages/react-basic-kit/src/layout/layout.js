
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { css } from '@styled-system/css'
import { styled } from 'react-kit-core'

import { tokens } from '../theme/index'
import { Box } from './box'

const { compose } = styledSystem

export const Flex = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column'
  },
  ...Box.styles,
  styledSystem.flexbox
)
Flex.propTypes = {
  ...Box.propTypes,
  ...systemTypes.flexbox
}

export const Pane = styled('div')(
  ...Box.styles,
  {
    display: 'flex',
    flexDirection: props => props.split ? 'row' : 'column',
    flex: 1
  }
)
Pane.defaultProps = {
  split: false
}
Pane.propTypes = {
  split: propTypes.bool,
  ...Box.propTypes
}

export const View = styled('div')(
  ...Box.styles,
  props => props.isFlex && {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  props => css({
    px: props.isPadded && tokens.layout.padding
  })
)
View.propTypes = {
  ...Box.propTypes,
  isFlex: propTypes.bool,
  isPadded: propTypes.bool
}
View.defaultProps = {
  isFlex: false,
  isPadded: false
}

export const Screen = styled('div')(
  ...View.styles,
  {
    minWidth: '100vw',
    minHeight: '100vh'
  }
)
Screen.propTypes = View.propTypes

export const Spacer = styled('div')(
  compose(
    styledSystem.space,
    styledSystem.layout.display,
    styledSystem.flexbox
  )
)
Spacer.propTypes = {
  ...systemTypes.space,
  ...systemTypes.flexbox,
  display: systemTypes.layout.display
}

export const Divider = styled('hr')(
  ...Spacer.styles,
  props => css({
    border: 'none',
    height: 'auto'
  }),
  props => props.isVertical
    ? css({
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      mx: tokens.layout.padding,
      my: 0
    })
    : css({
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      my: tokens.layout.padding
    }),
  styledSystem.border
)
Divider.propTypes = {
  ...Spacer.propTypes,
  ...systemTypes.border,
  isVertical: propTypes.bool
}
Divider.defaultProps = {
  isVertical: false
}
