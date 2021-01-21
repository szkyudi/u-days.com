import { css } from '@emotion/react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkedCard from '../molecules/LinkedCard'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const main = css`
  ${utils.contianer}
  margin-top: ${variables.space.lg};
  margin-bottom: ${variables.space.xl};
  color: ${variables.color.onBackground};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-top: ${variables.space.xl};
    margin-bottom: ${variables.space.xxl};
  }
`

const title = css`
  margin: ${variables.space.lg} 0 ${variables.space.md};
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`

export default function Search({ posts, keyword }: {
  posts: Post[]
  keyword: string
}) {
  const havePosts = Object.keys(posts).length > 0 ? true : false;
  return (
    <>
      <Head>
        <title>u-days｜とあるWebエンジニアのつぶやき</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>"{ keyword }"の検索結果</h2>
        {posts.map(({ id, publishedAt, title }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))
        }
        {havePosts || <p>検索結果に該当する記事が見つかりませんでした。</p>}
      </main>
      <Footer />
    </>
  )
}