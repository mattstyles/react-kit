
import { storiesOf } from '@storybook/react'

import { View, Pane, H1, H2, P, Text, Box } from '../'

storiesOf('Layout', module)
  .add('Box', () => (
    <View>
      <Box
        border='light'
        bg='#f0f0f0'
        p={2}
        m={2}
      >
        <Text>Borders: light</Text>
      </Box>
    </View>
  ))
  .add('Panes', () => (
    <View flex>
      <Pane split>
        <Pane>
          <H1>1st Pane</H1>
        </Pane>
        <Pane background='rgb(242, 244, 242)'>
          <H1>2nd Pane</H1>
        </Pane>
      </Pane>
      <Pane>
        <H2>Bottom Pane</H2>
      </Pane>
    </View>
  ))
  .add('Panes sizing', () => (
    <View flex>
      <Pane maxHeight='20px'>
        <P>Fixed 20px height</P>
      </Pane>
      <Pane split>
        <Pane>
          <H1>1st Pane</H1>
        </Pane>
        <Pane background='rgb(242, 244, 242)'>
          <H1>2nd Pane</H1>
        </Pane>
      </Pane>
      <Pane flex={0.25}>
        <P>Flex 25%</P>
      </Pane>
    </View>
  ))
