
import React from 'react'
import { PageLayout as CorePageLayout } from 'smooth-doc/src/components/PageLayout'
import { css } from '@styled-system/css'
import styled from 'styled-components'

const Container = styled('div')(
  css({
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'heading'
    }
  })
)

export const PageLayout = (props) => {
  return (
    <Container>
      <CorePageLayout {...props} />
    </Container>
  )
}
