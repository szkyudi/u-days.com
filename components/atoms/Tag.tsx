import { ReactNode } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../lib/styles/variables'

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
    transform: translateY(-1px);
  }
`

export default function Tag({children, slug}: {
  children: ReactNode
  slug: string
}) {
  return (
    <Link href={`/tags/${slug}`}>
      <span css={tag}>#{children}</span>
    </Link>
  )
}