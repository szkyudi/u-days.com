import { GetStaticProps } from 'next'
import PageTemplate from '../components/templates/Page'
import { getPageData } from '../lib/pages'

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData('6ZYt6HImFR5SaZrX7ZO080')
  return {
    props: {
      pageData
    }
  }
}

export default function Page({ pageData }) {
  return <PageTemplate pageData={pageData} />
}
