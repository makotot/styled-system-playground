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
  BorderRadiusProps,
  SpaceProps,
  LayoutProps,
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

export const Box = styled('div')<Props>(
  space,
  background,
  border,
  color,
  layout,
  shadow,
)
