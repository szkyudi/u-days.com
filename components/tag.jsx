/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import variables from '../lib/styles/variables'

const tag = css`
  display: inline-block;
  font-size: 12px;
  padding: .5em 1em;
  color: ${variables.color.onPrimary};
  background: ${variables.color.primary};
  margin-right: 4px;
  transition: .2s;
  &:hover {
    cursor: pointer;
    box-shadow: ${variables.shadow.dp1};
  }
`

export default function Tag({children, className, slug}) {
  return (
    <Link href={`/tags/${slug}`}>
      <span className={className} css={tag}>#{children}</span>
    </Link>
  )
}