import styled from '@emotion/styled'
import { position, PositionProps } from 'styled-system'

export const Position = styled('div')<{
  position: PositionProps['position'];
}>(
  position,
)
