import { MarginProps, SpaceProps } from 'styled-system'

export interface  Margins {
  m?: MarginProps['m']
  ml?: MarginProps['ml']
  mr?: MarginProps['mr']
  mt?: MarginProps['mt']
  mb?: MarginProps['mb']
  mx?: MarginProps['mx']
  my?: MarginProps['my']
  marginLeft?: MarginProps['marginLeft']
  marginRight?: MarginProps['marginRight']
  marginTop?: MarginProps['marginTop']
  marginBottom?: MarginProps['marginBottom']
  marginX?: MarginProps['mx']
  marginY?: MarginProps['my']
}

export interface Spaces {
  p?: SpaceProps['p']
  pl?: SpaceProps['pl']
  pr?: SpaceProps['pr']
  pt?: SpaceProps['pt']
  pb?: SpaceProps['pb']
  px?: SpaceProps['px']
  py?: SpaceProps['py']
  paddingLeft?: SpaceProps['paddingLeft']
  paddingRight?: SpaceProps['paddingRight']
  paddingTop?: SpaceProps['paddingTop']
  paddingBottom?: SpaceProps['paddingBottom']
  paddingX?: SpaceProps['px']
  paddingY?: SpaceProps['py']
}
