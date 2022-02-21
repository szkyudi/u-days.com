import { ReactNode } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../lib/styles/variables'

export default function Tag({children, slug}: {
  children: ReactNode
  slug: string
}) {
  return (
    <Link href={`/tags/${slug}`}>
      <span css={styles.tag}>{children}</span>
    </Link>
  )
}

const styles = {
  tag: css`
    display: inline-block;
    margin-right: ${variables.space.xs};
    padding: .5em 1em;
    color: ${variables.color.onPrimary};
    background: ${variables.color.primary};
    font-size: 12px;
    font-weight: bold;
    transition: .2s;
    ${variables.rounded};
    &:hover {
      cursor: pointer;
      box-shadow: ${variables.shadow.dp1};
      transform: translateY(-1px);
    }
  `
}
