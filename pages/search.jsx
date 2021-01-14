import SearchTemplate from '../components/templates/Search'
import { getSortedPostsData } from '../lib/posts'

export async function getServerSideProps({query}) {
  const allPostsData = await getSortedPostsData(query.keyword)
  return {
    props: {
      allPostsData,
      keyword: query.keyword
    }
  }
}

export default function Search({ allPostsData, keyword }) {
  return <SearchTemplate allPostsData={allPostsData} keyword={keyword} />
}