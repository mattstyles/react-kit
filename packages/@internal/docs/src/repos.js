
import React from 'react'
import { Stack, Flex, Button } from '@raid/kit'

export const Repos = ({
  repos
}) => {
  return (
    <Flex mt={5} row>
      <Flex flex={1} />
      <Flex>
        <Stack row tight>
          {repos.map(repo => (
            <Button
              key={repo}
              variant='repoLink'
              as='a'
              target='_blank'
              href={`https://npmjs.com/package/${repo}`}
            >
              {repo}
            </Button>
          ))}
        </Stack>
      </Flex>
    </Flex>
  )
}
