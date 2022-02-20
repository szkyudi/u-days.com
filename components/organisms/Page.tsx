import { css } from '@emotion/react'
import { useEffect, useRef } from 'react';
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'
import setAttributeToExternalLink from '../../lib/utils/setAttributeToExternalLink'
import { IPage } from '../../@types/generated/contentful';

const header = css`
  margin-bottom: ${variables.space.sm};
`

const title = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`

const content = postContent

export default function Page({ page }: { page: IPage }) {
  const contentDOM = useRef(null)
  useEffect(() => {
    setAttributeToExternalLink(contentDOM.current);
  })
  return (
    <>
      <header css={header}>
        <h1 css={title}>{page.fields.title}</h1>
      </header>
      <div ref={contentDOM} css={content} dangerouslySetInnerHTML={{ __html: page.fields.body }} />
    </>
  )
}
