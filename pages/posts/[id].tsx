import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { IPosts, IProfile } from '../../@types/generated/contentful'
import PostTemplate from '../../components/templates/Post'
import { getAllPostsIds, getPostData, getPreviewPostData } from '../../lib/posts'
import { getProfileData } from '../../lib/profile'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

type Params = {
  id: string
}
export const getStaticProps: GetStaticProps = async ({ params, preview = false }: GetStaticPropsContext<Params>) => {
  const post = preview ? await getPreviewPostData(params.id) : await getPostData(params.id)
  const profile = await getProfileData()

  if (post === undefined) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post,
      profile,
      preview,
    },
    revalidate: 1,
  }
}

export default function Post({ post, profile }: {
  post: IPosts,
  profile: IProfile
}) {
  return <PostTemplate post={post} profile={profile}/>
}
