/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PageTemplate from '../components/templates/Page'
import { getPageData } from '../lib/pages'

export async function getStaticProps() {
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
