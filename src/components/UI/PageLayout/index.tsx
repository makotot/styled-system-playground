import React from 'react'
import * as LayoutWithSidebar from '~/components/UI/LayoutWithSidebar'
import { HeadNav } from '~/components/UI/PageLayout/HeadNav'
import { Foot } from '~/components/UI/PageLayout/Foot'
import { SideNav } from './SideNav'

export const PageLayout: React.FC<{
  Main: React.ReactNode;
}> = ({
  Main,
}) => (
  <LayoutWithSidebar.Container isOpen={ false }>
    <LayoutWithSidebar.Sidebar>
      <SideNav />
    </LayoutWithSidebar.Sidebar>
    <LayoutWithSidebar.Main>
      <HeadNav />
      { Main }
      <Foot />
    </LayoutWithSidebar.Main>
  </LayoutWithSidebar.Container>
)
