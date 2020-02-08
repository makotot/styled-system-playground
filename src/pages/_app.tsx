import { ThemeProvider } from "emotion-theming"
import { theme } from '~/components/theme'
import { GlobalStyles } from '~/components/UI/GlobalStyles'
import { PageLayout } from '~/components/UI/PageLayout'

const App = ({ Component, pageProps }: {
  Component: React.FC
  pageProps: any
}) => (
  <ThemeProvider theme={ theme }>
    <GlobalStyles />
    <PageLayout
      Main={
        <Component { ...pageProps } />
      }
    />
  </ThemeProvider>
)

export default App
