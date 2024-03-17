'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#0B3568] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-8">
        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="block text-white hover:text-gray-400 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.293 4.293a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-10-10a1 1 0 1 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 0 1 1.414 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H3zM3 9a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H3zm0 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H3z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`sm:flex ${
            isOpen ? 'block' : 'hidden'
          } mx-auto items-center text-center`}
        >
          <ul className="my-2 sm:flex lg:my-0 lg:space-x-16">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/equipment">Equipment</Link>
            </li>
            <li>
              <Link href="/dashboard/loans">Loans</Link>
            </li>
            <li>
              <Link href="/dashboard/rooms">Rooms</Link>
            </li>
            <li>
              <Link href="/dashboard/distribution">Distribution</Link>
            </li>
            <li>
              <Link href="/dashboard/inventory">Inventory</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
