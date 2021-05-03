import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'
import postContent from '../../lib/styles/postContent'

const header = css`
  margin-bottom: ${variables.space.sm};
`

const title = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`

const content = postContent

export default function Page({ page }: { page: Page }) {
  return (
    <>
      <header css={header}>
        <h1 css={title}>{page.title}</h1>
      </header>
      <div css={content} dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
    </>
  )
}