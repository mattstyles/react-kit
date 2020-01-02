
import React, { useState } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Icon, Button } from '../src'

const ControlBox = styled('div')`
  position: fixed;
  top: 4px;
  right: 4px;
  z-index: 10000;
  background: ${themeGet('palette.background.1')};
  border-radius: ${themeGet('radii.1')}px;
  overflow: hidden;
`

const Header = styled('div')`
  border-bottom: 1px solid ${themeGet('palette.background.2')};
  padding: ${themeGet('space.2')}px;
`

const Body = styled('div')`
  padding: ${themeGet('space.2')}px;
`

export const Controls = ({
  config = []
}) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <ControlBox>
      <Header>
        <Button p={1} transparent icon onClick={() => setIsOpen(!isOpen)}>
          <Icon icon='ARROW' rotation={isOpen ? 90 : 270} m={1} size={1.6} />
        </Button>
      </Header>
      {isOpen && (
        <Body>
          {config.map(control => {
            return (
              <control.Component key={control.passProps.key} {...control.passProps} />
            )
          })}
        </Body>
      )}
    </ControlBox>
  )
}
