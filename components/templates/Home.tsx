import { css } from '@emotion/react'
import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkedCard from '../molecules/LinkedCard'
import Profile from '../molecules/Profile'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
const main = css`
  ${utils.contianer}
  margin-top: ${variables.space.lg};
  margin-bottom: ${variables.space.lg};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-top: ${variables.space.xl};
    margin-bottom: ${variables.space.xl};
  }
`

const title = css`
  margin-bottom: ${variables.space.md};
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`

const subTitle = css`
  margin-bottom: ${variables.space.md};
  font-size: 20px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`

const aside = css`
  ${utils.contianer}
  margin-bottom: ${variables.space.lg};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-bottom: ${variables.space.xl};
  }
`


export default function Home({ posts, profile }: {
  posts: Post[],
  profile: Profile
}) {
  return (
    <>
      <Head>
        <title>{config.title}{config.titleSeperator}{config.subtitle}</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>新着記事</h2>
        {posts.map(({ id, publishedAt, title }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))}
      </main>
      <aside css={aside}>
        <h2 css={subTitle}>運営者プロフィール</h2>
        <Profile data={profile} />
      </aside>
      <Footer />
    </>
  )
}