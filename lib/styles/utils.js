/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import variables from './variables'

const utils = {
  contianer: css`
    width: 100%;
    padding: 0 16px;
    @media (min-width: ${variables.breakpoints.md}px) {
      max-width: ${variables.breakpoints.md}px;
      margin: 0 auto;
    }
  `
}

export default utils