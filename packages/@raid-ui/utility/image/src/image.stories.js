
import { addBase } from '@internal/storybook'
import { Box, Flex } from '@raid-ui/container'
import { Spacer } from '@raid-ui/align'
import { Placeholder } from '@raid-ui/placeholder'

import { Image, RawImage } from './index'

export default {
  title: 'Components/Utility/Image',
  decorators: [addBase()]
}

export const ImageStory = () => {
  return (
    <>
      <Flex>
        <Flex row alignItems='center'>
          <Image
            size='80px'
            src='https://www.placecage.com/160/160'
            sx={{ mr: 2 }}
            alt='The Cage being a badass'
          />
          <p>src</p>
        </Flex>
        <Flex row alignItems='center'>
          <Image
            size='80px'
            loadingSrc='https://www.placecage.com/c/16/16'
            src='https://www.placecage.com/c/160/160'
            transitionDuration={8000}
            sx={{ mr: 2 }}
          />
          <p>duration</p>
        </Flex>
        <Flex row alignItems='center'>
          <Image
            size='80px'
            loadingSrc='http://via.placeholder.com/16/16/fff'
            src='thiswillfail'
            fallbackSrc='http://via.placeholder.com/200/f02321/fff?text=nope'
            sx={{ mr: 2 }}
          />
          <p>failure</p>
        </Flex>
        <Flex row alignItems='center'>
          <Image
            size='80px'
            loadingComponent={<Placeholder size='full' />}
            src='http://www.placecage.com/gif/160/160'
            fallbackSrc='http://via.placeholder.com/200/f02321/fff?text=nope'
            transitionDuration={8000}
            sx={{ mr: 2 }}
          />
          <p>component</p>
        </Flex>
      </Flex>
      <Spacer py={2} />
      <Box sx={{ size: '200px' }}>
        <Image src='https://www.placecage.com/200/200' />
      </Box>
      <Image
        size='160px'
        loadingSrc='http://via.placeholder.com/16/16/fff'
        src='http://via.placeholder.com/1600/1600/fff'
        transitionDuration={2000}
      />
    </>
  )
}
ImageStory.storyName = 'Image'

export const Variants = () => {
  return (
    <>
      <Image src='https://www.placecage.com/64/64' variant='avatar' />
      <Box size={12}>
        <Image src='https://www.placecage.com/c/200/200' variant='fill' />
      </Box>
    </>
  )
}

export const RawImageStory = () => {
  return (
    <>
      <Box sx={{ size: '300px' }}>
        <RawImage src='https://www.fillmurray.com/300/300' />
      </Box>
      <Box sx={{ size: '120px' }}>
        <RawImage rounding='circular' src='https://www.fillmurray.com/120/120' />
      </Box>
    </>
  )
}
RawImageStory.storyName = 'Raw Image'
