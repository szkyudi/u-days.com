/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import variables from '../lib/styles/variables'
import utils from '../lib/styles/utils'

const header = css`
  background: ${variables.color.primary};
  box-shadow: ${variables.shadow.dp4};
`

const container = css`
  ${utils.contianer}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

const title = css`
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onPrimary};
`

export default function Header() {
  return (
    <header css={header}>
      <div css={container}>
        <h1 css={title}>
          <Link href="/">
            <a>u-days</a>
          </Link>
        </h1>
      </div>
    </header>
  )
}