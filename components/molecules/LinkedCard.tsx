import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../lib/styles/variables'
import Date from '../atoms/Date'

const card = css`
  display: block;
  padding: 16px;
  background: ${variables.color.surface};
  box-shadow: ${variables.shadow.dp1};
  transition: .2s;
  ${variables.rounded}
  &:hover {
    cursor: pointer;
    box-shadow: ${variables.shadow.dp2};
    transform: translateY(-1px);
  }
  & + & {
    margin-top: ${variables.space.sm};
  }
`

const cardTitle = css`
  font-size: 14px;
  line-height: 1.4;
  color: ${variables.color.onSurface};
`

const cardDate = css`
  display: block;
  margin-top: ${variables.space.sm};
  font-size: 12px;
  color: ${variables.color.textSub};
`

export default function LinkedCard({href, title, date}) {
  return (
    <Link href={href}>
      <a css={card}>
        <h3 css={cardTitle}>{title}</h3>
        <span css={cardDate}>
          <Date dateString={date} />
        </span>
      </a>
    </Link>
  )
}
