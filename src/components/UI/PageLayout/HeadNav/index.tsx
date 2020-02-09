import React from 'react'
import * as Flex from '~/components/UI/Flex'
import { Box } from '~/components/UI/Box'

export const HeadNav: React.FC = () => (
  <Box>
    <Box p="0.5rem">
      <Flex.Container>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child ml="auto"><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
      </Flex.Container>
    </Box>
    <Box p="0.5rem" borderTop="1px solid #ddd">
      <Flex.Container>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child ml="auto"><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
        <Flex.Child><Box border="1px solid #ccc" p="1rem" bg="#ddd" /></Flex.Child>
      </Flex.Container>
    </Box>
  </Box>
)
