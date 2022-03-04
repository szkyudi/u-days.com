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
import config from '../../lib/config'
import { useRouter } from 'next/router'
import { Seo } from '../organisms/Seo'

export default function PostTemplate({ post, profile }: {
   post: IPosts,
   profile: IProfile
}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <Seo
          title={post.fields.title + config.titleSeperator + config.title}
          url={config.siteUrl + router.asPath}
          imageUrl={post.fields.thumbnail.fields.file.url}
          width={post.fields.thumbnail.fields.file.details.image.width}
          height={post.fields.thumbnail.fields.file.details.image.height}
        />
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
