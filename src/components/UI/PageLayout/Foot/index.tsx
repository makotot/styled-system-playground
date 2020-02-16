import React from 'react'
import { Flex, Box, TextLink } from '~/components/UI'

export const Foot: React.FC = () => (
  <Box p="0.5rem">
    <Flex.Container justifyContent="space-between">
      <Flex.Child>
        @2020
      </Flex.Child>
      <Flex.Child>
        Powered by&nbsp;
        <TextLink href="#top" textDecoration="none" hover={ { textDecoration: 'underline' } }>Link</TextLink>
      </Flex.Child>
    </Flex.Container>
  </Box>
)
