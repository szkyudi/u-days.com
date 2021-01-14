import { getTaggedPostsData } from '../../lib/posts'
import { getAllTagsIds, getTagData } from '../../lib/tags'
import TaggedPosts from '../../components/templates/TaggedPosts'


export async function getStaticPaths() {
  const paths = await getAllTagsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const tagData = await getTagData(params.slug)
  const taggedPostsData = await getTaggedPostsData(tagData.id)
  return {
    props: {
      tagData,
      taggedPostsData
    }
  }
}

export default function Home({ tagData, taggedPostsData }) {
  return <TaggedPosts tagData={tagData} taggedPostsData={taggedPostsData} />
}