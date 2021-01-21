import { css } from '@emotion/react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkedCard from '../molecules/LinkedCard'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const title = css`
  margin: ${variables.space.lg} 0 ${variables.space.md};
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`
const main = css`
  ${utils.contianer}
`

export default function Home({ posts }: { posts: Post[]}) {
  return (
    <>
      <Head>
        <title>u-days｜とあるWebエンジニアのつぶやき</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>新着記事一覧</h2>
        {posts.map(({ id, publishedAt, title }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))}
      </main>
      <Footer />
    </>
  )
}