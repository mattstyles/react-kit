
import { storiesOf } from '@storybook/react'
import oc from 'open-color'

import { Icon } from './'
import { Box } from '../'

storiesOf('icons', module)
  .add('icons', () => (
    <Box>
      <Box m={2}>
        <Icon icon='HOME' />
      </Box>
      <Box m={2}>
        <Icon icon='LOADING' size={8.8} />
      </Box>
      <Box m={2}>
        <Icon icon='SETTINGS' color={oc.orange[3]} hover={oc.red[7]} />
      </Box>
    </Box>
  ))
