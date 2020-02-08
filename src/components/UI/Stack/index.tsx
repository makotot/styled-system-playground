import styled from '@emotion/styled'
import { SpaceProps } from 'styled-system'
import css from '@styled-system/css'

export const Row = styled('li')()
export const Container = styled('ul')<{
  gutter: SpaceProps['marginTop']
}>(
  ({ gutter = 0 }) => css({
    [`> ${ Row } + ${ Row }`]: {
      marginTop: gutter,
    },
  }),
)
