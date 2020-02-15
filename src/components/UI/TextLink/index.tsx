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
import { ThemeProps, TextColorProps, CursorProps } from '../types'

export const TextLink = styled('a', {
  shouldForwardProp,
})<
  & AnchorHTMLAttributes<HTMLAnchorElement>
  & TextColorProps
  & TypographyProps
  & OpacityProps
  & CursorProps
  & ThemeProps
>(
  ({
    textColor,
    cursor = 'pointer',
  }) => css({
    cursor,
    color: textColor,
  }),
  compose(
    typography,
    opacity,
  ),
)
