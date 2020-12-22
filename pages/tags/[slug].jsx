/** @jsx jsx */
import Head from 'next/head'
import Link from 'next/link'
import {jsx, css } from '@emotion/core'
import Layout from '../../components/layout'
import PostCard from '../../components/postCard'
import Title from '../../components/title'
import { getTaggedPostsData } from '../../lib/posts'
import { getAllTagsIds, getTagData } from '../../lib/tags'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'


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

const title = css`
  margin-top: ${variables.margin.lg};
  margin-bottom: ${variables.margin.md};
`

const main = css`
  ${utils.contianer}
`

export default function Home({ tagData, taggedPostsData }) {
  return (
    <Layout>
      <Head>
        <title>"{tagData.name}"のタグが付いた記事｜u-days</title>
      </Head>
      <main css={main}>
        <Title css={title}>"{tagData.name}"のタグが付いた記事</Title>
        {taggedPostsData.map(({ id, publishedAt, title }) => (
          <Link key={id} href={`/posts/${id}`} passHref>
            <PostCard publishedAt={publishedAt} title={title} />
          </Link>
        ))}
      </main>
    </Layout>
  )
}