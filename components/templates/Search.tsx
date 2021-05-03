import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'

export default function Search({ keyword, posts, profile }: {
  keyword: string,
  posts: Post[],
  profile: Profile
}) {
  const havePosts = Object.keys(posts).length > 0 ? true : false;
  return (
    <>
      <Head>
        <title>"{keyword}"の検索結果{config.titleSeperator}{config.title}</title>
      </Head>
      <Header />
      <PostList
        heading={`"${keyword}"の検索結果`}
        posts={posts}
        profile={profile}
      />
      <Footer />
    </>
  )
}