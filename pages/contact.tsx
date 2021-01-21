import { GetStaticProps } from 'next'
import PageTemplate from '../components/templates/Page'
import { getPageData } from '../lib/pages'

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageData('6ZYt6HImFR5SaZrX7ZO080')
  return {
    props: {
      page
    }
  }
}

export default function Page({ page }: { page: Page }) {
  return <PageTemplate page={page} />
}
