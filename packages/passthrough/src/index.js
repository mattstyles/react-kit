
import React from 'react'
import styled from 'styled-components'
import { compose, color, space } from 'styled-system'
import { css } from '@styled-system/css'

export const Test = () => (
  <div>Hello world</div>
)

export const Base = styled('div')(
  compose(
    color,
    space
  ),
  css({
    m: 2,
    p: 2
  }),
  // This is applied last, so wins specificity war, but only within Base
  // anything that extends it via styled will beat it.
  props => css(props.sx)
)

// This component will always be papayawhip bg colour.
export const Extended = styled(Base)(
  css({
    // This is applied after sx so wins specifity war.
    bg: 'papayawhip'
  })
)
