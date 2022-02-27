import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { IPage } from '../@types/generated/contentful'
import PageTemplate from '../components/templates/Page'
import { getAllPageSlugs, getPageData, getPreviewPageData } from '../lib/pages'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPageSlugs()
  return {
    paths,
    fallback: true
  }
}

type Params = {
  slug: string
}
export const getStaticProps: GetStaticProps = async ({ params, preview = false }: GetStaticPropsContext<Params>) => {
  const page = preview ? await getPreviewPageData(params.slug) : await getPageData(params.slug)
  if (page === undefined) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      page,
      preview,
    }
  }
}

export default function Page({ page }: { page: IPage }) {
  return <PageTemplate page={page} />
}
