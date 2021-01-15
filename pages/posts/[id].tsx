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
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }: {
  postData: {
    id: string
    title: string
    contentHtml: string
    publishedAt: string
    thumbnail: {
      url: string
      alt: string
    }
    tags: {
      slug: string
      name: string
    }[]
  }
}) {
  return <PostTemplate postData={postData} />
}
