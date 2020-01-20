
import propTypes from 'prop-types'
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { css } from '@styled-system/css'

import { common, layout } from '../system/props'
import { tokens } from '../theme/index'
import { withSx } from '../utils'

const { compose } = styledSystem

export const Box = withSx(styled('div'))(
  compose(
    styledSystem.border,
    styledSystem.position,
    styledSystem.flexbox
  ),
  common,
  layout
)
Box.propTypes = {
  ...common.propTypes,
  ...layout.propTypes,
  ...systemTypes.border,
  ...systemTypes.position,
  ...systemTypes.flexbox
}

export const Flex = withSx(styled(Box))(
  {
    display: 'flex',
    flexDirection: 'columm'
  }
)
Flex.propTypes = Box.propTypes

export const Pane = withSx(styled(Flex))(
  props => props.split && {
    flexDirection: 'row'
  }
)
Pane.defaultProps = {
  flex: 1
}
Pane.propTypes = {
  split: propTypes.bool
}

export const Column = withSx(styled(Box))(
  {
    display: 'flex',
    flexDirection: 'columm'
  }
)

export const Row = withSx(styled(Box))(
  {
    display: 'flex',
    flexDirection: 'row'
  }
)

export const View = withSx(styled(Box))(
  props => props.isFlex && {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  props => props.isPadded && css({
    px: tokens.layout.padding
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
