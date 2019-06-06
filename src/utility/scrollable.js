
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

  console.log('target', value)

  if (!value) {
    return <div>nothing</div>
  }

  return (
    <>
      <pre>{JSON.stringify(value)}</pre>
      {props.children}
    </>
  )
}

const useScrollObservable = ref => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    console.log('creating stream', ref)
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

    return () => {
      console.log('disposing', subscription)
      // @TODO clean up
      subscription.unsubscribe()
    }
  }, [ref])

  return [value]
}

export const Scrollable = props => {
  const ref = useRef(null)

  const [value] = useScrollObservable(ref)

  // const [vp, setVp] = useState({
  //   left: 0,
  //   top: 0,
  //   right: null,
  //   bottom: null
  // })

  // useEffect(() => {
  //   const stream = scroll({
  //     el: ref.current // @TODO should be this element
  //   })
  //     .map(event => {
  //       // @TODO mutate or clone?
  //       event.payload.bottom = event.payload.top + ref.current.offsetHeight
  //       event.payload.right = event.payload.left + ref.current.offsetWidth
  //       event.payload.rect = [
  //         event.payload.left,
  //         event.payload.top,
  //         event.payload.right,
  //         event.payload.bottom
  //       ]
  //       return event
  //     })
  //     .observe(
  //       event => {
  //         const { left, top, right, bottom } = event.payload
  //         setVp({ left, top, right, bottom })
  //       },
  //       err => console.error(err)
  //     )
  //
  //   // setVp({
  //   //   left: 0,
  //   //   top: 0,
  //   //   right: ref.current.offsetWidth,
  //   //   bottom: ref.current.offsetHeight
  //   // })
  //
  //   return () => {
  //     console.log('cleanup')
  //     console.log(stream)
  //     // @TODO how to delete the observable and clean up?
  //   }
  // })

  return (
    <ScrollContext.Provider value={value}>
      <View {...props} ref={ref}>
        {props.children}
      </View>
    </ScrollContext.Provider>
  )
}
