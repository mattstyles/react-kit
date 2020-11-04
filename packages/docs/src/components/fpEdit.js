
import React from 'react'
import { Link } from 'gatsby'
import { ScreenContainer } from 'smooth-doc/components'
import { Center, Spacer } from '@raid/kit'

import { Editor } from '@internal/docs'

const code = `/**
 * Live editor
 *
 * Try editing the code below, button variants include 'solid',
 * 'transparent', and 'outline'
 */

<ButtonGroup>
  <Button
    as={Link}
    variant='link'
    to='/docs/'
  >
    Documentation
  </Button>
  <Button
    as='a'
    variant='primary'
    href='https://github.com/mattstyles/react-kit'
  >
    Github
  </Button>
</ButtonGroup>`

export const FrontPageEditor = () => {
  return (
    <ScreenContainer>
      <Spacer py={[4, 7]} />
      <Center>
        <Editor code={code} scope={{ Link }} />
      </Center>
    </ScreenContainer>
  )
}
