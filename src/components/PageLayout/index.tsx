import * as LayoutWithSidebar from '~/components/LayoutWithSidebar'
import { HeadNav } from '~/components/HeadNav'
import { Foot } from '~/components/Foot'

export const PageLayout = ({
  Sidebar,
  Main,
}: {
  Sidebar: React.ReactNode;
  Main: React.ReactNode;
}) => (
  <LayoutWithSidebar.Container isOpen={ false }>
    <LayoutWithSidebar.Sidebar>
      { Sidebar }
    </LayoutWithSidebar.Sidebar>
    <LayoutWithSidebar.Main>
      <HeadNav />
      { Main }
      <Foot />
    </LayoutWithSidebar.Main>
  </LayoutWithSidebar.Container>
)
