import styled from '@emotion/styled'
import { LayoutProps, PositionProps } from 'styled-system'
import css from '@styled-system/css'

export const Sidebar = styled('div')()
export const Main = styled('div')()
export const Container = styled('div')<{
  width?: LayoutProps['width'];
  zIndex?: PositionProps['zIndex'];
  isOpen?: boolean;
}>(
  ({ width = '320px', zIndex = 1, isOpen }) => css({
    [`> ${ Sidebar }`]: css({
      position: 'fixed',
      top: 0,
      left: 0,
      // maxHeight: '100vh',
      width,
      // overflowY: 'auto',
      transform: [
        // eslint-disable-next-line prefer-template
        `translateX(${ isOpen ? 0 : '-' + width })`,
        'translateX(0)',
      ],
      zIndex,
    }),
    [`> ${ Main }`]: css({
      marginLeft: [
        0,
        width,
      ],
      // minHeight: '100vh',
    }),
  }),
)
