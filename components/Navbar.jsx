import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/Fr.CRCE_name.png'
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false) 
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
 
    <nav className='fixed w-full h-auto bg-[#0B3568]'>
        <div className='hidden sm:block bg-[#072140] text-white text-center text-3xl font-serif h-40 py-5 shadow-2xl'>
       <ul>
       <li>
        <Link href='/'>
        <Image
      src={Logo}
      alt="Logo"
      width="150"
      height="60"
      className=' ml-10 mt-5'
      priority
      />
      </Link>
      </li>
         <li className='-mt-14 text-white text-center text-4xl font-serif '>Inventory Management System</li>
         <Link href='/login'><li className='text-white text-right text-2xl mr-20 -mt-9 hover:underline'>Log Out</li>
         </Link>
         </ul>

       </div>
          <div className=' flex justify-around items-center h-auto w-full py-8 shadow-lg'>
            <div className='hidden sm:flex'>
              <ul className='hidden sm:flex text-white font-serif space-x-40'>
                <Link href='/dashboard'>
                    <li className='-ml-15 uppercase hover:underline text-xl'>Dashboard</li>
                </Link>
                <Link href='/departments'>
                    <li className='ml-20 uppercase hover:underline text-xl'>Departments</li>
                </Link>
                <Link href='/equipment'>
                    <li className='ml-20 uppercase hover:underline text-xl'>Equipment</li>
                </Link>
                <Link href='/rooms'>
                    <li className='ml-20 uppercase hover:underline text-xl'>Rooms</li>
                </Link>
                <Link href='/loans'>
                    <li className='ml-20 uppercase hover:underline text-xl'>Loans</li>
                </Link>       
             </ul>
           </div>
           <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24 -mr-40 justify-end'>
             <AiOutlineMenu size={25}/>
            </div> 
           </div>
        <div className={
          menuOpen?'fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          :'fixed left[-100%] top-0 p-10 ease in duration-500'
        }>
          <div className={menuOpen?' flex w-full items-center justify-end':'hidden'} >
            <div onClick={handleNav} className='cursor-pointer'>
             <AiOutlineClose/>
            </div>
         </div>
         <div className={menuOpen?'flex-col py-4 text-center text-xl':'hidden'}>
            <ul>
              <Link href='/dashboard'>
                <li onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer'>
                  Dashboard
                </li>
              </Link>
              <Link href='/departments'>
                <li onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer'>
                  Departments
                </li>
              </Link>
              <Link href='/equipment'>
                <li onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer'>
                  Equipment
                </li>
              </Link>
              <Link href='/rooms'>
                <li onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer'>
                  Rooms
                </li>
              </Link>
              <Link href='/loans'>
                <li onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer'>
                  Loans
                </li>
              </Link>
            </ul>
            </div>
          </div>
    </nav>
  )
}

export default Navbar