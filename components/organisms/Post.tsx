import { css } from '@emotion/react'
import { useEffect, useRef } from 'react';
import Date from '../atoms/Date'
import Tag from '../atoms/Tag'
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'
import setAttributeToExternalLink from '../../lib/utils/setAttributeToExternalLink'
import { IPosts } from '../../@types/generated/contentful';

export default function Post({ post }: { post: IPosts }) {
  const contentDOM = useRef(null)
  useEffect(() => {
    setAttributeToExternalLink(contentDOM.current);
  })
  return (
    <>
      <header css={styles.header}>
        <h1 css={styles.title}>{post.fields.title}</h1>
        <span css={styles.date}>
          <Date dateString={post.fields.publishedAt} />
        </span>
        <div css={styles.tags}>
          {post.fields.tags ? post.fields.tags.map((tag) => (
            <Tag key={tag.fields.slug} slug={tag.fields.slug}>{tag.fields.name}</Tag>
          )) : ''}
        </div>
        {post.fields.thumbnail ? <img css={styles.img} src={post.fields.thumbnail.fields.file.url} alt={post.fields.thumbnail.fields.title} /> : ''}
      </header>
      <div ref={contentDOM} css={styles.content} dangerouslySetInnerHTML={{ __html: post.fields.body }} />
    </>
  )
}

const styles = {
  header: css`
    margin-bottom: ${variables.space.sm};
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.4;
  `,
  tags: css`
    margin-top: ${variables.space.md};
  `,
  img: css`
    display: block;
    width: 100%;
    margin-top: ${variables.space.md};
  `,
  date: css`
    font-size: 14px;
    font-style: italic;
    margin-top: ${variables.space.md};
  `,
  content: postContent
}
