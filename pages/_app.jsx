import { Global, css } from '@emotion/core'
import destyle from 'destyle.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={css`${destyle}`} />
      <Component {...pageProps} />
    </>
  )
}