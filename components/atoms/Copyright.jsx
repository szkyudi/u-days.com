/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'

const copyright = css`
  display: block;
  text-align: center;
  margin-top: 32px;
  font-size: 12px;
  color: ${variables.color.onPrimary};
`

export default function Copyright() {
  return <small css={copyright}>&copy; 2020 udays.work</small>
}