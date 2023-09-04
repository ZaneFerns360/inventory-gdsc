'use client'
import Navbar from '@components/Navbar'

function DashLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  )
}

export default DashLayout
