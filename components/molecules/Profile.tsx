import Image from 'next/image'
import { css } from '@emotion/react'
import Paper from '../atoms/Paper'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const profile = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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

const name = css`
  margin-bottom: ${variables.space.sm};
  font-size: 18px;
  font-weight: bold;
`

export default function Profile({ data }: { data: Profile }) {
  return (
    <div css={profile}>
      {data.icon ? <img css={img} src={data.icon.url} alt={data.icon.alt} /> : ''}
      <div css={contents}>
        <h3 css={name}>{data.name}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.bioHtml }} />
      </div>
    </div>
  )
}