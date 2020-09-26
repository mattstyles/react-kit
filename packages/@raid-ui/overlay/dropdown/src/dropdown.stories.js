
import { action } from '@storybook/addon-actions'

import { addBase } from '@internal/storybook'
import { View, Box, Flex } from '@raid-ui/container'
import { Divider } from '@raid-ui/utility'
import { Text } from '@raid-ui/type'
import { Button } from '@raid-ui/button'
import { Menu } from '@raid-ui/icons/Menu'
import { Plus } from '@raid-ui/icons/Plus'
import { Key } from '@raid-ui/icons/Key'

import { Dropdown, DropdownItem } from './index'

export default {
  title: 'Components/Overlay/Dropdown',
  decorators: [addBase()]
}

const MenuButton = () => (
  <Menu size={18} />
)

export const Basic = () => {
  return (
    <View>
      <Box sx={{ my: 4 }}>
        <Dropdown label='Action'>
          <DropdownItem onSelect={action('file')}>New file</DropdownItem>
          <DropdownItem onSelect={action('duplicate')}>Duplicate file</DropdownItem>
          <DropdownItem onSelect={action('directory')}>New directory</DropdownItem>
        </Dropdown>
      </Box>
      <Flex row sx={{ my: 4 }}>
        <Dropdown content={() => <MenuButton />} withIcon={false} buttonProps={{ variant: 'transparent', style: { minWidth: 0 } }}>
          <Text block sx={{ py: 1, px: 4, color: 'background.900', fontWeight: 600 }}>Operations</Text>
          <DropdownItem onSelect={action('file')}>New file</DropdownItem>
          <DropdownItem onSelect={action('duplicate')}>Duplicate file</DropdownItem>
          <DropdownItem onSelect={action('directory')}>New directory</DropdownItem>
          <Divider sx={{ my: 2, borderColor: 'dark.200' }} />
          <Text block sx={{ py: 1, px: 4, color: 'background.900', fontWeight: 600 }}>Account</Text>
          <DropdownItem onSelect={action('profile')}>Profile</DropdownItem>
          <DropdownItem onSelect={action('billing')}>Billing</DropdownItem>
        </Dropdown>
        <Box sx={{ mx: 4 }}>
          <Dropdown label='New' buttonProps={{ variant: 'solid', colour: 'positive' }}>
            <DropdownItem onSelect={action('file')} selected='positive.500' sx={{ minWidth: 160 }}>File</DropdownItem>
            <DropdownItem onSelect={action('duplicate')} selected='positive.500'>Directory</DropdownItem>
          </Dropdown>
        </Box>
      </Flex>
      <Box sx={{ my: 4, p: 4, bg: 'background.800' }}>
        <Dropdown
          content={() => <Plus size={16} />} buttonProps={{ variant: 'solid', sx: { minWidth: 0, pr: 2 } }}
          menuProps={{ sx: { pt: 0, overflow: 'hidden' } }}
        >
          <Text block sx={{ bg: 'background.100', px: 4, py: 2 }}>User <strong>Dave</strong></Text>
          <Divider sx={{ my: 2, borderColor: 'dark.200' }} />
          <DropdownItem onSelect={action('authenticate')}>
            <Button align variant='outline' size='small' sx={{ bg: 'white', color: 'background.600' }}>
              <Key size={4} color='inherit' />
              <Text as='span' fontWeight={600} sx={{ color: 'background.700' }}>Authenticate</Text>
            </Button>
          </DropdownItem>
          <Divider sx={{ my: 2, borderColor: 'dark.200' }} />
          <DropdownItem onSelect={action('new file')} sx={{ minWidth: 160 }}>New File</DropdownItem>
          <DropdownItem onSelect={action('new repository')}>New Repository</DropdownItem>
        </Dropdown>
      </Box>
    </View>
  )
}
