/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import variables from '../lib/styles/variables'
import utils from '../lib/styles/utils'

const footer = css`
  margin-top: ${variables.margin.xl};
  padding: 24px 0 32px;
  background: ${variables.color.primary};
`

const container = css`
  ${utils.contianer}
`;

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

const copyright = css`
  display: block;
  text-align: center;
  margin-top: 32px;
  font-size: 12px;
  color: ${variables.color.onPrimary};
`

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={container}>
        <ul css={list}>
          <li css={listItem}>
            <Link href="/contact">
              <a css={listLink}>お問い合わせ</a>
            </Link>
          </li>
        </ul>
        <small css={copyright}>&copy; 2020 udays.work</small>
      </div>
    </footer>
  )
}