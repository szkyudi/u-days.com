/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import variables from '../lib/styles/variables'
import Date from './atoms/Date'

const card = css`
  display: block;
  padding: 16px;
  background: ${variables.color.surface};
  box-shadow: ${variables.shadow.dp1};
  transition: .2s;
  &:hover {
    box-shadow: ${variables.shadow.dp4};
  }
  & + & {
    margin-top: 16px;
  }
`

const cardTitle = css`
  font-size: 14px;
  line-height: 1.4;
  color: ${variables.color.onSurface};
`

const cardDate = css`
  font-size: 12px;
  margin-top: 12px;
`

const PostCard = React.forwardRef(({ onClick, href, publishedAt, title }, ref) => {
  return (
    <a href={href} onClick={onClick} css={card}>
      <h3 css={cardTitle}>{title}</h3>
      <Date css={cardDate} dateString={publishedAt} />
    </a>
  )
})

export default PostCard