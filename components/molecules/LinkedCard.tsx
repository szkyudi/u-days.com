import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../lib/styles/variables'
import Date from '../atoms/Date'

const titleFontSize = {
  sm: '16px',
  lg: '20px'
}

const dateFontSize = {
  sm: '14px',
  lg: '16px'
}

const card = css`
  display: block;
  padding: ${titleFontSize.sm};
  background: ${variables.color.white};
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
  @media (min-width: ${variables.breakpoints.lg}px) {
    padding: ${titleFontSize.lg};
  }
`

const cardTitle = css`
  font-size: ${titleFontSize.sm};
  font-weight: bold;
  line-height: 1.4;
  color: ${variables.color.onSurface};
  @media (min-width: ${variables.breakpoints.lg}px) {
    font-size: ${titleFontSize.lg};
  }
`

const cardDate = css`
  display: block;
  margin-top: ${variables.space.md};
  font-size: ${dateFontSize.sm};
  font-style: italic;
  color: ${variables.color.onSurface};
  @media (min-width: ${variables.breakpoints.lg}px) {
    font-size: ${dateFontSize.lg};
  }
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
