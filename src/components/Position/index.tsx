import styled from "@emotion/styled";
import { position, PositionProps } from "styled-system";
import * as CSS from 'csstype';

export const Position = styled('div')<{
  position: PositionProps['position'];
}>(
  position,
)
