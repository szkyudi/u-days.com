import { Global, css } from '@emotion/core'
import destyle from 'destyle.css'
import commonStyle from '../lib/styles/common'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={css`${destyle}`} />
      <Global styles={commonStyle} />
      <Component {...pageProps} />
    </>
  )
}