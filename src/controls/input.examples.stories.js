
import React, { useState } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Input, View, Button, mixins,
  FlexBox, Box, Icon, theme, Text } from '../'

const Screen = styled(View)`
  background: ${themeGet('palette.background.8')};
`

const Logo = styled(Icon)`
  margin: ${themeGet('space', 4)}px auto;
  svg {
    stroke: ${themeGet('palette.background.8')};
    fill: ${themeGet('palette.violet.5')};
  }
  .js-circle {
    transition: transform 5000ms ease-out;
  }

  :hover .js-circle {
    transform: translate(0, 4px);
  }
`

const iconSet = {
  dusk: `
    <svg viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id='dusk' gradientTransform='rotate(75)'>
          <stop offset='20%' stop-color='${theme.palette.violet[5]}' />
          <stop offset='95%' stop-color='${theme.palette.blue[6]}' />
        </linearGradient>
      </defs>
    </svg>
  `,
  circle: `
    <svg viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
      <circle cx='2' cy='5' r='2' fill="url('#dusk')" stroke-width="0.2" />
    </svg>
  `,
  triangle: `
    <svg viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
      <polygon points='5,3 3,7 7,7' stroke="url('#dusk')" stroke-width="0.2" fill="none" />
    </svg>
  `,
  logo: `
    <svg viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg">
      <circle class='js-circle' cx='50' cy='62' r='30' stroke="url('#dusk')" stroke-width="4" fill="none" />
      <path d='M20 20 L50 80 L80 20' stroke="url('#dusk')" stroke-width="4" fill="none" />
      <path d='M24 20 L50 72 L76 20' stroke="${theme.palette.background[8]}" stroke-width="4" fill="none" />
    </svg>
  `
}
const getLogo = icon => iconSet[icon]

const LoginButton = styled(Button)`
  ${mixins.circular};
  background: ${themeGet('gradient.dusk')};
  height: 44px;
  transition: box-shadow 200ms ease-out;
  box-shadow: inset 0 0 0 0 hsla(0,  0%, 0%, 0);

  :hover {
    background: ${themeGet('gradient.dusk')};
  }

  :active {
    box-shadow: inset 0px 0px 2px 1px hsla(0, 0%, 0%, 0.2);
  }
`

const LoginInput = styled(Input)`
  ${mixins.circular};
  margin-bottom: ${themeGet('space.3')}px;
  line-height: 44px;
  padding: 0px ${themeGet('space.3')}px;
  background: hsla(234, 90%, 95%, 0.95);
`

const XO = styled('div')`
  width: 0px;
  height: 0px;
`

const ResponseText = styled(Text)`
  display: block;
  margin: ${themeGet('space.3')}px;
  text-align: center;
`
const TextError = styled(ResponseText)`
  color: ${themeGet('palette.error.5')}
`
const TextSuccess = styled(ResponseText)`
  color: ${themeGet('palette.violet.5')}
`

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <LoginInput placeholder='username' value={username} onChange={setUsername} />
      <LoginInput placeholder='password' value={password} onChange={setPassword} type='password' />
      <LoginButton onClick={e => {
        if (username && password) {
          onSubmit({ username, password })
        }
      }}>Log In</LoginButton>
    </>
  )
}

export const LoginExample = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  return (
    <Screen flex>
      <XO><Logo getIcon={getLogo} icon='dusk' /></XO>
      <Box p={4}>
        <Logo getIcon={getLogo} icon='logo' size={12} />
      </Box>
      <FlexBox p={3} flex={1}>
        <Form onSubmit={({ username, password }) => {
          if (username.length > 8) {
            setError('Try a shorter username')
            setSuccess('')
            return
          }
          if (password.length < 6) {
            setError('Try a longer password')
            setSuccess('')
            return
          }

          setError('')
          setSuccess('Log in successful')
        }} />
        {error && <TextError>{error}</TextError>}
        {success && <TextSuccess>{success}</TextSuccess>}
      </FlexBox>
    </Screen>
  )
}
