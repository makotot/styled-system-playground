// eslint-disable-next-line import/no-unresolved
import * as CSS from 'csstype'
import {
  BackgroundColorProps,
  ResponsiveValue,
} from 'styled-system'
import { theme } from './theme'

export type TextColorProps = {
  textColor?: ResponsiveValue<CSS.ColorProperty>;
}

export type ColorProps = TextColorProps & BackgroundColorProps;

export type ThemeTypes = typeof theme
