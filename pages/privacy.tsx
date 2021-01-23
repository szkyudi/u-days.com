import { GetStaticProps } from 'next'
import PageTemplate from '../components/templates/Page'
import { getPageData } from '../lib/pages'

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageData('6zSqCryajtu1CjX97uNCQ8')
  return {
    props: {
      page
    }
  }
}

export default function Page({ page }: { page: Page }) {
  return <PageTemplate page={page} />
}
