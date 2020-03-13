
import { css } from '@styled-system/css'

export const sx = props => css(props.sx)
export const hover = props => css({ '&:hover': props.__hover })
export const focus = props => css({ '&:focus': props.__focus })
export const active = props => css({ '&:active': props.__active })
