import Image from 'next/image'
import { css } from '@emotion/react'
import Paper from '../atoms/Paper'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const profile = css`
  display: flex;
  flex-wrap: wrap;
  ${variables.rounded};
`

const img = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`

const contents = css`
  flex: 1;
  margin-left: ${variables.space.md};
`

const contentsHeader = css`
  display: flex;
  align-items: center;
  margin-bottom: ${variables.space.sm};
`

const name = css`
  font-size: 18px;
  font-weight: bold;
`

const twitter = css`
  height: 20px;
  margin-left: ${variables.space.sm};
  transition: .2s;
  &:hover {
    opacity: 0.8;
  }
`

export default function Profile({ data }: { data: Profile }) {
  return (
    <div css={profile}>
      {data.icon ? <img css={img} src={data.icon.url} alt={data.icon.alt} /> : ''}
      <div css={contents}>
        <div css={contentsHeader}>
          <h3 css={name}>{data.name}</h3>
          <a css={twitter} href={`https://twitter.com/${data.twitterId}`} target="_blank">
            <Image
              src="/logos/twitter-logo-blue.svg"
              width={20}
              height={20}
              alt="Twitterのロゴ"
            />
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.bioHtml }} />
      </div>
    </div>
  )
}