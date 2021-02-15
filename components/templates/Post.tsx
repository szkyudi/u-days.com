import { css } from '@emotion/react'
import Head from 'next/head'
import Paper from '../atoms/Paper'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Post from '../organisms/Post'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

const main = css`
  ${utils.contianer}
  margin-top: ${variables.space.md};
  margin-bottom: ${variables.space.md};
  @media (min-width: ${variables.breakpoints.md}px) {
    margin-top: ${variables.space.lg};
    margin-bottom: ${variables.space.lg};
  }
`

export default function PostTemplate({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header />
      <main css={main}>
        <section>
          <Paper>
            <Post post={post} />
          </Paper>
        </section>
      </main>
      <Footer />
    </>
  )
}