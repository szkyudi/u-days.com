import { Global, css } from '@emotion/core'
import destyle from 'destyle.css'
import commonStyle from '../lib/styles/common.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={css`${destyle}`} />
      <Global styles={css`${commonStyle}`} />
      <Component {...pageProps} />
    </>
  )
}