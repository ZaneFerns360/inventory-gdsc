'use client'
import Cards from '@components/Cards'
import Header from '@components/Header'
import Navbar from '@components/NavBar'


function DashLayout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Cards />
      {children}
    </div>
  )
}

export default DashLayout
