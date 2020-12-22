/** @jsx jsx */
import Head from 'next/head'
import Layout from '../components/layout'
import Page from '../components/page'
import { getPageData } from '../lib/pages'
import { jsx, css } from '@emotion/core'

export default function PagePage({ pageData }) {
  return (
    <Layout>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <main>
        <Page pageData={pageData} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const pageData = await getPageData('6ZYt6HImFR5SaZrX7ZO080')
  return {
    props: {
      pageData
    }
  }
}