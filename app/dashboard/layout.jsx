import Cards from '@components/Cards'
import Header from '@components/Header'
import Navbar from '@components/NavBar'
import Footer from '@components/Footer'

function DashLayout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default DashLayout
