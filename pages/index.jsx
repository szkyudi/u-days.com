/** @jsx jsx */
import Head from 'next/head'
import Link from 'next/link'
import {jsx, css } from '@emotion/core'
import Layout from '../components/layout'
import PostCard from '../components/postCard'
import Title from '../components/title'
import { getSortedPostsData } from '../lib/posts'
import variables from '../lib/styles/variables'
import utils from '../lib/styles/utils'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
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

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>u-days｜とあるWebエンジニアのつぶやき</title>
      </Head>
      <main css={main}>
        <Title css={title}>Blog</Title>
        {allPostsData.map(({ id, publishedAt, title }) => (
          <Link key={id} href={`/posts/${id}`} passHref>
            <PostCard publishedAt={publishedAt} title={title} />
          </Link>
        ))}
      </main>
    </Layout>
  )
}