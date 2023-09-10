import '@style/global.css'
import { Inter, Poppins } from 'next/font/google'

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
        <main className="">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
