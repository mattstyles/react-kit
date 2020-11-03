
import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { ScreenContainer } from 'smooth-doc/components'
import { H1, Text, Center, Box } from '@raid/kit'

const Tag = styled(Text)(
  css({
    textAlign: 'center',
    display: 'block',
    fontSize: 'xl'
  })
)

export const FrontPage = () => {
  return (
    <ScreenContainer>
      <Center>
        <H1>Raid UI Kit</H1>
        <Box maxWidth='50%'>
          <Tag>Theme-aware React components to supercharge UI development.</Tag>
        </Box>
      </Center>
    </ScreenContainer>
  )
}
