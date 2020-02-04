import styled from '@emotion/styled'
import {
  space,
  background,
  color,
  layout,
  border,
  shadow,
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
import { Spaces } from '~/components/types'

export const Box = styled('div')<{
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
} & Spaces>(
  space,
  background,
  border,
  color,
  layout,
  shadow,
)
