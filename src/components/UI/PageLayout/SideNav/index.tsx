import React from 'react'
import * as Stack from '~/components/UI/Stack'
import { Box } from '~/components/UI/Box'
import { theme } from '~/components/UI/theme'
import * as ScrollableBody from '~/components/UI/ScrollableBody'

const Navs: React.FC = () => {
  const items = Array(20).fill(false).map((_, index) => (
    <Stack.Row key={ index }>
      <Box p="1rem" color={ theme.colors.white }>Nav Item</Box>
    </Stack.Row>
  ))

  return <>{ items }</>
}

export const SideNav: React.FC = () => (
  <Box bg={ theme.colors.grey }>
    <ScrollableBody.Container height="100vh">
      <ScrollableBody.ContainerInner>
        <ScrollableBody.Head>
          <Box p="1rem" bg="white">head</Box>
        </ScrollableBody.Head>
        <ScrollableBody.Body>
          <Stack.Container gutter="0.5rem">
            <Navs />
          </Stack.Container>
        </ScrollableBody.Body>
        <ScrollableBody.Foot>
          <Box p="1rem" bg="white">foot</Box>
        </ScrollableBody.Foot>
      </ScrollableBody.ContainerInner>
    </ScrollableBody.Container>
  </Box>
)
