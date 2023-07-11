import { FC, ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Breadcrumb from './Breadcrumb/Breadcrumb'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mx-8">
        <Breadcrumb />
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
