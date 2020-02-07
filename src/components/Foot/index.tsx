import React from 'react'
import * as Flex from '~/components/Flex'
import { Box } from '~/components/Box'

export const Foot = () => (
  <Box p="0.5rem">
    <Flex.Container justifyContent="space-between">
      <Flex.Child>
        @2020
      </Flex.Child>
      <Flex.Child>
        Powered by
      </Flex.Child>
    </Flex.Container>
  </Box>
)
