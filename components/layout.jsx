import Header from './organisms/Header'
import Footer from './organisms/Footer'

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