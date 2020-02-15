import React from 'react'
import * as Stack from '~/components/UI/Stack'
import { Box } from '~/components/UI/Box'
import * as ScrollableBody from '~/components/UI/ScrollableBody'
import * as MediaObject from '~/components/UI/MediaObject'
import { useAppTheme } from '../../theme'

const Navs: React.FC = () => {
  const theme = useAppTheme()
  const items = Array(20).fill(false).map((_, index) => (
    <Stack.Row key={ index }>
      <Box p="1rem" color={ theme.colors.white }>
        <MediaObject.Container gutter="1rem">
          <MediaObject.Media>
            <Box p="1rem" bg={ theme.colors.white } />
          </MediaObject.Media>
          <MediaObject.Body>
            <Box>body</Box>
          </MediaObject.Body>
        </MediaObject.Container>
      </Box>
    </Stack.Row>
  ))

  return <>{ items }</>
}

export const SideNav: React.FC = () => {
  const theme = useAppTheme()

  return (
    <Box bg={ theme.colors.grey }>
      <ScrollableBody.Container height="100vh">
        <ScrollableBody.ContainerInner>
          <ScrollableBody.Head>
            <Box p="1rem" bg={ theme.colors.black } opacity="0.5">
              <MediaObject.Container gutter="1rem" alignItems="center">
                <MediaObject.Media>
                  <Box p="1rem" bg={ theme.colors.grey } />
                </MediaObject.Media>
                <MediaObject.Body>
                  <Box>body</Box>
                </MediaObject.Body>
              </MediaObject.Container>
            </Box>
          </ScrollableBody.Head>
          <ScrollableBody.Body>
            <Stack.Container gutter="0.5rem">
              <Navs />
            </Stack.Container>
          </ScrollableBody.Body>
          <ScrollableBody.Foot>
            <Box p="1rem" bg={ theme.colors.black } opacity="0.5">foot</Box>
          </ScrollableBody.Foot>
        </ScrollableBody.ContainerInner>
      </ScrollableBody.Container>
    </Box>
  )
}
