
import propTypes from 'prop-types'
import {
  compose, border, position, flexbox
} from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import styled from 'styled-components'

import {
  common,
  layout
} from '../system/props'

export const Box = styled('div')(
  common,
  layout,
  compose(
    border,
    position,
    flexbox
  )
)
Box.propTypes = {
  ...common.propTypes,
  ...layout.propTypes,
  ...systemTypes.border,
  ...systemTypes.position,
  ...systemTypes.flexbox
}

export const Flex = styled(Box)(
  {
    display: 'flex',
    flexDirection: 'columm'
  }
)
Flex.propTypes = Box.propTypes

export const Pane = styled(Flex)(
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

export const Column = styled(Box)(
  {
    display: 'flex',
    flexDirection: 'columm'
  }
)

export const Row = styled(Box)(
  {
    display: 'flex',
    flexDirection: 'columm'
  }
)

export const View = styled(Box)(
  props => props.isFlex && {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  }
)
View.propTypes = {
  ...Box.propTypes,
  isFlex: propTypes.bool
}
View.defaultProps = {
  isFlex: true
}

export const Screen = styled(View)(
  {
    minWidth: '100vw',
    minHeight: '100vh'
  }
)
Screen.propTypes = View.propTypes
