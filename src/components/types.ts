import * as CSS from 'csstype';
import {
  BackgroundColorProps,
  ResponsiveValue,
} from 'styled-system';

export type TextColorProps = {
  textColor?: ResponsiveValue<CSS.ColorProperty>;
}

export type ColorProps = TextColorProps & BackgroundColorProps;
