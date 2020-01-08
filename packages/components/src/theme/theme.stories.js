
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import chroma from 'chroma-js'
import { themeGet } from '@styled-system/theme-get'

import { theme } from './'
import { View, Code, Box, H3, Text } from '../'
import { Surround } from '../storybook'

const Heading = ({ children, ...props }) => (
  <Text block fontSize={4} m={3} mb={2} fontWeight={600} letterSpacing='-0.5px' {...props}>
    {children}
  </Text>
)

const ScaleText = ({ children, ...props }) => (
  <Text mr={2} fontSize={4} fontWeight={600} letterSpacing='-1px' {...props}>
    {children}
  </Text>
)

const colors = ['gray', 'cyan', 'blue', 'indigo', 'violet',
  'fuschia', 'pink', 'red', 'orange', 'yellow', 'lime', 'green',
  'teal', 'background', 'primary', 'error']

const Card = styled(Box)`
  background: ${themeGet('palette.white')};
  box-shadow: hsla(0, 0%, 0%, 0.15) 0px 1px 2px 0px;
  border-radius: ${themeGet('radii.2')}px;
`

const Title = styled(H3)`
  font-size: ${themeGet('type.size.base')}rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const ColorBox = styled(Box).attrs(({
  back
}) => ({
  style: {
    background: back
  }
}))`
  position: relative;
  cursor: pointer;
  display: inline-block;

  &:hover * {
    opacity: 1;
  }
`

const ColorBoxTip = styled(Box)`
  position: absolute;
  top: -110%;
  left: -50%;
  z-index: 100;
  opacity: 0;
  transition: opacity ${themeGet('transition.main')}ms ease-out;
  color: ${themeGet('palette.gray.0')};
  background: ${themeGet('palette.background.7')};
  border-radius: ${themeGet('radii.1')}px;
  box-shadow: hsla(0, 0%, 0%, 0.15) 0px 1px 2px 0px;
`
ColorBoxTip.defaultProps = {
  p: 2
}

const cap = str => str.replace(/^./, a => a.toUpperCase())
const toHslString = hex => chroma(hex)
  .hsl()
  .reduce((arr, val, i) => {
    if (i === 0) {
      return arr.concat(val | 0)
    }
    return arr.concat((val * 100 | 0) + '%')
  }, [])
  .join(',')
  .replace(/.*/, str => `hsl(${str})`)

storiesOf('Theme', module)
  .add('Theme Object', () => (
    <View xscroll>
      <Code as='pre'>{JSON.stringify(theme, null, '  ')}</Code>
    </View>
  ))
  .add('Palette', () => (
    <View>
      {
        colors.map(color => {
          if (!theme.palette[color]) {
            return null
          }

          const colorRange = theme.palette[color]

          return (
            <Card key={color} m={2} p={3}>
              <Title>{cap(color)}</Title>
              {colorRange.map(c => {
                const col = toHslString(c)
                return (
                  <ColorBox
                    key={`${color}:${c}`}
                    back={c}
                    width={32}
                    height={32}
                    onClick={() => {
                      navigator.clipboard.writeText(col)
                        .then(() => {
                          action('Copied')(col)
                        }, () => {
                          console.error('failed to copy to clipboard')
                        })
                    }}
                  >
                    <ColorBoxTip>{col}</ColorBoxTip>
                  </ColorBox>
                )
              })}
            </Card>
          )
        })
      }
    </View>
  ))
  .add('Theme Scales', () => (
    <View>
      <Surround>
        <Heading m={0}>Space Scale</Heading>
        {theme.space.map(_ => <ScaleText key={`space:${_}`}>{_}</ScaleText>)}
      </Surround>
      <Surround>
        <Heading m={0}>Size Scale</Heading>
        {theme.sizes.map(_ => <ScaleText key={`size:${_}`}>{_}</ScaleText>)}
      </Surround>
      <Surround>
        <Heading m={0}>Radii Scale</Heading>
        {theme.radii.map(_ => <ScaleText key={`radii:${_}`}>{_}</ScaleText>)}
      </Surround>
      <Surround>
        <Heading m={0}>Nested theme key usage</Heading>
        <Box p={4} my={2} bg='gray.1' />
        <Box p={4} my={2} bg='white' />
      </Surround>
      <Surround>
        <Heading m={0}>Colors: Gray</Heading>
        {theme.colors.gray.map(color => (
          <Box key={color} p={4} my={2} bg={color} />
        ))}
      </Surround>
    </View>
  ))
