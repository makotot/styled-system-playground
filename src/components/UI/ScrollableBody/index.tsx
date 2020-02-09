import styled from '@emotion/styled'
import css from '@styled-system/css'
import { HeightProps } from 'styled-system'

export const Head = styled('header')()
export const Foot = styled('footer')()
export const Body = styled('div')(
  () => css({
    overflowY: 'auto',
  }),
)
export const ContainerInner = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
  }),
)
export const Container = styled('div')<{
  height: HeightProps['height'];
}>(
  ({ height = '100vh' }) => css({
    display: 'flex',
    flexDirection: 'column',
    height,
  }),
)
