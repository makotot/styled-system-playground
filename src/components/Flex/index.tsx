import styled from '@emotion/styled'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  flexbox, layout, LayoutProps, FlexboxProps, margin, MarginProps,
} from 'styled-system'

type ChildProps = Pick<
  FlexboxProps,
  'flex' | 'alignSelf' | 'justifySelf' | 'order'
> & MarginProps

export const Child = styled('div', {
  shouldForwardProp,
})<ChildProps>(
  margin,
  ({
    flex,
    alignSelf,
    justifySelf,
    order,
  }) => css({
    flex,
    alignSelf,
    justifySelf,
    order,
  }),
)

type ContainerProps = Pick<
  FlexboxProps,
  'flexDirection' | 'alignContent' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'flexBasis'
> & Pick<
  LayoutProps,
  'height' | 'maxHeight' | 'minHeight' | 'width' | 'maxWidth' | 'minWidth'
>

export const Container = styled('div', {
  shouldForwardProp,
})<ContainerProps>(
  flexbox,
  layout,
  () => css({
    display: 'flex',
  }),
)
