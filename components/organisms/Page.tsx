import { css } from '@emotion/react'
import { useEffect, useRef } from 'react';
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'
import setAttributeToExternalLink from '../../lib/utils/setAttributeToExternalLink'
import { IPage } from '../../@types/generated/contentful';

export default function Page({ page }: { page: IPage }) {
  const contentDOM = useRef(null)
  useEffect(() => {
    setAttributeToExternalLink(contentDOM.current);
  })
  return (
    <>
      <header css={styles.header}>
        <h1 css={styles.title}>{page.fields.title}</h1>
      </header>
      <div ref={contentDOM} css={styles.content} dangerouslySetInnerHTML={{ __html: page.fields.body }} />
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
