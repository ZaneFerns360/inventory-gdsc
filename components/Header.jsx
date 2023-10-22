'use client'
import React from 'react'
import Logo from '../public/assets/Fr.CRCE_name.png'
import Image from 'next/image'
import Link from 'next/link'
import { pb } from '@utils/pocketbase'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Header = () => {
  const router = useRouter()

  const signOut = async () => {
    await pb.authStore.clear()
    Cookies.remove('pb_auth')
    await router.push('/')
  }
  return (
    <header className="w-100 md:px-auto bg-[#072140] px-4 lg:px-8 lg:py-2">
      <div className="container mx-auto flex h-28 flex-wrap items-center justify-between md:h-16 md:flex-nowrap md:px-4">
        {/* Logo */}
        <div className="md:order-1">
          <div className="title-font mx-2 mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width="100"
                height="100"
                className="mx-2 my-2 lg:mx-5"
                priority
              />
            </Link>
            <div className="w-full items-center justify-items-center">
              <span className="mx-10 hidden items-center justify-center text-white  lg:inline lg:text-3xl ">
                Inventory Management
              </span>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-3">
          <button
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-gray-50 hover:bg-indigo-600"
            onClick={signOut}
          >
            {/* Heroicons - Login Solid */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Log out</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
