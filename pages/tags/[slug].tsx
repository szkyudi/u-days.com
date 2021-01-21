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
  const tag = await getTagData(params.slug)
  const posts = await getTaggedPostsData(tag.id)
  return {
    props: {
      tag,
      posts
    }
  }
}

export default function Home({ tag, posts }: {
  tag: Tag
  posts: Post[]
}) {
  return <TaggedPosts tag={tag} posts={posts} />
}