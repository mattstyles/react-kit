
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { Icon, Text, View, Box } from '../index'
import { Surround, addBase } from '../storybook/index'

export default {
  title: 'Components/Icons',
  decorators: [addBase()]
}

const customIconSet = {
  test: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.2 7h-.39A3 3 0 0019 6a3.08 3.08 0 00-3.14-3A4.46 4.46 0 0012 5.4 4.46 4.46 0 008.14 3 3.08 3.08 0 005 6a3 3 0 00.19 1H4.8A2 2 0 003 9.2v3.6A2.08 2.08 0 004.5 15v4.37A1.75 1.75 0 006.31 21h11.38a1.75 1.75 0 001.81-1.67V15a2.08 2.08 0 001.5-2.2V9.2A2 2 0 0019.2 7zM19 9.2v3.6a.56.56 0 010 .2h-6V9h6a.56.56 0 010 .2zM15.86 5A1.08 1.08 0 0117 6a1.08 1.08 0 01-1.14 1H13.4a2.93 2.93 0 012.46-2zM7 6a1.08 1.08 0 011.14-1 2.93 2.93 0 012.45 2H8.14A1.08 1.08 0 017 6zM5 9.2A.56.56 0 015 9h6v4H5a.56.56 0 010-.2zM6.5 15H11v4H6.5zm6.5 4v-4h4.5v4z"/></svg>',
  OA: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="3.4" cy="6" r="2.8" stroke-width="0.2" /><polygon points="6,3 3,9 9,9" stroke-width="0.2" /></svg>',
  grad: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dusk" gradientTransform="rotate(75)"><stop offset="20%"" stop-color="rgb(254, 201, 148)"" /><stop offset="95%"" stop-color="rgb(253, 65, 65)"" /></linearGradient></defs><circle cx="50" cy="50" r="40" stroke="url(\'#dusk\')" stroke-width="20" fill="none" /></svg>'
}
const getCustomIcon = _ => {
  return customIconSet[_]
}

const ExtendedStyledIcon = styled(Icon)`
  width: ${themeGet('space.10')};
  height: ${themeGet('space.10')};
  svg {
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.15));
  }
  svg circle {
    fill: ${themeGet('colors.blue.600')};
  }
  svg polygon {
    fill: ${themeGet('colors.blue.700')};
    stroke: ${themeGet('colors.gray.200')};
    transition: transform ${themeGet('transition.main')}ms ease-out;
    transform-origin: center center;
  }
  :hover {
    svg polygon {
      transform: scale(0.8);
    }
  }
`

const Title = styled(Text)(
  css({
    mb: 4
  })
)
Title.defaultProps = {
  as: 'div'
}

export const Icons = () => {
  return (
    <View>
      <Surround>
        <Icon icon='llsquircle' sx={{ fill: 'green.700' }} />
        <Icon icon='squircle' stroke='gray.700' strokeWidth='36px' />
        <Icon icon='squizzle' stroke='gray.700' />
      </Surround>
      <Surround>
        <Title>Icons</Title>
        <Icon icon='check' />
        <Icon icon='chevron-thin' />
        <Icon icon='chevron-large' />
        <Icon icon='chevron' />
      </Surround>
      <Surround>
        <Title>Size</Title>
        <Icon icon='check' size={10} />
        <Icon icon='check' size={6} />
      </Surround>
      <Surround>
        <Title>Colour and Hover Colour</Title>
        <Icon icon='check' color='green.400' hover='green.600' />
      </Surround>
      <Surround>
        <Title>Inline with text</Title>
        <Icon
          icon='chevron'
          size={5}
          color='gray.600'
          wx={{
            mr: 1,
            verticalAlign: 'middle'
          }}
        />
        <Text verticalAlign='middle'>Some text</Text>
      </Surround>
      <Surround>
        <Title>Custom Icon Set</Title>
        <Icon icon='test' getIcon={getCustomIcon} color='blue.500' />
      </Surround>
      <Surround>
        <Title>Custom Styling</Title>
        <ExtendedStyledIcon getIcon={getCustomIcon} icon='OA' />
      </Surround>
      <Surround>
        <Title>Rotation</Title>
        <Box>
          <Icon icon='chevron-thin' m={1} />
          <Icon icon='chevron-thin' rotation={90} m={1} />
          <Icon icon='chevron-thin' rotation={180} m={1} />
          <Icon icon='chevron-thin' rotation={270} m={1} />
        </Box>
        <Box>
          <Icon icon='chevron-large' rotation={90} m={1} />
          <Icon icon='chevron-large' rotation={180} m={1} />
          <Icon icon='chevron-large' rotation={270} m={1} />
          <Icon icon='chevron-large' m={1} />
        </Box>
      </Surround>
      <Surround>
        <Title>Gradient Colouring</Title>
        <Icon getIcon={getCustomIcon} icon='grad' />
      </Surround>
      <Surround>
        <Title>Checkbox</Title>
        <Box sx={{ size: 8, position: 'relative' }}>
          <Icon
            icon='llsquircle'
            sx={{ size: 8, fill: 'gray.600' }}
            wx={{ position: 'absolute', top: 0, left: 0 }}
          />
          <Icon
            icon='check'
            sx={{ size: 7 }}
            wx={{ position: 'absolute', top: 1, left: 1 }}
          />
        </Box>
      </Surround>
    </View>
  )
}
