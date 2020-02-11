import styled from '@emotion/styled'
import css from '@styled-system/css'
import { SpaceProps, FlexboxProps } from 'styled-system'

export const Media = styled('div')()
export const Body = styled('div')()
export const Container = styled('div')<{
  gutter?: SpaceProps['marginLeft'];
  alignItems?: FlexboxProps['alignItems'];
}>(
  ({ gutter = 0, alignItems = 'align-items' }) => css({
    display: 'flex',
    alignItems,
    [`> ${ Media } + ${ Body }`]: {
      marginLeft: gutter,
      flex: 1,
    },
  }),
)
