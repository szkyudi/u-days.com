import { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import NProgress from 'nprogress';
import Router from 'next/router';
//@ts-ignore
import destyle from 'destyle.css'
import commonStyle from '../lib/styles/common'
import nprogressStyle from '../lib/styles/nprogress'

NProgress.configure({
    minimum: 0.2,
    easing: 'ease',
    speed: 400,
    showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={[css`${destyle}`, nprogressStyle, commonStyle]} />
      <Component {...pageProps} />
    </>
  )
}