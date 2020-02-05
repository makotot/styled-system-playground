import { Box } from '~/components/Box'
import * as Flex from '~/components/Flex'

const IndexPage: React.FC = () => (
  <Box p="0.5rem" bg="#ddd">
    <Flex.Container justifyContent="space-between">
      <Flex.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Flex.Child>
      <Flex.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Flex.Child>
      <Flex.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Flex.Child>
      <Flex.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Flex.Child>
    </Flex.Container>
  </Box>
)

export default IndexPage
