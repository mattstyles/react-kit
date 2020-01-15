
import {
  View, Pane, H1, H2, Text, P, Box, Flex, Divider, Code
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components|Layout',
  decorators: [addBase()]
}

export const BoxStory = () => {
  return (
    <View>
      <Box
        border='light'
        bg='gray.100'
        p={2}
        m={2}
      >
        <Text>Borders: light</Text>
      </Box>
    </View>
  )
}
BoxStory.story = {
  name: 'Box'
}

export const PaneStory = () => {
  return (
    <View minHeight='100vh'>
      <Pane split>
        <Pane>
          <H1>1st Pane</H1>
        </Pane>
        <Pane bg='gray.100'>
          <H1>2nd Pane</H1>
        </Pane>
      </Pane>
      <Pane>
        <H2>Bottom Pane</H2>
      </Pane>
    </View>
  )
}
PaneStory.story = {
  name: 'Pane'
}

export const DividerStory = () => (
  <>
    <H1>Divider</H1>
    <P>Some text</P>
    <Divider />
    <P>Some more text, below the <Code>{'<hr />'}</Code></P>
    <H2>Vertical rule</H2>
    <P>Divider defaults as an <Code>{'<hr />'}</Code> so be mindful of composition</P>
    <Flex>
      <Text>A</Text>
      <Divider isVertical />
      <Text>B</Text>
    </Flex>
    <H2>Colour</H2>
    <P>Colour is dictated by the border properties</P>
    <Divider borderColor='red.700' />
  </>
)
DividerStory.story = {
  name: 'Divider'
}

// storiesOf('Layout', module)
//   .add('Box', )
//   .add('Panes', () => )
//   .add('Panes sizing', () => (
//     <View flex>
//       <Pane maxHeight='20px'>
//         <P>Fixed 20px height</P>
//       </Pane>
//       <Pane split>
//         <Pane>
//           <H1>1st Pane</H1>
//         </Pane>
//         <Pane background='rgb(242, 244, 242)'>
//           <H1>2nd Pane</H1>
//         </Pane>
//       </Pane>
//       <Pane flex={0.25}>
//         <P>Flex 25%</P>
//       </Pane>
//     </View>
//   ))
