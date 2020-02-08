import * as LayoutWithSidebar from '~/components/UI/LayoutWithSidebar'
import { HeadNav } from '~/components/UI/PageLayout/HeadNav'
import { Foot } from '~/components/UI/PageLayout/Foot'
import { SideNav } from './SideNav'

export const PageLayout = ({
  Main,
}: {
  Main: React.ReactNode;
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
