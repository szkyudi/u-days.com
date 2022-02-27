import Head from 'next/head'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'
import { IPosts, IProfile, ITags } from '../../@types/generated/contentful'

export default function TaggedPosts({ tag, posts, profile }: {
  tag: ITags
  posts: IPosts[],
  profile: IProfile
}) {
  return (
    <>
      <Head>
        <title>&quot;{tag.fields.name}&quot;のタグが付いた記事|U-DAYS</title>
      </Head>
      <Header />
      <PostList
        heading={`"${tag.fields.name}"のタグが付いた記事`}
        posts={posts}
        profile={profile}
      />
      <Footer />
    </>
  )
}
