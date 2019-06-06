
/**
 * Scrollable wraps and supplies a scroll event to with the size of the current
 * viewport. Children can then determine their visibility and react how they wish.
 */

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { scroll } from 'raid-streams/screen'

import { View } from './'

export const Scrollable = props => {
  const ref = useRef(null)
  useEffect(() => {
    const scrollable = scroll({
      el: ref.current // @TODO should be this element
    })

    const s = scrollable
      .map(event => {
        event.payload.bottom = event.payload.top + ref.current.offsetHeight // el size
        event.payload.right = event.payload.left + ref.current.offsetWidth
        return event
      })
      .observe(
        event => console.log(event),
        err => console.error(err)
      )

    return () => {
      console.log(s)
      console.log(scrollable)
      // @TODO how to delete the observable and clean up?
    }
  })

  return (
    <View {...props} ref={ref}>
      {props.children}
    </View>
  )
}
