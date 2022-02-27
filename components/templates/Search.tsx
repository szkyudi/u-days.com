import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'
import { IPosts, IProfile } from '../../@types/generated/contentful'

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
      <PostList
        heading={`"${keyword}"の検索結果`}
        posts={posts}
        profile={profile}
      />
      <Footer />
    </>
  )
}
