/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import HomeTemplate from '../components/templates/Home'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
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