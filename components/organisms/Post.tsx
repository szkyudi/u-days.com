import { css } from '@emotion/react'
import { useEffect, useRef } from 'react';
import Date from '../atoms/Date'
import Tag from '../atoms/Tag'
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'
import setAttributeToExternalLink from '../../lib/utils/setAttributeToExternalLink'

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

const content = postContent

export default function Post({ post }: { post: Post }) {
  const contentDOM = useRef(null)
  useEffect(() => {
    setAttributeToExternalLink(contentDOM.current);
  })
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
      <div ref={contentDOM} css={content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </>
  )
}