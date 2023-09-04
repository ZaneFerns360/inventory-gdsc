import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/assets/Fr.CRCE_name.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="fixed h-auto w-full bg-[#0B3568]">
      <div className="hidden h-40 bg-[#072140] py-5 text-center font-serif text-3xl text-white shadow-2xl sm:block">
        <ul>
          <li>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width="150"
                height="60"
                className=" ml-10 mt-5"
                priority
              />
            </Link>
          </li>
          <li className="-mt-14 text-center font-serif text-4xl text-white ">
            Inventory Management System
          </li>
          <Link href="/login">
            <li className="-mt-9 mr-20 text-right text-2xl text-white hover:underline">
              Log Out
            </li>
          </Link>
        </ul>
      </div>
      <div className=" flex h-auto w-full items-center justify-around py-8 shadow-lg">
        <div className="hidden sm:flex">
          <ul className="hidden space-x-40 font-serif text-white sm:flex">
            <Link href="/dashboard/departments">
              <li className="-ml-15 text-xl uppercase hover:underline">
                Dashboard
              </li>
            </Link>
            <Link href="/dashboard/departments">
              <li className="ml-20 text-xl uppercase hover:underline">
                Departments
              </li>
            </Link>
            <Link href="/dashboard/equipment">
              <li className="ml-20 text-xl uppercase hover:underline">
                Equipment
              </li>
            </Link>
            <Link href="/dashboard/rooms">
              <li className="ml-20 text-xl uppercase hover:underline">Rooms</li>
            </Link>
            <Link href="/dashboard/loans">
              <li className="ml-20 text-xl uppercase hover:underline">Loans</li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="-mr-40 cursor-pointer justify-end pl-24 sm:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 h-screen w-[100%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:hidden'
            : 'left[-100%] ease in fixed top-0 p-10 duration-500'
        }
      >
        <div
          className={
            menuOpen ? ' flex w-full items-center justify-end' : 'hidden'
          }
        >
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose />
          </div>
        </div>
        <div
          className={menuOpen ? 'flex-col py-4 text-center text-xl' : 'hidden'}
        >
          <ul>
            <Link href="/dashboard">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Dashboard
              </li>
            </Link>
            <Link href="/departments">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Departments
              </li>
            </Link>
            <Link href="/equipment">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Equipment
              </li>
            </Link>
            <Link href="/rooms">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Rooms
              </li>
            </Link>
            <Link href="/loans">
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
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
