/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import variables from '../../lib/styles/variables'

const title = css`
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onPrimary};
`

export default function HeaderLogo() {
  return (
    <h1 css={title}>
      <Link href="/">
        <a>u-days</a>
      </Link>
    </h1>
  )
}