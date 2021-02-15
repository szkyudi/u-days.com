import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import variables from '../../lib/styles/variables'

const logoWrapper = css`
  display: flex;
`

const imageWrapper = css`
  height: 24px;
  width: 135px;
  position: relative;
  cursor: pointer;
`

const logoText = css`
  font-size: 24px;
  font-weight: bold;
  margin-left: ${variables.space.sm};
`

export default function HeaderLogo() {
  return (
    <h1>
      <Link href="/">
        <a css={logoWrapper}>
          <span css={imageWrapper}>
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