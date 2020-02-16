import styled from '@emotion/styled'
import { SpaceProps } from 'styled-system'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const Row = styled('li', {
  shouldForwardProp,
})<{
  as?: string;
}>()
export const Container = styled('ul', {
  shouldForwardProp,
})<{
  gutter: SpaceProps['marginTop'];
  as?: string;
}>(
  ({ gutter = 0 }) => css({
    [`> ${ Row } + ${ Row }`]: {
      marginTop: gutter,
    },
  }),
)
