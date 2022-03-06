import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../../lib/styles/variables'
import Date from '../../atoms/Date'

type Props = {
  title: string,
  date?: string,
}
export const Card = ({title, date, ...props}: Props) => {
  return (
    <div css={styles.card} {...props}>
      <h3 css={styles.title}>{title}</h3>
      {date && (
        <span css={styles.date}>
          <Date dateString={date} />
        </span>
      )}
    </div>
  )
}


const titleFontSize = {
  sm: '16px',
  lg: '20px'
}

const dateFontSize = {
  sm: '14px',
  lg: '16px'
}

const styles = {
  card: css`
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
    @media (min-width: ${variables.breakpoints.lg}px) {
      padding: ${titleFontSize.lg};
    }
  `,
  title: css`
    font-size: ${titleFontSize.sm};
    font-weight: bold;
    line-height: 1.4;
    color: ${variables.color.onSurface};
    @media (min-width: ${variables.breakpoints.lg}px) {
      font-size: ${titleFontSize.lg};
    }
  `,
  date: css`
    display: block;
    margin-top: ${variables.space.md};
    font-size: ${dateFontSize.sm};
    font-style: italic;
    color: ${variables.color.onSurface};
    @media (min-width: ${variables.breakpoints.lg}px) {
      font-size: ${dateFontSize.lg};
    }
  `
}
