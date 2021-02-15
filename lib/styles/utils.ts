import { css } from '@emotion/react'
import variables from './variables'

const utils = {
  contianer: css`
    width: 100%;
    padding: 0 ${variables.space.sm};
    @media (min-width: ${variables.breakpoints.md}px) {
      max-width: ${variables.breakpoints.md}px;
      margin-left: auto;
      margin-right: auto;
    }
  `
}

export default utils