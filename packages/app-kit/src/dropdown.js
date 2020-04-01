
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button'
import { withSx, Button, Icon } from '@raid/basic-kit'

const buttonBase = css({
  apperance: 'none',
  display: 'inline-flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  verticalAlign: 'middle',
  textDecoration: 'none',

  // Horizontal fix for alignment of anchors
  textAlign: 'center',

  // Firefox and Safari margin fix
  margin: 0
})

const buttonStyles = props => css({
  fontFamily: 'main',
  // lineHeight: 2,
  fontWeight: '600',
  fontSize: themeGet('tokens.type.baseSize')(props),
  lineHeight: themeGet('tokens.type.baseSize')(props),
  letterSpacing: -0.25,
  color: themeGet('tokens.type.heading.dark')(props),
  border: 'none',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  cursor: props.disabled ? 'default' : 'pointer',
  transition: `background ease-out ${themeGet('transition.main')(props)}ms, text-shadow ease-out ${themeGet('transition.main')(props)}ms, box-shadow ease-out ${themeGet('transition.main')(props)}ms`,
  '&:focus': {
    outline: 'none',
    boxShadow: 'focusRing',
    zIndex: 1
  },
  '&:disabled': {
    color: 'gray.500',
    cursor: 'not-allowed',
    boxShadow: 'none'
  }
})

const DropdownMenu = styled(Menu)({})

const StyledDropdown = withSx(styled(MenuList))(
  props => css({
    display: 'block',
    mt: 1,
    py: 2,
    zIndex: 1,
    boxShadow: 1,
    bg: 'background.50',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    outline: 'none'
  })
)

export const DropdownTrigger = withSx(styled(MenuButton))(
  buttonBase,
  buttonStyles,
  css({
    border: 'light.200'
  })
)

export const DropdownItem = withSx(styled(MenuItem))(
  props => css({
    px: 4,
    py: 1,
    cursor: 'pointer',
    bg: 'transparent',

    '&[data-selected]': {
      bg: props.selected || 'info.600',
      color: 'white'
    }
  })
)

export const Dropdown = ({
  content,
  label,
  buttonProps,
  menuProps,
  withIcon,
  children
}) => {
  return (
    <DropdownMenu>
      <Button tight={null} fit={null} sx={{ pr: withIcon && 2 }} {...buttonProps} as={MenuButton}>
        {label || content()}
        {withIcon && (
          <Icon
            aria-hidden
            icon='chevron'
            size={[6, 5]}
            sx={{
              fill: 'inherit'
            }}
          />
        )}
      </Button>
      <StyledDropdown {...menuProps}>
        {children}
      </StyledDropdown>
    </DropdownMenu>
  )
}
Dropdown.defaultProps = {
  content: null,
  label: null,
  buttonProps: {},
  menuProps: {},
  withIcon: true
}
Dropdown.defaultProps = {
  // buttonProps: propTypes.object,
  withIcon: propTypes.bool
}
