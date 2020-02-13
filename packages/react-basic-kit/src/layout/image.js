
import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { getTransition } from '../theme/utils'
import { fit } from '../theme/mixins'
import { Box } from './box'
import { rounding } from '../variants'

export const RawImage = styled(Box)(
  {
    width: '100%',
    height: 'auto'
  },
  rounding
)
RawImage.propTypes = {
  ...Box.propTypes
}
RawImage.defaultProps = {
  as: 'img',
  rounding: 'rounded'
}

const ImageComponent = styled(RawImage)(
  props => css({
    transition: getTransition('opacity', props.transitionDuration || 'main')
  }),
  fit
)

const Fade = styled(Box)(
  props => css({
    opacity: props.isShowing ? 1 : 0,
    transition: getTransition('opacity', props.transitionDuration || 'main')
  }),
  fit
)
Fade.defaultProps = {
  isShowing: false
}

const Frame = styled(Box)(
  props => css({
    position: 'relative',
    width: props.size || 'full',
    height: props.size || 'full'
  })
)

const statusStates = {
  loading: 'loading',
  success: 'success',
  failed: 'failed'
}

const pickView = (src, Comp) => {
  return (props) => (
    <Fade {...props}>
      {src ? <RawImage src={src} /> : <Comp />}
    </Fade>
  )
}

export const Image = ({
  loadingSrc,
  fallbackSrc,
  loadingComponent,
  fallbackComponent,
  transitionDuration,
  size,
  sx,
  ...more
}, t) => {
  const [status, setStatus] = useState(statusStates.loading)
  const [isShowing, setShowing] = useState(false)

  const LoadingComponent = pickView(loadingSrc, loadingComponent)
  const FallbackComponent = pickView(fallbackSrc, fallbackComponent)

  return (
    <Frame size={size} sx={sx}>
      <ImageComponent
        {...more}
        sx={{
          opacity: status === statusStates.success ? 1 : 0,
          zIndex: 1
        }}
        transitionDuration={transitionDuration}
        onLoad={event => {
          setStatus(statusStates.success)
          // onTransitionEnd is too flaky, and its possible it will never happen
          setTimeout(() => {
            setShowing(true)
          }, transitionDuration)
        }}
        onError={event => {
          setStatus(statusStates.failed)
          setShowing(true)
        }}
      />
      {!isShowing && (
        <LoadingComponent
          transitionDuration={transitionDuration}
          isShowing
        />
      )}
      {status === statusStates.failed && (
        <FallbackComponent
          isShowing
        />
      )}
    </Frame>
  )
}
Image.defaultProps = {
  loadingSrc: null,
  fallbackSrc: null,
  loadingComponent: () => null,
  fallbackComponent: () => null
}
