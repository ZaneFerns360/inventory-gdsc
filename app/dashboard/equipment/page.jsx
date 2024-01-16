'use client'
import React, { useState } from 'react'
import { getEquipment } from './getEquipement'
import { PiPlusCircleBold } from 'react-icons/pi'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { FaExchangeAlt, FaRegTrashAlt } from 'react-icons/fa'
import Link from 'next/link'

const Page = () => {
  const [equipmentList, setEquipmentList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [roomName, setRoomName] = useState('')
  const [department, setDepartment] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const fetchEquipment = async () => {
    try {
      const records = await getEquipment(
        currentPage,
        searchTerm,
        roomName,
        department
      )
      setEquipmentList(records)
    } catch (err) {
      console.error(err)
      // Handle the error appropriately for your application
    }
  }

  return (
    <div className="flex flex-col bg-slate-50 py-8">
      <div className="flex items-center justify-center py-2">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1)
            }
          }}
          className="mx-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <GrLinkPrevious className="mx-2" />
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="mx-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <GrLinkNext className="mx-2" />
        </button>
      </div>

      <div className="mx-4 my-2 flex flex-col items-center justify-center rounded-xl border-2 bg-slate-100 sm:flex-row">
        <div className="px-4 py-2 sm:mr-4">
          <input
            type="text"
            placeholder="Search by item name"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="my-2 rounded-xl border-2 px-4 py-2"
          />
        </div>
        <div className="px-4 py-2 sm:mr-4">
          <input
            type="text"
            placeholder="Search by room number"
            onChange={(e) => setRoomName(e.target.value)}
            className="my-2 rounded-xl border-2 px-4 py-2"
          />
        </div>
        <div className="px-4 py-2 sm:mr-4">
          <input
            type="text"
            placeholder="Search by Department"
            onChange={(e) => setDepartment(e.target.value)}
            className="my-2 rounded-xl border-2 px-4 py-2"
          />
          <button onClick={fetchEquipment}>Fetch Equipment</button>
        </div>
        <div className="px-4 py-2">
          <Link
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
            href="/dashboard/equipment/edit"
          >
            {/* Heroicons - Plus Solid */}
            <PiPlusCircleBold className="h-5 w-5 text-white" />
            <span>Add Equipment</span>
          </Link>
        </div>
      </div>

      {equipmentList.map((equipment) => (
        <div
          key={equipment.id}
          className="mx-4 my-2 flex-col rounded-xl border-2 p-4 sm:flex"
        >
          <h2 className="mb-2 text-lg font-bold">{equipment.id}</h2>

          <h2 className="mb-2 text-lg font-bold">{equipment.item_name}</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
            </div>
            <div className="flex items-center">
              <Link
                href={`/dashboard/loans/${equipment.id}`}
                className="bg-072140 flex items-center rounded border border-black bg-blue-700 px-4 py-1 font-bold text-white hover:bg-blue-500"
              >
                <FaExchangeAlt className="mx-2" />
                Loan
              </Link>
              <button className="bg-072140 ml-4 flex items-center rounded border border-black bg-red-600 px-4 py-1 font-bold text-white hover:bg-red-700">
                <FaRegTrashAlt className="mx-2" />
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
