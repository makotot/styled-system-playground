import { Box } from '~/components/Box'
import * as Grid from '~/components/Grid'

const IndexPage: React.FC = () => (
  <Box p="0.5rem" bg="#ddd">
    <Grid.Container
      gridTemplateColumns="repeat(3, 1fr)"
      gridColumnGap="1rem"
    >
      <Grid.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Grid.Child>
      <Grid.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Grid.Child>
      <Grid.Child>
        <Box
          p="1rem"
          bg="#3c54ff"
          color="white"
        >
          box
        </Box>
      </Grid.Child>
    </Grid.Container>
  </Box>
)

export default IndexPage
