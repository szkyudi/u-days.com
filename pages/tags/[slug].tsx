import { GetStaticProps, GetStaticPaths } from 'next'
import { getTaggedPostsData } from '../../lib/posts'
import { getAllTagsIds, getTagData } from '../../lib/tags'
import TaggedPosts from '../../components/templates/TaggedPosts'


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
  const tagData = await getTagData(params.slug)
  const taggedPostsData = await getTaggedPostsData(tagData.id)
  return {
    props: {
      tagData,
      taggedPostsData
    }
  }
}

export default function Home({ tagData, taggedPostsData }: {
  tagData: {
    name: string
  }
  taggedPostsData: {
    id: string
    title: string
    publishedAt: string
  }[]
}) {
  return <TaggedPosts tagData={tagData} taggedPostsData={taggedPostsData} />
}