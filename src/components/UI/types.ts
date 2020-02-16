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
  TypographyProps,
} from 'styled-system'
import { CSSObject } from '@styled-system/css'
import { theme } from './theme'

export type TextDecorationProps = {
  textDecoration?: ResponsiveValue<CSS.TextDecorationProperty<string>>;
}

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

export type TextProps =
  & TextColorProps
  & OpacityProps
  & TypographyProps
  & {
    as?: string;
  }

export type PseudoTypes = Partial<{
  hover: CSSObject;
  active: CSSObject;
  focus: CSSObject;
  visited: CSSObject;
  before: CSSObject;
  after: CSSObject;
  checked: CSSObject;
  disabled: CSSObject;
  focusWithin: CSSObject;
  empty: CSSObject;
  enabled: CSSObject;
  invalid: CSSObject;
  valid: CSSObject;
}>
