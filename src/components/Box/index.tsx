import styled from '@emotion/styled'
import {
  space,
  background,
  color,
  layout,
  border,
  shadow,
  SpaceProps,
  BackgroundColorProps,
  BoxShadowProps,
  BorderProps,
  WidthProps,
  HeightProps,
  MinWidthProps,
  MinHeightProps,
  MaxWidthProps,
  MaxHeightProps,
  BorderRadiusProps
} from 'styled-system'
import * as CSS from 'csstype'

export const Box = styled('div')<{
  p?: SpaceProps['padding']
  pt?: SpaceProps['paddingTop']
  pb?: SpaceProps['paddingBottom']
  pl?: SpaceProps['paddingLeft']
  pr?: SpaceProps['paddingRight']
  bg?: BackgroundColorProps['backgroundColor']
  color?: CSS.ColorProperty
  border?: BorderProps['border']
  width?: WidthProps['width']
  minWidth?: MinWidthProps['minWidth']
  maxWidth?: MaxWidthProps['maxWidth']
  height?: HeightProps['height']
  minHeight?: MinHeightProps['minHeight']
  maxHeight?: MaxHeightProps['maxHeight']
  shadow?: BoxShadowProps['boxShadow']
  radius?: BorderRadiusProps['borderRadius']
}>(
  space,
  background,
  border,
  color,
  layout,
  shadow,
)
