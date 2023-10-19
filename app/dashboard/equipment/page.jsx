'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { pb } from '@utils/pocketbase'
import Link from 'next/link'
const ITEMS_PER_PAGE = 20
const Page = () => {
  const [equipmentList, setEquipmentList] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [roomName, setRoomName] = useState('')
  const [department, setDepartment] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  pb.autoCancellation(false)
  useEffect(() => {
    const fetchEquipment = async () => {
      let filter = ''
      if (searchTerm) {
        filter += `item_name ~ "${searchTerm}"`
      }
      if (roomName) {
        filter += filter
          ? ` && room.room_id ~ "${roomName}"`
          : `room.room_id ~ "${roomName}"`
      }
      if (department) {
        filter += filter
          ? ` && room.department.dep_name ~ "${department}"`
          : `room.department.dep_name ~ "${department}"`
      }
      try {
        const records = await pb
          .collection('equipment')
          .getFullList({ filter, expand: 'room,room.department' })
        setEquipmentList(records)
      } catch (err) {
        console.error(err)
        // Handle the error appropriately for your application
      }
    }

    fetchEquipment()
  }, [searchTerm, roomName, department])

  const numPages = Math.ceil(equipmentList.length / ITEMS_PER_PAGE)

  // Get the equipment for the current page
  const currentEquipment = equipmentList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center pt-8">
        <button
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          className="mr-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="mr-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((old) => Math.min(old + 1, numPages))}
          className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

      <div className="mx-4 mt-2 flex flex-row items-center justify-center rounded border-2">
        <div className="px-4 pt-4">
          <input
            type="text"
            placeholder="Search by item name"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 rounded border-2 p-2"
          />
        </div>
        <div className="px-4 pt-4">
          <input
            type="text"
            placeholder="Search by room number"
            onChange={(e) => setRoomName(e.target.value)}
            className="mb-4 rounded border-2 p-2"
          />
        </div>
        <div className="px-4 pt-4">
          <input
            type="text"
            placeholder="Search by Department"
            onChange={(e) => setDepartment(e.target.value)}
            className="mb-4 rounded border-2 p-2"
          />
        </div>
        <div className="px-4">
          {' '}
          <Link
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-gray-50 hover:bg-indigo-600"
            href="/dashboard/equipment/edit"
          >
            {/* Heroicons - Plus Solid */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <span>Add Equipment</span>
          </Link>
        </div>
      </div>

      {currentEquipment.map((equipment) => (
        <div
          key={equipment.id}
          className="mx-4 my-2 flex flex-col rounded border-2 p-4"
        >
          <h2 className="mb-2 text-lg font-bold">{equipment.item_name}</h2>
          <div className="grid grid-cols-5 gap-3">
            <div>
              <p className="font-semibold">Brand: {equipment.brand}</p>
            </div>
            <div>
              <p className="font-semibold">Quantity: {equipment.quantity}</p>
            </div>
            <div>
              <p className="font-semibold">
                Department: {equipment.expand.room.expand.department.dep_name}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Room: {equipment.expand.room.room_id}
              </p>
            </div>
            <div>
              <p className="font-semibold">Status: {equipment.Status}</p>
            </div>
            <div>
              <p className="font-semibold">
                Scrapped: {equipment.isScrapped ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Loaned: {equipment.isLoaned ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                In Date:{' '}
                {!isNaN(Date.parse(equipment.date))
                  ? new Date(equipment.date).toISOString().split('T')[0]
                  : 'Invalid date'}
              </p>
              {/* Check if 'equipment.date' is a valid date before formatting */}
            </div>
            <div>
              <button className="bg-072140 rounded border border-black bg-blue-700 px-4 py-1 font-bold text-white">
                <Link href={`/dashboard/loans/pending/${equipment.id}`}>
                  Loan
                </Link>
              </button>
            </div>
            <div>
              <button className="bg-072140 rounded border border-black bg-red-700 px-4 py-1 font-bold text-white">
                Scrap
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
