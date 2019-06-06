
/**
 * Scrollable wraps and supplies a scroll event to with the size of the current
 * viewport. Children can then determine their visibility and react how they wish.
 */

import React, { useState, useEffect, useRef, useContext, createContext } from 'react'
import styled from 'styled-components'
import { scroll } from 'raid-streams/screen'

import { View } from './'

export const ScrollContext = createContext()
export const ScrollConsumer = ScrollContext.Consumer

export const ScrollTarget = props => {
  const value = useContext(ScrollContext)

  return (
    <>
      <pre>{JSON.stringify(value)}</pre>
      {props.children}
    </>
  )
}

export const createScrollTarget = Component => {
  return props => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const viewport = useContext(ScrollContext)

    useEffect(() => {
      // Just measure top for visibility
      // @TODO proper bounds check for any visibility
      if (!viewport || !ref || !ref.current) {
        console.log('bail')
        return
      }
      const top = ref.current.offsetTop
      console.log(ref, top, viewport)
      console.log(top >= viewport[1] && top <= viewport[3])
      setIsVisible(top >= viewport[1] && top <= viewport[3])
    })

    return (
      <span ref={ref}>
        <pre>{JSON.stringify(viewport)}</pre>
        <Component {...props} isVisible={isVisible} />
      </span>
    )
  }
}

const useScrollObservable = ref => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const obs = scroll({ el: ref.current })
      .map(event => {
        event.payload.bottom = event.payload.top + ref.current.offsetHeight
        event.payload.right = event.payload.left + ref.current.offsetWidth
        event.payload.rect = [
          event.payload.left,
          event.payload.top,
          event.payload.right,
          event.payload.bottom
        ]
        // return event
        return event.payload.rect
      })

    const subscription = obs.subscribe({
      next: setValue,
      complete: () => console.log('Stream complete'),
      err: err => console.error(err)
    })

    // Set initial value from parent dimensions
    setValue([
      ref.current.offsetLeft,
      ref.current.offsetTop,
      ref.current.offsetLeft + ref.current.offsetWidth,
      ref.current.offsetTop + ref.current.offsetHeight
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
      <View {...props} ref={ref}>
        {props.children}
      </View>
    </ScrollContext.Provider>
  )
}
