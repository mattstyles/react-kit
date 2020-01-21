
import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { css } from '@styled-system/css'

import { tokens } from '../theme/index'
import { withSx } from '../utils'
import { Box } from './box'

const { compose } = styledSystem

export const Flex = React.forwardRef(
  (props, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
        display: 'flex',
        flexDirection: 'column'
      }}
    />
  )
)
Flex.propTypes = Box.propTypes

export const Pane = React.forwardRef(
  ({ split, ...props }, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
        display: 'flex',
        flexDirection: split ? 'row' : 'column',
        flex: 1
      }}
    />
  )
)
Pane.defaultProps = {
  split: false
}
Pane.propTypes = {
  split: propTypes.bool,
  ...Box.propTypes
}

export const View = React.forwardRef(
  (props, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
        ...props.isFlex && {
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        },
        px: props.isPadded && tokens.layout.padding
      }}
    />
  )
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

export const Screen = withSx(styled(View))(
  {
    minWidth: '100vw',
    minHeight: '100vh'
  }
)
Screen.propTypes = View.propTypes

export const Spacer = withSx(styled('div'))(
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

export const Divider = withSx(styled(Spacer))(
  props => css({
    border: 'none',
    height: 'auto'
  }),
  props => props.isVertical && css({
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    mx: tokens.layout.padding,
    my: 0
  }),
  props => props.isVertical || css({
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
  isVertical: false,
  as: 'hr'
}
