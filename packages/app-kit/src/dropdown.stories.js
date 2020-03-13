
import { action } from '@storybook/addon-actions'
import { View, Text, Box, Flex, Divider, Button } from '@raid/basic-kit'
import { FaBars, FaPlus, FaFingerprint } from 'react-icons/fa'

import { addBase, Layout } from '../.storybook/base'

import { Dropdown, DropdownItem } from './'

export default {
  title: 'Dropdown',
  decorators: [
    addBase(Layout)
  ]
}

const MenuButton = () => (
  <FaBars size={18} />
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
          <Text block sx={{ py: 1, px: 4, color: 'gray.900', fontWeight: 600 }}>Operations</Text>
          <DropdownItem onSelect={action('file')}>New file</DropdownItem>
          <DropdownItem onSelect={action('duplicate')}>Duplicate file</DropdownItem>
          <DropdownItem onSelect={action('directory')}>New directory</DropdownItem>
          <Divider sx={{ my: 2, borderColor: 'dark.200' }} />
          <Text block sx={{ py: 1, px: 4, color: 'gray.900', fontWeight: 600 }}>Account</Text>
          <DropdownItem onSelect={action('profile')}>Profile</DropdownItem>
          <DropdownItem onSelect={action('billing')}>Billing</DropdownItem>
        </Dropdown>
        <Box sx={{ mx: 4 }}>
          <Dropdown label='New' buttonProps={{ variant: 'solid', colour: 'green' }}>
            <DropdownItem onSelect={action('file')} selected='green.500' sx={{ minWidth: 160 }}>File</DropdownItem>
            <DropdownItem onSelect={action('duplicate')} selected='green.500'>Directory</DropdownItem>
          </Dropdown>
        </Box>
      </Flex>
      <Box sx={{ mx: 4, p: 4, bg: 'gray.800' }}>
        <Dropdown
          content={() => <FaPlus size={16} style={{ marginRight: '-4px' }} />} buttonProps={{ variant: 'solid', sx: { minWidth: 0, pr: 2 } }}
          menuProps={{ sx: { pt: 0, overflow: 'hidden' } }}
        >
          <Text block sx={{ bg: 'gray.100', px: 4, py: 2 }}>User <strong>Dave</strong></Text>
          <Divider sx={{ my: 2, borderColor: 'dark.200' }} />
          <DropdownItem onSelect={action('authenticate')}>
            <Button align variant='outline' size='small' sx={{ bg: 'white', color: 'gray.600' }}>
              <FaFingerprint size={14} color='inherit' />
              <Box as='span' sx={{ color: 'gray.700' }}>Authenticate</Box>
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
