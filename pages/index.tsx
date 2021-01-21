import { GetStaticProps } from 'next'
import HomeTemplate from '../components/templates/Home'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }: { posts: Post[] }) {
  return <HomeTemplate posts={posts} />
}