import { css } from '@emotion/react'
import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import LinkedCard from '../molecules/LinkedCard'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
const main = css`
  ${utils.contianer}
  margin-top: ${variables.space.lg};
  margin-bottom: ${variables.space.lg};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-top: ${variables.space.xl};
    margin-bottom: ${variables.space.xl};
  }
`

const title = css`
  margin-bottom: ${variables.space.md};
  font-size: 24px;
  font-weight: bold;
  color: ${variables.color.onBackground};
`

export default function Home({ posts }: { posts: Post[]}) {
  return (
    <>
      <Head>
        <title>{config.title}{config.titleSeperator}{config.subtitle}</title>
      </Head>
      <Header />
      <main css={main}>
        <h2 css={title}>新着記事</h2>
        {posts.map(({ id, publishedAt, title }) => (
          <LinkedCard key={id} href={`/posts/${id}`} title={title} date={publishedAt} />
        ))}
      </main>
      <Footer />
    </>
  )
}