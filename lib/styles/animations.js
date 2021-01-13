/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import variables from './variables'

const animations = {
  fadeIn: keyframes`
    from: { opacity: 0; }
    to { opacity: 1; }
  `,
  fadeOut: keyframes`
    from: { opacity: 0; }
    to: { opacity: 1; }
  `,
}

export default animations