import { useTheme } from 'emotion-theming'
import { lighten } from 'polished'
import { ThemeType } from './types'

enum baseColors {
  grey = '#3c4b64',
  white = '#fff',
  black = '#000',
  blue = '#3c54ff',
}

enum spaces {
  xs = '0.25rem',
  s = '0.5rem',
  m = '1rem',
  l = '1.25rem',
  xl = '2rem',
}

enum fontSizes {
  m = '16px'
}

const colors = {
  ...baseColors,

  greyDark: lighten(0.2, baseColors.black),
}

export const theme = {
  colors,
  fontSizes,
  spaces,
}

export const useAppTheme = (): ThemeType => useTheme<ThemeType>()
