import { GetStaticProps, GetStaticPaths } from 'next'
import { getTaggedPostsData } from '../../lib/posts'
import { getAllTagsIds, getTagData } from '../../lib/tags'
import TaggedPosts from '../../components/templates/TaggedPosts'
import { getProfileData } from '../../lib/profile'
import { IPosts, IProfile, ITags } from '../../@types/generated/contentful'


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTagsIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: {
  params: {
    slug: string
  }
}) => {
  const tag = await getTagData(params.slug)
  const posts = await getTaggedPostsData(tag.sys.id)
  const profile = await getProfileData()
  return {
    props: {
      tag,
      posts,
      profile
    }
  }
}

export default function Home({ tag, posts, profile }: {
  tag: ITags,
  posts: IPosts[],
  profile: IProfile
}) {
  return <TaggedPosts tag={tag} posts={posts} profile={profile} />
}
