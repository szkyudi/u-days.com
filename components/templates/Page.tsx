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
import { Seo } from '../organisms/Seo'
import { useRouter } from 'next/router'

export default function PageTemplate({ page }: { page: IPage }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <Seo
          title={page.fields.title + config.titleSeperator + config.title}
          url={config.siteUrl + router.asPath}
        />
      </Head>
      <Header />
      <section css={styles.section}>
        <Paper>
          <Page page={page} />
        </Paper>
      </section>
      <Footer />
    </>
  )
}

const styles = {
  section: css`
    ${utils.contianer}
    margin-top: ${variables.space.md};
    margin-bottom: ${variables.space.md};
    color: ${variables.color.onBackground};
    @media (min-width: ${variables.breakpoints.lg}px) {
      margin-top: ${variables.space.lg};
      margin-bottom: ${variables.space.lg};
    }
  `
}
