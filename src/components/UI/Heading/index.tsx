import React from 'react'
import { Text } from '../Text'
import { TextProps } from '../types'

export const Heading: React.FC<
  & TextProps
> = ({ children, as, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Text as={ as } { ...props }>{ children }</Text>
)
