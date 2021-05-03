import { GetServerSideProps } from 'next'
import SearchTemplate from '../components/templates/Search'
import { getSortedPostsData } from '../lib/posts'
import { getProfileData } from '../lib/profile'

export const getServerSideProps: GetServerSideProps = async ({query}: {query: any}) => {
  const posts = await getSortedPostsData(query.keyword)
  const profile = await getProfileData()
  return {
    props: {
      keyword: query.keyword,
      posts,
      profile
    }
  }
}

export default function Search({ keyword, posts, profile }: {
  keyword: string,
  posts:Post[],
  profile: Profile
}) {
  return <SearchTemplate keyword={keyword} posts={posts} profile={profile} />
}