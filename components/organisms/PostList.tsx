import { css } from '@emotion/react'
import LinkedCard from '../molecules/LinkedCard'
import Profile from '../molecules/Profile'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import { IPosts, IProfile } from '../../@types/generated/contentful'



export default function PostList({ heading, posts, profile }: {
  heading: string,
  posts: IPosts[],
  profile: IProfile
}) {
  const havePosts = Object.keys(posts).length > 0 ? true : false;
  return (
    <>
      <main css={styles.main}>
        <h2 css={styles.title}>{heading}</h2>
        {posts.map(({ sys, fields }) => (
          <LinkedCard key={sys.id} href={`/posts/${sys.id}`} title={fields.title} date={fields.publishedAt} />
        ))}
        {havePosts || <p>記事が見つかりませんでした。</p>}
      </main>
      <aside css={styles.aside}>
        <h2 css={styles.subTitle}>運営者プロフィール</h2>
        <Profile data={profile} />
      </aside>
    </>
  )
}

const styles = {
  main: css`
    ${utils.contianer}
    margin-top: ${variables.space.lg};
    margin-bottom: ${variables.space.lg};
    @media (min-width: ${variables.breakpoints.lg}px) {
      margin-top: ${variables.space.xl};
      margin-bottom: ${variables.space.xl};
    }
  `,
  title: css`
    margin-bottom: ${variables.space.md};
    font-size: 24px;
    font-weight: bold;
    color: ${variables.color.onBackground};
  `,
  subTitle: css`
    margin-bottom: ${variables.space.md};
    font-size: 20px;
    font-weight: bold;
    color: ${variables.color.onBackground};
  `,
  aside: css`
    ${utils.contianer}
    margin-bottom: ${variables.space.lg};
    @media (min-width: ${variables.breakpoints.lg}px) {
      margin-bottom: ${variables.space.xl};
    }
  `
}
