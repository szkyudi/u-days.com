import { css } from '@emotion/react'
import Link from 'next/link'
import variables from '../../lib/styles/variables'

export default function FooterList() {
  return (
    <ul css={styles.list}>
      <li css={styles.item}>
        <Link href="/contact">
          <a css={styles.link}>お問い合わせ</a>
        </Link>
      </li>
      <li css={styles.item}>
        <Link href="/privacy">
          <a css={styles.link}>プライバシーポリシー</a>
        </Link>
      </li>
    </ul>
  )
}

const styles = {
  list: css`
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: ${variables.color.onPrimary};
  `,
  item: css`
    transition: .2s;
    &:hover {
      opacity: 0.6;
    }
    & + & {
      margin-left: ${variables.space.md};
    }
  `,
  link: css`
    padding: ${variables.space.xs};
    margin: -${variables.space.xs};
    &:hover {
      cursor: pointer;
    }
  `
}
