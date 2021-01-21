import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Copyright from '../atoms/Copyright'
import FooterList from '../molecules/FooterList'

const footer = css`
  padding: ${variables.space.lg} 0;
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