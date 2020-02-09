import React from 'react'
import * as Flex from '~/components/UI/Flex'
import { Box } from '~/components/UI/Box'

export const Foot: React.FC = () => (
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
