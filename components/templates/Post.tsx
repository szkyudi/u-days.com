import { css } from '@emotion/react'
import Head from 'next/head'
import Paper from '../atoms/Paper'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Post from '../organisms/Post'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Profile from '../molecules/Profile'

const main = css`
  ${utils.contianer}
  margin-top: ${variables.space.md};
  margin-bottom: ${variables.space.lg};
  @media (min-width: ${variables.breakpoints.md}px) {
    margin-top: ${variables.space.lg};
    margin-bottom: ${variables.space.xl};
  }
`

const aside = css`
  ${utils.contianer}
  margin-bottom: ${variables.space.lg};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-bottom: ${variables.space.xl};
  }
`

const asideTitle = css`
  margin-bottom: ${variables.space.md};
  font-size: 20px;
  font-weight: bold;
`

export default function PostTemplate({ post, profile }: {
   post: Post,
   profile: Profile
}) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header />
      <main css={main}>
        <section>
          <Paper>
            <Post post={post} />
          </Paper>
        </section>
      </main>
      <aside css={aside}>
        <h2 css={asideTitle}>運営者プロフィール</h2>
        <Profile data={profile} />
      </aside>
      <Footer />
    </>
  )
}