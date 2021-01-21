import { css } from '@emotion/react'
import variables from './variables'

const utils = {
  contianer: css`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    @media (min-width: ${variables.breakpoints.md}px) {
      max-width: ${variables.breakpoints.md}px;
      margin-left: auto;
      margin-right: auto;
    }
  `
}

export default utils