
import { zip, keys, values, compose, map, toPairs, uniq, flatten } from 'ramda'

import { theme } from './index'
import { View, Box, Flex, Spacer, Pre, H2, Text } from '../index'

import { addBase } from '../storybook/index'
import { Layout } from '../storybook/layouts'

export default {
  title: 'Usage/Theme',
  decorators: [
    addBase({
      Layout: ({ children }) => {
        return (
          <Layout width={['100%', '46rem', '52rem', '60rem']}>
            {children}
          </Layout>
        )
      }
    })
  ]
}

const TableRowFlex = ({ children }) => {
  return (
    <Flex
      row
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'background.50',
        borderBottom: 'light.100',
        p: 2,
        ':nth-child(2n)': {
          bg: 'background.100'
        }
      }}
    >
      {children}
    </Flex>
  )
}

/**
 * Full theme object, also exposed in the console as an object
 */

export const ThemeObject = () => {
  console.log(theme)
  return (
    <View>
      <Pre sx={{ m: 3 }}>{JSON.stringify(theme, null, '  ')}</Pre>
    </View>
  )
}

/**
 * Colours
 */

const ColorBlock = ({ color, children }) => {
  return (
    <Box size={10} sx={{ bg: color }}>{children}</Box>
  )
}
const ColorCard = ({ children }) => (
  <Box sx={{ p: 2, mb: 4 }}>
    {children}
  </Box>
)
const cap = str => str.replace(/^./, ch => ch.toUpperCase())
const mapPairs = (mapper, data) => compose(map(mapper), toPairs)(data)
export const Colors = () => {
  return mapPairs(([color, data]) => {
    if (typeof data === 'string') {
      return (
        <ColorCard>
          <Text block size={6}>{cap(color)}</Text>
          <Spacer py={1} />
          <ColorBlock color={color} />
        </ColorCard>
      )
    }

    return (
      <ColorCard>
        <Text block size={6}>{cap(color)}</Text>
        <Spacer py={1} />
        {mapPairs(([key, value]) => {
          const themedColorKey = `${color}.${key}`
          return (
            <Flex row sx={{ justifyContent: 'center' }}>
              <ColorBlock color={themedColorKey} />
              <Spacer px={2} />
              <Flex flex={1} sx={{ justifyContent: 'center' }}>
                <Text block fontWeight={700}>{themedColorKey}</Text>
                <Text block>{value}</Text>
              </Flex>
            </Flex>
          )
        }, data)}
      </ColorCard>
    )
  }, theme.colors)
}

// @TODO

/**
 * Size scale visualisation
 */

// @TODO use a table here
const mapSizes = compose(
  map(([key, value]) => {
    return (
      <TableRowFlex key={key}>
        <Box sx={{ textAlign: 'center' }}>
          <Text sx={{ display: 'inline-block', width: 11, mr: 1, textAlign: 'left' }}>{key}</Text>
          <Text sx={{ display: 'inline-block', width: 12, mr: 1, textAlign: 'left' }}>{value}</Text>
        </Box>
        <Flex sx={{ flex: 1 }}>
          <Box sx={{ width: key, height: 4, bg: 'background.700' }} />
        </Flex>
      </TableRowFlex>
    )
  }),
  toPairs
)

export const Scale = () => {
  return (
    <View>
      <H2>Sizes</H2>
      <Flex row sx={{ textAlign: 'left', bg: 'background.200', borderBottom: 'light.100', p: 2 }}>
        <Text sx={{ width: 11 }}>Scale</Text>
        <Text sx={{ width: 12 }}>Value</Text>
      </Flex>
      {
        mapSizes(theme.sizes)
      }
    </View>
  )
}

/**
 * Line heights and font sizes
 */

// `lineHeights` and `fontSizes` _should_ always share keys, so zip the keys
// and values up into a monad of [ key, lineHeightValue, fontSizeValue ]
const uniqueKeys = compose(uniq, flatten, zip)
const prepKeys = (a, b) => uniqueKeys(keys(a), keys(b))
const prepValues = (a, b) => zip(values(a), values(b))
const zipUp = compose(
  map(flatten),
  (a, b) => zip(
    prepKeys(a, b),
    prepValues(a, b)
  )
)

const mapText = compose(
  map(([size, lineHeight, fontSize]) => {
    //  Relative size shows lineHeight and fontSize differences
    const RelativeSize = () => (
      <Flex sx={{ flex: 1, position: 'relative' }}>
        <Box sx={{ width: lineHeight, height: 4, bg: 'background.700' }} />
        <Box sx={{ width: fontSize, height: 4, bg: 'background.600', position: 'absolute', top: 0, left: 0 }} />
        <Spacer py={1} />
        <Text block size={size} sx={{ border: 'light.200' }}>{`Text size: ${size}`}</Text>
      </Flex>
    )

    // Visual shows text with font size and border for lineHeight
    // const Visual = () => (
    //   <Flex sx={{ flex: 1 }}>
    //     <Text block size={size} sx={{ border: 'light.200' }}>{`Text size: ${size}`}</Text>
    //   </Flex>
    // )

    return (
      <TableRowFlex key={size}>
        <Box sx={{ textAlign: 'center' }}>
          <Text sx={{ display: 'inline-block', width: 11, textAlign: 'left' }}>{size}</Text>
          <Text sx={{ display: 'inline-block', width: 12, textAlign: 'left' }}>{lineHeight}</Text>
          <Text sx={{ display: 'inline-block', width: 12, textAlign: 'left' }}>{fontSize}</Text>
        </Box>
        <RelativeSize />
      </TableRowFlex>
    )
  }),
  zipUp
)

export const TextSize = () => {
  return (
    <View>
      <H2>Text Sizes</H2>
      <Flex row sx={{ textAlign: 'left', bg: 'background.200', borderBottom: 'light.100', p: 2 }}>
        <Text sx={{ width: 11 }}>Size</Text>
        <Text sx={{ width: 12 }}>Line height</Text>
        <Text sx={{ width: 12 }}>Font size</Text>
      </Flex>
      {mapText(theme.lineHeights, theme.fontSizes)}
    </View>
  )
}

/**
 * Shadows
 */
const mapShadows = compose(
  map(key => {
    return (
      <Box key={key} sx={{ my: 5 }}>
        <Text block size={5} sx={{ mb: 3 }}>{key}</Text>
        <Box
          sx={{
            bg: 'background.100',
            width: '124px',
            height: '124px',
            boxShadow: key
          }}
        />
      </Box>
    )
  }),
  keys
)

export const Shadows = () => {
  return (
    <View>
      <H2>Shadows</H2>
      <Box>
        {
          Array(6).fill(0).map((_, i) => i).map(depth => {
            return (
              <Box
                key={`shadow${depth}`}
                sx={{
                  display: 'inline-block',
                  borderRadius: 3,
                  bg: 'background.100',
                  size: 26 + (depth * 14),
                  m: 2,
                  boxShadow: depth,
                  '&:first-child': {
                    ml: 0
                  }
                }}
              />
            )
          })
        }
      </Box>
      {
        mapShadows(theme.shadows)
      }
      <Text block>Depth parameter does not work, unfortunately.</Text>
      <Box depth={4} sx={{ size: 100, bg: 'background.100', depth: 4 }} />
    </View>
  )
}
