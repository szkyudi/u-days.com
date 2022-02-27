import { css } from '@emotion/react'
import Date from '../atoms/Date'
import Tag from '../atoms/Tag'
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'
import { IPosts } from '../../@types/generated/contentful';
import { Markdown } from '../molecules/Markdown';
import Image from 'next/image'

export default function Post({ post }: { post: IPosts }) {
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
        {post.fields.thumbnail &&
          <div css={styles.imgWrapper}>
            <Image
              width={post.fields.thumbnail.fields.file.details.image.width}
              height={post.fields.thumbnail.fields.file.details.image.height}
              src={`http:${post.fields.thumbnail.fields.file.url}`}
              alt={post.fields.thumbnail.fields.title}
            />
          </div>
        }
      </header>
      <Markdown
        css={styles.content}>
        {post.fields.body}
      </Markdown>
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
  imgWrapper: css`
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
