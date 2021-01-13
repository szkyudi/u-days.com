/** @jsx jsx */
import Head from 'next/head'
import Link from 'next/link'
import {jsx, css } from '@emotion/core'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import LinkedCard from '../../components/molecules/LinkedCard'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const title = css`
  margin-top: ${variables.space.lg};
  margin-bottom: ${variables.space.md};
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`

const main = css`
  ${utils.contianer}
`

export default function Home({ tagData, taggedPostsData }) {
  return (
    <>
      <Head>
        <title>"{tagData.name}"のタグが付いた記事｜u-days</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>"{tagData.name}"のタグが付いた記事</h2>
        {taggedPostsData.map(({ id, title, publishedAt }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))}
      </main>
      <Footer />
    </>
  )
}