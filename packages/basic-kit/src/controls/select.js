
import { func, bool } from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import cx from 'clsx'
import { sx, focus, disabled } from '@raid/ui-core'

import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop, map, dec } from '../utils'
import { variants } from './select.variants.js'

const Wrapper = styled(Box)(
  css({
    position: 'relative',
    width: '100%',
    fill: 'background.600',
    '&:hover': {
      fill: 'background.800'
    }
  }),
  disabled,
  props => props.disabled && css({
    fill: 'background.500',
    cursor: 'not-allowed',
    '&:hover': {
      fill: 'background.500'
    }
  }),
  variants,
  sx
)

export const StyledSelect = styled('select')(
  props => css({
    appearance: 'none',
    width: '100%',
    background: 'transparent',
    border: 'none',
    px: map(themeGet('tokens.layout.padding')(props))(dec(1)),
    py: map(themeGet('tokens.layout.padding')(props))(dec(2))
  }),
  focus,
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
  const onChangeHandler = event => {
    onChange(event.currentTarget.value)
  }

  return (
    <Wrapper disabled={disabled} sx={sx} {...more}>
      <StyledSelect
        className={cx({
          select: true,
          disabled: disabled
        })}
        onChange={onChangeHandler}
        disabled={disabled}
        name={name}
        id={id}
        value={value}
      >
        {children}
      </StyledSelect>
      <Icon
        icon='chevron'
        size={6}
        wx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: 2,
          pointerEvents: 'none'
        }}
        sx={{
          fill: 'inherit'
        }}
      />
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
