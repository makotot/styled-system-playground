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
import { AnchorHTMLAttributes } from 'react'
import css from '@styled-system/css'
import { BoxProps, ThemeProps, CursorProps } from '../types'

export const BoxLink = styled('a', {
  shouldForwardProp,
})<
  & AnchorHTMLAttributes<HTMLAnchorElement>
  & ThemeProps
  & BoxProps
  & CursorProps
>(
  ({
    display = 'block',
    cursor = 'pointer',
  }) => css({
    display,
    textDecoration: 'none',
    cursor,
  }),
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
