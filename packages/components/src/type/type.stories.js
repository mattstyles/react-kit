
// import { H1, H2, H3, P, TextBlock, BlockQuote, Text, Code } from './'
import { Text } from './'

import { theme } from '../theme'
console.log(theme)
window.theme = theme

const numericThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size === '0' || parseInt(size))
const aliasThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size !== '0' && !parseInt(size))

export default {
  title: 'Components|Type'
}

export const TextProps = () => {
  return (
    <>
      <Text as='h3'>Sizes</Text>
      <Text as='p'><code>size</code> property will set the font size and the line height and match the two from the theme scales which ensures that text component will match the underlying grid.</Text>
      {
        numericThemeFontSizes.map(size => (
          <Text
            key={`fontSizes:${size}`}
            as='div'
            size={size}
          >
            {`Text Component: ${size}`}
          </Text>
        ))
      }
      <Text as='h3'>Sizes</Text>
      <Text as='p'><code>fontSize</code> and <code>lineHeight</code> are also exposed as properties and match their respective scales, giving more control.</Text>
      <Text as='p'>Some <code>fontSize</code> aliases are also exposed, which are particularly useful for UI control text.</Text>
      <div>
        {
          numericThemeFontSizes.map(size => (
            <Text
              key={`fontSizes:${size}`}
              mx={1}
              fontSize={size}
            >
              {size}
            </Text>
          ))
        }
      </div>
      <div>
        {
          aliasThemeFontSizes.map(alias => (
            <Text
              key={`fontSizes:${alias}`}
              mx={1}
              fontSize={alias}
            >
              {alias}
            </Text>
          ))
        }
      </div>
    </>
  )
}

TextProps.story = {
  name: 'Text'
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const ScaleChecks = () => {
  return (
    <>
      <Text as='h3'>Line height and matched line wrapping</Text>
      <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>
        size : fontSize : matchedLineHeight
      </Text>
      <div style={{ width: 480 }}>
        {
          numericThemeFontSizes.map(size => (
            <div key={`map:${size}`}>
              <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>{
                `${size} : ${theme.fontSizes[size]} : ${theme.matchedLineHeights[size]}`
              }
              </Text>
              <Text
                as='div'
                size={size}
                mb={7}
              >
                {lorem}
              </Text>
            </div>
          ))
        }
      </div>
    </>
  )
}
