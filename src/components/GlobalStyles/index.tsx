import { Global, css } from '@emotion/core'

export const GlobalStyles = () => (
  <Global
    styles={css`
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
    `
    }
  />
)
