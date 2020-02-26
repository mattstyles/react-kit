
import styled from 'styled-components'
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { css } from '@styled-system/css'
import { sx } from 'react-kit-core'

import { tokens } from '../theme/index'
import { fill } from '../theme/mixins'
import { Box } from './box'

const { compose } = styledSystem

export const Flex = styled(Box)(
  {
    display: 'flex',
    flexDirection: 'column'
  },
  styledSystem.flexbox,
  sx
)
Flex.propTypes = {
  ...Box.propTypes,
  ...systemTypes.flexbox
}

export const Pane = styled(Box)(
  {
    display: 'flex',
    flexDirection: props => props.split ? 'row' : 'column',
    flex: 1
  },
  sx
)
Pane.defaultProps = {
  split: false
}
Pane.propTypes = {
  split: propTypes.bool,
  ...Box.propTypes
}

export const View = styled(Box)(
  props => props.isFlex && {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  props => css({
    px: props.isPadded && tokens.layout.padding
  }),
  sx
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

export const Screen = styled(View)(
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

export const Divider = styled(Spacer)(
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
  styledSystem.border,
  sx
)
Divider.propTypes = {
  ...Spacer.propTypes,
  ...systemTypes.border,
  isVertical: propTypes.bool
}
Divider.defaultProps = {
  isVertical: false
}

export const Aspect = styled(Box)(
  props => css({
    position: 'relative',
    '&::before': {
      display: 'block',
      height: 0,
      content: '" "',
      pb: `${(1 / props.ratio) * 100}%`
    },
    '> *': {
      ...fill()
    }
  }),
  sx
)

Aspect.defaultProps = {
  ratio: 1
}
Aspect.propTypes = {
  ratio: propTypes.number,
  children: propTypes.element.isRequired
}
