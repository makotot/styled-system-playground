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
import {
  BoxProps, ThemeProps, CursorProps, PseudoTypes,
} from '../types'

const pseudoStyle = ({
  hover = {},
  active = {},
  focus = {},
  visited = {},
  before = {},
  after = {},
  disabled = {},
  focusWithin = {},
}: PseudoTypes) => css({
  '&:hover': hover,
  '&:active': active,
  '&:focus': focus,
  '&:visited': visited,
  '&::before': before,
  '&::after': after,
  '&:disabled': disabled,
  '&:focusWithin': focusWithin,
})

export const BoxLink = styled('a', {
  shouldForwardProp,
})<
  & AnchorHTMLAttributes<HTMLAnchorElement>
  & ThemeProps
  & BoxProps
  & CursorProps
  & PseudoTypes
>(
  ({
    display = 'block',
    cursor = 'pointer',
  }) => css({
    display,
    textDecoration: 'none',
    cursor,
  }),
  pseudoStyle,
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
