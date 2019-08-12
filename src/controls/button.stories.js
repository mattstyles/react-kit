
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { View, Button, Box,
  ButtonGroup, GroupButton, Icon,
  Text, utils } from '../'
import { Surround } from '../storybook'

const { getRangeTheme, getTheme } = utils

const IconButton = styled(Button)`
  svg {
    fill: ${getTheme('palette.white')};
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
  }

  :hover {
    svg {
      fill: ${getRangeTheme('palette.background', 0)};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
    }
  }
`

const TypedButton = ({ type }) => {
  return (
    <Box my={1}>
      <Button
        {...{ [type]: true }}
        fit
        onClick={action(type)}
      >
        {type.replace(/^./, _ => _.toUpperCase())}
      </Button>
    </Box>
  )
}

const IconGroupButton = styled(GroupButton)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  line-height: normal;

  i {
    margin: auto;
  }
`
const BackedButtonGroup = styled(ButtonGroup)`
  background: transparent;
`
const GradientButtonGroup = styled(ButtonGroup)`
  background: ${getTheme('gradient.dusk')};
`
const LightButton = styled(GroupButton)`
  color: ${getTheme('palette.white')};
`

const IconButtonBox = ({ text, children }) => (
  <Surround>
    <Text pr={2} display='block' mb={2}>{text}</Text>
    {children}
  </Surround>
)

storiesOf('Button', module)
  .add('Buttons', () => (
    <View isPadded flex>
      <TypedButton type='base' />
      <TypedButton type='primary' />
      <TypedButton type='error' />
      <TypedButton type='transparent' />
      <Box my={1}>
        <Button
          fit
          shouty
          primary
          onClick={action('uppercase')}>
          Uppercase
        </Button>
      </Box>
      <Box my={1}>
        <Button
          fit
          primary
          isCircular
          onClick={action('circular')}>
          Circular caps
        </Button>
      </Box>
    </View>
  ))
  .add('Icon buttons', () => (
    <View>
      <IconButtonBox text='Circular'>
        <Button
          icon
          isCircular
          primary
          onClick={action('home')}
        >
          <Icon icon='HOME' size='2.4' />
        </Button>
      </IconButtonBox>
      <IconButtonBox text='Not circular'>
        <IconButton
          icon
          primary
          onClick={action('not circular')}
        >
          <Icon icon='SETTINGS' size='2.4' />
        </IconButton>
      </IconButtonBox>
      <IconButtonBox text='Using a custom icon button'>
        <IconButton
          icon
          isCircular
          primary
          onClick={action('custom icon button')}
        >
          <Icon icon='SETTINGS' size='2.4' />
        </IconButton>
      </IconButtonBox>
      <IconButtonBox text='Different sized icon'>
        <Button
          icon
          isCircular
          primary
          onClick={action('big')}
        >
          <Icon icon='CHECK' size='4.4' />
        </Button>
      </IconButtonBox>
      <IconButtonBox text='With fit prop'>
        <IconButton
          icon
          fit
          primary
          onClick={action('with fit prop')}
        >
          <Icon icon='SETTINGS' size='2.4' />
        </IconButton>
      </IconButtonBox>
      <IconButtonBox text='Custom padding applied'>
        <IconButton
          p={1}
          icon
          primary
          onClick={action('custom padding applied')}
        >
          <Icon icon='SETTINGS' size='2.4' />
        </IconButton>
      </IconButtonBox>
      <IconButtonBox text='With text'>
        <IconButton
          icon
          primary
          onClick={action('custom padding applied')}
        >
          <Icon icon='SETTINGS' size='2.4' />
          <Text color='white' ml={2}>Some button text</Text>
        </IconButton>
        <IconButton
          fit
          icon
          primary
          onClick={action('custom padding applied')}
          mt={2}
        >
          <Icon icon='SETTINGS' size='2.4' />
          <Text color='white' ml={2}>Some button text</Text>
        </IconButton>
      </IconButtonBox>
      <IconButtonBox text='Correct icon offset applied'>
        <IconButton
          fit
          icon
          primary
          onClick={action('offset icon')}
          mt={2}
        >
          <Icon icon='CHECK' size='2.4' ml='-3.4rem' mr='1rem' />
          <Text color='white'>Offset comparison</Text>
        </IconButton>
        <IconButton
          fit
          icon
          primary
          onClick={action('offset icon')}
          mt={2}
        >
          <Text color='white'>Offset comparison</Text>
        </IconButton>
      </IconButtonBox>
      <IconButtonBox text='Icon on right'>
        <IconButton
          fit
          icon
          primary
          onClick={action('righticon')}
          mt={2}
        >
          <Text color='white'>Righticon</Text>
          <Icon icon='CHECK' size='2.4' mr='-3.4rem' ml='1rem' />
        </IconButton>
      </IconButtonBox>
    </View>
  ))
  .add('Button group', () => (
    <View>
      <Surround>
        <ButtonGroup>
          <IconGroupButton>
            <Icon
              icon='HOME'
              size='2.4'
            />
          </IconGroupButton>
          <IconGroupButton>
            <Icon
              icon='SETTINGS'
              size='2.4'
            />
          </IconGroupButton>
        </ButtonGroup>
      </Surround>
      <Surround>
        <Text pr={2} display='block' mb={2}>Rounded Edges</Text>
        <Box my={1}>
          <BackedButtonGroup isRounded>
            <GroupButton>Option</GroupButton>
            <GroupButton>Another</GroupButton>
          </BackedButtonGroup>
        </Box>
        <Box my={1}>
          <GradientButtonGroup isRounded>
            <LightButton>Any</LightButton>
            <LightButton>Background</LightButton>
          </GradientButtonGroup>
        </Box>
      </Surround>
    </View>
  ))
