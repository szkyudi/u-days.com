import { GetServerSideProps } from 'next'
import SearchTemplate from '../components/templates/Search'
import { getSortedPostsData } from '../lib/posts'

export const getServerSideProps: GetServerSideProps = async ({query}: {query: any}) => {
  const posts = await getSortedPostsData(query.keyword)
  return {
    props: {
      posts,
      keyword: query.keyword
    }
  }
}

export default function Search({ posts, keyword }: {
  posts:Post[]
  keyword: string
}) {
  return <SearchTemplate posts={posts} keyword={keyword} />
}