import { Box } from '~/components/Box'
import * as Grid from '~/components/Grid'
import * as Stack from '~/components/Stack'

const IndexPage: React.FC = () => (
  <Box p="1rem 0.5rem" bg="#ddd">
    <Stack.Container gutter="1rem">
      <Stack.Row>
        <Grid.Container
          gridTemplateColumns="repeat(4, 1fr)"
          gridGap="1rem"
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
      </Stack.Row>
      <Stack.Row>
        <Box width="100%" p="1rem" height="200px" bg="#fff" />
      </Stack.Row>
      <Stack.Row>
        <Grid.Container
          gridTemplateColumns="repeat(2, 1fr)"
          gridGap="1rem"
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
        </Grid.Container>
      </Stack.Row>
    </Stack.Container>
  </Box>
)

export default IndexPage
