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
      <Box p={ theme.spaces.m } color={ theme.colors.white }>
        <MediaObject.Container gutter={ theme.spaces.m }>
          <MediaObject.Media>
            <Box p={ theme.spaces.s } bg={ theme.colors.white } />
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
            <Box p={ theme.spaces.m } bg={ theme.colors.black } opacity="0.5">
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
            <Stack.Container gutter={ theme.spaces.s }>
              <Navs />
            </Stack.Container>
          </ScrollableBody.Body>
          <ScrollableBody.Foot>
            <Box p={ theme.spaces.m } bg={ theme.colors.black } opacity="0.5">foot</Box>
          </ScrollableBody.Foot>
        </ScrollableBody.ContainerInner>
      </ScrollableBody.Container>
    </Box>
  )
}
