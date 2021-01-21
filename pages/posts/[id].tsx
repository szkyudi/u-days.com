import { GetStaticProps, GetStaticPaths } from 'next'
import PostTemplate from '../../components/templates/Post'
import { getAllPostsIds, getPostData } from '../../lib/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: {
  params: {
    id: string
  }
}) => {
  const post = await getPostData(params.id)
  return {
    props: {
      post
    }
  }
}

export default function Post({ post }: { post: Post }) {
  return <PostTemplate post={post} />
}
