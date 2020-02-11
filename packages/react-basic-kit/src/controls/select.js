
import { func, bool } from 'prop-types'
import styled from 'styled-components'
import { sx } from 'react-kit-core'
import { css } from '@styled-system/css'
import cx from 'classnames'

import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop } from '../utils'
import { variants } from './select.variants.js'

const Wrapper = styled(Box)(
  css({
    position: 'relative',
    width: '100%',
    fill: 'gray.600',
    '&:hover': {
      fill: 'gray.800'
    }
  }),
  variants,
  sx
)

export const StyledSelect = styled('select')(
  css({
    appearance: 'none',
    width: '100%',
    background: 'transparent',
    border: 'none'
  }),
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
  name,
  id,
  sx,
  children,
  ...more
}) => {
  return (
    <Wrapper {...more}>
      <StyledSelect
        className={cx({
          select: true,
          disabled: disabled
        })}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={id}
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
