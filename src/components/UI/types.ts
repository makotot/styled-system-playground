// eslint-disable-next-line import/no-unresolved
import * as CSS from 'csstype'
import {
  BackgroundColorProps,
  ResponsiveValue,
  BoxShadowProps,
  BorderProps,
  BorderRadiusProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  TextAlignProps,
  LineHeightProps,
  OverflowProps,
  OpacityProps,
} from 'styled-system'
import { theme } from './theme'

export type TextColorProps = {
  textColor?: ResponsiveValue<CSS.ColorProperty>;
}
export type CursorProps = {
  cursor?: ResponsiveValue<CSS.CursorProperty>;
}

export type ColorProps = TextColorProps & BackgroundColorProps;

export type ThemeType = typeof theme;

export type ThemeProps = {
  theme?: ThemeType;
}

export type BoxProps =
  & LayoutProps
  & SpaceProps
  & BackgroundProps
  & BorderProps
  & ColorProps
  & BorderRadiusProps
  & BoxShadowProps
  & TextAlignProps
  & LineHeightProps
  & OverflowProps
  & OpacityProps
  & {
    as?: string;
  }
