import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import css from '@styled-system/css'
import {
  opacity,
  compose,
  typography,
} from 'styled-system'
import { TextProps } from '../types'

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
