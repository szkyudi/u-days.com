import { css } from '@emotion/react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Date from '../atoms/Date'
import Tag from '../atoms/Tag'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'

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

const postTags = css`
  margin-top: 16px;
`

const postImg = css`
  display: block;
  width: 100%;
  margin-top: 16px;
`

const postDate = css`
  font-size: 14px;
  margin-top: 16px;
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

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}｜u-days</title>
      </Head>
      <Header />
      <main>
        <section css={section}>
          <header css={postHeader}>
            <h1 css={postTitle}>{postData.title}</h1>
            <Date css={postDate} dateString={postData.publishedAt} />
            <div css={postTags}>
              {postData.tags ? postData.tags.map(tag => (
                <Tag key={tag.slug} slug={tag.slug}>{tag.name}</Tag>
              )) : ''}
            </div>
            {postData.thumbnail ? <img css={postImg} src={postData.thumbnail.url} alt={postData.thumbnail.alt} /> : ''}
          </header>
          <div css={postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </main>
      <Footer />
    </>
  )
}