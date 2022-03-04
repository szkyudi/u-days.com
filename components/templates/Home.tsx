import Head from 'next/head'
import config from '../../lib/config'
import Header from '../organisms/Header'
import PostList from '../organisms/PostList'
import Footer from '../organisms/Footer'
import { IPosts, IProfile } from '../../@types/generated/contentful'
import { Seo } from '../organisms/Seo'
import { useRouter } from 'next/router'

export default function Home({ posts, profile }: {
  posts: IPosts[],
  profile: IProfile
}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <Seo
          title={config.title + config.titleSeperator + config.subtitle}
          url={router.asPath}
        />
      </Head>
      <Header />
      <PostList
        heading="新着記事"
        posts={posts}
        profile={profile}
      />
      <Footer />
    </>
  )
}
