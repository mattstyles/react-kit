
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import oc from 'open-color'

import { View, Button, Box, ButtonGroup, GroupButton, H3, Icon } from '../'

const TypedButton = ({ type }) => {
  return (
    <Box my={1}>
      <Button
        {...{ [ type ]: true }}
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
  background: ${oc.white};
`
const GradientButtonGroup = styled(ButtonGroup)`
  background: ${props => props.theme.gradient.blue};
`
const LightButton = styled(GroupButton)`
  color: ${oc.white};
`

storiesOf('button', module)
  .add('buttons', () => (
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
    </View>
  ))
  .add('button group', () => (
    <View>
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
      <Box m={2}>
        <H3>Rounded edges</H3>
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
      </Box>
    </View>
  ))
