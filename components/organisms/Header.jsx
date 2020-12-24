/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import HeaderLogo from '../molecules/HeaderLogo'

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


export default function Header() {
  return (
    <header css={header}>
      <div css={container}>
        <HeaderLogo />
      </div>
    </header>
  )
}