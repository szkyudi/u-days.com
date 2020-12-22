/** @jsx jsx */
import Head from 'next/head'
import Layout from '../../components/layout'
import Post from '../../components/post'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { jsx, css } from '@emotion/core'

export default function PostPage({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main>
        <Post postData={postData} />
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}