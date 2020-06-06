
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
    gridGap: props.space
  }),
  props => props.row && {
    gridAutoFlow: 'column'
  },
  props => props.tight && {
    justifyContent: 'start',
    justifyItems: 'start'
  },
  props => {
    if (props.collapse === false) {
      return
    }

    // Rather than getting cute about generating an array of the appropriate
    // length, we’ll go the long way but use the same array each time this
    // function returns. This should give the runtime a chance to optimise.
    if (props.collapse === true || props.collapse <= 1) {
      return css({
        gridAutoFlow: ['row', 'column']
      })
    }

    if (props.collapse === 2) {
      return css({
        gridAutoFlow: ['row', 'row', 'column']
      })
    }

    if (props.collapse === 3) {
      return css({
        gridAutoFlow: ['row', 'row', 'row', 'column']
      })
    }

    if (props.collapse > 3) {
      return css({
        gridAutoFlow: ['row', 'row', 'row', 'row', 'column']
      })
    }

    // In case a different type is supplied we could drop through
    return css({
      gridAutoFlow: ['row', 'column']
    })
  },
  flexbox,
  sx
)
Stack.defaultProps = {
  space: 2,
  tight: false,
  row: false,
  collapse: false
}
Stack.propTypes = {
  ...Box.propTypes,
  ...systemTypes.flexbox,
  row: propTypes.bool,
  space: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.number,
        propTypes.string
      ])
    )
  ]),
  tight: propTypes.bool,
  collapse: propTypes.oneOfType([
    propTypes.number,
    propTypes.bool
  ])
}
Stack.displayName = 'FiveFootNine'
