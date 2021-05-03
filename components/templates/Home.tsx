import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'

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
      <PostList
        heading="新着記事"
        posts={posts}
        profile={profile}
      />
      <Footer />
    </>
  )
}