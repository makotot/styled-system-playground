import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '~/components/UI/theme'

export const AppThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
)
