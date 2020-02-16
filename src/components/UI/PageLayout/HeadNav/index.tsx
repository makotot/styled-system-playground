import React from 'react'
import {
  Flex, BoxLink, Box, useAppTheme,
} from '~/components/UI'

const NavItem: React.FC = ({ children }) => {
  const theme = useAppTheme()

  return (
    <BoxLink
      hover={ {
        opacity: '0.5',
      } }
      href="#"
      p={ theme.spaces.m }
      color={ theme.colors.blue }
      bg={ theme.colors.white }
    >
      { children }
    </BoxLink>
  )
}


export const HeadNav: React.FC = () => {
  const theme = useAppTheme()

  return (
    <Box bg={ theme.colors.greyDark }>
      <Box p="0.5rem">
        <Flex.Container>
          <Flex.Child><NavItem>Nav</NavItem></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child ml="auto"><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
        </Flex.Container>
      </Box>
      <Box p="0.5rem" borderTop="1px solid #ddd">
        <Flex.Container>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child ml="auto"><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
          <Flex.Child><NavItem /></Flex.Child>
        </Flex.Container>
      </Box>
    </Box>
  )
}
