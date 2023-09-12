import '@style/global.css'
import { Inter, Poppins } from 'next/font/google'
import Router from '@components/Router'

export const metadata = {
  title: 'Inventory Management',
  description: 'Manage Inventory of Fr.Crce, made by GDSC',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="">
          <div className="" />
        </div>
        <main className="">
          <Router>{children}</Router>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
