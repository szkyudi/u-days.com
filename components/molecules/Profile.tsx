import Image from 'next/image'
import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'
import { IProfile } from '../../@types/generated/contentful'
import { Markdown } from './Markdown'

export default function Profile({ data }: { data: IProfile }) {
  return (
    <div css={styles.profile}>
      {data.fields.icon ? <img css={styles.img} src={data.fields.icon?.fields.file.url} alt={data.fields.icon.fields.title} /> : ''}
      <div css={styles.contents}>
        <div css={styles.contentsHeader}>
          <h3 css={styles.name}>{data.fields.name}</h3>
          <a css={styles.twitter} href={`https://twitter.com/${data.fields.twitterId}`} target="_blank">
            <Image
              src="/logos/twitter-logo-blue.svg"
              width={20}
              height={20}
              alt="Twitterのロゴ"
            />
          </a>
        </div>
        <Markdown>
          {data.fields.bio}
        </Markdown>
      </div>
    </div>
  )
}

const styles = {
  profile: css`
    display: flex;
    flex-wrap: wrap;
    ${variables.rounded};
  `,
  img: css`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
  `,
  contents: css`
    flex: 1;
    margin-left: ${variables.space.md};
  `,
  contentsHeader: css`
    display: flex;
    align-items: center;
    margin-bottom: ${variables.space.sm};
  `,
  name: css`
    font-size: 18px;
    font-weight: bold;
  `,
  twitter: css`
    height: 20px;
    margin-left: ${variables.space.sm};
    transition: .2s;
    &:hover {
      opacity: 0.8;
    }
  `
}
