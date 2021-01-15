import { GetServerSideProps } from 'next'
import SearchTemplate from '../components/templates/Search'
import { getSortedPostsData } from '../lib/posts'

export const getServerSideProps: GetServerSideProps = async ({query}: {query: any}) => {
  const allPostsData = await getSortedPostsData(query.keyword)
  return {
    props: {
      allPostsData,
      keyword: query.keyword
    }
  }
}

export default function Search({ allPostsData, keyword } : {
  allPostsData: {
    title: string
    publishedAt: string
    id: string
  }
  keyword: string
}) {
  return <SearchTemplate allPostsData={allPostsData} keyword={keyword} />
}