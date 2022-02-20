import { css } from '@emotion/react'
import Head from 'next/head'
import config from '../../lib/config'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Paper from '../../components/atoms/Paper'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import Page from '../../components/organisms/Page'
import { IPage } from '../../@types/generated/contentful'

const section = css`
  ${utils.contianer}
  margin-top: ${variables.space.md};
  margin-bottom: ${variables.space.md};
  color: ${variables.color.onBackground};
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin-top: ${variables.space.lg};
    margin-bottom: ${variables.space.lg};
  }
`

const postHeader = css`
  margin-bottom: ${variables.space.md};
`

const postTitle = css`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
`

const postContent = css`
  line-height: 1.8;
  h2, h3, h4, h5, h6 {
    margin: 2em 0 8px;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
  p + p {
    margin-top: 1em;
  }
  a {
    color: ${variables.color.primaryVariant};
    &:hover {
      text-decoration: underline;
    }
  }
  ul, ol {
    padding: 1em 0 1em 1.5em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  strong, b {
    font-weight: bold;
  }
  img {
    display: block;
    max-width: 100%;
    max-height: 300px;
    margin: 1em 0;
    @media screen and (min-width: ${variables.breakpoints.md}px) {
      max-height: 600px;
    }
  }
`

export default function PageTemplate({ page }: { page: IPage }) {
  return (
    <>
      <Head>
        <title>{page.fields.title}{config.titleSeperator}{config.title}</title>
      </Head>
      <Header />
      <section css={section}>
        <Paper>
          <Page page={page} />
        </Paper>
      </section>
      <Footer />
    </>
  )
}
