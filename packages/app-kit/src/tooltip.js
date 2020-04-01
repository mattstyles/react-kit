
import React, { cloneElement } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { variant } from 'styled-system'
import { useTooltip, TooltipPopup } from '@reach/tooltip'
import { withSx } from '@raid/basic-kit'

const base = props => css({
  zIndex: 1,
  pointerEvents: 'none',
  position: 'absolute',
  px: 2,
  py: 1,
  boxShadow: 1,
  whiteSpace: 'nowrap',
  fontSize: themeGet('tokens.type.baseSize')(props),
  lineHeight: themeGet('tokens.type.baseSize')(props),
  bg: 'background.75',
  color: 'background.700',
  borderRadius: themeGet('tokens.layout.rounding')(props)
})

const variants = {
  flat: {
    bg: 'white',
    border: 'light.100',
    boxShadow: 0
  },
  small: {
    fontSize: 's',
    lineHeight: 's',
    px: 2,
    py: 1
  },
  dark: {
    bg: 'background.800',
    color: 'background.75'
  }
}

const StyledTooltip = withSx(styled(TooltipPopup))(
  base,
  variant({
    variants: variants,
    prop: 'variant',
    scale: 'variants.tooltips'
  })
)

export const Tooltip = ({
  label,
  ariaLabel,
  children,
  ...rest
}) => {
  const [trigger, tooltip] = useTooltip()

  return (
    <>
      {cloneElement(children, trigger)}
      <StyledTooltip
        label={label}
        ariaLabel={ariaLabel}
        {...tooltip}
        {...rest}
      />
    </>
  )
}
Tooltip.propTypes = {
  label: propTypes.string,
  ariaLabel: propTypes.string
}
