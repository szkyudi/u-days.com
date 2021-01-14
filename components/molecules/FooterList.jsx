import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../lib/styles/variables'

const list = css`
  display: flex;
  justify-content: center;
  font-size: 12px;  
  color: ${variables.color.onPrimary};
`

const listItem = css`
  transition: .2s;
  &:hover {
    opacity: 0.6;
  }
  & + & {
    margin-left: ${variables.space.md};
  }
`

const listLink = css`
  padding: ${variables.space.xs};
  margin: -${variables.space.xs};
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