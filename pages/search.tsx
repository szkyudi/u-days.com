import { GetServerSideProps } from 'next'
import { IPosts, IProfile } from '../@types/generated/contentful'
import SearchTemplate from '../components/templates/Search'
import { getSortedPostsData } from '../lib/posts'
import { getProfileData } from '../lib/profile'

export const getServerSideProps: GetServerSideProps = async ({query}: {query: any}) => {
  const posts = await getSortedPostsData(query.keyword)
  const profile = await getProfileData()
  if (query.keyword) {
    return {
      props: {
        keyword: query.keyword,
        posts,
        profile
      }
    }
  } else {
    return {
      notFound: true
    }
  }
}

export default function Search({ keyword, posts, profile }: {
  keyword: string,
  posts: IPosts[],
  profile: IProfile
}) {
  return <SearchTemplate keyword={keyword} posts={posts} profile={profile} />
}
