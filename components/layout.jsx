import Head from 'next/head'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

const name = 'Yudai'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}