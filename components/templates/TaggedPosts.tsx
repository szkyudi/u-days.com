import Head from 'next/head'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'

export default function TaggedPosts({ tag, posts, profile }: {
  tag: Tag
  posts: Post[],
  profile: Profile
}) {
  return (
    <>
      <Head>
        <title>"{tag.name}"のタグが付いた記事｜U-DAYS</title>
      </Head>
      <Header />
      <PostList
        heading={`"${tag.name}"のタグが付いた記事`}
        posts={posts}
        profile={profile}
      />
      <Footer />
    </>
  )
}