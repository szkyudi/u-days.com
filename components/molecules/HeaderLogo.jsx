import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'

const imageWrapper = css`
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
`

export default function HeaderLogo() {
  return (
    <h1>
      <Link href="/">
        <a css={imageWrapper}>
          <Image
            src="/logo.svg"
            layout="fill"
            alt="u-daysのロゴ"
          />
        </a>
      </Link>
    </h1>
  )
}