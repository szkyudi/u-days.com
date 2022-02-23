import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'
import { IPage } from '../../@types/generated/contentful';
import { Markdown } from '../molecules/Markdown';

export default function Page({ page }: { page: IPage }) {
  return (
    <>
      <header css={styles.header}>
        <h1 css={styles.title}>{page.fields.title}</h1>
      </header>
      <Markdown css={styles.content}>
        {page.fields.body}
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
  content: postContent
}
