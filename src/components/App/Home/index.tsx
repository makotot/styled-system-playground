import React from 'react'
import { lighten } from 'polished'
import {
  Heading, Box, Grid, Stack, useAppTheme, TextField,
} from '~/components/UI'

export const Home: React.FC = () => {
  const theme = useAppTheme()

  return (
    <Box px={ theme.spaces.s } py={ theme.spaces.m } bg={ theme.colors.greyDark }>
      <Stack.Container gutter="1rem">
        <Stack.Row>
          <Grid.Container
            gridTemplateColumns="repeat(4, 1fr)"
            gridGap={ theme.spaces.m }
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
            gridTemplateColumns="repeat(3, 1fr)"
            gridGap={ theme.spaces.m }
          >
            <Grid.Child>
              <Box
                p={ theme.spaces.m }
                bg={ theme.colors.blue }
                color={ theme.colors.white }
              >
                box
              </Box>
            </Grid.Child>
            <Grid.Child>
              <Box
                p={ theme.spaces.m }
                bg={ theme.colors.blue }
                color={ theme.colors.white }
              >
                box
              </Box>
            </Grid.Child>
            <Grid.Child>
              <Box
                p={ theme.spaces.m }
                bg={ theme.colors.blue }
                color={ theme.colors.white }
              >
                box
              </Box>
            </Grid.Child>
          </Grid.Container>
        </Stack.Row>
        <Stack.Row>
          <Box bg={ theme.colors.blue } p={ theme.spaces.m }>
            <Stack.Container gutter={ theme.spaces.m } as="div">
              <Stack.Row as="div">
                <Heading textColor={ theme.colors.white } as="h3">Heading</Heading>
              </Stack.Row>
              <Stack.Row as="div">
                <TextField
                  p={ theme.spaces.s }
                  border="none"
                  borderBottom={ `1px solid ${ theme.colors.white }` }
                  backgroundColor={ theme.colors.blue }
                  focus={ {
                    outline: 0,
                    backgroundColor: lighten(0.01, theme.colors.blue),
                    borderBottom: `1px solid ${ lighten(0.25, theme.colors.blue) }`,
                  } }
                />
              </Stack.Row>
            </Stack.Container>
          </Box>
        </Stack.Row>
      </Stack.Container>
    </Box>
  )
}
