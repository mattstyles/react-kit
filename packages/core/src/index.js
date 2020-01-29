
import * as functions from './functions'

export const sf = functions
export const sx = sf.sx

// this is unnecessary and a huge waste of time.
// its not perfect interop with SC or emotion, and the problem it attempts to solve isn't actually a problem as prod mode dedupes styles so that whilst the sx function will get evaluated it happens in the correct order and does not cause issue with excessive styling due to the dedupe of declarations.
// export { styled } from './styled'
