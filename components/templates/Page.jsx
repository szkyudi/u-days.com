/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'

const section = css`
  ${utils.contianer}
  color: ${variables.color.onBackground};
`

const postHeader = css`
  margin-top: 24px;
  margin-bottom: 48px;
`

const postTitle = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`

const postContent = css`
  line-height: 1.8;
  h2, h3, h4, h5, h6 {
    margin: 2em 0 8px;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
  p + p {
    margin-top: 1em;
  }
  a {
    color: ${variables.color.primaryVariant};
    &:hover {
      text-decoration: underline;
    }
  }
  ul, ol {
    padding: 1em 0 1em 1.5em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  strong, b {
    font-weight: bold;
  }
  img {
    display: block;
    max-width: 100%;
    max-height: 300px;
    margin: 1em 0;
    @media screen and (min-width: ${variables.breakpoints.md}px) {
      max-height: 600px;
    }
  }
`

export default function Page({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}｜u-days</title>
      </Head>
      <Header />
      <section css={section}>
        <header css={postHeader}>
          <h1 css={postTitle}>{pageData.title}</h1>
        </header>
        <div css={postContent} dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </section>
      <Footer />
    </>
  )
}