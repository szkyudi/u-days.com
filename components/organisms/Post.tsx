import { css } from '@emotion/react'
import Date from '../atoms/Date'
import Tag from '../atoms/Tag'
import variables from '../../lib/styles/variables'

const header = css`
  margin-bottom: ${variables.space.sm};
`

const title = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`

const tags = css`
  margin-top: ${variables.space.md};
`

const img = css`
  display: block;
  width: 100%;
  margin-top: ${variables.space.md};
`

const date = css`
  font-size: 14px;
  font-style: italic;
  margin-top: ${variables.space.md};
`

const content = css`
  line-height: 1.8;
  h2, h3, h4, h5, h6 {
    margin: 1.8em 0 .6em;
    line-height: 1.5;
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
      <header css={header}>
        <h1 css={title}>{post.title}</h1>
        <span css={date}>
          <Date dateString={post.publishedAt} />
        </span>
        <div css={tags}>
          {post.tags ? post.tags.map((tag: Tag) => (
            <Tag key={tag.slug} slug={tag.slug}>{tag.name}</Tag>
          )) : ''}
        </div>
        {post.thumbnail ? <img css={img} src={post.thumbnail.url} alt={post.thumbnail.alt} /> : ''}
      </header>
      <div css={content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </>
  )
}