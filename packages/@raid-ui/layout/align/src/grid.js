
import styled from 'styled-components'
import { compose, grid, flexbox } from 'styled-system'
import systemTypes from '@styled-system/prop-types'

import { sx } from '@raid-ui/core'
import { Box } from '@raid-ui/container'

export const Grid = styled(Box)(
  {
    display: 'grid'
  },
  compose(
    grid,
    flexbox
  ),
  sx
)
Grid.propTypes = {
  ...systemTypes.grid,
  ...systemTypes.flexbox
}

Grid.displayName = 'ThenIGotIn'
