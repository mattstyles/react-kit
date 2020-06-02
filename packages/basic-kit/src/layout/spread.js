
import styled from 'styled-components'
import systemTypes from '@styled-system/prop-types'
import { compose, flexbox } from 'styled-system'
import { sx } from '@raid/ui-core'

import { common, layout } from '../system/props'

export const Spread = styled('div')(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  compose(
    common,
    layout,
    flexbox
  ),
  sx
)
Spread.propTypes = {
  ...systemTypes.flexbox,
  ...layout.propTypes,
  ...common.propTypes
}
