import { GetStaticProps } from 'next'
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
  posts: Post[],
  profile: Profile
}) {
  return <HomeTemplate posts={props.posts} profile={props.profile} />
}