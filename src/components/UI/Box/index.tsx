import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  compose,
  space,
  background,
  color,
  layout,
  border,
  shadow,
  overflow,
  textAlign,
  opacity,
  lineHeight,
  borderRadius,
} from 'styled-system'
import { BoxProps } from '../types'

export const Box = styled('div', {
  shouldForwardProp,
})<BoxProps>(
  compose(
    space,
    background,
    border,
    borderRadius,
    color,
    layout,
    lineHeight,
    opacity,
    overflow,
    shadow,
    textAlign,
  ),
)
