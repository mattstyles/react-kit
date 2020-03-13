
/**
 * Scrollable wraps and supplies a scroll event with the size of the current
 * viewport. Children can then determine their visibility and react how they wish.
 */

import React, { useState, useEffect, useRef, useContext, createContext } from 'react'
import { scroll } from 'raid-streams/screen'
import { View, utils } from '@raid/basic-kit'

const { errLog, noop } = utils

export const ScrollContext = createContext()
export const ScrollConsumer = ScrollContext.Consumer

/**
 * Utility standard rect intersection check
 */
const checkBounds = (vp, target) => {
  // [left, top, right, bottom]
  return !(
    (target[0] > vp[2]) ||
    (target[2] < vp[0]) ||
    (target[1] > vp[3]) ||
    (target[3] < vp[1])
  )
}

/**
 * Utility to create a viewport
 * [left, top, right, bottom]
 */
const createViewport = el => event => {
  const { payload: { top, left } } = event
  const {
    offsetHeight: height,
    offsetWidth: width
  } = el

  return [
    left,
    top,
    left + width,
    top + height
  ]
}

/**
 * HOC to create child elements that can respond to scroll events
 */
export const createScrollTarget = Component => {
  return props => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const viewport = useContext(ScrollContext)

    useEffect(() => {
      // Viewport won't be set until after the initial render
      if (!viewport || !ref || !ref.current) {
        return
      }

      const target = [
        ref.current.offsetLeft,
        ref.current.offsetTop,
        ref.current.offsetLeft + ref.current.offsetWidth,
        ref.current.offsetTop + ref.current.offsetHeight
      ]
      setIsVisible(checkBounds(viewport, target))
    })

    // @TODO do we need this div, just to apply a ref?
    // forward refs are awkward for consumers
    const Wrapper = props.El || 'span'
    return (
      <Wrapper ref={ref}>
        <Component {...props} isVisible={isVisible} />
      </Wrapper>
    )
  }
}

/**
 * Scroll observable hook
 */
export const useScrollObservable = ref => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const obs = scroll({ el: ref.current })
      .map(createViewport(ref.current))

    const subscription = obs.subscribe({
      next: setValue,
      complete: noop,
      err: errLog
    })

    // Set initial value from parent dimensions
    setValue([
      ref.current.scrollLeft,
      ref.current.scrollTop,
      ref.current.scrollLeft + ref.current.offsetWidth,
      ref.current.scrollTop + ref.current.offsetHeight
    ])

    return () => {
      subscription.unsubscribe()
    }
  }, [ref])

  return [value]
}

export const Scrollable = props => {
  const ref = useRef(null)
  const [value] = useScrollObservable(ref)

  return (
    <ScrollContext.Provider value={value}>
      <View
        {...props}
        sx={{
          overflow: 'scroll',
          position: 'relative',
          ...props.sx
        }}
        ref={ref}
      >
        {props.children}
      </View>
    </ScrollContext.Provider>
  )
}
Scrollable.defaultProps = {
  sx: {}
}
