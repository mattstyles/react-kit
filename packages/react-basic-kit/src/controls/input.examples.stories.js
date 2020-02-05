
import React, { useState } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { addBase } from '../storybook/index'
import {
  Input, View, Button, mixins,
  Flex, Box, Icon, Text
} from '../'

export default {
  title: 'Examples/Control/Input',
  decorators: [
    addBase()
  ]
}

const purple = 'hsl(270, 98%, 81%)'
const blue = 'hsl(210, 98%, 64%)'

const Screen = styled(View)(
  css({
    bg: 'gray.800'
  })
)

const Logo = styled(Icon)(
  css({
    mx: 'auto',
    my: 4
  }),
  props => ({
    svg: {
      stroke: themeGet('colors.gray.800')(props),
      fill: purple
    },
    '.js-circle': {
      transition: 'transform 5000ms ease-out'
    },
    ':hover .js-circle': {
      transform: 'translate(0, 4px)'
    }
  })
)

const iconSet = {
  dusk: `
    <svg viewBox='0 0 10 10' xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id='dusk' gradientTransform='rotate(75)'>
          <stop offset='20%' stop-color='hsl(270, 98%, 81%)' />
          <stop offset='95%' stop-color='hsl(210, 98%, 64%)' />
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
      <path d='M24 20 L50 72 L76 20' stroke="hsl(194, 40%, 12%)" stroke-width="4" fill="none" />
    </svg>
  `
}
const getLogo = icon => iconSet[icon]

const LoginButton = styled(Button)(
  css({
    background: `linear-gradient(15deg, ${purple}, ${blue})`,
    color: 'white',
    border: 'none',
    height: 9
  })
)

const LoginInput = styled(Input)(
  css({
    mb: 3,
    lineHeight: 6,
    bg: 'hsla(234, 90%, 95%, 0.95)',
    px: 5
  }),
  mixins.circular
)

const Xo = styled('div')({
  width: 0,
  height: 0
})

const ResponseText = styled(Text)(
  css({
    display: 'block',
    m: 3,
    textAlign: 'center'
  })
)
const TextError = styled(ResponseText)(
  css({
    color: 'red.400'
  })
)
const TextSuccess = styled(ResponseText)(
  css({
    color: purple
  })
)

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <LoginInput placeholder='username' value={username} onChange={setUsername} />
      <LoginInput placeholder='password' value={password} onChange={setPassword} type='password' />
      <LoginButton
        rounding='pill'
        onClick={e => {
          if (username && password) {
            onSubmit({ username, password })
          }
        }}
      >
        Log In
      </LoginButton>
    </>
  )
}

export const LoginExample = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  return (
    <Screen>
      <Xo><Logo getIcon={getLogo} icon='dusk' /></Xo>
      <Box p={4}>
        <Logo getIcon={getLogo} icon='logo' size={12} block />
      </Box>
      <Flex p={3} flex={1}>
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
        }}
        />
        {error && <TextError>{error}</TextError>}
        {success && <TextSuccess>{success}</TextSuccess>}
      </Flex>
    </Screen>
  )
}
