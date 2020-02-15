import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import css from '@styled-system/css'
import {
  opacity,
  compose,
  typography,
  TypographyProps,
  OpacityProps,
} from 'styled-system'
import { TextColorProps } from '../types'

type TextProps =
  & TextColorProps
  & OpacityProps
  & TypographyProps
  & {
    as?: string;
  }

export const Text = styled('span', {
  shouldForwardProp,
})<TextProps>(
  ({ textColor }) => css({
    color: textColor,
  }),
  compose(
    typography,
    opacity,
  ),
)
