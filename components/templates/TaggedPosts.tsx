import Head from 'next/head'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'
import { IPosts, IProfile, ITags } from '../../@types/generated/contentful'
import { styles } from './styles/home'
import { Posts } from '../organisms/Posts'
import Profile from '../molecules/Profile'
import config from '../../lib/config'

export default function TaggedPosts({ tag, posts, profile }: {
  tag: ITags
  posts: IPosts[],
  profile: IProfile
}) {
  return (
    <>
      <Head>
        <title>&quot;{tag.fields.name}&quot;のタグが付いた記事{config.titleSeperator}{config.title}</title>
      </Head>
      <Header />
      <main css={styles.main}>
        <section css={styles.section}>
          <h2 css={styles.title}>{`"${tag.fields.name}"のタグが付いた記事`}</h2>
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
