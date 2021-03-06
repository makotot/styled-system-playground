import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { AnchorHTMLAttributes } from 'react'
import {
  compose,
  typography,
  opacity,
  TypographyProps,
  OpacityProps,
} from 'styled-system'
import css from '@styled-system/css'
import {
  ThemeProps, TextColorProps, CursorProps, PseudoTypes, TextDecorationProps,
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

export const TextLink = styled('a', {
  shouldForwardProp,
})<
  & AnchorHTMLAttributes<HTMLAnchorElement>
  & TextColorProps
  & TypographyProps
  & OpacityProps
  & CursorProps
  & ThemeProps
  & PseudoTypes
  & TextDecorationProps
>(
  ({
    textDecoration,
    textColor,
    cursor = 'pointer',
  }) => css({
    textDecoration,
    cursor,
    color: textColor,
  }),
  pseudoStyle,
  compose(
    typography,
    opacity,
  ),
)
