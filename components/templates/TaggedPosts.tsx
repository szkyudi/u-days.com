import { css } from '@emotion/react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkedCard from '../molecules/LinkedCard'
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

export default function TaggedPosts({ tag, posts }: {
  tag: Tag
  posts: Post[]
}) {
  return (
    <>
      <Head>
        <title>"{tag.name}"のタグが付いた記事｜u-days</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>"{tag.name}"のタグが付いた記事</h2>
        {posts.map(({ id, title, publishedAt }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))}
      </main>
      <Footer />
    </>
  )
}