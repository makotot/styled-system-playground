import React from 'react'
import { Global, css } from '@emotion/core'
import { normalize } from 'polished'

export const GlobalStyles: React.FC = () => (
  <Global
    styles={ css`
      ${ normalize() }
      *, *::before, *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-size: 16px;
      }

      ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    ` }
  />
)
