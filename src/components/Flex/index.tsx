import styled from '@emotion/styled'
import css from '@styled-system/css'
import { flexbox, layout, LayoutProps, FlexboxProps, margin } from 'styled-system'
import { Margins } from '~/components/types'

export const Child = styled('div')<{
  flex?: FlexboxProps['flex']
  alignSelf?: FlexboxProps['alignSelf']
  justifySelf?: FlexboxProps['justifySelf']
  order?: FlexboxProps['order']
} & Margins>(
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

export const Container = styled('div')<{
  width?: LayoutProps['width']
  height?: LayoutProps['height']
  alignItems?: FlexboxProps['alignItems']
  alignContent?: FlexboxProps['alignContent']
  justifyContent?: FlexboxProps['justifyContent']
  flexDirection?: FlexboxProps['flexDirection']
  flexWrap?: FlexboxProps['flexWrap']
  flexBasis?: FlexboxProps['flexBasis']
}>(
  flexbox,
  layout,
  ({}) => css({
    display: 'flex',
  }),
)
