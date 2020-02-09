import React from 'react'
import { GlobalStyles } from '~/components/UI/GlobalStyles'
import { PageLayout } from '~/components/UI/PageLayout'
import { AppThemeProvider } from '~/components/UI/AppThemeProvider'

const App: React.FC<{
Component: React.FC;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
pageProps: any;
}> = ({ Component, pageProps }) => (
  <AppThemeProvider>
    <GlobalStyles />
    <PageLayout
      Main={
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component { ...pageProps } />
      }
    />
  </AppThemeProvider>
)

export default App
