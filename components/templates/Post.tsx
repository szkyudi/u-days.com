import { css } from '@emotion/react'
import Head from 'next/head'
import Paper from '../atoms/Paper'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Post from '../organisms/Post'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Profile from '../molecules/Profile'
import { IPosts, IProfile } from '../../@types/generated/contentful'

export default function PostTemplate({ post, profile }: {
   post: IPosts,
   profile: IProfile
}) {
  return (
    <>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <Header />
      <main css={styles.main}>
        <section>
          <Paper>
            <Post post={post} />
          </Paper>
        </section>
      </main>
      <aside css={styles.aside}>
        <h2 css={styles.asideTitle}>運営者プロフィール</h2>
        <Profile data={profile} />
      </aside>
      <Footer />
    </>
  )
}

const styles = {
  main: css`
    ${utils.contianer}
    margin-top: ${variables.space.md};
    margin-bottom: ${variables.space.lg};
    @media (min-width: ${variables.breakpoints.md}px) {
      margin-top: ${variables.space.lg};
      margin-bottom: ${variables.space.xl};
    }
  `,
  aside: css`
    ${utils.contianer}
    margin-bottom: ${variables.space.lg};
    @media (min-width: ${variables.breakpoints.lg}px) {
      margin-bottom: ${variables.space.xl};
    }
  `,
  asideTitle: css`
    margin-bottom: ${variables.space.md};
    font-size: 20px;
    font-weight: bold;
  `
}
