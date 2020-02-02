import * as LayoutWithSidebar from '~/components/LayoutWithSidebar'
import { HeadNav } from '~/components/HeadNav'

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
    </LayoutWithSidebar.Main>
  </LayoutWithSidebar.Container>
)
