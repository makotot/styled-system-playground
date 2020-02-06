import styled from '@emotion/styled'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridGap,
  gridRowGap,
  justifyContent,
  GridProps,
  FlexboxProps,
  alignContent,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  LayoutProps,
  justifyItems,
  alignItems,
  justifySelf,
  alignSelf,
} from 'styled-system'

type ChildProps = Pick<
  GridProps,
  'gridArea' | 'gridRow' | 'gridColumn'
> & Pick<
  FlexboxProps,
  'justifySelf' | 'alignSelf'
>

export const Child = styled('div', {
  shouldForwardProp,
})<ChildProps>(
  gridColumn,
  gridRow,
  gridArea,
  justifySelf,
  alignSelf,
)

type ContainerProps = Pick<
  GridProps,
  'gridTemplateColumns' | 'gridTemplateRows' | 'gridTemplateAreas' | 'gridAutoColumns' | 'gridAutoRows' | 'gridAutoFlow' | 'gridGap' | 'gridColumnGap' | 'gridRowGap'
> & Pick<
  FlexboxProps,
  'justifyContent' | 'alignContent' | 'justifyItems' | 'alignItems'
> & Pick<
  LayoutProps,
  'height' | 'maxHeight' | 'minHeight' | 'width' | 'maxWidth' | 'minWidth'
>

export const Container = styled('div', {
  shouldForwardProp,
})<ContainerProps>(
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  gridGap,
  gridColumnGap,
  gridRowGap,
  justifyContent,
  justifyItems,
  alignItems,
  alignContent,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  () => css({
    display: 'grid',
  }),
)
