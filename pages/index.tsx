import { GetStaticProps } from 'next'
import HomeTemplate from '../components/templates/Home'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return <HomeTemplate allPostsData={allPostsData} />
}