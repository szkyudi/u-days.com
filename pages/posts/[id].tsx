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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return <PostTemplate postData={postData} />
}
