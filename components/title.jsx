/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import variables from '../lib/styles/variables'

const title = css`
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`

export default function Title({children, className}) {
  return (
    <h2 className={className} css={title}>{children}</h2>
  )
}