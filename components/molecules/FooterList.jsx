/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import variables from '../../lib/styles/variables'

const list = css`
  display: flex;
  justify-content: center;
  font-size: 12px;  
  color: ${variables.color.onPrimary};
`

const listItem = css`
  &:hover {
    opacity: 0.6;
  }
  & + & {
    margin-left: 4px;
  }
`

const listLink = css`
  padding: 0 1em;
  &:hover {
    cursor: pointer;
  }
`

export default function FooterList() {
  return (
    <ul css={list}>
      <li css={listItem}>
        <Link href="/contact">
          <a css={listLink}>お問い合わせ</a>
        </Link>
      </li>
    </ul>
  )
}