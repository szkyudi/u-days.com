import { GetStaticProps } from 'next'
import { IExternalPost, IPosts, IProfile } from '../@types/generated/contentful'
import HomeTemplate from '../components/templates/Home'
import { getExternalPostsData } from '../lib/externalPosts'
import { getSortedPostsData } from '../lib/posts'
import { getProfileData } from '../lib/profile'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData()
  const externalPosts = await getExternalPostsData()
  const profile = await getProfileData()
  return {
    props: {
      posts,
      externalPosts,
      profile
    }
  }
}

export default function Home(props: {
  posts: IPosts[],
  externalPosts: IExternalPost[],
  profile: IProfile
}) {
  return <HomeTemplate posts={props.posts} externalPosts={props.externalPosts} profile={props.profile} />
}
