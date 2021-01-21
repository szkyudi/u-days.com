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
  margin-top: ${variables.space.lg};
  margin-bottom: ${variables.space.xl};
  color: ${variables.color.onBackground};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-top: ${variables.space.xl};
    margin-bottom: ${variables.space.xxl};
  }
`

const postHeader = css`
  margin-bottom: ${variables.space.sm};
`

const postTitle = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`

const postTags = css`
  margin-top: ${variables.space.md};
`

const postImg = css`
  display: block;
  width: 100%;
  margin-top: ${variables.space.md};
`

const postDate = css`
  font-size: 14px;
  margin-top: ${variables.space.md};
`

const postContent = css`
  line-height: 1.8;
  h2, h3, h4, h5, h6 {
    margin: 1.8em 0 .6em;
    font-weight: bold;
  }
  h2 {
    font-size: 24px;
    border-bottom: 1px solid ${variables.color.textMuted};
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 16px;
  }
  p + p {
    margin-top: .6em;
  }
  a {
    color: ${variables.color.primaryVariant};
    &:hover {
      text-decoration: underline;
    }
  }
  ul, ol {
    margin: 1em 0;
    padding: 0 0 0 1.5em;
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

export default function Post({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title}｜u-days</title>
      </Head>
      <Header />
      <main>
        <section css={section}>
          <header css={postHeader}>
            <h1 css={postTitle}>{post.title}</h1>
            <span css={postDate}>
              <Date dateString={post.publishedAt} />
            </span>
            <div css={postTags}>
              {post.tags ? post.tags.map((tag: Tag) => (
                <Tag key={tag.slug} slug={tag.slug}>{tag.name}</Tag>
              )) : ''}
            </div>
            {post.thumbnail ? <img css={postImg} src={post.thumbnail.url} alt={post.thumbnail.alt} /> : ''}
          </header>
          <div css={postContent} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </section>
      </main>
      <Footer />
    </>
  )
}