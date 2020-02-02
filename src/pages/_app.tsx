import { ThemeProvider } from "emotion-theming"
import { theme } from '~/components/theme'
import { GlobalStyles } from '~/components/GlobalStyles'
import { PageLayout } from '~/components/PageLayout'
import { SideNav } from '~/components/SideNav'

const App = ({ Component, pageProps }: {
  Component: React.FC
  pageProps: any
}) => (
  <ThemeProvider theme={ theme }>
    <GlobalStyles />
    <PageLayout
      Sidebar={
        <SideNav />
      }
      Main={
        <Component { ...pageProps } />
      }
    />
  </ThemeProvider>
)

export default App
