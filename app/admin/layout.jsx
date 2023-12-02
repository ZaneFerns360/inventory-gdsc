import Cards from '@components/Cards'
import Header from '@components/Header'
import Navbar from '@components/NavBar'
import Footer from '@components/Footer'
import GuardedComponent from '@components/Redirect'

function DashLayout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      <GuardedComponent>{children}</GuardedComponent>
      <Footer />
    </div>
  )
}

export default DashLayout
