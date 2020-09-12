
import React, { useState } from 'react'
import { func, bool } from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import cx from 'clsx'

import { sx, getTransition, focusStyle, disabled, map, apply } from '@raid-ui/core'
import { ChevronDown } from '@raid-ui/icons/ChevronDown'
import { Box, Flex } from '@raid-ui/container'
import { variants } from './select.variants.js'

const noop = () => {}

const Wrapper = styled(Box)(
  css({
    position: 'relative',
    width: '100%',
    color: 'background.600',
    '&:hover': {
      color: 'background.800'
    }
  }),
  props => props.disabled && css({
    color: 'critical.500',
    cursor: 'not-allowed'
  }),
  variants,
  props => props.isFocussed && focusStyle,
  props => ({
    transition: getTransition('box-shadow', 'main')(props)
  }),
  sx
)

export const StyledSelect = styled('select')(
  props => css({
    appearance: 'none',
    width: '100%',
    background: 'transparent',
    border: 'none',
    px: map(apply(-1))(themeGet('tokens.layout.padding')(props)),
    py: map(apply(-2))(themeGet('tokens.layout.padding')(props))
  }),
  {
    '&:focus': {
      outline: 'none'
    }
  },
  disabled,
  sx
)
StyledSelect.propTypes = {
  onChange: func
}
StyledSelect.defaultTypes = {
  onChange: noop
}

export const Select = ({
  onChange,
  disabled,
  value,
  name,
  id,
  sx,
  children,
  ...more
}) => {
  const [controlledValue, setValue] = useState(value)
  const [isFocussed, setIsFocussed] = useState(false)

  const onChangeHandler = event => {
    const selectedValue = event.currentTarget.value
    setValue(selectedValue)
    onChange(selectedValue)
  }

  return (
    <Wrapper
      disabled={disabled}
      isFocussed={isFocussed}
      sx={sx}
      className={cx({
        disabled: disabled
      })}
      {...more}
    >
      <StyledSelect
        className={cx({
          select: true,
          disabled: disabled
        })}
        onChange={onChangeHandler}
        onFocus={event => setIsFocussed(true)}
        onBlur={event => setIsFocussed(false)}
        disabled={disabled}
        name={name}
        id={id}
        value={controlledValue}
      >
        {children}
      </StyledSelect>
      <Flex
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: 2,
          pointerEvents: 'none'
        }}
      >
        <ChevronDown
          size={6}
        />
      </Flex>
    </Wrapper>
  )
}
Select.propTypes = {
  disabled: bool,
  onChange: func
}
Select.defaultProps = {
  variant: 'standard',
  onChange: noop
}
