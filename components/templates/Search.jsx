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

export default function Search({ allPostsData, keyword }) {
  const havePosts = Object.keys(allPostsData).length > 0 ? true : false;
  return (
    <>
      <Head>
        <title>u-days｜とあるWebエンジニアのつぶやき</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>"{ keyword }"の検索結果</h2>
        {allPostsData.map(({ id, publishedAt, title }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))
        }
        {havePosts || <p>検索結果に該当する記事が見つかりませんでした。</p>}
      </main>
      <Footer />
    </>
  )
}