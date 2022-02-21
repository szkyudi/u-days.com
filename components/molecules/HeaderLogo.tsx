import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderLogo() {
  return (
    <h1>
      <Link href="/">
        <a css={styles.link}>
          <span css={styles.imageWrapper}>
            <Image
              src="/text-logo.svg"
              layout="fill"
              alt="U-DAYSのテキストロゴ"
            />
          </span>
        </a>
      </Link>
    </h1>
  )
}
const styles = {
  link: css`
    display: flex;
  `,
  imageWrapper: css`
    height: 24px;
    width: 135px;
    position: relative;
    cursor: pointer;
  `
}
