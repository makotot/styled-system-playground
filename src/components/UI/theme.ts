import { useTheme } from 'emotion-theming'
import { ThemeType } from './types'

const baseColors = {
  grey: '#3c4b64',
  white: '#fff',
  black: '#000',
}

const colors = {
  ...baseColors,
}

const spaces = [0, 0.25, 0.5, 1, 1.25, 2].map((space) => `${ space }rem`)

export const theme = {
  colors,
  spaces,
}

export const useAppTheme = (): ThemeType => useTheme<ThemeType>()
