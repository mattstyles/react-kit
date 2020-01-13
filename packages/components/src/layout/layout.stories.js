
import { View, Pane, H1, H2, Text, Box, Screen } from '../'

export default {
  title: 'Components|Layout'
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
    <Screen>
      <View>
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
    </Screen>
  )
}
PaneStory.story = {
  name: 'Pane'
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
