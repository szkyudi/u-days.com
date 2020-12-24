/** @jsx jsx */
import Head from 'next/head'
import {jsx, css } from '@emotion/core'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkedCard from '../molecules/LinkedCard'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const title = css`
  margin: ${variables.margin.lg} 0 ${variables.margin.md};
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`
const main = css`
  ${utils.contianer}
`

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>u-days｜とあるWebエンジニアのつぶやき</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>Blog</h2>
        {allPostsData.map(({ id, publishedAt, title }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))}
      </main>
      <Footer />
    </>
  )
}