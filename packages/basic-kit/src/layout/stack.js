
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { css } from '@styled-system/css'
import propTypes from 'prop-types'
import { sx } from '@raid/ui-core'

import { Box } from './box'

/**
 * On the face of it, Grid is an elegant solution here. We can use stack
 * horizontally or vertically with very little mucking around and neatly set
 * a theme-based gap between elements.
 * However... grids inside grids do not like the justify stuff.
 * Ordinarily this wouldn't actually be too much of a problem as you could use
 * the dedicated Grid component (after all, Stack only handles the gaps), but,
 * using Grid would become a grid inside and grid and will not work.
 * So we'll stick with this implementation of Stack for now, and do some more
 * research, and see what comes up.
 * Expect implementation changes in this area, which may (but hopefully not)
 * have consequences that would require a major bump.
 */
export const Stack = styled(Box)(
  props => css({
    display: 'grid',
    gridGap: props.space,
    justifyContent: 'start',
    justifyItems: 'start'
  }),
  props => props.row && {
    gridAutoFlow: 'column'
  },
  flexbox,
  sx
)
Stack.defaultProps = {
  space: 2
}
Stack.propTypes = {
  ...Box.propTypes,
  ...systemTypes.flexbox,
  row: propTypes.bool,
  space: propTypes.number
}
