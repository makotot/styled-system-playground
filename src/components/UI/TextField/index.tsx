import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  space,
  border,
  boxShadow,
  BorderProps,
  BoxShadowProps,
  SpaceProps,
  TypographyProps,
  typography,
  color,
  background,
  borderRadius,
  BorderRadiusProps,
} from 'styled-system'
import css from '@styled-system/css'
import { InputHTMLAttributes } from 'react'
import { ColorProps, PseudoTypes } from '../types'

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

export const TextField = styled('input', {
  shouldForwardProp,
})<
  & InputHTMLAttributes<HTMLInputElement>
  & SpaceProps
  & BorderProps
  & BoxShadowProps
  & TypographyProps
  & ColorProps
  & BorderRadiusProps
  & PseudoTypes
>(
  color,
  background,
  space,
  border,
  boxShadow,
  typography,
  borderRadius,
  pseudoStyle,
)
