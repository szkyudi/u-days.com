/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Copyright from '../atoms/Copyright'
import FooterList from '../molecules/FooterList'

const footer = css`
  margin-top: ${variables.space.xl};
  padding: 24px 0 32px;
  background: ${variables.color.primary};
`

const container = css`
  ${utils.contianer}
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={container}>
        <FooterList />
        <Copyright />
      </div>
    </footer>
  )
}