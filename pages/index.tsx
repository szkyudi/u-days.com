import { GetStaticProps } from 'next'
import { IPosts, IProfile } from '../@types/generated/contentful'
import HomeTemplate from '../components/templates/Home'
import { getSortedPostsData } from '../lib/posts'
import { getProfileData } from '../lib/profile'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData()
  const profile = await getProfileData()
  return {
    props: {
      posts,
      profile
    }
  }
}

export default function Home(props: {
  posts: IPosts[],
  profile: IProfile
}) {
  return <HomeTemplate posts={props.posts} profile={props.profile} />
}
