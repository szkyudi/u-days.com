import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import { IExternalPost, IPosts, IProfile } from '../../@types/generated/contentful'
import { Seo } from '../organisms/Seo'
import { useRouter } from 'next/router'
import { ExternalPosts } from '../organisms/ExternalPosts'
import Profile from '../molecules/Profile'
import { Posts } from '../organisms/Posts'
import { styles } from './styles/home'

export default function Home({ posts, externalPosts, profile }: {
  posts: IPosts[],
  externalPosts?: IExternalPost[],
  profile: IProfile
}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <Seo
          title={config.title + config.titleSeperator + config.subtitle}
          url={router.asPath}
        />
      </Head>
      <Header />
      <main css={styles.main}>
        <section css={styles.section}>
          <h2 css={styles.title}>新着記事</h2>
          <Posts data={posts} />
        </section>
        <section css={styles.section}>
          <h2 css={styles.title}>外部記事</h2>
          <ExternalPosts data={externalPosts} />
        </section>
      </main>

      <aside css={styles.aside}>
        <h2 css={styles.subTitle}>運営者プロフィール</h2>
        <Profile data={profile} />
      </aside>
      <Footer />
    </>
  )
}
