import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
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
  BorderRadiusProps,
  SpaceProps,
  LayoutProps,
  textAlign,
  TextAlignProps,
} from 'styled-system'
import { ColorProps } from '../types'

type Props =
  & LayoutProps
  & SpaceProps
  & BackgroundColorProps
  & BorderProps
  & ColorProps
  & BorderRadiusProps
  & BoxShadowProps
  & TextAlignProps

export const Box = styled('div', {
  shouldForwardProp,
})<Props>(
  space,
  background,
  border,
  color,
  layout,
  shadow,
  textAlign,
)