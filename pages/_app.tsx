import { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import NProgress from 'nprogress';
import Router from 'next/router';
//@ts-ignore
import destyle from 'destyle.css'
//@ts-ignore
import highlight from "highlight.js/styles/github.css";
import commonStyle from '../lib/styles/common'
import nprogressStyle from '../lib/styles/nprogress'
import { RecoilRoot } from 'recoil';
import { Seo } from '../components/organisms/Seo';

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
    <RecoilRoot>
      <Global styles={[css`${destyle}`, css`${highlight}`, nprogressStyle, commonStyle]} />
      <Seo />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
