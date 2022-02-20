import { GetStaticProps } from 'next'
import { IPage } from '../@types/generated/contentful'
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

export default function Page({ page }: { page: IPage }) {
  return <PageTemplate page={page} />
}
