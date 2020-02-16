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
        font-weight: 300;
        line-height: 1.5;
        font-family: helvetica, arial, sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }

      img {
        vertical-align: middle;
      }
    ` }
  />
)
