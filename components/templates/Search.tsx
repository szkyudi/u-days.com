import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import { IPosts, IProfile } from '../../@types/generated/contentful'
import { Posts } from '../organisms/Posts'
import Profile from '../molecules/Profile'
import { styles } from './styles/home'

export default function Search({ keyword, posts, profile }: {
  keyword: string,
  posts: IPosts[],
  profile: IProfile
}) {
  const havePosts = Object.keys(posts).length > 0 ? true : false;
  return (
    <>
      <Head>
        <title>&quot;{keyword}&quot;の検索結果{config.titleSeperator}{config.title}</title>
      </Head>
      <Header />
      <main css={styles.main}>
        <section css={styles.section}>
          <h2 css={styles.title}>{`"${keyword}"の検索結果`}</h2>
          <Posts data={posts} />
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
