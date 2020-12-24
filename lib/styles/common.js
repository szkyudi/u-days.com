/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import variables from './variables'

const common = css`
  body {
    font-family: "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
    background: ${variables.color.backgroundDark};
  }
`

export default common;