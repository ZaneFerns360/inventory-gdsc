'use client'
import Header from '@components/Header'
import Navbar from '@components/NavBar'


function DashLayout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      {children}
    </div>
  )
}

export default DashLayout
